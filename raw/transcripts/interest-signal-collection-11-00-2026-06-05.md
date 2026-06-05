---
title: Interest Signal Collection — 2026-06-05 11:00 KST
created: 2026-06-05
updated: 2026-06-05
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release notes, launch posts, and GitHub Trending
route_hint: append_existing
route_confidence: 0.84
route_reason: "Compared against recent 11:00/22:00 new-target cache baselines, including 2026-06-04 22:00 and 11:00, before judging novelty.; Collected only new-target surfaces: big-tech/infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending; social-signal surfaces were intentionally excluded.; Strict promotion bias: repeated official-feed rows stayed raw_only/discard; durable rows append existing managed-agent / AI-infra pages unless they clearly open a new branch.; Fresh high-signal rows strengthen existing managed-agent / AI-infra control-plane axes: AWS PCS now provides a production-ready Deep Learning AMI; Scaling AI Agents: A Step-by-Step Guide to Deploying ADK on GKE Autopilot; Running Agents on Kubernetes with Agent Sandbox; AWS HealthOmics now supports Nextflow version 26.04; Managed Deep Agents: the fastest way to ship a production deep agent; What’s new with Google Data Cloud."
routing:
  route: append_existing
  confidence: 0.84
  reasons:
    - "Compared against recent 11:00/22:00 new-target cache baselines, including 2026-06-04 22:00 and 11:00, before judging novelty."
    - "Collected only new-target surfaces: big-tech/infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending; social-signal surfaces were intentionally excluded."
    - "Strict promotion bias: repeated official-feed rows stayed raw_only/discard; durable rows append existing managed-agent / AI-infra pages unless they clearly open a new branch."
    - "Fresh high-signal rows strengthen existing managed-agent / AI-infra control-plane axes: AWS PCS now provides a production-ready Deep Learning AMI; Scaling AI Agents: A Step-by-Step Guide to Deploying ADK on GKE Autopilot; Running Agents on Kubernetes with Agent Sandbox; AWS HealthOmics now supports Nextflow version 26.04; Managed Deep Agents: the fastest way to ship a production deep agent; What’s new with Google Data Cloud."
  signal_tags:
    - new-target
    - official-feeds
    - rss
    - github-trending
    - append_existing
---

# Raw Transcript — Interest Signal Collection 11:00 KST 2026-06-05

Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-06-05
Captured at: 2026-06-05T11:03:57.648983+09:00

## Live session notes
- This was the 11:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against recent 11:00/22:00 new-target raw/cache files before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, official HTML/blog index pages, and GitHub Trending HTML; disposable JSON cache: `/home/ck/wiki/.cache/new-target-11-00-2026-06-05.json`.
- URL evidence rule was applied: every captured row below includes the canonical item URL or the available feed/surface URL plus an explicit note if exact item URL was unavailable.

## Strongest routing read
- Overall route: `append_existing`.
- Route driver: fresh official / launch / trending rows deepen the managed-agent and AI-infra control-plane lanes rather than creating a new concept page.
- Durable action: append existing managed-agent / AI-infra pages plus Honcho/log audit; leave `index.md` unchanged unless a new page is created.

## 1) Strongest rows selected for triage

### AWS What's New
```text
AWS PCS now provides a production-ready Deep Learning AMI
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-pcs-deep-learning-ami/
Published: Mon, 01 Jun 2026 16:07:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 129
Signal tags: agent, runtime, inference, database, release
Today, AWS Parallel Computing Service (AWS PCS) launches PCS-ready DLAMI, an AWS-maintained Amazon Machine Image built on the Deep Learning Base GPU AMI (Ubuntu 24.04). It provides a production-quality foundation for AI/ML training and high performance computing (HPC), with core infrastructure components pre-installed and tested for compatibility. AWS PCS is a managed service that makes it easier for you to run and scale your HPC workloads and build scientific and engineering models on AWS using Slurm. You can use AWS PCS to build complete, elastic environments that integrate compute, storage, networking, and visualization tools. AWS PCS simplifies cluster operations with managed updates and built-in observability features, helping to remove the burden of maintenance. You can work in a familiar environment, focusing on your research and innovation instead of worrying about infrastructure. The AMI inherits the operating system, NVIDIA GPU drivers, CUDA toolkit, EFA drivers, and Lustre client from the source Deep Learning Base GPU AMI, and adds PCS Agent, Slurm for PCS, and EFS utilities. Multiple supported Slurm versions are included, and the correct version activates automatically based on your cluster configuration. You can add frameworks, libraries, and application software on top to complete your environment. AWS releases updated AMIs regularly when the source DLAMI or PCS c
```

### Google Cloud Blog
```text
Scaling AI Agents: A Step-by-Step Guide to Deploying ADK on GKE Autopilot
URL: https://cloud.google.com/blog/topics/developers-practitioners/scaling-ai-agents-a-step-by-step-guide-to-deploying-adk-on-gke-autopilot/
Published: Thu, 04 Jun 2026 07:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 119
Signal tags: agent, runtime, kubernetes, security, database
While building AI agents locally using Google’s Agent Development Kit (ADK) is an excellent way to prototype, production-ready agents require a robust, scalable infrastructure. For developers looking to move beyond simple instances and into the world of managed container orchestration, Google Kubernetes Engine (GKE) Autopilot offers the perfect balance of flexibility and ease of use. In this tutorial, I will walk you through building a technical agent with ADK and deploying it to GKE Autopilot. We will focus on utilizing Gemini on Vertex AI as the core model and ensure highest security standards by implementing Workload Identity for permission management. Understanding the GKE ADK Architecture Deploying an ADK agent on GKE Autopilot involves more than just running a container. We leverage GKE's native capabilities to handle scaling and security. Our architecture consists of an ADK-based Python application packaged as a Docker image and stored in Artifact Registry. This container runs as a Deployment on GKE Autopilot, where it communicates securely with Vertex AI using Workload Identity—mapping a Kubernetes Service Account to a Google Cloud IAM Service Account. To expose the agent to the world, we use the Kubernetes Gateway API, the modern successor to Ingress, which provides a cleaner separation of concerns and native support for Google Cloud Load Balancing. Prerequisites Befor
```

### Kubernetes Blog
```text
Running Agents on Kubernetes with Agent Sandbox
URL: https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
Published: Fri, 20 Mar 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 109
Signal tags: agent, runtime, inference, kubernetes
The landscape of artificial intelligence is undergoing a massive architectural shift. In the early days of generative AI, interacting with a model was often treated as a transient, stateless function call: a request that spun up, executed for perhaps 50 milliseconds, and terminated. Today, the world is witnessing AI v2 eating AI v1. The ecosystem is moving from short-lived, isolated tasks to deploying multiple, coordinated AI agents that run constantly. These autonomous agents need to maintain context, use external tools, write and execute code, and communicate with one another over extended periods. As platform engineering teams look for the right infrastructure to host these new AI workloads, one platform stands out as the natural choice: Kubernetes. However, mapping these unique agentic workloads to traditional Kubernetes primitives requires a new abstraction. This is where the new Agent Sandbox project (currently in development under SIG Apps) comes into play. The Kubernetes advantage (and the abstraction gap) Kubernetes is the de facto standard for orchestrating cloud-native applications precisely because it solves the challenges of extensibility, robust networking, and ecosystem maturity. However, as AI evolves from short-lived inference requests to long-running, autonomous agents, we are seeing the emergence of a new operational pattern. AI agents, by contrast, are typic
```

### AWS What's New
```text
AWS HealthOmics now supports Nextflow version 26.04
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-26-04/
Published: Mon, 01 Jun 2026 23:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 105
Signal tags: agent, runtime, inference
AWS HealthOmics now supports Nextflow version 26.04, enabling customers to take advantage of new Nextflow features and enhancements: record types, the strict syntax parser, workflow output summaries, and agent logging mode. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. The strict syntax parser, now enabled by default in Nextflow v26.04, helps customers save compute time and costs by enforcing strict linting, consistent block structures, and unambiguous scoping, catching issues during pipeline initialization rather than hours into workflows. Record types allow workflow developers to write workflows with meaningful data names rather than keeping track of order of tuple elements, making workflows more readable, and less error-prone. Workflow output summary in JSON format simplifies integration with downstream tooling. Agent logging mode provides structured, minimal output optimized for AI-assisted workflow debugging and development. Nextflow v26.04 is now available in all AWS HealthOmics regions: US East (N. Virginia), US West (Oregon), Europe (Frankfurt, Ireland, London), Israel (Tel Aviv), and Asia Pacific (Singapore, Seoul). To learn more, visit the AWS HealthOmics Nextflow workflow definition specifics documentation .
```

### LangChain Blog (site)
```text
Managed Deep Agents: the fastest way to ship a production deep agent
URL: https://www.langchain.com/blog/introducing-managed-deep-agents
Published: Wed, 13 May 2026 22:32:29 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 105
Signal tags: agent, runtime
Run deep agents in production with durable execution, sandboxes, tool access, and LangSmith observability, without building the runtime yourself. Now in private beta
```

### Google Cloud Blog
```text
What’s new with Google Data Cloud
URL: https://cloud.google.com/blog/products/data-analytics/whats-new-with-google-data-cloud/
Published: Thu, 04 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 97
Signal tags: agent, runtime, database, release
June 1 - June 5 Beyond the Query: Powering AI Agents with Bigtable, Firestore & Memorystore Discover the latest advancements in Google Cloud's NoSQL Database portfolio, including Bigtable, Firestore, and Memorystore. This series is designed for a broad audience: whether you are exploring these databases for the first time or are an existing user looking to leverage the new capabilities announced at Next '26. Register here to secure your spot! Cloud Engineer's AI Toolkit Workshops: Solve data-driven challenges with BigQuery, AlloyDB , Gemini and more. Hosted by Google Cloud Labs, this highly technical event is built specifically for Platform Engineers, SREs, and cloud infrastructure teams ready to bridge the gap between AI prototypes and production-grade deployments. Look out for more locations coming soon Toronto - June 25 (Data Cloud) | RSVP Here Chicago - June 30 (Data Cloud) | RSVP Here Start a 10-day Bigtable free trial with a 1 node SSD cluster and up to 500GB of storage capacity. W ith no credit card required to start, you can easily ingest workloads and manage workloads that require low-latency, high-throughput, and predictable access. Plus, new Google Cloud customers get $300 in free credits on signup. May 11 - May 15 Managed Service for Apache Airflow has launched a wave of new features, including the general availability of Airflow 3.1, AI-powered agentic troubleshoot
```

### Kubernetes Blog
```text
Announcing the AI Gateway Working Group
URL: https://kubernetes.io/blog/2026/03/09/announcing-ai-gateway-wg/
Published: Mon, 09 Mar 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 97
Signal tags: inference, kubernetes, security, release
The community around Kubernetes includes a number of Special Interest Groups (SIGs) and Working Groups (WGs) facilitating discussions on important topics between interested contributors. Today, we're excited to announce the formation of the AI Gateway Working Group , a new initiative focused on developing standards and best practices for networking infrastructure that supports AI workloads in Kubernetes environments. What is an AI Gateway? In a Kubernetes context, an AI Gateway refers to network gateway infrastructure (including proxy servers, load-balancers, etc.) that generally implements the Gateway API specification with enhanced capabilities for AI workloads. Rather than defining a distinct product category, AI Gateways describe infrastructure designed to enforce policy on AI traffic, including: Token-based rate limiting for AI APIs. Fine-grained access controls for inference APIs. Payload inspection enabling intelligent routing, caching, and guardrails. Support for AI-specific protocols and routing patterns. Working group charter and mission The AI Gateway Working Group operates under a clear charter with the mission to develop proposals for Kubernetes Special Interest Groups (SIGs) and their sub-projects. Its primary goals include: Standards Development : Create declarative APIs, standards, and guidance for AI workload networking in Kubernetes. Community Collaboration :
```

### Kubernetes Blog
```text
Introducing Node Readiness Controller
URL: https://kubernetes.io/blog/2026/02/03/introducing-node-readiness-controller/
Published: Tue, 03 Feb 2026 10:00:00 +0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, inference, kubernetes, database, release
In the standard Kubernetes model, a node’s suitability for workloads hinges on a single binary "Ready" condition. However, in modern Kubernetes environments, nodes require complex infrastructure dependencies—such as network agents, storage drivers, GPU firmware, or custom health checks—to be fully operational before they can reliably host pods. Today, on behalf of the Kubernetes project, I am announcing the Node Readiness Controller . This project introduces a declarative system for managing node taints, extending the readiness guardrails during node bootstrapping beyond standard conditions. By dynamically managing taints based on custom health signals, the controller ensures that workloads are only placed on nodes that met all infrastructure-specific requirements. Why the Node Readiness Controller? Core Kubernetes Node "Ready" status is often insufficient for clusters with sophisticated bootstrapping requirements. Operators frequently struggle to ensure that specific DaemonSets or local services are healthy before a node enters the scheduling pool. The Node Readiness Controller fills this gap by allowing operators to define custom scheduling gates tailored to specific node groups. This enables you to enforce distinct readiness requirements across heterogeneous clusters, ensuring for example, that GPU equipped nodes only accept pods once specialized drivers are verified, while
```

### LangChain Blog (site)
```text
Interpreters in Deep Agents: Code Between Tool Calls and Sandboxes
URL: https://www.langchain.com/blog/give-your-agents-an-interpreter
Published: Wed, 20 May 2026 18:55:56 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, runtime
Deep Agents now supports interpreters: small embedded runtimes where agents write code to coordinate tools, hold working state, and decide what enters model context.
```

### LangChain Blog (site)
```text
LangSmith LLM Gateway: runtime governance built into the agent lifecycle
URL: https://www.langchain.com/blog/introducing-llm-gateway
Published: Fri, 15 May 2026 22:28:53 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 89
Signal tags: agent, runtime, security
Introducing LangSmith LLM Gateway: runtime governance for AI agents with spend limits, PII redaction, and trace continuity, built directly into LangSmith.
```

### Simon Willison
```text
I think Anthropic and OpenAI have found product-market fit
URL: https://simonwillison.net/2026/May/27/product-market-fit/#atom-everything
Published: 2026-05-27T16:38:35+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 88
Signal tags: agent, codex
Anthropic are strongly rumored to be about to have their first profitable quarter. Stories are circulating of companies surprised at how expensive their LLM bills are becoming from usage by their staff. I think this is because OpenAI and Anthropic have both found product-market fit. Enterprise customers are now paying API prices I think they've found product-market fit And they're ramping up The AI-failure stories around this are pretty thin We also know the labs are spending a lot API revenue is becoming less important April is a new inflection point Enterprise customers are now paying API prices I currently subscribe to the $100/month Max plan from Anthropic and the $100/month Pro plan from OpenAI. If you are a heavy user of coding agents these plans are a fantastic deal. I just ran the ccusage tool on my laptop to get an estimate of how much I would have spent if I were to pay for API tokens in the past 30 days and got: $1,199.79 for Anthropic Claude Code $980.37 for OpenAI Codex That's $2,180.16 worth of tokens for $200 - not bad at all! I'm a moderately heavy user of these tools, but I'm certainly not running agents every hour of the day and night. I had assumed that companies making extensive use of agents were getting similar discounts. It turns out I could not have been more wrong about that. I haven't been able to track down the exact date, but at some point in the las
```

### LangChain Blog (site)
```text
The Anatomy of an Agent Harness
URL: https://www.langchain.com/blog/the-anatomy-of-an-agent-harness
Published: Thu, 21 May 2026 20:32:38 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 83
Signal tags: agent, runtime, database
Learn how agent harnesses transform AI models into autonomous work engines. Explore core components: filesystems, sandboxes, and memory.
```

### LangChain Blog (site)
```text
Open Models have crossed a threshold
URL: https://www.langchain.com/blog/open-models-have-crossed-a-threshold
Published: Mon, 04 May 2026 13:19:36 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 83
Signal tags: agent, eval
Open models like GLM-5 and MiniMax M2.7 now match closed frontier models on core agent tasks — file operations, tool use, and instruction following — at a fraction of the cost and latency. Here's what our evals show and how to start using them in Deep Agents.
```

### AWS What's New
```text
Amazon SageMaker Data Agent integrates business context into conversations
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-data-agent-bdc/
Published: Thu, 04 Jun 2026 21:51:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, runtime, security, database
Amazon SageMaker Data Agent now integrates with SageMaker Catalog business context and metadata, enabling data practitioners to discover datasets and generate more accurate SQL and Python code using business terminology instead of cryptic technical table names. This integration allows the Data Agent to leverage the business context that companies have invested months curating in their SageMaker Catalog, including those synced from Collibra, Atlan, and Alation, to deliver more accurate data discovery and code generation. With this capability, data practitioners can ask questions like "Calculate customer retention rate" or "What data do I have on customer churn?" and the Data Agent will search glossary terms, custom metadata forms, asset summaries, and README content to identify the correct tables and columns. The agent generates more accurate code on first attempt by understanding business context, plans multi-step workflows with the correct sequence of tables and transformations, and respects data governance by checking subscription status and providing access request links when needed. Organizations maximize their existing catalog investment without changing the current data workflows, reducing time-to-insight, and enabling data teams to work in business language rather than deciphering technical table names. This integration is available in SageMaker Unified Studio notebooks
```

### AWS What's New
```text
Amazon Quick now supports VPC connectivity for MCP connections
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/
Published: Mon, 01 Jun 2026 17:26:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, mcp, runtime
Amazon Quick now enables enterprise customers to connect their privately hosted Model Context Protocol (MCP) servers to Quick through Amazon Virtual Private Cloud (VPC). Amazon Quick is an AI assistant that turns questions into answers, answers into actions, and actions into outcomes for you and your entire team. Previously, Quick's MCP support was limited to third-party hosted servers accessible over the public internet. With VPC support, organizations that host MCP servers on private networks for proprietary applications, custom data sources, and internal tools can now securely extend those capabilities to AI workflows in Quick. With VPC connectivity for MCP, you can connect Quick to MCP servers running on Amazon EC2, AWS Fargate, AWS Agentcore, or other compute within your private network without exposing them to the internet. During MCP connector creation, select your VPC connection and provide your MCP server URL. Once connected, your team interacts with private MCP servers through natural language in Quick, with all traffic routed securely through your VPC. VPC support for MCP servers is available in all AWS Regions where Amazon Quick is available. Learn more about Amazon Quick and try for free. To learn more about connecting private MCP servers, visit the MCP documentation and the VPC connectivity guide .
```

### AWS What's New
```text
Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, runtime, security, release
Amazon Bedrock AgentCore Identity now allows customers the ability to reference existing AWS Secrets Manager secret ARNs directly in AgentCore Identity Credential Providers. Previously, AgentCore Identity used a service-managed secret approach, where secrets were created and managed by the service on the customer's behalf. This approach prevented customers from applying resource tags on create, encrypting secrets with a customer-managed key (CMK), or applying other organization-specific governance controls at the time of secret creation — causing friction for teams with strict governance requirements. Now, customers create and manage their secrets in AWS Secrets Manager using their own governance and compliance policies, including custom CMKs, tagging strategies, automatic rotation and resource policies, and then reference the existing secret ARN when configuring a Credential Provider in AgentCore Identity. This gives customers full ownership of how their secrets are created, classified, and governed, without changing how AgentCore Identity uses them at runtime. Amazon Bedrock AgentCore Identity bring your own secret is now generally available in 14 AWS Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (
```

### Kubernetes Blog
```text
Announcing the Checkpoint/Restore Working Group
URL: https://kubernetes.io/blog/2026/01/21/introducing-checkpoint-restore-wg/
Published: Wed, 21 Jan 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: runtime, inference, kubernetes, security, release
The community around Kubernetes includes a number of Special Interest Groups (SIGs) and Working Groups (WGs) facilitating discussions on important topics between interested contributors. Today we would like to announce the new Kubernetes Checkpoint Restore WG focusing on the integration of Checkpoint/Restore functionality into Kubernetes. Motivation and use cases There are several high-level scenarios discussed in the working group: Optimizing resource utilization for interactive workloads, such as Jupyter notebooks and AI chatbots Accelerating startup of applications with long initialization times, including Java applications and LLM inference services Using periodic checkpointing to enable fault-tolerance for long-running workloads, such as distributed model training Providing interruption-aware scheduling with transparent checkpoint/restore, allowing lower-priority Pods to be preempted while preserving the runtime state of applications Facilitating Pod migration across nodes for load balancing and maintenance, without disrupting workloads. Enabling forensic checkpointing to investigate and analyze security incidents such as cyberattacks, data breaches, and unauthorized access. Across these scenarios, the goal is to help facilitate discussions of ideas between the Kubernetes community and the growing Checkpoint/Restore in Userspace (CRIU) ecosystem. The CRIU community include
```

### OpenAI News RSS
```text
Building self-improving tax agents with Codex
URL: https://openai.com/index/building-self-improving-tax-agents-with-codex
Published: Wed, 27 May 2026 07:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 77
Signal tags: agent, codex, runtime
See how OpenAI, Thrive, and Crete built a self-improving tax agent with Codex, automating filings, improving accuracy, and accelerating workflows.
```

## 2) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
Final URL: `https://openai.com/news/rss.xml`
Status/content: `200` / `text/xml; charset=utf-8`

```text
Building self-improving tax agents with Codex
URL: https://openai.com/index/building-self-improving-tax-agents-with-codex
Published: Wed, 27 May 2026 07:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 77
Signal tags: agent, codex, runtime
See how OpenAI, Thrive, and Crete built a self-improving tax agent with Codex, automating filings, improving accuracy, and accelerating workflows.
```

```text
OpenAI and Dell partner to bring Codex to hybrid and on-premise enterprise environments
URL: https://openai.com/index/dell-codex-enterprise-partnership
Published: Mon, 18 May 2026 10:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 77
Signal tags: agent, codex, runtime
OpenAI and Dell partner to bring Codex to hybrid and on-premise environments, helping enterprises deploy AI coding agents securely across data and workflows.
```

```text
OpenAI named a Leader in enterprise coding agents by Gartner
URL: https://openai.com/index/gartner-2026-agentic-coding-leader
Published: Fri, 22 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 59
Signal tags: agent, codex
OpenAI is named a leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with Codex recognized for innovation and enterprise-scale deployment.
```

```text
Warp’s big bet on building open source with GPT-5.5
URL: https://openai.com/index/warp
Published: Wed, 27 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 53
Signal tags: agent, runtime
Warp uses GPT-5.5 and OpenAI models to coordinate coding agents across local, cloud, and open-source development workflows.
```

```text
Databricks brings GPT-5.5 to enterprise agent workflows
URL: https://openai.com/index/databricks
Published: Fri, 15 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 53
Signal tags: agent, runtime, eval
Databricks uses GPT-5.5 for enterprise agent workflows after the model set a new state of the art on the OfficeQA Pro benchmark.
```

