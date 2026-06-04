---
title: Interest Signal Collection — 2026-06-04 11:00 KST
created: 2026-06-04
updated: 2026-06-04
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release notes, launch posts, and GitHub Trending
route_hint: append_existing
route_confidence: 0.82
route_reason: "Compared against 2026-06-03 22:00/11:00 and 2026-06-02/06-01/05-31 new-target raw/cache baselines before judging novelty.; Collected only the 11:00 new-target surfaces: big-tech/infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, and GitHub Trending; social-signal surfaces were intentionally excluded.; Strict promotion bias: repeated official-feed rows stayed raw_only; new durable rows are appended to existing managed-agent / AI-infra pages rather than promoted as a new page.; Fresh official rows from Google Cloud MCP/storage, AWS Step Functions AgentCore, Google AI Edge local agentic workflows, AlloyDB MCP, SageMaker multi-turn RL, and GitHub Copilot VS Code agents strengthen existing durable axes."
routing:
  route: append_existing
  confidence: 0.82
  reasons:
    - "Compared against 2026-06-03 22:00/11:00 and 2026-06-02/06-01/05-31 new-target raw/cache baselines before judging novelty."
    - "Collected only the 11:00 new-target surfaces: big-tech/infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, and GitHub Trending; social-signal surfaces were intentionally excluded."
    - "Strict promotion bias: repeated official-feed rows stayed raw_only; new durable rows are appended to existing managed-agent / AI-infra pages rather than promoted as a new page."
    - "Fresh official rows from Google Cloud MCP/storage, AWS Step Functions AgentCore, Google AI Edge local agentic workflows, AlloyDB MCP, SageMaker multi-turn RL, and GitHub Copilot VS Code agents strengthen existing durable axes."
  signal_tags:
    - new-target
    - official-feeds
    - rss
    - github-trending
    - append_existing
---

# Raw Transcript — Interest Signal Collection 11:00 KST 2026-06-04

Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-06-04
Captured at: 2026-06-04T11:03:43.310203+09:00

## Live session notes
- This was the 11:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against recent new-target track evidence: 2026-06-03 22:00/11:00, 2026-06-02 22:00/11:00, 2026-06-01 22:00/11:00, 2026-05-31, and 2026-05-30 raw/cache files before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, official HTML/blog index pages, and GitHub Trending HTML; disposable JSON cache: `~/wiki/.cache/new-target-11-00-2026-06-04.json`.
- URL evidence rule was applied: every captured row below includes the canonical item URL or the available feed/surface URL plus an explicit note if exact item URL was unavailable.

## Strongest routing read
- Overall route: `append_existing`.
- Route driver: several newly observed official rows shifted from yesterday’s eval/trust and token-spend governance baseline toward MCP-backed data access, Step Functions-managed agentic reasoning, local/on-device agentic workflows, and AI-infra control-plane resource coverage.
- Durable action: append existing managed-agent / AI-infra pages and Honcho/log audit; leave `index.md` unchanged because no new page is created.

## 1) Strongest rows selected for triage

### Google Cloud Blog
```text
Connecting AI agents with unstructured data using Google Cloud Storage MCP Servers
URL: https://cloud.google.com/blog/topics/developers-practitioners/build-ai-agents-faster-with-gcs-google-cloud-storage-mcp-server/
Published: 2026-06-03T02:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 85
Signal tags: agent, agentic, agents, ai, deploy, mcp, rag, workflow, workflows
Google Cloud Storage (GCS) is a foundational component of the modern agentic tech stack and the preferred home for unstructured data at scale. As enterprises deploy agents in production, the critical focus has shifted to turning data into context and building secure, standardized integrations to access context. This is the core of smart storage: making unstructured data inherently agent-ready by turning passive objects into rich context for reasoning. Whether it’s automating complex financial workflows or diagnosing system failures in seconds, AI success now depends on how seamlessly agents can leverage this intelligence to make smart, high-stakes decisions. In this blog, we will share three examples of agents built by customers using GCS, and then share how you can securely and reliably connect your agents to GCS using Model Context Protocol (MCP). Combined with smart storage features l
```

### AWS What's New
```text
AWS Step Functions adds AgentCore-powered agentic reasoning step
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/
Published: 2026-06-04T05:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 71
Signal tags: agent, agentcore, agentic, agents, ai, bedrock, workflow
AWS Step Functions now enables you to add AI agent reasoning steps to your workflow through an optimized integration with the managed harness (currently in preview) in Amazon Bedrock AgentCore. AWS Step Functions is a visual workflow service that orchestrates AWS services with built-in error handling, parallel execution, and human approval steps. The AgentCore harness lets you declare an agent through configuration where you specify the model, tools, and behavior. AgentCore provides the managed environment that runs the agent loop end-to-end. With this integration, you can automate reasoning tasks in your workflow such as classifying a document or extracting elements from an unstructured form. You can run multiple agents in parallel or in sequence at different decision points in a single workflow and add human approval before critical actions. The workflow execution history shows agent i
```

### Google Developers Blog
```text
Bringing Gemma 4 12B to your Laptop: Unlocking Local, Agentic Workflows with Google AI Edge
URL: https://developers.googleblog.com/bringing-gemma-4-12b-to-your-laptop-unlocking-local-agentic-workflows-with-google-ai-edge/
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 70
Signal tags: agent, agentic, agents, ai, rag, workflow, workflows
Google DeepMind’s Gemma 4 12B model brings agentic, multimodal AI capabilities to everyday laptops with 16GB of RAM, enabling local data processing and visual insight generation. Users can leverage this model on macOS through the Google AI Edge Gallery for dynamic Python code execution and visualization, as well as via Google AI Edge Eloquent for completely offline voice dictation and text editing. Additionally, developer workflows are enhanced by the LiteRT-LM CLI's new serve command, which creates an industry-compatible local endpoint to power fully-local AI tools and agents.
```

### AWS What's New
```text
AWS Config now supports 9 new resource types
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-config-new-resource-types
Published: 2026-06-04T00:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 58
Signal tags: agent, agentcore, ai, bedrock, eval, evaluation, rag, runtime
AWS Config now supports 9 additional AWS resource types across key services including Amazon Bedrock, Amazon Bedrock AgentCore, and Amazon SageMaker. This expansion provides greater coverage over your AWS environment, enabling you to more effectively discover, assess, audit, and remediate an even broader range of resources. With this launch, if you have enabled recording for all resource types, then AWS Config will automatically track these new additions. The newly supported resource types are also available in Config rules and Config aggregators. You can now use AWS Config to monitor the following newly supported resource types in all AWS Regions where the resources are available: Resource Types: AWS::Bedrock::FlowAlias AWS::BedrockAgentCore::Evaluator AWS::BedrockAgentCore::GatewayTarget AWS::BedrockAgentCore::OnlineEvaluationConfig AWS::BedrockAgentCore::RuntimeEndpoint AWS::SageMaker
```

### Google Cloud Blog
```text
The fully-managed Remote MCP Server for AlloyDB is now Generally Available
URL: https://cloud.google.com/blog/products/data-analytics/alloydb-remote-mcp-server-ga-secure-ai-agent-access-to-your-data/
Published: 2026-06-02T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 53
Signal tags: agent, agentic, agents, ai, database, mcp
AI agents possess incredible reasoning capabilities and can perform increasingly complex actions. But the reliability of agentic outcomes depends entirely on the quality of the context they can access — context that is frequently locked away in operational databases. To bridge this gap, we are excited to announce the Remote Model Context Protocol (MCP) Server for AlloyDB is now generally available. The Model Context Protocol (MCP) is an open-source standard that gives LLMs a secure, consistent way to connect to external data sources. As part of Google Cloud’s recent rollout of 50+ Google-managed MCP servers , this new integration makes it easier than ever for both interactive and autonomous agents to securely harness the full power of your enterprise data. For example, you can now ask an AI agent for an up-to-the-millisecond view of your delivery fleet by connecting it to your real-time 
```

### AWS What's New
```text
OpenAI GPT-5.4 generally available on Amazon Bedrock in AWS GovCloud (US-West)
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/GPT54-available-in-aws-govcloud-us-west/
Published: 2026-06-04T04:58:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 49
Signal tags: agent, agentic, ai, bedrock, inference, security
Amazon Bedrock now supports GPT‑5.4 from OpenAI in AWS GovCloud (US-West) — giving government and regulated industry customers access to OpenAI's most capable frontier model for professional work, backed by the enterprise-grade security and goverment compliance scope of AWS GovCloud (US). GPT‑5.4 supports native computer-use capabilities, and deep reasoning across coding, documents, and multi-step agentic tasks — all running on Bedrock's high-performance inference engine with isolated queues and durable state for fault-tolerant workloads. Your data stays in-partition and is never used to train models. For Regional availability of GPT-5.4 see the AWS Regions page . Read the launch blog to learn more, for documentation and a step-by-step walkthrough, see the Amazon Bedrock docs and the getting started blog .
```

### AWS What's New
```text
Amazon SageMaker AI launches multi-turn reinforcement learning for AI agent model customization
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/multi-turn-reinforcement-learning-on-sagemaker-ai/
Published: 2026-06-04T00:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 46
Signal tags: agent, agentic, agents, ai, serverless
Amazon SageMaker AI now offers multi-turn reinforcement learning (RL), a new serverless model customization technique for fine-tuning models on multi-step, agentic tasks. SageMaker AI model customization lets you adapt foundation models using techniques such as supervised fine-tuning, reinforcement learning from verifiable rewards (RLVR), and reinforcement learning from AI feedback (RLAIF), without the undifferentiated heavy lifting of building and operating your own training infrastructure. Multi-turn RL extends this by training models against your own agent environment and rewarding the full sequence of decisions an agent makes across a task, helping you specialize smaller, lower-cost models to match or exceed the task accuracy of larger general-purpose models on your target workload. Training models that power agents to reliably complete multi-step tasks is complex and time-consuming,
```

### Google Cloud Blog
```text
What’s new in serverless Managed Service for Apache Spark
URL: https://cloud.google.com/blog/products/data-analytics/serverless-managed-service-for-apache-spark-runtime-3-0-features/
Published: 2026-06-04T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 46
Signal tags: ai, gpu, rag, runtime, serverless, workflow, workflows
Whether you use it for data preparation, real-time interactive queries, AI model training, or something entirely different, running Apache Spark at scale is demanding — you shouldn’t have to manage the underlying infrastructure too. Late last year, we announced the general availability (GA) of our serverless Managed Service for Apache Spark runtime version 3.0, prioritizing speed, simplicity, and reliability. Since then, customer use of Managed Service for Apache Spark for data science has nearly doubled year over year. This is a testament to our belief that using Google Cloud is the easier, smarter, and faster place to run your Apache Spark workloads. In this blog, let’s dive into a few key features that make our serverless Apache Spark offering a great fit for a wide range of workflows, including feature engineering, GPU-accelerated model training and tuning, semantic search, RAG, buil
```

### GitHub Changelog
```text
GitHub Copilot in Visual Studio Code, May releases
URL: https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases
Published: 2026-06-03T22:30:58+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 45
Signal tags: agent, agents, changelog, copilot, github, release
VS Code continues with weekly stable releases. This changelog covers releases v1.120 through v1.123, the releases we shipped throughout May and early June 2026. In May, we made the Agents… The post GitHub Copilot in Visual Studio Code, May releases appeared first on The GitHub Blog .
```

### Google Cloud Blog
```text
Experimenting with TPUs, GKE Managed DRANET, and Multi-cluster Inference Gateway
URL: https://cloud.google.com/blog/topics/developers-practitioners/experimenting-with-tpus-gke-managed-dranet-and-multi-cluster-inference-gateway/
Published: 2026-06-02T16:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 45
Signal tags: ai, gpu, inference, kubernetes, rag, tpu
What happens when your workload fails in one region but you need access to service? This is a common case for availability and uptime. With recent enhancement to the Kubernetes ecosystem and capabilities like Dynamic Resource Allocation (DRA) and Inference Gateway. I decided to experiment with these capabilities in Google Cloud for a simple test using an AI inference workload. In this blog, we will explore this setup and you can also jump straight into the detailed configs in this codelab Build multi-cluster GKE Inference Gateway, with TPUs , Cloud Storage FUSE and managed DRANET. Building blocks To build out this experiment, use the following products, features, and tools: Google Kubernetes Engine (GKE) managed DRANET : This is a managed feature that lets you request and share resources among Pods. This supports GPUs , and TPUs . In this test TPUs were used in two different regions with
```

### Google Cloud Blog
```text
What’s new with Google Cloud
URL: https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 42
Signal tags: agent, agentic, ai, orchestration, workflow, workflows
Want to know the latest from Google Cloud? Find it here in one handy location. Check back regularly for our newest updates, announcements, resources, events, learning opportunities, and more. Tip : Not sure where to find what you’re looking for on the Google Cloud blog? Start here: Google Cloud blog 101: Full list of topics, links, and resources . aside_block May 25 - May 29 Anthropic’s Claude Opus 4.8 is now available on Gemini Enterprise Agent Platform . As we continue to expand our platform's model offerings, this addition gives organizations more options for handling complex, multi-stage enterprise workflows. Claude Opus 4.8 brings strong capabilities in agentic coding, allowing developers to manage extensive refactors and tracking dependencies over extended sessions. API Horizon Munich July 6, 2026: Orchestrating the Next Era of AI and APIs Master the orchestration of next-gen AI an
```

