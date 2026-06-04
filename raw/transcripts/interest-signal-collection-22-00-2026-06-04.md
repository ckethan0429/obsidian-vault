---
title: Interest Signal Collection — 2026-06-04 22:00 KST
created: 2026-06-04
updated: 2026-06-04
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release notes, launch posts, and GitHub Trending
route_hint: append_existing
route_confidence: 0.74
route_reason: "Compared against same-day 11:00 new-target append plus recent 22:00/11:00 new-target caches before judging novelty.; Collected only the 22:00 new-target surfaces and intentionally excluded social-signal surfaces.; Fresh post-11:00 rows from OpenAI Endava and LangChain model-neutrality/Harmonic Scout sharpen existing managed-agent delivery and harness-control lanes.; GitHub Trending repo rotation was kept mostly raw_only/manual_review; no promote_to_wiki threshold was crossed."
routing:
  route: append_existing
  confidence: 0.74
  reasons:
    - "Compared against same-day 11:00 new-target append plus recent 22:00/11:00 new-target caches before judging novelty."
    - "Collected only official/blog/RSS/GitHub-Trending new-target surfaces; social-signal surfaces were intentionally excluded."
    - "Fresh post-11:00 rows from OpenAI Endava and LangChain model-neutrality/Harmonic Scout sharpen existing managed-agent delivery and harness-control lanes."
    - "GitHub Trending repo rotation was kept mostly raw_only/manual_review; no promote_to_wiki threshold was crossed."
  signal_tags:
    - new-target
    - official-feeds
    - rss
    - github-trending
    - managed-agents
    - append_existing
---
# Raw Transcript — Interest Signal Collection 22:00 KST 2026-06-04
Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-06-04
Captured at: 2026-06-04T22:03:19.736459+09:00
## Live session notes
- This was the 22:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against same-day `raw/transcripts/interest-signal-collection-11-00-2026-06-04.md`, recent 22:00 / 11:00 new-target raw transcripts and cache files, and current-day log entries before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, official HTML/blog index pages, and GitHub Trending HTML; disposable JSON cache: `/home/ck/wiki/.cache/new-target-22-00-2026-06-04.json`.
- URL evidence rule was applied: every captured row below includes the canonical item URL or the available feed/surface URL plus an explicit note if exact item URL was unavailable.

## Strongest routing read
- Overall route: `append_existing`.
- Route driver: after the 11:00 official MCP / AgentCore / AI Edge append, the fresh late item was a managed-agent delivery/harness-control cluster rather than a new concept: OpenAI Endava agent-based software delivery, LangChain model-neutrality / harness lock-in, Harmonic Scout deep agents with LangSmith, and GitHub Copilot SDK.
- Durable action: append existing `managed-agents-practical-summary` plus Honcho/log audit; leave `index.md` unchanged because no new page is created.

## 1) Strongest rows selected for triage

### OpenAI News RSS
```text
How Endava is redesigning software delivery around AI agents
URL: https://openai.com/index/endava-frontiers
Published: Thu, 04 Jun 2026 12:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 138
Signal tags: agent, codex, workflow
Learn how Endava is using AI agents, ChatGPT Enterprise, and Codex to accelerate software delivery, automate workflows, and build an AI-native culture across the enterprise.
```

### LangChain Blog (site)
```text
Model Neutrality: Why Avoiding AI Vendor Lock-In Matters
URL: https://www.langchain.com/blog/model-neutrality
Published: Thu, 04 Jun 2026 03:06:46 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: agent
Explore why model neutrality is critical for AI agents. Learn how labs lock you in at the harness layer—and why a neutral, open-source framework is the answer.
```

### LangChain Blog (site)
```text
How Harmonic rebuilt Scout on Deep Agents and 4x’d retention with LangSmith
URL: https://www.langchain.com/blog/how-harmonic-rebuilt-scout-on-deep-agents-and-4xd-retention-with-langsmith
Published: Wed, 03 Jun 2026 16:00:01 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, langsmith
(excerpt unavailable from feed item)
```

### GitHub Trending Overall
```text
github/copilot-sdk
URL: https://github.com/github/copilot-sdk
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: agent, copilot, github
Star github / copilot-sdk Multi-platform SDK for integrating GitHub Copilot Agent into apps and services; Java; 25 stars today
```

### GitHub Trending TypeScript
```text
langgenius/dify
URL: https://github.com/langgenius/dify
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 97
Signal tags: agent, agentic, workflow, github
Star langgenius / dify Production-ready platform for agentic workflow development.; TypeScript; 164 stars today
```

### GitHub Trending TypeScript
```text
NVIDIA/NemoClaw
URL: https://github.com/NVIDIA/NemoClaw
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 97
Signal tags: agent, inference, github
Star NVIDIA / NemoClaw Run agents like Hermes and OpenClaw more securely inside NVIDIA OpenShell with managed inference; TypeScript; 51 stars today
```

### Google Cloud Blog
```text
AI in SRE: Where and how Google is deploying agentic AI to improve operations
URL: https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/
Published: Thu, 28 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: agent, agentic
Since its inception over 20 years ago, Google has used Site Reliability Engineering (SRE) to keep services like Search, Gmail, Maps, YouTube and Google Cloud reliable and highly available, adhering to the principles and practices of the reliability-first mindset. Recently though, the emergence of AI has driven multiple step-changes in system complexity. Interactions between components are now more complicated due to a variety of factors: With microservice architectures, systems are distributed across wider geographical locations and data centers that have greater hardware diversity. Enterprise cloud products offer an extensive array of capabilities with an incredibly complex set of products. Google services now cover more unique business and regulatory requirements, making the overall topology and taxonomy much more complex and difficult to understand, a challenge amplified by the constant stream of system changes resulting from continuous deployment pipelines. AI code generation capabilities have enabled software developers to deliver orders of magnitude more code, resulting in more opportunities to introduce reliability issues. While AI is in some ways making the SRE team’s work
```

### GitHub Trending Python
```text
datawhalechina/hello-agents
URL: https://github.com/datawhalechina/hello-agents
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 73
Signal tags: agent, github
Star datawhalechina / hello-agents 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程; Python; 479 stars today
```

### GitHub Trending Overall
```text
mvanhorn/last30days-skill
URL: https://github.com/mvanhorn/last30days-skill
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 63
Signal tags: agent, skill, github
Star mvanhorn / last30days-skill AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary; Python; 173 stars today
```

### GitHub Trending TypeScript
```text
fathah/hermes-desktop
URL: https://github.com/fathah/hermes-desktop
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 45
Signal tags: agent, github
Star fathah / hermes-desktop Desktop Companion for Hermes Agent; TypeScript; 417 stars today
```

### Google Cloud Blog
```text
Nano Banana 2 and Nano Banana Pro are generally available, and already powering creative workflows
URL: https://cloud.google.com/blog/products/ai-machine-learning/nano-banana-2-and-nano-banana-pro-are-generally-available/
Published: Thu, 28 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 125
Signal tags: agent, agentic, workflow, security
Organizations are unlocking entirely new ways to use image generation and editing across their industries. To drive next-generation experiences, businesses are embedding AI directly into creative, agentic workflows. But next-gen workflows require enterprise-grade AI you can trust. What’s new: To help customers continue their creative journey securely, we are announcing Nano Banana 2 (Gemini 3.1 Flash Image) and Nano Banana Pro (Gemini 3 Pro Image) are generally available (GA) today via Gemini Enterprise Agent Platform . Backed by enterprise-grade infrastructure and security, these models empower you to integrate high-quality image generation and editing capabilities directly into your applications and workflows. Alongside this milestone, we are introducing a powerful new capability in preview that significantly expands how models process multimodal inputs: Nano Banana 2 now supports video files as an input prompt. In addition to text, pdf or image input references, the model now utilizes deep video understanding to analyze the visual context, specific subjects, and actions within video footage to generate context-aware images, including thumbnails, rich infographics, and more. Try
```

### Kubernetes Blog
```text
Kubernetes v1.36: User Namespaces in Kubernetes are finally GA
URL: https://kubernetes.io/blog/2026/04/23/kubernetes-v1-36-userns-ga/
Published: Thu, 23 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 96
Signal tags: runtime, identity, security, kubernetes, release, local
After several years of development, User Namespaces support in Kubernetes reached General Availability (GA) with the v1.36 release. This is a Linux-only feature. For those of us working on low level container runtimes and rootless technologies, this has been a long awaited milestone. We finally reached the point where "rootless" security isolation can be used for Kubernetes workloads. This feature also enables a critical pattern: running workloads with privileges and still being confined in the user namespace. When hostUsers: false is set, capabilities like CAP_NET_ADMIN become namespaced , meaning they grant administrative power over container local resources without affecting the host. This effectively enables new use cases that were not possible before without running a fully privileged container. The Problem with UID 0 A process running as root inside a container is also seen from the kernel as root on the host. If an attacker manages to break out of the container, whether through a kernel vulnerability or a misconfigured mount, they are root on the host. While there are many security measures in place for running containers, these measures don't change the underlying identity
```

### Google Cloud Blog
```text
Cloud CISO Perspectives: How to build an AI-ready security program for the public sector
URL: https://cloud.google.com/blog/products/identity-security/cloud-ciso-perspectives-how-to-build-an-ai-ready-security-program-for-the-public-sector/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 55
Signal tags: identity, security, database
Welcome to the second Cloud CISO Perspectives for May 2026. Today, Usman Chaudhary, Field CISO, Google Public Sector, offers a guide for CISOs protecting government agencies and critical infrastructure on how to get started — and get the most out of — defending with AI. As with all Cloud CISO Perspectives, the contents of this newsletter are posted to the Google Cloud blog . If you’re reading this on the website and you’d like to receive the email version, you can subscribe here . aside_block ), ('btn_text', 'Visit the hub'), ('href', 'https://cloud.google.com/solutions/security/board-of-directors?utm_source=cgc-site&utm_medium=et&utm_campaign=FY26-Q2-GLOBAL-GCP39634-email-dl-dgcsm-CISOP-NL-177159&utm_content=-&utm_term=-'), ('image', )])]> How to build an AI-ready security program for the public sector By Usman Chaudhary, Field CISO, Google Public Sector Usman Chaudhary, Field CISO, Google Public Sector Deciphering actionable signals from deafening noise can be hard for CISOs, even with AI — and especially for those guiding government agencies, critical manufacturing plants, or in a foundational industry. From industrial control systems to decades-old municipal databases, you’re s
```

### Kubernetes Blog
```text
Kubernetes v1.36: Fine-Grained Kubelet API Authorization Graduates to GA
URL: https://kubernetes.io/blog/2026/04/24/kubernetes-v1-36-fine-grained-kubelet-authorization-ga/
Published: Fri, 24 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 42
Signal tags: observability, kubernetes
On behalf of Kubernetes SIG Auth and SIG Node, we are pleased to announce the graduation of fine-grained kubelet API authorization to General Availability (GA) in Kubernetes v1.36! The KubeletFineGrainedAuthz feature gate was introduced as an opt-in alpha feature in Kubernetes v1.32, then graduated to beta (enabled by default) in v1.33. Now, the feature is generally available and the feature gate is locked to enabled. This feature enables more precise, least-privilege access control over the kubelet 's HTTPS API, replacing the need to grant the overly broad nodes/proxy permission for common monitoring and observability use cases. Motivation: the nodes/proxy problem The kubelet exposes an HTTPS endpoint with several APIs that give access to data of varying sensitivity, including pod listings, node metrics, container logs, and, critically, the ability to execute commands inside running containers. Prior to this feature, kubelet authorization used a coarse-grained model. When webhook authorization was enabled, almost all kubelet API paths were mapped to a single nodes/proxy subresource. This meant that any workload needing to read metrics or health status from the kubelet required nod
```

### GitHub Trending Python
```text
jundot/omlx
URL: https://github.com/jundot/omlx
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 41
Signal tags: inference, github
Star jundot / omlx LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar; Python; 117 stars today
```

### GitHub Trending Python
```text
unilabsim/UniLab
URL: https://github.com/unilabsim/UniLab
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 39
Signal tags: gpu, github
Star unilabsim / UniLab UniLab: A Heterogeneous Architecture for Robot RL Beyond GPU-Dominant Paradigms; Python; 85 stars today
```

## 2) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
Final URL: `https://openai.com/news/rss.xml`
Status/content: `200` / `text/xml; charset=utf-8`

```text
How Endava is redesigning software delivery around AI agents
URL: https://openai.com/index/endava-frontiers
Published: Thu, 04 Jun 2026 12:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 138
Signal tags: agent, codex, workflow
Learn how Endava is using AI agents, ChatGPT Enterprise, and Codex to accelerate software delivery, automate workflows, and build an AI-native culture across the enterprise.
```

```text
OpenAI frontier models and Codex are now available on AWS
URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws
Published: Mon, 01 Jun 2026 10:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 114
Signal tags: codex, workflow, eval
OpenAI frontier models and Codex are now generally available on AWS, giving enterprises a new path to build with OpenAI through the AWS environments, controls, and procurement workflows they already use. Customers can get started with OpenAI on AWS and move faster from evaluation to production.
```

```text
How Endava builds an agentic organization with Codex
URL: https://openai.com/index/endava
Published: Thu, 28 May 2026 12:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 114
Signal tags: agent, agentic, codex, eks
Learn how Endava uses Codex to build an agentic organization, accelerating software delivery and reducing requirements analysis from weeks to hours.
```

```text
How Wasmer used Codex to build a Node.js runtime for the edge
URL: https://openai.com/index/wasmer
Published: Wed, 03 Jun 2026 12:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 90
Signal tags: codex, runtime, eks, edge
See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.
```

```text
Codex is becoming a productivity tool for everyone
URL: https://openai.com/index/codex-for-knowledge-work
Published: Tue, 02 Jun 2026 02:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 60
Signal tags: codex, workflow, edge
The Next Era of Knowledge Work report explores how Codex is transforming productivity through AI-powered research, data analysis, workflow automation, and content creation.
```

```text
Codex for every role, tool, and workflow
URL: https://openai.com/index/codex-for-every-role-tool-workflow
Published: Tue, 02 Jun 2026 09:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 52
Signal tags: codex, workflow
Discover new Codex plugins, sites, and annotations that help analysts, marketers, designers, investors, and other teams get more done with AI.
```