```text
How Virgin Atlantic ships faster with Codex
URL: https://openai.com/index/virgin-atlantic
Published: Fri, 22 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 45
Signal tags: codex, database
How Virgin Atlantic used Codex to ship its revamped mobile app on a fixed holiday travel deadline, reaching near-total unit test coverage and zero P1 defects.
```

```text
How Ramp engineers accelerate code review with Codex
URL: https://openai.com/index/ramp
Published: Wed, 20 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 31
Signal tags: codex
How Ramp engineers use Codex with GPT-5.5 to review code and ship improvements, allowing them to get substantive feedback in minutes instead of hours.
```

```text
How data science teams use Codex
URL: https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex
Published: Fri, 15 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 31
Signal tags: codex
See how data science teams can use Codex to build root-cause briefs, impact readouts, KPI memos, scoped analyses, and dashboard specs from real work inputs.
```

```text
How business operations teams use Codex
URL: https://openai.com/academy/codex-for-work/how-business-operations-teams-use-codex
Published: Fri, 15 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 31
Signal tags: codex
See how business operations teams can use Codex to create initiative briefs, strategy updates, leadership decision packets, progress updates, and more from real work inputs.
```

```text
The next phase of OpenAI’s Education for Countries
URL: https://openai.com/index/the-next-phase-of-education-for-countries
Published: Wed, 20 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 29
Signal tags: (none)
OpenAI advances Education for Countries, expanding AI adoption in schools with new partnerships, teacher training, and tools to improve global learning outcomes.
```

```text
Advancing content provenance for a safer, more transparent AI ecosystem
URL: https://openai.com/index/advancing-content-provenance
Published: Tue, 19 May 2026 10:45:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 29
Signal tags: (none)
OpenAI advances AI content provenance with Content Credentials, SynthID, and a verification tool to help people identify and trust AI-generated media.
```

```text
AdventHealth advances whole-person care with OpenAI
URL: https://openai.com/index/adventhealth
Published: Thu, 21 May 2026 12:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 25
Signal tags: runtime
AdventHealth is using ChatGPT for Healthcare to streamline workflows, reduce administrative burden, and return more time to patient care.
```

```text
Dreaming: Better memory for a more helpful ChatGPT
URL: https://openai.com/index/chatgpt-memory-dreaming
Published: Thu, 04 Jun 2026 09:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: database
ChatGPT introduces a new memory system to better remember preferences, keeping context fresh and relevant across conversations.
```

```text
OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership
URL: https://openai.com/index/grupo-folha-grupo-uol-partnership
Published: Mon, 25 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
OpenAI partners with Grupo Folha and Grupo UOL to bring trusted Brazilian journalism to ChatGPT, expanding access to news with attribution and transparency.
```

```text
Introducing OpenAI for Singapore
URL: https://openai.com/index/introducing-openai-for-singapore
Published: Tue, 19 May 2026 20:30:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
OpenAI for Singapore launches a multi-year AI partnership to expand deployment, build local talent, and support businesses and public services with AI.
```

```text
A new personal finance experience in ChatGPT
URL: https://openai.com/index/personal-finance-chatgpt
Published: Fri, 15 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
Preview a new personal finance experience in ChatGPT for Pro users in the U.S. Securely connect your financial accounts and get AI-powered insights and guidance grounded in your financial context, goals, and priorities.
```

```text
Biodefense in the Intelligence Age
URL: https://openai.com/index/biodefense-in-the-intelligence-age
Published: Thu, 04 Jun 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
An action plan for AI-powered biological resilience
```

```text
Election information and safeguards in 2026
URL: https://openai.com/index/election-safeguards-2026
Published: Wed, 27 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
Ahead of global elections, we’re helping people access information, supporting cyber defenders, and increasing AI transparency
```

```text
An OpenAI model has disproved a central conjecture in discrete geometry
URL: https://openai.com/index/model-disproves-discrete-geometry-conjecture
Published: Wed, 20 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
An OpenAI model solved the 80-year-old unit distance problem, disproving a major conjecture in discrete geometry and marking a milestone in AI-driven mathematics.
```

```text
OpenAI and Malta partner to bring ChatGPT Plus to all citizens
URL: https://openai.com/index/malta-chatgpt-plus-partnership
Published: Sat, 16 May 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
OpenAI and Malta partner to expand AI access, offering ChatGPT Plus and training to help citizens build practical AI skills and use AI responsibly.
```

### AWS What's New
Source URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Final URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
AWS PCS now provides a production-ready Deep Learning AMI
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-pcs-deep-learning-ami/
Published: Mon, 01 Jun 2026 16:07:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 129
Signal tags: agent, runtime, inference, database, release
Today, AWS Parallel Computing Service (AWS PCS) launches PCS-ready DLAMI, an AWS-maintained Amazon Machine Image built on the Deep Learning Base GPU AMI (Ubuntu 24.04). It provides a production-quality foundation for AI/ML training and high performance computing (HPC), with core infrastructure components pre-installed and tested for compatibility. AWS PCS is a managed service that makes it easier for you to run and scale your HPC workloads and build scientific and engineering models on AWS using Slurm. You can use AWS PCS to build complete, elastic environments that integrate compute, storage, networking, and visualization tools. AWS PCS simplifies cluster operations with managed updates and built-in observability features, helping to remove the burden of maintenance. You can work in a familiar environment, focusing on your research and innovation instead of worrying about infrastructure. The AMI inherits the operating system, NVIDIA GPU drivers, CUDA toolkit, EFA drivers, and Lustre client from the source Deep Learning Base GPU AMI, and adds PCS Agent, Slurm for PCS, and EFS utilities. Multiple supported Slurm versions are included, and the correct version activates automatically based on your cluster configuration. You can add frameworks, libraries, and application software on top to complete your environment. AWS releases updated AMIs regularly when the source DLAMI or PCS c
```

```text
AWS HealthOmics now supports Nextflow version 26.04
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-26-04/
Published: Mon, 01 Jun 2026 23:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 105
Signal tags: agent, runtime, inference
AWS HealthOmics now supports Nextflow version 26.04, enabling customers to take advantage of new Nextflow features and enhancements: record types, the strict syntax parser, workflow output summaries, and agent logging mode. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. The strict syntax parser, now enabled by default in Nextflow v26.04, helps customers save compute time and costs by enforcing strict linting, consistent block structures, and unambiguous scoping, catching issues during pipeline initialization rather than hours into workflows. Record types allow workflow developers to write workflows with meaningful data names rather than keeping track of order of tuple elements, making workflows more readable, and less error-prone. Workflow output summary in JSON format simplifies integration with downstream tooling. Agent logging mode provides structured, minimal output optimized for AI-assisted workflow debugging and development. Nextflow v26.04 is now available in all AWS HealthOmics regions: US East (N. Virginia), US West (Oregon), Europe (Frankfurt, Ireland, London), Israel (Tel Aviv), and Asia Pacific (Singapore, Seoul). To learn more, visit the AWS HealthOmics Nextflow workflow definition specifics documentation .
```

```text
Amazon SageMaker Data Agent integrates business context into conversations
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-data-agent-bdc/
Published: Thu, 04 Jun 2026 21:51:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, runtime, security, database
Amazon SageMaker Data Agent now integrates with SageMaker Catalog business context and metadata, enabling data practitioners to discover datasets and generate more accurate SQL and Python code using business terminology instead of cryptic technical table names. This integration allows the Data Agent to leverage the business context that companies have invested months curating in their SageMaker Catalog, including those synced from Collibra, Atlan, and Alation, to deliver more accurate data discovery and code generation. With this capability, data practitioners can ask questions like "Calculate customer retention rate" or "What data do I have on customer churn?" and the Data Agent will search glossary terms, custom metadata forms, asset summaries, and README content to identify the correct tables and columns. The agent generates more accurate code on first attempt by understanding business context, plans multi-step workflows with the correct sequence of tables and transformations, and respects data governance by checking subscription status and providing access request links when needed. Organizations maximize their existing catalog investment without changing the current data workflows, reducing time-to-insight, and enabling data teams to work in business language rather than deciphering technical table names. This integration is available in SageMaker Unified Studio notebooks
```

```text
Amazon Quick now supports VPC connectivity for MCP connections
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/
Published: Mon, 01 Jun 2026 17:26:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, mcp, runtime
Amazon Quick now enables enterprise customers to connect their privately hosted Model Context Protocol (MCP) servers to Quick through Amazon Virtual Private Cloud (VPC). Amazon Quick is an AI assistant that turns questions into answers, answers into actions, and actions into outcomes for you and your entire team. Previously, Quick's MCP support was limited to third-party hosted servers accessible over the public internet. With VPC support, organizations that host MCP servers on private networks for proprietary applications, custom data sources, and internal tools can now securely extend those capabilities to AI workflows in Quick. With VPC connectivity for MCP, you can connect Quick to MCP servers running on Amazon EC2, AWS Fargate, AWS Agentcore, or other compute within your private network without exposing them to the internet. During MCP connector creation, select your VPC connection and provide your MCP server URL. Once connected, your team interacts with private MCP servers through natural language in Quick, with all traffic routed securely through your VPC. VPC support for MCP servers is available in all AWS Regions where Amazon Quick is available. Learn more about Amazon Quick and try for free. To learn more about connecting private MCP servers, visit the MCP documentation and the VPC connectivity guide .
```

```text
Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: agent, runtime, security, release
Amazon Bedrock AgentCore Identity now allows customers the ability to reference existing AWS Secrets Manager secret ARNs directly in AgentCore Identity Credential Providers. Previously, AgentCore Identity used a service-managed secret approach, where secrets were created and managed by the service on the customer's behalf. This approach prevented customers from applying resource tags on create, encrypting secrets with a customer-managed key (CMK), or applying other organization-specific governance controls at the time of secret creation — causing friction for teams with strict governance requirements. Now, customers create and manage their secrets in AWS Secrets Manager using their own governance and compliance policies, including custom CMKs, tagging strategies, automatic rotation and resource policies, and then reference the existing secret ARN when configuring a Credential Provider in AgentCore Identity. This gives customers full ownership of how their secrets are created, classified, and governed, without changing how AgentCore Identity uses them at runtime. Amazon Bedrock AgentCore Identity bring your own secret is now generally available in 14 AWS Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Asia Pacific (Mumbai), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Frankfurt), Europe (
```

```text
Amazon RDS for SQL Server supports Bring Your Own Media
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/rds-sqlserver-supports-bring-your-own-media/
Published: Tue, 02 Jun 2026 07:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: runtime, security, database, release
Amazon Relational Database Service (Amazon RDS) for SQL Server launches Bring Your Own Media (BYOM) for Microsoft SQL Server. With BYOM, customers who migrate SQL Server applications from on-premises environments can adopt a managed database service on AWS and reuse their existing Microsoft SQL Server licenses, including Software Assurance, through Microsoft's License Mobility program. Amazon RDS provides a managed SQL Server database service that lowers operating costs with features such as high availability, automated backups and monitoring. BYOM helps customers who currently run Microsoft SQL Server on-premises, on other clouds, or as self-managed SQL Server on Amazon EC2, and want to adopt Amazon RDS and reuse their existing Microsoft SQL Server licenses. They no longer have to incur the cost of additional Microsoft SQL Server licenses, or wait for existing license agreements to expire to adopt RDS. Amazon RDS for SQL Server BYOM is integrated with AWS License Manager so customers can track their Microsoft SQL Server license usage across their AWS environment for licensing compliance. To learn more about how to set up RDS SQL Server database instances with BYOM, visit the Amazon RDS SQL Server User Guide . For BYOM pricing and regional availability, visit the Amazon RDS for SQL Server pricing page .
```

```text
Amazon Connect Customer now optimizes placement of ad-hoc activities in agent schedules
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-connect-customer-activity-optimization/
Published: Mon, 01 Jun 2026 18:51:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: agent, security, release
Amazon Connect Customer now optimizes placement of ad-hoc activities in agent schedules, making it easier for you to schedule non-productive events while automatically minimizing impact to service level goals. For example, automatically find the optimal time within the next 2 weeks to schedule compliance training for 500 agents. When adding activities such as training or meetings, you can choose one of the following placement methods: (a) anytime within the shift; (b) within a specific time window, for example, 12:00pm–4:00pm; (c) relative to the shift, for example, 1 hour after shift start and 2 hours before shift end. Based on your selected placement method, system automatically identifies optimal time within your specified constraints to schedule the activity while minimizing impact to service levels. This launch eliminates the need for supervisors to manually look for optimal times to schedule these events, thus improving supervisor productivity and ensuring consistent service levels for end customers. This feature is available in all AWS Regions where Amazon Connect Customer agent scheduling is available. To learn more about Amazon Connect Customer agent scheduling, click here .
```

```text
Amazon EKS Capabilities now supports Amazon CloudWatch Vended Logs
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-capabilities-logging
Published: Thu, 04 Jun 2026 17:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: runtime, kubernetes
Amazon Elastic Kubernetes Service (Amazon EKS) Capabilities can now be configured as log delivery sources using Amazon CloudWatch Vended Logs. This enables customers to monitor and troubleshoot their EKS Capabilities for Argo CD, AWS Controllers for Kubernetes (ACK), and kro (Kubernetes Resource Orchestrator) by monitoring logs collected from the managed controllers that run in AWS-managed infrastructure. Customers can enable log delivery for each capability using CloudWatch APIs or the AWS Console. Logs are configured as a CloudWatch Vended Logs delivery source, enabling reliable, secure log delivery to CloudWatch Logs, Amazon S3, or Amazon Kinesis Data Firehose destinations. This feature is available in all AWS Regions where the EKS Capabilities feature is supported. Standard CloudWatch Vended Logs pricing applies based on the chosen destination. There is no additional EKS charge. To learn more about EKS Capabilities, visit the Amazon EKS documentation .
```

```text
Amazon Bedrock launches a redesigned console optimized for OpenAI- and Anthropic-compatible APIs
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-redesigned-console-optimized-openai-anthropic-compatible-apis/
Published: Thu, 04 Jun 2026 07:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 59
Signal tags: runtime, eval, release
Amazon Bedrock is a fully managed service that provides secure, enterprise-grade access to high-performing foundation models from leading AI companies, enabling you to build and scale generative AI applications. Today, Amazon Bedrock introduces a console experience designed for how customers actually build with foundation models: experiment, iterate, and scale. This is the same Amazon Bedrock service customers already use, with a refreshed workflow optimized for the bedrock-mantle endpoint , which supports the OpenAI Responses API, OpenAI Chat Completions API, and the Anthropic Messages API. The new experience makes it simple to find the right model and move quickly from evaluation to production. Customers can browse the full Amazon Bedrock model catalog, including the latest Claude, GPT, and open-weight models, and compare them side by side on capabilities, modality support, context window, and applicable service quotas in a single view, removing the need to stitch together documentation, and limit calculators. Work is organized into projects, where customers can run evaluations and review usage insights in one streamlined workflow that mirrors the lifecycle of building a generative AI application. Each project also includes project-aware documentation: code samples, SDK snippets, and API references are automatically prefilled with the project's selected model ID, region, bedr
```

```text
AWS Cost and Usage Report 2.0 now supports Athena and Redshift integration
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cur2.0-athena-redshift/
Published: Tue, 02 Jun 2026 13:40:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 59
Signal tags: database, release
AWS today announced that AWS Cost and Usage Report 2.0 (CUR 2.0) provides new integration options with AWS Athena and AWS Redshift. This capability allows customers to analyze the data from their AWS CUR 2.0 in Amazon Simple Storage Service (Amazon S3) using standard SQL without building custom data warehouse solutions, bringing feature parity with CUR 1.0 integration options. With this launch, when customers select Athena or Redshift integration, CUR 2.0 exports are automatically delivered in the optimal format (Parquet, GZIP) for the chosen query engine. Each export includes the supporting metadata and automation resources needed to get started quickly, such as infrastructure templates, table definitions, and data loading instructions, so customers can begin querying their cost data without manual configuration. As CUR 2.0 data refreshes periodically, updates are automatically reflected in the Athena or Redshift tables with no additional ETL required. This feature is available in all commercial AWS Regions, except the AWS GovCloud (US) Regions and the China Regions. To learn more about this feature, see AWS Data Exports and AWS Billing and Cost Management in the AWS Cost Management User Guide .
```

```text
AWS Databases on Vercel now available in additional AWS Regions
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-databases-vercel-aws-regions/
Published: Thu, 04 Jun 2026 17:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 55
Signal tags: database
Amazon Aurora PostgreSQL , Amazon Aurora DSQL , and Amazon DynamoDB serverless databases are now available on Vercel Marketplace and v0 by Vercel in additional AWS Regions, offering you more flexibility to build applications with Vercel and AWS databases from the Regions of your choice. To get started, you can describe your idea in v0 using natural language. The tool automatically generates a spec-driven design, deploys code and infrastructure, and stores your application data in the AWS database that best fits your needs with no hands-on coding or provisioning required. Vercel provides an end-to-end setup experience where you can create database resources in seconds under a new AWS account or link to an existing one, all without leaving Vercel. New AWS accounts created from Vercel include access to all three databases and $100 USD in credits, usable across any of these database options for up to six months. You can manage your plan, add payment information, and view usage details anytime from the AWS settings portal in the Vercel dashboard. To learn more, visit v0 or the AWS landing page on the Vercel Marketplace. You can now create an Aurora PostgreSQL database or Amazon DynamoDB table through Vercel from 17 AWS Regions enabled by default , and Aurora DSQL from 16 AWS Regions including: US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Mumbai), Asia Pacif
```

```text
Amazon SageMaker adds permissions boundaries for SCP compliance
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-scp/
Published: Mon, 01 Jun 2026 17:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 51
Signal tags: security, release
Amazon SageMaker Unified Studio now supports custom IAM permissions boundaries, so organizations that enforce Service Control Policies (SCPs) requiring permissions boundaries on all IAM roles can adopt SageMaker Unified Studio without modifying their security posture. When a user creates a project, SageMaker Unified Studio provisions three IAM roles: a project user role, an Amazon Bedrock service role, and a Bedrock Lambda execution role. With this launch, administrators can specify a permissions boundary in the Tooling blueprint configuration, and all three roles are created with that permissions boundary attached. This satisfies SCP requirements at creation time, and project provisioning succeeds without administrator intervention. The permissions boundary also limits what the provisioned roles can do, so administrators retain control over project-level permissions even as new projects are created. Because the permissions boundary is set at the blueprint level, it applies to every new project automatically. This feature is available in all AWS Regions where Amazon SageMaker Unified Studio is available. To learn more, visit the Manage Tooling blueprint parameters documentation.
```

```text
Quick Research now supports customer managed keys
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-research-cm-keys
Published: Mon, 01 Jun 2026 18:27:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 47
Signal tags: runtime, security, release
Amazon Quick Research now enables customers to encrypt their data using customer-managed keys (CMK) through AWS Key Management Service (KMS). This enhancement allows organizations with strict security and compliance requirements to manage their own encryption keys. With customer-managed keys, you gain enhanced security control and comprehensive audit capabilities through AWS CloudTrail integration. You can encrypt your data with your own KMS keys, trace all data access for security auditing, and revoke access to compromised keys within 15 minutes during security incidents. This feature supports multiple CMKs with one default key per AWS account per region, providing the flexibility to manage encryption across different datasets while maintaining granular control over your sensitive business intelligence data. Customer-managed keys must be created in the same AWS account and region as your Quick resources, and only symmetric AWS KMS keys are supported. This feature is generally available in all AWS Regions where Amazon Quick is available . To learn more, visit the Amazon Quick Research detail page .
```

```text
Amazon Connect Customer now supports up to 5,000 agents per schedule
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-connect-customer-5000-agents/
Published: Mon, 01 Jun 2026 18:43:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 43
Signal tags: agent, release
Amazon Connect Customer now supports up to 5,000 agents per schedule, making it easier for you to schedule larger business units or multiple business units that share agents (multi-skilled agents) within a single schedule. Additional scale limit updates include up to 350 agents per staffing group and up to 300 staffing groups per forecast group (for a total of up to 5,000 agents per forecast group). This launch eliminates the need to split scheduling across multiple runs or maintain separate schedules for shared agent pools, thus reducing operational complexity and enabling more accurate schedule optimization across the entire workforce. This feature is available in all AWS Regions where Amazon Connect Customer agent scheduling is available. To learn more about Amazon Connect Customer agent scheduling, click here .
```

```text
Amazon Connect Customer now provides schedule update notifications
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-connect-customer-scheduling-notifications/
Published: Mon, 01 Jun 2026 18:24:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
Amazon Connect Customer now provides schedule update notifications, making it easier for you to automatically notify agents when their schedules change. You can define rules to send email or text notifications (via EventBridge) to supervisors and agents when new schedules are published, when existing schedules are updated, as well as when an agent’s leave request has a change in status. For example, you can automatically email all agents when their schedules for next month become available. These automated notifications eliminate manual effort for schedulers to notify workforce when schedules are updated and for agents to continuously monitor their leave request status, improving both scheduler and agent productivity. This feature is available in all AWS Regions where Amazon Connect Customer agent scheduling is available. To learn more about Amazon Connect Customer agent scheduling, click here .
```

```text
AWS HealthOmics now supports Nextflow version pinning at run time
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-pinning-at-runtime/
Published: Mon, 01 Jun 2026 23:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 33
Signal tags: runtime, release
AWS HealthOmics now allows customers to specify the Nextflow engine version at run time via the StartRun API, enabling customers to pin runs to a specific Nextflow version for controlled migration. With this launch, customers can select from supported Nextflow versions (22.04, 23.10, 24.10, 25.10, 26.04) through the new engine-settings parameter, giving explicit control at the point of execution. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. Nextflow version pinning gives customers full control over when and how they adopt new engine versions. The run-time version override ensures that even when a workflow definition specifies a version via manifest.nextflowVersion in its config or profile, the StartRun API parameter takes precedence, enabling customers to test the same workflow across multiple engine versions without modifying workflow source code. Production workflows can remain on a validated engine version while development teams test newer versions in parallel, reducing the risk of unexpected behavior changes. This is valuable for regulated environments where pipeline validation is required before upgrading to a new engine version. Nextflow version pinning at run time is now available for Nextflow workflow runs in all AWS HealthOmics reg
```

```text
Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8i-m8i-flex-new-zealand/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 33
Signal tags: database
Starting today, Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region. These instances are powered by custom Intel Xeon 6 processors, available only on AWS, delivering the highest performance and fastest memory bandwidth among comparable Intel processors in the cloud. The M8i and M8i-flex instances offer up to 15% better price-performance, and 2.5x more memory bandwidth compared to previous generation Intel-based instances. They deliver up to 20% better performance than M7i and M7i-flex instances, with even higher gains for specific workloads. The M8i and M8i-flex instances are up to 30% faster for PostgreSQL databases, up to 60% faster for NGINX web applications, and up to 40% faster for AI deep learning recommendation models compared to M7i and M7i-flex instances. M8i-flex are the easiest way to get price performance benefits for a majority of general-purpose workloads like web and application servers, microservices, small and medium data stores, virtual desktops, and enterprise applications. They offer the most common sizes, from large to 16xlarge, and are a great first choice for applications that don't fully utilize all compute resources. M8i instances are a great choice for all general purpose workloads, especially for workloads that need the largest instance sizes or continuous high CPU usage. The SAP-certified M8i instances offer 1
```

```text
Amazon MQ is now available in the AWS European Sovereign Cloud (Germany) Region
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-mq-eur-sov-cloud
Published: Thu, 04 Jun 2026 08:05:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 25
Signal tags: runtime
You can now deploy Amazon MQ for RabbitMQ in the AWS European Sovereign Cloud (Germany) Region. This new independent cloud for Europe is located entirely within the EU, designed to help customers in regulated industries and public sector organizations meet their sovereignty requirements. Amazon MQ is a managed message broker service that makes it easy to set up and operate message brokers in the cloud. Amazon MQ for RabbitMQ manages the provisioning, patching, and maintenance of RabbitMQ brokers, letting you focus on building applications without managing messaging infrastructure. You can migrate existing RabbitMQ workloads without rewriting application code and benefit from the same familiar APIs and protocols. Amazon MQ for RabbitMQ in the AWS European Sovereign Cloud supports RabbitMQ engine version 4.2 and Graviton3-based m7g instance types for high-performance messaging ranging from m7g.medium to m7g.16xlarge. To get started, see the Amazon MQ product page or the Amazon MQ Developer Guide .
```

```text
Amazon Cognito now supports multi-Region replication
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/
Published: Thu, 04 Jun 2026 17:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: security
Amazon Cognito now supports multi-Region replication, enabling you to synchronize user and machine identity data — including credentials, user pool configurations, and federation setups — to a secondary user pool in a standby Region you designate in near real-time. This capability helps you improve the resilience of your authentication system by providing a standby replica that can accept traffic in case there is a regional service disruption. In the event of a disruption in the primary Region, you can redirect traffic to the secondary user pool. Signed-in users continue accessing their applications without re-authenticating, and registered users can sign in with their existing credentials. Authentication methods continue to work in the secondary Region, including username/password, federation with social identity and SAML/OIDC providers, and machine-to-machine authorization flows. Multi-Region replication is available as an add-on for user pools in Essentials or Plus feature tiers. You can start using this feature in the following AWS Regions: US East (Ohio, N. Virginia), US West (N. California, Oregon), Asia Pacific (Mumbai, Seoul, Singapore, Sydney, Tokyo), Canada (Central), Europe (Frankfurt, Ireland, London, Paris, Stockholm), and South America (São Paulo). To get started, configure multi-Region replication using the AWS Management Console, AWS Command Line Interface (CLI)
```

```text
Amazon EC2 M8azn instances are now available in Europe (Ireland) Region
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8azn-europe-ireland/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: database
Starting today, Amazon EC2 M8azn instances are now available in Europe (Ireland) Region. These general purpose high-frequency high-network instances are powered by fifth generation AMD EPYC (formerly code named Turin) processors and offer the highest maximum CPU frequency, 5GHz in the cloud. M8azn instances offer up to 2x compute performance compared to previous generation M5zn instances, and up to 24% higher performance than M8a instances. M8azn instances deliver up to 4.3x higher memory bandwidth and 10x larger L3 cache compared to M5zn instances allowing latency-sensitive and compute-intensive workloads to achieve results faster. These instances also offer up to 2x networking throughput and up to 3x EBS throughput versus M5zn instances. Built on the AWS Nitro System using sixth generation Nitro Cards, these instances are ideal for applications such as real-time financial analytics, high-performance computing, high-frequency trading (HFT), CI/CD, intensive gaming, and simulation modeling for the automotive, aerospace, energy, and telecommunication industries. M8azn instances are available in 9 sizes ranging from 2 to 96 vCPUs with up to 384 GiB of memory, including two bare metal variants. To get started, sign in to the AWS Management Console . For more information visit the Amazon EC2 M8azn instance page .
```

### AWS Machine Learning Blog
Source URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Final URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
NVIDIA Nemotron 3 Ultra now available on Amazon SageMaker JumpStart
URL: https://aws.amazon.com/blogs/machine-learning/nvidia-nemotron-3-ultra-now-available-on-amazon-sagemaker-jumpstart/
Published: Thu, 04 Jun 2026 16:59:08 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 65
Signal tags: agent, inference
Deploy NVIDIA Nemotron 3 Ultra on Amazon SageMaker JumpStart. Get 5x faster inference and 30% lower cost for agentic AI workloads with this frontier reasoning model.
```