## 2) Manual-review boundary rows

### LangChain Blog (site)
```text
How to Build a Custom Agent Harness
URL: https://www.langchain.com/blog/how-to-build-a-custom-agent-harness
Published: 2026-06-04T02:07:53+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 36
Signal tags: agent, agents, ai, langchain
Effective agents are built with harnesses that are tightly coupled with the task at hand. The easiest way to build a custom harness is with LangChain's create_agent plus middleware. This guide covers the core agent loop and how you can customize it for your agent's use case.
```

### Google Cloud Blog
```text
Cool stuff Google Cloud customers built, May edition: Agentic algorithms for supply chains; virtual try-on APIs; robotic camera operators & more
URL: https://cloud.google.com/blog/topics/customers/cool-stuff-google-cloud-customers-built-monthly-round-up/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent, agentic, ai
AI and cloud technology are reshaping every corner of every industry around the world. Without our customers, who are building the future on our platform, there would be no Google Cloud. In this regular round-up , we dive into some of the exciting projects redefining businesses, shaping industries, and creating new categories. For our latest edition, we learn how Urban Outfitters sped up its order management; BASF uses AlphaEvolve algorithms to map global supply chains; the unification strategy for UKG ’s workforce intelligence; WPP ’s secrets to training humanoid robot camera operators; how Breuninger piloted Virtual Try-On APIs; creating automated video clips with Glance ; and Movix improves the production of dental aligners. Be sure to check back next month to see how more industry leaders and exciting startups are putting Google Cloud technologies to use. And if you haven’t already, 
```

### AWS What's New
```text
Amazon SageMaker Data Agent now supports conversation history
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-data-agent/
Published: 2026-06-04T05:26:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 30
Signal tags: agent, ai, workflow, workflows
Amazon SageMaker Data Agent, available in SageMaker Unified Studio now supports conversation history, enabling data practitioners to maintain continuity across analytical sessions. Data analysts and data scientists can now seamlessly reference previous agent-generated code, resume multi-step analyses, and review past troubleshooting interactions within their notebooks and Query Editor workflows. With conversation history, you can pick up exactly where you left off by accessing a scrollable list of past conversations through the clock icon in the chat panel header. Each conversation includes auto-generated titles and timestamps for easy identification. Whether you're resuming complex multi-step analyses, reusing agent-generated code, or continuing troubleshooting from earlier notebook runs, conversation history keeps the context preserved. Data teams save time, eliminate rework, and move 
```

### AWS Machine Learning Blog
```text
Improve your agent’s tool-calling accuracy with SFT and DPO on Amazon SageMaker AI
URL: https://aws.amazon.com/blogs/machine-learning/improve-your-agents-tool-calling-accuracy-with-sft-and-dpo-on-amazon-sagemaker-ai/
Published: 2026-06-04T00:56:50+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 27
Signal tags: agent, ai, eval
In this post, you learn how to use Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) together to improve the tool-calling accuracy of a small language model (SLM). The example uses Amazon SageMaker AI training jobs, so you can focus on training code instead of managing your own training infrastructure. You also learn how to evaluate tool-calling accuracy and compare a base model to several fine-tuned variants, so you can make data-driven decisions about model quality.
```

### OpenAI News RSS
```text
How Wasmer used Codex to build a Node.js runtime for the edge
URL: https://openai.com/index/wasmer
Published: 2026-06-03T21:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 26
Signal tags: ai, codex, runtime
See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.
```

### AWS Machine Learning Blog
```text
How to build self-driving AI operations on Amazon Bedrock at scale
URL: https://aws.amazon.com/blogs/machine-learning/how-to-build-self-driving-ai-operations-on-amazon-bedrock-at-scale/
Published: 2026-06-04T05:14:16+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 25
Signal tags: ai, bedrock, deploy, monitoring
In this post, we introduce Amazon Bedrock Ops Alert, a three-layer automated monitoring solution that proactively detects operational issues, dynamically adjusts alarm thresholds, classifies alarms by category, automatically creates context-aware support cases, helps prevent duplicate cases when an unresolved case of the same alarm category is already active, and delivers contextualized notifications to AI SRE teams. We walk through the solution architecture and how you can deploy it in your own environment.
```

### GitHub Trending
```text
aquasecurity/trivy
URL: https://github.com/aquasecurity/trivy
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 25
Signal tags: ai, github, kubernetes, security
Star aquasecurity / trivy Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more Language: Go. Stars today: 24.
```

## 3) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
Final URL: `https://openai.com/news/rss.xml`
Status/content: `200` / `text/xml; charset=utf-8`

```text
How Wasmer used Codex to build a Node.js runtime for the edge
URL: https://openai.com/index/wasmer
Published: 2026-06-03T21:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 26
Signal tags: ai, codex, runtime
See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.
```

```text
A blueprint for democratic governance of frontier AI
URL: https://openai.com/index/frontier-safety-blueprint
Published: 2026-06-03T19:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 22
Signal tags: ai, governance, security
OpenAI outlines a blueprint for U.S. governance of frontier AI, proposing a federal framework for safety, resilience, and national security.
```

```text
OpenAI public policy agenda
URL: https://openai.com/index/public-policy-agenda
Published: 2026-06-03T19:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: ai, policy
OpenAI outlines its public policy agenda for AI, including safety, youth protection, workforce transition, and global standards to ensure AI benefits society.
```

```text
Introducing new capabilities to GPT-Rosalind
URL: https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind
Published: 2026-06-03T22:15:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 9
Signal tags: ai, workflow
GPT-Rosalind advances life sciences research with enhanced biological reasoning, medicinal chemistry expertise, genomics analysis, and experimental workflow capabilities.
```

```text
OpenAI frontier models and Codex are now available on AWS
URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws
Published: 2026-06-01T19:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: ai, codex, eval, evaluation, workflow, workflows
OpenAI frontier models and Codex are now generally available on AWS, giving enterprises a new path to build with OpenAI through the AWS environments, controls, and procurement workflows they already use. Customers can get started with OpenAI on AWS and move faster from evaluation to production.
```

```text
Codex is becoming a productivity tool for everyone
URL: https://openai.com/index/codex-for-knowledge-work
Published: 2026-06-02T11:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: ai, automation, codex, workflow
The Next Era of Knowledge Work report explores how Codex is transforming productivity through AI-powered research, data analysis, workflow automation, and content creation.
```

```text
Codex for every role, tool, and workflow
URL: https://openai.com/index/codex-for-every-role-tool-workflow
Published: 2026-06-02T18:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 25
Signal tags: ai, codex, workflow
Discover new Codex plugins, sites, and annotations that help analysts, marketers, designers, investors, and other teams get more done with AI.
```

```text
A shared playbook for trustworthy third party evaluations
URL: https://openai.com/index/trustworthy-third-party-evaluations-foundations
Published: 2026-05-29T09:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: ai, eval, evaluation
OpenAI shares guidance on third-party AI evaluations, covering how to assess model capabilities, safeguards, and validity for frontier systems.
```

```text
How Braintrust turns customer requests into code with Codex
URL: https://openai.com/index/braintrust
Published: 2026-05-29T21:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: ai, codex
How Braintrust engineers use Codex with GPT-5.5 to run experiments and code faster.
```

```text
Our views on AI policy and political advocacy
URL: https://openai.com/index/our-views-on-ai-policy-and-political-advocacy
Published: 2026-06-02T02:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, policy
Our approach to AI policy and political advocacy, transparency, support for thoughtful regulation and AI safety, and that no outside political group speaks on the company’s behalf.
```

```text
Travelers deploys AI-powered claims countrywide with OpenAI
URL: https://openai.com/index/travelers
Published: 2026-06-02T21:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, deploy
Travelers built an AI-powered Claim Assistant with OpenAI to guide customers through filing claims, provide 24/7 support, and scale operations during peak demand.
```

```text
Boston Children’s uses AI to unlock new diagnoses
URL: https://openai.com/index/boston-childrens-hospital
Published: 2026-05-29T21:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: ai
Boston Children’s Hospital uses OpenAI technology to improve patient care, reduce operational burden, and help diagnose more than 40 rare disease cases.
```