```text
A blueprint for democratic governance of frontier AI
URL: https://openai.com/index/frontier-safety-blueprint
Published: Wed, 03 Jun 2026 10:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: governance, security
OpenAI outlines a blueprint for U.S. governance of frontier AI, proposing a federal framework for safety, resilience, and national security.
```

```text
A shared playbook for trustworthy third party evaluations
URL: https://openai.com/index/trustworthy-third-party-evaluations-foundations
Published: Fri, 29 May 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: eval
OpenAI shares guidance on third-party AI evaluations, covering how to assess model capabilities, safeguards, and validity for frontier systems.
```

```text
OpenAI’s Frontier Governance Framework
URL: https://openai.com/index/openai-frontier-governance-framework
Published: Thu, 28 May 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 38
Signal tags: governance, security
Explore OpenAI’s Frontier Governance Framework and how our AI safety, security, and risk practices align with emerging EU and California regulations.
```

```text
MUFG aims to become AI-native with OpenAI
URL: https://openai.com/index/mufg
Published: Thu, 28 May 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 36
Signal tags: workflow
MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.
```

### AWS What's New
Source URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Final URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
Amazon SageMaker AI launches multi-turn reinforcement learning for AI agent model customization
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/multi-turn-reinforcement-learning-on-sagemaker-ai/
Published: Wed, 03 Jun 2026 15:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 259
Signal tags: agent, agentic, agentcore, runtime, eks, bedrock, sagemaker, serverless, cost
Amazon SageMaker AI now offers multi-turn reinforcement learning (RL), a new serverless model customization technique for fine-tuning models on multi-step, agentic tasks. SageMaker AI model customization lets you adapt foundation models using techniques such as supervised fine-tuning, reinforcement learning from verifiable rewards (RLVR), and reinforcement learning from AI feedback (RLAIF), without the undifferentiated heavy lifting of building and operating your own training infrastructure. Multi-turn RL extends this by training models against your own agent environment and rewarding the full sequence of decisions an agent makes across a task, helping you specialize smaller, lower-cost models to match or exceed the task accuracy of larger general-purpose models on your target workload. Training models that power agents to reliably complete multi-step tasks is complex and time-consuming, often requiring custom infrastructure that takes weeks to build. SageMaker's Multi-turn RL offering handles this for you. You can connect your agent running on Amazon Bedrock AgentCore Runtime for fully managed hosting, or on Amazon EKS, Amazon EC2, AWS Fargate, or any infrastructure using the fram
```

```text
AWS Step Functions adds AgentCore-powered agentic reasoning step
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/
Published: Wed, 03 Jun 2026 20:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 223
Signal tags: agent, agentic, agentcore, workflow, tpu, bedrock, token
AWS Step Functions now enables you to add AI agent reasoning steps to your workflow through an optimized integration with the managed harness (currently in preview) in Amazon Bedrock AgentCore. AWS Step Functions is a visual workflow service that orchestrates AWS services with built-in error handling, parallel execution, and human approval steps. The AgentCore harness lets you declare an agent through configuration where you specify the model, tools, and behavior. AgentCore provides the managed environment that runs the agent loop end-to-end. With this integration, you can automate reasoning tasks in your workflow such as classifying a document or extracting elements from an unstructured form. You can run multiple agents in parallel or in sequence at different decision points in a single workflow and add human approval before critical actions. The workflow execution history shows agent input, output, token usage, and duration with links to agent turn details in Amazon CloudWatch, so you can trace and audit every agent decision. You can reuse an existing harness or create a new one directly from the Workflow Studio, the Step Functions visual builder. With per-invocation overrides su
```

```text
AWS Config now supports 9 new resource types
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-config-new-resource-types
Published: Wed, 03 Jun 2026 15:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 223
Signal tags: agent, agentcore, runtime, gateway, eval, bedrock, sagemaker, rag
AWS Config now supports 9 additional AWS resource types across key services including Amazon Bedrock, Amazon Bedrock AgentCore, and Amazon SageMaker. This expansion provides greater coverage over your AWS environment, enabling you to more effectively discover, assess, audit, and remediate an even broader range of resources. With this launch, if you have enabled recording for all resource types, then AWS Config will automatically track these new additions. The newly supported resource types are also available in Config rules and Config aggregators. You can now use AWS Config to monitor the following newly supported resource types in all AWS Regions where the resources are available: Resource Types: AWS::Bedrock::FlowAlias AWS::BedrockAgentCore::Evaluator AWS::BedrockAgentCore::GatewayTarget AWS::BedrockAgentCore::OnlineEvaluationConfig AWS::BedrockAgentCore::RuntimeEndpoint AWS::SageMaker::Cluster AWS::SageMaker::Endpoint AWS::SageMaker::ModelPackageGroup AWS::SageMaker::Pipeline
```

```text
OpenAI GPT-5.4 generally available on Amazon Bedrock in AWS GovCloud (US-West)
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/GPT54-available-in-aws-govcloud-us-west/
Published: Wed, 03 Jun 2026 19:58:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 143
Signal tags: agent, agentic, security, inference, bedrock
Amazon Bedrock now supports GPT‑5.4 from OpenAI in AWS GovCloud (US-West) — giving government and regulated industry customers access to OpenAI's most capable frontier model for professional work, backed by the enterprise-grade security and goverment compliance scope of AWS GovCloud (US). GPT‑5.4 supports native computer-use capabilities, and deep reasoning across coding, documents, and multi-step agentic tasks — all running on Bedrock's high-performance inference engine with isolated queues and durable state for fault-tolerant workloads. Your data stays in-partition and is never used to train models. For Regional availability of GPT-5.4 see the AWS Regions page . Read the launch blog to learn more, for documentation and a step-by-step walkthrough, see the Amazon Bedrock docs and the getting started blog .
```

```text
Amazon ElastiCache for Valkey now supports durability
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/durability-amazon-elasticache
Published: Tue, 02 Jun 2026 15:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 143
Signal tags: agent, workflow, rag, database, memory, token, cost, edge
Today, AWS announces durability support for Amazon ElastiCache. Durability enables you to use ElastiCache for workloads that require microsecond read latency but cannot tolerate data loss. With durability support, ElastiCache now stores data durably across multiple Availability Zones (AZs) using a Multi-AZ transactional log to enable fast failover, database recovery, and node restarts to prevent data loss in the unlikely event of a failure. You can choose between two durability options: synchronous and asynchronous writes. Synchronous writes persist data across at least two AZs before responding to the client, designed for zero data loss at single-digit millisecond write latency. Asynchronous writes persist data after responding to the client, maintaining microsecond write latency at no additional cost. However, up to 10 seconds of uncommitted data could be lost in the rare event of a failure. Both options maintain microsecond read latency. You can now use ElastiCache for a broader set of use cases beyond caching where data loss is unacceptable such as AI agent long-term memory, AI agent workflow state, knowledge bases for RAG applications, payment tokenization, and real-time inven
```

```text
Amazon SageMaker Unified Studio now supports notebook scheduling
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-unified-studio/
Published: Wed, 03 Jun 2026 20:13:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 137
Signal tags: agent, workflow, orchestration, tpu, sagemaker
Amazon SageMaker Unified Studio now enables you to schedule, parameterize, and orchestrate notebook runs directly from the notebook interface without managing external orchestration infrastructure. This makes it easier for customers to take notebooks from experimentation to production, automating recurring workloads such as daily reports, data quality checks, and model retraining. You can trigger on-demand background runs on dedicated compute without interrupting interactive sessions and create scheduled or recurring runs. With notebook parameterization, you can reuse a single notebook across different inputs, for example, generating shipping performance reports for multiple carriers, by defining parameters and overriding their values per schedule or on-demand run. You can also orchestrate multi-notebook workflows using the Notebook Operator in the Workflows tool, chaining notebooks so that outputs from one run feed as inputs to the next. When a scheduled or background run fails, AI-assisted troubleshooting using SageMaker Data Agent helps you identify the root cause and suggests fixes directly in the notebook, reducing time to resolution. You can also use the Data Agent to create
```

```text
Amazon SageMaker Studio now sets up in seconds with model customization ready from the start
URL: https://aws.amazon.com/about-aws/whats-new/2026/01/quick-setup-model-customization-sagemaker-studio/
Published: Tue, 02 Jun 2026 16:23:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 117
Signal tags: eval, policy, bedrock, sagemaker, serverless
Amazon SageMaker Studio quick setup now completes in under twenty seconds, reduced from over two minutes. Whether you are building ML pipelines, exploring data, developing with notebooks, or fine-tuning foundation models, you can go from sign-in to a fully configured Studio environment almost instantly. As part of this streamlined setup, newly created Studio environments now come with serverless model customization permissions automatically configured. A new managed policy, AmazonSageMakerModelCustomizationCoreAccess, is created and attached for you, providing permissions for serverless model customization jobs including fine-tuning with custom reward functions for reinforcement learning, model evaluation, and deployment to SageMaker or Bedrock endpoints. This eliminates the need to manually create and configure IAM roles and policies before you can start experimenting. For existing Studio environments, actionable messages with direct links to documentation guide you through adding these permissions. This feature is available in all AWS Commercial Regions where Amazon SageMaker Studio is supported. To get started, create a new Studio environment using quick setup in the SageMaker A
```

```text
Amazon SageMaker Data Agent now supports conversation history
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-data-agent/
Published: Wed, 03 Jun 2026 20:26:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 107
Signal tags: agent, workflow, sagemaker, rag
Amazon SageMaker Data Agent, available in SageMaker Unified Studio now supports conversation history, enabling data practitioners to maintain continuity across analytical sessions. Data analysts and data scientists can now seamlessly reference previous agent-generated code, resume multi-step analyses, and review past troubleshooting interactions within their notebooks and Query Editor workflows. With conversation history, you can pick up exactly where you left off by accessing a scrollable list of past conversations through the clock icon in the chat panel header. Each conversation includes auto-generated titles and timestamps for easy identification. Whether you're resuming complex multi-step analyses, reusing agent-generated code, or continuing troubleshooting from earlier notebook runs, conversation history keeps the context preserved. Data teams save time, eliminate rework, and move faster across concurrent projects, staying focused on insights rather than rebuilding context. Conversation history is available in all AWS Regions where Amazon SageMaker Data Agent is currently available. To learn more about Amazon SageMaker Data Agent and how to leverage conversation history in yo
```

```text
AWS Config now supports internal service linked rules
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-supports-internal-service-linked-rules
Published: Tue, 02 Jun 2026 18:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 87
Signal tags: eval, governance, security
AWS Config now supports internal service linked rules, enabling AWS services to evaluate AWS resource configurations using AWS Config managed rules. Internal service linked rules extend the existing service linked recorder capability by allowing AWS services such as AWS Security Hub CSPM to deploy and manage rule evaluations for service specific functionality. With internal service linked rules, AWS services can use AWS Config managed rules to provide integrated security and compliance capabilities. Evaluation results are delivered directly to the AWS service that deployed the rule at no charge from AWS Config to customers. Internal service linked rules operate independently of existing customer managed AWS Config recorders and rules. This allows customers to continue using AWS Config for inventory, governance, compliance, and auditing use cases while AWS services independently manage service specific evaluations. AWS Security Hub CSPM internal service-linked rules are now available in all commercial, GovCloud, and China Regions. To learn more, see the AWS Config documentation .
```

```text
Amazon EKS and Amazon EKS Distro now supports Kubernetes version 1.36
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-distro-kubernetes-version-1-36
Published: Tue, 02 Jun 2026 21:48:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 67
Signal tags: kubernetes, eks, memory, release
Kubernetes version 1.36 introduced several new features and bug fixes, and AWS is excited to announce that you can now use Amazon Elastic Kubernetes Service (EKS) and Amazon EKS Distro to run Kubernetes version 1.36. Starting today, you can create new EKS clusters using version 1.36 and upgrade existing clusters to version 1.36 using the EKS console, the eksctl command line interface, or through an infrastructure-as-code tool. Kubernetes version 1.36 introduces several key improvements, promoting User Namespaces to general availability for mapping container root to an unprivileged host user so that a breakout grants no node-level privileges, alongside Mutating Admission Policies for CEL-based resource mutations in the API server without webhook infrastructure. The release also brings In-Place Pod-Level Resources Vertical Scaling allowing Pods to resize their shared CPU and memory budget without restart, and Resource Health Status reporting device health in Pod status to help identify hardware-caused crash loops. To learn more about the changes in Kubernetes version 1.36, see our documentation and the Kubernetes project release notes. EKS now supports Kubernetes version 1.36 in all
```

### AWS Machine Learning Blog
Source URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Final URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
Extending MCP support for Amazon Bedrock AgentCore Gateway
URL: https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/
Published: Mon, 01 Jun 2026 18:35:03 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 243
Signal tags: agent, agentcore, mcp, model-context-protocol, gateway, observability, security, bedrock
While deploying Model Context Protocol (MCP) servers in production, enterprises need fine-grained access control across servers, observability into which teams use which tools, security guarantees against data exfiltration, and centralized credential management, all at scale. Amazon Bedrock AgentCore Gateway sits between MCP servers and the clients that consume them, centralizing credential management, observability, and secure […]
```

```text
AgentOps: Operationalize agentic AI at scale with Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/agentops-operationalize-agentic-ai-at-scale-with-amazon-bedrock-agentcore/
Published: Mon, 01 Jun 2026 16:12:18 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 215
Signal tags: agent, agentic, agentcore, workflow, bedrock, cost
When you build agentic AI solutions, you face unique operational challenges. Agents make unpredictable decisions, costs spiral unexpectedly, and debugging non-deterministic failures seems impossible. Agentic AI applications don't just execute predetermined workflows. They reason, adapt, and make autonomous decisions, and DevOps practices need to be adapted. That's where AgentOps comes in, the operational discipline for deploying, managing, and continuously improving AI agents in production.
```

```text
Building a secure auth code flow setup using AgentCore Gateway with MCP clients
URL: https://aws.amazon.com/blogs/machine-learning/building-a-secure-auth-code-flow-setup-using-agentcore-gateway-with-mcp-clients/
Published: Tue, 02 Jun 2026 03:23:35 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 187
Signal tags: agent, agentcore, mcp, gateway, identity, bedrock, token
This post demonstrates how to implement Open Authorization (OAuth) Code flow as an inbound authorization mechanism for MCP servers hosted on Amazon Bedrock AgentCore Gateway. By the end of this guide, you will have a production-ready setup where each AI assistant request is authenticated with a valid user identity token issued from your organization’s identity provider.
```