```text
Secure AI agents with Policy and Lambda interceptors in Amazon Bedrock AgentCore gateway
URL: https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-policy-and-lambda-interceptors-in-amazon-bedrock-agentcore-gateway/
Published: Mon, 01 Jun 2026 17:54:22 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 105
Signal tags: agent, security
In this post, we use a lakehouse data agent to demonstrate how you can use Policy for deterministic access control and Lambda interceptors for dynamic validation. We then show how to combine Lambda interceptors and Policy to implement a geography-based access control which requires both dynamic validation and deterministic access control.
```

```text
AgentOps: Operationalize agentic AI at scale with Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/agentops-operationalize-agentic-ai-at-scale-with-amazon-bedrock-agentcore/
Published: Mon, 01 Jun 2026 16:12:18 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 99
Signal tags: agent, runtime
When you build agentic AI solutions, you face unique operational challenges. Agents make unpredictable decisions, costs spiral unexpectedly, and debugging non-deterministic failures seems impossible. Agentic AI applications don't just execute predetermined workflows. They reason, adapt, and make autonomous decisions, and DevOps practices need to be adapted. That's where AgentOps comes in, the operational discipline for deploying, managing, and continuously improving AI agents in production.
```

```text
Building a secure auth code flow setup using AgentCore Gateway with MCP clients
URL: https://aws.amazon.com/blogs/machine-learning/building-a-secure-auth-code-flow-setup-using-agentcore-gateway-with-mcp-clients/
Published: Tue, 02 Jun 2026 03:23:35 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 89
Signal tags: agent, mcp, security
This post demonstrates how to implement Open Authorization (OAuth) Code flow as an inbound authorization mechanism for MCP servers hosted on Amazon Bedrock AgentCore Gateway. By the end of this guide, you will have a production-ready setup where each AI assistant request is authenticated with a valid user identity token issued from your organization’s identity provider.
```

```text
OpenAI models and Codex on Amazon Bedrock are now generally available
URL: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
Published: Mon, 01 Jun 2026 21:31:12 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 85
Signal tags: agent, codex, inference, release
GPT-5.5, GPT-5.4, and Codex are now generally available on Amazon Bedrock. Deploy them in production applications and agents today, on Bedrock’s high performance inference engine.
```

```text
How Baz improved its AI Agent Code Review accuracy using Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/how-baz-improved-its-ai-agent-code-review-accuracy-using-amazon-bedrock-agentcore/
Published: Tue, 02 Jun 2026 15:45:11 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 83
Signal tags: agent, database
This post walks through how Baz built their Spec Review agent using Amazon Bedrock and Amazon Bedrock AgentCore. We'll cover the architecture decisions, implementation details, and the business outcomes they achieved by leveraging these AWS services to automate their code review process
```

```text
Reference your own AWS Secrets Manager secrets in Amazon Bedrock AgentCore Identity
URL: https://aws.amazon.com/blogs/machine-learning/reference-your-own-aws-secrets-manager-secrets-in-amazon-bedrock-agentcore-identity/
Published: Mon, 01 Jun 2026 22:16:28 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 81
Signal tags: agent, runtime, security, release
Today, we’re excited to announce the ability to reference a secret in AWS Secrets Manager for AgentCore Identity, so you can reference your own preconfigured secret from Secrets Manager and retain full control over how it is managed. With this ability, you can extend your organization’s existing secrets governance processes to AgentCore. You can provide an existing, preconfigured AWS Secrets Manager secret to use with your credential provider resources. You retain full control over its encryption configuration, rotation, replication, tags, and resource policies, just as you would manage other secrets in Secrets Manager. You can also choose a secret from another AWS account within the same AWS Region, though cross-Region secret sharing isn’t supported. This also supports secrets brought in through AWS Secrets Manager external connectors, enabling integration with third-party secret managers.
```

```text
Extending MCP support for Amazon Bedrock AgentCore Gateway
URL: https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/
Published: Mon, 01 Jun 2026 18:35:03 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 77
Signal tags: agent, mcp, security
While deploying Model Context Protocol (MCP) servers in production, enterprises need fine-grained access control across servers, observability into which teams use which tools, security guarantees against data exfiltration, and centralized credential management, all at scale. Amazon Bedrock AgentCore Gateway sits between MCP servers and the clients that consume them, centralizing credential management, observability, and secure […]
```

```text
Improve your agent’s tool-calling accuracy with SFT and DPO on Amazon SageMaker AI
URL: https://aws.amazon.com/blogs/machine-learning/improve-your-agents-tool-calling-accuracy-with-sft-and-dpo-on-amazon-sagemaker-ai/
Published: Wed, 03 Jun 2026 15:56:50 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 71
Signal tags: agent, eval
In this post, you learn how to use Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) together to improve the tool-calling accuracy of a small language model (SLM). The example uses Amazon SageMaker AI training jobs, so you can focus on training code instead of managing your own training infrastructure. You also learn how to evaluate tool-calling accuracy and compare a base model to several fine-tuned variants, so you can make data-driven decisions about model quality.
```

```text
Enable safe agentic payments with built-in guardrails using Amazon Bedrock AgentCore payments
URL: https://aws.amazon.com/blogs/machine-learning/enable-safe-agentic-payments-with-built-in-guardrails-using-amazon-bedrock-agentcore-payments/
Published: Mon, 01 Jun 2026 17:30:12 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 69
Signal tags: agent
In this post, we address several key risks that surface when designing an agentic payment system, and how to address them with the capabilities of AgentCore payments.
```

```text
Amazon Quick integration with time-series databases for market intelligence using MCP
URL: https://aws.amazon.com/blogs/machine-learning/amazon-quick-integration-with-time-series-databases-for-market-intelligence-using-mcp/
Published: Mon, 01 Jun 2026 16:01:24 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 57
Signal tags: mcp, database
In this post, we walk through a practical implementation using KDB-X MCP server integration with Amazon Quick, demonstrating how traders and analysts can ask questions using conversational language and receive actionable insights from datasets. You can apply this same integration pattern across various domains, from financial market analysis to IoT sensor monitoring to DevOps performance dashboards, where you need to simplify access to time series insights.
```

```text
Comprehensive observability for Amazon SageMaker AI LLM inference: From GPU utilization to LLM quality
URL: https://aws.amazon.com/blogs/machine-learning/comprehensive-observability-for-amazon-sagemaker-ai-llm-inference-from-gpu-utilization-to-llm-quality/
Published: Fri, 29 May 2026 23:36:58 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 57
Signal tags: runtime, inference
This post demonstrates a comprehensive observability solution using Amazon Managed Grafana dashboards that provides a holistic view of both quality and quantity for LLMs served on Amazon SageMaker AI endpoints with inference components.
```

```text
Object detection with Amazon Nova 2 Lite
URL: https://aws.amazon.com/blogs/machine-learning/object-detection-with-amazon-nova-2-lite/
Published: Tue, 02 Jun 2026 17:31:11 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 47
Signal tags: inference
In this post, we'll walk through implementing object detection with Amazon Nova 2 Lite. You'll learn how to deploy an object detection application using Amazon Bedrock, AWS Lambda, and Amazon API Gateway. You'll also learn how to craft effective prompts, process structured JSON output, and visualize results. We explore practical applications across manufacturing, agriculture, and logistics.
```

```text
Reducing container cold start times using SOCI index on DLAMI and DLC
URL: https://aws.amazon.com/blogs/machine-learning/reducing-container-cold-start-times-using-soci-index-on-dlami-and-dlc/
Published: Wed, 03 Jun 2026 16:26:35 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: kubernetes
In this post, we look at how to use SOCI on publicly available Deep Learning AMIs and Containers, when to use the various SOCI modes provided by the tool, and how to quickly and efficiently use this tool in your workloads today.
```

```text
Transforming rare cancer research with Amazon Quick: Integrating biomedical databases for breakthrough discoveries
URL: https://aws.amazon.com/blogs/machine-learning/transforming-rare-cancer-research-with-amazon-quick-integrating-biomedical-databases-for-breakthrough-discoveries/
Published: Mon, 01 Jun 2026 21:54:16 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: runtime, database
In this post, we walk through how to use Amazon Quick Research to integrate biomedical data sources for rare cancer research. The walkthrough uses pediatric sarcoma as the research domain and draws on publicly available datasets from PubMed and other open biomedical repositories. It covers the end-to-end workflow: defining a research objective, configuring data sources, reviewing the AI-generated research plan, running the investigation, and iterating on results using the revision and versioning system.
```

```text
Accelerate LLM model loading and increase context windows with GPUDirect on Amazon FSx for Lustre and TurboQuant
URL: https://aws.amazon.com/blogs/machine-learning/accelerate-llm-model-loading-and-increase-context-windows-with-gpudirect-on-amazon-fsx-for-lustre-and-turboquant/
Published: Mon, 01 Jun 2026 16:07:19 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: inference, database
If you’re iterating on deploying large language models (LLMs) on AWS GPU instances, you’ve probably noticed the larger the model to be loaded into GPU High Bandwidth Memory (HBM), the longer the painful wait until the GPUs are ready for inference. As models grow to hundreds of billions of parameters and GPU environments grow ever […]
```

```text
How to build self-driving AI operations on Amazon Bedrock at scale
URL: https://aws.amazon.com/blogs/machine-learning/how-to-build-self-driving-ai-operations-on-amazon-bedrock-at-scale/
Published: Wed, 03 Jun 2026 20:14:16 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: (none)
In this post, we introduce Amazon Bedrock Ops Alert, a three-layer automated monitoring solution that proactively detects operational issues, dynamically adjusts alarm thresholds, classifies alarms by category, automatically creates context-aware support cases, helps prevent duplicate cases when an unresolved case of the same alarm category is already active, and delivers contextualized notifications to AI SRE teams. We walk through the solution architecture and how you can deploy it in your own environment.
```

```text
Fundamental’s Large Tabular Model NEXUS is now available on Amazon SageMaker JumpStart
URL: https://aws.amazon.com/blogs/machine-learning/fundamentals-large-tabular-model-nexus-is-now-available-on-amazon-sagemaker-jumpstart/
Published: Wed, 03 Jun 2026 17:55:37 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
In this post, we show you how to get started with NEXUS on Amazon SageMaker JumpStart, walk through the deployment process, and demonstrate how to run predictions against your enterprise datasets.
```

```text
The art and science of hyperparameter optimization on Amazon Nova Forge
URL: https://aws.amazon.com/blogs/machine-learning/the-art-and-science-of-hyperparameter-optimization-on-amazon-nova-forge/
Published: Tue, 02 Jun 2026 17:39:03 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
Fine-tuning for domain-specific tasks means improving performance in one area without degrading the model’s general capabilities, and getting that balance right is harder than it looks. This post walks through how to navigate that balance, from selecting the right customization strategy for your data and task, to configuring the training parameters that most influence outcomes, like learning rate, batch size, and checkpointing. We also cover the common mistakes that lead to wasted training runs and how to catch them early, so you can improve domain performance without degrading general capabilities or burning through compute on avoidable failures. By the end, you will know how to improve domain performance without degrading general capabilities and how to avoid the expensive failures that come from getting the balance wrong.
```

```text
Training Azerbaijani language models on Amazon SageMaker AI
URL: https://aws.amazon.com/blogs/machine-learning/training-azerbaijani-language-models-on-amazon-sagemaker-ai/
Published: Thu, 28 May 2026 21:54:06 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
Azercell Telecom LLC, Azerbaijan's leading telecommunications provider, wanted to build an Azerbaijani large language model (LLM) on Amazon SageMaker AI for telecom use cases and a customer-facing chatbot. The challenge: adapting foundation models (FMs) to a morphologically rich language with limited training data and no existing blueprint for efficient LLM training in Azerbaijani. In a six-week collaboration, Azercell worked with the AWS Generative AI Innovation Center to establish a production-ready framework on Amazon SageMaker AI.
```

