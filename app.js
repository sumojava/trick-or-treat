/* Plain scripts also work when index.html is opened directly from disk. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  if (!Array.isArray(globalThis.SPOTLIGHT_TOPICS)) {
    $("active-partner").textContent = "Question data could not load. Reload the page or check that all app files were uploaded.";
    $("trick-button").disabled = true;
    $("treat-button").disabled = true;
    return;
  }
  const general = SPOTLIGHT_TOPICS.flatMap((topic, topicIndex) =>
    ["trick", "treat"].flatMap((tone) =>
      ["business", "technical"].flatMap((audience) =>
        topic[tone][audience].map((text, index) => ({
          id: `general-${topicIndex}-${tone}-${audience}-${index}`,
          topic: topic.name, tone, audience, text, partner: null
        }))
      )
    )
  );
  const partners = Array.isArray(globalThis.SPOTLIGHT_PARTNERS) ? globalThis.SPOTLIGHT_PARTNERS : [];
  const partnerQuestions = partners.flatMap((partner) =>
    partner.questions.map((question, index) => ({
      ...question, id: `${partner.id}-${index}`, partner
    }))
  );
  const allQuestions = [...general, ...partnerQuestions];
  const history = new Map();
  let activePartner = null;
  let tone = "treat";
  let pair = [];
  let highlighted = null;
  const audienceLabel = (audience) => audience === "business" ? "Business / sales" : "Technical / delivery";

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function sourceLink(source) {
    const link = node("a", "", source.title);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  function resetPlay() {
    $("welcome").hidden = false;
    $("round").hidden = true;
    $("spotlight").hidden = true;
    pair = [];
    highlighted = null;
  }

  function route() {
    const page = ["play", "partners", "library"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "play";
    for (const id of ["play", "partners", "library"]) $(id).hidden = id !== page;
    for (const link of document.querySelectorAll("nav a")) {
      if (link.hash === `#${page}`) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
    if (page === "library") renderLibrary();
  }

  function configureTopics() {
    const questions = activePartner ? partnerQuestions.filter((q) => q.partner.id === activePartner.id) : general;
    $("topic").replaceChildren(new Option(activePartner ? "All partner topics" : "Surprise me: any topic", ""));
    for (const topic of new Set(questions.map((q) => q.topic))) {
      // Only offer topics with both perspectives in both moods.
      if (["trick", "treat"].every((mood) =>
        ["business", "technical"].every((audience) =>
          questions.some((q) => q.topic === topic && q.tone === mood && q.audience === audience)
        )
      )) $("topic").add(new Option(topic, topic));
    }
    updateConversation();
  }

  function updateConversation() {
    const topic = $("topic").value;
    const scope = activePartner ? `${activePartner.name} questions` : "general questions";
    $("active-partner").textContent = topic
      ? `${topic} selected from ${scope}. Tap Trick or Treat for two questions on this topic.`
      : `Choosing from all ${scope}. Tap Trick or Treat to reveal two questions.`;
    $("trick-button").querySelector("strong").textContent = topic ? `A myth about ${topic.toLowerCase()}.` : "Clear up a myth.";
    $("treat-button").querySelector("strong").textContent = topic ? `A tip about ${topic.toLowerCase()}.` : "Share something good.";
  }

  function nextQuestion(pool, key) {
    if (!pool.length) throw new Error(`No questions available for ${key}`);
    const previous = pair.find((q) => q.audience === pool[0].audience)?.id;
    let seen = history.get(key) || new Set();
    let available = pool.filter((q) => !seen.has(q.id));
    if (!available.length) {
      seen = new Set();
      available = pool.filter((q) => q.id !== previous);
      if (!available.length) available = pool;
    }
    const question = available[Math.floor(Math.random() * available.length)];
    seen.add(question.id);
    history.set(key, seen);
    return question;
  }

  function renderRound() {
    const topic = $("topic").value;
    const questions = (activePartner ? partnerQuestions.filter((q) => q.partner.id === activePartner.id) : general)
      .filter((q) => q.tone === tone && (!topic || q.topic === topic));
    const oldPair = pair;
    pair = ["business", "technical"].map((audience) =>
      nextQuestion(questions.filter((q) => q.audience === audience), `${activePartner?.id || "general"}|${topic}|${tone}|${audience}`)
    );
    $("welcome").hidden = true;
    $("spotlight").hidden = true;
    $("round").hidden = false;
    $("round-tone").textContent = tone === "trick" ? "TRICK / A FRIENDLY HOT TAKE" : "TREAT / SOMETHING GOOD";
    $("round-context").textContent = `${activePartner ? activePartner.name : "Any partner"} / ${topic || "All topics"}. One business question. One technical question. You choose.`;
    $("question-pair").replaceChildren(...pair.map((question) => {
      const card = node("button", "question-card");
      card.append(node("span", "badge", audienceLabel(question.audience)));
      card.append(node("span", "question-text", question.text));
      card.append(node("span", "choose", "This one's mine \u2192"));
      card.addEventListener("click", () => showQuestion(question));
      return card;
    }));
    const unchanged = oldPair.length && pair.every((q, index) => q.id === oldPair[index].id);
    $("round-status").textContent = unchanged
      ? "You've seen this pair. Browse more topics or switch to general questions for more options."
      : "Pick the question that feels like you. Nothing is being recorded or saved here.";
    $("round-title").focus();
  }

  function showQuestion(question) {
    highlighted = question;
    $("round").hidden = true;
    $("spotlight").hidden = false;
    $("spotlight-label").textContent = `${question.partner?.name || "PARTNER SPOTLIGHT"} / ${audienceLabel(question.audience)}`;
    $("spotlight-question").textContent = question.text;
    $("spotlight-question").focus();
  }

  function questionPreview(question) {
    const card = node("article", "library-card");
    card.append(node("span", "badge", `${question.tone} / ${audienceLabel(question.audience)} / ${question.partner?.name || question.topic}`));
    card.append(node("p", "", question.text));
    if (question.partner) {
      const source = question.partner.sources[question.sourceIndex];
      if (source) card.append(sourceLink(source));
    }
    return card;
  }

  function renderPartner() {
    const partner = partners.find((p) => p.id === $("partner-select").value);
    if (!partner) return;
    const panel = node("div", "partner-panel");
    panel.append(node("h3", "", partner.name));
    const themes = node("ul", "themes");
    for (const theme of partner.themes) themes.append(node("li", "", theme));
    panel.append(themes);
    if (partner.verificationNote) panel.append(node("p", "small-note", partner.verificationNote));
    const details = node("details");
    details.append(node("summary", "", "Host notes & public sources"));
    details.append(node("p", "small-note", "Prompts are our paraphrases, not partner quotes or endorsed statements. Only explicitly sourced approaches are named. Public sources reviewed October 27, 2026."));
    for (const [field, title] of [
      ["positioning", "Public positioning & GitHub context"],
      ["deliveryModel", "How they deliver"],
      ["architecture", "Architecture & operating model"],
      ["interviewAngle", "Your conversation angle"]
    ]) {
      details.append(node("h4", "", title), node("p", "source", partner[field]));
    }
    details.append(node("h4", "", "Public reading list"));
    for (const source of partner.sources) {
      const entry = node("div", "source");
      entry.append(sourceLink(source), node("p", "", source.note));
      details.append(entry);
    }
    panel.append(details);
    $("partner-detail").replaceChildren(panel);
    $("partner-questions").replaceChildren(...partnerQuestions.filter((q) => q.partner.id === partner.id).map(questionPreview));
  }

  function renderLibrary() {
    const term = $("search").value.trim().toLowerCase();
    const audience = $("audience-filter").value;
    const mood = $("tone-filter").value;
    const matches = allQuestions.filter((q) =>
      (!audience || q.audience === audience) && (!mood || q.tone === mood) &&
      `${q.text} ${q.topic} ${q.partner?.name || ""}`.toLowerCase().includes(term)
    );
    $("library-count").textContent = `${matches.length} of ${allQuestions.length} questions`;
    $("library-list").replaceChildren(...matches.map(questionPreview));
    if (!matches.length) $("library-list").append(node("p", "intro", "No matches. Try a broader word or change the filters."));
  }

  for (const partner of partners) $("partner-select").add(new Option(partner.name, partner.id));
  if (!partners.length) {
    $("partner-select").add(new Option("Partner research not yet available", ""));
    $("partner-select").disabled = true;
    $("play-partner").disabled = true;
    $("partner-detail").append(node("p", "small-note", "Partner-specific research is not yet available. General questions are ready to play."));
  }
  $("topic").addEventListener("change", updateConversation);
  $("partner-select").addEventListener("change", renderPartner);
  $("play-partner").addEventListener("click", () => {
    activePartner = partners.find((p) => p.id === $("partner-select").value);
    configureTopics();
    resetPlay();
    location.hash = "play";
    $("trick-button").focus();
  });
  $("play-general").addEventListener("click", () => {
    activePartner = null;
    configureTopics();
    resetPlay();
    location.hash = "play";
  });
  for (const mood of ["trick", "treat"]) $(`${mood}-button`).addEventListener("click", () => {
    tone = mood;
    renderRound();
  });
  $("swap").addEventListener("click", renderRound);
  for (const id of ["back-home", "next-person", "spotlight-next"]) $(id).addEventListener("click", () => {
    resetPlay();
    $("trick-button").focus();
  });
  $("back-pair").addEventListener("click", () => {
    $("spotlight").hidden = true;
    $("round").hidden = false;
    const index = pair.indexOf(highlighted);
    $("question-pair").children[Math.max(0, index)].focus();
  });
  for (const id of ["search", "audience-filter", "tone-filter"]) $(id).addEventListener("input", renderLibrary);
  window.addEventListener("hashchange", route);
  configureTopics();
  renderPartner();
  route();
})();