```text
Reference your own AWS Secrets Manager secrets in Amazon Bedrock AgentCore Identity
URL: https://aws.amazon.com/blogs/machine-learning/reference-your-own-aws-secrets-manager-secrets-in-amazon-bedrock-agentcore-identity/
Published: Mon, 01 Jun 2026 22:16:28 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 161
Signal tags: agent, agentcore, identity, governance, secret, secrets, bedrock
Today, we’re excited to announce the ability to reference a secret in AWS Secrets Manager for AgentCore Identity, so you can reference your own preconfigured secret from Secrets Manager and retain full control over how it is managed. With this ability, you can extend your organization’s existing secrets governance processes to AgentCore. You can provide an existing, preconfigured AWS Secrets Manager secret to use with your credential provider resources. You retain full control over its encryption configuration, rotation, replication, tags, and resource policies, just as you would manage other secrets in Secrets Manager. You can also choose a secret from another AWS account within the same AWS Region, though cross-Region secret sharing isn’t supported. This also supports secrets brought in through AWS Secrets Manager external connectors, enabling integration with third-party secret managers.
```

```text
Secure AI agents with Policy and Lambda interceptors in Amazon Bedrock AgentCore gateway
URL: https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-policy-and-lambda-interceptors-in-amazon-bedrock-agentcore-gateway/
Published: Mon, 01 Jun 2026 17:54:22 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 157
Signal tags: agent, agentcore, gateway, policy, bedrock
In this post, we use a lakehouse data agent to demonstrate how you can use Policy for deterministic access control and Lambda interceptors for dynamic validation. We then show how to combine Lambda interceptors and Policy to implement a geography-based access control which requires both dynamic validation and deterministic access control.
```

```text
OpenAI models and Codex on Amazon Bedrock are now generally available
URL: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
Published: Mon, 01 Jun 2026 21:31:12 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 143
Signal tags: agent, codex, inference, bedrock
GPT-5.5, GPT-5.4, and Codex are now generally available on Amazon Bedrock. Deploy them in production applications and agents today, on Bedrock’s high performance inference engine.
```

```text
Enable safe agentic payments with built-in guardrails using Amazon Bedrock AgentCore payments
URL: https://aws.amazon.com/blogs/machine-learning/enable-safe-agentic-payments-with-built-in-guardrails-using-amazon-bedrock-agentcore-payments/
Published: Mon, 01 Jun 2026 17:30:12 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 131
Signal tags: agent, agentic, agentcore, bedrock
In this post, we address several key risks that surface when designing an agentic payment system, and how to address them with the capabilities of AgentCore payments.
```

```text
How Baz improved its AI Agent Code Review accuracy using Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/how-baz-improved-its-ai-agent-code-review-accuracy-using-amazon-bedrock-agentcore/
Published: Tue, 02 Jun 2026 15:45:11 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 113
Signal tags: agent, agentcore, bedrock, rag
This post walks through how Baz built their Spec Review agent using Amazon Bedrock and Amazon Bedrock AgentCore. We'll cover the architecture decisions, implementation details, and the business outcomes they achieved by leveraging these AWS services to automate their code review process
```

```text
Improve your agent’s tool-calling accuracy with SFT and DPO on Amazon SageMaker AI
URL: https://aws.amazon.com/blogs/machine-learning/improve-your-agents-tool-calling-accuracy-with-sft-and-dpo-on-amazon-sagemaker-ai/
Published: Wed, 03 Jun 2026 15:56:50 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 105
Signal tags: agent, eval, sagemaker
In this post, you learn how to use Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) together to improve the tool-calling accuracy of a small language model (SLM). The example uses Amazon SageMaker AI training jobs, so you can focus on training code instead of managing your own training infrastructure. You also learn how to evaluate tool-calling accuracy and compare a base model to several fine-tuned variants, so you can make data-driven decisions about model quality.
```

```text
Comprehensive observability for Amazon SageMaker AI LLM inference: From GPU utilization to LLM quality
URL: https://aws.amazon.com/blogs/machine-learning/comprehensive-observability-for-amazon-sagemaker-ai-llm-inference-from-gpu-utilization-to-llm-quality/
Published: Fri, 29 May 2026 23:36:58 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 91
Signal tags: observability, gpu, inference, sagemaker
This post demonstrates a comprehensive observability solution using Amazon Managed Grafana dashboards that provides a holistic view of both quality and quantity for LLMs served on Amazon SageMaker AI endpoints with inference components.
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
Signal score: 207
Signal tags: agent, agentic, orchestration, gpu, inference, serverless, memory, token, browser, edge
Google AI Edge’s LiteRT-LM provides a production-proven, highly optimized infrastructure for running Gemma 4 across cross-platform mobile and edge environments. It actively unlocks the model's native multimodal and agentic features on-device by utilizing memory-efficient dynamic loading, Multi-Token Prediction for up to a 2.2x speedup, and advanced orchestration tools like Thinking Mode and Constrained Decoding. Furthermore, the engine is rapidly expanding its integration surfaces beyond Android, introducing new native Swift APIs for Apple ecosystems and WebGPU-accelerated JavaScript APIs for high-performance, serverless browser inference.
```

```text
A Smarter Google AI Edge Gallery: MCP integration, notifications, and session continuity
URL: https://developers.googleblog.com/a-smarter-google-ai-edge-gallery-mcp-integration-notifications-and-session-continuity/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 175
Signal tags: mcp, model-context-protocol, workflow, rag, skill, github, edge
The Google AI Edge Gallery app has expanded its on-device AI capabilities by introducing experimental support for the open-source Model Context Protocol (MCP) on Android, allowing Gemma 4 to coordinate complex tasks across external data sources like Google Workspace and Google Maps. To enable more proactive and persistent user interactions, the update adds a "Schedule Notification" skill for automating routines and a persistent chat history feature that restores long session contexts nearly instantly. Driven by an open-source toolkit, the platform encourages community developers to build and share custom utility-focused workflows, prompt configurations, and tool integrations via its GitHub repository.
```

```text
Bringing Gemma 4 12B to your Laptop: Unlocking Local, Agentic Workflows with Google AI Edge
URL: https://developers.googleblog.com/bringing-gemma-4-12b-to-your-laptop-unlocking-local-agentic-workflows-with-google-ai-edge/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 163
Signal tags: agent, agentic, workflow, rag, edge, local
Google DeepMind’s Gemma 4 12B model brings agentic, multimodal AI capabilities to everyday laptops with 16GB of RAM, enabling local data processing and visual insight generation. Users can leverage this model on macOS through the Google AI Edge Gallery for dynamic Python code execution and visualization, as well as via Google AI Edge Eloquent for completely offline voice dictation and text editing. Additionally, developer workflows are enhanced by the LiteRT-LM CLI's new serve command, which creates an industry-compatible local endpoint to power fully-local AI tools and agents.
```

```text
The latest updates to Google Pay
URL: https://developers.googleblog.com/the-latest-updates-to-google-pay/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 151
Signal tags: agent, agentic, mcp, cost
Google Pay is evolving for "agentic commerce" by introducing the Universal Commerce Protocol and a new MCP server that allows AI agents to manage integrations and analyze trends. New Android updates introduce dynamic callbacks for seamless express checkouts and extend payment support into social media apps via WebViews. Additionally, the platform is launching cross-device biometric authentication and new transaction signals to help merchants reduce friction and optimize processing costs.
```

```text
All the news from the Google I/O 2026 Developer keynote
URL: https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 151
Signal tags: agent, mcp, eval, browser
Google announced the transition from assistive AI to independent agents, highlighting the launch of the Gemini 3.5 series and major updates to its Antigravity agent-first development platform. For mobile developers, the post introduces new Android CLI tools, the Android Bench evaluation leaderboard, and an automated Migration agent designed to rapidly convert various frameworks into native Kotlin code. Web development is also being transformed through Chrome DevTools for agents, the HTML-in-Canvas API, and the proposal of WebMCP, an open web standard that enables browser-based AI agents to execute complex tasks.
```

```text
Build Long-running AI agents that pause, resume, and never lose context with ADK
URL: https://developers.googleblog.com/build-long-running-ai-agents-that-pause-resume-and-never-lose-context-with-adk/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 131
Signal tags: agent, workflow, eks, rag
How to transition from stateless chatbots to production-grade agents capable of managing long-running enterprise workflows, such as HR onboarding, that span days or weeks. It introduces the Agent Development Kit (ADK) and its architectural shifts, specifically using durable state machines and persistent session storage to ensure an agent never loses context during "idle time" or server restarts. By leveraging event-driven webhooks and multi-agent delegation, the tutorial demonstrates how to build resilient systems that "sleep" during pauses and wake up to resume complex tasks with high reasoning accuracy.
```

```text
Building with Gemini Embedding 2: Agentic multimodal RAG and beyond
URL: https://developers.googleblog.com/building-with-gemini-embedding-2/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 111
Signal tags: agent, agentic, rag
Google has announced the general availability of Gemini Embedding 2, a unified model that maps text, images, video, audio, and documents into a single semantic space. This model allows developers to process interleaved multimodal inputs in a single request, significantly improving performance for tasks like agentic RAG, visual search, and content moderation. By supporting over 100 languages and offering features like task-specific prefixes and Matryoshka dimensionality reduction, the model provides a highly efficient and accurate foundation for building complex AI agents.
```

```text
Announcing ADK for Kotlin and ADK for Android 0.1.0: Building AI Agents on Android and Beyond
URL: https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 109
Signal tags: agent, orchestration, release, edge, local
Google has announced the launch of version 0.1.0 of the Agent Development Kit (ADK) for Kotlin, alongside a specialized ADK library for Android. This open-source framework simplifies the creation of AI agents by managing complex orchestration, session sharing, and error handling across cloud and edge environments. The release supports hybrid orchestration, enabling developers to build multi-agent systems where a cloud-based model can seamlessly offload specific tasks to local, on-device models like Gemini Nano to enhance user privacy.
```

```text
One Year of Innovation: Celebrating 100k Members in the Google Cloud x NVIDIA Developer Community
URL: https://developers.googleblog.com/one-year-of-innovation-celebrating-100k-members-in-the-google-cloud-x-nvidia-developer-community/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 89
Signal tags: agent, agentic, gpu
The Google Cloud and NVIDIA developer community is celebrating its first anniversary with 100,000 members and a renewed focus on providing builders with advanced AI infrastructure and resources. To accelerate development, the community offers curated learning pathways for mastering LLM optimization, GPU-accelerated data analytics, and monthly expert-led webinars. Moving into its second year, the initiative will expand to include hands-on labs, engineering events, and specialized content focused on the growth of agentic AI.
```

```text
Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps
URL: https://developers.googleblog.com/announcing-genkit-middleware-intercept-extend-and-harden-your-agentic-apps/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 89
Signal tags: agent, agentic, tpu
Genkit is an open-source framework designed to help developers build production-ready, agentic AI applications using TypeScript, Go, Dart, and Python. The framework utilizes a powerful middleware system that intercepts generation calls to inject custom behaviors like retries, model fallbacks, and human-in-the-loop tool approvals. By attaching hooks at the generate, model, and tool layers, developers can ensure high reliability and deterministic control over model outputs. Furthermore, Genkit allows for the creation and stacking of custom middleware, all of which can be inspected and debugged through a dedicated Developer UI.
```

### Google Cloud Blog
Source URL: `https://cloudblog.withgoogle.com/rss/`
Final URL: `https://cloudblog.withgoogle.com/rss/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Nano Banana 2 and Nano Banana Pro are generally available, and already powering creative workflows
URL: https://cloud.google.com/blog/products/ai-machine-learning/nano-banana-2-and-nano-banana-pro-are-generally-available/
Published: Thu, 28 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 125
Signal tags: agent, agentic, workflow, security
Organizations are unlocking entirely new ways to use image generation and editing across their industries. To drive next-generation experiences, businesses are embedding AI directly into creative, agentic workflows. But next-gen workflows require enterprise-grade AI you can trust. What’s new: To help customers continue their creative journey securely, we are announcing Nano Banana 2 (Gemini 3.1 Flash Image) and Nano Banana Pro (Gemini 3 Pro Image) are generally available (GA) today via Gemini Enterprise Agent Platform . Backed by enterprise-grade infrastructure and security, these models empower you to integrate high-quality image generation and editing capabilities directly into your applications and workflows. Alongside this milestone, we are introducing a powerful new capability in preview that significantly expands how models process multimodal inputs: Nano Banana 2 now supports video files as an input prompt. In addition to text, pdf or image input references, the model now utilizes deep video understanding to analyze the visual context, specific subjects, and actions within video footage to generate context-aware images, including thumbnails, rich infographics, and more. Try
```

```text
AI in SRE: Where and how Google is deploying agentic AI to improve operations
URL: https://cloud.google.com/blog/products/devops-sre/how-google-sre-is-using-agentic-ai-to-improve-operations/
Published: Thu, 28 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 67
Signal tags: agent, agentic
Since its inception over 20 years ago, Google has used Site Reliability Engineering (SRE) to keep services like Search, Gmail, Maps, YouTube and Google Cloud reliable and highly available, adhering to the principles and practices of the reliability-first mindset. Recently though, the emergence of AI has driven multiple step-changes in system complexity. Interactions between components are now more complicated due to a variety of factors: With microservice architectures, systems are distributed across wider geographical locations and data centers that have greater hardware diversity. Enterprise cloud products offer an extensive array of capabilities with an incredibly complex set of products. Google services now cover more unique business and regulatory requirements, making the overall topology and taxonomy much more complex and difficult to understand, a challenge amplified by the constant stream of system changes resulting from continuous deployment pipelines. AI code generation capabilities have enabled software developers to deliver orders of magnitude more code, resulting in more opportunities to introduce reliability issues. While AI is in some ways making the SRE team’s work
```