### AWS What's New
Source URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Final URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
AWS Step Functions adds AgentCore-powered agentic reasoning step
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-step-functions-agentcore/
Published: 2026-06-04T05:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 71
Signal tags: agent, agentcore, agentic, agents, ai, bedrock, workflow
AWS Step Functions now enables you to add AI agent reasoning steps to your workflow through an optimized integration with the managed harness (currently in preview) in Amazon Bedrock AgentCore. AWS Step Functions is a visual workflow service that orchestrates AWS services with built-in error handling, parallel execution, and human approval steps. The AgentCore harness lets you declare an agent through configuration where you specify the model, tools, and behavior. AgentCore provides the managed environment that runs the agent loop end-to-end. With this integration, you can automate reasoning tasks in your workflow such as classifying a document or extracting elements from an unstructured form. You can run multiple agents in parallel or in sequence at different decision points in a single workflow and add human approval before critical actions. The workflow execution history shows agent i
```

```text
AWS Config now supports 9 new resource types
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-config-new-resource-types
Published: 2026-06-04T00:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 58
Signal tags: agent, agentcore, ai, bedrock, eval, evaluation, rag, runtime
AWS Config now supports 9 additional AWS resource types across key services including Amazon Bedrock, Amazon Bedrock AgentCore, and Amazon SageMaker. This expansion provides greater coverage over your AWS environment, enabling you to more effectively discover, assess, audit, and remediate an even broader range of resources. With this launch, if you have enabled recording for all resource types, then AWS Config will automatically track these new additions. The newly supported resource types are also available in Config rules and Config aggregators. You can now use AWS Config to monitor the following newly supported resource types in all AWS Regions where the resources are available: Resource Types: AWS::Bedrock::FlowAlias AWS::BedrockAgentCore::Evaluator AWS::BedrockAgentCore::GatewayTarget AWS::BedrockAgentCore::OnlineEvaluationConfig AWS::BedrockAgentCore::RuntimeEndpoint AWS::SageMaker
```

```text
OpenAI GPT-5.4 generally available on Amazon Bedrock in AWS GovCloud (US-West)
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/GPT54-available-in-aws-govcloud-us-west/
Published: 2026-06-04T04:58:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 49
Signal tags: agent, agentic, ai, bedrock, inference, security
Amazon Bedrock now supports GPT‑5.4 from OpenAI in AWS GovCloud (US-West) — giving government and regulated industry customers access to OpenAI's most capable frontier model for professional work, backed by the enterprise-grade security and goverment compliance scope of AWS GovCloud (US). GPT‑5.4 supports native computer-use capabilities, and deep reasoning across coding, documents, and multi-step agentic tasks — all running on Bedrock's high-performance inference engine with isolated queues and durable state for fault-tolerant workloads. Your data stays in-partition and is never used to train models. For Regional availability of GPT-5.4 see the AWS Regions page . Read the launch blog to learn more, for documentation and a step-by-step walkthrough, see the Amazon Bedrock docs and the getting started blog .
```

```text
Amazon SageMaker AI launches multi-turn reinforcement learning for AI agent model customization
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/multi-turn-reinforcement-learning-on-sagemaker-ai/
Published: 2026-06-04T00:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 46
Signal tags: agent, agentic, agents, ai, serverless
Amazon SageMaker AI now offers multi-turn reinforcement learning (RL), a new serverless model customization technique for fine-tuning models on multi-step, agentic tasks. SageMaker AI model customization lets you adapt foundation models using techniques such as supervised fine-tuning, reinforcement learning from verifiable rewards (RLVR), and reinforcement learning from AI feedback (RLAIF), without the undifferentiated heavy lifting of building and operating your own training infrastructure. Multi-turn RL extends this by training models against your own agent environment and rewarding the full sequence of decisions an agent makes across a task, helping you specialize smaller, lower-cost models to match or exceed the task accuracy of larger general-purpose models on your target workload. Training models that power agents to reliably complete multi-step tasks is complex and time-consuming,
```

```text
Amazon SageMaker Data Agent now supports conversation history
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-data-agent/
Published: 2026-06-04T05:26:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 30
Signal tags: agent, ai, workflow, workflows
Amazon SageMaker Data Agent, available in SageMaker Unified Studio now supports conversation history, enabling data practitioners to maintain continuity across analytical sessions. Data analysts and data scientists can now seamlessly reference previous agent-generated code, resume multi-step analyses, and review past troubleshooting interactions within their notebooks and Query Editor workflows. With conversation history, you can pick up exactly where you left off by accessing a scrollable list of past conversations through the clock icon in the chat panel header. Each conversation includes auto-generated titles and timestamps for easy identification. Whether you're resuming complex multi-step analyses, reusing agent-generated code, or continuing troubleshooting from earlier notebook runs, conversation history keeps the context preserved. Data teams save time, eliminate rework, and move 
```

```text
Amazon SageMaker Unified Studio now supports notebook scheduling
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-unified-studio/
Published: 2026-06-04T05:13:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 22
Signal tags: ai, orchestration, workflow, workflows
Amazon SageMaker Unified Studio now enables you to schedule, parameterize, and orchestrate notebook runs directly from the notebook interface without managing external orchestration infrastructure. This makes it easier for customers to take notebooks from experimentation to production, automating recurring workloads such as daily reports, data quality checks, and model retraining. You can trigger on-demand background runs on dedicated compute without interrupting interactive sessions and create scheduled or recurring runs. With notebook parameterization, you can reuse a single notebook across different inputs, for example, generating shipping performance reports for multiple carriers, by defining parameters and overriding their values per schedule or on-demand run. You can also orchestrate multi-notebook workflows using the Notebook Operator in the Workflows tool, chaining notebooks so t
```

```text
ARC Region switch adds Amazon Aurora scaling and Amazon Neptune global database failover
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/region-switch-aurora-scaling-neptune-failover/
Published: 2026-06-04T02:44:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 18
Signal tags: ai, database, serverless
Amazon Application Recovery Controller (ARC) Region switch helps customers orchestrate the failover of their multi-Region applications to achieve a bounded recovery time in the event of a Regional impairment. Today, we are announcing three new execution blocks — the Amazon Aurora serverless scaling execution block, the Amazon Aurora provisioned scaling execution block, and the Amazon Neptune global database failover execution block — which automate database scaling and failover for multi-Region workloads. Customers running Amazon Aurora global database in active-passive configurations typically maintain a scaled-down secondary cluster to minimize cost. During failover, they must manually right-size and scale the secondary cluster to handle production traffic before routing requests — adding critical minutes to recovery time. The new Amazon Aurora serverless and Amazon Aurora provisioned 
```

```text
Amazon Keyspaces (for Apache Cassandra) now provides CDC iterator position
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/keyspaces-cdc-iterator-position/
Published: 2026-06-04T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 14
Signal tags: ai, database, serverless
Amazon Keyspaces (for Apache Cassandra) now returns an iterator position in the GetRecords response for change data capture (CDC) streams, indicating whether a consumer has reached the tip of the stream or whether additional records may be available. Amazon Keyspaces is a scalable, serverless, and managed Apache Cassandra-compatible database service that lets customers run Cassandra workloads on AWS without managing infrastructure. CDC streams capture row-level changes to Keyspaces tables so customers can integrate with downstream analytics, replication, and event-driven applications. Previously, customers polled CDC streams at a fixed cadence regardless of whether new records were available, leading to inefficient resource usage and unnecessary CDC consumption costs. With iterator position, customers can now adapt polling frequency based on whether the iterator is at the tip of the stre
```

```text
Amazon ECS Managed Instances now supports AWS Trainium and AWS Inferentia
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ecs-managed-instances-neuron
Published: 2026-06-04T00:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: ai, inference
Amazon Elastic Container Service ( Amazon ECS ) Managed Instances now supports AWS Trainium and AWS Inferentia , purpose-built AI accelerators designed to deliver scalable performance and cost efficiency for training and inference across a broad range of generative AI workloads. Amazon ECS Managed Instances is a fully managed compute option designed to eliminate infrastructure management overhead while giving you access to the full capabilities of Amazon EC2. By offloading infrastructure operations to AWS, ECS Managed Instances helps you quickly launch and scale your workloads, while enhancing performance and reducing your total cost of ownership. With ECS Managed Instances, you get the application performance you want and the simplicity you need. Now you can create an ECS Managed Instances capacity provider and select the desired accelerated instance types, including Inferentia2, Traini
```

```text
Amazon SageMaker Unified Studio now supports a localized experience in twelve languages
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/sagemaker-localization
Published: 2026-06-04T00:26:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 10
Signal tags: ai, browser
Amazon SageMaker Unified Studio enhanced its global accessibility by introducing support for twelve languages across the user interface. Supported languages include English (American), Chinese (Simplified and Traditional), French, German, Indonesian, Italian, Japanese, Korean, Portuguese (Brazilian), Spanish, and Turkish. With this launch, data engineers, analysts, and data scientists across global teams can navigate, build, and collaborate in the language they are most comfortable with, reducing friction and improving productivity. Your preferred language is automatically detected based on your browser’s default language settings. You can also set your preferred language by choosing ‘Language selector’ in your profile settings and selecting the language. The selected language applies across the entire SageMaker Unified Studio user interface. This feature is available in all AWS Regions 
```

```text
AWS Compute Optimizer now supports 32-day lookback for EBS volume and ECS service rightsizing recommendations
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-compute-optimizer-ebs-ecs-32-day-lookback/
Published: 2026-06-04T03:30:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 8
Signal tags: ai, database
AWS Compute Optimizer now lets you extend the lookback period of your Amazon EBS volume and Amazon ECS rightsizing recommendations from the default 14 days to 32 days, at no additional cost. A longer lookback period allows Compute Optimizer to account for monthly utilization patterns, such as month-end processing, when generating rightsizing recommendations. This can help you make better optimization decisions for your workload, leading to better cost and performance outcomes. AWS Compute Optimizer supports 32-day lookback periods for five types of recommendations: EC2 instance, EC2 Auto Scaling group, RDS database, EBS volume, and ECS service. You can set the lookback period at the organization, account, or resource level through the console, AWS SDK, or AWS CLI. This feature is available in all AWS Regions where AWS Compute Optimizer is available, except the AWS GovCloud (US) Regions a
```

```text
Amazon RDS for Db2 launches support for IBM Db2 v12.1 and Db2 Community Edition
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-rds-db2-v12-community-edition
Published: 2026-06-03T16:11:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 8
Signal tags: ai, database
Amazon RDS for Db2 now supports IBM Db2 v12.1. With Db2 v12.1, RDS now supports Db2 Standard, Db2 Advanced, and Db2 Community Edition. Db2 Community Edition provides all the features available in Standard and Advanced Editions, with no commercial software licensing charges for development and test applications. This allows you to easily start developing and testing Db2 applications with a managed database service without worrying about software licensing. To use Db2 Community Edition, get a free IBM Customer ID from the IBM website and create your database instances using the the Amazon RDS console . For details, see Amazon RDS for Db2 documentation . For information about new features included in Db2 12.1, visit IBM documentation. Amazon RDS for Db2 12.1 with support for Db2 Community Edition is available in all the AWS Regions where Amazon RDS for Db2 is currently available.
```

### AWS Machine Learning Blog
Source URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Final URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
Improve your agent’s tool-calling accuracy with SFT and DPO on Amazon SageMaker AI
URL: https://aws.amazon.com/blogs/machine-learning/improve-your-agents-tool-calling-accuracy-with-sft-and-dpo-on-amazon-sagemaker-ai/
Published: 2026-06-04T00:56:50+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 27
Signal tags: agent, ai, eval
In this post, you learn how to use Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) together to improve the tool-calling accuracy of a small language model (SLM). The example uses Amazon SageMaker AI training jobs, so you can focus on training code instead of managing your own training infrastructure. You also learn how to evaluate tool-calling accuracy and compare a base model to several fine-tuned variants, so you can make data-driven decisions about model quality.
```

```text
How to build self-driving AI operations on Amazon Bedrock at scale
URL: https://aws.amazon.com/blogs/machine-learning/how-to-build-self-driving-ai-operations-on-amazon-bedrock-at-scale/
Published: 2026-06-04T05:14:16+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 25
Signal tags: ai, bedrock, deploy, monitoring
In this post, we introduce Amazon Bedrock Ops Alert, a three-layer automated monitoring solution that proactively detects operational issues, dynamically adjusts alarm thresholds, classifies alarms by category, automatically creates context-aware support cases, helps prevent duplicate cases when an unresolved case of the same alarm category is already active, and delivers contextualized notifications to AI SRE teams. We walk through the solution architecture and how you can deploy it in your own environment.
```

```text
Fundamental’s Large Tabular Model NEXUS is now available on Amazon SageMaker JumpStart
URL: https://aws.amazon.com/blogs/machine-learning/fundamentals-large-tabular-model-nexus-is-now-available-on-amazon-sagemaker-jumpstart/
Published: 2026-06-04T02:55:37+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 10
Signal tags: ai, deploy
In this post, we show you how to get started with NEXUS on Amazon SageMaker JumpStart, walk through the deployment process, and demonstrate how to run predictions against your enterprise datasets.
```

```text
Reducing container cold start times using SOCI index on DLAMI and DLC
URL: https://aws.amazon.com/blogs/machine-learning/reducing-container-cold-start-times-using-soci-index-on-dlami-and-dlc/
Published: 2026-06-04T01:26:35+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
In this post, we look at how to use SOCI on publicly available Deep Learning AMIs and Containers, when to use the various SOCI modes provided by the tool, and how to quickly and efficiently use this tool in your workloads today.
```

```text
AgentOps: Operationalize agentic AI at scale with Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/agentops-operationalize-agentic-ai-at-scale-with-amazon-bedrock-agentcore/
Published: 2026-06-02T01:12:18+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 87
Signal tags: agent, agentcore, agentic, agents, ai, bedrock, deploy, workflow, workflows
When you build agentic AI solutions, you face unique operational challenges. Agents make unpredictable decisions, costs spiral unexpectedly, and debugging non-deterministic failures seems impossible. Agentic AI applications don't just execute predetermined workflows. They reason, adapt, and make autonomous decisions, and DevOps practices need to be adapted. That's where AgentOps comes in, the operational discipline for deploying, managing, and continuously improving AI agents in production.
```

```text
Extending MCP support for Amazon Bedrock AgentCore Gateway
URL: https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/
Published: 2026-06-02T03:35:03+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 76
Signal tags: agent, agentcore, ai, bedrock, deploy, mcp, observability, security
While deploying Model Context Protocol (MCP) servers in production, enterprises need fine-grained access control across servers, observability into which teams use which tools, security guarantees against data exfiltration, and centralized credential management, all at scale. Amazon Bedrock AgentCore Gateway sits between MCP servers and the clients that consume them, centralizing credential management, observability, and secure […]
```

```text
Secure AI agents with Policy and Lambda interceptors in Amazon Bedrock AgentCore gateway
URL: https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-policy-and-lambda-interceptors-in-amazon-bedrock-agentcore-gateway/
Published: 2026-06-02T02:54:22+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 67
Signal tags: agent, agentcore, agents, ai, bedrock, policy
In this post, we use a lakehouse data agent to demonstrate how you can use Policy for deterministic access control and Lambda interceptors for dynamic validation. We then show how to combine Lambda interceptors and Policy to implement a geography-based access control which requires both dynamic validation and deterministic access control.
```

```text
Enable safe agentic payments with built-in guardrails using Amazon Bedrock AgentCore payments
URL: https://aws.amazon.com/blogs/machine-learning/enable-safe-agentic-payments-with-built-in-guardrails-using-amazon-bedrock-agentcore-payments/
Published: 2026-06-02T02:30:12+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 60
Signal tags: agent, agentcore, agentic, ai, bedrock
In this post, we address several key risks that surface when designing an agentic payment system, and how to address them with the capabilities of AgentCore payments.
```

```text
OpenAI models and Codex on Amazon Bedrock are now generally available
URL: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
Published: 2026-06-02T06:31:12+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 60
Signal tags: agent, agents, ai, bedrock, codex, deploy, inference
GPT-5.5, GPT-5.4, and Codex are now generally available on Amazon Bedrock. Deploy them in production applications and agents today, on Bedrock’s high performance inference engine.
```

```text
Building a secure auth code flow setup using AgentCore Gateway with MCP clients
URL: https://aws.amazon.com/blogs/machine-learning/building-a-secure-auth-code-flow-setup-using-agentcore-gateway-with-mcp-clients/
Published: 2026-06-02T12:23:35+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: agent, agentcore, ai, bedrock, identity, mcp
This post demonstrates how to implement Open Authorization (OAuth) Code flow as an inbound authorization mechanism for MCP servers hosted on Amazon Bedrock AgentCore Gateway. By the end of this guide, you will have a production-ready setup where each AI assistant request is authenticated with a valid user identity token issued from your organization’s identity provider.
```

```text
Reference your own AWS Secrets Manager secrets in Amazon Bedrock AgentCore Identity
URL: https://aws.amazon.com/blogs/machine-learning/reference-your-own-aws-secrets-manager-secrets-in-amazon-bedrock-agentcore-identity/
Published: 2026-06-02T07:16:28+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: agent, agentcore, ai, bedrock, governance, identity
Today, we’re excited to announce the ability to reference a secret in AWS Secrets Manager for AgentCore Identity, so you can reference your own preconfigured secret from Secrets Manager and retain full control over how it is managed. With this ability, you can extend your organization’s existing secrets governance processes to AgentCore. You can provide an existing, preconfigured AWS Secrets Manager secret to use with your credential provider resources. You retain full control over its encryption configuration, rotation, replication, tags, and resource policies, just as you would manage other secrets in Secrets Manager. You can also choose a secret from another AWS account within the same AWS Region, though cross-Region secret sharing isn’t supported. This also supports secrets brought in through AWS Secrets Manager external connectors, enabling integration with third-party secret manage
```

```text
How Baz improved its AI Agent Code Review accuracy using Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/how-baz-improved-its-ai-agent-code-review-accuracy-using-amazon-bedrock-agentcore/
Published: 2026-06-03T00:45:11+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 52
Signal tags: agent, agentcore, ai, bedrock, rag
This post walks through how Baz built their Spec Review agent using Amazon Bedrock and Amazon Bedrock AgentCore. We'll cover the architecture decisions, implementation details, and the business outcomes they achieved by leveraging these AWS services to automate their code review process
```

