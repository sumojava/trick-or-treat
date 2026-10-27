// Public-source paraphrases reviewed October 27, 2026. Prompts are not endorsements.
globalThis.SPOTLIGHT_PARTNERS = [
  {
    id: "insight",
    name: "Insight",
    themes: ["GitHub Strategy & Roadmap", "Copilot Enablement", "FinOps for AI", "Premier Support"],
    positioning: "Insight connects GitHub platform investment to responsible adoption, governance, and ongoing operations. Its published offers cover strategy, Copilot enablement, Advanced Security, and support rather than treating licensing as the whole engagement.",
    deliveryModel: "The Strategy & Roadmap engagement moves from current and desired states through maturity assessment and use-case prioritization to a roadmap. Copilot Enablement specifies expert-led sessions and office hours. Premier Support separately covers ongoing operations and escalation.",
    architecture: "The roadmap includes Actions and SDLC architecture reviews and tokenomics or cost optimization. The Advanced Security offer includes an Actions proof of concept with scanning and gates. Its AI FinOps guidance emphasizes cost ownership, segmentation, budget alerts, and reviews.",
    interviewAngle: "Invite them to connect licenses, developer habits, platform architecture, and cost ownership. Keep Microsoft 365 Copilot distinct from GitHub Copilot, and do not promise funding or repeat changing prices.",
    verificationNote: "GitHub-specific solution briefs and AI FinOps guidance were read directly. The coffeehouse example is an Azure FinOps story, not evidence of GitHub savings.",
    sources: [
      { title: "GitHub Strategy & Roadmap", url: "https://www.insight.com/en_US/content-and-resources/solution-briefs/github-strategy-and-roadmap.html", note: "Describes discovery, maturity assessment, use-case prioritization, Actions and SDLC reviews, tokenomics, and a prioritized roadmap. Mentions five architecture pillars without naming them; no pillar names are inferred here." },
      { title: "GitHub Copilot Enablement", url: "https://www.insight.com/en_US/content-and-resources/solution-briefs/github-copilot-enablement.html", note: "A structured program for licensed teams: 11 enablement sessions, two office hours, practical workflows, engineering standards, and responsible usage." },
      { title: "FinOps for AI: Managing Your Workload Spend", url: "https://www.insight.com/en_US/content-and-resources/blog/finops-for-ai-managing-your-workload-spend.html", note: "Cost ownership, labeling and allocation, budget alerts, cost anomalies, pilots, and continuous optimization. This is general cloud AI guidance, not a GitHub billing specification." },
      { title: "GitHub Advanced Security", url: "https://www.insight.com/en_US/content-and-resources/solution-briefs/github-advanced-security.html", note: "Reviews AppSec tooling, CodeQL fit, secrets and dependencies, then defines an adoption roadmap and Actions proof of concept with integrated scanning and gates." },
      { title: "Premier Support for GitHub", url: "https://www.insight.com/en_US/content-and-resources/solution-briefs/premier-support-for-github.html", note: "Describes L1/L2 support, optional architect assistance, escalation, root-cause analysis, and remediation guidance. Coverage specifics depend on the engagement." },
      { title: "Coffeehouse Azure FinOps customer story", url: "https://www.insight.com/en_US/content-and-resources/case-studies/major-coffeehouse-chain-saves-millions-with-finops.html", note: "Public example of assessment, a financial governance workshop, a cost-visibility application, and organizational change management. Not a GitHub case study; published savings figures are not used in interview prompts." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "GitHub value & cost", text: "Your GitHub Strategy & Roadmap goes beyond licenses. What's one thing buyers should put on their roadmap sooner?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "GitHub value & cost", text: "You talk about FinOps for AI. What's one myth about controlling AI spend you'd clear up?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "GitHub value & cost", text: "Your Copilot Enablement includes coding and testing standards. What good engineering habit still matters just as much with AI?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "GitHub value & cost", text: "Your roadmap includes Actions architecture reviews. What do teams overlook when they only optimize for faster builds?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "GitHub value & cost", text: "What does Insight help a customer unlock between buying GitHub Copilot and making it an everyday habit?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "GitHub value & cost", text: "Your AI FinOps guidance starts with ownership. What's one way to get finance and engineering working together?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "GitHub value & cost", text: "Your security offer includes an Actions proof of concept. What's a useful first scanning gate to demonstrate?", sourceIndex: 3 },
      { audience: "technical", tone: "treat", topic: "GitHub value & cost", text: "Your enablement program includes office hours. What kind of real developer question makes those sessions valuable?", sourceIndex: 1 }
    ]
  },
  {
    id: "infomagnus",
    name: "InfoMagnus",
    themes: ["Champion-led Copilot adoption", "Reusable Actions patterns", "Continuous Compliance", "Human decision authority"],
    positioning: "InfoMagnus presents GitHub as a connected engineering platform, not just a tool rollout. Its GitHub page emphasizes migrations, Copilot adoption, Actions modernization, Advanced Security, and enterprise governance.",
    deliveryModel: "Copilot enablement includes workshops, office hours, hackathons, and adoption metrics. Continuous Compliance follows readiness assessment, traceability and context design, policy design, GitHub workflow implementation, and operationalization.",
    architecture: "Continuous Compliance connects requirements, architecture decisions, code, tests, policy, and evidence in existing GitHub workflows. The model explicitly separates deterministic assurance, AI-assisted engineering, and accountable human decisions. Actions, issues, and pull requests carry checks and proposed remediation.",
    interviewAngle: "Use their distinction between faster engineering and keeping evidence current. Give them room to explain how champions, reusable workflows, and human approval make adoption sustainable.",
    verificationNote: "GitHub and Continuous Compliance pages were read directly. Continuous Compliance is their described approach, not a guarantee of regulatory compliance or external certification.",
    sources: [
      { title: "InfoMagnus & GitHub", url: "https://www.infomagnus.com/infomagnus-partners/github-advanced-partner", note: "Details champion-led enablement, workshops, office hours, hackathons, adoption metrics, runner strategy, reusable Actions patterns, GHAS, and integration with enterprise delivery tools." },
      { title: "Modern Development with Continuous Compliance", url: "https://www.infomagnus.com/infomagnus-solutions/modern-development-with-continuous-compliance", note: "Defines traceability, evidence freshness, policy checks, AI-assisted remediation, and human approval. Describes five delivery stages and explicitly retains customer and human accountability." },
      { title: "InfoMagnus company positioning", url: "https://www.infomagnus.com", note: "Connects GitHub DevOps, AI-assisted application modernization, governed data, and purpose-built IP. Used as context, not as evidence of a particular customer outcome." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Connected engineering & assurance", text: "You say GitHub adoption isn't just a tool rollout. What's one misconception about making the change stick?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Connected engineering & assurance", text: "Your Continuous Compliance approach keeps people accountable. What's one myth about AI and compliance you'd retire?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Connected engineering & assurance", text: "You talk about improving CI/CD, not copying old complexity. What's one pipeline habit worth rethinking during a move to Actions?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "Connected engineering & assurance", text: "Your assurance model separates automated checks from human decisions. What's a decision you wouldn't hand to an agent?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Connected engineering & assurance", text: "Your Copilot approach is champion-led. What makes a great internal champion?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Connected engineering & assurance", text: "You connect engineering and evidence. How would you explain the value of Continuous Compliance to a business leader?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Connected engineering & assurance", text: "Your model connects requirements, code, tests, and evidence. What's a small first workflow a team could pilot?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Connected engineering & assurance", text: "InfoMagnus emphasizes reusable Actions patterns. What's one pattern that makes developers' lives easier?", sourceIndex: 0 }
    ]
  },
  {
    id: "cei",
    name: "CEI",
    themes: ["Agentic DevOps", "Spec-to-Code", "DARTS", "Governed AI delivery"],
    positioning: "CEI connects GitHub-based enterprise DevOps to AI Platform Engineering and agentic software delivery. Its GitHub offering spans Actions, Enterprise Cloud migration, Copilot, Advanced Security, and Azure delivery.",
    deliveryModel: "The GitHub page describes reusable skills, AI-driven workflows, and measurable adoption frameworks. Its separately described DARTS offering uses specification modeling, Spec-to-Code execution, governance and validation, feedback, and reuse.",
    architecture: "DARTS is CEI's named Spec-to-Code model: structured, machine-readable requirements feed code, documentation, and test generation, with architectural, security, and compliance checks during delivery. The page describes specialized agents and feedback loops, not a published implementation blueprint.",
    interviewAngle: "Ask about preserving business intent, improving specifications, and deciding where validation belongs. DARTS is a separate CEI offering; do not imply that GitHub Copilot itself is DARTS or that every GitHub engagement uses it.",
    verificationNote: "CEI's former ceiamerica.com domain redirects to cei.ai. GitHub and DARTS pages were verified. Marketing productivity percentages are omitted, and no regulatory outcome is guaranteed.",
    sources: [
      { title: "CEI: GitHub enterprise DevOps", url: "https://cei.ai/solutions/github/", note: "Describes GitHub Actions, Copilot, Advanced Security, Enterprise Cloud migration, Azure DevOps delivery, and Agentic DevOps using reusable skills and adoption measurement." },
      { title: "DARTS: Spec-to-Code delivery model", url: "https://cei.ai/darts-autonomous-code-generation/", note: "Explains structured specifications, generated code/docs/tests, built-in validation, feedback loops, and reusable assets. This is a separate named CEI offering." },
      { title: "CEI AI Platform Engineering", url: "https://cei.ai/", note: "States the Build, Scale, Govern, Operate, Transform lifecycle and lists its platform portfolio. This is company-level context rather than proof of a GitHub-specific deployment." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Agentic delivery & Spec-to-Code", text: "CEI talks about Agentic DevOps. What's one misconception that makes it sound more complicated than it needs to be?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Agentic delivery & Spec-to-Code", text: "Your DARTS model starts with business intent. What do people underestimate about getting requirements right for AI?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Agentic delivery & Spec-to-Code", text: "With Spec-to-Code, what's one assumption about specifications that engineers should challenge?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Agentic delivery & Spec-to-Code", text: "Your GitHub approach embeds governance in AI workflows. What's a check you'd keep even when an agent writes the code?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Agentic delivery & Spec-to-Code", text: "What kind of customer conversation tells you CEI's Agentic DevOps approach could help?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Agentic delivery & Spec-to-Code", text: "How would you explain the value of DARTS and Spec-to-Code to someone who doesn't write code?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Agentic delivery & Spec-to-Code", text: "DARTS connects specs, code, tests, and validation. Which connection would you demonstrate first?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Agentic delivery & Spec-to-Code", text: "Your Agentic DevOps offering mentions reusable skills. What's a good first skill to build into a GitHub workflow?", sourceIndex: 0 }
    ]
  },
  {
    id: "coveros",
    name: "Coveros",
    themes: ["Ignite AI", "Velocity Illusion", "Workflow Incubators", "AI FinOps"],
    positioning: "Coveros emphasizes engineering culture, secure delivery, and measurable AI value rather than tool activity alone. Its GitHub-related writing connects Copilot adoption, agentic workflows, governance, and consumption visibility.",
    deliveryModel: "Ignite AI is described as a learning and enablement platform with role-based paths, expert coaching, co-building, hands-on labs, and KPI tracking. The published approach includes 90-Day Workflow Incubators and fractional engineering for agentic architecture support.",
    architecture: "The model pairs governed practice environments and engineering support with cycle-time, security coverage, engagement, reliability, and human-review metrics. Its AI FinOps article discusses model selection, context management, retries, budgets, and value telemetry, not a fixed reference architecture.",
    interviewAngle: "Use their 'Velocity Illusion' distinction as an invitation to share useful measures. Ask about value per AI credit and safe workflow design, not why a customer's adoption failed.",
    verificationNote: "Two full articles and the company homepage were read. Commercial billing and funding assertions are not independently validated here and are not presented as program advice or interview facts.",
    sources: [
      { title: "Ignite AI and the Velocity Illusion", url: "https://www.coveros.com/blog/coveros-ignite-ai-pierces-the-velocity-illusion-why-ai-adoption-isn-t-the-same-as-value-delivery/", note: "Describes role-based learning, coaching, co-building, 90-Day Workflow Incubators, fractional engineering, labs, FinOps telemetry, and outcome measurement. 'Velocity Illusion' is the article's term for confusing activity with value." },
      { title: "The New Economics of GitHub Copilot", url: "https://www.coveros.com/blog/more-agents-more-tokens-more-funding-the-new-economics-of-github-copilot/", note: "Discusses agentic engineering, consumption visibility, context management, model routing, budget governance, and value telemetry. Pricing, funding eligibility, and quoted market statistics require separate confirmation." },
      { title: "Coveros: Modernizing Software Delivery", url: "https://www.coveros.com", note: "Positions Microsoft and GitHub adoption alongside architecture, culture, practices, and training. Links to the detailed Ignite AI and AI FinOps articles." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "AI outcomes & FinOps", text: "You call it the Velocity Illusion. What's a better sign of AI value than simply generating more code?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "AI outcomes & FinOps", text: "Your Copilot economics article focuses on value, not just consumption. What's one AI spending myth you'd clear up?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "AI outcomes & FinOps", text: "Ignite AI looks across the delivery pipeline. What gets overlooked when developers can generate code faster?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "AI outcomes & FinOps", text: "Your AI FinOps guidance includes context and retries. What's one agent habit that can waste effort without improving an answer?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "AI outcomes & FinOps", text: "Your Workflow Incubators focus on real bottlenecks. What makes a good first workflow to co-build with a customer?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "AI outcomes & FinOps", text: "Ignite AI combines learning and coaching. What's the moment when training starts becoming a business outcome?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "AI outcomes & FinOps", text: "Your program tracks human review and agent reliability. What's one signal that a workflow is ready for more autonomy?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "AI outcomes & FinOps", text: "What's one context-management tip from your AI FinOps approach that an engineer could try today?", sourceIndex: 1 }
    ]
  },
  {
    id: "eficode",
    name: "Eficode",
    themes: ["Eficode ROOT", "Beyond tooling", "Copilot workflows", "Embedded expertise"],
    positioning: "Eficode's GitHub Enterprise services combine platform consolidation, Copilot, security, licenses, and managed operations with culture and process change. Its positioning stresses expertise embedded with customer teams.",
    deliveryModel: "GitHub consultants join customer teams for migration and setup. Copilot services cover proof of concept, environment setup, adoption, and SDLC integration. Eficode ROOT is the named managed DevOps platform/service for integration, maintenance, and support.",
    architecture: "The GitHub offering brings delivery tooling together, assesses Advanced Security capabilities, and produces findings and a roadmap. ROOT is a managed service, not a claim that every customer's GitHub deployment shares one architecture.",
    interviewAngle: "The Visma story offers a useful shift from features to workflows and from helping only enthusiasts to raising broad capability. Ask about practical training and managed operations without treating customer quotes as universal results.",
    verificationNote: "The GitHub services page and full Visma story were reviewed. Visma's views on future agent delegation are customer perspectives, not an Eficode guarantee or a required delivery model.",
    sources: [
      { title: "Eficode GitHub Enterprise services", url: "https://www.eficode.com/github", note: "Covers migration, licensing, Copilot proof of concept and adoption, ROOT managed GitHub, GHAS assessment, and certification training. Explicitly includes culture and process advice." },
      { title: "Visma: From AI features to workflows", url: "https://www.eficode.com/client-stories/how-visma-accelerated-ai-adoption-across-5000-developers-with-github-copilot", note: "A public customer story describing advanced workshops and webinars, broad enablement, and the move from features to AI-driven workflows. Future delegation comments are attributed customer perspectives." },
      { title: "Eficode delivery approach", url: "https://www.eficode.com", note: "Describes strategy-to-production involvement, embedded teams, an AI Adoption Framework, and moving from pilots toward an AI-ready software factory." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "DevOps adoption & managed delivery", text: "You say it's never just a tooling problem. What's one misconception about adopting GitHub across a company?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "DevOps adoption & managed delivery", text: "Your Visma story focuses on raising the floor. What gets missed when AI adoption only celebrates the power users?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "DevOps adoption & managed delivery", text: "Your Visma story moves from AI features to workflows. What's one feature-first habit worth rethinking?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "DevOps adoption & managed delivery", text: "Your GitHub services include a security assessment. What should teams look at beyond just switching scanning on?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "DevOps adoption & managed delivery", text: "With Eficode ROOT, what can customers spend more time on when platform operations are taken care of?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "DevOps adoption & managed delivery", text: "Eficode talks about being embedded, not just engaged. What does that feel like for a customer team?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "DevOps adoption & managed delivery", text: "Your Copilot services cover the whole SDLC. What's a useful workflow to explore beyond code completion?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "DevOps adoption & managed delivery", text: "Your Visma work used hands-on workshops. What's an exercise that helps an AI-curious developer get started?", sourceIndex: 1 }
    ]
  },
  {
    id: "jellyfish",
    name: "Jellyfish",
    themes: ["AI Impact Framework", "Engineering intelligence", "Copilot usage & seats", "Cycle time & investment"],
    positioning: "Jellyfish is an engineering intelligence product, not simply a GitHub migration or delivery consultancy. Its GitHub and Copilot integrations connect engineering work and adoption data to delivery and investment visibility.",
    deliveryModel: "The public integration pages describe connecting GitHub directly or through the Jellyfish Agent, and connecting Copilot seat and usage data for the relevant organizations or enterprise. Company materials also describe onboarding and professional services; no invented consulting methodology is assigned here.",
    architecture: "GitHub repositories, pull requests, and issues feed delivery visibility, cycle-time insights, and work allocation. Copilot seat and usage data power adoption and productivity reporting. The AI Impact Framework organizes assessment around adoption, productivity, and business outcomes.",
    interviewAngle: "Let them distinguish usage, productivity, and value. Ask how engineering leaders can tell a better story with data while avoiding individual-developer rankings or assuming correlation proves causation.",
    verificationNote: "Both integration pages and the AI Impact Framework landing page were read. The framework deck is gated and was not downloaded; detailed methodology or causal ROI claims are not inferred.",
    sources: [
      { title: "Jellyfish GitHub integration", url: "https://jellyfish.co/integration/github/", note: "Maps repositories, PRs, and issues to delivery visibility, cycle time, Allocations, and operational reporting. Mentions direct connection or the Jellyfish Agent." },
      { title: "Jellyfish GitHub Copilot integration", url: "https://jellyfish.co/integration/github-copilot/", note: "Connects seat and usage data to AI Impact insights, adoption visibility, and productivity reporting. Integration availability is not evidence that usage alone causes business outcomes." },
      { title: "The AI Impact Framework", url: "https://jellyfish.co/resources/the-ai-impact-framework-a-data-driven-model-for-adoption-productivity-and-business-outcomes/", note: "Public landing page describes adoption, productivity, and business outcomes for hybrid AI-human teams. The downloadable deck is gated and was not reviewed." },
      { title: "Jellyfish company and product overview", url: "https://jellyfish.co", note: "Distinguishes code volume from value and discusses review/CI bottlenecks, token and seat costs, and engineering investment. Homepage demonstrations are illustrative, not customer data used here." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Measuring AI engineering value", text: "Jellyfish separates AI adoption from impact. What's one metric that needs more context before it reaches the board?", sourceIndex: 2 },
      { audience: "business", tone: "trick", topic: "Measuring AI engineering value", text: "Your message is that more code isn't the same as more value. What should leaders ask instead?", sourceIndex: 3 },
      { audience: "technical", tone: "trick", topic: "Measuring AI engineering value", text: "You connect Copilot usage with engineering insights. What shouldn't someone conclude from usage numbers alone?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Measuring AI engineering value", text: "Your GitHub integration measures cycle time. What can a single average hide about how work actually flows?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Measuring AI engineering value", text: "Your AI Impact Framework covers adoption, productivity, and business outcomes. Which conversation should a leader start with?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "Measuring AI engineering value", text: "What does Jellyfish help engineering and finance understand together about an AI investment?", sourceIndex: 3 },
      { audience: "technical", tone: "treat", topic: "Measuring AI engineering value", text: "Your GitHub integration brings together PRs, issues, and repositories. What's a useful question that combination can help answer?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "Measuring AI engineering value", text: "What's a good first team-level signal to look at alongside Copilot adoption?", sourceIndex: 1 }
    ]
  },
  {
    id: "codecargo",
    name: "CodeCargo",
    themes: ["Pipeline families", "Waves of pull requests", "Approval & rollback", "CargoWall"],
    positioning: "CodeCargo describes a migration platform and services that standardize repositories and pipelines onto reusable GitHub workflows, followed by ongoing standards, security, cost, and hygiene management.",
    deliveryModel: "Customers can use Migration Assistant or work with the migration team. The process inventories the estate, groups pipelines into families, delivers changes in waves of owner-reviewed pull requests, and cuts over with approval and rollback. Supported self-service and assisted paths differ by source platform.",
    architecture: "Migration emphasizes reusable workflow building blocks rather than one-to-one translation. CargoWall is described as an eBPF-based runner egress firewall with audit, baseline, and enforce stages, plus policies for agent runtimes. These are vendor-described capabilities, not independently tested security guarantees.",
    interviewAngle: "Ask why a migration is a chance to simplify the estate and how approvals make automation approachable. Their post-migration cost and agentic-workflow services support questions on Actions spend and governance.",
    verificationNote: "Official homepage, services, and CargoWall pages were reviewed. Homepage example estates and plans are illustrative; no sample figures are treated as customer evidence.",
    sources: [
      { title: "CodeCargo: GitHub migration platform", url: "https://codecargo.com", note: "Details inventory, pipeline families, reusable workflows, PR waves, rollback-ready cutover, and ongoing cost/standards/security management. Demonstration numbers are not used as facts about customer projects." },
      { title: "CodeCargo migration and GitHub services", url: "https://codecargo.com/services", note: "Distinguishes in-app and assisted source support, migration assessment, EMU/data-residency services, Actions assessment, hosted-runner migration, and agentic-workflow training." },
      { title: "CargoWall runner egress architecture", url: "https://codecargo.com/secure/cargowall", note: "Describes eBPF-based egress controls, audit-baseline-enforce rollout, organization/repository/workflow policies, and agent runtime policies. Claims are not penetration-test findings or unconditional security guarantees." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Standardized migration & operations", text: "CodeCargo talks about cleaning up during the move. What's one myth about a GitHub migration being just a copy job?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Standardized migration & operations", text: "You offer both self-service and migration services. What do buyers overlook when deciding how much help they need?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Standardized migration & operations", text: "You convert pipeline families, not just files. What can a line-by-line translation miss?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "Standardized migration & operations", text: "CargoWall focuses on runner egress. What's a misconception about what a CI job or coding agent should be able to reach?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "Standardized migration & operations", text: "Your migrations arrive in waves of pull requests. How does that help a customer team feel in control?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Standardized migration & operations", text: "CodeCargo keeps working after migration. What's a good next conversation about Actions cost or standards?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "Standardized migration & operations", text: "Your cutover model includes approval and rollback. What's one check that gives an engineer confidence to make the switch?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Standardized migration & operations", text: "CargoWall starts with audit before enforcement. What's useful about learning a workflow's network behavior first?", sourceIndex: 2 }
    ]
  },
  {
    id: "ust",
    name: "UST",
    themes: ["UST PACE GitLift", "UST PACE StageCraft", "AI-native SDLC", "Global co-delivery"],
    positioning: "UST's GitHub page frames the partnership around AI-native software delivery across the SDLC. It combines Copilot enablement, legacy source-control and pipeline migrations, Advanced Security, training, and managed DevOps.",
    deliveryModel: "The page describes onshore, nearshore, and offshore capability, plus co-sell and co-delivery with GitHub and Microsoft. Its portfolio combines accelerators, workshops, administration, migration, and ongoing DevOps management.",
    architecture: "GitLift addresses legacy SCM migration with auditing, stream-to-repository mapping, and Git-native branching. StageCraft converts legacy CI/CD into Actions with validation, rollback safeguards, and compliance enforcement. A separate Copilot workshop covers access, policy, consumption drivers, monitoring, and optimization.",
    interviewAngle: "Give them a chance to distinguish moving source code from modernizing delivery. Their public examples and named accelerators support questions on reusable workflows, controlled cutover, and governed Copilot consumption.",
    verificationNote: "The full GitHub page was read in a rendered browser because a text-only fetch showed only a loader. Linked PDF briefs were identified but not downloaded. Architecture notes here are limited to the visible page descriptions.",
    sources: [
      { title: "UST & GitHub: AI-native software delivery", url: "https://www.ust.com/en/github", note: "Rendered page details Copilot, Actions, GHAS, managed DevOps, global delivery, and named GitLift/StageCraft accelerators. Also contains public Perforce and healthcare migration summaries, and an IDFC FIRST Bank summary; numerical marketing claims are not repeated in prompts." },
      { title: "UST GitLift public description", url: "https://www.ust.com/en/github#Agentic%20Solutions", note: "The solutions section describes auditing, stream-to-repository mapping, and Git-native branching for legacy SCM migration. A linked PDF exists but was not read." },
      { title: "UST StageCraft and Copilot workshop descriptions", url: "https://www.ust.com/en/github#Strategic%20Services", note: "The same page describes pipeline conversion with validation and rollback, plus a usage-based billing workshop covering controls, consumption drivers, monitoring, and optimization. No current billing rates are asserted." },
      { title: "UST CodeCrafter", url: "https://www.ust.com/en/codecrafter", note: "Rendered product page describes legacy code conversion, test generation, security checks, and VS Code integration. This is separate from GitLift SCM migration and StageCraft pipeline migration." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "AI-native GitHub modernization", text: "UST talks about AI-native delivery, not just new tools. What's one misconception about making that shift?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "AI-native GitHub modernization", text: "You offer Copilot consumption workshops. What should leaders discuss beyond how many licenses they have?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "AI-native GitHub modernization", text: "GitLift includes stream-to-repo mapping. What do people underestimate when moving legacy source control to GitHub?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "AI-native GitHub modernization", text: "StageCraft includes validation and rollback. What's one reason a pipeline migration is more than translating YAML?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "AI-native GitHub modernization", text: "When would you bring GitLift and StageCraft into the same customer conversation?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "AI-native GitHub modernization", text: "UST combines global delivery with GitHub co-delivery. What makes that feel like one team to a customer?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "AI-native GitHub modernization", text: "Your GitHub offering includes managed DevOps. What's one repeatable practice that helps teams stay healthy after migration?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "AI-native GitHub modernization", text: "Your Copilot workshop covers monitoring and optimization. What's one consumption signal an engineer should watch early?", sourceIndex: 2 }
    ]
  },
  {
    id: "slalom",
    name: "Slalom",
    themes: ["People-centered enablement", "Champions communities", "Train the trainer", "Accelerated Engineering"],
    positioning: "Slalom connects GitHub and Azure engineering with a people-centered approach to AI adoption. Public materials describe both enterprise enablement and embedding AI into delivery practices.",
    deliveryModel: "The Siemens story combines multi-stage training, audience segmentation, champions, train-the-trainer capability, communications, and community building. A separate Accelerated Engineering example describes embedded teams, a prompt library, reusable workflows, and an acceleration checklist.",
    architecture: "The Microsoft partnership page describes GitHub-orchestrated Azure delivery and human responsibility for architecture, validation, quality, and governance. Its enablement examples provide operating models, not a single prescribed technical reference architecture.",
    interviewAngle: "Use the Siemens story to ask how learning continues after launch and how internal champions make scale possible. The separate engineering example supports questions about embedded delivery without inventing an FDE-branded offering.",
    verificationNote: "The Siemens story, Microsoft partnership page, and AI Accelerated Engineering page were read. Public case-study figures are contextual, not promises for another customer.",
    sources: [
      { title: "Siemens: GitHub Copilot enablement", url: "https://www.slalom.com/us/en/customer-stories/siemens-ai-microsoft-github-copilot", note: "Public story describes a 30,000-developer rollout, tailored learning groups, champions, train-the-trainer, ongoing communications, and local learning. Prompts emphasize the model rather than demanding customer details." },
      { title: "Slalom & Microsoft: GitHub and Azure", url: "https://www.slalom.com/us/en/who-we-are/partners/microsoft", note: "Describes GitHub/Azure delivery and the Accelerated Engineering methodology, retaining engineer responsibility for architecture, validation, quality, and governance." },
      { title: "AI Accelerated Engineering", url: "https://www.slalom.com/us/en/services/artificial-intelligence/ai-accelerated-engineering", note: "A public telecom example describes embedding with engineering teams, Copilot adoption, standardized prompts, reusable workflows, a 60-day checklist, and an early-adopter program. Forecasted savings are not treated as realized results." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "People-first AI adoption", text: "Your Siemens story goes far beyond handing out Copilot licenses. What's one myth about enterprise AI adoption?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "People-first AI adoption", text: "Slalom takes a people-centered approach. What gets overlooked when an AI rollout is treated as only a technology project?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "People-first AI adoption", text: "Your Accelerated Engineering approach keeps engineers responsible for validation. What's one AI shortcut you'd replace with a better habit?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "People-first AI adoption", text: "Your Siemens program tailored learning to different users. What's one misconception about training every developer the same way?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "People-first AI adoption", text: "Your Siemens story includes a champions community. What makes a champion great at helping colleagues get comfortable with AI?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "People-first AI adoption", text: "Your embedded engineering example uses an early-adopter program. What helps turn an early win into wider confidence?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "People-first AI adoption", text: "Your engineering approach includes prompt libraries and reusable workflows. What's one useful thing a team should share first?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "People-first AI adoption", text: "The Siemens story includes train-the-trainer. What's a good exercise that helps a developer teach the next person?", sourceIndex: 0 }
    ]
  },
  {
    id: "packfiles",
    name: "Packfiles",
    themes: ["Warp", "Connect. Plan. Migrate.", "Migration HQ", "Customer-controlled execution"],
    positioning: "Packfiles describes Warp as a GitHub-native migration product that makes planning and execution visible inside familiar GitHub tools. It is not presented here as a general AI consultancy.",
    deliveryModel: "The public product emphasizes self-service setup and migration planning. Warp creates a Migration HQ repository and an issue per source repository, so teams can coordinate the work through GitHub rather than a separate project-management system.",
    architecture: "The documentation names a GitHub App, Control Plane, Runner Agent, Vault, and Migration HQ repository. The Runner Agent performs migration operations in the customer's environment. The security model describes end-to-end encrypted credential storage and customer-controlled execution.",
    interviewAngle: "Ask what becomes easier when migration planning lives where engineers already work. The separation of coordination, credentials, and execution gives technical guests an approachable architecture story without asking them to disclose secrets.",
    verificationNote: "Homepage, architecture overview, and security model were read. Credential and execution properties are attributed to Packfiles documentation, not independently audited guarantees. No security claim is made about unrelated products named Warp.",
    sources: [
      { title: "Packfiles: Connect. Plan. Migrate.", url: "https://packfiles.io/", note: "Describes GitHub-native migration planning, source repositories organized into GitHub Issues, self-service setup, and Warp for Copilot support." },
      { title: "What's Warp? Components and topology", url: "https://kb.packfiles.io/content/guides/whats-warp.md", note: "Names the GitHub App, Control Plane, Runner Agent, Vault, and Migration HQ. Describes GitHub-hosted or self-hosted runners and per-repository planning issues." },
      { title: "Warp's Security Model", url: "https://kb.packfiles.io/content/security/warp-security-model/", note: "Explains the rationale for encrypted credential management and executing migration tools in customer-controlled infrastructure. These are documented vendor properties, not independent test findings." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "GitHub-native migration with Warp", text: "Your message is Connect, Plan, Migrate. What's one myth that makes migrations sound harder than they need to be?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "GitHub-native migration with Warp", text: "Warp puts migration planning inside GitHub. What do people overlook when they focus only on moving the code?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "GitHub-native migration with Warp", text: "Your security model separates credentials from coordination. What's one misconception about who needs migration credentials?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "GitHub-native migration with Warp", text: "Warp has a control plane and a runner agent. What gets missed when someone assumes the migration has to run on a vendor's servers?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "GitHub-native migration with Warp", text: "What's the nicest thing about giving a team a migration backlog in the GitHub tools they already know?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "GitHub-native migration with Warp", text: "Who should come find Packfiles at Universe, and what can Warp help them get started with?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "GitHub-native migration with Warp", text: "Migration HQ creates an issue per source repository. What useful planning decision can an engineer make from that?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "GitHub-native migration with Warp", text: "Your docs name the App, Control Plane, Runner Agent, and Vault. Which piece would you explain first to a curious engineer?", sourceIndex: 1 }
    ]
  },
  {
    id: "accenture-avanade",
    name: "Accenture / Avanade",
    themes: ["Measured Copilot adoption", "Developer experience", "People and change", "Microsoft ecosystem"],
    positioning: "Accenture's GitHub Copilot research provides a concrete story about adoption, developer experience, and measuring engineering outcomes. Avanade's public AI positioning emphasizes helping people do work they love with Microsoft Copilot.",
    deliveryModel: "The Accenture study combines a randomized controlled trial, adoption telemetry, and developer surveys. Avanade separately describes its Microsoft relationship and people-oriented Copilot positioning; the study is not presented as a joint commercial delivery methodology.",
    architecture: "The GitHub study looks at IDE adoption, suggestions, pull requests, builds, and developer experience. These are measurement surfaces, not a reference architecture. Avanade's broader Microsoft Copilot page does not establish a GitHub-specific deployment topology.",
    interviewAngle: "Invite a friendly conversation about what meaningful AI adoption looks like beyond buying licenses or counting suggestions. Let the guest connect evidence, developer happiness, and the changes that make tools useful in everyday work.",
    verificationNote: "GitHub's Accenture study and Avanade's public Copilot and partnership pages were read. Study results are context-specific, not guaranteed ROI. Avanade's Microsoft Copilot language must not be confused with a verified GitHub-specific offering.",
    sources: [
      { title: "GitHub research with Accenture", url: "https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/", note: "Describes an enterprise trial, adoption analysis, developer surveys, pull requests, and builds. Prompts avoid promising the published percentage improvements for other teams." },
      { title: "Avanade: Copilot by your side", url: "https://www.avanade.com/en-us/services/artificial-intelligence/ai-copilot-hub", note: "Broad Microsoft Copilot positioning about productivity, creativity, security, and helping people do work they love. Not evidence of a specific GitHub architecture." },
      { title: "Avanade: technology partnerships", url: "https://www.avanade.com/en-us/services/tech-partnerships", note: "Identifies Avanade as an Accenture and Microsoft joint venture. Used for relationship context, not to attribute the Accenture study to Avanade." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Measuring adoption and developer experience", text: "The Accenture Copilot study measured more than usage. What's one myth about proving AI value with a single number?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Measuring adoption and developer experience", text: "Avanade talks about helping people do work they love. What gets missed when AI adoption is treated as just a license purchase?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Measuring adoption and developer experience", text: "The Accenture study combined telemetry and surveys. What's one thing a suggestion-acceptance rate cannot tell you on its own?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "Measuring adoption and developer experience", text: "Your Copilot research looked at builds as well as pull requests. What gets overlooked when teams measure only how much code is produced?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Measuring adoption and developer experience", text: "Your Copilot research included developer satisfaction. What's a human signal that tells you an AI rollout is helping?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Measuring adoption and developer experience", text: "Avanade's message is Copilot by your side. What's a good first conversation with a team that's curious but not sure where to start?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Measuring adoption and developer experience", text: "The Accenture study followed real developer workflows. What small workflow would you measure first in a Copilot pilot?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "Measuring adoption and developer experience", text: "Your research pairs developer feedback with engineering data. What's one question you'd ask developers alongside the dashboard?", sourceIndex: 0 }
    ]
  },
  {
    id: "ibm-consulting",
    name: "IBM Consulting / Neudesic / Nordcloud / BoxBoat",
    themes: ["Enterprise modernization", "Cloud-native engineering", "Platform engineering", "FinOps and governance"],
    positioning: "This grouped interview choice brings together complementary public stories: Neudesic on Azure AI and modernization, Nordcloud on cloud-native engineering and FinOps, and BoxBoat on containers, Kubernetes, and DevSecOps.",
    deliveryModel: "Neudesic describes end-to-end Azure, data, application, and AI delivery. Nordcloud connects strategy and migration with platform engineering and managed operations. BoxBoat describes platform adoption strategies, application containerization, training, and enablement. These are separate capabilities, not one shared branded method.",
    architecture: "BoxBoat's public page centers on containers and Kubernetes. Nordcloud describes secure multicloud foundations, automation, self-service, and Day 2 operations. Neudesic emphasizes Azure data, AI, and governance. No group-wide proprietary GitHub architecture was verified.",
    interviewAngle: "Ask which part of the modernization journey the guest knows best, then explore the bridge from platforms and skills to responsible AI adoption. FinOps, human ownership, and production readiness are approachable topics across sales and delivery.",
    verificationNote: "IBM's Neudesic, Nordcloud, and BoxBoat pages were read. They support broader modernization prompts, not a verified GitHub-specific methodology. A capability attributed to one member should not be assumed to apply to every company in this group.",
    sources: [
      { title: "IBM Neudesic: enterprise AI on Azure", url: "https://www.ibm.com/consulting/neudesic", note: "Describes Azure, data, app modernization, agentic AI, governance, and managed services. Microsoft Copilot references are not treated as GitHub Copilot evidence." },
      { title: "IBM Nordcloud: cloud-native engineering", url: "https://www.ibm.com/consulting/nordcloud", note: "Describes platform engineering, developer self-service, FinOps, cloud foundations, AI readiness, and Day 2 cloud operations." },
      { title: "IBM BoxBoat: containers and DevSecOps", url: "https://www.ibm.com/consulting/boxboat", note: "Describes Kubernetes and enterprise container platform adoption, application containerization, DevSecOps, and training. Does not specify a GitHub delivery architecture." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Modernization from platform to production", text: "Neudesic talks about operationalizing AI at scale. What's one misconception about moving from an AI demo to business value?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Modernization from platform to production", text: "Nordcloud includes FinOps in modernization. What's one myth about cost optimization that deserves a friendlier explanation?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Modernization from platform to production", text: "BoxBoat pairs platform adoption with training. What gets missed when a Kubernetes rollout is treated as only an installation?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "Modernization from platform to production", text: "Nordcloud talks about Day 2 operations. What's one thing teams should plan before calling a migration finished?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Modernization from platform to production", text: "Neudesic connects AI with data and application modernization. What helps a customer choose a useful first use case?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Modernization from platform to production", text: "Nordcloud links cost visibility with accountability. What makes a good FinOps conversation between engineering and the business?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Modernization from platform to production", text: "BoxBoat emphasizes enablement alongside DevSecOps. What's a hands-on exercise that helps a team own its new platform?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "Modernization from platform to production", text: "Nordcloud describes self-service platform capabilities. What would you automate first to make a developer's day easier?", sourceIndex: 1 }
    ]
  },
  {
    id: "incycle",
    name: "InCycle",
    themes: ["Elevate", "Migration and modernization", "Continuous governance", "Agentic DevOps and MCP"],
    positioning: "InCycle connects GitHub migration with repository modernization and governance. Its named Elevate platform supports discovery, planning, migration pilots, pipeline transformation, and ongoing standards.",
    deliveryModel: "Public migration materials describe environment and dependency analysis, a roadmap, pilot migrations, batch scheduling, validation, and enablement. Agentic DevOps services add hands-on workshops, workflow coaching, measurement, and modernization with Copilot.",
    architecture: "Elevate materials describe repository and pipeline analysis, transformation rules, bulk standards updates, policy assignment, and a compliance dashboard. GitHub services also cover Actions runners, scale sets, and governance. These are vendor descriptions, not an independent platform evaluation.",
    interviewAngle: "Use Elevate to ask what becomes possible after repositories move, rather than turning the interview into a migration postmortem. Governance drift, repeatable patterns, and the human decisions around agentic workflows make useful technical follow-ups.",
    verificationNote: "GitHub services, Elevate migration and modernization, and Agentic DevOps pages were read. Speed and scale claims are not repeated as guarantees. Dated product descriptions on the general services page are not used as current Copilot architecture.",
    sources: [
      { title: "InCycle: GitHub partner services", url: "https://www.incyclesoftware.com/github-partner-services", note: "Covers GitHub adoption, migration prerequisites and cutover, pipelines, governance, Actions runners, training, and coaching." },
      { title: "Elevate: migration and modernization", url: "https://www.incyclesoftware.com/github-migration-and-repo-modernization", note: "Describes discovery, planning, pilots, transformation rules, governance dashboards, validation, and modernization. Vendor performance claims are not independently verified." },
      { title: "InCycle: GitHub Agentic DevOps", url: "https://www.incyclesoftware.com/github-agentic-devops", note: "Describes Copilot enablement, agentic workflows and MCP, legacy modernization, hands-on workshops, coaching, and measurement." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Elevate migration and agentic modernization", text: "Elevate connects migration with modernization. What's one myth about a GitHub migration being just a repository move?", sourceIndex: 1 },
      { audience: "business", tone: "trick", topic: "Elevate migration and agentic modernization", text: "Your Agentic DevOps work includes coaching and measurement. What gets overlooked when a team starts with tools before outcomes?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "Elevate migration and agentic modernization", text: "Elevate includes governance after migration. What's one misconception about standards staying consistent once the cutover is done?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Elevate migration and agentic modernization", text: "Your agentic offering covers MCP. What's one thing connecting an agent to a tool does not solve by itself?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "Elevate migration and agentic modernization", text: "Your migration approach starts with a roadmap. What early conversation helps a customer feel confident about the journey?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Elevate migration and agentic modernization", text: "InCycle pairs Copilot adoption with hands-on coaching. What helps an early win become a lasting team habit?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "Elevate migration and agentic modernization", text: "Elevate uses migration pilots and transformation rules. What would you learn from the first pilot before scaling?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Elevate migration and agentic modernization", text: "Your GitHub services include Actions runner design. What's one useful question to ask before choosing how to run pipelines?", sourceIndex: 0 }
    ]
  },
  {
    id: "lantern",
    name: "Lantern",
    themes: ["From licenses to leaders", "Embedded Copilot mastery", "Developer champions", "Agent-ready foundations"],
    positioning: "Lantern's GitHub pages connect migration foundations, embedded Copilot adoption, and agentic development. Its Copilot language is 'From licenses to leaders,' with an emphasis on internal advocates and learning on real projects.",
    deliveryModel: "The Copilot Mastery page describes six weeks embedded with teams, champion development, communities of practice, and tracking usage, productivity, and satisfaction. Its migration page connects change management with repository, workflow, and security design.",
    architecture: "The migration page discusses repository structure, CI/CD, secret management, scanning, and Azure integration as agent-ready foundations. The agentic page describes ecosystem integration and governance; it does not publish a detailed reference topology or independently validated autonomy benchmark.",
    interviewAngle: "Ask how embedded work leaves a team stronger after the partner leaves. The contrast between buying licenses and building champions creates a natural business question, while agent context and governance give delivery guests a technical choice.",
    verificationNote: "Lantern's migration, Copilot Mastery, and Agentic DevOps pages were read. Claims about zero disruption, competitive advantage, and autonomous delivery are marketing descriptions, not guarantees or independently verified customer outcomes.",
    sources: [
      { title: "Lantern: GitHub Copilot Mastery", url: "https://lanternstudios.com/github/copilot-mastery/", note: "Describes six-week embedded work, real projects, developer champions, communities of practice, and adoption and satisfaction metrics." },
      { title: "Lantern: GitHub migrations", url: "https://lanternstudios.com/github/migrations/", note: "Describes agent-ready repository and workflow design, secret management, security scanning, change management, and Azure integration." },
      { title: "Lantern: Agentic DevOps", url: "https://lanternstudios.com/github/agentic-devops/", note: "Describes agent ecosystems, integration with existing tools, and governance. Autonomy and performance claims are not treated as proven guarantees." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "From licenses to leaders", text: "Your phrase is From licenses to leaders. What's one myth about buying Copilot and expecting adoption to happen on its own?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "From licenses to leaders", text: "Lantern connects agentic development with business strategy. What gets missed when the conversation starts with autonomy instead of a useful outcome?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "From licenses to leaders", text: "Your migration page talks about agent-ready foundations. What's one thing that moving repositories alone doesn't prepare?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "From licenses to leaders", text: "Your agentic approach includes governance. What's one misconception about giving an agent access to the whole toolchain?", sourceIndex: 2 },
      { audience: "business", tone: "treat", topic: "From licenses to leaders", text: "You embed with teams for six weeks. What helps a developer champion keep the momentum going after that?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "From licenses to leaders", text: "Your Copilot Mastery page includes developer happiness. What's a small signal that tells you the team is enjoying the change?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "From licenses to leaders", text: "You teach Copilot on real projects. What's a good first task that helps a developer learn while delivering something useful?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "From licenses to leaders", text: "Your migration approach includes workflow and security foundations. What would you get right first for a team's first agentic workflow?", sourceIndex: 1 }
    ]
  },
  {
    id: "softwareone-crayon",
    name: "SoftwareOne / Crayon",
    themes: ["Making technology matter", "DevOps partnership", "Migration dry runs", "Cost visibility and ownership"],
    positioning: "SoftwareOne's GitHub story combines DevOps capability assessment, transformation, migration, and long-term partnership. Its public brand update says Crayon is now SoftwareOne, emphasizing optimization, governance, and innovation.",
    deliveryModel: "The DevOps page describes assessment and value-stream mapping, roadmaps, proof of concept, knowledge transfer, and managed infrastructure. A public HR SaaS migration story adds staged dry runs, code validation, strategic check-ins, and a self-service migration tool.",
    architecture: "The case study describes XAML-to-YAML pipeline conversion, a two-hop Azure DevOps migration path, repository integrity checks, Jira integration, and GitHub consolidation. This is one customer's design, not a universal migration prescription or an offering attributed separately to Crayon.",
    interviewAngle: "Ask about the handoff from partner-led delivery to customer ownership, or how consolidation can support both developer experience and cost clarity. Keep the public case study anonymous rather than asking the guest to identify the customer.",
    verificationNote: "SoftwareOne's DevOps offering, HR SaaS case study, and Crayon brand update were read in the browser. The case study's cost and timeline results are not promises. Older certification and user counts are not repeated as current facts. No separate Crayon technical model was verified.",
    sources: [
      { title: "SoftwareOne: GitHub with DevOps Practices", url: "https://www.softwareone.com/en/now/github-with-devops-practices", note: "Describes capability assessment, value-stream mapping, transformation, migration, knowledge transfer, and DevOps partnership. Historic numerical badges are not used." },
      { title: "HR SaaS provider: GitHub migration", url: "https://www.softwareone.com/en/case-studies/global/information-technology/hr-saas-github-migration", note: "Public anonymous customer story describes planning, staged dry runs, validation, pipeline changes, self-service migration, and consolidation. Published outcomes remain case-specific." },
      { title: "Crayon is now SoftwareOne", url: "https://www.softwareone.com/en/now/crayon-is-now-softwareone", note: "SoftwareOne's public brand update connects cost optimization, licensing, cloud economics, governance, and modernization. Does not establish a separate GitHub architecture for Crayon." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "DevOps partnership and customer ownership", text: "Your message is Making technology matter. What's one misconception about optimizing technology spend being only about cutting licenses?", sourceIndex: 2 },
      { audience: "business", tone: "trick", topic: "DevOps partnership and customer ownership", text: "Your GitHub offering starts with capability assessment. What gets missed when a DevOps transformation starts with a shopping list?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "DevOps partnership and customer ownership", text: "Your public HR SaaS story includes staged dry runs. What's one migration assumption that's worth checking before cutover?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "DevOps partnership and customer ownership", text: "Your migration story includes pipeline redesign. What gets overlooked when a team expects a repository move to modernize CI/CD automatically?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "DevOps partnership and customer ownership", text: "Your DevOps Partnership includes knowledge transfer and ongoing support. What makes a customer feel the partner is truly on their team?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "DevOps partnership and customer ownership", text: "Your public migration story connects consolidation with cost savings. What helps finance and engineering agree on what success looks like?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "DevOps partnership and customer ownership", text: "Your HR SaaS story left the customer a self-service migration tool. What makes a handoff genuinely useful to engineers?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "DevOps partnership and customer ownership", text: "Your DevOps approach includes value-stream mapping. What small bottleneck would you look for before adding more automation?", sourceIndex: 0 }
    ]
  },
  {
    id: "cdw",
    name: "CDW",
    themes: ["Accelerating AI Outcomes", "Validated Use Cases", "Listen, Advise, Transform", "To You, With You, For You"],
    positioning: "CDW's UK public materials emphasize outcome-led technology adoption and Accelerating AI Outcomes. These provide interview language about use-case selection, governance, and the relationship between advice, delivery, and ongoing management.",
    deliveryModel: "The UK services page names Listen, Advise, Transact, Transform, and Manage. It distinguishes staff augmentation ('To You'), project assistance ('With You'), and outcome-based delivery ('For You'). The AI Strategy page describes a six-week program with stakeholder workshops and a roadmap.",
    architecture: "The AI page distinguishes off-the-shelf and custom AI, with data and infrastructure readiness, governance, integration, and human oversight. These are broad design considerations, not a verified CDW GitHub reference architecture or a claim that UK programs are offered unchanged in the Americas.",
    interviewAngle: "Use CDW's public delivery language to ask how a customer chooses the right level of help. For technical guests, validated use cases, data readiness, and the choice between packaged and custom AI create accessible conversations without inventing GitHub-specific services.",
    verificationNote: "CDW's US GitHub page could not be reviewed because requests were rate-limited. These prompts use reviewed official UK AI, services, and solutions pages instead. Regional availability and a GitHub-specific delivery model remain unverified; the downloadable AI guide was not read.",
    sources: [
      { title: "CDW UK: Accelerating AI Outcomes", url: "https://www.uk.cdw.com/it-solutions/ai/", note: "Describes AI Discover, a six-week AI Strategy program, governance, Validated Use Cases, off-the-shelf versus custom AI, and human oversight. Not a GitHub-specific service page." },
      { title: "CDW UK: services and delivery models", url: "https://www.uk.cdw.com/it-services/", note: "Defines Listen, Advise, Transact, Transform, Manage, plus To You, With You, and For You delivery options. Regional service descriptions, not verified AMER program availability." },
      { title: "CDW UK: integrated technology solutions", url: "https://www.uk.cdw.com/it-solutions/", note: "Describes outcome-led solutions and Assess, Design, Deploy, Manage, including roadmap reviews, architecture, pilots, training, and ongoing operations." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Outcome-led AI and delivery choices", text: "CDW's UK site calls them Validated Use Cases. What's one myth about a flashy AI demo automatically being a useful business case?", sourceIndex: 0 },
      { audience: "business", tone: "trick", topic: "Outcome-led AI and delivery choices", text: "Your UK services page says To You, With You, and For You. What's one misconception about every customer needing the same delivery model?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Outcome-led AI and delivery choices", text: "Your AI guidance separates off-the-shelf from custom AI. What's one assumption to check before deciding to build something custom?", sourceIndex: 0 },
      { audience: "technical", tone: "trick", topic: "Outcome-led AI and delivery choices", text: "CDW's AI approach emphasizes human oversight. What's one thing that adding an agent does not remove from an engineer's responsibilities?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Outcome-led AI and delivery choices", text: "Your UK AI Discover program brings business, IT, data, and legal together. What's a useful first question to get everyone aligned?", sourceIndex: 0 },
      { audience: "business", tone: "treat", topic: "Outcome-led AI and delivery choices", text: "Your services approach starts with Listen. What do you love learning about a customer before recommending technology?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Outcome-led AI and delivery choices", text: "Your UK solutions approach includes Assess, Design, Deploy, Manage. What's one small pilot that helps a team learn before scaling?", sourceIndex: 2 },
      { audience: "technical", tone: "treat", topic: "Outcome-led AI and delivery choices", text: "Your AI Strategy includes data and infrastructure readiness. What's one readiness check you'd do before connecting a workflow to AI?", sourceIndex: 0 }
    ]
  },
  {
    id: "xebia",
    name: "Xebia",
    themes: ["Managed Developer Platform", "Well-Architected reviews", "Copilot enablement", "Curated workflows"],
    positioning: "Xebia connects GitHub migration, Copilot enablement, Actions, security, and training with ongoing platform management. Its Managed Developer Platform adds a post-migration conversation about usage, costs, standards, and developer support.",
    deliveryModel: "Public GitHub materials span assessments, rollout, optimization, and managed platforms. The Managed Developer Platform describes recurring reporting, repository scans, Well-Architected reviews, a skills library, and curated Actions alongside migration and training services.",
    architecture: "The public model focuses on platform operations: repository visibility, usage and cost reporting, reusable automation, and architectural reviews. It does not publish one mandatory topology. Copilot enablement emphasizes developer workflows rather than a universal productivity multiplier.",
    interviewAngle: "Ask what makes a developer platform useful after launch, or how the team balances consistency with developer choice. Managed operations and cost visibility give sales guests a business angle while curated Actions and review practices give delivery guests a technical one.",
    verificationNote: "Xebia's GitHub partnership, Managed Developer Platform, and Copilot productivity pages were read. Linked webinars and gated white papers were not reviewed. Described capabilities are vendor statements, not independent evidence of customer ROI.",
    sources: [
      { title: "Xebia: GitHub partnership", url: "https://xebia.com/partners/github/", note: "Describes GitHub migration, Copilot, Actions, Advanced Security, training, assessments, rollout, and optimization." },
      { title: "Xebia: Managed Developer Platform", url: "https://xebia.com/partners/github/managed-developer-platform-csp/", note: "Describes usage and cost reporting, repository scans, Well-Architected Framework reviews, a skills library, and curated Actions." },
      { title: "Xebia: developer productivity with Copilot", url: "https://xebia.com/partners/github/developer-productivity-with-github-copilot/", note: "Emphasizes reducing routine work and improving developer workflows. Linked articles, webinars, and gated resources are not treated as read evidence." }
    ],
    questions: [
      { audience: "business", tone: "trick", topic: "Managed platforms and developer value", text: "Your Managed Developer Platform continues after rollout. What's one myth about the job being finished when GitHub goes live?", sourceIndex: 1 },
      { audience: "business", tone: "trick", topic: "Managed platforms and developer value", text: "Your Copilot page talks about getting back to the core of development. What gets missed when AI value is reduced to writing code faster?", sourceIndex: 2 },
      { audience: "technical", tone: "trick", topic: "Managed platforms and developer value", text: "Your platform offering includes curated Actions. What's one misconception about standardization taking away developer choice?", sourceIndex: 1 },
      { audience: "technical", tone: "trick", topic: "Managed platforms and developer value", text: "Xebia includes Well-Architected reviews in platform management. What gets missed when teams look only at whether pipelines are green?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Managed platforms and developer value", text: "Your Managed Developer Platform includes usage and cost reporting. What makes that report useful to both engineering and finance?", sourceIndex: 1 },
      { audience: "business", tone: "treat", topic: "Managed platforms and developer value", text: "Xebia brings migration, enablement, and ongoing management together. Who should come find your team at Universe, and why?", sourceIndex: 0 },
      { audience: "technical", tone: "treat", topic: "Managed platforms and developer value", text: "Your platform offering includes a skills library and curated Actions. What's one reusable pattern you'd give a new team first?", sourceIndex: 1 },
      { audience: "technical", tone: "treat", topic: "Managed platforms and developer value", text: "Your Copilot message is about freeing time for interesting work. What's a routine task you'd help a developer tackle first?", sourceIndex: 2 }
    ]
  }
];