```text
Cloud CISO Perspectives: How to build an AI-ready security program for the public sector
URL: https://cloud.google.com/blog/products/identity-security/cloud-ciso-perspectives-how-to-build-an-ai-ready-security-program-for-the-public-sector/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 55
Signal tags: identity, security, database
Welcome to the second Cloud CISO Perspectives for May 2026. Today, Usman Chaudhary, Field CISO, Google Public Sector, offers a guide for CISOs protecting government agencies and critical infrastructure on how to get started — and get the most out of — defending with AI. As with all Cloud CISO Perspectives, the contents of this newsletter are posted to the Google Cloud blog . If you’re reading this on the website and you’d like to receive the email version, you can subscribe here . aside_block ), ('btn_text', 'Visit the hub'), ('href', 'https://cloud.google.com/solutions/security/board-of-directors?utm_source=cgc-site&utm_medium=et&utm_campaign=FY26-Q2-GLOBAL-GCP39634-email-dl-dgcsm-CISOP-NL-177159&utm_content=-&utm_term=-'), ('image', )])]> How to build an AI-ready security program for the public sector By Usman Chaudhary, Field CISO, Google Public Sector Usman Chaudhary, Field CISO, Google Public Sector Deciphering actionable signals from deafening noise can be hard for CISOs, even with AI — and especially for those guiding government agencies, critical manufacturing plants, or in a foundational industry. From industrial control systems to decades-old municipal databases, you’re s
```

```text
How the University of Central Oklahoma is using AI to streamline analysis of complex criminal cases
URL: https://cloud.google.com/blog/topics/public-sector/how-the-university-of-central-oklahoma-is-using-ai-to-streamline-analysis-of-complex-criminal-cases/
Published: Thu, 28 May 2026 19:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: none
In the high-stakes world of forensic science, time is the enemy of justice. The University of Central Oklahoma (UCO) Forensic Science Institute (FSI) was looking for an innovative AI solution that could help reduce the time required to analyze complex criminal case documents and construct clear timelines. In early tests, this solution, which can typically take criminal investigators months, has been demonstrated to significantly reduce this time. This collaboration between Google Public Sector and UCO’s technology and forensic experts establishes a path for a new standard for accelerating the pursuit of justice across the country and provides powerful efficiency gains. A new vision for the pursuit of justice This project, which originated in an AI hackathon sponsored by the university’s CIO Sonya Watkins, centers on Google's NotebookLM , an AI research tool used by the university as a thinking partner for the review of complex criminal cases. Sonya Watkins, CIO, University of Central Oklahoma and I co-led the hackathon with the goal of rapidly identifying and prototyping high-impact solutions for the university, while providing the technical framework, and brought expertise in rapi
```

```text
Evolving Dataflow to process massive datasets for machine learning
URL: https://cloud.google.com/blog/products/data-analytics/ai-focused-innovations-in-dataflow/
Published: Thu, 28 May 2026 16:00:00 +0000
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: none
Google created MapReduce more than 20 years ago to solve the scaling problems in data processing that the then young company was running into. The AI era that we are in now demands efficient, large-scale data processing for everything from training frontier models like Gemini by Google DeepMind to powering fully autonomous vehicles like Waymo. Many aspects of machine learning, including data ingestion, transformation, and feature extraction, rely heavily on processing massive datasets. To meet this astronomical scale required by efforts across Google, we evolved our data platform, Flume, the successor to the original MapReduce, with innovations focused on scalability , efficiency , and a better developer experience . And many of those innovations are available as part of Dataflow , our fully managed batch and streaming platform built on the same core technology Google uses to power its most demanding internal workloads. . In this blog, we provide an overview of the many innovations in the Flume platform, and a glimpse into how Google Cloud customers are putting those features into action with Dataflow. Addressing massive scalability The scale of data processing at Google has explod
```

```text
What’s new with Google Cloud
URL: https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud/
Published: Fri, 29 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 250
Signal tags: agent, agentic, mcp, model-context-protocol, claude, workflow, orchestration
Want to know the latest from Google Cloud? Find it here in one handy location. Check back regularly for our newest updates, announcements, resources, events, learning opportunities, and more. Tip : Not sure where to find what you’re looking for on the Google Cloud blog? Start here: Google Cloud blog 101: Full list of topics, links, and resources . aside_block May 25 - May 29 Anthropic’s Claude Opus 4.8 is now available on Gemini Enterprise Agent Platform . As we continue to expand our platform's model offerings, this addition gives organizations more options for handling complex, multi-stage enterprise workflows. Claude Opus 4.8 brings strong capabilities in agentic coding, allowing developers to manage extensive refactors and tracking dependencies over extended sessions. API Horizon Munich July 6, 2026: Orchestrating the Next Era of AI and APIs Master the orchestration of next-gen AI and digital ecosystems. Join Google Cloud experts and DACH tech leaders on July 6 for an exclusive look at the Apigee roadmap, Agent Management, and Model Context Protocol (MCP). Gain real-world insights and connect with the regional integration community. Register now Securing AI Agents: The Extended
```

```text
Connecting AI agents with unstructured data using Google Cloud Storage MCP Servers
URL: https://cloud.google.com/blog/topics/developers-practitioners/build-ai-agents-faster-with-gcs-google-cloud-storage-mcp-server/
Published: Tue, 02 Jun 2026 17:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 227
Signal tags: agent, agentic, mcp, model-context-protocol, workflow, rag
Google Cloud Storage (GCS) is a foundational component of the modern agentic tech stack and the preferred home for unstructured data at scale. As enterprises deploy agents in production, the critical focus has shifted to turning data into context and building secure, standardized integrations to access context. This is the core of smart storage: making unstructured data inherently agent-ready by turning passive objects into rich context for reasoning. Whether it’s automating complex financial workflows or diagnosing system failures in seconds, AI success now depends on how seamlessly agents can leverage this intelligence to make smart, high-stakes decisions. In this blog, we will share three examples of agents built by customers using GCS, and then share how you can securely and reliably connect your agents to GCS using Model Context Protocol (MCP). Combined with smart storage features like auto annotations and object contexts, GCS MCP server makes the whole agent deployment process easy and simple. Real-world agent success on Google Cloud Storage We are seeing incredible innovation from customers leveraging MCP and Google’s agentic tech stack to solve complex business problems: Pa
```

```text
The fully-managed Remote MCP Server for AlloyDB is now Generally Available
URL: https://cloud.google.com/blog/products/data-analytics/alloydb-remote-mcp-server-ga-secure-ai-agent-access-to-your-data/
Published: Mon, 01 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 187
Signal tags: agent, agentic, mcp, model-context-protocol, database
AI agents possess incredible reasoning capabilities and can perform increasingly complex actions. But the reliability of agentic outcomes depends entirely on the quality of the context they can access — context that is frequently locked away in operational databases. To bridge this gap, we are excited to announce the Remote Model Context Protocol (MCP) Server for AlloyDB is now generally available. The Model Context Protocol (MCP) is an open-source standard that gives LLMs a secure, consistent way to connect to external data sources. As part of Google Cloud’s recent rollout of 50+ Google-managed MCP servers , this new integration makes it easier than ever for both interactive and autonomous agents to securely harness the full power of your enterprise data. For example, you can now ask an AI agent for an up-to-the-millisecond view of your delivery fleet by connecting it to your real-time logistics data in AlloyDB, avoiding inaccuracies due to stale data and reducing the need for manual reporting. Why AlloyDB is the strong foundation for agentic apps By connecting MCP to AlloyDB, your agents get access to the premier database built for enterprise-grade AI. AlloyDB delivers the scale,
```

```text
What’s new in serverless Managed Service for Apache Spark
URL: https://cloud.google.com/blog/products/data-analytics/serverless-managed-service-for-apache-spark-runtime-3-0-features/
Published: Wed, 03 Jun 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 181
Signal tags: agent, workflow, runtime, gpu, serverless, rag
Whether you use it for data preparation, real-time interactive queries, AI model training, or something entirely different, running Apache Spark at scale is demanding — you shouldn’t have to manage the underlying infrastructure too. Late last year, we announced the general availability (GA) of our serverless Managed Service for Apache Spark runtime version 3.0, prioritizing speed, simplicity, and reliability. Since then, customer use of Managed Service for Apache Spark for data science has nearly doubled year over year. This is a testament to our belief that using Google Cloud is the easier, smarter, and faster place to run your Apache Spark workloads. In this blog, let’s dive into a few key features that make our serverless Apache Spark offering a great fit for a wide range of workflows, including feature engineering, GPU-accelerated model training and tuning, semantic search, RAG, building AI agents and applications, and more. Zero-setup onboarding The most significant barrier to entry for a cloud service is often the "time to magic moment" — the interval between creating a project and running your first workload. Previously, with serverless Spark, you still needed to manually co
```

```text
Experimenting with TPUs, GKE Managed DRANET, and Multi-cluster Inference Gateway
URL: https://cloud.google.com/blog/topics/developers-practitioners/experimenting-with-tpus-gke-managed-dranet-and-multi-cluster-inference-gateway/
Published: Tue, 02 Jun 2026 07:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 145
Signal tags: gateway, kubernetes, gke, gpu, tpu, inference, rag
What happens when your workload fails in one region but you need access to service? This is a common case for availability and uptime. With recent enhancement to the Kubernetes ecosystem and capabilities like Dynamic Resource Allocation (DRA) and Inference Gateway. I decided to experiment with these capabilities in Google Cloud for a simple test using an AI inference workload. In this blog, we will explore this setup and you can also jump straight into the detailed configs in this codelab Build multi-cluster GKE Inference Gateway, with TPUs , Cloud Storage FUSE and managed DRANET. Building blocks To build out this experiment, use the following products, features, and tools: Google Kubernetes Engine (GKE) managed DRANET : This is a managed feature that lets you request and share resources among Pods. This supports GPUs , and TPUs . In this test TPUs were used in two different regions with networking assigned using managed DRANET. Multi-cluster GKE Inference gateway : Load balances your AI/ML inference workloads across multiple GKE clusters. This works in a failover situation which is what my experiment intended to test. The type which supports this is the Multi-cluster Cross-region
```

### GitHub Changelog
Source URL: `https://github.blog/changelog/feed/`
Final URL: `https://github.blog/changelog/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Shape Copilot code review around your team
URL: https://github.blog/changelog/2026-06-02-shape-copilot-code-review-around-your-team
Published: Tue, 02 Jun 2026 17:22:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 155
Signal tags: agent, mcp, copilot, skills, skill, changelog, github
Copilot code review adapts to your team’s tools and standards and scales its depth to the complexity of each change. Today we’re shipping two public previews: Agent skills and MCP… The post Shape Copilot code review around your team appeared first on The GitHub Blog .
```

```text
GitHub Copilot in Visual Studio Code, May releases
URL: https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases
Published: Wed, 03 Jun 2026 13:30:58 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 123
Signal tags: agent, copilot, release, changelog, github
VS Code continues with weekly stable releases. This changelog covers releases v1.120 through v1.123, the releases we shipped throughout May and early June 2026. In May, we made the Agents… The post GitHub Copilot in Visual Studio Code, May releases appeared first on The GitHub Blog .
```

```text
Cloud and local sandboxes for GitHub Copilot now in public preview
URL: https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview
Published: Tue, 02 Jun 2026 17:25:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 117
Signal tags: copilot, sandbox, changelog, github, local
GitHub Copilot can now run inside secure, isolated sandboxes, both locally on your machine and in the cloud. Sandboxed Copilot experiences provide isolated environments for Copilot’s tool execution locally as… The post Cloud and local sandboxes for GitHub Copilot now in public preview appeared first on The GitHub Blog .
```

```text
Copilot SDK is now generally available
URL: https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available
Published: Tue, 02 Jun 2026 17:30:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 115
Signal tags: agent, agentic, copilot, changelog, github
The GitHub Copilot SDK is now generally available. You can embed GitHub Copilot’s agentic engine into your own applications, services, and developer tools with a stable API and production-ready support.… The post Copilot SDK is now generally available appeared first on The GitHub Blog .
```

```text
Introducing Copilot CLI and agentic capabilities enhancements in JetBrains IDEs
URL: https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides
Published: Tue, 02 Jun 2026 16:30:40 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 115
Signal tags: agent, agentic, copilot, changelog, github
With Copilot CLI now available in GitHub Copilot for JetBrains IDEs, this update centers on new capabilities for Copilot CLI sessions, while also delivering a broader set of agentic improvements.… The post Introducing Copilot CLI and agentic capabilities enhancements in JetBrains IDEs appeared first on The GitHub Blog .
```

```text
GPT-4.1 deprecated
URL: https://github.blog/changelog/2026-06-02-gpt-4-1-deprecated
Published: Tue, 02 Jun 2026 23:58:52 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 81
Signal tags: agent, copilot, changelog, github
We have deprecated GPT-4.1 across all GitHub Copilot experiences (including Copilot Chat, inline edits, ask and agent modes, and code completions), June 1, 2026. Model Deprecation date Suggested alternative GPT-4.1… The post GPT-4.1 deprecated appeared first on The GitHub Blog .
```

```text
Extend GitHub with agent apps
URL: https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps
Published: Tue, 02 Jun 2026 17:20:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 81
Signal tags: agent, changelog, github
Agent apps are AI agents from GitHub partners, installable from the GitHub Marketplace, and integrated directly into GitHub. You install an agent app just like any other GitHub App from… The post Extend GitHub with agent apps appeared first on The GitHub Blog .
```

```text
GitHub Copilot code review for Azure Repos is now in technical preview
URL: https://github.blog/changelog/2026-06-02-github-copilot-code-review-for-azure-repos-is-now-in-technical-preview
Published: Tue, 02 Jun 2026 17:22:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 71
Signal tags: copilot, workflow, changelog, github
GitHub Copilot code review for Azure Repos is now available in technical preview, bringing on demand pull request reviews directly into your Azure DevOps workflow. How it works Once enabled… The post GitHub Copilot code review for Azure Repos is now in technical preview appeared first on The GitHub Blog .
```

```text
Expanded technical preview availability for the GitHub Copilot app
URL: https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app
Published: Tue, 02 Jun 2026 17:36:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: copilot, changelog, github
The GitHub Copilot app technical preview is now available to all existing Copilot Pro, Pro+, Business, and Enterprise customers. Download the Copilot app for Windows, macOS, or Linux to get… The post Expanded technical preview availability for the GitHub Copilot app appeared first on The GitHub Blog .
```