### Google Developers Blog
Source URL: `https://developers.googleblog.com/feeds/posts/default?alt=rss`
Final URL: `https://developers.googleblog.com/feeds/posts/default/?alt=rss`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Blazing fast on-device GenAI with LiteRT-LM
URL: https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 147
Signal tags: agent, runtime, inference, database, browser
Google AI Edge’s LiteRT-LM provides a production-proven, highly optimized infrastructure for running Gemma 4 across cross-platform mobile and edge environments. It actively unlocks the model's native multimodal and agentic features on-device by utilizing memory-efficient dynamic loading, Multi-Token Prediction for up to a 2.2x speedup, and advanced orchestration tools like Thinking Mode and Constrained Decoding. Furthermore, the engine is rapidly expanding its integration surfaces beyond Android, introducing new native Swift APIs for Apple ecosystems and WebGPU-accelerated JavaScript APIs for high-performance, serverless browser inference.
```

```text
All the news from the Google I/O 2026 Developer keynote
URL: https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 107
Signal tags: agent, eval, release, browser
Google announced the transition from assistive AI to independent agents, highlighting the launch of the Gemini 3.5 series and major updates to its Antigravity agent-first development platform. For mobile developers, the post introduces new Android CLI tools, the Android Bench evaluation leaderboard, and an automated Migration agent designed to rapidly convert various frameworks into native Kotlin code. Web development is also being transformed through Chrome DevTools for agents, the HTML-in-Canvas API, and the proposal of WebMCP, an open web standard that enables browser-based AI agents to execute complex tasks.
```

```text
An important update: Transitioning Gemini CLI to Antigravity CLI
URL: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 91
Signal tags: agent, runtime, inference
Google is unifying its AI terminal tools by transitioning the community-focused Gemini CLI into Antigravity CLI, a new agent-first platform built for complex, multi-agent workflows. This new Go-based tool offers faster execution, asynchronous processing, and a unified architecture that syncs with the Antigravity 2.0 desktop application. While enterprise customers will maintain existing access, individual and free users must transition to the new platform before Gemini CLI stops serving requests on June 18, 2026.
```

```text
Bringing Gemma 4 12B to your Laptop: Unlocking Local, Agentic Workflows with Google AI Edge
URL: https://developers.googleblog.com/bringing-gemma-4-12b-to-your-laptop-unlocking-local-agentic-workflows-with-google-ai-edge/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 87
Signal tags: agent, runtime, database
Google DeepMind’s Gemma 4 12B model brings agentic, multimodal AI capabilities to everyday laptops with 16GB of RAM, enabling local data processing and visual insight generation. Users can leverage this model on macOS through the Google AI Edge Gallery for dynamic Python code execution and visualization, as well as via Google AI Edge Eloquent for completely offline voice dictation and text editing. Additionally, developer workflows are enhanced by the LiteRT-LM CLI's new serve command, which creates an industry-compatible local endpoint to power fully-local AI tools and agents.
```

```text
Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps
URL: https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 81
Signal tags: agent, inference, release
Genkit is an open-source framework designed to help developers build production-ready, agentic AI applications using TypeScript, Go, Dart, and Python. The framework utilizes a powerful middleware system that intercepts generation calls to inject custom behaviors like retries, model fallbacks, and human-in-the-loop tool approvals. By attaching hooks at the generate, model, and tool layers, developers can ensure high reliability and deterministic control over model outputs. Furthermore, Genkit allows for the creation and stacking of custom middleware, all of which can be inspected and debugged through a dedicated Developer UI.
```

```text
Build Long-running AI agents that pause, resume, and never lose context with ADK
URL: https://developers.googleblog.com/build-long-running-ai-agents-that-pause-resume-and-never-lose-context-with-adk/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 81
Signal tags: agent, runtime, database
How to transition from stateless chatbots to production-grade agents capable of managing long-running enterprise workflows, such as HR onboarding, that span days or weeks. It introduces the Agent Development Kit (ADK) and its architectural shifts, specifically using durable state machines and persistent session storage to ensure an agent never loses context during "idle time" or server restarts. By leveraging event-driven webhooks and multi-agent delegation, the tutorial demonstrates how to build resilient systems that "sleep" during pauses and wake up to resume complex tasks with high reasoning accuracy.
```

```text
The latest updates to Google Pay
URL: https://developers.googleblog.com/the-latest-updates-to-google-pay/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 75
Signal tags: agent, mcp, release
Google Pay is evolving for "agentic commerce" by introducing the Universal Commerce Protocol and a new MCP server that allows AI agents to manage integrations and analyze trends. New Android updates introduce dynamic callbacks for seamless express checkouts and extend payment support into social media apps via WebViews. Additionally, the platform is launching cross-device biometric authentication and new transaction signals to help merchants reduce friction and optimize processing costs.
```

```text
Announcing ADK for Kotlin and ADK for Android 0.1.0: Building AI Agents on Android and Beyond
URL: https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: agent, runtime, release
Google has announced the launch of version 0.1.0 of the Agent Development Kit (ADK) for Kotlin, alongside a specialized ADK library for Android. This open-source framework simplifies the creation of AI agents by managing complex orchestration, session sharing, and error handling across cloud and edge environments. The release supports hybrid orchestration, enabling developers to build multi-agent systems where a cloud-based model can seamlessly offload specific tasks to local, on-device models like Gemini Nano to enhance user privacy.
```

```text
A Smarter Google AI Edge Gallery: MCP integration, notifications, and session continuity
URL: https://developers.googleblog.com/a-smarter-google-ai-edge-gallery-mcp-integration-notifications-and-session-continuity/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: mcp, runtime, database, github
The Google AI Edge Gallery app has expanded its on-device AI capabilities by introducing experimental support for the open-source Model Context Protocol (MCP) on Android, allowing Gemma 4 to coordinate complex tasks across external data sources like Google Workspace and Google Maps. To enable more proactive and persistent user interactions, the update adds a "Schedule Notification" skill for automating routines and a persistent chat history feature that restores long session contexts nearly instantly. Driven by an open-source toolkit, the platform encourages community developers to build and share custom utility-focused workflows, prompt configurations, and tool integrations via its GitHub repository.
```

```text
Building with Gemini Embedding 2: Agentic multimodal RAG and beyond
URL: https://developers.googleblog.com/building-with-gemini-embedding-2/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 55
Signal tags: agent, database, release
Google has announced the general availability of Gemini Embedding 2, a unified model that maps text, images, video, audio, and documents into a single semantic space. This model allows developers to process interleaved multimodal inputs in a single request, significantly improving performance for tasks like agentic RAG, visual search, and content moderation. By supporting over 100 languages and offering features like task-specific prefixes and Matryoshka dimensionality reduction, the model provides a highly efficient and accurate foundation for building complex AI agents.
```

```text
Supercharge your integration workflow with the Google Pay & Wallet Developer MCP server
URL: https://developers.googleblog.com/supercharge-your-integration-workflow-with-the-google-pay-wallet-developer-mcp-server/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: mcp, runtime, release
Google has announced the new Google Pay & Wallet Developer MCP server, an open-standard tool designed to securely connect AI development assistants and IDEs with real-time API and account context. The server allows developers to remain within their development environment to search official documentation, validate Wallet pass definitions, check integration status, and manage merchant accounts. Ultimately, this integration aims to reduce friction and accelerate development workflows by minimizing context switching and providing up-to-date, grounded AI support.
```

```text
One Year of Innovation: Celebrating 100k Members in the Google Cloud x NVIDIA Developer Community
URL: https://developers.googleblog.com/one-year-of-innovation-celebrating-100k-members-in-the-google-cloud-x-nvidia-developer-community/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 51
Signal tags: agent, inference
The Google Cloud and NVIDIA developer community is celebrating its first anniversary with 100,000 members and a renewed focus on providing builders with advanced AI infrastructure and resources. To accelerate development, the community offers curated learning pathways for mastering LLM optimization, GPU-accelerated data analytics, and monthly expert-led webinars. Moving into its second year, the initiative will expand to include hands-on labs, engineering events, and specialized content focused on the growth of agentic AI.
```

```text
Accelerating on-device AI: A look at Arm and Google AI Edge optimization
URL: https://developers.googleblog.com/accelerating-on-device-ai-a-look-at-arm-and-google-ai-edge-optimization/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: database
Integration of Arm Scalable Matrix Extension 2 (SME2) and the Google AI Edge software stack enables high-performance, on-device generative AI by turning the CPU into a powerful matrix-compute accelerator. Using Stability AI’s "stable-audio-open-small" model as a case study, it outlines a streamlined "Convert, Optimize, and Deploy" pipeline that utilizes LiteRT, XNNPACK, and KleidiAI to automate hardware acceleration. The resulting implementation achieves over a 2x speedup in audio generation and a 4x reduction in memory usage while maintaining high audio quality on Arm-powered mobile devices and laptops.
```

```text
Supercharging LLM inference on Google TPUs: Achieving 3X speedups with diffusion-style speculative decoding
URL: https://developers.googleblog.com/supercharging-llm-inference-on-google-tpus-achieving-3x-speedups-with-diffusion-style-speculative-decoding/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: inference, database
Researchers at UCSD have successfully implemented DFlash, a block-diffusion speculative decoding method, on Google TPUs to bypass the sequential bottlenecks of traditional autoregressive drafting. By "painting" entire blocks of candidate tokens in a single forward pass rather than predicting them one-by-one, the system achieved average speedups of 3.13x, with peak performance nearly doubling that of existing methods like EAGLE-3. This open-source integration into the vLLM ecosystem optimizes TPU hardware by leveraging "free" parallel verification and high-quality draft predictions for complex reasoning tasks.
```

```text
Google Tensor SDK Beta with LiteRT
URL: https://developers.googleblog.com/google-tensor-sdk-beta-with-litert/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 41
Signal tags: runtime, inference
The Google Tensor ML SDK is graduating to its Beta phase, allowing developers to build and deploy high-performance machine learning models directly onto the TPU of Google Pixel 10 devices. By integrating with LiteRT, Google's edge deployment framework, the SDK provides a unified workflow for developers to convert, compile, and run PyTorch or TFLite models with robust fallback options. Additionally, a new model garden offers over 100 classic and generative AI models, including Gemma 3, enabling low-latency, private features like speech recognition, computer vision, and text generation.
```

```text
How the community trained Gemma to "Think" with Tunix and TPUs
URL: https://developers.googleblog.com/how-the-community-trained-gemma-to-think-with-tunix-and-tpus/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: inference
The Google Tunix Hackathon on Kaggle challenged developers to transform small, non-reasoning base models into general reasoning engines using Kaggle TPUs and a limited compute budget. The winning teams achieved this by implementing multi-stage post-training pipelines that combined Supervised Fine-Tuning (SFT) with advanced alignment techniques like GRPO and SimPO. Ultimately, the competition democratized AI development by proving that highly capable, structured reasoning models can be successfully trained by the community using accessible, open-source resources.
```

```text
Speeding Up AI: Bringing Google Colossus to PyTorch via GCSFS and Rapid Bucket
URL: https://developers.googleblog.com/speeding-up-ai-bringing-google-colossus-to-pytorch-via-gcsfs-and-rapid-bucket/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: database
Google Cloud has introduced a high-performance integration that connects Rapid Storage directly to PyTorch via the fsspec interface to eliminate AI training bottlenecks. By utilizing Google’s Colossus architecture and bidirectional gRPC streaming, the solution offers up to 15 TiB/s aggregate throughput and significant reductions in latency. These improvements allow developers to speed up total training time by 23% with zero code changes required beyond updating the storage bucket type.
```

```text
Gemma 4 12B: The Developer Guide
URL: https://developers.googleblog.com/gemma-4-12b-the-developer-guide/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 13
Signal tags: release
The newly released Gemma 4 12B is a dense, multimodal model designed for high-performance local AI execution on consumer devices. By introducing a novel, encoder-free architecture, it bypasses traditional visual and audio encoders to feed multimodal data directly into the LLM backbone.
```

```text
Empowering Service Providers and Hardware Partners with Gemini for Home
URL: https://developers.googleblog.com/empowering-service-providers-and-hardware-partners-with-gemini-for-home/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 13
Signal tags: release
Google is expanding its smart home ecosystem by launching a full-stack Gemini AI offering that integrates advanced camera intelligence, natural language queries, and daily activity summaries. This initiative provides service providers and hardware manufacturers with turnkey reference designs and APIs to build proactive, branded services without extensive research and development. Ultimately, the program aims to move beyond basic device control toward an AI-native home that can understand context and care for users' needs in real time.
```

```text
Enhancing Android Checkout with Dynamic Callbacks in Google Pay
URL: https://developers.googleblog.com/enhancing-android-checkout-with-dynamic-callbacks-in-google-pay/
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: (none)
We are excited to bring Express checkout with Google Pay for Android native apps enabling developers...
```

### Google Cloud Blog
Source URL: `https://cloudblog.withgoogle.com/rss/`
Final URL: `https://cloudblog.withgoogle.com/rss/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Scaling AI Agents: A Step-by-Step Guide to Deploying ADK on GKE Autopilot
URL: https://cloud.google.com/blog/topics/developers-practitioners/scaling-ai-agents-a-step-by-step-guide-to-deploying-adk-on-gke-autopilot/
Published: Thu, 04 Jun 2026 07:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 119
Signal tags: agent, runtime, kubernetes, security, database
While building AI agents locally using Google’s Agent Development Kit (ADK) is an excellent way to prototype, production-ready agents require a robust, scalable infrastructure. For developers looking to move beyond simple instances and into the world of managed container orchestration, Google Kubernetes Engine (GKE) Autopilot offers the perfect balance of flexibility and ease of use. In this tutorial, I will walk you through building a technical agent with ADK and deploying it to GKE Autopilot. We will focus on utilizing Gemini on Vertex AI as the core model and ensure highest security standards by implementing Workload Identity for permission management. Understanding the GKE ADK Architecture Deploying an ADK agent on GKE Autopilot involves more than just running a container. We leverage GKE's native capabilities to handle scaling and security. Our architecture consists of an ADK-based Python application packaged as a Docker image and stored in Artifact Registry. This container runs as a Deployment on GKE Autopilot, where it communicates securely with Vertex AI using Workload Identity—mapping a Kubernetes Service Account to a Google Cloud IAM Service Account. To expose the agent to the world, we use the Kubernetes Gateway API, the modern successor to Ingress, which provides a cleaner separation of concerns and native support for Google Cloud Load Balancing. Prerequisites Befor
```

```text
What’s new with Google Data Cloud
URL: https://cloud.google.com/blog/products/data-analytics/whats-new-with-google-data-cloud/
Published: Thu, 04 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 97
Signal tags: agent, runtime, database, release
June 1 - June 5 Beyond the Query: Powering AI Agents with Bigtable, Firestore & Memorystore Discover the latest advancements in Google Cloud's NoSQL Database portfolio, including Bigtable, Firestore, and Memorystore. This series is designed for a broad audience: whether you are exploring these databases for the first time or are an existing user looking to leverage the new capabilities announced at Next '26. Register here to secure your spot! Cloud Engineer's AI Toolkit Workshops: Solve data-driven challenges with BigQuery, AlloyDB , Gemini and more. Hosted by Google Cloud Labs, this highly technical event is built specifically for Platform Engineers, SREs, and cloud infrastructure teams ready to bridge the gap between AI prototypes and production-grade deployments. Look out for more locations coming soon Toronto - June 25 (Data Cloud) | RSVP Here Chicago - June 30 (Data Cloud) | RSVP Here Start a 10-day Bigtable free trial with a 1 node SSD cluster and up to 500GB of storage capacity. W ith no credit card required to start, you can easily ingest workloads and manage workloads that require low-latency, high-throughput, and predictable access. Plus, new Google Cloud customers get $300 in free credits on signup. May 11 - May 15 Managed Service for Apache Airflow has launched a wave of new features, including the general availability of Airflow 3.1, AI-powered agentic troubleshoot
```

```text
What's new for Managed Service for Apache Spark clusters
URL: https://cloud.google.com/blog/products/data-analytics/enhancements-to-managed-service-for-apache-spark-clusters/
Published: Thu, 04 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 61
Signal tags: agent, runtime, release
At Google Cloud, our goal is to let you run large-scale analytical and data science workloads with maximum efficiency so you can process big data pipelines, machine learning, and ETL tasks. We recently announced that the Dataproc service is now Managed Service for Apache Spark , reflecting our deep integration with the Agentic Data Cloud . To support the diverse architectural needs of today’s modern data teams, we offer the service in two distinct deployment modes: serverless and managed clusters. The serverless deployment mode completely abstracts infrastructure management for ephemeral or ad-hoc jobs, while the managed clusters deployment mode is designed for teams that require fine-grained infrastructure customization, persistent environments, long-running stateful processing, or native integration with custom Compute Engine hardware configurations. When it comes to managed cluster deployments, we’ve re-imagined the experience from the ground up, focusing on three core pillars: making Spark faster by supercharging execution speeds, easier to run by maximizing resource obtainability and reducing operational overhead, and smarter by embedding AI directly into the development and operational lifecycle. This blog post focuses specifically on what we announced at Google Cloud Next ‘26 for the Managed Spark clusters deployment mode: providing enhanced flexibility to fine-tune perf
```

```text
Connecting AI agents with unstructured data using Google Cloud Storage MCP Servers
URL: https://cloud.google.com/blog/topics/developers-practitioners/build-ai-agents-faster-with-gcs-google-cloud-storage-mcp-server/
Published: Tue, 02 Jun 2026 17:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 103
Signal tags: agent, mcp, runtime, security, database
Google Cloud Storage (GCS) is a foundational component of the modern agentic tech stack and the preferred home for unstructured data at scale. As enterprises deploy agents in production, the critical focus has shifted to turning data into context and building secure, standardized integrations to access context. This is the core of smart storage: making unstructured data inherently agent-ready by turning passive objects into rich context for reasoning. Whether it’s automating complex financial workflows or diagnosing system failures in seconds, AI success now depends on how seamlessly agents can leverage this intelligence to make smart, high-stakes decisions. In this blog, we will share three examples of agents built by customers using GCS, and then share how you can securely and reliably connect your agents to GCS using Model Context Protocol (MCP). Combined with smart storage features like auto annotations and object contexts, GCS MCP server makes the whole agent deployment process easy and simple. Real-world agent success on Google Cloud Storage We are seeing incredible innovation from customers leveraging MCP and Google’s agentic tech stack to solve complex business problems: Palo Alto Networks built the Strata Co-Pilot agent, a screen-aware AI assistant that guides network security administrators through complex configuration flows—either by highlighting steps or executing
```

```text
The fully-managed Remote MCP Server for AlloyDB is now Generally Available
URL: https://cloud.google.com/blog/products/data-analytics/alloydb-remote-mcp-server-ga-secure-ai-agent-access-to-your-data/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 97
Signal tags: agent, mcp, runtime, database, release
AI agents possess incredible reasoning capabilities and can perform increasingly complex actions. But the reliability of agentic outcomes depends entirely on the quality of the context they can access — context that is frequently locked away in operational databases. To bridge this gap, we are excited to announce the Remote Model Context Protocol (MCP) Server for AlloyDB is now generally available. The Model Context Protocol (MCP) is an open-source standard that gives LLMs a secure, consistent way to connect to external data sources. As part of Google Cloud’s recent rollout of 50+ Google-managed MCP servers , this new integration makes it easier than ever for both interactive and autonomous agents to securely harness the full power of your enterprise data. For example, you can now ask an AI agent for an up-to-the-millisecond view of your delivery fleet by connecting it to your real-time logistics data in AlloyDB, avoiding inaccuracies due to stale data and reducing the need for manual reporting. Why AlloyDB is the strong foundation for agentic apps By connecting MCP to AlloyDB, your agents get access to the premier database built for enterprise-grade AI. AlloyDB delivers the scale, speed, and intelligence required for the most demanding agentic workloads: Supercharged vector performance: Scale to over 10 billion vectors at up to 6x the speed of standard PostgreSQL for vector qu
```

```text
Experimenting with TPUs, GKE Managed DRANET, and Multi-cluster Inference Gateway
URL: https://cloud.google.com/blog/topics/developers-practitioners/experimenting-with-tpus-gke-managed-dranet-and-multi-cluster-inference-gateway/
Published: Tue, 02 Jun 2026 07:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 95
Signal tags: runtime, inference, kubernetes, database
What happens when your workload fails in one region but you need access to service? This is a common case for availability and uptime. With recent enhancement to the Kubernetes ecosystem and capabilities like Dynamic Resource Allocation (DRA) and Inference Gateway. I decided to experiment with these capabilities in Google Cloud for a simple test using an AI inference workload. In this blog, we will explore this setup and you can also jump straight into the detailed configs in this codelab Build multi-cluster GKE Inference Gateway, with TPUs , Cloud Storage FUSE and managed DRANET. Building blocks To build out this experiment, use the following products, features, and tools: Google Kubernetes Engine (GKE) managed DRANET : This is a managed feature that lets you request and share resources among Pods. This supports GPUs , and TPUs . In this test TPUs were used in two different regions with networking assigned using managed DRANET. Multi-cluster GKE Inference gateway : Load balances your AI/ML inference workloads across multiple GKE clusters. This works in a failover situation which is what my experiment intended to test. The type which supports this is the Multi-cluster Cross-region internal Application Load Balancer gke-l7-cross-regional-internal-managed-mc Cloud Storage FUSE : Provides a way to store data, models, checkpoints, and logs directly in Cloud Storage. To speed up the
```

```text
What’s new in serverless Managed Service for Apache Spark
URL: https://cloud.google.com/blog/products/data-analytics/serverless-managed-service-for-apache-spark-runtime-3-0-features/
Published: Wed, 03 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 93
Signal tags: agent, runtime, inference, database, release
Whether you use it for data preparation, real-time interactive queries, AI model training, or something entirely different, running Apache Spark at scale is demanding — you shouldn’t have to manage the underlying infrastructure too. Late last year, we announced the general availability (GA) of our serverless Managed Service for Apache Spark runtime version 3.0, prioritizing speed, simplicity, and reliability. Since then, customer use of Managed Service for Apache Spark for data science has nearly doubled year over year. This is a testament to our belief that using Google Cloud is the easier, smarter, and faster place to run your Apache Spark workloads. In this blog, let’s dive into a few key features that make our serverless Apache Spark offering a great fit for a wide range of workflows, including feature engineering, GPU-accelerated model training and tuning, semantic search, RAG, building AI agents and applications, and more. Zero-setup onboarding The most significant barrier to entry for a cloud service is often the "time to magic moment" — the interval between creating a project and running your first workload. Previously, with serverless Spark, you still needed to manually configure IAM roles, VPC networking, and firewall rules before submitting a single job. In the serverless Spark 3.0 runtime version, zero-setup onboarding significantly reduces the time to launch your f
```

```text
What’s new with Google Cloud
URL: https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 83
Signal tags: agent, mcp, runtime, release
Want to know the latest from Google Cloud? Find it here in one handy location. Check back regularly for our newest updates, announcements, resources, events, learning opportunities, and more. Tip : Not sure where to find what you’re looking for on the Google Cloud blog? Start here: Google Cloud blog 101: Full list of topics, links, and resources . aside_block May 25 - May 29 Anthropic’s Claude Opus 4.8 is now available on Gemini Enterprise Agent Platform . As we continue to expand our platform's model offerings, this addition gives organizations more options for handling complex, multi-stage enterprise workflows. Claude Opus 4.8 brings strong capabilities in agentic coding, allowing developers to manage extensive refactors and tracking dependencies over extended sessions. API Horizon Munich July 6, 2026: Orchestrating the Next Era of AI and APIs Master the orchestration of next-gen AI and digital ecosystems. Join Google Cloud experts and DACH tech leaders on July 6 for an exclusive look at the Apigee roadmap, Agent Management, and Model Context Protocol (MCP). Gain real-world insights and connect with the regional integration community. Register now Securing AI Agents: The Extended Agent Gateway Pattern Learn how to prevent autonomous AI agents from invoking unauthorized APIs. Join Apigee Specialist Joel Gauci on June 4 for a technical deep dive into the Extended Agent Gateway
```

```text
What Google Cloud announced in AI this month
URL: https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 75
Signal tags: agent, inference, security, release
Editor’s note : Want to keep up with the latest from Google Cloud? Check back here for a monthly recap of our latest updates, announcements, resources, events, learning opportunities, and more. We’ve had a busy month! Between announcing Gemini Spark and Gemini 3.5 at Google I/O – and unveiling Google AI Threat Defense, our latest AI-powered cybersecurity solution, we had a lot to share with Google Cloud customers. Keeping up with the latest news takes time, so we gathered the most important announcements, thought leadership, and technical guides in one place to help you quickly catch up. To learn more about our I/O announcements, here’s everything you need to know for Google Cloud customers, and top news for startups . Top announcements Introducing Google AI Threat Defense to help you outpace the adversary: Google Cloud is introducing a comprehensive AI-powered cybersecurity solution — Google AI Threat Defense — an always-on autonomous security platform. Learn more here . Gemini 3.5: Our latest family of models combines frontier intelligence with action – starting with Gemini 3.5 Flash. Gemini Omni: Our new model is a leap forward in world understanding, multimodality, and editing, letting you generate any output from any input, starting with video. Google Antigravity: Google Antigravity’s expanded capabilities and new integration with Agent Platform bring agentic development t
```

```text
Introducing the GKE standby buffer: Improve node startup times without blowing your budget
URL: https://cloud.google.com/blog/products/containers-kubernetes/gke-standby-buffers-speed-up-autoscaling-for-less-spend/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 71
Signal tags: agent, kubernetes, release
Application owners and platform engineers have long faced a difficult choice: spend excessively by over-provisioning to guarantee quick startups, or minimize costs but endure slow cold starts. We are excited to announce a solution to this compromise: Google Kubernetes Engine standby buffers. This builds on the launch of GKE active buffers earlier this year, a native version of the Kubernetes CapacityBuffers API that makes it easy to provision readily available capacity to handle traffic spikes, delivering near-zero startup latency for new pods. However, active buffers still impose a trade-off between performance and cost. New GKE standby buffers help by maintaining a low-cost, suspended capacity buffer for your GKE clusters. With a cost overhead in the low single-digit percent, GKE standby buffers help you achieve near-immediate scheduling for your workloads with negligible cost overhead. This is useful for all kinds of workloads — general-purpose, agentic, and everything in between. Under identical traffic loads, the cluster without standby buffers suffered severe latency spikes, with P50, P95, and P99 metrics trapped between 4 and 6 minutes. Conversely, the cluster with standby buffers maintained a P50 latency of just single-digit seconds, while its P95 and P99 metrics briefly peaked at one minute before quickly normalizing to single-digit seconds. Both setups exhibited a sim
```

```text
Cool stuff Google Cloud customers built, May edition: Agentic algorithms for supply chains; virtual try-on APIs; robotic camera operators & more
URL: https://cloud.google.com/blog/topics/customers/cool-stuff-google-cloud-customers-built-monthly-round-up/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: agent, database
AI and cloud technology are reshaping every corner of every industry around the world. Without our customers, who are building the future on our platform, there would be no Google Cloud. In this regular round-up , we dive into some of the exciting projects redefining businesses, shaping industries, and creating new categories. For our latest edition, we learn how Urban Outfitters sped up its order management; BASF uses AlphaEvolve algorithms to map global supply chains; the unification strategy for UKG ’s workforce intelligence; WPP ’s secrets to training humanoid robot camera operators; how Breuninger piloted Virtual Try-On APIs; creating automated video clips with Glance ; and Movix improves the production of dental aligners. Be sure to check back next month to see how more industry leaders and exciting startups are putting Google Cloud technologies to use. And if you haven’t already, please peruse our list of 1,302 real-world gen AI use cases from our customers. Urban Outfitters saves big by migrating order management Who: Urban Outfitters, Inc. (URBN), the popular clothing and home goods retailer, relies on IBM Sterling OMS as the nerve center of its global ecommerce operations. However, the foundation of this critical system — a massive 11TB Oracle database — was increasingly becoming a bottleneck. What they did: URBN completed a major infrastructure upgrade, migrating its
```

```text
Accelerating data lakes: Optimizing Apache Iceberg and Spark with gcs-analytics-core
URL: https://cloud.google.com/blog/products/data-analytics/optimize-iceberg-and-spark-workloads-with-gcs-analytics-core/
Published: Tue, 02 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 47
Signal tags: runtime, database, release
Many data engineers spend significant time managing compatibility and getting best performance across multiple analytics engines. To help solve this pain point, we are excited to announce gcs-analytics-core , a new open-source Java library designed to centralize and accelerate analytics optimizations for Google Cloud Storage (GCS) . With this, you get the flexibility to select your preferred analytics engine while achieving high performance on GCS. The gcs-analytics-core library provides optimizations across various analytics engines that you use today on GCS, like the Iceberg Spark engine and plan to expand to other analytics engines by the end of this year. Built to be shared across major data processing frameworks like Apache Spark, this library consolidates and improves performance for analytics workloads on GCS. Available natively in the Apache Iceberg Java runtime starting from version 1.11.0 , this library improves read operations for columnar formats like Parquet. What is the gcs-analytics-core library? The gcs-analytics-core library is a centralized optimization layer that sits between your analytics engines — such as Apache Spark, Trino, and Apache Hive — and the underlying GCS Java SDK. It intercepts read calls and injects performance enhancements, providing a consistent experience without requiring framework-specific tuning. For Apache Iceberg users, it integrates i
```