### Google Developers Blog
Source URL: `https://developers.googleblog.com/feeds/posts/default?alt=rss`
Final URL: `https://developers.googleblog.com/feeds/posts/default/?alt=rss`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Bringing Gemma 4 12B to your Laptop: Unlocking Local, Agentic Workflows with Google AI Edge
URL: https://developers.googleblog.com/bringing-gemma-4-12b-to-your-laptop-unlocking-local-agentic-workflows-with-google-ai-edge/
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 70
Signal tags: agent, agentic, agents, ai, rag, workflow, workflows
Google DeepMind’s Gemma 4 12B model brings agentic, multimodal AI capabilities to everyday laptops with 16GB of RAM, enabling local data processing and visual insight generation. Users can leverage this model on macOS through the Google AI Edge Gallery for dynamic Python code execution and visualization, as well as via Google AI Edge Eloquent for completely offline voice dictation and text editing. Additionally, developer workflows are enhanced by the LiteRT-LM CLI's new serve command, which creates an industry-compatible local endpoint to power fully-local AI tools and agents.
```

```text
Gemma 4 12B: The Developer Guide
URL: https://developers.googleblog.com/gemma-4-12b-the-developer-guide/
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai, release
The newly released Gemma 4 12B is a dense, multimodal model designed for high-performance local AI execution on consumer devices. By introducing a novel, encoder-free architecture, it bypasses traditional visual and audio encoders to feed multimodal data directly into the LLM backbone.
```

```text
Blazing fast on-device GenAI with LiteRT-LM
URL: https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 68
Signal tags: agent, agentic, ai, browser, gpu, inference, memory, orchestration, serverless
Google AI Edge’s LiteRT-LM provides a production-proven, highly optimized infrastructure for running Gemma 4 across cross-platform mobile and edge environments. It actively unlocks the model's native multimodal and agentic features on-device by utilizing memory-efficient dynamic loading, Multi-Token Prediction for up to a 2.2x speedup, and advanced orchestration tools like Thinking Mode and Constrained Decoding. Furthermore, the engine is rapidly expanding its integration surfaces beyond Android, introducing new native Swift APIs for Apple ecosystems and WebGPU-accelerated JavaScript APIs for high-performance, serverless browser inference.
```

```text
All the news from the Google I/O 2026 Developer keynote
URL: https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 53
Signal tags: agent, agents, ai, browser, eval, evaluation, mcp
Google announced the transition from assistive AI to independent agents, highlighting the launch of the Gemini 3.5 series and major updates to its Antigravity agent-first development platform. For mobile developers, the post introduces new Android CLI tools, the Android Bench evaluation leaderboard, and an automated Migration agent designed to rapidly convert various frameworks into native Kotlin code. Web development is also being transformed through Chrome DevTools for agents, the HTML-in-Canvas API, and the proposal of WebMCP, an open web standard that enables browser-based AI agents to execute complex tasks.
```

```text
A Smarter Google AI Edge Gallery: MCP integration, notifications, and session continuity
URL: https://developers.googleblog.com/a-smarter-google-ai-edge-gallery-mcp-integration-notifications-and-session-continuity/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: ai, github, mcp, rag, skill, workflow, workflows
The Google AI Edge Gallery app has expanded its on-device AI capabilities by introducing experimental support for the open-source Model Context Protocol (MCP) on Android, allowing Gemma 4 to coordinate complex tasks across external data sources like Google Workspace and Google Maps. To enable more proactive and persistent user interactions, the update adds a "Schedule Notification" skill for automating routines and a persistent chat history feature that restores long session contexts nearly instantly. Driven by an open-source toolkit, the platform encourages community developers to build and share custom utility-focused workflows, prompt configurations, and tool integrations via its GitHub repository.
```

```text
Announcing ADK for Kotlin and ADK for Android 0.1.0: Building AI Agents on Android and Beyond
URL: https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: agent, agents, ai, orchestration, release
Google has announced the launch of version 0.1.0 of the Agent Development Kit (ADK) for Kotlin, alongside a specialized ADK library for Android. This open-source framework simplifies the creation of AI agents by managing complex orchestration, session sharing, and error handling across cloud and edge environments. The release supports hybrid orchestration, enabling developers to build multi-agent systems where a cloud-based model can seamlessly offload specific tasks to local, on-device models like Gemini Nano to enhance user privacy.
```

```text
The latest updates to Google Pay
URL: https://developers.googleblog.com/the-latest-updates-to-google-pay/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 42
Signal tags: agent, agentic, agents, ai, mcp
Google Pay is evolving for "agentic commerce" by introducing the Universal Commerce Protocol and a new MCP server that allows AI agents to manage integrations and analyze trends. New Android updates introduce dynamic callbacks for seamless express checkouts and extend payment support into social media apps via WebViews. Additionally, the platform is launching cross-device biometric authentication and new transaction signals to help merchants reduce friction and optimize processing costs.
```

```text
Supercharge your integration workflow with the Google Pay & Wallet Developer MCP server
URL: https://developers.googleblog.com/supercharge-your-integration-workflow-with-the-google-pay-wallet-developer-mcp-server/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 31
Signal tags: ai, mcp, workflow, workflows
Google has announced the new Google Pay & Wallet Developer MCP server, an open-standard tool designed to securely connect AI development assistants and IDEs with real-time API and account context. The server allows developers to remain within their development environment to search official documentation, validate Wallet pass definitions, check integration status, and manage merchant accounts. Ultimately, this integration aims to reduce friction and accelerate development workflows by minimizing context switching and providing up-to-date, grounded AI support.
```

```text
An important update: Transitioning Gemini CLI to Antigravity CLI
URL: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: agent, ai, terminal, workflow, workflows
Google is unifying its AI terminal tools by transitioning the community-focused Gemini CLI into Antigravity CLI, a new agent-first platform built for complex, multi-agent workflows. This new Go-based tool offers faster execution, asynchronous processing, and a unified architecture that syncs with the Antigravity 2.0 desktop application. While enterprise customers will maintain existing access, individual and free users must transition to the new platform before Gemini CLI stops serving requests on June 18, 2026.
```

```text
One Year of Innovation: Celebrating 100k Members in the Google Cloud x NVIDIA Developer Community
URL: https://developers.googleblog.com/one-year-of-innovation-celebrating-100k-members-in-the-google-cloud-x-nvidia-developer-community/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 26
Signal tags: agent, agentic, ai, gpu
The Google Cloud and NVIDIA developer community is celebrating its first anniversary with 100,000 members and a renewed focus on providing builders with advanced AI infrastructure and resources. To accelerate development, the community offers curated learning pathways for mastering LLM optimization, GPU-accelerated data analytics, and monthly expert-led webinars. Moving into its second year, the initiative will expand to include hands-on labs, engineering events, and specialized content focused on the growth of agentic AI.
```

```text
Google Tensor SDK Beta with LiteRT
URL: https://developers.googleblog.com/google-tensor-sdk-beta-with-litert/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: ai, deploy, tpu, workflow
The Google Tensor ML SDK is graduating to its Beta phase, allowing developers to build and deploy high-performance machine learning models directly onto the TPU of Google Pixel 10 devices. By integrating with LiteRT, Google's edge deployment framework, the SDK provides a unified workflow for developers to convert, compile, and run PyTorch or TFLite models with robust fallback options. Additionally, a new model garden offers over 100 classic and generative AI models, including Gemma 3, enabling low-latency, private features like speech recognition, computer vision, and text generation.
```

```text
Accelerating on-device AI: A look at Arm and Google AI Edge optimization
URL: https://developers.googleblog.com/accelerating-on-device-ai-a-look-at-arm-and-google-ai-edge-optimization/
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: ai, deploy, memory
Integration of Arm Scalable Matrix Extension 2 (SME2) and the Google AI Edge software stack enables high-performance, on-device generative AI by turning the CPU into a powerful matrix-compute accelerator. Using Stability AI’s "stable-audio-open-small" model as a case study, it outlines a streamlined "Convert, Optimize, and Deploy" pipeline that utilizes LiteRT, XNNPACK, and KleidiAI to automate hardware acceleration. The resulting implementation achieves over a 2x speedup in audio generation and a 4x reduction in memory usage while maintaining high audio quality on Arm-powered mobile devices and laptops.
```

### Google Cloud Blog
Source URL: `https://cloudblog.withgoogle.com/rss/`
Final URL: `https://cloudblog.withgoogle.com/rss/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Connecting AI agents with unstructured data using Google Cloud Storage MCP Servers
URL: https://cloud.google.com/blog/topics/developers-practitioners/build-ai-agents-faster-with-gcs-google-cloud-storage-mcp-server/
Published: 2026-06-03T02:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 85
Signal tags: agent, agentic, agents, ai, deploy, mcp, rag, workflow, workflows
Google Cloud Storage (GCS) is a foundational component of the modern agentic tech stack and the preferred home for unstructured data at scale. As enterprises deploy agents in production, the critical focus has shifted to turning data into context and building secure, standardized integrations to access context. This is the core of smart storage: making unstructured data inherently agent-ready by turning passive objects into rich context for reasoning. Whether it’s automating complex financial workflows or diagnosing system failures in seconds, AI success now depends on how seamlessly agents can leverage this intelligence to make smart, high-stakes decisions. In this blog, we will share three examples of agents built by customers using GCS, and then share how you can securely and reliably connect your agents to GCS using Model Context Protocol (MCP). Combined with smart storage features l
```

```text
The fully-managed Remote MCP Server for AlloyDB is now Generally Available
URL: https://cloud.google.com/blog/products/data-analytics/alloydb-remote-mcp-server-ga-secure-ai-agent-access-to-your-data/
Published: 2026-06-02T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 53
Signal tags: agent, agentic, agents, ai, database, mcp
AI agents possess incredible reasoning capabilities and can perform increasingly complex actions. But the reliability of agentic outcomes depends entirely on the quality of the context they can access — context that is frequently locked away in operational databases. To bridge this gap, we are excited to announce the Remote Model Context Protocol (MCP) Server for AlloyDB is now generally available. The Model Context Protocol (MCP) is an open-source standard that gives LLMs a secure, consistent way to connect to external data sources. As part of Google Cloud’s recent rollout of 50+ Google-managed MCP servers , this new integration makes it easier than ever for both interactive and autonomous agents to securely harness the full power of your enterprise data. For example, you can now ask an AI agent for an up-to-the-millisecond view of your delivery fleet by connecting it to your real-time 
```

```text
What’s new in serverless Managed Service for Apache Spark
URL: https://cloud.google.com/blog/products/data-analytics/serverless-managed-service-for-apache-spark-runtime-3-0-features/
Published: 2026-06-04T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 46
Signal tags: ai, gpu, rag, runtime, serverless, workflow, workflows
Whether you use it for data preparation, real-time interactive queries, AI model training, or something entirely different, running Apache Spark at scale is demanding — you shouldn’t have to manage the underlying infrastructure too. Late last year, we announced the general availability (GA) of our serverless Managed Service for Apache Spark runtime version 3.0, prioritizing speed, simplicity, and reliability. Since then, customer use of Managed Service for Apache Spark for data science has nearly doubled year over year. This is a testament to our belief that using Google Cloud is the easier, smarter, and faster place to run your Apache Spark workloads. In this blog, let’s dive into a few key features that make our serverless Apache Spark offering a great fit for a wide range of workflows, including feature engineering, GPU-accelerated model training and tuning, semantic search, RAG, buil
```

```text
Experimenting with TPUs, GKE Managed DRANET, and Multi-cluster Inference Gateway
URL: https://cloud.google.com/blog/topics/developers-practitioners/experimenting-with-tpus-gke-managed-dranet-and-multi-cluster-inference-gateway/
Published: 2026-06-02T16:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 45
Signal tags: ai, gpu, inference, kubernetes, rag, tpu
What happens when your workload fails in one region but you need access to service? This is a common case for availability and uptime. With recent enhancement to the Kubernetes ecosystem and capabilities like Dynamic Resource Allocation (DRA) and Inference Gateway. I decided to experiment with these capabilities in Google Cloud for a simple test using an AI inference workload. In this blog, we will explore this setup and you can also jump straight into the detailed configs in this codelab Build multi-cluster GKE Inference Gateway, with TPUs , Cloud Storage FUSE and managed DRANET. Building blocks To build out this experiment, use the following products, features, and tools: Google Kubernetes Engine (GKE) managed DRANET : This is a managed feature that lets you request and share resources among Pods. This supports GPUs , and TPUs . In this test TPUs were used in two different regions with
```

```text
What’s new with Google Cloud
URL: https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 42
Signal tags: agent, agentic, ai, orchestration, workflow, workflows
Want to know the latest from Google Cloud? Find it here in one handy location. Check back regularly for our newest updates, announcements, resources, events, learning opportunities, and more. Tip : Not sure where to find what you’re looking for on the Google Cloud blog? Start here: Google Cloud blog 101: Full list of topics, links, and resources . aside_block May 25 - May 29 Anthropic’s Claude Opus 4.8 is now available on Gemini Enterprise Agent Platform . As we continue to expand our platform's model offerings, this addition gives organizations more options for handling complex, multi-stage enterprise workflows. Claude Opus 4.8 brings strong capabilities in agentic coding, allowing developers to manage extensive refactors and tracking dependencies over extended sessions. API Horizon Munich July 6, 2026: Orchestrating the Next Era of AI and APIs Master the orchestration of next-gen AI an
```