```text
Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input
URL: https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input
Published: Tue, 02 Jun 2026 17:27:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: copilot, changelog, github
GitHub Copilot CLI is getting a major refresh at Microsoft Build 2026. Rubber duck and voice input are generally available today, and both prompt scheduling and a new experimental terminal… The post Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input appeared first on The GitHub Blog .
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
Signal score: 101
Signal tags: agent, copilot, github
I used coding agents to build agents that automated part of my job. Here's what I learned about working better with coding agents. The post Agent-driven development in Copilot Applied Science appeared first on The GitHub Blog .
```

```text
Continuous AI for accessibility: How GitHub transforms feedback into inclusion
URL: https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
Published: Thu, 12 Mar 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: copilot, github
AI automates triage for accessibility feedback, allowing us to focus on fixing barriers—turning a chaotic backlog into continuous, rapid resolutions. The post Continuous AI for accessibility: How GitHub transforms feedback into inclusion appeared first on The GitHub Blog .
```

```text
From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner
URL: https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/
Published: Wed, 28 Jan 2026 17:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: copilot, github
Learn how GitHub built an accessible, multi-terminal-safe ASCII animation for the Copilot CLI using custom tooling, ANSI color roles, and advanced terminal engineering. The post From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner appeared first on The GitHub Blog .
```

```text
When protections outlive their purpose: A lesson on managing defense systems at scale
URL: https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/
Published: Thu, 15 Jan 2026 20:54:32 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 41
Signal tags: observability, github
User feedback led us to clean up outdated mitigations. See why observability and lifecycle management are critical for defense systems. The post When protections outlive their purpose: A lesson on managing defense systems at scale appeared first on The GitHub Blog .
```

```text
Post-quantum security for SSH access on GitHub
URL: https://github.blog/engineering/platform-security/post-quantum-security-for-ssh-access-on-github/
Published: Mon, 15 Sep 2025 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: security, github
GitHub is introducing post-quantum secure key exchange methods for SSH access to better protect Git data in transit. The post Post-quantum security for SSH access on GitHub appeared first on The GitHub Blog .
```

```text
From latency to instant: Modernizing GitHub Issues navigation performance
URL: https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/
Published: Thu, 14 May 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
How the GitHub Issues team used client-side caching, smart prefetching, and service workers to make navigation feel instant. The post From latency to instant: Modernizing GitHub Issues navigation performance appeared first on The GitHub Blog .
```

```text
How GitHub uses eBPF to improve deployment safety
URL: https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/
Published: Thu, 16 Apr 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
Learn how Github uses eBPF to detect and prevent circular dependencies in its deployment tooling. The post How GitHub uses eBPF to improve deployment safety appeared first on The GitHub Blog .
```

```text
The uphill climb of making diff lines performant
URL: https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
Published: Fri, 03 Apr 2026 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
The path to better performance is often found in simplicity. The post The uphill climb of making diff lines performant appeared first on The GitHub Blog .
```

```text
How we rebuilt the search architecture for high availability in GitHub Enterprise Server
URL: https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/
Published: Tue, 03 Mar 2026 18:45:09 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
Here's how we made the search experience better, faster, and more resilient for GHES customers. The post How we rebuilt the search architecture for high availability in GitHub Enterprise Server appeared first on The GitHub Blog .
```

```text
How GitHub engineers tackle platform problems
URL: https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/
Published: Tue, 10 Jun 2025 16:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
Our best practices for quickly identifying, resolving, and preventing issues at scale. The post How GitHub engineers tackle platform problems appeared first on The GitHub Blog .
```

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
Final URL: `https://blog.cloudflare.com/rss/`
Status/content: `200` / `application/xml`

```text
Moving past bots vs. humans
URL: https://blog.cloudflare.com/past-bots-and-humans/
Published: Tue, 21 Apr 2026 13:00:00 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: none
As AI assistants and privacy proxies challenge the capabilities of traditional bot detection, the Web needs new models for accountability. We believe that control should remain with the client, and that an open ecosystem of anonymous credentials is key to preserving user privacy while protecting origins from abuse.
```

```text
Announcing Claude Managed Agents on Cloudflare
URL: https://blog.cloudflare.com/claude-managed-agents/
Published: Tue, 19 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 136
Signal tags: agent, claude, workflow, runtime
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
```

```text
Agents can now create Cloudflare accounts, buy domains, and deploy
URL: https://blog.cloudflare.com/agents-stripe-projects/
Published: Thu, 30 Apr 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 79
Signal tags: agent, token
Starting today, agents can now be Cloudflare customers. They can create a Cloudflare account, start a paid subscription, register a domain, and get back an API token to deploy code right away. Humans can be in the loop to grant permission, but there’s no need to go to the dashboard, copy and paste API tokens, or enter credit card details.
```

```text
Introducing Dynamic Workflows: durable execution that follows the tenant
URL: https://blog.cloudflare.com/dynamic-workflows/
Published: Fri, 01 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 61
Signal tags: workflow, cost
Dynamic Workflows is a library that lets you route durable execution to tenant-provided code on the fly. Built on Dynamic Workers, it enables platforms to serve millions of unique workflows at near-zero idle cost.
```

```text
Project Glasswing: what Mythos showed us
URL: https://blog.cloudflare.com/cyber-frontier-models/
Published: Mon, 18 May 2026 06:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: security, eks
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
```

```text
Announcing Claude Compliance API support with Cloudflare CASB
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Published: Thu, 21 May 2026 17:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 42
Signal tags: claude, security
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
```

```text
Code Orange: Fail Small is complete. The result is a stronger Cloudflare network
URL: https://blog.cloudflare.com/code-orange-fail-small-complete/
Published: Fri, 01 May 2026 21:07:30 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: codex
We have completed a massive engineering effort to make our infrastructure more resilient. Through new tools like Snapstone and the Engineering Codex, we've implemented safer configuration changes and automated best practices to prevent future incidents.
```

```text
How we built Cloudflare's data platform and an AI agent on top of it
URL: https://blog.cloudflare.com/our-unified-data-platform/
Published: Thu, 28 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 33
Signal tags: agent
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
```

```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Published: Thu, 07 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 27
Signal tags: security
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
URL: https://blog.cloudflare.com/browser-run-containers/
Published: Wed, 13 May 2026 13:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: browser
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
```

### Docker Blog
Source URL: `https://www.docker.com/blog/feed/`
Final URL: `https://www.docker.com/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Published: Tue, 26 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 221
Signal tags: agent, claude-code, claude, sandbox, skills, skill, docker
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
```

```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-security-crisis-threatening-developer-infrastructure/
Published: Mon, 18 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 188
Signal tags: agent, agentic, sandbox, security, docker
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
```

```text
Coding Agent Horror Stories: The rm -rf ~/ Incident
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
Published: Mon, 01 Jun 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 154
Signal tags: agent, sandbox, security, docker
This is Part 2 of our AI Coding Agent Horror Stories series, an in-depth look at real-world security incidents exposing the vulnerabilities in AI coding agents, and how Docker Sandboxes deliver workspace-scoped isolation that contains the worst failures at the execution layer. In part 1 of this series, we mapped six categories of AI coding...
```

```text
How to Secure AI Agents: A Practical Overview for Development Teams
URL: https://www.docker.com/blog/how-to-secure-ai-agents/
Published: Tue, 02 Jun 2026 16:11:02 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 132
Signal tags: agent, agentic, security, docker
In our State of Agentic AI report, 45% of organizations said they struggle to ensure the tools their agents use are secure and enterprise-ready. That number reflects a broader reality: AI agents are moving into production faster than the security practices around them are maturing. The challenge is not that organizations lack security awareness. It’s...
```

```text
What is Sandbox Security?
URL: https://www.docker.com/blog/what-is-sandbox-security/
Published: Mon, 01 Jun 2026 15:51:31 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 132
Signal tags: agent, agentic, sandbox, security, docker
If you're already familiar with sandboxing as an isolation technique, sandbox security is the next layer: the policies, controls, and enforcement mechanisms that make sure those isolation boundaries actually hold under real-world pressure. According to our State of Agentic AI report, 40% of respondents cite security as the top challenge in scaling agentic AI, and...
```

```text
Docker AI Governance: Unlock Agent Autonomy, Safely
URL: https://www.docker.com/blog/docker-ai-governance-unlock-agent-autonomy-safely/
Published: Tue, 12 May 2026 18:00:09 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 128
Signal tags: agent, mcp, governance, docker
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call, so every developer in your company can run AI agents safely, wherever they work. Your laptop is the new prod Agents are the biggest productivity unlock...
```

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Published: Fri, 15 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 100
Signal tags: mcp, model-context-protocol, docker
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
```

```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Published: Tue, 19 May 2026 19:08:04 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 66
Signal tags: agent, workflow, docker
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
```

```text
NIST Narrows the NVD: What Container Security Programs Should Reassess
URL: https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/
Published: Wed, 13 May 2026 10:38:28 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 54
Signal tags: security, database, docker
On April 15, NIST announced a prioritized enrichment model for the National Vulnerability Database. Most CVEs will still be published, but fewer will receive the CVSS scores, CPE mappings, and CWE classifications that container scanners and compliance programs have historically relied on. The change formalizes a drift that has been visible to anyone pulling NVD...
```

```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Published: Wed, 27 May 2026 13:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: docker
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
```

### Kubernetes Blog
Source URL: `https://kubernetes.io/feed.xml`
Final URL: `https://kubernetes.io/feed.xml`
Status/content: `200` / `application/xml`

```text
Kubernetes v1.36: User Namespaces in Kubernetes are finally GA
URL: https://kubernetes.io/blog/2026/04/23/kubernetes-v1-36-userns-ga/
Published: Thu, 23 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 96
Signal tags: runtime, identity, security, kubernetes, release, local
After several years of development, User Namespaces support in Kubernetes reached General Availability (GA) with the v1.36 release. This is a Linux-only feature. For those of us working on low level container runtimes and rootless technologies, this has been a long awaited milestone. We finally reached the point where "rootless" security isolation can be used for Kubernetes workloads. This feature also enables a critical pattern: running workloads with privileges and still being confined in the user namespace. When hostUsers: false is set, capabilities like CAP_NET_ADMIN become namespaced , meaning they grant administrative power over container local resources without affecting the host. This effectively enables new use cases that were not possible before without running a fully privileged container. The Problem with UID 0 A process running as root inside a container is also seen from the kernel as root on the host. If an attacker manages to break out of the container, whether through a kernel vulnerability or a misconfigured mount, they are root on the host. While there are many security measures in place for running containers, these measures don't change the underlying identity
```

```text
Kubernetes v1.36: Fine-Grained Kubelet API Authorization Graduates to GA
URL: https://kubernetes.io/blog/2026/04/24/kubernetes-v1-36-fine-grained-kubelet-authorization-ga/
Published: Fri, 24 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 42
Signal tags: observability, kubernetes
On behalf of Kubernetes SIG Auth and SIG Node, we are pleased to announce the graduation of fine-grained kubelet API authorization to General Availability (GA) in Kubernetes v1.36! The KubeletFineGrainedAuthz feature gate was introduced as an opt-in alpha feature in Kubernetes v1.32, then graduated to beta (enabled by default) in v1.33. Now, the feature is generally available and the feature gate is locked to enabled. This feature enables more precise, least-privilege access control over the kubelet 's HTTPS API, replacing the need to grant the overly broad nodes/proxy permission for common monitoring and observability use cases. Motivation: the nodes/proxy problem The kubelet exposes an HTTPS endpoint with several APIs that give access to data of varying sensitivity, including pod listings, node metrics, container logs, and, critically, the ability to execute commands inside running containers. Prior to this feature, kubelet authorization used a coarse-grained model. When webhook authorization was enabled, almost all kubelet API paths were mapped to a single nodes/proxy subresource. This meant that any workload needing to read metrics or health status from the kubelet required nod
```

```text
Announcing etcd 3.7.0-beta.0
URL: https://kubernetes.io/blog/2026/05/20/etcd-370-beta/
Published: Wed, 20 May 2026 00:00:00 +0000
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 78
Signal tags: security, kubernetes, database, memory, release
SIG-Etcd announces the availability of the first beta release of etcd v3.7.0 . This new version of the popular distributed database and key Kubernetes component includes the long-requested RangeStream feature, as well as a refactoring and cleanup of multiple legacy components and interfaces. v3.7 will deliver improved security, better operational reliability, and an improved experience for working with large resultsets. First, however, the project needs users to test the beta. You can find v3.7.0-beta.0 here: Source code Binaries Official container images Please try it out and report issues in the etcd repo . This beta also determines the EOL of version 3.4. RangeStream In etcd v3.6 and earlier, it is challenging to work with requests that return large resultsets. The client or requesting application is forced to wait for the full result set, leading to unpredictable latency and memory usage. The RangeStream RPC lets calling applications accept result sets in chunks, reducing latency and making buffering memory usage more predictable. Much of the work on RangeStream was done by a relatively new contributor to etcd, Jeffrey Ying , a software engineer at Google. New contributors can
```

```text
Kubernetes v1.36: Tiered Memory Protection with Memory QoS
URL: https://kubernetes.io/blog/2026/04/29/kubernetes-v1-36-memory-qos-tiered-protection/
Published: Wed, 29 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 72
Signal tags: observability, policy, kubernetes, memory
On behalf of SIG Node, we are pleased to announce updates to the Memory QoS feature (alpha) in Kubernetes v1.36. Memory QoS uses the cgroup v2 memory controller to give the kernel better guidance on how to treat container memory. It was first introduced in v1.22 and updated in v1.27. In Kubernetes v1.36, we're introducing: opt-in memory reservation, tiered protection by QoS class, observability metrics, and kernel-version warning for memory.high . What's new in v1.36 Opt-in memory reservation with memoryReservationPolicy v1.36 separates throttling from reservation. Enabling the feature gate turns on memory.high throttling (the kubelet sets memory.high based on memoryThrottlingFactor , default 0.9), but memory reservation is now controlled by a separate kubelet configuration field: None (default): no memory.min or memory.low is written. Throttling via memory.high still works. TieredReservation : the kubelet writes tiered memory protection based on the Pod's QoS class : Guaranteed Pods get hard protection via memory.min . For example, a Guaranteed Pod requesting 512 MiB of memory results in: $ cat /sys/fs/cgroup/kubepods.slice/kubepods-pod6a4f2e3b_1c9d_4a5e_8f7b_2d3e4f5a6b7c.slice/me
```