```text
Developer's guide to Gemini Enterprise and A2UI integration
URL: https://cloud.google.com/blog/topics/developers-practitioners/guide-to-gemini-enterprise-and-a2ui-integration/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 47
Signal tags: agent, github
If you've built a chatbot, you know this conversation: User: "Book a table for two tomorrow at 7pm." Agent: "Okay, for what day?" User: "Tomorrow." Agent: "What time?" A date picker would have ended this in one tap. But until recently, agents had no standard way to render a date picker — or a map, or a multi-select list — inside the chat surface they live in. They could only return text or markdown for generic usage. Today, we're walking through how to fix that with A2UI , an open protocol for agent-driven user interfaces, and how to integrate an A2UI-enabled agent with Gemini Enterprise (GE) so your agent renders rich and interactive UI natively in the GE chat surface — and in your own custom frontend if you want one. We'll use a working restaurant-finder agent — built with the Google Agent Development Kit (ADK), the A2A protocol, and Gemini — as the reference. The full source is on GitHub and there's a 2-minute demo video. Gemini Enterprise and A2UI integration demo The problem: agents speak text, but users want UI Most agent frameworks today return strings. That's fine for short answers, but it breaks down quickly: Multi-turn slot filling (date, time, party size) burns turns and patience. Choices among options (which restaurant? which insurance plan?) become long bulleted lists the user has to copy-paste back. Spatial information (locations, routes, floor plans) is reduced t
```

```text
AlloyDB Hot Standby: Faster failovers, consistent performance
URL: https://cloud.google.com/blog/products/databases/alloydb-hot-standby-faster-failovers-and-consistent-performance/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 47
Signal tags: runtime, database, release
AlloyDB for PostgreSQL is a fully managed, PostgreSQL-compatible database service designed for the most demanding enterprise workloads. It combines the best of PostgreSQL with the power of Google, delivering exceptional performance, scalability, and availability. We are continuously innovating to make AlloyDB even more resilient, and today, we're excited to announce a significant upgrade to our High Availability (HA) architecture: Hot Standby . Understanding AlloyDB HA Architecture An AlloyDB primary instance configured for high availability consists of an active node and a standby node, located in different zones within a region for resilience. AlloyDB's cloud-native architecture separates compute and storage to allow for individual scaling of each resource. Database write-ahead logs (WAL) are synchronously written to a regional log persistor, ensuring durability, while data blocks reside in AlloyDB's regional storage service. A load balancer directs traffic to the current active node using a stable IP address. In the traditional HA model, if the active node became unavailable, AlloyDB would automatically initiate a failover. The standby node, previously idle from a PostgreSQL perspective, would start the database, process any remaining logs, and then take over. While this ensures high availability, the database startup time and the subsequent cache warming period could impact
```

```text
Modeling a digital twin of a food supply chain using BigQuery Graph
URL: https://cloud.google.com/blog/products/data-analytics/modeling-a-digital-twin-using-bigquery-graph/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 43
Signal tags: database
The example of a growing restaurant Imagine you are running a restaurant chain. You just can't physically feel and touch things to know how your business operates. You need tools and a digital replica of your business to sense the health of the business for you. The friction of growth Growth creates a unique kind of friction that spreadsheets simply weren't built to solve: The bullwhip effect: Small downstream demand shifts swell into upstream inventory tidal waves. SOP drift: Tiny departures from standard prep work eventually erode the entire brand vibe. The food safety blast radius: One contaminated ingredient creates a messy, complex map of risk across the network. Maverick spend: The "million-dollar leak" caused by local managers purchasing ingredients off-contract. The digital twin Digital models empower us to ask more insightful questions about the world, but they also force a critical choice in how we structure data. While traditional relational tables have been the standard, we must ask: are they still the right tool for everything? Given that our world is inherently interconnected, perhaps shifting to graph-based models is the natural evolution for capturing reality. When managing thousands of assets, complex supply chains, or global logistics networks, traditional relational databases require massive, resource-intensive SQL joins to trace dependencies. This architectu
```

```text
How Trustpilot built a real-time architecture for data enrichment using Gemma
URL: https://cloud.google.com/blog/topics/customers/how-trustpilot-built-a-real-time-architecture-for-data-enrichment-using-gemma/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 41
Signal tags: (none)
Processing millions of user reviews in real-time, under strict latency and cost constraints, is no easy task. Trustpilot has been doing exactly that with custom machine learning since long before large language models (LLMs) were cool. Now, as the company transitions its core stack to generative AI, here is a look at how we teamed up to build a high-volume streaming pipeline using fine-tuned Gemma models. Powering deep review intelligence at scale Trustpilot’s core business relies on delivering deep, actionable review intelligence. As a platform championing transparency and genuine feedback, it must safeguard data integrity and maximize value. This means extracting every drop of metadata from incoming reviews — making LLMs the perfect tool for the job. These models excel at parsing messy, human-written text to run named entity recognition (NER), categorize business domains, score sentiment, and pinpoint customer intent. But while prompting an LLM for a few reviews is easy, processing millions in real-time without blowing up costs is a massive engineering hurdle. Why fine-tune an open model? When pursuing such a big task, why isn’t just plugging into a powerful, off-the-shelf, frontier model like Gemini the right approach? For a pipeline this critical to the core business, closed models are rarely the best option. Instead, by fine-tuning open-weight models like Gemma, Trustpilot
```

```text
From petabytes to predictions: Easy BigQuery insights in Google Sheets
URL: https://cloud.google.com/blog/products/data-analytics/using-connected-sheets-to-analyze-bigquery-data/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 37
Signal tags: security
Many organizations’ single source of truth is data that resides in BigQuery, Google’s governed, secure and petabyte-scale data platform. However, the "last mile" of ad-hoc analysis, modeling, and reporting often happens where business users are most comfortable: Google Sheets. Bridging this gap usually involves exporting data as CSVs. But this is inefficient, creating data silos, version control problems, and security and governance risks. Connected Sheets helps to eliminate this trade-off, turning the familiar Google Sheets interface into a direct, live window into your BigQuery data platform, letting you analyze petabytes of data quickly, securely, and easily. In this post, we’ll do a quick overview of Connected Sheets, walk through real-world use cases, and show you how to perform enterprise-grade data analysis using BigQuery directly in Google Sheets. A live window into the single source of truth Business users often wait days or weeks for simple reports. Connected Sheets solves this by letting you analyze your critical data via a secure, direct connection to billions of rows of live data, with no SQL required. For data admins , this architecture is appealing because it maintains a strong security and governance posture. They can provision access to specific tables or views, confident that the underlying data cannot be altered from a Connected Sheet. Admins can also take ad
```

```text
Cloud CISO Perspectives: How to build an AI-ready security program for the public sector
URL: https://cloud.google.com/blog/products/identity-security/cloud-ciso-perspectives-how-to-build-an-ai-ready-security-program-for-the-public-sector/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 35
Signal tags: security, database
Welcome to the second Cloud CISO Perspectives for May 2026. Today, Usman Chaudhary, Field CISO, Google Public Sector, offers a guide for CISOs protecting government agencies and critical infrastructure on how to get started — and get the most out of — defending with AI. As with all Cloud CISO Perspectives, the contents of this newsletter are posted to the Google Cloud blog . If you’re reading this on the website and you’d like to receive the email version, you can subscribe here . aside_block ), ('btn_text', 'Visit the hub'), ('href', 'https://cloud.google.com/solutions/security/board-of-directors?utm_source=cgc-site&utm_medium=et&utm_campaign=FY26-Q2-GLOBAL-GCP39634-email-dl-dgcsm-CISOP-NL-177159&utm_content=-&utm_term=-'), ('image', )])]> How to build an AI-ready security program for the public sector By Usman Chaudhary, Field CISO, Google Public Sector Usman Chaudhary, Field CISO, Google Public Sector Deciphering actionable signals from deafening noise can be hard for CISOs, even with AI — and especially for those guiding government agencies, critical manufacturing plants, or in a foundational industry. From industrial control systems to decades-old municipal databases, you’re securing complex, deeply entrenched systems, and the sudden mandate to adopt AI can feel less like an evolution and more like a breaking point. While it’s true that you face a monumental challenge, we
```

```text
Announcing Spanner Graph algorithms: Google-grade intelligence for connected data
URL: https://cloud.google.com/blog/products/databases/introducing-spanner-graph-algorithms/
Published: Tue, 02 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: database, release
At Google Cloud Next, we announced the preview of graph algorithms with Spanner Graph , bringing Google Research’s state-of-the-art graph mining capabilities natively to your database. These graph intelligence capabilities can help you derive valuable insights from graph data faster, cheaper, and at scale. Enterprises are increasingly leveraging graph technologies to uncover complex relationships in data for use cases such as fraud detection, social network analysis, entity resolution, and healthcare research. Graph algorithms, such as node centrality and community detection, are the computational methods used to analyze these structures, and work by quantifying the patterns and strength of connections between entities. However, running graph algorithms at scale has historically been challenging and resource-intensive, often requiring complex ETL pipelines to dedicated analytic solutions or risking the transactional performance of the graph database. We designed Spanner Graph algorithms to tackle demanding enterprise workloads without compromising on the performance of your operational database. This architecture provides several distinct advantages: Tight integration with GQL: Directly invoke algorithms using ISO Graph Query Language (GQL) to run structural analytics across your data. By sequentially weaving algorithms and standard queries together, Spanner Graph minimizes com
```

```text
How the University of Central Oklahoma is using AI to streamline analysis of complex criminal cases
URL: https://cloud.google.com/blog/topics/public-sector/how-the-university-of-central-oklahoma-is-using-ai-to-streamline-analysis-of-complex-criminal-cases/
Published: Thu, 28 May 2026 19:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
In the high-stakes world of forensic science, time is the enemy of justice. The University of Central Oklahoma (UCO) Forensic Science Institute (FSI) was looking for an innovative AI solution that could help reduce the time required to analyze complex criminal case documents and construct clear timelines. In early tests, this solution, which can typically take criminal investigators months, has been demonstrated to significantly reduce this time. This collaboration between Google Public Sector and UCO’s technology and forensic experts establishes a path for a new standard for accelerating the pursuit of justice across the country and provides powerful efficiency gains. A new vision for the pursuit of justice This project, which originated in an AI hackathon sponsored by the university’s CIO Sonya Watkins, centers on Google's NotebookLM , an AI research tool used by the university as a thinking partner for the review of complex criminal cases. Sonya Watkins, CIO, University of Central Oklahoma and I co-led the hackathon with the goal of rapidly identifying and prototyping high-impact solutions for the university, while providing the technical framework, and brought expertise in rapid prototyping to quickly translate complex criminal case requirements into a functional, evidence-backed digital application. During the hackathon, teams generated ideas, which were then stack-ranked
```

### GitHub Changelog
Source URL: `https://github.blog/changelog/feed/`
Final URL: `https://github.blog/changelog/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Fix with Copilot for failing Actions now in Pro, Pro+, and Max
URL: https://github.blog/changelog/2026-06-04-fix-with-copilot-for-failing-actions-now-in-pro-pro-and-max
Published: Thu, 04 Jun 2026 20:46:11 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: agent, copilot, github, release
When a GitHub Actions job fails, Copilot Pro, Pro+, and Max subscribers can now ask Copilot cloud agent to fix it in one click. Click the Fix with Copilot button… The post Fix with Copilot for failing Actions now in Pro, Pro+, and Max appeared first on The GitHub Blog .
```

```text
Agent tasks REST API now available for Copilot Pro, Pro+, and Max
URL: https://github.blog/changelog/2026-06-04-agent-tasks-rest-api-now-available-for-copilot-pro-pro-and-max
Published: Thu, 04 Jun 2026 20:42:10 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: agent, copilot, github, release
Copilot Pro, Pro+, and Max users can now programmatically start and track Copilot cloud agent tasks with the Agent tasks REST API, available in public preview. Copilot cloud agent works… The post Agent tasks REST API now available for Copilot Pro, Pro+, and Max appeared first on The GitHub Blog .
```

```text
Larger context windows and configurable reasoning levels for GitHub Copilot
URL: https://github.blog/changelog/2026-06-04-larger-context-windows-and-configurable-reasoning-levels-for-github-copilot
Published: Thu, 04 Jun 2026 18:45:04 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 65
Signal tags: copilot, database, github, release
GitHub Copilot now supports larger context windows and configurable reasoning levels to help you tackle deeper, more complex work. Leverage one-million-token context windows A one-million-token context window means users can… The post Larger context windows and configurable reasoning levels for GitHub Copilot appeared first on The GitHub Blog .
```

```text
GitHub Copilot in Visual Studio — May update
URL: https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update
Published: Thu, 04 Jun 2026 15:35:58 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 61
Signal tags: copilot, github, release
May 2026 brought sharper tooling for planning, reviewing, and managing your work with GitHub Copilot in Visual Studio 2026. Highlights Here’s what’s new for all GitHub Copilot users in Visual… The post GitHub Copilot in Visual Studio — May update appeared first on The GitHub Blog .
```

```text
Copilot Chat brings richer context to pull requests
URL: https://github.blog/changelog/2026-06-04-copilot-chat-brings-richer-context-to-pull-requests
Published: Thu, 04 Jun 2026 14:40:05 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 39
Signal tags: copilot, github, release
GitHub Copilot Chat now provides richer context and new capabilities when you’re working with diffs and pull requests on github.com. This feature was previously in public preview and is now… The post Copilot Chat brings richer context to pull requests appeared first on The GitHub Blog .
```

```text
Enterprise Teams is now generally available
URL: https://github.blog/changelog/2026-06-04-enterprise-teams-is-now-generally-available
Published: Thu, 04 Jun 2026 15:30:17 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: github, release
Enterprise Teams is now generally available on GitHub Enterprise Cloud. First announced in public preview last September, enterprise teams let enterprise admins define a group of users once at the… The post Enterprise Teams is now generally available appeared first on The GitHub Blog .
```

```text
Copilot SDK is now generally available
URL: https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available
Published: Tue, 02 Jun 2026 17:30:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 89
Signal tags: agent, copilot, github, release
The GitHub Copilot SDK is now generally available. You can embed GitHub Copilot’s agentic engine into your own applications, services, and developer tools with a stable API and production-ready support.… The post Copilot SDK is now generally available appeared first on The GitHub Blog .
```

```text
GitHub Copilot in Visual Studio Code, May releases
URL: https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases
Published: Wed, 03 Jun 2026 13:30:58 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 67
Signal tags: agent, copilot, github, release
VS Code continues with weekly stable releases. This changelog covers releases v1.120 through v1.123, the releases we shipped throughout May and early June 2026. In May, we made the Agents… The post GitHub Copilot in Visual Studio Code, May releases appeared first on The GitHub Blog .
```

```text
GPT-4.1 deprecated
URL: https://github.blog/changelog/2026-06-02-gpt-4-1-deprecated
Published: Tue, 02 Jun 2026 23:58:52 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 67
Signal tags: agent, copilot, github, release
We have deprecated GPT-4.1 across all GitHub Copilot experiences (including Copilot Chat, inline edits, ask and agent modes, and code completions), June 1, 2026. Model Deprecation date Suggested alternative GPT-4.1… The post GPT-4.1 deprecated appeared first on The GitHub Blog .
```

```text
Expanded technical preview availability for the GitHub Copilot app
URL: https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app
Published: Tue, 02 Jun 2026 17:36:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: copilot, github, release
The GitHub Copilot app technical preview is now available to all existing Copilot Pro, Pro+, Business, and Enterprise customers. Download the Copilot app for Windows, macOS, or Linux to get… The post Expanded technical preview availability for the GitHub Copilot app appeared first on The GitHub Blog .
```

### GitHub Engineering Blog
Source URL: `https://github.blog/engineering/feed/`
Final URL: `https://github.blog/engineering/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Agent-driven development in Copilot Applied Science
URL: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
Published: Tue, 31 Mar 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: agent, copilot, github
I used coding agents to build agents that automated part of my job. Here's what I learned about working better with coding agents. The post Agent-driven development in Copilot Applied Science appeared first on The GitHub Blog .
```

```text
From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner
URL: https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/
Published: Wed, 28 Jan 2026 17:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: copilot, github
Learn how GitHub built an accessible, multi-terminal-safe ASCII animation for the Copilot CLI using custom tooling, ANSI color roles, and advanced terminal engineering. The post From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner appeared first on The GitHub Blog .
```

```text
How GitHub uses eBPF to improve deployment safety
URL: https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/
Published: Thu, 16 Apr 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: github
Learn how Github uses eBPF to detect and prevent circular dependencies in its deployment tooling. The post How GitHub uses eBPF to improve deployment safety appeared first on The GitHub Blog .
```

```text
When protections outlive their purpose: A lesson on managing defense systems at scale
URL: https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/
Published: Thu, 15 Jan 2026 20:54:32 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: github
User feedback led us to clean up outdated mitigations. See why observability and lifecycle management are critical for defense systems. The post When protections outlive their purpose: A lesson on managing defense systems at scale appeared first on The GitHub Blog .
```

```text
Post-quantum security for SSH access on GitHub
URL: https://github.blog/engineering/platform-security/post-quantum-security-for-ssh-access-on-github/
Published: Mon, 15 Sep 2025 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: security, github
GitHub is introducing post-quantum secure key exchange methods for SSH access to better protect Git data in transit. The post Post-quantum security for SSH access on GitHub appeared first on The GitHub Blog .
```

```text
From latency to instant: Modernizing GitHub Issues navigation performance
URL: https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/
Published: Thu, 14 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
How the GitHub Issues team used client-side caching, smart prefetching, and service workers to make navigation feel instant. The post From latency to instant: Modernizing GitHub Issues navigation performance appeared first on The GitHub Blog .
```

```text
The uphill climb of making diff lines performant
URL: https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
Published: Fri, 03 Apr 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
The path to better performance is often found in simplicity. The post The uphill climb of making diff lines performant appeared first on The GitHub Blog .
```

```text
Continuous AI for accessibility: How GitHub transforms feedback into inclusion
URL: https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
Published: Thu, 12 Mar 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
AI automates triage for accessibility feedback, allowing us to focus on fixing barriers—turning a chaotic backlog into continuous, rapid resolutions. The post Continuous AI for accessibility: How GitHub transforms feedback into inclusion appeared first on The GitHub Blog .
```

```text
How we rebuilt the search architecture for high availability in GitHub Enterprise Server
URL: https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/
Published: Tue, 03 Mar 2026 18:45:09 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
Here's how we made the search experience better, faster, and more resilient for GHES customers. The post How we rebuilt the search architecture for high availability in GitHub Enterprise Server appeared first on The GitHub Blog .
```

```text
How GitHub engineers tackle platform problems
URL: https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/
Published: Tue, 10 Jun 2025 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
Our best practices for quickly identifying, resolving, and preventing issues at scale. The post How GitHub engineers tackle platform problems appeared first on The GitHub Blog .
```

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
Final URL: `https://blog.cloudflare.com/rss/`
Status/content: `200` / `application/xml`

```text
VoidZero is joining Cloudflare
URL: https://blog.cloudflare.com/voidzero-joins-cloudflare/
Published: Thu, 04 Jun 2026 12:59:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
VoidZero, the team behind Vite, Vitest, Rolldown, Oxc, and Vite+, is joining Cloudflare. Vite stays open source, vendor-agnostic, and built for everyone.
```

```text
Announcing Claude Managed Agents on Cloudflare
URL: https://blog.cloudflare.com/claude-managed-agents/
Published: Tue, 19 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 83
Signal tags: agent, runtime, release
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
URL: https://blog.cloudflare.com/browser-run-containers/
Published: Wed, 13 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 65
Signal tags: kubernetes, browser
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
```

```text
Code Orange: Fail Small is complete. The result is a stronger Cloudflare network
URL: https://blog.cloudflare.com/code-orange-fail-small-complete/
Published: Fri, 01 May 2026 21:07:30 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: codex
We have completed a massive engineering effort to make our infrastructure more resilient. Through new tools like Snapstone and the Engineering Codex, we've implemented safer configuration changes and automated best practices to prevent future incidents.
```

```text
Agents can now create Cloudflare accounts, buy domains, and deploy
URL: https://blog.cloudflare.com/agents-stripe-projects/
Published: Thu, 30 Apr 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 47
Signal tags: agent
Starting today, agents can now be Cloudflare customers. They can create a Cloudflare account, start a paid subscription, register a domain, and get back an API token to deploy code right away. Humans can be in the loop to grant permission, but there’s no need to go to the dashboard, copy and paste API tokens, or enter credit card details.
```

```text
Project Glasswing: what Mythos showed us
URL: https://blog.cloudflare.com/cyber-frontier-models/
Published: Mon, 18 May 2026 06:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 37
Signal tags: security
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
```

```text
Introducing Dynamic Workflows: durable execution that follows the tenant
URL: https://blog.cloudflare.com/dynamic-workflows/
Published: Fri, 01 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 37
Signal tags: runtime
Dynamic Workflows is a library that lets you route durable execution to tenant-provided code on the fly. Built on Dynamic Workers, it enables platforms to serve millions of unique workflows at near-zero idle cost.
```

```text
How we built Cloudflare's data platform and an AI agent on top of it
URL: https://blog.cloudflare.com/our-unified-data-platform/
Published: Thu, 28 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 35
Signal tags: agent
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
```

```text
Announcing Claude Compliance API support with Cloudflare CASB
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Published: Thu, 21 May 2026 17:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: security, release
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
```

```text
How we reduced core unit boot time from hours to minutes
URL: https://blog.cloudflare.com/optimizing-core-unit-boot-time/
Published: Mon, 01 Jun 2026 16:53:39 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 25
Signal tags: (none)
We investigated why firmware updates were causing our core servers to take four hours to reboot. By diving into UEFI data structures and iPXE automation, we eliminated unnecessary timeouts and cut boot times back down to minutes.
```

```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Published: Thu, 07 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: security
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
```

```text
Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
URL: https://blog.cloudflare.com/clickhouse-query-plan-contention/
Published: Thu, 14 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: (none)
When a partitioning change to our petabyte-scale ClickHouse cluster caused critical billing jobs to stall, standard metrics showed no obvious errors. This post explores how we identified severe lock contention in ClickHouse's query planner and built upstream patches to fix it.
```

```text
Post-quantum encryption for Cloudflare IPsec is generally available
URL: https://blog.cloudflare.com/post-quantum-ipsec/
Published: Thu, 30 Apr 2026 14:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: release
Cloudflare IPsec now has generally available support for post-quantum encryption via hybrid ML-KEM. We’ve confirmed interoperability with Cisco and Fortinet.
```

```text
Enforcing the First AS in BGP AS_PATHs
URL: https://blog.cloudflare.com/enforce-first-as-bgp/
Published: Wed, 03 Jun 2026 17:00:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
BGP is vulnerable to routing hijacks and path leaks that negatively impact traffic on the Internet. RPKI helps solve some of these problems, but for some forged paths, we need to rely on a simpler mechanism: First AS enforcement in BGP.
```