```text
Cool stuff Google Cloud customers built, May edition: Agentic algorithms for supply chains; virtual try-on APIs; robotic camera operators & more
URL: https://cloud.google.com/blog/topics/customers/cool-stuff-google-cloud-customers-built-monthly-round-up/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 35
Signal tags: agent, agentic, ai
AI and cloud technology are reshaping every corner of every industry around the world. Without our customers, who are building the future on our platform, there would be no Google Cloud. In this regular round-up , we dive into some of the exciting projects redefining businesses, shaping industries, and creating new categories. For our latest edition, we learn how Urban Outfitters sped up its order management; BASF uses AlphaEvolve algorithms to map global supply chains; the unification strategy for UKG ’s workforce intelligence; WPP ’s secrets to training humanoid robot camera operators; how Breuninger piloted Virtual Try-On APIs; creating automated video clips with Glance ; and Movix improves the production of dental aligners. Be sure to check back next month to see how more industry leaders and exciting startups are putting Google Cloud technologies to use. And if you haven’t already, 
```

```text
AlloyDB Hot Standby: Faster failovers, consistent performance
URL: https://cloud.google.com/blog/products/databases/alloydb-hot-standby-faster-failovers-and-consistent-performance/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 22
Signal tags: ai, database, postgres, rag
AlloyDB for PostgreSQL is a fully managed, PostgreSQL-compatible database service designed for the most demanding enterprise workloads. It combines the best of PostgreSQL with the power of Google, delivering exceptional performance, scalability, and availability. We are continuously innovating to make AlloyDB even more resilient, and today, we're excited to announce a significant upgrade to our High Availability (HA) architecture: Hot Standby . Understanding AlloyDB HA Architecture An AlloyDB primary instance configured for high availability consists of an active node and a standby node, located in different zones within a region for resilience. AlloyDB's cloud-native architecture separates compute and storage to allow for individual scaling of each resource. Database write-ahead logs (WAL) are synchronously written to a regional log persistor, ensuring durability, while data blocks resi
```

```text
Developer's guide to Gemini Enterprise and A2UI integration
URL: https://cloud.google.com/blog/topics/developers-practitioners/guide-to-gemini-enterprise-and-a2ui-integration/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 20
Signal tags: agent, agents
If you've built a chatbot, you know this conversation: User: "Book a table for two tomorrow at 7pm." Agent: "Okay, for what day?" User: "Tomorrow." Agent: "What time?" A date picker would have ended this in one tap. But until recently, agents had no standard way to render a date picker — or a map, or a multi-select list — inside the chat surface they live in. They could only return text or markdown for generic usage. Today, we're walking through how to fix that with A2UI , an open protocol for agent-driven user interfaces, and how to integrate an A2UI-enabled agent with Gemini Enterprise (GE) so your agent renders rich and interactive UI natively in the GE chat surface — and in your own custom frontend if you want one. We'll use a working restaurant-finder agent — built with the Google Agent Development Kit (ADK), the A2A protocol, and Gemini — as the reference. The full source is on Git
```

```text
Accelerating data lakes: Optimizing Apache Iceberg and Spark with gcs-analytics-core
URL: https://cloud.google.com/blog/products/data-analytics/optimize-iceberg-and-spark-workloads-with-gcs-analytics-core/
Published: 2026-06-03T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 17
Signal tags: ai, rag, runtime
Many data engineers spend significant time managing compatibility and getting best performance across multiple analytics engines. To help solve this pain point, we are excited to announce gcs-analytics-core , a new open-source Java library designed to centralize and accelerate analytics optimizations for Google Cloud Storage (GCS) . With this, you get the flexibility to select your preferred analytics engine while achieving high performance on GCS. The gcs-analytics-core library provides optimizations across various analytics engines that you use today on GCS, like the Iceberg Spark engine and plan to expand to other analytics engines by the end of this year. Built to be shared across major data processing frameworks like Apache Spark, this library consolidates and improves performance for analytics workloads on GCS. Available natively in the Apache Iceberg Java runtime starting from ver
```

```text
From petabytes to predictions: Easy BigQuery insights in Google Sheets
URL: https://cloud.google.com/blog/products/data-analytics/using-connected-sheets-to-analyze-bigquery-data/
Published: 2026-05-30T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 14
Signal tags: governance, security
Many organizations’ single source of truth is data that resides in BigQuery, Google’s governed, secure and petabyte-scale data platform. However, the "last mile" of ad-hoc analysis, modeling, and reporting often happens where business users are most comfortable: Google Sheets. Bridging this gap usually involves exporting data as CSVs. But this is inefficient, creating data silos, version control problems, and security and governance risks. Connected Sheets helps to eliminate this trade-off, turning the familiar Google Sheets interface into a direct, live window into your BigQuery data platform, letting you analyze petabytes of data quickly, securely, and easily. In this post, we’ll do a quick overview of Connected Sheets, walk through real-world use cases, and show you how to perform enterprise-grade data analysis using BigQuery directly in Google Sheets. A live window into the single so
```

```text
Announcing Spanner Graph algorithms: Google-grade intelligence for connected data
URL: https://cloud.google.com/blog/products/databases/introducing-spanner-graph-algorithms/
Published: 2026-06-03T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: database, rag
At Google Cloud Next, we announced the preview of graph algorithms with Spanner Graph , bringing Google Research’s state-of-the-art graph mining capabilities natively to your database. These graph intelligence capabilities can help you derive valuable insights from graph data faster, cheaper, and at scale. Enterprises are increasingly leveraging graph technologies to uncover complex relationships in data for use cases such as fraud detection, social network analysis, entity resolution, and healthcare research. Graph algorithms, such as node centrality and community detection, are the computational methods used to analyze these structures, and work by quantifying the patterns and strength of connections between entities. However, running graph algorithms at scale has historically been challenging and resource-intensive, often requiring complex ETL pipelines to dedicated analytic solutions
```

```text
Introducing the GKE standby buffer: Improve node startup times without blowing your budget
URL: https://cloud.google.com/blog/products/containers-kubernetes/gke-standby-buffers-speed-up-autoscaling-for-less-spend/
Published: 2026-06-02T01:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 10
Signal tags: ai, kubernetes
Application owners and platform engineers have long faced a difficult choice: spend excessively by over-provisioning to guarantee quick startups, or minimize costs but endure slow cold starts. We are excited to announce a solution to this compromise: Google Kubernetes Engine standby buffers. This builds on the launch of GKE active buffers earlier this year, a native version of the Kubernetes CapacityBuffers API that makes it easy to provision readily available capacity to handle traffic spikes, delivering near-zero startup latency for new pods. However, active buffers still impose a trade-off between performance and cost. New GKE standby buffers help by maintaining a low-cost, suspended capacity buffer for your GKE clusters. With a cost overhead in the low single-digit percent, GKE standby buffers help you achieve near-immediate scheduling for your workloads with negligible cost overhead
```

### GitHub Changelog
Source URL: `https://github.blog/changelog/feed/`
Final URL: `https://github.blog/changelog/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
GitHub Copilot in Visual Studio Code, May releases
URL: https://github.blog/changelog/2026-06-03-github-copilot-in-visual-studio-code-may-releases
Published: 2026-06-03T22:30:58+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 45
Signal tags: agent, agents, changelog, copilot, github, release
VS Code continues with weekly stable releases. This changelog covers releases v1.120 through v1.123, the releases we shipped throughout May and early June 2026. In May, we made the Agents… The post GitHub Copilot in Visual Studio Code, May releases appeared first on The GitHub Blog .
```

```text
Introducing Copilot CLI and agentic capabilities enhancements in JetBrains IDEs
URL: https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides
Published: 2026-06-03T01:30:40+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 54
Signal tags: agent, agentic, ai, changelog, copilot, github
With Copilot CLI now available in GitHub Copilot for JetBrains IDEs, this update centers on new capabilities for Copilot CLI sessions, while also delivering a broader set of agentic improvements.… The post Introducing Copilot CLI and agentic capabilities enhancements in JetBrains IDEs appeared first on The GitHub Blog .
```

```text
Shape Copilot code review around your team
URL: https://github.blog/changelog/2026-06-02-shape-copilot-code-review-around-your-team
Published: 2026-06-03T02:22:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 52
Signal tags: agent, changelog, copilot, github, mcp, skill, skills
Copilot code review adapts to your team’s tools and standards and scales its depth to the complexity of each change. Today we’re shipping two public previews: Agent skills and MCP… The post Shape Copilot code review around your team appeared first on The GitHub Blog .
```

```text
Copilot SDK is now generally available
URL: https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available
Published: 2026-06-03T02:30:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: agent, agentic, ai, changelog, copilot, github
The GitHub Copilot SDK is now generally available. You can embed GitHub Copilot’s agentic engine into your own applications, services, and developer tools with a stable API and production-ready support.… The post Copilot SDK is now generally available appeared first on The GitHub Blog .
```

```text
Cloud and local sandboxes for GitHub Copilot now in public preview
URL: https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview
Published: 2026-06-03T02:25:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 33
Signal tags: changelog, copilot, github, sandbox
GitHub Copilot can now run inside secure, isolated sandboxes, both locally on your machine and in the cloud. Sandboxed Copilot experiences provide isolated environments for Copilot’s tool execution locally as… The post Cloud and local sandboxes for GitHub Copilot now in public preview appeared first on The GitHub Blog .
```

```text
Extend GitHub with agent apps
URL: https://github.blog/changelog/2026-06-02-extend-github-with-agent-apps
Published: 2026-06-03T02:20:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 32
Signal tags: agent, agents, ai, changelog, github
Agent apps are AI agents from GitHub partners, installable from the GitHub Marketplace, and integrated directly into GitHub. You install an agent app just like any other GitHub App from… The post Extend GitHub with agent apps appeared first on The GitHub Blog .
```

```text
GitHub Copilot code review for Azure Repos is now in technical preview
URL: https://github.blog/changelog/2026-06-02-github-copilot-code-review-for-azure-repos-is-now-in-technical-preview
Published: 2026-06-03T02:22:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 30
Signal tags: ai, changelog, copilot, github, workflow
GitHub Copilot code review for Azure Repos is now available in technical preview, bringing on demand pull request reviews directly into your Azure DevOps workflow. How it works Once enabled… The post GitHub Copilot code review for Azure Repos is now in technical preview appeared first on The GitHub Blog .
```

```text
Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input
URL: https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input
Published: 2026-06-03T02:27:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 26
Signal tags: ai, changelog, copilot, github, terminal
GitHub Copilot CLI is getting a major refresh at Microsoft Build 2026. Rubber duck and voice input are generally available today, and both prompt scheduling and a new experimental terminal… The post Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input appeared first on The GitHub Blog .
```

```text
Expanded technical preview availability for the GitHub Copilot app
URL: https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app
Published: 2026-06-03T02:36:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 26
Signal tags: ai, changelog, copilot, github
The GitHub Copilot app technical preview is now available to all existing Copilot Pro, Pro+, Business, and Enterprise customers. Download the Copilot app for Windows, macOS, or Linux to get… The post Expanded technical preview availability for the GitHub Copilot app appeared first on The GitHub Blog .
```

```text
GPT-4.1 deprecated
URL: https://github.blog/changelog/2026-06-02-gpt-4-1-deprecated
Published: 2026-06-03T08:58:52+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 25
Signal tags: agent, changelog, copilot, github
We have deprecated GPT-4.1 across all GitHub Copilot experiences (including Copilot Chat, inline edits, ask and agent modes, and code completions), June 1, 2026. Model Deprecation date Suggested alternative GPT-4.1… The post GPT-4.1 deprecated appeared first on The GitHub Blog .
```

### GitHub Engineering Blog
Source URL: `https://github.blog/engineering/feed/`
Final URL: `https://github.blog/engineering/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Agent-driven development in Copilot Applied Science
URL: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
Published: 2026-04-01T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 42
Signal tags: agent, agents, copilot, github
I used coding agents to build agents that automated part of my job. Here's what I learned about working better with coding agents. The post Agent-driven development in Copilot Applied Science appeared first on The GitHub Blog .
```

```text
From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner
URL: https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/
Published: 2026-01-29T02:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: copilot, github, terminal
Learn how GitHub built an accessible, multi-terminal-safe ASCII animation for the Copilot CLI using custom tooling, ANSI color roles, and advanced terminal engineering. The post From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner appeared first on The GitHub Blog .
```

```text
Post-quantum security for SSH access on GitHub
URL: https://github.blog/engineering/platform-security/post-quantum-security-for-ssh-access-on-github/
Published: 2025-09-16T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: github, security
GitHub is introducing post-quantum secure key exchange methods for SSH access to better protect Git data in transit. The post Post-quantum security for SSH access on GitHub appeared first on The GitHub Blog .
```

```text
How GitHub uses eBPF to improve deployment safety
URL: https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/
Published: 2026-04-17T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 14
Signal tags: deploy, github
Learn how Github uses eBPF to detect and prevent circular dependencies in its deployment tooling. The post How GitHub uses eBPF to improve deployment safety appeared first on The GitHub Blog .
```