```text
Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
URL: https://kubernetes.io/blog/2026/05/07/kubernetes-v1-36-dra-136-updates/
Published: Thu, 07 May 2026 10:35:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 66
Signal tags: kubernetes, gpu, memory, release
Dynamic Resource Allocation (DRA) has fundamentally changed how platform administrators handle hardware accelerators and specialized resources in Kubernetes. In the v1.36 release, DRA continues to mature, bringing a wave of feature graduations, critical usability improvements, and new capabilities that extend the flexibility of DRA to native resources like memory and CPU, and support for ResourceClaims in PodGroups. Driver availability continues to expand. Beyond specialized compute accelerators, the ecosystem includes support for networking and other hardware types, reflecting a move toward a more robust, hardware-agnostic infrastructure. Whether you are managing massive fleets of GPUs, need better handling of failures, or simply looking for better ways to define resource fallback options, the upgrades to DRA in 1.36 have something for you. Let's dive into the new features and graduations! Feature graduations The community has been hard at work stabilizing core DRA concepts. In Kubernetes 1.36, several highly anticipated features have graduated to Beta and Stable. Prioritized list (stable) Hardware heterogeneity is a reality in most clusters. With the Prioritized list feature, you
```

```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
URL: https://kubernetes.io/blog/2026/05/12/kubernetes-v1-36-psi-metrics-ga/
Published: Tue, 12 May 2026 10:35:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 60
Signal tags: kubernetes, rag, memory, release
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage. Unlike traditional utilization metrics, PSI tells the story of tasks stalled and time lost, all in nicely-packaged percentages of time across the CPU, memory, and I/O. With the recent release of Kubernetes v1.36, users across the ecosystem have a stable, reliable interface to observe resource contention at the node, pod, and container levels. In this post, we will dive into the improvements and performance testing that proved its readiness for production. Beyond utilization: why PSI? Monitoring CPU or memory usage alone can be misleading. A node may report XX% (below 100%) CPU utilization while certain tasks are experiencing severe latency due to scheduling delays. PSI fills this gap by providing: Cumulative Totals : Absolute time spent in a stalled state. Moving Averages : 10s, 60s, and 300s windows that allow operators to distinguish between transient spikes and sustained resource tension. Proving stability: performance testing at scale A common concern when graduating
```

```text
Kubernetes v1.36: Mutable Pod Resources for Suspended Jobs (beta)
URL: https://kubernetes.io/blog/2026/04/27/kubernetes-v1-36-mutable-pod-resources-for-suspended-jobs/
Published: Mon, 27 Apr 2026 10:35:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 58
Signal tags: kubernetes, gpu, memory
Kubernetes v1.36 promotes the ability to modify container resource requests and limits in the pod template of a suspended Job to beta. First introduced as alpha in v1.35, this feature allows queue controllers and cluster administrators to adjust CPU, memory, GPU, and extended resource specifications on a Job while it is suspended, before it starts or resumes running. Why mutable pod resources for suspended Jobs? Batch and machine learning workloads often have resource requirements that are not precisely known at Job creation time. The optimal resource allocation depends on current cluster capacity, queue priorities, and the availability of specialized hardware like GPUs. Before this feature, resource requirements in a Job's pod template were immutable once set. If a queue controller like Kueue determined that a suspended Job should run with different resources, the only option was to delete and recreate the Job, losing any associated metadata, status, or history. This feature also provides a way to let a specific Job instance for a CronJob progress slowly with reduced resources, rather than outright failing to run if the cluster is heavily loaded. Consider a machine learning traini
```

```text
Kubernetes v1.36: Server-Side Sharded List and Watch
URL: https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/
Published: Wed, 06 May 2026 10:35:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 56
Signal tags: kubernetes, memory, cost
As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserialize everything, only to discard the objects it is not responsible for. Scaling out the controller does not reduce per-replica cost; it multiplies it. Kubernetes v1.36 introduces server-side sharded list and watch as an alpha feature ( KEP-5866 ). With this feature enabled, the API server filters events at the source so that each controller replica receives only the slice of the resource collection it owns. The problem with client-side sharding Some controllers, such as kube-state-metrics , already support horizontal sharding. Each replica is assigned a portion of the keyspace and discards objects that do not belong to it. While this works functionally, it does not reduce the volume of data flowing from the API server: N replicas x full event stream : every replica deserializes and processes every event, then throws away what it does not need. Network bandwidth scales with replicas , not wi
```

```text
From Kubernetes Dashboard to Headlamp: Understanding the Transition
URL: https://kubernetes.io/blog/2026/06/01/dashboard-to-headlamp/
Published: Mon, 01 Jun 2026 10:00:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 54
Signal tags: workflow, kubernetes
For many people, Kubernetes Dashboard was their first window into Kubernetes. It offered a simple visual way to see what was running in a cluster, inspect resources, and build confidence without relying on the command line. For years, it helped developers, students, and operators make sense of Kubernetes, and it served as an important onramp into the ecosystem. The Kubernetes Dashboard project has now been archived. We deeply respect the work the team did and the role Dashboard played in making Kubernetes more approachable for so many users. Headlamp builds on that foundation and carries it forward. It keeps the clarity of a visual interface while adding capabilities that match how Kubernetes is used today. This includes multi-cluster visibility, application-centric views, extensibility through plugins, and flexible deployment options that work both in-cluster and on the desktop. This guide is meant to help you navigate that transition with confidence. Before diving into the mechanics of migration, we start with familiar ground by looking at how common Kubernetes Dashboard workflows map to Headlamp. We also cover what stays the same and what improves after the switch. The goal is n
```

```text
Reconciling the Past: Correcting Records for Unfixed Kubernetes CVEs
URL: https://kubernetes.io/blog/2026/05/26/reconciling-unfixed-kubernetes-cves/
Published: Tue, 26 May 2026 09:30:00 -0800
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 52
Signal tags: security, kubernetes, database
The Kubernetes project relies on transparency to empower cluster administrators and security researchers. One important way we do that is by publishing CVE records into the Common Vulnerabilities and Exposures database. As part of our ongoing effort to mature the official Kubernetes CVE Feed , we have identified some discrepancies. CVE records for a few older, unfixed issues incorrectly include a fixed version field. The Kubernetes Security Response Committee (SRC) will correct the affected CVE records on June 1, 2026. This may result in vulnerability scanners identifying these vulnerabilities in places where they were previously not detected. To help reduce confusion, this post provides a technical update on three vulnerabilities that were disclosed in previous years but remain unfixed: CVE-2020-8561 , CVE-2020-8562 , and CVE-2021-25740 . Why we are updating these records now While these vulnerabilities have been public for several years, the recent work to generate official Open Source Vulnerabilities (OSV) files revealed that their corresponding CVE records did not accurately reflect their status. Specifically, some records suggested a fixed version existed, when in reality, the
```

### LangChain Blog (site)
Source URL: `https://www.langchain.com/blog/rss.xml`
Final URL: `https://www.langchain.com/blog/rss.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
How Harmonic rebuilt Scout on Deep Agents and 4x’d retention with LangSmith
URL: https://www.langchain.com/blog/how-harmonic-rebuilt-scout-on-deep-agents-and-4xd-retention-with-langsmith
Published: Wed, 03 Jun 2026 16:00:01 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 91
Signal tags: agent, langsmith
(excerpt unavailable from feed item)
```

```text
Model Neutrality: Why Avoiding AI Vendor Lock-In Matters
URL: https://www.langchain.com/blog/model-neutrality
Published: Thu, 04 Jun 2026 03:06:46 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: agent
Explore why model neutrality is critical for AI agents. Learn how labs lock you in at the harness layer—and why a neutral, open-source framework is the answer.
```

```text
How Auth Proxy secures LangSmith agent sandboxes
URL: https://www.langchain.com/blog/how-auth-proxy-secures-network-access-for-langsmith-agent-sandboxes
Published: Thu, 21 May 2026 20:32:38 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 219
Signal tags: agent, runtime, sandbox, security, secret, secrets, langsmith
Agents need credentials and network access to do useful work, but those capabilities create new security risks. This post explains how Auth Proxy keeps secrets out of LangSmith Sandboxes runtimes, constrains agent egress, and gives teams infrastructure-level control over how agents reach external services.
```

```text
The Agent Development Lifecycle: Build, Test, Deploy & Monitor AI Agents | LangChain
URL: https://www.langchain.com/blog/the-agent-development-lifecycle
Published: Wed, 03 Jun 2026 02:01:34 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 153
Signal tags: agent, runtime, eval, observability, governance
Learn how leading engineering teams ship AI agents reliably and repeatedly using a four-phase agent development lifecycle: Build, Test, Deploy, and Monitor. Includes guidance on evals, runtimes, observability, and governance at scale.
```

```text
LangSmith Sandboxes are Generally Available
URL: https://www.langchain.com/blog/langsmith-sandboxes-generally-available
Published: Thu, 28 May 2026 23:04:43 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 141
Signal tags: agent, sandbox, langsmith
Run AI agents safely with LangSmith Sandboxes (GA): kernel-isolated microVMs with snapshots, parallel forks, service URLs, and auth proxies. Built for coding agents, CI agents, and data pipelines
```

```text
Interpreter Skills: Building Workflows for Agents
URL: https://www.langchain.com/blog/interpreter-skills
Published: Sat, 30 May 2026 01:01:20 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 135
Signal tags: agent, workflow, skills, skill
Interpreter skills extend agent skills with a TypeScript module the agent can import and run. This lets you build more capable workflows with your agents.
```

```text
Introducing Rubrics: Build Agents that Evaluate and Correct Their Work
URL: https://www.langchain.com/blog/introducing-rubrics-for-deepagents
Published: Wed, 03 Jun 2026 11:44:46 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 133
Signal tags: agent, eval, tpu
Deep Agents' RubricMiddleware adds a self-evaluation loop to your agent runs. Set a rubric, configure a grader, and get reliable outputs on tasks where correctness matters.
```

```text
Delta Channels: How We’re Evolving our Runtime for Long-Running Agents
URL: https://www.langchain.com/blog/delta-channels-evolving-agent-runtime
Published: Wed, 03 Jun 2026 02:01:34 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 127
Signal tags: agent, runtime, rag, cost
Long-running agents have a storage problem: checkpointing full state at every step grows at O(N²). DeltaChannel is a new primitive in LangGraph 1.2 that checkpoints only the diff each step and writes full snapshots periodically, keeping storage costs flat as sessions grow longer. It ships by default in Deep Agents v0.6, with no config changes or data migration required.
```

```text
Fixing agent failures in production: Interrupt 2026 recap | LangChain Newsletter
URL: https://www.langchain.com/blog/may-2026-langchain-newsletter
Published: Thu, 28 May 2026 14:08:39 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 113
Signal tags: agent, sandbox, langsmith
Recapping two days of Interrupt 2026 — LangSmith Engine, Sandboxes GA, LangChain Labs, and 23 talks from teams at LinkedIn, Rippling, Cisco, and more. Now on demand.
```