```text
Iran's Internet is partially restored, Cloudflare Radar data shows
URL: https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/
Published: Wed, 27 May 2026 17:25:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
Cloudflare Radar data confirms early indications of a partial Internet restoration in Iran, nearly three months after the shutdown began. Traffic spikes and DNS queries have risen, but network activity is currently just 40% of pre-shutdown levels.
```

```text
When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug
URL: https://blog.cloudflare.com/quic-death-spiral-fix/
Published: Tue, 12 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
We investigated a bug where CUBIC's congestion window became pinned at its minimum floor, causing a performance to plummet. The fix involved correctly measuring idle periods to distinguish RTT wait times from actual application idleness.
```

```text
Building for the future
URL: https://blog.cloudflare.com/building-for-the-future/
Published: Thu, 07 May 2026 20:15:12 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency, and we believe it's important that you hear this directly from us because it’s a major moment at Cloudflare.
```

```text
When DNSSEC goes wrong: how we responded to the .de TLD outage
URL: https://blog.cloudflare.com/de-tld-outage-dnssec/
Published: Wed, 06 May 2026 17:00:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
On May 5, 2026, DENIC published broken DNSSEC signatures for the .de TLD, making millions of domains unreachable. Here's what 1.1.1.1 saw, how serve stale cushioned the impact, and how we restored resolution.
```

```text
Shutdowns, power outages, and conflict: a review of Q1 2026 Internet disruptions
URL: https://blog.cloudflare.com/q1-2026-internet-disruption-summary/
Published: Tue, 28 Apr 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
The first quarter of 2026 saw a surge in Internet disruptions, from nationwide shutdowns in Uganda and Iran to unprecedented drone strikes on cloud infrastructure. We explore the data behind these events using Cloudflare Radar.
```

```text
Making Rust Workers reliable: panic and abort recovery in wasm‑bindgen
URL: https://blog.cloudflare.com/making-rust-workers-reliable/
Published: Wed, 22 Apr 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
Panics in Rust Workers were historically fatal, poisoning the entire instance. By collaborating upstream on the wasm‑bindgen project, Rust Workers now support resilient critical error recovery, including panic unwinding using WebAssembly Exception Handling.
```

### Docker Blog
Source URL: `https://www.docker.com/blog/feed/`
Final URL: `https://www.docker.com/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Hardened Images Explained: Fewer CVEs, Smaller Attack Surface
URL: https://www.docker.com/blog/what-are-hardened-images/
Published: Thu, 04 Jun 2026 17:02:51 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: kubernetes, security
When security teams scan their container environments for the first time, they often discover hundreds of known vulnerabilities, and almost none of them trace back to application code. The overwhelming majority come from packages that shipped with the base image: shells, compilers, debug utilities, and libraries the application never calls. In a software supply chain...
```

```text
What is Software Supply Chain Security?
URL: https://www.docker.com/blog/what-is-software-supply-chain-security/
Published: Wed, 03 Jun 2026 18:24:39 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: security
Software supply chain attacks have accelerated faster than most security teams anticipated. Sonatype's 2026 State of the Software Supply Chain report identified more than 454,000 new malicious packages published to open source repositories in 2025, bringing the cumulative total to over 1.2 million since 2019. The blast radius keeps expanding as organizations consume more open...
```

```text
How to Secure AI Agents: A Practical Overview for Development Teams
URL: https://www.docker.com/blog/how-to-secure-ai-agents/
Published: Tue, 02 Jun 2026 16:11:02 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 87
Signal tags: agent, security
In our State of Agentic AI report, 45% of organizations said they struggle to ensure the tools their agents use are secure and enterprise-ready. That number reflects a broader reality: AI agents are moving into production faster than the security practices around them are maturing. The challenge is not that organizations lack security awareness. It’s...
```

```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Published: Tue, 19 May 2026 19:08:04 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 77
Signal tags: agent, runtime, kubernetes, release
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
```

```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Published: Tue, 26 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 75
Signal tags: agent
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
```

```text
What is Sandbox Security?
URL: https://www.docker.com/blog/what-is-sandbox-security/
Published: Mon, 01 Jun 2026 15:51:31 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 65
Signal tags: agent, security
If you're already familiar with sandboxing as an isolation technique, sandbox security is the next layer: the policies, controls, and enforcement mechanisms that make sure those isolation boundaries actually hold under real-world pressure. According to our State of Agentic AI report, 40% of respondents cite security as the top challenge in scaling agentic AI, and...
```

```text
Coding Agent Horror Stories: The rm -rf ~/ Incident
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
Published: Mon, 01 Jun 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 65
Signal tags: agent, security
This is Part 2 of our AI Coding Agent Horror Stories series, an in-depth look at real-world security incidents exposing the vulnerabilities in AI coding agents, and how Docker Sandboxes deliver workspace-scoped isolation that contains the worst failures at the execution layer. In part 1 of this series, we mapped six categories of AI coding...
```

```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-security-crisis-threatening-developer-infrastructure/
Published: Mon, 18 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 65
Signal tags: agent, security
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
```

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Published: Fri, 15 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: mcp, release
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
```

```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Published: Wed, 27 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: kubernetes
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
```

### Kubernetes Blog
Source URL: `https://kubernetes.io/feed.xml`
Final URL: `https://kubernetes.io/feed.xml`
Status/content: `200` / `application/xml`

```text
Running Agents on Kubernetes with Agent Sandbox
URL: https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
Published: Fri, 20 Mar 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 109
Signal tags: agent, runtime, inference, kubernetes
The landscape of artificial intelligence is undergoing a massive architectural shift. In the early days of generative AI, interacting with a model was often treated as a transient, stateless function call: a request that spun up, executed for perhaps 50 milliseconds, and terminated. Today, the world is witnessing AI v2 eating AI v1. The ecosystem is moving from short-lived, isolated tasks to deploying multiple, coordinated AI agents that run constantly. These autonomous agents need to maintain context, use external tools, write and execute code, and communicate with one another over extended periods. As platform engineering teams look for the right infrastructure to host these new AI workloads, one platform stands out as the natural choice: Kubernetes. However, mapping these unique agentic workloads to traditional Kubernetes primitives requires a new abstraction. This is where the new Agent Sandbox project (currently in development under SIG Apps) comes into play. The Kubernetes advantage (and the abstraction gap) Kubernetes is the de facto standard for orchestrating cloud-native applications precisely because it solves the challenges of extensibility, robust networking, and ecosystem maturity. However, as AI evolves from short-lived inference requests to long-running, autonomous agents, we are seeing the emergence of a new operational pattern. AI agents, by contrast, are typic
```

```text
Announcing the AI Gateway Working Group
URL: https://kubernetes.io/blog/2026/03/09/announcing-ai-gateway-wg/
Published: Mon, 09 Mar 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 97
Signal tags: inference, kubernetes, security, release
The community around Kubernetes includes a number of Special Interest Groups (SIGs) and Working Groups (WGs) facilitating discussions on important topics between interested contributors. Today, we're excited to announce the formation of the AI Gateway Working Group , a new initiative focused on developing standards and best practices for networking infrastructure that supports AI workloads in Kubernetes environments. What is an AI Gateway? In a Kubernetes context, an AI Gateway refers to network gateway infrastructure (including proxy servers, load-balancers, etc.) that generally implements the Gateway API specification with enhanced capabilities for AI workloads. Rather than defining a distinct product category, AI Gateways describe infrastructure designed to enforce policy on AI traffic, including: Token-based rate limiting for AI APIs. Fine-grained access controls for inference APIs. Payload inspection enabling intelligent routing, caching, and guardrails. Support for AI-specific protocols and routing patterns. Working group charter and mission The AI Gateway Working Group operates under a clear charter with the mission to develop proposals for Kubernetes Special Interest Groups (SIGs) and their sub-projects. Its primary goals include: Standards Development : Create declarative APIs, standards, and guidance for AI workload networking in Kubernetes. Community Collaboration :
```

```text
Introducing Node Readiness Controller
URL: https://kubernetes.io/blog/2026/02/03/introducing-node-readiness-controller/
Published: Tue, 03 Feb 2026 10:00:00 +0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, inference, kubernetes, database, release
In the standard Kubernetes model, a node’s suitability for workloads hinges on a single binary "Ready" condition. However, in modern Kubernetes environments, nodes require complex infrastructure dependencies—such as network agents, storage drivers, GPU firmware, or custom health checks—to be fully operational before they can reliably host pods. Today, on behalf of the Kubernetes project, I am announcing the Node Readiness Controller . This project introduces a declarative system for managing node taints, extending the readiness guardrails during node bootstrapping beyond standard conditions. By dynamically managing taints based on custom health signals, the controller ensures that workloads are only placed on nodes that met all infrastructure-specific requirements. Why the Node Readiness Controller? Core Kubernetes Node "Ready" status is often insufficient for clusters with sophisticated bootstrapping requirements. Operators frequently struggle to ensure that specific DaemonSets or local services are healthy before a node enters the scheduling pool. The Node Readiness Controller fills this gap by allowing operators to define custom scheduling gates tailored to specific node groups. This enables you to enforce distinct readiness requirements across heterogeneous clusters, ensuring for example, that GPU equipped nodes only accept pods once specialized drivers are verified, while
```

```text
Announcing the Checkpoint/Restore Working Group
URL: https://kubernetes.io/blog/2026/01/21/introducing-checkpoint-restore-wg/
Published: Wed, 21 Jan 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 81
Signal tags: runtime, inference, kubernetes, security, release
The community around Kubernetes includes a number of Special Interest Groups (SIGs) and Working Groups (WGs) facilitating discussions on important topics between interested contributors. Today we would like to announce the new Kubernetes Checkpoint Restore WG focusing on the integration of Checkpoint/Restore functionality into Kubernetes. Motivation and use cases There are several high-level scenarios discussed in the working group: Optimizing resource utilization for interactive workloads, such as Jupyter notebooks and AI chatbots Accelerating startup of applications with long initialization times, including Java applications and LLM inference services Using periodic checkpointing to enable fault-tolerance for long-running workloads, such as distributed model training Providing interruption-aware scheduling with transparent checkpoint/restore, allowing lower-priority Pods to be preempted while preserving the runtime state of applications Facilitating Pod migration across nodes for load balancing and maintenance, without disrupting workloads. Enabling forensic checkpointing to investigate and analyze security incidents such as cyberattacks, data breaches, and unauthorized access. Across these scenarios, the goal is to help facilitate discussions of ideas between the Kubernetes community and the growing Checkpoint/Restore in Userspace (CRIU) ecosystem. The CRIU community include
```

```text
Securing Production Debugging in Kubernetes
URL: https://kubernetes.io/blog/2026/03/18/securing-production-debugging-in-kubernetes/
Published: Wed, 18 Mar 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 77
Signal tags: runtime, kubernetes, security
During production debugging, the fastest route is often broad access such as cluster-admin (a ClusterRole that grants administrator-level access), shared bastions/jump boxes, or long-lived SSH keys. It works in the moment, but it comes with two common problems: auditing becomes difficult, and temporary exceptions have a way of becoming routine. This post offers my recommendations for good practices applicable to existing Kubernetes environments with minimal tooling changes: Least privilege with RBAC Short-lived, identity-bound credentials An SSH-style handshake model for cloud native debugging A good architecture for securing production debugging workflows is to use a just-in-time secure shell gateway (often deployed as an on demand pod in the cluster). It acts as an SSH-style “front door” that makes temporary access actually temporary. You can authenticate with short-lived, identity-bound credentials, establish a session to the gateway, and the gateway uses the Kubernetes API and RBAC to control what they can do, such as pods/log , pods/exec , and pods/portforward . Sessions expire automatically, and both the gateway logs and Kubernetes audit logs capture who accessed what and when without shared bastion accounts or long-lived keys. 1) Using an access broker on top of Kubernetes RBAC RBAC controls who can do what in Kubernetes. Many Kubernetes environments rely primarily on RB
```

```text
The Invisible Rewrite: Modernizing the Kubernetes Image Promoter
URL: https://kubernetes.io/blog/2026/03/17/image-promoter-rewrite/
Published: Tue, 17 Mar 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 71
Signal tags: runtime, kubernetes, release
Every container image you pull from registry.k8s.io got there through kpromo , the Kubernetes image promoter. It copies images from staging registries to production, signs them with cosign , replicates signatures across more than 20 regional mirrors, and generates SLSA provenance attestations. If this tool breaks, no Kubernetes release ships. Over the past few weeks, we rewrote its core from scratch, deleted 20% of the codebase, made it dramatically faster, and nobody noticed. That was the whole point. A bit of history The image promoter started in late 2018 as an internal Google project by Linus Arver . The goal was simple: replace the manual, Googler-gated process of copying container images into k8s.gcr.io with a community-owned, GitOps-based workflow. Push to a staging registry, open a PR with a YAML manifest, get it reviewed and merged, and automation handles the rest. KEP-1734 formalized this proposal. In early 2019, the code moved to kubernetes-sigs/k8s-container-image-promoter and grew quickly. Over the next few years, Stephen Augustus consolidated multiple tools ( cip , gh2gcs , krel promote-images , promobot-files ) into a single CLI called kpromo . The repository was renamed to promo-tools . Adolfo Garcia Veytia (Puerco) added cosign signing and SBOM support. Tyler Ferrara built vulnerability scanning. Carlos Panato kept the project in a healthy and releasable state.
```

```text
Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees
URL: https://kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
Published: Thu, 29 Jan 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: kubernetes, security, release
In March 2026, Kubernetes will retire Ingress NGINX, a piece of critical infrastructure for about half of cloud native environments. The retirement of Ingress NGINX was announced for March 2026, after years of public warnings that the project was in dire need of contributors and maintainers. There will be no more releases for bug fixes, security patches, or any updates of any kind after the project is retired. This cannot be ignored, brushed off, or left until the last minute to address. We cannot overstate the severity of this situation or the importance of beginning migration to alternatives like Gateway API or one of the many third-party Ingress controllers immediately. To be abundantly clear: choosing to remain with Ingress NGINX after its retirement leaves you and your users vulnerable to attack. None of the available alternatives are direct drop-in replacements. This will require planning and engineering time. Half of you will be affected. You have two months left to prepare. Existing deployments will continue to work, so unless you proactively check, you may not know you are affected until you are compromised. In most cases, you can check to find out whether or not you rely on Ingress NGINX by running kubectl get pods --all-namespaces --selector app.kubernetes.io/name=ingress-nginx with cluster administrator permissions. Despite its broad appeal and widespread use by com
```

```text
Before You Migrate: Five Surprising Ingress-NGINX Behaviors You Need to Know
URL: https://kubernetes.io/blog/2026/02/27/ingress-nginx-before-you-migrate/
Published: Fri, 27 Feb 2026 07:30:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 65
Signal tags: kubernetes, release
As announced November 2025, Kubernetes will retire Ingress-NGINX in March 2026. Despite its widespread usage, Ingress-NGINX is full of surprising defaults and side effects that are probably present in your cluster today. This blog highlights these behaviors so that you can migrate away safely and make a conscious decision about which behaviors to keep. This post also compares Ingress-NGINX with Gateway API and shows you how to preserve Ingress-NGINX behavior in Gateway API. The recurring risk pattern in every section is the same: a seemingly correct translation can still cause outages if it does not consider Ingress-NGINX's quirks. I'm going to assume that you, the reader, have some familiarity with Ingress-NGINX and the Ingress API. Most examples use httpbin as the backend. Also, note that Ingress-NGINX and NGINX Ingress are two separate Ingress controllers. Ingress-NGINX is an Ingress controller maintained and governed by the Kubernetes community that is retiring March 2026. NGINX Ingress is an Ingress controller by F5. Both use NGINX as the dataplane, but are otherwise unrelated. From now on, this blog post only discusses Ingress-NGINX. 1. Regex matches are prefix-based and case insensitive Suppose that you wanted to route all requests with a path consisting of only three uppercase letters to the httpbin service. You might create the following Ingress with the nginx.ingress.
```

```text
SELinux Volume Label Changes goes GA (and likely implications in v1.37)
URL: https://kubernetes.io/blog/2026/04/22/breaking-changes-in-selinux-volume-labeling/
Published: Wed, 22 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 63
Signal tags: runtime, kubernetes, security, release
If you run Kubernetes on Linux with SELinux in enforcing mode, plan ahead: a future release (anticipated to be v1.37) is expected to turn the SELinuxMount feature gate on by default. This makes volume setup faster for most workloads, but it can break applications that still depend on the older recursive relabeling model in subtle ways (for example, sharing one volume between privileged and unprivileged Pods on the same node). Kubernetes v1.36 is the right release to audit your cluster and fix or opt out of this change. If your nodes do not use SELinux, nothing changes for you: the kubelet skips the whole SELinux logic when SELinux is unavailable or disabled in the Linux kernel. You can skip this article completely. This blog builds on the earlier work described in the Kubernetes 1.27: Efficient SELinux Relabeling (Beta) post, where the SELinuxMountReadWriteOncePod feature gate was described. The problem to be addressed remains the same, however, this blog extends that same approach to all volumes. The problem Linux systems with Security Enhanced Linux (SELinux) enabled use labels attached to objects (for example, files and network sockets) to make access control decisions. Historically, the container runtime applies SELinux labels to a Pod and all its volumes. Kubernetes only passes the SELinux label from a Pod's securityContext fields to the container runtime. The container ru
```

```text
Headlamp in 2025: Project Highlights
URL: https://kubernetes.io/blog/2026/01/22/headlamp-in-2025-project-highlights/
Published: Thu, 22 Jan 2026 10:00:00 +0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 63
Signal tags: runtime, kubernetes, release
This announcement is a recap from a post originally published on the Headlamp blog. Headlamp has come a long way in 2025. The project has continued to grow – reaching more teams across platforms, powering new workflows and integrations through plugins, and seeing increased collaboration from the broader community. We wanted to take a moment to share a few updates and highlight how Headlamp has evolved over the past year. Updates Joining Kubernetes SIG UI This year marked a big milestone for the project: Headlamp is now officially part of Kubernetes SIG UI . This move brings roadmap and design discussions even closer to the core Kubernetes community and reinforces Headlamp’s role as a modern, extensible UI for the project. As part of that, we’ve also been sharing more about making Kubernetes approachable for a wider audience, including an appearance on Enlightening with Whitney Lee and a talk at KCD New York 2025 . Linux Foundation mentorship This year, we were excited to work with several students through the Linux Foundation’s Mentorship program, and our mentees have already left a visible mark on Headlamp: Adwait Godbole built the KEDA plugin, adding a UI in Headlamp to view and manage KEDA resources like ScaledObjects and ScaledJobs. Dhairya Majmudar set up an OpenTelemetry-based observability stack for Headlamp, wiring up metrics, logs, and traces so the project is easier t
```

```text
Uniform API server access using clientcmd
URL: https://kubernetes.io/blog/2026/01/19/clientcmd-apiserver-access/
Published: Mon, 19 Jan 2026 10:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 59
Signal tags: runtime, inference, kubernetes
If you've ever wanted to develop a command line client for a Kubernetes API, especially if you've considered making your client usable as a kubectl plugin, you might have wondered how to make your client feel familiar to users of kubectl . A quick glance at the output of kubectl options might put a damper on that: "Am I really supposed to implement all those options?" Fear not, others have done a lot of the work involved for you. In fact, the Kubernetes project provides two libraries to help you handle kubectl -style command line arguments in Go programs: clientcmd and cli-runtime (which uses clientcmd ). This article will show how to use the former. General philosophy As might be expected since it's part of client-go , clientcmd 's ultimate purpose is to provide an instance of restclient.Config that can issue requests to an API server. It follows kubectl semantics: defaults are taken from ~/.kube or equivalent; files can be specified using the KUBECONFIG environment variable; all of the above settings can be further overridden using command line arguments. It doesn't set up a --kubeconfig command line argument, which you might want to do to align with kubectl ; you'll see how to do this in the "Bind the flags" section. Available features clientcmd allows programs to handle kubeconfig selection (using KUBECONFIG ); context selection; namespace selection; client certificates and
```

```text
Kubernetes v1.36 Sneak Peek
URL: https://kubernetes.io/blog/2026/03/30/kubernetes-v1-36-sneak-peek/
Published: Mon, 30 Mar 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 57
Signal tags: kubernetes, security, release
Kubernetes v1.36 is coming at the end of April 2026. This release will include removals and deprecations, and it is packed with an impressive number of enhancements. Here are some of the features we are most excited about in this cycle! Please note that this information reflects the current state of v1.36 development and may change before release. The Kubernetes API removal and deprecation process The Kubernetes project has a well-documented deprecation policy for features. This policy states that stable APIs may only be deprecated when a newer, stable version of that same API is available and that APIs have a minimum lifetime for each stability level. A deprecated API has been marked for removal in a future Kubernetes release. It will continue to function until removal (at least one year from the deprecation), but usage will result in a warning being displayed. Removed APIs are no longer available in the current version, at which point you must migrate to using the replacement. Generally available (GA) or stable API versions may be marked as deprecated but must not be removed within a major version of Kubernetes. Beta or pre-release API versions must be supported for 3 releases after the deprecation. Alpha or experimental API versions may be removed in any release without prior deprecation notice; this process can become a withdrawal in cases where a different implementation f
```

```text
Experimenting with Gateway API using kind
URL: https://kubernetes.io/blog/2026/01/28/experimenting-gateway-api-with-kind/
Published: Wed, 28 Jan 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 57
Signal tags: kubernetes
This document will guide you through setting up a local experimental environment with Gateway API on kind . This setup is designed for learning and testing. It helps you understand Gateway API concepts without production complexity. Caution: This is an experimentation learning setup, and should not be used for production. The components used on this document are not suited for production usage. Once you're ready to deploy Gateway API in a production environment, select an implementation that suits your needs. Overview In this guide, you will: Set up a local Kubernetes cluster using kind (Kubernetes in Docker) Deploy cloud-provider-kind , which provides both LoadBalancer Services and a Gateway API controller Create a Gateway and HTTPRoute to route traffic to a demo application Test your Gateway API configuration locally This setup is ideal for learning, development, and experimentation with Gateway API concepts. Prerequisites Before you begin, ensure you have the following installed on your local machine: Docker - Required to run kind and cloud-provider-kind kubectl - The Kubernetes command-line tool kind - Kubernetes in Docker curl - Required to test the routes Create a kind cluster Create a new kind cluster by running: kind create cluster This will create a single-node Kubernetes cluster running in a Docker container. Install cloud-provider-kind Next, you need cloud-provider-k
```