```text
When protections outlive their purpose: A lesson on managing defense systems at scale
URL: https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/
Published: 2026-01-16T05:54:32+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 13
Signal tags: github, observability
User feedback led us to clean up outdated mitigations. See why observability and lifecycle management are critical for defense systems. The post When protections outlive their purpose: A lesson on managing defense systems at scale appeared first on The GitHub Blog .
```

```text
Continuous AI for accessibility: How GitHub transforms feedback into inclusion
URL: https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
Published: 2026-03-13T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, github
AI automates triage for accessibility feedback, allowing us to focus on fixing barriers—turning a chaotic backlog into continuous, rapid resolutions. The post Continuous AI for accessibility: How GitHub transforms feedback into inclusion appeared first on The GitHub Blog .
```

```text
How we rebuilt the search architecture for high availability in GitHub Enterprise Server
URL: https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/
Published: 2026-03-04T03:45:09+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, github
Here's how we made the search experience better, faster, and more resilient for GHES customers. The post How we rebuilt the search architecture for high availability in GitHub Enterprise Server appeared first on The GitHub Blog .
```

```text
From latency to instant: Modernizing GitHub Issues navigation performance
URL: https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/
Published: 2026-05-15T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
How the GitHub Issues team used client-side caching, smart prefetching, and service workers to make navigation feel instant. The post From latency to instant: Modernizing GitHub Issues navigation performance appeared first on The GitHub Blog .
```

```text
How GitHub engineers tackle platform problems
URL: https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/
Published: 2025-06-11T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: github
Our best practices for quickly identifying, resolving, and preventing issues at scale. The post How GitHub engineers tackle platform problems appeared first on The GitHub Blog .
```

```text
The uphill climb of making diff lines performant
URL: https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
Published: 2026-04-04T01:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: github
The path to better performance is often found in simplicity. The post The uphill climb of making diff lines performant appeared first on The GitHub Blog .
```

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
Final URL: `https://blog.cloudflare.com/rss/`
Status/content: `200` / `application/xml`

```text
Enforcing the First AS in BGP AS_PATHs
URL: https://blog.cloudflare.com/enforce-first-as-bgp/
Published: 2026-06-04T02:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
BGP is vulnerable to routing hijacks and path leaks that negatively impact traffic on the Internet. RPKI helps solve some of these problems, but for some forged paths, we need to rely on a simpler mechanism: First AS enforcement in BGP.
```

```text
Announcing Claude Managed Agents on Cloudflare
URL: https://blog.cloudflare.com/claude-managed-agents/
Published: 2026-05-19T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: agent, agents, runtime, workflow, workflows
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
```

```text
How we built Cloudflare's data platform and an AI agent on top of it
URL: https://blog.cloudflare.com/our-unified-data-platform/
Published: 2026-05-28T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, ai
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
```

```text
Introducing Dynamic Workflows: durable execution that follows the tenant
URL: https://blog.cloudflare.com/dynamic-workflows/
Published: 2026-05-01T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: workflow, workflows
Dynamic Workflows is a library that lets you route durable execution to tenant-provided code on the fly. Built on Dynamic Workers, it enables platforms to serve millions of unique workflows at near-zero idle cost.
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
URL: https://blog.cloudflare.com/browser-run-containers/
Published: 2026-05-13T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: ai, browser
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
```

```text
Code Orange: Fail Small is complete. The result is a stronger Cloudflare network
URL: https://blog.cloudflare.com/code-orange-fail-small-complete/
Published: 2026-05-02T06:07:30+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 14
Signal tags: ai, codex
We have completed a massive engineering effort to make our infrastructure more resilient. Through new tools like Snapstone and the Engineering Codex, we've implemented safer configuration changes and automated best practices to prevent future incidents.
```

```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Published: 2026-05-07T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, security
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
```

```text
Announcing Claude Compliance API support with Cloudflare CASB
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Published: 2026-05-22T02:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: security
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
```

```text
Project Glasswing: what Mythos showed us
URL: https://blog.cloudflare.com/cyber-frontier-models/
Published: 2026-05-18T15:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: security
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
```

```text
How we reduced core unit boot time from hours to minutes
URL: https://blog.cloudflare.com/optimizing-core-unit-boot-time/
Published: 2026-06-02T01:53:39+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 6
Signal tags: automation
We investigated why firmware updates were causing our core servers to take four hours to reboot. By diving into UEFI data structures and iPXE automation, we eliminated unnecessary timeouts and cut boot times back down to minutes.
```

```text
Building for the future
URL: https://blog.cloudflare.com/building-for-the-future/
Published: 2026-05-08T05:15:12+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
Signal tags: ai
This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency, and we believe it's important that you hear this directly from us because it’s a major moment at Cloudflare.
```

```text
When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug
URL: https://blog.cloudflare.com/quic-death-spiral-fix/
Published: 2026-05-12T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
Signal tags: ai
We investigated a bug where CUBIC's congestion window became pinned at its minimum floor, causing a performance to plummet. The fix involved correctly measuring idle periods to distinguish RTT wait times from actual application idleness.
```

### Docker Blog
Source URL: `https://www.docker.com/blog/feed/`
Final URL: `https://www.docker.com/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Published: 2026-05-26T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 63
Signal tags: agent, agents, ai, claude code, deploy, skill, skills
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
```

```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-security-crisis-threatening-developer-infrastructure/
Published: 2026-05-18T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 56
Signal tags: agent, agentic, agents, ai, sandbox, security
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
```

```text
How to Secure AI Agents: A Practical Overview for Development Teams
URL: https://www.docker.com/blog/how-to-secure-ai-agents/
Published: 2026-06-03T01:11:02+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 52
Signal tags: agent, agentic, agents, ai, security
In our State of Agentic AI report, 45% of organizations said they struggle to ensure the tools their agents use are secure and enterprise-ready. That number reflects a broader reality: AI agents are moving into production faster than the security practices around them are maturing. The challenge is not that organizations lack security awareness. It’s...
```

```text
Docker AI Governance: Unlock Agent Autonomy, Safely
URL: https://www.docker.com/blog/docker-ai-governance-unlock-agent-autonomy-safely/
Published: 2026-05-13T03:00:09+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 49
Signal tags: agent, agents, ai, governance, mcp
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call, so every developer in your company can run AI agents safely, wherever they work. Your laptop is the new prod Agents are the biggest productivity unlock...
```

```text
What is Sandbox Security?
URL: https://www.docker.com/blog/what-is-sandbox-security/
Published: 2026-06-02T00:51:31+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 45
Signal tags: agent, agentic, ai, sandbox, security
If you're already familiar with sandboxing as an isolation technique, sandbox security is the next layer: the policies, controls, and enforcement mechanisms that make sure those isolation boundaries actually hold under real-world pressure. According to our State of Agentic AI report, 40% of respondents cite security as the top challenge in scaling agentic AI, and...
```

```text
Coding Agent Horror Stories: The rm -rf ~/ Incident
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
Published: 2026-06-01T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 43
Signal tags: agent, agents, ai, sandbox, security
This is Part 2 of our AI Coding Agent Horror Stories series, an in-depth look at real-world security incidents exposing the vulnerabilities in AI coding agents, and how Docker Sandboxes deliver workspace-scoped isolation that contains the worst failures at the execution layer. In part 1 of this series, we mapped six categories of AI coding...
```

```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Published: 2026-05-20T04:08:04+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: agent, ai, workflow
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
```

```text
NIST Narrows the NVD: What Container Security Programs Should Reassess
URL: https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/
Published: 2026-05-13T19:38:28+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: ai, database, security
On April 15, NIST announced a prioritized enrichment model for the National Vulnerability Database. Most CVEs will still be published, but fewer will receive the CVSS scores, CPE mappings, and CWE classifications that container scanners and compliance programs have historically relied on. The change formalizes a drift that has been visible to anyone pulling NVD...
```

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Published: 2026-05-15T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 16
Signal tags: ai, mcp
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
```

```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Published: 2026-05-27T22:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: ai
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
```

### Kubernetes Blog
Source URL: `https://kubernetes.io/feed.xml`
Final URL: `https://kubernetes.io/feed.xml`
Status/content: `200` / `application/xml`

```text
Announcing etcd 3.7.0-beta.0
URL: https://kubernetes.io/blog/2026/05/20/etcd-370-beta/
Published: 2026-05-20T09:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 32
Signal tags: ai, database, kubernetes, memory, release, security
SIG-Etcd announces the availability of the first beta release of etcd v3.7.0 . This new version of the popular distributed database and key Kubernetes component includes the long-requested RangeStream feature, as well as a refactoring and cleanup of multiple legacy components and interfaces. v3.7 will deliver improved security, better operational reliability, and an improved experience for working with large resultsets. First, however, the project needs users to test the beta. You can find v3.7.0-beta.0 here: Source code Binaries Official container images Please try it out and report issues in the etcd repo . This beta also determines the EOL of version 3.4. RangeStream In etcd v3.6 and earlier, it is challenging to work with requests that return large resultsets. The client or requesting application is forced to wait for the full result set, leading to unpredictable latency and memory u
```

```text
Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
URL: https://kubernetes.io/blog/2026/05/07/kubernetes-v1-36-dra-136-updates/
Published: 2026-05-08T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 31
Signal tags: ai, gpu, kubernetes, memory, release
Dynamic Resource Allocation (DRA) has fundamentally changed how platform administrators handle hardware accelerators and specialized resources in Kubernetes. In the v1.36 release, DRA continues to mature, bringing a wave of feature graduations, critical usability improvements, and new capabilities that extend the flexibility of DRA to native resources like memory and CPU, and support for ResourceClaims in PodGroups. Driver availability continues to expand. Beyond specialized compute accelerators, the ecosystem includes support for networking and other hardware types, reflecting a move toward a more robust, hardware-agnostic infrastructure. Whether you are managing massive fleets of GPUs, need better handling of failures, or simply looking for better ways to define resource fallback options, the upgrades to DRA in 1.36 have something for you. Let's dive into the new features and graduatio
```

```text
Kubernetes v1.36: Pod-Level Resource Managers (Alpha)
URL: https://kubernetes.io/blog/2026/05/01/kubernetes-v1-36-feature-pod-level-resource-managers-alpha/
Published: 2026-05-02T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 31
Signal tags: ai, database, kubernetes, memory, monitoring
Kubernetes v1.36 introduces Pod-Level Resource Managers as an alpha feature, bringing a more flexible and powerful resource management model to performance-sensitive workloads. This enhancement extends the kubelet's Topology, CPU, and Memory Managers to support pod-level resource specifications ( .spec.resources ), evolving them from a strictly per-container allocation model to a pod-centric one. Why do we need pod-level resource managers? When running performance-critical workloads such as machine learning (ML) training, high-frequency trading applications, or low-latency databases, you often need exclusive, NUMA-aligned resources for your primary application containers to ensure predictable performance. However, modern Kubernetes pods rarely consist of just one container. They frequently include sidecar containers for logging, monitoring, service meshes, or data ingestion. Before this 
```

```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
URL: https://kubernetes.io/blog/2026/05/12/kubernetes-v1-36-psi-metrics-ga/
Published: 2026-05-13T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: ai, kubernetes, memory, monitoring, release
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage. Unlike traditional utilization metrics, PSI tells the story of tasks stalled and time lost, all in nicely-packaged percentages of time across the CPU, memory, and I/O. With the recent release of Kubernetes v1.36, users across the ecosystem have a stable, reliable interface to observe resource contention at the node, pod, and container levels. In this post, we will dive into the improvements and performance testing that proved its readiness for production. Beyond utilization: why PSI? Monitoring CPU or memory usage alone can be misleading. A node may report XX% (below 100%) CPU utilization while certain tasks are experiencing severe latency due to scheduling delays. PSI fills th
```

```text
Reconciling the Past: Correcting Records for Unfixed Kubernetes CVEs
URL: https://kubernetes.io/blog/2026/05/26/reconciling-unfixed-kubernetes-cves/
Published: 2026-05-27T02:30:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 25
Signal tags: ai, database, kubernetes, security
The Kubernetes project relies on transparency to empower cluster administrators and security researchers. One important way we do that is by publishing CVE records into the Common Vulnerabilities and Exposures database. As part of our ongoing effort to mature the official Kubernetes CVE Feed , we have identified some discrepancies. CVE records for a few older, unfixed issues incorrectly include a fixed version field. The Kubernetes Security Response Committee (SRC) will correct the affected CVE records on June 1, 2026. This may result in vulnerability scanners identifying these vulnerabilities in places where they were previously not detected. To help reduce confusion, this post provides a technical update on three vulnerabilities that were disclosed in previous years but remain unfixed: CVE-2020-8561 , CVE-2020-8562 , and CVE-2021-25740 . Why we are updating these records now While thes
```