```text
Designing Efficient Verifiers for Legal Agents
URL: https://www.langchain.com/blog/designing-efficient-verifiers-for-legal-agents
Published: Wed, 03 Jun 2026 02:01:34 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 111
Signal tags: agent, eval
A Harvey and LangChain Labs study on making LLM verifiers cheaper and more reliable for legal-agent evaluation and post-training.
```

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
Vercel Domains now supports price sorting and availability filtering
URL: https://vercel.com/changelog/vercel-domains-now-supports-price-sorting-and-availability-filtering
Published: 2026-05-26T00:00:00.000Z
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 48
Signal tags: cost, changelog, vercel
Vercel Domains now supports price sorting and availability filtering.Price sorting shows lower cost domains first, so you can quickly find a domain that fits your budget. Availability filtering moves unavailable domains to the bottom of the search results, so you can focus on domains that you can actually purchase.Try it at vercel.com/domains. Read more
```

```text
How Conductor moved parallel coding agents from the laptop to the cloud with Vercel Sandbox
URL: https://vercel.com/blog/how-conductor-moved-parallel-coding-agents-from-the-laptop-to-the-cloud-with-vercel-sandbox
Published: 2026-05-27T14:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 225
Signal tags: agent, codex, claude-code, claude, sandbox, vercel, local
Conductor on VercelMultiple parallel coding agents running at scale in the cloudModel-agnostic, works with Claude Code, Codex, and other coding agentsUsed by engineering teams at Notion, Linear, Ramp, and Life360Interacting with a single coding agent feels natural, and Conductor makes directing a fleet of agents just as intuitive.It's a GUI for spinning up multiple coding agents in parallel, each working on an isolated branch of your codebase at once. You review their work, merge what works, and redirect the agents that need to keep iterating.Engineering teams loved it, but hardware was a real limitiation. Every agent ran on your machine, so the fan climbed, the CPU ran hot, and if you closed your laptop, the agents stopped.Charlie Holtz, co-founder and CEO of Conductor, spent time at Vercel before starting the company. He understands what developers lose when their environment imposes rules on how they can work. Cloud Workspaces, Conductor's remote execution layer built on Vercel Sandboxes, removes the local hardware constraint. Developers can now spawn multiple agents and close the lid without interrupting work. The journey from local to cloudDevelopers who adopted Conductor earl
```

```text
Opus 4.8 on AI Gateway
URL: https://vercel.com/changelog/opus-4-8-on-ai-gateway
Published: 2026-05-28T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 197
Signal tags: agent, agentic, claude, gateway, inference, cost, pricing, changelog, vercel, edge
Claude Opus 4.8 is now available on Vercel AI Gateway.Claude Opus 4.8 is built for long-horizon agentic execution and handles complex, multi-step coding tasks like refactors that previously required human correction mid-task. The model also produces clearer, less hedgy prose for knowledge work like drafting documents, analyzing data, and building presentations.To use Opus 4.8, set model to anthropic/claude-opus-4.8 in the AI SDK.AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting, Zero Data Retention support, dynamic provider sorting by latency & cost, and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests.Learn more about AI Gateway, view the AI Gateway model leaderboard or try it in our model playground. Read more
```

```text
MiniMax M3 on AI Gateway
URL: https://vercel.com/changelog/minimax-m3-on-ai-gateway
Published: 2026-05-31T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 192
Signal tags: agent, agentic, gateway, inference, token, cost, pricing, changelog, vercel
MiniMax M3 is now available on Vercel AI Gateway.M3 is MiniMax's first model with a 1M-token context window and native multimodality, built around MiniMax Sparse Attention (MSA).M3 improves on software engineering, terminal-based tool use, and agentic web browsing, and is tuned for multi-turn collaboration.To use MiniMax M3, set model to minimax/minimax-m3 in the AI SDK.Pass an image alongside a prompt to use M3's multimodal input:AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting, Zero Data Retention support, dynamic provider sorting by latency & cost, and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests.Learn more about AI Gateway, view the AI Gateway model leaderboard or try it in our model playground. Read more
```

```text
Qwen 3.7 Plus now available on AI Gateway
URL: https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway
Published: 2026-06-01T07:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 176
Signal tags: agent, workflow, gateway, inference, cost, pricing, changelog, vercel
Qwen 3.7 Plus from Alibaba is now available on Vercel AI Gateway. Both Qwen 3.7 Plus and 3.7 Max are free for paid AI Gateway users till 6/4/26 12:00pm PT.The model unifies vision and language into a single agent foundation, with capabilities spanning GUI and CLI operation, coding and productivity workflows with full-modality input, and visual agent tasks including perception and reasoning. It is designed to generalize across diverse agent harnesses.To use Qwen 3.7 Plus, set model to alibaba/qwen-3.7-plus in the AI SDK.AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting, Zero Data Retention support, dynamic provider sorting by latency and cost, and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests.Learn more about AI Gateway, view the AI Gateway model leaderboard or try it in our model playground. Read more
```

```text
Amazon OpenSearch Serverless is now available in the Vercel Marketplace
URL: https://vercel.com/changelog/amazon-opensearch-serverless-is-now-available-in-the-vercel-marketplace
Published: 2026-05-28T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 162
Signal tags: agent, agentic, workflow, serverless, vector, cost, changelog, vercel
Amazon OpenSearch Serverless is now available in the Vercel Marketplace, with guided setup and automatic project configuration built into the Vercel dashboard.Built for agentic infrastructureBy bringing Amazon OpenSearch Serverless into the Vercel Marketplace, teams benefit from a unified workflow:In-dashboard provisioning: Spin up OpenSearch collections directly from the Vercel dashboardAutomatic configuration: Environment variables are automatically injected into your projects on provisioningUnified management: View and manage search resources alongside the rest of your application infrastructure in the Marketplace resource view, with quick links to AWS for deeper configurationThis integration is powered by the next generation of Amazon OpenSearch Serverless APIs, with Vercel participating as a key design partner alongside AWS during development.Unified support for vector, lexical, hybrid, and agentic search in a single collectionAutoscales up to 20× faster, built for the bursty, unpredictable load patterns of agentic workloadsScale to zero with no idle costsUp to 60% cost savings by paying for actual usage instead of peak capacityGet startedTo help you get started, you can creat
```

```text
Grok Imagine Video 1.5 on AI Gateway
URL: https://vercel.com/changelog/grok-imagine-video-1-5-on-ai-gateway
Published: 2026-06-03T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 148
Signal tags: gateway, tpu, inference, cost, pricing, release, changelog, vercel
Grok Imagine Video 1.5 from xAI is now available on AI Gateway. The model generates video from an input image with synchronized audio in a single pass.This release improves audio quality, prompt following, and photorealism. Face accuracy and character consistency are stronger across longer sequences, with better lighting and physical realism in the output. Reference image support has been expanded to give more control over visual style and subject.To use this model, set model to xai/grok-imagine-video-1.5-preview in the AI SDK. Chain an image model with Grok Imagine Video 1.5 to generate a still and animate it in one flow:You can also try this Grok Imagine Video 1.5 directly in the AI Gateway Playground.AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting, Zero Data Retention support, dynamic provider sorting by latency and cost, and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway and view
```

```text
Run Docker containers inside Vercel Sandbox
URL: https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox
Published: 2026-05-29T00:01:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 139
Signal tags: agent, sandbox, postgres, changelog, docker, vercel
Vercel Sandbox now supports installing and running Docker inside a sandbox. An agent can build containers, install system packages, and modify files without touching your host system.Install Docker, start the daemon, and serve a containerized application:Docker in a Sandbox is useful for running containerized services like Redis or Postgres as test dependencies, validating container images before deploying, or previewing applications served from a container. Combined with persistent sandboxes, the Docker installation and pulled images carry over between sessions.As well as adding support for Docker, sandboxes now support FUSE filesystem drivers and VPN clients, unlocking unlimited capabilities to what can be built. Learn more about these new system specifications in the documentation. Read more
```

```text
Sandbox persistence is now GA
URL: https://vercel.com/changelog/sandbox-persistence-is-now-ga
Published: 2026-05-26T00:01:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 138
Signal tags: workflow, sandbox, rag, cost, changelog, vercel
Vercel Sandboxes now automatically save and restore filesystem state between sessions. Persistence is on by default, meaning no snapshots to manage or state to track manually.Each sandbox has a durable, customizable name that acts as a unique reference in your project. You can create, retrieve, or resume a sandbox by name. Vercel spins sessions up and down automatically, without interrupting your workflow.Create a persistent sandboxWhen you call Sandbox.create(), persistence is enabled by default: Each automatic snapshot consumes snapshot storage, which is billed separately from compute. For ephemeral workloads, opt out of persistence to minimize storage costs:To opt out of persistence with the CLI, pass --non-persistent to sandbox create. Non-persistent sandboxes discard their filesystem when the session ends.Resume a persistent sandboxResuming is automatic. Any call on a stopped sandbox, like runCommand() or writeFiles(), starts a new session from the most recent snapshot.Other improvementsSandbox.fork(): Create a new sandbox from an existing oneSandbox.getOrCreate(): Idempotent retrieve-or-create for long-lived sandboxesSandbox.delete(): Permanently delete a sandboxRicher sandbo
```

```text
Team-wide provider allowlist on AI Gateway
URL: https://vercel.com/changelog/team-wide-provider-allowlist-on-ai-gateway
Published: 2026-05-28T00:00:00.000Z
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 126
Signal tags: agent, gateway, security, changelog, vercel
AI Gateway now supports a team-wide provider allowlist. Teams can restrict which providers can serve requests, so traffic only routes to approved providers. The allowlist applies to every request through AI Gateway, including Bring Your Own Key (BYOK) traffic.Regulated teams typically vet AI providers across multiple dimensions with security and legal sign-off, ending up with a vendor set that reflects the specific requirements of their org. The allowlist turns that approved-vendor list into a routing guarantee:Enforcement happens at the gateway level, not at the request level. A developer on the team cannot route traffic to a provider the org hasn't approved.This restriction also applies to coding agents. Even if an agent omits or modifies request-level provider filters, AI Gateway still blocks unapproved providers.Only team owners can modify the provider allowlist, keeping control centralized and auditable.New providers are disabled by default once the allowlist is on, so the approved set doesn't silently expand when AI Gateway integrates a new vendor.How to configureToggle on Provider Allowlist in the AI Gateway Settings tab. All current providers are allowed by default, so exis
```

### Vercel Blog
Source URL: `https://vercel.com/blog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
No usable item rows extracted from this source in this run.
```

### Simon Willison
Source URL: `https://simonwillison.net/atom/everything/`
Final URL: `https://simonwillison.net/atom/everything/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs
URL: https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything
Published: 2026-06-03T12:01:27+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 233
Signal tags: agent, agentic, claude-code, claude, cursor, policy, rag, token, cost
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding agents were about to become. Natalie Lung for Bloomberg: The rideshare giant is limiting all employees to $1,500 in monthly token spending per AI coding tool, an Uber spokesperson said in response to a Bloomberg News inquiry. That means spending on one tool doesn’t have a bearing on the budget for another. The limits, which have been instituted in recent months, only apply to agentic coding software such as Cursor or Anthropic PBC’s Claude Code. A $1,500 monthly limit per tool strikes me as a rational policy response to over-spending, and much more sensible than those tokenmaxxing leaderboards encouraging employees to compete for as much AI usage as possible. It's also interesting in that it hints at a real dollar value for what Uber is getting out of these tools. If we assume two actively used tools per engineer that's $3,000 * 12 = $36,000 cap per engineer per year. Levels.fyi lists the me
```

```text
How we contain Claude across products
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Published: 2026-05-30T21:36:24+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 190
Signal tags: agent, claude-code, claude, runtime, sandbox, vector, local
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows). There's a lot in here, including some interesting stories of risks they missed such as the api.anthropic.com/v1/files exfiltration vector covered here previously . This reminded me it's time I took another look at Anthropic's open source srt (Anthropic Sandbox Runtime) tool - it's mature enough n
```

```text
Microsoft's new MAI models
URL: https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything
Published: 2026-06-02T22:21:52+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 109
Signal tags: copilot, eval, cost, github
Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to "select early partners") and MAI-Code-1-Flash (137B Parameters, 5B active, "purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling out to GitHub Copilot individual users in Visual Studio Code"). I've not been able to try either of them just yet. It's very interesting to see Microsoft releasing models with such low parameter counts, especially given how expensive larger models are to access right now. They claim MAI-Thinking-1 "is preferred to Sonnet 4.6 in our blind human side-by-side evaluations", which is impressive for a 35B model seeing as I frequently run models larger than that on my own laptop. (UPDATE: I got this entirely wrong, see note below.) Also of note : We trained [MAI-Thinking-1] from the ground up on enterprise grade, clean and commercially licensed data, without distillation from third-party models. And for MAI-Code-1-Flash as well: It is built end-to-end by Microsoft using clean and appropriately licensed data. I would very much like to learn more about this "appropriately licensed" data! Could thes
```

```text
The solution might be cancelling my AI subscription
URL: https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything
Published: 2026-05-31T16:31:32+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 94
Signal tags: agent, claude, eks
The solution might be cancelling my AI subscription I find this post by David Wilson very relatable. David lists 16+ projects he's spun up with AI tooling, and concludes: I didn't mean to build most of these things. Usually the Claude session started with something like " write a quick script for X ", and one hour later the result is not a quick script for X , nor in the usual case is my problem solved, whatever the original itch happened to be. On that last point, this technology is horrific for attention. It's a thermonuclear ADHD amplifier and I have seen the same effect in every single one of my adult friends. Folk running 3 screens simultaneously working on totally unrelated "projects" they have little hope of maintaining, and such little commitment to the outcome that the time is obviously wasted. This is a very real problem. I'm finding that coding agents can take me from a vague idea to a working solution, one with tests and documentation and that looks like a carefully considered project evolved over the course of many weeks... in less than an hour. Even if the code is rock solid, there's a limit to how many projects like that I can sensibly care for - and if they're insta
```

```text
Claude Opus 4.8: "a modest but tangible improvement"
URL: https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-everything
Published: 2026-05-28T23:59:50+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 92
Signal tags: claude, eval, cost, release
Anthropic shipped Claude Opus 4.8 today. My favourite thing about it is this note in the release announcement: Users will find Opus 4.8 to be a modest but tangible improvement on its predecessor. There’s still more to be done: we’re working on developing and releasing models that provide many of the same capabilities as Opus at a lower cost. It's so refreshing to see an AI lab honestly describe a release as a minor incremental improvement over the previous model! Honesty seems to be a theme. Here's my other favorite note from that announcement: One of the most prominent improvements in Opus 4.8 is its honesty . We train all our models to be honest---for instance, to avoid making claims that they can't support. But a general problem with AI models is that they sometimes jump to conclusions, confidently claiming to have made progress in their work despite the evidence being thin. Early testers report that Opus 4.8 is more likely to flag uncertainties about its work and less likely to make unsupported claims. This is borne out in our evaluations , which show that Opus 4.8 is around four times less likely than its predecessor to allow flaws in code it has written to pass unremarked. Th
```

```text
Pasted File Editor
URL: https://simonwillison.net/2026/Jun/2/pasted-file-editor/#atom-everything
Published: 2026-06-02T04:13:36+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 70
Signal tags: codex, claude, rag
Tool: Pasted File Editor I really like how you can paste a large volume of text into claude.ai (or the Claude desktop/mobile apps) and it will detect it as a large paste and turn it into a file attachment instead. I decided to have Codex desktop build me a version of that as a prototype. You can also open files directly - including images which will be shown as thumbnails - or drag files onto the textarea. Tags: javascript , tools , ai-assisted-programming , claude , codex
```

```text
datasette-agent-micropython 0.1a0
URL: https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything
Published: 2026-06-02T19:28:36+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 69
Signal tags: agent, sandbox, release
Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python , sandboxing , datasette , webassembly , datasette-agent
```

```text
micropython-wasm 0.1a1
URL: https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything
Published: 2026-06-02T19:20:47+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 69
Signal tags: agent, sandbox, release
Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython . Tags: python , sandboxing , webassembly
```

```text
llm-anthropic 0.25.1
URL: https://simonwillison.net/2026/May/28/llm-anthropic/#atom-everything
Published: 2026-05-28T23:54:56+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 68
Signal tags: claude, tpu, token, release
Release: llm-anthropic 0.25.1 New model: Claude Opus 4.8 ( claude-opus-4.8 ). New -o fast 1 option for fast mode , for organizations with that feature enabled on their account. Default max_tokens for each model now defaults to that model's maximum output rather than 8,192. #72 See also my notes on Opus 4.8 - I used this new release of llm-anthropic to generate the pelicans. Tags: llm , anthropic
```

```text
Running Python ASGI apps in the browser via Pyodide + a service worker
URL: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
Published: 2026-05-30T15:34:00+00:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 66
Signal tags: claude-code, claude, browser
Research: Running Python ASGI apps in the browser via Pyodide + a service worker Datasette Lite is my version of Datasette that runs entirely in the browser using Pyodide in WebAssembly. When I first built it four years ago I used Web Workers and code that intercepts navigation operations and fetches the generated HTML by running the Python app. This worked, but had the disadvantage that any JavaScript in tags would not be executed - breaking some Datasette functionality and a whole lot of Datasette plugins. This morning I set Claude Opus 4.8 the task (in Claude Code for web) of figuring out how to run Python ASGI apps in Pyodide using Service Workers instead, and it seems to work! Here's a basic ASGI FastCGI demo and here's a demo that runs Datasette 1.0a31 . I'm still getting my head around exactly how it works, but once I've done that I plan to upgrade Datasette Lite itself. Tags: javascript , python , datasette , asgi , service-workers , pyodide , datasette-lite , claude-code
```

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
Final URL: `https://huggingface.co/blog/feed.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
How to Fine-Tune Nemotron 3.5 ASR for Your Language, Domain, or Accent
URL: https://huggingface.co/blog/nvidia/fine-tuning-nemotron-35-asr
Published: Thu, 04 Jun 2026 12:59:35 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 12
Signal tags: none
(excerpt unavailable from feed item)
```