```text
Gateway API v1.5: Moving features to Stable
URL: https://kubernetes.io/blog/2026/04/21/gateway-api-v1-5/
Published: Tue, 21 Apr 2026 08:30:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 53
Signal tags: kubernetes, release
The Kubernetes SIG Network community presents the release of Gateway API (v1.5)! Released on February 27, 2026, version 1.5 is our biggest release yet, and concentrates on moving existing Experimental features to Standard (Stable). The Gateway API v1.5.1 patch release is already available. The Gateway API v1.5 brings six widely-requested feature promotions to the Standard channel (Gateway API's GA release channel): ListenerSet TLSRoute HTTPRoute CORS Filter Client Certificate Validation Certificate Selection for Gateway TLS Origination ReferenceGrant Special thanks for Gateway API Contributors for their efforts on this release. New release process As of Gateway API v1.5, the project has moved to a release train model, where on a feature freeze date, any features that are ready are shipped in the release. This applies to both Experimental and Standard, and also applies to documentation -- if the documentation isn't ready to ship, the feature isn't ready to ship. We are aiming for this to produce a more reliable release cadence (since we are basing our work off the excellent work done by SIG Release on Kubernetes itself). As part of this change, we've also introduced Release Manager and Release Shadow roles to our release team. Many thanks to Flynn (Buoyant) and Beka Modebadze (Google) for all the great work coordinating and filing the rough edges of our release process. They are
```

```text
Announcing Ingress2Gateway 1.0: Your Path to Gateway API
URL: https://kubernetes.io/blog/2026/03/20/ingress2gateway-1-0-release/
Published: Fri, 20 Mar 2026 11:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 53
Signal tags: kubernetes, release
With the Ingress-NGINX retirement scheduled for March 2026, the Kubernetes networking landscape is at a turning point. For most organizations, the question isn't whether to migrate to Gateway API , but how to do so safely. Migrating from Ingress to Gateway API is a fundamental shift in API design. Gateway API provides a modular, extensible API with strong support for Kubernetes-native RBAC. Conversely, the Ingress API is simple, and implementations such as Ingress-NGINX extend the API through esoteric annotations, ConfigMaps, and CRDs. Migrating away from Ingress controllers such as Ingress-NGINX presents the daunting task of capturing all the nuances of the Ingress controller, and mapping that behavior to Gateway API. Ingress2Gateway is an assistant that helps teams confidently move from Ingress to Gateway API. It translates Ingress resources/manifests along with implementation-specific annotations to Gateway API while warning you about untranslatable configuration and offering suggestions. Today, SIG Network is proud to announce the 1.0 release of Ingress2Gateway . This milestone represents a stable, tested migration assistant for teams ready to modernize their networking stack. Ingress2Gateway 1.0 Ingress-NGINX annotation support The main improvement for the 1.0 release is more comprehensive Ingress-NGINX support. Before the 1.0 release, Ingress2Gateway only supported three
```

```text
Cluster API v1.12: Introducing In-place Updates and Chained Upgrades
URL: https://kubernetes.io/blog/2026/01/27/cluster-api-v1-12-release/
Published: Tue, 27 Jan 2026 08:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 49
Signal tags: runtime, kubernetes, release
Cluster API brings declarative management to Kubernetes cluster lifecycle, allowing users and platform teams to define the desired state of clusters and rely on controllers to continuously reconcile toward it. Similar to how you can use StatefulSets or Deployments in Kubernetes to manage a group of Pods, in Cluster API you can use KubeadmControlPlane to manage a set of control plane Machines, or you can use MachineDeployments to manage a group of worker Nodes. The Cluster API v1.12.0 release expands what is possible in Cluster API, reducing friction in common lifecycle operations by introducing in-place updates and chained upgrades. Emphasis on simplicity and usability With v1.12.0, the Cluster API project demonstrates once again that this community is capable of delivering a great amount of innovation, while at the same time minimizing impact for Cluster API users. What does this mean in practice? Users simply have to change the Cluster or the Machine spec (just as with previous Cluster API releases), and Cluster API will automatically trigger in-place updates or chained upgrades when possible and advisable. In-place Updates Like Kubernetes does for Pods in Deployments, when the Machine spec changes also Cluster API performs rollouts by creating a new Machine and deleting the old one. This approach, inspired by the principle of immutable infrastructure, has a set of considerab
```

```text
Spotlight on SIG Architecture: API Governance
URL: https://kubernetes.io/blog/2026/02/12/sig-architecture-api-spotlight/
Published: Thu, 12 Feb 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: kubernetes, security
This is the fifth interview of a SIG Architecture Spotlight series that covers the different subprojects, and we will be covering SIG Architecture: API Governance . In this SIG Architecture spotlight we talked with Jordan Liggitt , lead of the API Governance sub-project. Introduction FM: Hello Jordan, thank you for your availability. Tell us a bit about yourself, your role and how you got involved in Kubernetes. JL : My name is Jordan Liggitt. I'm a Christian, husband, father of four, software engineer at Google by day, and amateur musician by stealth. I was born in Texas (and still like to claim it as my point of origin), but I've lived in North Carolina for most of my life. I've been working on Kubernetes since 2014. At that time, I was working on authentication and authorization at Red Hat, and my very first pull request to Kubernetes attempted to add an OAuth server to the Kubernetes API server. It never exited work-in-progress status. I ended up going with a different approach that layered on top of the core Kubernetes API server in a different project (spoiler alert: this is foreshadowing), and I closed it without merging six months later. Undeterred by that start, I stayed involved, helped build Kubernetes authentication and authorization capabilities, and got involved in the definition and evolution of the core Kubernetes APIs from early beta APIs, like v1beta3 to v1 .
```

```text
Kubernetes v1.35: Restricting executables invoked by kubeconfigs via exec plugin allowList added to kuberc
URL: https://kubernetes.io/blog/2026/01/09/kubernetes-v1-35-kuberc-credential-plugin-allowlist/
Published: Fri, 09 Jan 2026 10:30:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: kubernetes, security
Did you know that kubectl can run arbitrary executables, including shell scripts, with the full privileges of the invoking user, and without your knowledge? Whenever you download or auto-generate a kubeconfig , the users[n].exec.command field can specify an executable to fetch credentials on your behalf. Don't get me wrong, this is an incredible feature that allows you to authenticate to the cluster with external identity providers. Nevertheless, you probably see the problem: Do you know exactly what executables your kubeconfig is running on your system? Do you trust the pipeline that generated your kubeconfig ? If there has been a supply-chain attack on the code that generates the kubeconfig, or if the generating pipeline has been compromised, an attacker might well be doing unsavory things to your machine by tricking your kubeconfig into running arbitrary code. To give the user more control over what gets run on their system, SIG-Auth and SIG-CLI added the credential plugin policy and allowlist as a beta feature to Kubernetes 1.35. This is available to all clients using the client-go library, by filling out the ExecProvider.PluginPolicy struct on a REST config. To broaden the impact of this change, Kubernetes v1.35 also lets you manage this without writing a line of application code. You can configure kubectl to enforce the policy and allowlist by adding two fields to the kub
```

```text
Kubernetes v1.36: ハル (Haru)
URL: https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/
Published: Wed, 22 Apr 2026 00:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 31
Signal tags: kubernetes, release
Editors: Chad M. Crowell, Kirti Goyal, Sophia Ugochukwu, Swathi Rao, Utkarsh Umre Similar to previous releases, the release of Kubernetes v1.36 introduces new stable, beta, and alpha features. The consistent delivery of high-quality releases underscores the strength of our development cycle and the vibrant support from our community. This release consists of 70 enhancements. Of those enhancements, 18 have graduated to Stable, 25 are entering Beta, and 25 have graduated to Alpha. There are also some deprecations and removals in this release; make sure to read about those. Release theme and logo We open 2026 with Kubernetes v1.36, a release that arrives as the season turns and the light shifts on the mountain. ハル ( Haru ) is a sound in Japanese that carries many meanings; among those we hold closest are 春 (spring), 晴れ ( hare , clear skies), and 遥か ( haruka , far-off, distant). A season, a sky, and a horizon. You will find all three in what follows. The logo, created by avocadoneko / Natsuho Ide , draws inspiration from Katsushika Hokusai 's Thirty-six Views of Mount Fuji (富嶽三十六景, Fugaku Sanjūrokkei ), the same series that gave the world The Great Wave off Kanagawa . Our v1.36 logo reimagines one of the series' most celebrated prints, Fine Wind, Clear Morning (凱風快晴, Gaifū Kaisei ), also known as Red Fuji (赤富士, Aka Fuji ): the mountain lit red in a summer dawn, bare of snow after t
```

```text
New Conversion from cgroup v1 CPU Shares to v2 CPU Weight
URL: https://kubernetes.io/blog/2026/01/30/new-cgroup-v1-to-v2-cpu-conversion-formula/
Published: Fri, 30 Jan 2026 08:00:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 31
Signal tags: kubernetes, release
I'm excited to announce the implementation of an improved conversion formula from cgroup v1 CPU shares to cgroup v2 CPU weight. This enhancement addresses critical issues with CPU priority allocation for Kubernetes workloads when running on systems with cgroup v2. Background Kubernetes was originally designed with cgroup v1 in mind, where CPU shares were derived from a container's CPU requests using the following formula: $$cpu.shares = milliCPU \times \frac{1024}{1000}$$ Note that the value 1024 in this formula is the default cpu.shares value in cgroup v1, and is unrelated to millicores. For example, a container requesting 1 CPU (1000m) would get (cpu.shares = 1000 \times 1024 / 1000 = 1024), and a container requesting 100m would get (cpu.shares = 100 \times 1024 / 1000 = 102). After a while, cgroup v1 started being replaced by its successor, cgroup v2. In cgroup v2, the concept of CPU shares (which ranges from 2 to 262144, or from 2¹ to 2¹⁸) was replaced with CPU weight (which ranges from [1, 10000], or 10⁰ to 10⁴). With the transition to cgroup v2, KEP-2254 introduced a conversion formula to map cgroup v1 CPU shares to cgroup v2 CPU weight. The conversion formula was defined as: cpu.weight = (1 + ((cpu.shares - 2) * 9999) / 262142) This formula linearly maps values from [2¹, 2¹⁸] to [10⁰, 10⁴]. While this approach is simple, the linear mapping imposes a few significant probl
```

### LangChain Blog (site)
Source URL: `https://www.langchain.com/blog/rss.xml`
Final URL: `https://www.langchain.com/blog/rss.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Managed Deep Agents: the fastest way to ship a production deep agent
URL: https://www.langchain.com/blog/introducing-managed-deep-agents
Published: Wed, 13 May 2026 22:32:29 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 105
Signal tags: agent, runtime
Run deep agents in production with durable execution, sandboxes, tool access, and LangSmith observability, without building the runtime yourself. Now in private beta
```

```text
Interpreters in Deep Agents: Code Between Tool Calls and Sandboxes
URL: https://www.langchain.com/blog/give-your-agents-an-interpreter
Published: Wed, 20 May 2026 18:55:56 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, runtime
Deep Agents now supports interpreters: small embedded runtimes where agents write code to coordinate tools, hold working state, and decide what enters model context.
```

```text
LangSmith LLM Gateway: runtime governance built into the agent lifecycle
URL: https://www.langchain.com/blog/introducing-llm-gateway
Published: Fri, 15 May 2026 22:28:53 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 89
Signal tags: agent, runtime, security
Introducing LangSmith LLM Gateway: runtime governance for AI agents with spend limits, PII redaction, and trace continuity, built directly into LangSmith.
```

```text
The Anatomy of an Agent Harness
URL: https://www.langchain.com/blog/the-anatomy-of-an-agent-harness
Published: Thu, 21 May 2026 20:32:38 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 83
Signal tags: agent, runtime, database
Learn how agent harnesses transform AI models into autonomous work engines. Explore core components: filesystems, sandboxes, and memory.
```

```text
Open Models have crossed a threshold
URL: https://www.langchain.com/blog/open-models-have-crossed-a-threshold
Published: Mon, 04 May 2026 13:19:36 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 83
Signal tags: agent, eval
Open models like GLM-5 and MiniMax M2.7 now match closed frontier models on core agent tasks — file operations, tool use, and instruction following — at a fraction of the cost and latency. Here's what our evals show and how to start using them in Deep Agents.
```

```text
Tuning Deep Agents to Work Well with Different Models
URL: https://www.langchain.com/blog/tuning-deep-agents-different-models
Published: Tue, 19 May 2026 03:57:24 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 75
Signal tags: agent, runtime
Deep Agents was previously designed in a generic way to work well across model families. Today we’re adding model-specific profiles to adjust prompts, tools, and middleware. We ship profiles for OpenAI, Anthropic, and Google models out of the box, which we see leads to a 10–20 point jump on a subset of tau2-bench over the default harness.
```

```text
Agent Observability: How to Monitor and Evaluate LLM Agents in Production
URL: https://www.langchain.com/blog/production-monitoring
Published: Thu, 30 Apr 2026 19:11:31 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 71
Signal tags: agent, eval
Production monitoring for LLM agents requires new observability tools. Learn how to trace, evaluate, and improve AI agents at scale.
```

```text
Fault Tolerance in LangGraph: Retries, Timeouts and Error Handlers
URL: https://www.langchain.com/blog/fault-tolerance-in-langgraph
Published: Thu, 04 Jun 2026 19:54:22 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: agent, runtime, security
Production agents fail in ways prototypes never do. This post walks through the three fault tolerance primitives built into LangGraph: RetryPolicy for automatic retries with backoff, TimeoutPolicy for wall-clock and idle-based caps, and error_handler for cleanup logic once retries are exhausted. Learn how they compose, why having them inside the workflow engine matters, and how to use the SAGA pattern to handle multi-step workflows with real-world side effects.
```

```text
We built SmithDB, the data layer for agent observability
URL: https://www.langchain.com/blog/introducing-smithdb
Published: Fri, 15 May 2026 22:28:53 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 63
Signal tags: agent, database
Introducing SmithDB: LangSmith's purpose-built distributed database for agent observability, delivering up to 12x faster performance with full portability.
```

```text
https://www.langchain.com/blog/agent-observability-needs-feedback-to-power-learning
URL: https://www.langchain.com/blog/agent-observability-needs-feedback-to-power-learning
Published: Wed, 06 May 2026 00:36:37 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 49
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Everything we shipped at Interrupt
URL: https://www.langchain.com/blog/interrupt-2026-overview
Published: Tue, 19 May 2026 03:57:24 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 43
Signal tags: agent, release
From autonomous debugging to one-line deploys, here's every product LangChain launched at Interrupt 2026 to help teams build, test, and ship agents in production.
```

```text
Previewing Interrupt 2026: Agents at Enterprise Scale
URL: https://www.langchain.com/blog/previewing-interrupt-2026-agents-at-enterprise-scale
Published: Sat, 02 May 2026 20:47:40 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 43
Signal tags: agent, release
This year, we're doing it again. Interrupt 2026 is May 13–14 at The Midway in San Francisco, and the lineup, the format, and the scale have all leveled up.
```

```text
Introducing LangChain Labs
URL: https://www.langchain.com/blog/introducing-langchain-labs
Published: Tue, 19 May 2026 06:07:45 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
LangChain Labs is a new applied research effort focused on continual learning for agents, with partners advancing open research on self-improving AI systems.
```

```text
Introducing LangSmith Context Hub
URL: https://www.langchain.com/blog/introducing-context-hub
Published: Wed, 13 May 2026 18:41:15 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
Introducing Context Hub in LangSmith: a central place to store, version, and collaborate on the files that shape how your AI agents behave.
```

```text
https://www.langchain.com/blog/building-a-company-due-diligence-agent-with-deep-agents-langsmith-and-parallel
URL: https://www.langchain.com/blog/building-a-company-due-diligence-agent-with-deep-agents-langsmith-and-parallel
Published: Sat, 09 May 2026 23:23:09 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Open SWE: An Open-Source Framework for Internal Coding Agents
URL: https://www.langchain.com/blog/open-swe-an-open-source-framework-for-internal-coding-agents
Published: Mon, 04 May 2026 13:19:36 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
Built on Deep Agents and LangGraph, Open SWE provides the core architectural components for internal coding agents.
```

```text
Agentic Engineering: How Swarms of AI Agents Are Redefining Software Engineering
URL: https://www.langchain.com/blog/agentic-engineering-redefining-software-engineering
Published: Thu, 30 Apr 2026 19:11:31 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
Multi-agent systems that mirror real engineering teams — not just code faster — can cut debug time by 93% and compress cross-team delivery. Here's the architecture built on LangGraph.
```

```text
Announcing LangSmith is now a transactable offering in the Azure Marketplace
URL: https://www.langchain.com/blog/announcing-langsmith-is-now-a-transactable-offering-in-the-azure-marketplace
Published: Thu, 30 Apr 2026 19:11:31 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 27
Signal tags: release
LangSmith is now available in Azure Marketplace. Deploy the DevOps platform for LLM apps in your Azure VPC with full data control and MACC credit support.
```

```text
Iterating Towards LLM Reliability with Evaluation Driven Development
URL: https://www.langchain.com/blog/iterating-towards-llm-reliability-with-evaluation-driven-development
Published: Thu, 30 Apr 2026 19:11:31 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: eval
Dosu uses evaluation driven development and LangSmith to build reliable LLM products at scale, monitor production performance, and iterate with confidence.
```

```text
Test Run Comparisons
URL: https://www.langchain.com/blog/test-run-comparisons
Published: Thu, 30 Apr 2026 19:11:31 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
Compare LLM test runs side-by-side with LangSmith's Test Run Comparisons. Manually inspect data, filter results, and gain insights faster.
```

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
Run Claude Managed Agents with Vercel Sandbox
URL: https://vercel.com/changelog/run-claude-managed-agents-with-vercel-sandbox
Published: 2026-05-18T23:01:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 77
Signal tags: agent, runtime, release
(excerpt unavailable from feed item)
```

```text
Nemotron 3 Ultra now available on AI Gateway
URL: https://vercel.com/changelog/nemotron-3-ultra-now-available-on-ai-gateway
Published: 2026-06-04T07:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Qwen 3.7 Max now available on Vercel AI Gateway
URL: https://vercel.com/changelog/qwen-3-7-max-now-available-on-vercel-ai-gateway
Published: 2026-05-21T07:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Grok Build 0.1 now available on Vercel AI Gateway
URL: https://vercel.com/changelog/grok-build-0-1-now-available-on-vercel-ai-gateway
Published: 2026-05-20T07:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Chat SDK now includes AI SDK tools
URL: https://vercel.com/changelog/chat-sdk-now-includes-ai-sdk-tools
Published: 2026-05-20T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Vercel AI Gateway plugin for WordPress
URL: https://vercel.com/changelog/vercel-ai-gateway-plugin-for-wordpress
Published: 2026-05-20T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Nuxt MCP Toolkit now supports MCP apps
URL: https://vercel.com/changelog/nuxt-mcp-toolkit-mcp-apps
Published: 2026-05-19T14:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: mcp, release
(excerpt unavailable from feed item)
```

```text
Gemini 3.5 Flash on AI Gateway
URL: https://vercel.com/changelog/gemini-3-5-flash-on-ai-gateway
Published: 2026-05-19T07:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Firecrawl joins the Vercel Marketplace
URL: https://vercel.com/changelog/firecrawl-joins-the-vercel-marketplace
Published: 2026-05-26T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 27
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Updates to Legal Terms
URL: https://vercel.com/changelog/updates-to-legal-terms-june-2026
Published: 2026-06-04T18:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Microfrontends routing now applies to vc alias and branch domains
URL: https://vercel.com/changelog/microfrontends-routing-now-applies-to-vc-alias-and-branch-domains
Published: 2026-05-26T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Pull anomaly alert details using the Vercel CLI
URL: https://vercel.com/changelog/pull-anomaly-alert-details-using-the-vercel-cli
Published: 2026-05-21T09:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Configure weighted traffic splits for Vercel Flags from the Vercel CLI
URL: https://vercel.com/changelog/configure-weighted-traffic-splits-for-vercel-flags-from-the-vercel-cli
Published: 2026-05-21T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Chat SDK adds message subjects and direct SDK access
URL: https://vercel.com/changelog/chat-sdk-adds-message-subjects-and-direct-sdk-access
Published: 2026-05-20T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Chat SDK now supports callback URLs on buttons and modals
URL: https://vercel.com/changelog/chat-sdk-now-supports-callback-urls-on-buttons-and-modals
Published: 2026-05-20T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Flat Rate CDN in Limited Beta
URL: https://vercel.com/changelog/flat-rate-cdn-in-limited-beta
Published: 2026-05-19T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Consolidated Commit Status now available on GitHub
URL: https://vercel.com/changelog/consolidated-commit-status-now-available-for-github
Published: 2026-05-18T20:42:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: github, release
(excerpt unavailable from feed item)
```

```text
Firewall‑mitigated traffic is free on Vercel
URL: https://vercel.com/changelog/web-application-firewall-mitigated-traffic-is-free-on-vercel
Published: 2026-05-18T20:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Trace any Vercel request from the CLI
URL: https://vercel.com/changelog/trace-any-vercel-request-from-the-cli
Published: 2026-05-15T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

```text
Use native curl syntax with Vercel CLI
URL: https://vercel.com/changelog/use-native-curl-syntax-with-vercel-cli
Published: 2026-05-15T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 15
Signal tags: release
(excerpt unavailable from feed item)
```

### Vercel Blog
Source URL: `https://vercel.com/blog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
Nemotron 3 Ultra now available on AI Gateway
URL: https://vercel.com/changelog/nemotron-3-ultra-now-available-on-ai-gateway
Published: 2026-06-04T07:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Updates to Legal Terms
URL: https://vercel.com/changelog/updates-to-legal-terms-june-2026
Published: 2026-06-04T18:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
How Conductor moved parallel coding agents from the laptop to the cloud with Vercel Sandbox
URL: https://vercel.com/blog/how-conductor-moved-parallel-coding-agents-from-the-laptop-to-the-cloud-with-vercel-sandbox
Published: 2026-05-27T14:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 51
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Grok Imagine Video 1.5 on AI Gateway
URL: https://vercel.com/changelog/grok-imagine-video-1-5-on-ai-gateway
Published: 2026-06-03T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Qwen 3.7 Plus now available on AI Gateway
URL: https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway
Published: 2026-06-01T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
MiniMax M3 on AI Gateway
URL: https://vercel.com/changelog/minimax-m3-on-ai-gateway
Published: 2026-05-31T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Opus 4.8 on AI Gateway
URL: https://vercel.com/changelog/opus-4-8-on-ai-gateway
Published: 2026-05-28T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Team-wide provider allowlist on AI Gateway
URL: https://vercel.com/changelog/team-wide-provider-allowlist-on-ai-gateway
Published: 2026-05-28T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Run Docker containers inside Vercel Sandbox
URL: https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox
Published: 2026-05-29T00:01:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: kubernetes
(excerpt unavailable from feed item)
```

```text
Port 8080 is now available in Vercel Sandboxes
URL: https://vercel.com/changelog/port-8080-is-now-available-in-vercel-sandboxes
Published: 2026-05-29T00:01:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Elastic Build Machines now protect against out of memory builds
URL: https://vercel.com/changelog/elastic-build-machines-now-protect-against-out-of-memory-builds
Published: 2026-06-01T18:30:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: database
(excerpt unavailable from feed item)
```