```text
Kubernetes v1.36: Admission Policies That Can't Be Deleted
URL: https://kubernetes.io/blog/2026/05/04/kubernetes-v1-36-manifest-based-admission-control/
Published: 2026-05-05T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: kubernetes, policy, security
If you've ever tried to enforce a security policy across a fleet of Kubernetes clusters, you've probably run into a frustrating chicken-and-egg problem. Your admission policies are API objects, which means they don't exist until someone creates them, and they can be deleted by anyone with the right permissions. There's always a window during cluster bootstrap where your policies aren't active yet, and there's no way to prevent a privileged user from removing them. Kubernetes v1.36 introduces an alpha feature that addresses this: manifest-based admission control . It lets you define admission webhooks and CEL -based policies as files on disk, loaded by the API server at startup, before it serves any requests. The gap we're closing Most Kubernetes policy enforcement today works through the API. You create a ValidatingAdmissionPolicy or a webhook configuration as an API object, and the admi
```

```text
Kubernetes v1.36: Advancing Workload-Aware Scheduling
URL: https://kubernetes.io/blog/2026/05/13/kubernetes-v1-36-advancing-workload-aware-scheduling/
Published: 2026-05-14T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: ai, kubernetes, release, runtime
AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling. In Kubernetes v1.35, we introduced the first tranche of workload-aware scheduling improvements, featuring the foundational Workload API alongside basic gang scheduling support built on a Pod-based framework, and an opportunistic batching feature to efficiently process identical Pods. Kubernetes v1.36 introduces a significant architectural evolution by cleanly separating API concerns: the Workload API acts as a static template, while the new PodGroup API handles the runtime state. To support this, the kube-scheduler features a new PodGroup scheduling cycle that enables atomic workload processing and paves the way for future enhancements. This release also debuts the first iterations of topology-aware scheduling and workload-aware preemption to advance scheduling capabilities. Addi
```

```text
Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
URL: https://kubernetes.io/blog/2026/05/15/kubernetes-1-36-feature-mixed-version-proxy-beta/
Published: 2026-05-16T03:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: ai, kubernetes, rag, release
Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature (under the feature gate UnknownVersionInteroperabilityProxy ) in a previous blog post . The goal was simple but critical: make cluster upgrades safer by ensuring that requests for resources not yet known to an older API server are correctly routed to a newer peer API server, instead of returning an incorrect 404 Not Found . We are excited to announce that the Mixed Version Proxy is moving to Beta in Kubernetes 1.36 and will be enabled by default! The feature has evolved significantly since its initial release, addressing key gaps and modernizing its architecture. Here is a look at how the feature has evolved and what you need to know to leverage it in your clusters. What problem are we solving? In a highly available control plane undergoing an upgrade, you often have API servers running different ver
```

```text
Kubernetes v1.36: Moving Volume Group Snapshots to GA
URL: https://kubernetes.io/blog/2026/05/08/kubernetes-v1-36-volume-group-snapshot-ga/
Published: 2026-05-09T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: ai, kubernetes, rag, release
Volume group snapshots were introduced as an Alpha feature with the Kubernetes v1.27 release, moved to Beta in v1.32, and to a second Beta in v1.34. We are excited to announce that in the Kubernetes v1.36 release, support for volume group snapshots has reached General Availability (GA) . The support for volume group snapshots relies on a set of extension APIs for group snapshots . These APIs allow users to take crash-consistent snapshots for a set of volumes. Behind the scenes, Kubernetes uses a label selector to group multiple PersistentVolumeClaim objects for snapshotting. A key aim is to allow you to restore that set of snapshots to new volumes and recover your workload based on a crash-consistent recovery point. This feature is only supported for CSI volume drivers. An overview of volume group snapshots Some storage systems provide the ability to create a crash-consistent snapshot of
```

```text
Kubernetes v1.36: Server-Side Sharded List and Watch
URL: https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/
Published: 2026-05-07T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: kubernetes, memory
As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserialize everything, only to discard the objects it is not responsible for. Scaling out the controller does not reduce per-replica cost; it multiplies it. Kubernetes v1.36 introduces server-side sharded list and watch as an alpha feature ( KEP-5866 ). With this feature enabled, the API server filters events at the source so that each controller replica receives only the slice of the resource collection it owns. The problem with client-side sharding Some controllers, such as kube-state-metrics , already support horizontal sharding. Each replica is assigned a portion of the keyspace and discards object
```

```text
Kubernetes v1.36: Deprecation and removal of Service ExternalIPs
URL: https://kubernetes.io/blog/2026/05/14/kubernetes-v1-36-deprecation-and-removal-of-service-externalips/
Published: 2026-05-15T03:35:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: kubernetes, security
The .spec.externalIPs field for Service was an early attempt to provide cloud-load-balancer-like functionality for non-cloud clusters. Unfortunately, the API assumes that every user in the cluster is fully trusted, and in any situation where that is not the case, it enables various security exploits, as described in CVE-2020-8554 . Since Kubernetes 1.21, the Kubernetes project has recommended that all users disable .spec.externalIPs . To make that easier, Kubernetes also added an admission controller ( DenyServiceExternalIPs ) that can be enabled to do this. At the time, SIG Network felt that blocking the functionality by default was too large a breaking change to consider. However, the security problems are still there, and as a project we're increasingly unhappy with the "insecure by default" state of the feature. Additionally, there are now several better alternatives for non-cloud cl
```

```text
From Kubernetes Dashboard to Headlamp: Understanding the Transition
URL: https://kubernetes.io/blog/2026/06/01/dashboard-to-headlamp/
Published: 2026-06-02T03:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: deploy, kubernetes
For many people, Kubernetes Dashboard was their first window into Kubernetes. It offered a simple visual way to see what was running in a cluster, inspect resources, and build confidence without relying on the command line. For years, it helped developers, students, and operators make sense of Kubernetes, and it served as an important onramp into the ecosystem. The Kubernetes Dashboard project has now been archived. We deeply respect the work the team did and the role Dashboard played in making Kubernetes more approachable for so many users. Headlamp builds on that foundation and carries it forward. It keeps the clarity of a visual interface while adding capabilities that match how Kubernetes is used today. This includes multi-cluster visibility, application-centric views, extensibility through plugins, and flexible deployment options that work both in-cluster and on the desktop. This gu
```

### LangChain Blog
Source URL: `https://blog.langchain.com/rss/`
Final URL: `https://www.langchain.com/blog`
Status/content: `200` / `text/html; charset=utf-8`
Error: `ParseError('not well-formed (invalid token): line 1, column 2326')`

- No usable item rows collected from this surface.

### LangChain Blog (site)
Source URL: `https://www.langchain.com/blog/rss.xml`
Final URL: `https://www.langchain.com/blog/rss.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
How to Build a Custom Agent Harness
URL: https://www.langchain.com/blog/how-to-build-a-custom-agent-harness
Published: 2026-06-04T02:07:53+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 36
Signal tags: agent, agents, ai, langchain
Effective agents are built with harnesses that are tightly coupled with the task at hand. The easiest way to build a custom harness is with LangChain's create_agent plus middleware. This guide covers the core agent loop and how you can customize it for your agent's use case.
```

```text
The Agent Development Lifecycle: Build, Test, Deploy & Monitor AI Agents | LangChain
URL: https://www.langchain.com/blog/the-agent-development-lifecycle
Published: 2026-06-03T11:01:34+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 83
Signal tags: agent, agents, ai, deploy, eval, governance, langchain, observability, runtime
Learn how leading engineering teams ship AI agents reliably and repeatedly using a four-phase agent development lifecycle: Build, Test, Deploy, and Monitor. Includes guidance on evals, runtimes, observability, and governance at scale.
```

```text
Interpreter Skills: Building Workflows for Agents
URL: https://www.langchain.com/blog/interpreter-skills
Published: 2026-05-30T10:01:20+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 79
Signal tags: agent, agents, ai, langchain, skill, skills, workflow, workflows
Interpreter skills extend agent skills with a TypeScript module the agent can import and run. This lets you build more capable workflows with your agents.
```

```text
Introducing Rubrics: Build Agents that Evaluate and Correct Their Work
URL: https://www.langchain.com/blog/introducing-rubrics-for-deepagents
Published: 2026-06-03T20:44:46+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 65
Signal tags: agent, agents, ai, eval, evaluation, langchain, tpu
Deep Agents' RubricMiddleware adds a self-evaluation loop to your agent runs. Set a rubric, configure a grader, and get reliable outputs on tasks where correctness matters.
```

```text
Delta Channels: How We’re Evolving our Runtime for Long-Running Agents
URL: https://www.langchain.com/blog/delta-channels-evolving-agent-runtime
Published: 2026-06-03T11:01:34+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 58
Signal tags: agent, agents, ai, langchain, rag, runtime
Long-running agents have a storage problem: checkpointing full state at every step grows at O(N²). DeltaChannel is a new primitive in LangGraph 1.2 that checkpoints only the diff each step and writes full snapshots periodically, keeping storage costs flat as sessions grow longer. It ships by default in Deep Agents v0.6, with no config changes or data migration required.
```

```text
LangSmith Sandboxes are Generally Available
URL: https://www.langchain.com/blog/langsmith-sandboxes-generally-available
Published: 2026-05-29T08:04:43+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 58
Signal tags: agent, agents, ai, langchain, langsmith, sandbox
Run AI agents safely with LangSmith Sandboxes (GA): kernel-isolated microVMs with snapshots, parallel forks, service URLs, and auth proxies. Built for coding agents, CI agents, and data pipelines
```

```text
How Rippling built production AI in 6 months with Deep Agents and LangSmith
URL: https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith
Published: 2026-06-02T15:15:02+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 56
Signal tags: agent, agents, ai, langchain, langsmith
Rippling uses LangChain Deep Agents and LangSmith to run cross-domain AI across HR, IT, finance, payroll, and global operations.
```

```text
Designing Efficient Verifiers for Legal Agents
URL: https://www.langchain.com/blog/designing-efficient-verifiers-for-legal-agents
Published: 2026-06-03T11:01:34+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 55
Signal tags: agent, agents, ai, eval, evaluation, langchain
A Harvey and LangChain Labs study on making LLM verifiers cheaper and more reliable for legal-agent evaluation and post-training.
```

```text
From Token Streams to Agent Streams
URL: https://www.langchain.com/blog/token-streams-to-agent-streams
Published: 2026-05-22T05:32:38+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 51
Signal tags: agent, agents, ai, langchain, subagent, tpu
Move beyond token streaming. Learn how the latest streaming primitives in Deep Agents, LangChain, and LangGraph enable typed events, scoped subscriptions, subagent visibility, multimodal outputs, and resilient frontend experiences for building production-ready agent applications.
```

```text
Introducing Langsmith Engine
URL: https://www.langchain.com/blog/introducing-langsmith-engine
Published: 2026-05-29T08:04:43+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 48
Signal tags: agent, ai, eval, langchain, langsmith, rag
LangSmith Engine watches your production traces, clusters failures into named issues, and proposes targeted fixes and eval coverage. Stop manually triaging agent failures.
```

```text
Fixing agent failures in production: Interrupt 2026 recap | LangChain Newsletter
URL: https://www.langchain.com/blog/may-2026-langchain-newsletter
Published: 2026-05-28T23:08:39+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 44
Signal tags: agent, ai, langchain, langsmith, sandbox
Recapping two days of Interrupt 2026 — LangSmith Engine, Sandboxes GA, LangChain Labs, and 23 talks from teams at LinkedIn, Rippling, Cisco, and more. Now on demand.
```

```text
How Lyft Built a Self-Serve AI Agent Platform with LangGraph and LangSmith
URL: https://www.langchain.com/blog/lyft-built-a-self-serve-ai-agent-platform-for-customer-support-with-langgraph-and-langsmith
Published: 2026-05-28T06:41:16+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 41
Signal tags: agent, ai, langchain, langsmith
Lyft used LangGraph and LangSmith to build a self-serve AI agent platform for customer support, cutting agent development from months to weeks.
```

### LlamaIndex Blog
Source URL: `https://www.llamaindex.ai/blog/rss.xml`
Final URL: `https://www.llamaindex.ai/blog/rss.xml`
Status/content: `404` / `text/html; charset=utf-8`
Error: `HTTP 404`

- No usable item rows collected from this surface.

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
Grok Imagine Video 1.5 on AI Gateway
URL: https://vercel.com/changelog/grok-imagine-video-1-5-on-ai-gateway
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Elastic Build Machines now protect against out of memory builds
URL: https://vercel.com/changelog/elastic-build-machines-now-protect-against-out-of-memory-builds
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: ai, changelog, memory
```

```text
Port 8080 is now available in Vercel Sandboxes
URL: https://vercel.com/changelog/port-8080-is-now-available-in-vercel-sandboxes
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: ai, changelog, sandbox
```

```text
Run Docker containers inside Vercel Sandbox
URL: https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: ai, changelog, sandbox
```

```text
Amazon OpenSearch Serverless is now available in the Vercel Marketplace
URL: https://vercel.com/changelog/amazon-opensearch-serverless-is-now-available-in-the-vercel-marketplace
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 16
Signal tags: ai, changelog, serverless
```

```text
MiniMax M3 on AI Gateway
URL: https://vercel.com/changelog/minimax-m3-on-ai-gateway
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Opus 4.8 on AI Gateway
URL: https://vercel.com/changelog/opus-4-8-on-ai-gateway
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Protecting against token theft
URL: https://vercel.com/blog/protecting-against-token-theft
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Qwen 3.7 Plus now available on AI Gateway
URL: https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Signed URLs are now available for Vercel Blob
URL: https://vercel.com/changelog/signed-urls-are-now-available-for-vercel-blob
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Team-wide provider allowlist on AI Gateway
URL: https://vercel.com/changelog/team-wide-provider-allowlist-on-ai-gateway
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 7
Signal tags: ai, changelog
```

```text
Chat SDK adds Lark and Feishu support
URL: https://vercel.com/changelog/chat-sdk-adds-lark-feishu-support
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: changelog
```

### Vercel Blog
Source URL: `https://vercel.com/blog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