```text
EVA-Bench Data 2.0: 3 Domains, 121 Tools, 213 Scenarios
URL: https://huggingface.co/blog/ServiceNow-AI/eva-bench-data
Published: Thu, 04 Jun 2026 12:24:58 GMT
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 12
Signal tags: none
(excerpt unavailable from feed item)
```

```text
Holo3.1: Fast & Local Computer Use Agents
URL: https://huggingface.co/blog/Hcompany/holo31
Published: Tue, 02 Jun 2026 14:13:23 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 64
Signal tags: agent, local
(excerpt unavailable from feed item)
```

```text
Adding MCP Tools to Reachy Mini
URL: https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini
Published: Wed, 03 Jun 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 42
Signal tags: mcp
(excerpt unavailable from feed item)
```

```text
Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality
URL: https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2
Published: Thu, 14 May 2026 18:55:01 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 38
Signal tags: eval, retrieval
(excerpt unavailable from feed item)
```

```text
Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic
URL: https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption
Published: Mon, 01 Jun 2026 13:51:18 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Harness, Scaffold, and the AI Agent Terms Worth Getting Right
URL: https://huggingface.co/blog/agent-glossary
Published: Mon, 25 May 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: agent
(excerpt unavailable from feed item)
```

```text
Building Blocks for Foundation Model Training and Inference on AWS
URL: https://huggingface.co/blog/amazon/foundation-model-building-blocks
Published: Mon, 11 May 2026 23:18:26 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: inference
(excerpt unavailable from feed item)
```

```text
Reachy Mini goes fully local
URL: https://huggingface.co/blog/local-reachy-mini-conversation
Published: Wed, 27 May 2026 00:00:00 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 8
Signal tags: local
(excerpt unavailable from feed item)
```

```text
Direct Preference Optimization Beyond Chatbots
URL: https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots
Published: Wed, 03 Jun 2026 12:55:11 GMT
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 6
Signal tags: none
(excerpt unavailable from feed item)
```

### Anthropic News
Source URL: `https://www.anthropic.com/news`
Final URL: `https://www.anthropic.com/news`
Status/content: `200` / `text/html; charset=utf-8`

```text
Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the cons
URL: https://www.anthropic.com/news/claude-opus-4-8
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 77
Signal tags: agent, agentic, claude
n.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F0eaa0ed2dce9810169112e1c77de2585fcf1f5c2-2880x1620.jpg&w=3840&q=75 1x" src="/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F0eaa0ed2dce9810169112e1c77de2585fcf1f5c2-2880x1620.jpg&w=3840&q=75"/> Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work. Product Apr 17, 2026 <h4 class="headline-6 Feature
```

```text
Product Apr 17, 2026 Introducing Claude Design by Anthropic Labs Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create 
URL: https://www.anthropic.com/news/claude-design-anthropic-labs
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 77
Signal tags: agent, agentic, claude
y 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work. Product Apr 17, 2026 Introducing Claude Design by Anthropic Labs Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more. Announcements Apr 7, 2026 Project Glasswing <p class="body-3 serif Fea
```

```text
Responsible Scaling Policy
URL: https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: claude, policy, security
Economic Futures Research News Claude’s Constitution Responsible Scaling Policy Security and compliance Transparency Terms and policies <a href="http
```

```text
Jun 3, 2026 Announcements Introducing the Services Track and Partner Hub of the Claude Partner Network
URL: https://www.anthropic.com/news/services-track-partner-hub
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 33
Signal tags: claude, policy
der"> Date Category Title Jun 3, 2026 Announcements Introducing the Services Track and Partner Hub of the Claude Partner Network Jun 3, 2026 Policy What we learn
```

```text
Jun 3, 2026 Policy What we learned mapping a year’s worth of AI-enabled cyber threats
URL: https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 33
Signal tags: claude, policy
e class="PublicationList-module-scss-module__KxYrHG__date body-3">Jun 3, 2026 Announcements Introducing the Services Track and Partner Hub of the Claude Partner Network Jun 3, 2026 Policy What we learned mapping a year’s worth of AI-enabled cyber threats Jun 2, 2026 Announcements Expanding Projec
```

```text
Jun 2, 2026 Announcements Expanding Project Glasswing
URL: https://www.anthropic.com/news/expanding-project-glasswing
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: policy
xYrHG__meta"> Jun 3, 2026 Policy What we learned mapping a year’s worth of AI-enabled cyber threats Jun 2, 2026 Announcements Expanding Project Glasswing Jun 1, 2026 Announcements Anthropic confiden
```

```text
Announcements Feb 4, 2026 Claude is a space to think We’ve made a choice: Claude will remain ad-free. We explain why advertising incentives are incompatible with a genuinely helpfu
URL: https://www.anthropic.com/news/claude-is-a-space-to-think
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: claude
ople want from AI We invited Claude.ai users to share how they use AI, what they dream it could make possible, and what they fear it might do. Nearly 81,000 people participated—the largest and most multilingual qualitative study of its kind. Here's what we found. Announcements Feb 4, 2026 Claude is a space to think We’ve made a choice: Claude will remain ad-free. We explain why advertising incentives are incompatible with a genuinely helpful AI assistant, and how we plan to expand access without compromising user trust. News <div class="SearchFilter-module-scss-
```

```text
May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation
URL: https://www.anthropic.com/news/series-h
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: claude
ule__KxYrHG__meta"> Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation May 28, 2026 Product Introducing Claude Opus 4.8</span
```

```text
May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers
URL: https://www.anthropic.com/news/milan-office-opening
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: claude
PublicationList-module-scss-module__KxYrHG__meta"> May 28, 2026 Product Introducing Claude Opus 4.8 May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers May 26, 2026 Announcements <span class="PublicationList-module-scss-module__KxYrHG__titl
```

```text
Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC
URL: https://www.anthropic.com/news/confidential-draft-s1-sec
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 0
Signal tags: none
cationList-module-scss-module__KxYrHG__meta"> Jun 2, 2026 Announcements Expanding Project Glasswing Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC May 28, 2026 Announcements Anthropic raises $65B in Series H
```

### GitHub Trending Overall
Source URL: `https://github.com/trending?since=daily`
Final URL: `https://github.com/trending?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
github/copilot-sdk
URL: https://github.com/github/copilot-sdk
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 73
Signal tags: agent, copilot, github
Star github / copilot-sdk Multi-platform SDK for integrating GitHub Copilot Agent into apps and services; Java; 25 stars today
```

```text
mvanhorn/last30days-skill
URL: https://github.com/mvanhorn/last30days-skill
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 63
Signal tags: agent, skill, github
Star mvanhorn / last30days-skill AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary; Python; 173 stars today
```

```text
PaddlePaddle/PaddleOCR
URL: https://github.com/PaddlePaddle/PaddleOCR
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star PaddlePaddle / PaddleOCR Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages.; Python; 105 stars today
```

```text
github/spec-kit
URL: https://github.com/github/spec-kit
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star github / spec-kit 💫 Toolkit to help you get started with Spec-Driven Development; Python; 311 stars today
```

```text
NVIDIA/cosmos
URL: https://github.com/NVIDIA/cosmos
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star NVIDIA / cosmos NVIDIA Cosmos is an open platform of world models, datasets, and tools that enables developers to build Physical AI for robots, autonomous vehicles, smart infrastructure, and more.; Jupyter Notebook; 138 stars today
```

```text
lfnovo/open-notebook
URL: https://github.com/lfnovo/open-notebook
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star lfnovo / open-notebook An Open Source implementation of Notebook LM with more flexibility and features; TypeScript; 227 stars today
```

```text
openclaw/openclaw-windows-node
URL: https://github.com/openclaw/openclaw-windows-node
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Sponsor Star openclaw / openclaw-windows-node Windows companion suite for OpenClaw - System Tray app, Shared library, Node, and PowerToys Command Palette extension; C#; 331 stars today
```

```text
affaan-m/ECC
URL: https://github.com/affaan-m/ECC
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 223
Signal tags: agent, codex, claude-code, claude, cursor, security, memory, skills, skill, github
Sponsor Star affaan-m / ECC The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.; JavaScript; 1,736 stars today
```

```text
chopratejas/headroom
URL: https://github.com/chopratejas/headroom
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 109
Signal tags: mcp, tpu, rag, token, github
Sponsor Star chopratejas / headroom Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.; Python; 3,139 stars today
```

```text
aquasecurity/trivy
URL: https://github.com/aquasecurity/trivy
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 89
Signal tags: security, secret, secrets, kubernetes, github
Star aquasecurity / trivy Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more; Go; 255 stars today
```

### GitHub Trending Python
Source URL: `https://github.com/trending/python?since=daily`
Final URL: `https://github.com/trending/python?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
datawhalechina/hello-agents
URL: https://github.com/datawhalechina/hello-agents
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 73
Signal tags: agent, github
Star datawhalechina / hello-agents 📚 《从零开始构建智能体》——从零开始的智能体原理与实践教程; Python; 479 stars today
```

```text
jundot/omlx
URL: https://github.com/jundot/omlx
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 41
Signal tags: inference, github
Star jundot / omlx LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar; Python; 117 stars today
```

```text
unilabsim/UniLab
URL: https://github.com/unilabsim/UniLab
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 39
Signal tags: gpu, github
Star unilabsim / UniLab UniLab: A Heterogeneous Architecture for Robot RL Beyond GPU-Dominant Paradigms; Python; 85 stars today
```

```text
AIDC-AI/Pixelle-Video
URL: https://github.com/AIDC-AI/Pixelle-Video
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star AIDC-AI / Pixelle-Video 🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine; Python; 136 stars today
```

```text
jamwithai/production-agentic-rag-course
URL: https://github.com/jamwithai/production-agentic-rag-course
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 95
Signal tags: agent, agentic, rag, github
Python; 104 stars today
```

```text
HKUDS/Vibe-Trading
URL: https://github.com/HKUDS/Vibe-Trading
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: agent, github
Star HKUDS / Vibe-Trading "Vibe-Trading: Your Personal Trading Agent"; Python; 197 stars today
```

```text
nesquena/hermes-webui
URL: https://github.com/nesquena/hermes-webui
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: agent, github
Sponsor Star nesquena / hermes-webui Hermes WebUI: The best way to use Hermes Agent from the web or from your phone!; Python; 464 stars today
```

```text
odoo/odoo
URL: https://github.com/odoo/odoo
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
Star odoo / odoo Odoo. Open Source Apps To Grow Your Business.; Python; 29 stars today
```

```text
D4Vinci/Scrapling
URL: https://github.com/D4Vinci/Scrapling
Published: GitHub Trending current page
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github
Sponsor Star D4Vinci / Scrapling 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!; Python; 1,075 stars today
```

### GitHub Trending TypeScript
Source URL: `https://github.com/trending/typescript?since=daily`
Final URL: `https://github.com/trending/typescript?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
langgenius/dify
URL: https://github.com/langgenius/dify
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 97
Signal tags: agent, agentic, workflow, github
Star langgenius / dify Production-ready platform for agentic workflow development.; TypeScript; 164 stars today
```

```text
NVIDIA/NemoClaw
URL: https://github.com/NVIDIA/NemoClaw
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 97
Signal tags: agent, inference, github
Star NVIDIA / NemoClaw Run agents like Hermes and OpenClaw more securely inside NVIDIA OpenShell with managed inference; TypeScript; 51 stars today
```

```text
cyberpapiii/chipotlai-max
URL: https://github.com/cyberpapiii/chipotlai-max
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 45
Signal tags: agent, github
Star cyberpapiii / chipotlai-max The AI coding agent that runs on stolen Chipotle compute 🌯 Fork of OpenCode with Pepper AI as default model. Community project to add providers from Home Depot, Lowes, Target, Starbucks & more.; TypeScript; 228 stars today
```

```text
anomalyco/opencode
URL: https://github.com/anomalyco/opencode
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 45
Signal tags: agent, github
Sponsor Star anomalyco / opencode The open source coding agent.; TypeScript; 584 stars today
```

```text
fathah/hermes-desktop
URL: https://github.com/fathah/hermes-desktop
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 45
Signal tags: agent, github
Star fathah / hermes-desktop Desktop Companion for Hermes Agent; TypeScript; 417 stars today
```

```text
NginxProxyManager/nginx-proxy-manager
URL: https://github.com/NginxProxyManager/nginx-proxy-manager
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 32
Signal tags: docker, github
Star NginxProxyManager / nginx-proxy-manager Docker container for managing Nginx proxy hosts with a simple, powerful interface; TypeScript; 16 stars today
```

```text
actualbudget/actual
URL: https://github.com/actualbudget/actual
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 25
Signal tags: github, local
Sponsor Star actualbudget / actual A local-first personal finance app; TypeScript; 30 stars today
```

```text
microsoft/vscode
URL: https://github.com/microsoft/vscode
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star microsoft / vscode Visual Studio Code; TypeScript; 129 stars today
```

```text
angular/angular
URL: https://github.com/angular/angular
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star angular / angular Deliver web apps with confidence 🚀; TypeScript; 86 stars today
```

```text
Fission-AI/OpenSpec
URL: https://github.com/Fission-AI/OpenSpec
Published: GitHub Trending current page
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 17
Signal tags: github
Star Fission-AI / OpenSpec Spec-driven development (SDD) for AI coding assistants.; TypeScript; 246 stars today
```

## Filtering notes
- Intentionally excluded social-signal surfaces covered by the 08:00/19:00 jobs.
- Repeated same-day 11:00 official rows stayed reinforcement/raw_only unless they materially sharpened the late routing decision.
- GitHub Trending was treated as ecosystem evidence first; only official/product-owner rows or unusually concrete agent-runtime repos were considered for durable append.
- Stale backfill, generic product news, creative/media-only AI updates, and low-signal finance/domain/changelog rows were kept raw_only/discard rather than promoted.

## Why this raw exists
This file is the evidence store for later Honcho-style triage. Raw feed excerpts and URLs are preserved separately from durable wiki interpretation.