```text
Protecting against token theft
URL: https://vercel.com/blog/protecting-against-token-theft
Published: 2026-05-29T04:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Amazon OpenSearch Serverless is now available in the Vercel Marketplace
URL: https://vercel.com/changelog/amazon-opensearch-serverless-is-now-available-in-the-vercel-marketplace
Published: 2026-05-28T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Edit Git settings for all projects in a repo
URL: https://vercel.com/changelog/edit-git-settings-for-all-projects-in-a-repo
Published: 2026-06-02T06:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Signed URLs are now available for Vercel Blob
URL: https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob
Published: 2026-06-02T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Vercel Blob now supports OIDC authentication
URL: https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication
Published: 2026-06-01T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Chat SDK adds Lark and Feishu support
URL: https://vercel.com/changelog/chat-sdk-adds-lark-feishu-support
Published: 2026-05-31T14:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Function invocations now billed per unit
URL: https://vercel.com/changelog/function-invocations-now-billed-per-unit
Published: 2026-05-29T10:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Experimental native binaries for Vercel CLI
URL: https://vercel.com/changelog/experimental-native-binaries-for-vercel-cli
Published: 2026-05-27T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Redesigned Deployments List
URL: https://vercel.com/changelog/redesigned-deployments-list
Published: 2026-05-27T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

### Simon Willison
Source URL: `https://simonwillison.net/atom/everything/`
Final URL: `https://simonwillison.net/atom/everything/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
I think Anthropic and OpenAI have found product-market fit
URL: https://simonwillison.net/2026/May/27/product-market-fit/#atom-everything
Published: 2026-05-27T16:38:35+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 88
Signal tags: agent, codex
Anthropic are strongly rumored to be about to have their first profitable quarter. Stories are circulating of companies surprised at how expensive their LLM bills are becoming from usage by their staff. I think this is because OpenAI and Anthropic have both found product-market fit. Enterprise customers are now paying API prices I think they've found product-market fit And they're ramping up The AI-failure stories around this are pretty thin We also know the labs are spending a lot API revenue is becoming less important April is a new inflection point Enterprise customers are now paying API prices I currently subscribe to the $100/month Max plan from Anthropic and the $100/month Pro plan from OpenAI. If you are a heavy user of coding agents these plans are a fantastic deal. I just ran the ccusage tool on my laptop to get an estimate of how much I would have spent if I were to pay for API tokens in the past 30 days and got: $1,199.79 for Anthropic Claude Code $980.37 for OpenAI Codex That's $2,180.16 worth of tokens for $200 - not bad at all! I'm a moderately heavy user of these tools, but I'm certainly not running agents every hour of the day and night. I had assumed that companies making extensive use of agents were getting similar discounts. It turns out I could not have been more wrong about that. I haven't been able to track down the exact date, but at some point in the las
```

```text
Microsoft Copilot Cowork Exfiltrates Files
URL: https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything
Published: 2026-05-26T15:36:48+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 68
Signal tags: agent, copilot, security
Microsoft Copilot Cowork Exfiltrates Files The biggest challenge in designing agentic systems continues to be preventing them from enabling attackers to exfiltrate data. In this case Microsoft Copilot Cowork (yes, that's a real product name ) was allowing agents to send emails to the user's own inbox without approval... but those messages were then displayed in a way that could leak data to an attacker via rendered images: Because these messages can contain external images that trigger network requests to external websites, data can be exfiltrated when a user opens a compromised message sent by the agent. Since OneDrive can create pre-authenticated download links, a successful prompt injection could cause those links to be leaked, allowing files to be downloaded by the attacker. Via Hacker News Tags: microsoft , security , ai , prompt-injection , generative-ai , llms , exfiltration-attacks , lethal-trifecta
```

```text
sqlite AGENTS.md
URL: https://simonwillison.net/2026/May/27/sqlite-agents/#atom-everything
Published: 2026-05-27T23:44:37+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 44
Signal tags: agent, security
sqlite AGENTS.md SQLite gained an AGENTS.md file five days ago - but it's not intended for their own development, it's presumably aimed at people who are pointing agents at the SQLite codebase. It includes: SQLite does not accept pull requests without prior agreement and/or accompanying legal paperwork that places the pull request in the public domain. However, the human SQLite developers will review a concise and well-written pull request as a proof-of-concept prior to reimplementing the changes themselves. SQLite does not accept agentic code. However the project will accept agentic bug reports that include a reproducible test case. Patches or pull requests demonstrating a possible fix, for documentation purposes, are welcomed. The most recent commit to that file removed "(currently)" from "SQLite does not (currently) accept agentic code", with the commit message "Strengthen the statement about not accepting agentic code". Meanwhile the SQLite forum was being flooded with so many AI-generated bug reports - of varying quality - that they've now split those off into a new SQLite Bug Forum . D. Richard Hipp is resolving issues on there with a flurry of commits to the codebase. Via Alex Garcia on the Datasette Discord Tags: sqlite , ai , d-richard-hipp , generative-ai , llms , coding-agents , ai-security-research
```

```text
Quoting Kyle Ferrana
URL: https://simonwillison.net/2026/May/27/kyle-ferrana/#atom-everything
Published: 2026-05-27T06:41:43+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 30
Signal tags: agent
PICARD: Data, shields up DATA: Brilliant! Shields can reduce damage we sustain. Not immunity. Not hubris. Just prudence. It's not precaution—it's strategy. [camera shakes] WORF: HULL BREACHES ON NINE DECKS DATA: Here's what happened: you told me to raise shields, and I didn't — Kyle Ferrana , @KyleTrainEmoji Tags: ai-misuse , coding-agents , ai , llms
```

```text
The pressure
URL: https://simonwillison.net/2026/May/26/the-pressure/#atom-everything
Published: 2026-05-26T23:48:45+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 30
Signal tags: security, database
The pressure Daniel Stenberg on the unprecedented level of pressure the curl team are facing right now thanks to the deluge of (credible) AI-assisted security issues being reported. The rate of incoming security reports is 4-5 times higher than it was in 2024 and double the speed of 2025 -- meaning that on average we now get more than one report per day . The quality is way higher than ever before. The reports are typically very detailed and long. [...] For the first time in my life, my wife voiced concerns about my work hours and my imbalanced work/life situation. I work more than I’ve done before, but the flood keeps coming. [...] This is a never-before seen or experienced pressure on the curl project and its security team members. An avalanche of high priority work that trumps all other things in the project that is primarily mental because we certainly could ignore them all if we wanted, but we feel a responsibility, we have a conscience and we are proud about our work. The good news is that curl is a very solid piece of software, so the vulnerabilities people are finding tend not to be of high severity: What is also a good trend: almost no one finds terrible vulnerabilities. All vulnerabilities found the last few years in curl have all been deemed severity LOW or MEDIUM. I'm not saying there won't be any more HIGH ever, but at least they are rare. The most recent severity
```

```text
markdown-svg-renderer
URL: https://simonwillison.net/2026/May/28/markdown-svg-renderer/#atom-everything
Published: 2026-05-28T19:45:14+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 24
Signal tags: (none)
Tool: markdown-svg-renderer A slightly customized Markdown rendering tool with special treatment for fenced code SVG blocks - it both renders the image and provides a tab for switching to the code view. You can paste in Markdown or give it a URL to a CORS-enabled Markdown file or Gist. Here's an example where it loads a Markdown file full of LLM pelican logs for Opus 4.8 . Tags: svg , tools , markdown , cors
```

```text
AI enthusiasts are in a race against time, AI skeptics are in a race against entropy
URL: https://simonwillison.net/2026/Jun/4/ai-enthusiasts-ai-skeptics/#atom-everything
Published: 2026-06-04T23:55:27+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 2
Signal tags: (none)
AI enthusiasts are in a race against time, AI skeptics are in a race against entropy Charity Majors neatly captures the dynamic between AI enthusiasts and AI skeptics, both of whom are trying to build great software, often in the same teams: The enthusiasts are not wrong . We are starting to see real, non-imaginary, discontinuous leaps in capabilities from teams that lean in hard to working with AI. And this does not feel like a normal technology cycle where you can wait for the dust to settle; teams that sit this out while competitors are hustling could be out of business before the dust settles. That’s a real, existential threat. The skeptics are also not wrong . When you ship code faster than engineers can read it, in domains where nobody has full context, you are making withdrawals from a trust account that took years to build. Reliability degrades, institutional knowledge evaporates. You end up with systems nobody understands, products burbling into incoherence, and on-call rotations that grind people up and spit them out. That is ALSO a real existential threat. Charity recommends treating this as both a leadership challenge and an engineering challenge. The key issue: There is no natural feedback loop connecting enthusiasts with skeptics. Designing feedback loops to help "mend the gap in shared reality" between the two groups is a fascinating organizational design problem
```

```text
Quoting Emanuel Maiberg, 404 Media
URL: https://simonwillison.net/2026/Jun/4/a-slightly-different-version/#atom-everything
Published: 2026-06-04T16:38:29+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 2
Signal tags: (none)
After this story was published Google's spokesperson reached out and asked us to publish a slightly different version of that statement. The new statement no longer stated that "it's critical that we maintain humans in the loop." — Emanuel Maiberg, 404 Media , Google Employees Internally Share Memes About How Its AI Sucks Tags: ai-ethics , journalism , ai , google
```

```text
Quoting Paul Graham
URL: https://simonwillison.net/2026/May/26/paul-graham/#atom-everything
Published: 2026-05-26T15:02:30+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 2
Signal tags: (none)
A lot of the emails I get from founders are now written in a hard-hitting journalistic style. I know they're written by AI, because no founder ever wrote this way before. And once you realize something is written by AI, it's hard not to ignore it. I have never knowingly finished reading an email signed by a human but written by AI. It feels like being lied to, and who would stand for that? [ ... ] It makes me think less of the author. It means they can't write well unaided (or feel they can't), and that they're trying to trick me. It's not impressive to use AI to write stuff for you; any teenager can do that. — Paul Graham Tags: writing , ai-misuse , paul-graham , generative-ai , ai , llms
```

```text
Quoting Corey Quinn
URL: https://simonwillison.net/2026/May/26/corey-quinn/#atom-everything
Published: 2026-05-26T02:28:54+00:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 2
Signal tags: (none)
I cannot believe I'm saying this, but getting the literal Pope to canonize your product's specific technical limitations as a spiritual treatise is the single greatest act of vendor lobbying I have ever seen. — Corey Quinn , on Anthropic co-founder Christopher Olah's influence on Magnifica Humanitas Tags: ai-ethics , corey-quinn , anthropic , ai
```

```text
How we contain Claude across products
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Published: 2026-05-30T21:36:24+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 138
Signal tags: agent, runtime, security, database
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows). There's a lot in here, including some interesting stories of risks they missed such as the api.anthropic.com/v1/files exfiltration vector covered here previously . This reminded me it's time I took another look at Anthropic's open source srt (Anthropic Sandbox Runtime) tool - it's mature enough now that I'm ready to give it a proper go. Tags: sandboxing , security , ai , generative-ai , llms , anthropic , claude , claude-code
```

```text
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs
URL: https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything
Published: 2026-06-03T12:01:27+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 116
Signal tags: agent, security, database
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding agents were about to become. Natalie Lung for Bloomberg: The rideshare giant is limiting all employees to $1,500 in monthly token spending per AI coding tool, an Uber spokesperson said in response to a Bloomberg News inquiry. That means spending on one tool doesn’t have a bearing on the budget for another. The limits, which have been instituted in recent months, only apply to agentic coding software such as Cursor or Anthropic PBC’s Claude Code. A $1,500 monthly limit per tool strikes me as a rational policy response to over-spending, and much more sensible than those tokenmaxxing leaderboards encouraging employees to compete for as much AI usage as possible. It's also interesting in that it hints at a real dollar value for what Uber is getting out of these tools. If we assume two actively used tools per engineer that's $3,000 * 12 = $36,000 cap per engineer per year. Levels.fyi lists the median yearly compensation package for Uber software engineers in the USA at $330,000. That means each employee's AI spending cap is ~11% of that median compensation package. I noted that my own token u
```

```text
The solution might be cancelling my AI subscription
URL: https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything
Published: 2026-05-31T16:31:32+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 68
Signal tags: agent
The solution might be cancelling my AI subscription I find this post by David Wilson very relatable. David lists 16+ projects he's spun up with AI tooling, and concludes: I didn't mean to build most of these things. Usually the Claude session started with something like " write a quick script for X ", and one hour later the result is not a quick script for X , nor in the usual case is my problem solved, whatever the original itch happened to be. On that last point, this technology is horrific for attention. It's a thermonuclear ADHD amplifier and I have seen the same effect in every single one of my adult friends. Folk running 3 screens simultaneously working on totally unrelated "projects" they have little hope of maintaining, and such little commitment to the outcome that the time is obviously wasted. This is a very real problem. I'm finding that coding agents can take me from a vague idea to a working solution, one with tests and documentation and that looks like a carefully considered project evolved over the course of many weeks... in less than an hour. Even if the code is rock solid, there's a limit to how many projects like that I can sensibly care for - and if they're instantly abandoned, what value was there from creating them in the first place? David doesn't think this is sustainable at all: I have no idea how to manage AI at present except by curtailing use, because
```

```text
Pasted File Editor
URL: https://simonwillison.net/2026/Jun/2/pasted-file-editor/#atom-everything
Published: 2026-06-02T04:13:36+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 62
Signal tags: codex, database
Tool: Pasted File Editor I really like how you can paste a large volume of text into claude.ai (or the Claude desktop/mobile apps) and it will detect it as a large paste and turn it into a file attachment instead. I decided to have Codex desktop build me a version of that as a prototype. You can also open files directly - including images which will be shown as thumbnails - or drag files onto the textarea. Tags: javascript , tools , ai-assisted-programming , claude , codex
```

```text
Microsoft's new MAI models
URL: https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything
Published: 2026-06-02T22:21:52+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 60
Signal tags: copilot, eval, github, release
Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to "select early partners") and MAI-Code-1-Flash (137B Parameters, 5B active, "purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling out to GitHub Copilot individual users in Visual Studio Code"). I've not been able to try either of them just yet. It's very interesting to see Microsoft releasing models with such low parameter counts, especially given how expensive larger models are to access right now. They claim MAI-Thinking-1 "is preferred to Sonnet 4.6 in our blind human side-by-side evaluations", which is impressive for a 35B model seeing as I frequently run models larger than that on my own laptop. (UPDATE: I got this entirely wrong, see note below.) Also of note : We trained [MAI-Thinking-1] from the ground up on enterprise grade, clean and commercially licensed data, without distillation from third-party models. And for MAI-Code-1-Flash as well: It is built end-to-end by Microsoft using clean and appropriately licensed data. I would very much like to learn more about this "appropriately licensed" data! Could these be the first generally useful code-specialist models that didn't train on an unlicensed dump of the web? ( Update : the answer is no, see note below.) Update : My initial published notes got the siz
```

```text
Running Python ASGI apps in the browser via Pyodide + a service worker
URL: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
Published: 2026-05-30T15:34:00+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 56
Signal tags: browser
Research: Running Python ASGI apps in the browser via Pyodide + a service worker Datasette Lite is my version of Datasette that runs entirely in the browser using Pyodide in WebAssembly. When I first built it four years ago I used Web Workers and code that intercepts navigation operations and fetches the generated HTML by running the Python app. This worked, but had the disadvantage that any JavaScript in tags would not be executed - breaking some Datasette functionality and a whole lot of Datasette plugins. This morning I set Claude Opus 4.8 the task (in Claude Code for web) of figuring out how to run Python ASGI apps in Pyodide using Service Workers instead, and it seems to work! Here's a basic ASGI FastCGI demo and here's a demo that runs Datasette 1.0a31 . I'm still getting my head around exactly how it works, but once I've done that I plan to upgrade Datasette Lite itself. Tags: javascript , python , datasette , asgi , service-workers , pyodide , datasette-lite , claude-code
```

```text
datasette-agent-micropython 0.1a0
URL: https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything
Published: 2026-06-02T19:28:36+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 54
Signal tags: agent, release
Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python , sandboxing , datasette , webassembly , datasette-agent
```

```text
micropython-wasm 0.1a1
URL: https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything
Published: 2026-06-02T19:20:47+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 54
Signal tags: agent, release
Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython . Tags: python , sandboxing , webassembly
```

```text
I Am Retiring from Tech to Live Offline
URL: https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything
Published: 2026-05-30T19:39:08+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 48
Signal tags: agent, inference
I Am Retiring from Tech to Live Offline I've seen a lot of posts on forums from people threatening to quit their careers over AI. This is not one of those: Chad Whitacre is taking concrete steps, starting with this typewritten, scanned letter I'm retiring from tech. Well, "retiring" is euphemistic. I'm stepping away from tech, and that includes Open Source. [...] AI was the last straw. Have you heard of that island off India where the indigenous population kills any outsiders fool-hardy enough to land? They are doing the rest of us a favor by preserving a way of life we may need again someday, or at the very least should not want to see completely extinguished. A reminder. Never forget your roots. Here in Pennsylvania we have the Amish performing a similar function. Significantly less hostile, though still set apart, they bear witness to what was normal for all of us a couple short centuries ago: horse and buggy, wood stoves and lanterns. My intent is to be AI Amish, which means Internet Amish. Not 1780, but 1980. Neo-Amish. I'm fine driving a car and flipping a lightswitch, by which I mean that they don't make me into something I hate, which AI and [struck through: social media] [handwritten above: doomscrolling] do. I'll admit that at first I wasn't entirely sure if this was serious. Then I found this earlier post by Chad from Feb 19 2026, Spitting Out the Agentic Kool-Aid :
```

```text
datasette 1.0a31
URL: https://simonwillison.net/2026/May/29/datasette/#atom-everything
Published: 2026-05-29T03:32:02+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 40
Signal tags: database, release
Release: datasette 1.0a31 Another significant alpha release, with two new headline features. Datasette now offers users with the necessary permissions the ability to both execute write queries against their database and to save stored queries (renamed from "canned queries") both privately and for use by other members of their Datasette instance. There's more detail in SQL write queries and stored queries in Datasette 1.0a31 on the Datasette blog, which now has three posts introducing new features since the blog launched two weeks ago. Here's an animated demo from the blog post showing how the new execute query interface lets people get started with templated insert/update/delete queries from tables they have permission to edit: Tags: projects , sql , sqlite , datasette , annotated-release-notes
```

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
Final URL: `https://huggingface.co/blog/feed.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Inside VAKRA: Reasoning, Tool Use, and Failure Modes of Agents
URL: https://huggingface.co/blog/ibm-research/vakra-benchmark-analysis
Published: Wed, 15 Apr 2026 12:07:25 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 57
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
DeepSeek-V4: a million-token context that agents can actually use
URL: https://huggingface.co/blog/deepseekv4
Published: Fri, 24 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 47
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Meet HoloTab by HCompany. Your AI browser companion.
URL: https://huggingface.co/blog/Hcompany/holotab
Published: Wed, 15 Apr 2026 09:25:20 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 37
Signal tags: browser
(excerpt unavailable from feed item)
```

```text
Designing the hf CLI as an agent-optimized way to work with the Hub
URL: https://huggingface.co/blog/hf-cli-for-agents
Published: Thu, 04 Jun 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Introducing NVIDIA Nemotron 3 Nano Omni: Long-Context Multimodal Intelligence for Documents, Audio and Video Agents
URL: https://huggingface.co/blog/nvidia/nemotron-3-nano-omni-multimodal-intelligence
Published: Tue, 28 Apr 2026 15:58:57 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Ecom-RLVE: Adaptive Verifiable Environments for E-Commerce Conversational Agents
URL: https://huggingface.co/blog/ecom-rlve
Published: Thu, 16 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
DeepInfra on Hugging Face Inference Providers 🔥
URL: https://huggingface.co/blog/inference-providers-deepinfra
Published: Wed, 29 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 25
Signal tags: inference
(excerpt unavailable from feed item)
```

```text
Waypoint-1.5: Higher-Fidelity Interactive Worlds for Everyday GPUs
URL: https://huggingface.co/blog/waypoint-1-5
Published: Thu, 09 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 25
Signal tags: inference
(excerpt unavailable from feed item)
```

```text
AI and the Future of Cybersecurity: Why Openness Matters
URL: https://huggingface.co/blog/cybersecurity-openness
Published: Tue, 21 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: security
(excerpt unavailable from feed item)
```

```text
Nemotron 3.5 Content Safety: Customizable Multimodal Safety for Global Enterprise AI
URL: https://huggingface.co/blog/nvidia/nemotron-3-5-content-safety
Published: Thu, 04 Jun 2026 18:57:45 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
How to build scalable web apps with OpenAI's Privacy Filter
URL: https://huggingface.co/blog/openai-privacy-filter-web-apps
Published: Mon, 27 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
How to Use Transformers.js in a Chrome Extension
URL: https://huggingface.co/blog/transformersjs-chrome-extension
Published: Thu, 23 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
QIMMA قِمّة ⛰: A Quality-First Arabic LLM Leaderboard
URL: https://huggingface.co/blog/tiiuae/qimma-arabic-leaderboard
Published: Tue, 21 Apr 2026 10:09:58 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
The PR you would have opened yourself
URL: https://huggingface.co/blog/transformers-to-mlx
Published: Thu, 16 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Training and Finetuning Multimodal Embedding & Reranker Models with Sentence Transformers
URL: https://huggingface.co/blog/train-multimodal-sentence-transformers
Published: Thu, 16 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Multimodal Embedding & Reranker Models with Sentence Transformers
URL: https://huggingface.co/blog/multimodal-sentence-transformers
Published: Thu, 09 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Safetensors is Joining the PyTorch Foundation
URL: https://huggingface.co/blog/safetensors-joins-pytorch-foundation
Published: Wed, 08 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Welcome Gemma 4: Frontier multimodal intelligence on device
URL: https://huggingface.co/blog/gemma4
Published: Thu, 02 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Falcon Perception
URL: https://huggingface.co/blog/tiiuae/falcon-perception
Published: Wed, 01 Apr 2026 07:13:20 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

```text
Any Custom Frontend with Gradio's Backend
URL: https://huggingface.co/blog/introducing-gradio-server
Published: Wed, 01 Apr 2026 00:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: (none)
(excerpt unavailable from feed item)
```

### Anthropic News
Source URL: `https://www.anthropic.com/news`
Final URL: `https://www.anthropic.com/news`
Status/content: `200` / `text/html; charset=utf-8`

### GitHub Trending Overall
Source URL: `https://github.com/trending?since=daily`
Final URL: `https://github.com/trending?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

### GitHub Trending Python
Source URL: `https://github.com/trending/python?since=daily`
Final URL: `https://github.com/trending/python?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

### GitHub Trending TypeScript
Source URL: `https://github.com/trending/typescript?since=daily`
Final URL: `https://github.com/trending/typescript?since=daily`
Status/content: `200` / `text/html; charset=utf-8`