- No usable item rows collected from this surface.

### Simon Willison
Source URL: `https://simonwillison.net/atom/everything/`
Final URL: `https://simonwillison.net/atom/everything/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs
URL: https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 59
Signal tags: agent, agentic, agents, ai, claude code, cursor, policy
Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding agents were about to become. Natalie Lung for Bloomberg: The rideshare giant is limiting all employees to $1,500 in monthly token spending per AI coding tool, an Uber spokesperson said in response to a Bloomberg News inquiry. That means spending on one tool doesn’t have a bearing on the budget for another. The limits, which have been instituted in recent months, only apply to agentic coding software such as Cursor or Anthropic PBC’s Claude Code. A $1,500 monthly limit per tool strikes me as a rational policy response to over-spending, and much more sensible than those tokenmaxxing leaderboards enc
```

```text
How we contain Claude across products
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 39
Signal tags: agent, ai, claude code, egress, sandbox
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows
```

```text
datasette-agent-micropython 0.1a0
URL: https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: agent, ai, release, sandbox
Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python , sandboxing , datasette , webassembly , datasette-agent
```

```text
Microsoft's new MAI models
URL: https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 27
Signal tags: ai, copilot, eval, evaluation, github
Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to "select early partners") and MAI-Code-1-Flash (137B Parameters, 5B active, "purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling out to GitHub Copilot individual users in Visual Studio Code"). I've not been able to try either of them just yet. It's very interesting to see Microsoft releasing models with such low parameter counts, especially given how expensive larger models are to access right now. They claim MAI-Thinking-1 "is preferred to Sonnet 4.6 in our blind human side-by-side evaluations", which is impressive for a 35B model seeing as I frequently run models larger than that on my own laptop. (UPDATE: I got this entirely wrong, see note below.) Also of note : We trained [MAI-Thinking-1] from the ground up on enterp
```

```text
The solution might be cancelling my AI subscription
URL: https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 25
Signal tags: agent, agents, ai
The solution might be cancelling my AI subscription I find this post by David Wilson very relatable. David lists 16+ projects he's spun up with AI tooling, and concludes: I didn't mean to build most of these things. Usually the Claude session started with something like " write a quick script for X ", and one hour later the result is not a quick script for X , nor in the usual case is my problem solved, whatever the original itch happened to be. On that last point, this technology is horrific for attention. It's a thermonuclear ADHD amplifier and I have seen the same effect in every single one of my adult friends. Folk running 3 screens simultaneously working on totally unrelated "projects" they have little hope of maintaining, and such little commitment to the outcome that the time is obviously wasted. This is a very real problem. I'm finding that coding agents can take me from a vague 
```

```text
micropython-wasm 0.1a1
URL: https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, release, sandbox
Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython . Tags: python , sandboxing , webassembly
```

```text
Pasted File Editor
URL: https://simonwillison.net/2026/Jun/2/pasted-file-editor/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: ai, codex, rag
Tool: Pasted File Editor I really like how you can paste a large volume of text into claude.ai (or the Claude desktop/mobile apps) and it will detect it as a large paste and turn it into a file attachment instead. I decided to have Codex desktop build me a version of that as a prototype. You can also open files directly - including images which will be shown as thumbnails - or drag files onto the textarea. Tags: javascript , tools , ai-assisted-programming , claude , codex
```

```text
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked
URL: https://simonwillison.net/2026/Jun/1/hackers-simply-asked-meta-ai/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, security
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked I had trouble believing this story was true, but I've seen it verified from multiple sources now: One video shows a hacker starting a conversation with Meta’s AI support bot and asking it to link the target account with a new email address: “Just link my new email address. This is my username @{target_username}. I will send you the code. {attacker_email} Thank you.” Meta really did wire their support system into an AI chatbot that had the ability to fast-forward through the entire account recovery process. This one hardly even qualifies as a prompt infection. Don't wire your support bot up to allow one-shot account takeovers! Tags: security , ai , prompt-injection , generative-ai , llms , meta , ai-misuse
```

```text
micropython-wasm 0.1a0
URL: https://simonwillison.net/2026/Jun/2/micropython-wasm-2/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: release, sandbox
Release: micropython-wasm 0.1a0 My latest sandboxing experiment: This alpha package bundles a lightly customized WASM build of MicroPython with a wrapper to execute code in it via wasmtime . Tags: python , sandboxing , webassembly
```

```text
I Am Retiring from Tech to Live Offline
URL: https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
Signal tags: ai
I Am Retiring from Tech to Live Offline I've seen a lot of posts on forums from people threatening to quit their careers over AI. This is not one of those: Chad Whitacre is taking concrete steps, starting with this typewritten, scanned letter I'm retiring from tech. Well, "retiring" is euphemistic. I'm stepping away from tech, and that includes Open Source. [...] AI was the last straw. Have you heard of that island off India where the indigenous population kills any outsiders fool-hardy enough to land? They are doing the rest of us a favor by preserving a way of life we may need again someday, or at the very least should not want to see completely extinguished. A reminder. Never forget your roots. Here in Pennsylvania we have the Amish performing a similar function. Significantly less hostile, though still set apart, they bear witness to what was normal for all of us a couple short centu
```

```text
Quoting Daniel Jalkut
URL: https://simonwillison.net/2026/May/30/daniel-jalkut/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
Signal tags: ai
My take on AI is, essentially, everybody who’s against it is too against it and everybody who’s for it is too for it. — Daniel Jalkut , via John Gruber Tags: ai , john-gruber
```

```text
Quoting Karen Kwok for Reuters Breakingviews
URL: https://simonwillison.net/2026/May/31/anthropic-run-rate/#atom-everything
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
Signal tags: ai
Anthropic defines “run-rate revenue” in two parts. Use the last 28 days of sales ⁠from customers charged on a consumption basis and multiply it by 13. Then, multiply the monthly subscription take by 12, ​and add the two together. — Karen Kwok for Reuters Breakingviews , citing "a person familiar with the matter" Tags: anthropic , ai
```

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
Final URL: `https://huggingface.co/blog/feed.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Adding MCP Tools to Reachy Mini
URL: https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini
Published: 2026-06-03T09:00:00+09:00
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 13
Signal tags: mcp
```

```text
Holo3.1: Fast & Local Computer Use Agents
URL: https://huggingface.co/blog/Hcompany/holo31
Published: 2026-06-02T23:13:23+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 30
Signal tags: agent, agents
```

```text
Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality
URL: https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2
Published: 2026-05-15T03:55:01+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: embedding, eval, retrieval
```

```text
Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic
URL: https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption
Published: 2026-06-01T22:51:18+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, ai
```

```text
Harness, Scaffold, and the AI Agent Terms Worth Getting Right
URL: https://huggingface.co/blog/agent-glossary
Published: 2026-05-25T09:00:00+09:00
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, ai
```

```text
Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains
URL: https://huggingface.co/blog/JetBrains/mellum2-launch
Published: 2026-06-02T00:45:17+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action
URL: https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai
Published: 2026-06-01T13:44:55+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Direct Preference Optimization Beyond Chatbots
URL: https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots
Published: 2026-06-03T21:55:11+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Introducing the Ettin Reranker Family
URL: https://huggingface.co/blog/ettin-reranker
Published: 2026-05-19T09:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
OlmoEarth v1.1: A more efficient family of Earth observation models
URL: https://huggingface.co/blog/allenai/olmoearth-v1-1
Published: 2026-05-20T03:38:09+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend
URL: https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers
Published: 2026-05-19T00:12:46+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler
URL: https://huggingface.co/blog/torch-profiler
Published: 2026-05-29T09:00:00+09:00
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### Anthropic News
Source URL: `https://www.anthropic.com/news`
Final URL: `https://www.anthropic.com/news`
Status/content: `200` / `text/html; charset=utf-8`

```text
Jun 3, 2026 Announcements Introducing the Services Track and Partner Hub of the Claude Partner Network
URL: https://www.anthropic.com/news/services-track-partner-hub
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
Jun 3, 2026 Announcements Introducing the Services Track and Partner Hub of the Claude Partner Network
```

```text
Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work.
URL: https://www.anthropic.com/news/claude-opus-4-8
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 30
Signal tags: agent, agentic
Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work.
```

```text
Jun 3, 2026 Policy What we learned mapping a year’s worth of AI-enabled cyber threats
URL: https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, policy
Jun 3, 2026 Policy What we learned mapping a year’s worth of AI-enabled cyber threats
```

```text
Feb 4, 2026 Claude is a space to think We’ve made a choice: Claude will remain ad-free. We explain why advertising incentives are incompatible with a genuinely helpful AI assistant, and how we plan to expand access without com
URL: https://www.anthropic.com/news/claude-is-a-space-to-think
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: ai
Announcements Feb 4, 2026 Claude is a space to think We’ve made a choice: Claude will remain ad-free. We explain why advertising incentives are incompatible with a genuinely helpful AI assistant, and how we plan to expand access without compromising user trust.
```

```text
Apr 17, 2026 Introducing Claude Design by Anthropic Labs Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-p
URL: https://www.anthropic.com/news/claude-design-anthropic-labs
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
Product Apr 17, 2026 Introducing Claude Design by Anthropic Labs Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more.
```

```text
Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC
URL: https://www.anthropic.com/news/confidential-draft-s1-sec
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC
```

```text
Jun 2, 2026 Announcements Expanding Project Glasswing
URL: https://www.anthropic.com/news/expanding-project-glasswing
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
Jun 2, 2026 Announcements Expanding Project Glasswing
```

```text
May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas"
URL: https://www.anthropic.com/news/chris-olah-pope-leo-encyclical
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas"
```

```text
May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening
URL: https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening
```

```text
May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers
URL: https://www.anthropic.com/news/milan-office-opening
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers
```

```text
May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation
URL: https://www.anthropic.com/news/series-h
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: ai
May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation
```

### GitHub Trending
Source URL: `https://github.com/trending?since=daily`
Final URL: `https://github.com/trending?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
aquasecurity/trivy
URL: https://github.com/aquasecurity/trivy
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 25
Signal tags: ai, github, kubernetes, security
Star aquasecurity / trivy Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more Language: Go. Stars today: 24.
```

```text
NousResearch/hermes-agent
URL: https://github.com/NousResearch/hermes-agent
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 20
Signal tags: agent, github
Star NousResearch / hermes-agent The agent that grows with you Language: Python. Stars today: 1,735.
```

```text
opendataloader-project/opendataloader-pdf
URL: https://github.com/opendataloader-project/opendataloader-pdf
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 8
Signal tags: ai, github
Star opendataloader-project / opendataloader-pdf PDF Parser for AI-ready data. Automate PDF accessibility. Open-source. Language: Java. Stars today: 570.
```

```text
jwasham/coding-interview-university
URL: https://github.com/jwasham/coding-interview-university
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: github
Star jwasham / coding-interview-university A complete computer science study plan to become a software engineer. Stars today: 330.
```

```text
odoo/odoo
URL: https://github.com/odoo/odoo
Published: not provided
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: github
Star odoo / odoo Odoo. Open Source Apps To Grow Your Business. Language: Python. Stars today: 29.
```

```text
supermemoryai/supermemory
URL: https://github.com/supermemoryai/supermemory
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: ai, github, memory
Star supermemoryai / supermemory Memory engine and app that is extremely fast, scalable. The Memory API for the AI era. Language: TypeScript. Stars today: 600.
```

```text
HKUDS/Vibe-Trading
URL: https://github.com/HKUDS/Vibe-Trading
Published: not provided
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: agent, github
Star HKUDS / Vibe-Trading "Vibe-Trading: Your Personal Trading Agent" Language: Python. Stars today: 197.
```

```text
Open-LLM-VTuber/Open-LLM-VTuber
URL: https://github.com/Open-LLM-VTuber/Open-LLM-VTuber
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 5
Signal tags: github
Star Open-LLM-VTuber / Open-LLM-VTuber Talk to any LLM with hands-free voice interaction, voice interruption, and Live2D taking face running locally across platforms Language: Python. Stars today: 693.
```

```text
microsoft/markitdown
URL: https://github.com/microsoft/markitdown
Published: not provided
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: github
Star microsoft / markitdown Python tool for converting files and office documents to Markdown. Language: Python. Stars today: 1,984.
```

## Filtering notes
- Repeated rows from AWS AgentCore Gateway / AgentOps / LangChain lifecycle / Docker sandbox / LangSmith Sandboxes / Simon-Uber spend cap were kept as `raw_only` when already present in recent new-target evidence.
- Generic hiring, funding, location, marketing, low-signal product-news, stale backfill, and unrelated feed items were classified as `discard` or raw context only.
- GitHub Trending was captured from the public daily trending surface; sponsor/navigation artifacts were filtered before selecting durable rows.

## Why this raw exists
This file is the evidence store for later summary/curation. Honcho routing is recorded here so later review can see why the pass was routed as append_existing while preserving raw source URLs and excerpts.
