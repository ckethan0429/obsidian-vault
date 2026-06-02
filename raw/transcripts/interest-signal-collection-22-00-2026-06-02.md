---
title: Interest Signal Collection — 2026-06-02 22:00 KST
created: 2026-06-02
updated: 2026-06-02
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release notes, launch posts, and GitHub Trending
route_hint: append_existing
route_confidence: 0.78
route_reason: The 22:00 new-target pass found fresh official AWS Machine Learning Blog rows around Bedrock AgentCore Gateway MCP governance, AgentOps, policy/Lambda interceptors, customer-managed AgentCore secrets, plus GitHub Trending context/workflow-agent repos. These strengthen existing managed-agent / AI-infra operating-economics pages without requiring a new concept page.
routing:
  route: append_existing
  confidence: 0.78
  reasons:
    - Fresh AWS Machine Learning Blog rows make AgentCore Gateway, MCP, policy interceptors, secrets governance, and AgentOps explicit production-agent control-plane primitives.
    - GitHub Trending added context-window optimization and AI-DLC workflow repos that reinforce the same harness/context-management lane.
    - The same-day 11:00 run already appended the OpenAI/AWS Bedrock, private MCP, HyperPod, Docker, and LangSmith sandbox cluster; this pass sharpens the same durable axis rather than opening a new branch.
  signal_tags:
    - new-target
    - official-feeds
    - aws
    - agentcore
    - mcp
    - agentops
    - sandbox
    - context-management
    - append-existing
---

# Raw Transcript — Interest Signal Collection 22:00 KST 2026-06-02

Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-06-02
Captured at: 2026-06-02T22:02:22.846077+09:00

## Live session notes
- This was the 22:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against the same-day `raw/transcripts/interest-signal-collection-11-00-2026-06-02.md`, prior 22:00 / 11:00 new-target caches, and same-day log entries before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, official HTML/blog index pages, and GitHub Trending HTML; disposable JSON cache: `/home/ck/wiki/.cache/new-target-22-00-2026-06-02.json`.
- URL evidence rule was applied: each captured row below includes the canonical item URL or the available feed/surface URL plus an explicit note if exact item URL was unavailable.

## Strongest routing read
- Overall route: `append_existing`.
- Route driver: AWS Machine Learning Blog exposed a concentrated AgentCore production-control cluster after the 11:00 baseline: MCP gateway governance, AgentOps, policy/Lambda interceptors, customer-managed secrets, plus context-window/workflow-agent repos on GitHub Trending.
- Durable action: append existing managed-agent / AI-infra pages and Honcho/log audit; leave `index.md` unchanged because no new page is created.

## 1) Strongest rows selected for triage

### AWS Machine Learning Blog
```text
Extending MCP support for Amazon Bedrock AgentCore Gateway
URL: https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/
Published: Mon, 01 Jun 2026 18:35:03 +0000
Route read: append_existing
Signal score: 64
Signal tags: agent, mcp, governance, workflow, infra, memory
While deploying Model Context Protocol (MCP) servers in production, enterprises need fine-grained access control across servers, observability into which teams use which tools, security guarantees against data exfiltration, and centralized credential management, all at scale. Amazon Bedrock AgentCore Gateway sits between MCP servers and the clients that consume them, centralizing credential management, observability, and secure […]
```

### AWS Machine Learning Blog
```text
AgentOps: Operationalize agentic AI at scale with Amazon Bedrock AgentCore
URL: https://aws.amazon.com/blogs/machine-learning/agentops-operationalize-agentic-ai-at-scale-with-amazon-bedrock-agentcore/
Published: Mon, 01 Jun 2026 16:12:18 +0000
Route read: append_existing
Signal score: 50
Signal tags: agent, workflow, infra
When you build agentic AI solutions, you face unique operational challenges. Agents make unpredictable decisions, costs spiral unexpectedly, and debugging non-deterministic failures seems impossible. Agentic AI applications don't just execute predetermined workflows. They reason, adapt, and make autonomous decisions, and DevOps practices need to be adapted. That's where AgentOps comes in, the operational discipline for deploying, managing, and continuously improving AI agents in production.
```

### GitHub Trending TypeScript
```text
mksglu/context-mode
URL: https://github.com/mksglu/context-mode
Published: GitHub Trending current page
Route read: append_existing
Signal score: 49
Signal tags: agent, sandbox, infra, memory
Sponsor Star mksglu / context-mode Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 15 platforms; TypeScript; 95 stars today
```

### AWS Machine Learning Blog
```text
OpenAI models and Codex on Amazon Bedrock are now generally available
URL: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
Published: Mon, 01 Jun 2026 21:31:12 +0000
Route read: append_existing
Signal score: 43
Signal tags: agent, codex, infra
GPT-5.5, GPT-5.4, and Codex are now generally available on Amazon Bedrock. Deploy them in production applications and agents today, on Bedrock’s high performance inference engine.
```

### AWS Machine Learning Blog
```text
Reference your own AWS Secrets Manager secrets in Amazon Bedrock AgentCore Identity
URL: https://aws.amazon.com/blogs/machine-learning/reference-your-own-aws-secrets-manager-secrets-in-amazon-bedrock-agentcore-identity/
Published: Mon, 01 Jun 2026 22:16:28 +0000
Route read: append_existing
Signal score: 36
Signal tags: agent, governance, infra
Today, we’re excited to announce the ability to reference a secret in AWS Secrets Manager for AgentCore Identity, so you can reference your own preconfigured secret from Secrets Manager and retain full control over how it is managed. With this ability, you can extend your organization’s existing secrets governance processes to AgentCore. You can provide an existing, preconfigured AWS Secrets Manager secret to use with your credential provider resources. You retain full control over its encryption configuration, rotation, replication, tags, and resource policies, just as you would manage other secrets in Secrets Manager. You can also choose a secret from another AWS account within the same AWS Region, though cross-Region secret sharing isn’t supported. This also supports secrets brought in through AWS Secrets Manager external connectors, enabling integration with third-party secret manage
```

### AWS Machine Learning Blog
```text
Secure AI agents with Policy and Lambda interceptors in Amazon Bedrock AgentCore gateway
URL: https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-policy-and-lambda-interceptors-in-amazon-bedrock-agentcore-gateway/
Published: Mon, 01 Jun 2026 17:54:22 +0000
Route read: append_existing
Signal score: 36
Signal tags: agent, governance, infra
In this post, we use a lakehouse data agent to demonstrate how you can use Policy for deterministic access control and Lambda interceptors for dynamic validation. We then show how to combine Lambda interceptors and Policy to implement a geography-based access control which requires both dynamic validation and deterministic access control.
```

### AWS Machine Learning Blog
```text
Accelerate LLM model loading and increase context windows with GPUDirect on Amazon FSx for Lustre and TurboQuant
URL: https://aws.amazon.com/blogs/machine-learning/accelerate-llm-model-loading-and-increase-context-windows-with-gpudirect-on-amazon-fsx-for-lustre-and-turboquant/
Published: Mon, 01 Jun 2026 16:07:19 +0000
Route read: append_existing
Signal score: 35
Signal tags: infra, memory, finance
If you’re iterating on deploying large language models (LLMs) on AWS GPU instances, you’ve probably noticed the larger the model to be loaded into GPU High Bandwidth Memory (HBM), the longer the painful wait until the GPUs are ready for inference. As models grow to hundreds of billions of parameters and GPU environments grow ever […]
```

### GitHub Trending Python
```text
awslabs/aidlc-workflows
URL: https://github.com/awslabs/aidlc-workflows
Published: GitHub Trending current page
Route read: append_existing
Signal score: 35
Signal tags: agent, workflow
Star awslabs / aidlc-workflows AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents; Python; 46 stars today
```

### GitHub Trending TypeScript
```text
nanocoai/nanoclaw
URL: https://github.com/nanocoai/nanoclaw
Published: GitHub Trending current page
Route read: append_existing
Signal score: 35
Signal tags: agent, sandbox, governance, memory
Star nanocoai / nanoclaw A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messaging apps,, has memory, scheduled jobs, and runs directly on Anthropic's Agents SDK; TypeScript; 44 stars today
```

### AWS Machine Learning Blog
```text
Amazon Quick integration with time-series databases for market intelligence using MCP
URL: https://aws.amazon.com/blogs/machine-learning/amazon-quick-integration-with-time-series-databases-for-market-intelligence-using-mcp/
Published: Mon, 01 Jun 2026 16:01:24 +0000
Route read: append_existing
Signal score: 32
Signal tags: mcp, infra, finance
In this post, we walk through a practical implementation using KDB-X MCP server integration with Amazon Quick, demonstrating how traders and analysts can ask questions using conversational language and receive actionable insights from datasets. You can apply this same integration pattern across various domains, from financial market analysis to IoT sensor monitoring to DevOps performance dashboards, where you need to simplify access to time series insights.
```

### AWS Machine Learning Blog
```text
Building a secure auth code flow setup using AgentCore Gateway with MCP clients
URL: https://aws.amazon.com/blogs/machine-learning/building-a-secure-auth-code-flow-setup-using-agentcore-gateway-with-mcp-clients/
Published: Tue, 02 Jun 2026 03:23:35 +0000
Route read: raw_only
Signal score: 29
Signal tags: agent, mcp, infra
This post demonstrates how to implement Open Authorization (OAuth) Code flow as an inbound authorization mechanism for MCP servers hosted on Amazon Bedrock AgentCore Gateway. By the end of this guide, you will have a production-ready setup where each AI assistant request is authenticated with a valid user identity token issued from your organization’s identity provider.
```

### AWS Machine Learning Blog
```text
Enable safe agentic payments with built-in guardrails using Amazon Bedrock AgentCore payments
URL: https://aws.amazon.com/blogs/machine-learning/enable-safe-agentic-payments-with-built-in-guardrails-using-amazon-bedrock-agentcore-payments/
Published: Mon, 01 Jun 2026 17:30:12 +0000
Route read: raw_only
Signal score: 29
Signal tags: agent, infra
In this post, we address several key risks that surface when designing an agentic payment system, and how to address them with the capabilities of AgentCore payments.
```

## 2) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
Final URL: `https://openai.com/news/rss.xml`
Status/content: `200` / `text/xml; charset=utf-8`

```text
Codex is becoming a productivity tool for everyone
The Next Era of Knowledge Work report explores how Codex is transforming productivity through AI-powered research, data analysis, workflow automation, and content creation.
Published: Tue, 02 Jun 2026 02:00:00 GMT
URL: https://openai.com/index/codex-for-knowledge-work
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: codex, workflow
```

```text
Our views on AI policy and political advocacy
Our approach to AI policy and political advocacy, transparency, support for thoughtful regulation and AI safety, and that no outside political group speaks on the company’s behalf.
Published: Mon, 01 Jun 2026 17:00:00 GMT
URL: https://openai.com/index/our-views-on-ai-policy-and-political-advocacy
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
Building the infrastructure for the Intelligence Age in Michigan
OpenAI breaks ground on a 1GW data center project in Michigan as part of Stargate, building AI infrastructure to expand access, create jobs, and support communities.
Published: Mon, 01 Jun 2026 12:00:00 GMT
URL: https://openai.com/index/stargate-michigan-data-center
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
OpenAI frontier models and Codex are now available on AWS
OpenAI frontier models and Codex are now generally available on AWS, giving enterprises a new path to build with OpenAI through the AWS environments, controls, and procurement workflows they already use. Customers can get started with OpenAI on AWS and move faster from evaluation to production.
Published: Mon, 01 Jun 2026 10:00:00 GMT
URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 6
Signal tags: codex, workflow
```

```text
Boston Children’s uses AI to unlock new diagnoses
Boston Children’s Hospital uses OpenAI technology to improve patient care, reduce operational burden, and help diagnose more than 40 rare disease cases.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/boston-childrens-hospital
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How Braintrust turns customer requests into code with Codex
How Braintrust engineers use Codex with GPT-5.5 to run experiments and code faster.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/braintrust
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: codex
```

```text
Strengthening societal resilience with Rosalind Biodefense
OpenAI launches Rosalind Biodefense, expanding trusted access to GPT-Rosalind for vetted developers and U.S. government partners advancing biodefense, public health, and pandemic preparedness through frontier AI.
Published: Fri, 29 May 2026 03:00:00 GMT
URL: https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
A shared playbook for trustworthy third party evaluations
OpenAI shares guidance on third-party AI evaluations, covering how to assess model capabilities, safeguards, and validity for frontier systems.
Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://openai.com/index/trustworthy-third-party-evaluations-foundations
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How Endava builds an agentic organization with Codex
Learn how Endava uses Codex to build an agentic organization, accelerating software delivery and reducing requirements analysis from weeks to hours.
Published: Thu, 28 May 2026 12:00:00 GMT
URL: https://openai.com/index/endava
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent, codex
```

```text
OpenAI’s Frontier Governance Framework
Explore OpenAI’s Frontier Governance Framework and how our AI safety, security, and risk practices align with emerging EU and California regulations.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/openai-frontier-governance-framework
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 6
Signal tags: governance
```

```text
MUFG aims to become AI-native with OpenAI
MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/mufg
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: workflow
```

```text
Cisco and OpenAI redefine enterprise engineering with Codex
Cisco and OpenAI are redefining enterprise engineering with Codex, helping Cisco scale AI-native development, accelerate AI Defense work, and automate defect remediation.
Published: Wed, 27 May 2026 11:00:00 GMT
URL: https://openai.com/index/cisco
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: codex
```

### Anthropic News
Source URL: `https://www.anthropic.com/news`
Final URL: `https://www.anthropic.com/news`
Status/content: `200` / `text/html; charset=utf-8`

```text
Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work.
aa0ed2dce9810169112e1c77de2585fcf1f5c2-2880x1620.jpg&w=3840&q=75 1x" src="/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F0eaa0ed2dce9810169112e1c77de2585fcf1f5c2-2880x1620.jpg&w=3840&q=75"/> Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work. Product Apr 17, 2026 Introduci
Published: not provided
URL: https://www.anthropic.com/news/claude-opus-4-8
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent
```

```text
Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC
le__KxYrHG__headerDate caption">Date Category Title Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation </
Published: not provided
URL: https://www.anthropic.com/news/confidential-draft-s1-sec
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation
dule-scss-module__KxYrHG__date body-3">Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation May 28, 2026 Product Introducing Claude Opus 4.8 <a href="/news/milan-office-opening"
Published: not provided
URL: https://www.anthropic.com/news/series-h
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 28, 2026 Product Introducing Claude Opus 4.8
xYrHG__date body-3">May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation May 28, 2026 Product Introducing Claude Opus 4.8 May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, an
Published: not provided
URL: https://www.anthropic.com/news/claude-opus-4-8
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers
May 28, 2026 Product Introducing Claude Opus 4.8 May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Repre
Published: not provided
URL: https://www.anthropic.com/news/milan-office-opening
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening
ody-3">May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV
Published: not provided
URL: https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas"
, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas" May 22, 2026 Announcements Project Glasswing: An initial update <a href=
Published: not provided
URL: https://www.anthropic.com/news/chris-olah-pope-leo-encyclical
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 19, 2026 Announcements Widening the conversation on frontier AI
blicationList-module-scss-module__KxYrHG__date body-3">May 22, 2026 Announcements Project Glasswing: An initial update May 19, 2026 Announcements Widening the conversation on frontier AI May 19, 2026 Announcements KPMG integrates Claude across its core business and workforce of more than 276
Published: not provided
URL: https://www.anthropic.com/news/widening-conversation-ai
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 19, 2026 Announcements KPMG integrates Claude across its core business and workforce of more than 276,000 in strategic alliance
ationList-module-scss-module__KxYrHG__date body-3">May 19, 2026 Announcements Widening the conversation on frontier AI May 19, 2026 Announcements KPMG integrates Claude across its core business and workforce of more than 276,000 in strategic alliance May 18, 2026 Announcements Anthropic acquires Stainless <a href="#" cla
Published: not provided
URL: https://www.anthropic.com/news/anthropic-kpmg
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
May 18, 2026 Announcements Anthropic acquires Stainless
/time> Announcements KPMG integrates Claude across its core business and workforce of more than 276,000 in strategic alliance May 18, 2026 Announcements Anthropic acquires Stainless See more <path d="M12.854 9
Published: not provided
URL: https://www.anthropic.com/news/anthropic-acquires-stainless
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Responsible Scaling Policy
lass="SiteFooter-module-scss-module__JdOqwq__listItem body-4">Research News Claude’s Constitution Responsible Scaling Policy Security and compliance Transparency Terms and policies <a href="https://www.anthropic.com/legal/privacy" class="SiteFo
Published: not provided
URL: https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: governance
```

### AWS What's New
Source URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Final URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
AWS HealthOmics now supports Nextflow version pinning at run time
AWS HealthOmics now allows customers to specify the Nextflow engine version at run time via the StartRun API, enabling customers to pin runs to a specific Nextflow version for controlled migration. With this launch, customers can select from supported Nextflow versions (22.04, 23.10, 24.10, 25.10, 26.04) through the new engine-settings parameter, giving explicit control at the point of execution. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. Nextflow version pinning gives customers full control over when and how they adopt new engine versions. The run-time version override ensures that even when a workflow definition specifies a version via manifest.nextflowVersion in its config or profile, the StartRun API parameter takes precedence, enabling customer
Published: Mon, 01 Jun 2026 23:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-pinning-at-runtime/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: workflow
```

```text
AWS HealthOmics now supports Nextflow version 26.04
AWS HealthOmics now supports Nextflow version 26.04, enabling customers to take advantage of new Nextflow features and enhancements: record types, the strict syntax parser, workflow output summaries, and agent logging mode. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. The strict syntax parser, now enabled by default in Nextflow v26.04, helps customers save compute time and costs by enforcing strict linting, consistent block structures, and unambiguous scoping, catching issues during pipeline initialization rather than hours into workflows. Record types allow workflow developers to write workflows with meaningful data names rather than keeping track of order of tuple elements, making workflows more readable, and less error-prone. Workflow output summar
Published: Mon, 01 Jun 2026 23:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-26-04/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, workflow, infra
```

```text
Quick Research now supports customer managed keys
Amazon Quick Research now enables customers to encrypt their data using customer-managed keys (CMK) through AWS Key Management Service (KMS). This enhancement allows organizations with strict security and compliance requirements to manage their own encryption keys. With customer-managed keys, you gain enhanced security control and comprehensive audit capabilities through AWS CloudTrail integration. You can encrypt your data with your own KMS keys, trace all data access for security auditing, and revoke access to compromised keys within 15 minutes during security incidents. This feature supports multiple CMKs with one default key per AWS account per region, providing the flexibility to manage encryption across different datasets while maintaining granular control over your sensitive business intelligence data. Customer-managed keys must be created in the same AWS account and region as you
Published: Mon, 01 Jun 2026 18:27:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-research-cm-keys
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 20
Signal tags: governance
```

```text
Amazon Quick now supports VPC connectivity for MCP connections
Amazon Quick now enables enterprise customers to connect their privately hosted Model Context Protocol (MCP) servers to Quick through Amazon Virtual Private Cloud (VPC). Amazon Quick is an AI assistant that turns questions into answers, answers into actions, and actions into outcomes for you and your entire team. Previously, Quick's MCP support was limited to third-party hosted servers accessible over the public internet. With VPC support, organizations that host MCP servers on private networks for proprietary applications, custom data sources, and internal tools can now securely extend those capabilities to AI workflows in Quick. With VPC connectivity for MCP, you can connect Quick to MCP servers running on Amazon EC2, AWS Fargate, AWS Agentcore, or other compute within your private network without exposing them to the internet. During MCP connector creation, select your VPC connection 
Published: Mon, 01 Jun 2026 17:26:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 52
Signal tags: agent, mcp, workflow, infra, memory
```

```text
Amazon SageMaker adds permissions boundaries for SCP compliance
Amazon SageMaker Unified Studio now supports custom IAM permissions boundaries, so organizations that enforce Service Control Policies (SCPs) requiring permissions boundaries on all IAM roles can adopt SageMaker Unified Studio without modifying their security posture. When a user creates a project, SageMaker Unified Studio provisions three IAM roles: a project user role, an Amazon Bedrock service role, and a Bedrock Lambda execution role. With this launch, administrators can specify a permissions boundary in the Tooling blueprint configuration, and all three roles are created with that permissions boundary attached. This satisfies SCP requirements at creation time, and project provisioning succeeds without administrator intervention. The permissions boundary also limits what the provisioned roles can do, so administrators retain control over project-level permissions even as new projects
Published: Mon, 01 Jun 2026 17:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-scp/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 27
Signal tags: governance, infra
```

```text
Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region
Starting today, Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region. These instances are powered by custom Intel Xeon 6 processors, available only on AWS, delivering the highest performance and fastest memory bandwidth among comparable Intel processors in the cloud. The M8i and M8i-flex instances offer up to 15% better price-performance, and 2.5x more memory bandwidth compared to previous generation Intel-based instances. They deliver up to 20% better performance than M7i and M7i-flex instances, with even higher gains for specific workloads. The M8i and M8i-flex instances are up to 30% faster for PostgreSQL databases, up to 60% faster for NGINX web applications, and up to 40% faster for AI deep learning recommendation models compared to M7i and M7i-flex instances. M8i-flex are the easiest way to get price performance benefits for a majority of gen
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8i-m8i-flex-new-zealand/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: infra, memory
```

```text
Amazon EC2 M8azn instances are now available in Europe (Ireland) Region
Starting today, Amazon EC2 M8azn instances are now available in Europe (Ireland) Region. These general purpose high-frequency high-network instances are powered by fifth generation AMD EPYC (formerly code named Turin) processors and offer the highest maximum CPU frequency, 5GHz in the cloud. M8azn instances offer up to 2x compute performance compared to previous generation M5zn instances, and up to 24% higher performance than M8a instances. M8azn instances deliver up to 4.3x higher memory bandwidth and 10x larger L3 cache compared to M5zn instances allowing latency-sensitive and compute-intensive workloads to achieve results faster. These instances also offer up to 2x networking throughput and up to 3x EBS throughput versus M5zn instances. Built on the AWS Nitro System using sixth generation Nitro Cards, these instances are ideal for applications such as real-time financial analytics, hi
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8azn-europe-ireland/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: infra, memory
```

```text
Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager
Amazon Bedrock AgentCore Identity now allows customers the ability to reference existing AWS Secrets Manager secret ARNs directly in AgentCore Identity Credential Providers. Previously, AgentCore Identity used a service-managed secret approach, where secrets were created and managed by the service on the customer's behalf. This approach prevented customers from applying resource tags on create, encrypting secrets with a customer-managed key (CMK), or applying other organization-specific governance controls at the time of secret creation — causing friction for teams with strict governance requirements. Now, customers create and manage their secrets in AWS Secrets Manager using their own governance and compliance policies, including custom CMKs, tagging strategies, automatic rotation and resource policies, and then reference the existing secret ARN when configuring a Credential Provider in
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 31
Signal tags: agent, governance, infra
```

```text
Amazon SageMaker HyperPod now supports EFA-only network interfaces
Amazon SageMaker HyperPod now supports EFA-only network interfaces for cluster instance groups, enabling you to configure dedicated Elastic Fabric Adapter (EFA) devices without the traditional Elastic Network Adapter (ENA) for IP networking. SageMaker HyperPod is a purpose-built infrastructure for AI/ML model development that provides a resilient, high-performance environment with built-in fault tolerance and automated cluster recovery. Now with EFA-only, you can scale AI/ML clusters further without risking IP address exhaustion in your VPC. When running large-scale distributed training workloads, inter-node communication bandwidth is critical to training performance. SageMaker HyperPod cluster instances support multiple EFA-capable network interfaces, but configuring them with the standard efa interface type attaches both an EFA device and an ENA device (for IP networking) to each inter
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-hyperpod-efa-only/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: infra
```

```text
Amazon SageMaker HyperPod now offers troubleshooting skills for AI coding assistants
Amazon SageMaker HyperPod now provides troubleshooting skills that bring expert-level AI/ML cluster diagnostics directly into AI coding assistants such as Claude Code, Cursor, and Kiro. SageMaker HyperPod is a purpose-built infrastructure for developing, training, and deploying foundation models at scale. It provides a resilient and performant environment with built-in fault tolerance, and automated cluster recovery, reducing the undifferentiated heavy lifting of managing large-scale AI/ML infrastructure. HyperPod skills enable you to diagnose and resolve cluster issues through natural language, reducing the time and expertise required to troubleshoot distributed training and inference infrastructure. Debugging GPU hardware faults, diagnosing NCCL communication failures, and identifying performance bottlenecks across large distributed clusters remains complex and time-consuming. Operator
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-hyperpod-troubleshooting-skills/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 23
Signal tags: agent, claude-code, infra
```

```text
AWS Direct Connect now supports VIF Rate Limiters to help prevent network congestion
AWS Direct Connect now supports Virtual Interface (VIF) Rate Limiters on dedicated connections, which help you prevent network congestion caused by unexpected traffic spikes on a VIF which can potentially consume all available bandwidth, impacting workloads on other VIFs on the same connection. With VIF Rate Limiters, you can set a maximum bandwidth allocation for up to 10 VIFs on a dedicated connection, choosing from a wide range available capacity increments from 50 Mbps to 1.6 Tbps when using a link aggregation group. Rate limiting applies to traffic both ingressing and egressing the AWS network. If traffic on a rate-limited VIF exceeds the configured capacity, excess packets are dropped, preventing that VIF from consuming bandwidth needed by other VIFs on the same connection. A new traffic utilization metric presented as percentage of the VIF’s configured capacity and dropped packet 
Published: Mon, 01 Jun 2026 15:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-direct-connect-now-supports-vif-rate-limiters/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Amazon Bedrock adds Amazon CloudWatch metrics for OpenAI- and Anthropic-compatible APIs
Amazon Bedrock is a fully managed service that provides secure, enterprise-grade access to high-performing foundation models from leading AI companies, enabling you to build and scale generative AI applications. Amazon Bedrock customers can now monitor inference traffic to the bedrock-mantle endpoint with Amazon CloudWatch metrics, the same way they already do for the bedrock-runtime endpoint and other AWS services. The bedrock-mantle endpoint supports the OpenAI Responses API, OpenAI Chat Completions API, and the Anthropic Messages API, letting customers run existing OpenAI- or Anthropic-based applications on Amazon Bedrock with minimal code changes. CloudWatch metrics for the bedrock-mantle endpoint are published under the AWS/BedrockMantle namespace and include inference counts, input and output token totals, and client error counts. Metrics are published at multiple granularity level
Published: Mon, 01 Jun 2026 13:38:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-supports-cloudwatch-metrics-bedrock-mantle-endpoint/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 31
Signal tags: workflow, infra
```

### AWS Machine Learning Blog
Source URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Final URL: `https://aws.amazon.com/blogs/machine-learning/feed/`
Status/content: `200` / `application/rss+xml;charset=UTF-8`

```text
Building a secure auth code flow setup using AgentCore Gateway with MCP clients
This post demonstrates how to implement Open Authorization (OAuth) Code flow as an inbound authorization mechanism for MCP servers hosted on Amazon Bedrock AgentCore Gateway. By the end of this guide, you will have a production-ready setup where each AI assistant request is authenticated with a valid user identity token issued from your organization’s identity provider.
Published: Tue, 02 Jun 2026 03:23:35 +0000
URL: https://aws.amazon.com/blogs/machine-learning/building-a-secure-auth-code-flow-setup-using-agentcore-gateway-with-mcp-clients/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 29
Signal tags: agent, mcp, infra
```

```text
Reference your own AWS Secrets Manager secrets in Amazon Bedrock AgentCore Identity
Today, we’re excited to announce the ability to reference a secret in AWS Secrets Manager for AgentCore Identity, so you can reference your own preconfigured secret from Secrets Manager and retain full control over how it is managed. With this ability, you can extend your organization’s existing secrets governance processes to AgentCore. You can provide an existing, preconfigured AWS Secrets Manager secret to use with your credential provider resources. You retain full control over its encryption configuration, rotation, replication, tags, and resource policies, just as you would manage other secrets in Secrets Manager. You can also choose a secret from another AWS account within the same AWS Region, though cross-Region secret sharing isn’t supported. This also supports secrets brought in through AWS Secrets Manager external connectors, enabling integration with third-party secret manage
Published: Mon, 01 Jun 2026 22:16:28 +0000
URL: https://aws.amazon.com/blogs/machine-learning/reference-your-own-aws-secrets-manager-secrets-in-amazon-bedrock-agentcore-identity/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 36
Signal tags: agent, governance, infra
```

```text
Transforming rare cancer research with Amazon Quick: Integrating biomedical databases for breakthrough discoveries
In this post, we walk through how to use Amazon Quick Research to integrate biomedical data sources for rare cancer research. The walkthrough uses pediatric sarcoma as the research domain and draws on publicly available datasets from PubMed and other open biomedical repositories. It covers the end-to-end workflow: defining a research objective, configuring data sources, reviewing the AI-generated research plan, running the investigation, and iterating on results using the revision and versioning system.
Published: Mon, 01 Jun 2026 21:54:16 +0000
URL: https://aws.amazon.com/blogs/machine-learning/transforming-rare-cancer-research-with-amazon-quick-integrating-biomedical-databases-for-breakthrough-discoveries/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 18
Signal tags: workflow, infra
```

```text
OpenAI models and Codex on Amazon Bedrock are now generally available
GPT-5.5, GPT-5.4, and Codex are now generally available on Amazon Bedrock. Deploy them in production applications and agents today, on Bedrock’s high performance inference engine.
Published: Mon, 01 Jun 2026 21:31:12 +0000
URL: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 43
Signal tags: agent, codex, infra
```

```text
Extending MCP support for Amazon Bedrock AgentCore Gateway
While deploying Model Context Protocol (MCP) servers in production, enterprises need fine-grained access control across servers, observability into which teams use which tools, security guarantees against data exfiltration, and centralized credential management, all at scale. Amazon Bedrock AgentCore Gateway sits between MCP servers and the clients that consume them, centralizing credential management, observability, and secure […]
Published: Mon, 01 Jun 2026 18:35:03 +0000
URL: https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 64
Signal tags: agent, mcp, governance, workflow, infra, memory
```

```text
Secure AI agents with Policy and Lambda interceptors in Amazon Bedrock AgentCore gateway
In this post, we use a lakehouse data agent to demonstrate how you can use Policy for deterministic access control and Lambda interceptors for dynamic validation. We then show how to combine Lambda interceptors and Policy to implement a geography-based access control which requires both dynamic validation and deterministic access control.
Published: Mon, 01 Jun 2026 17:54:22 +0000
URL: https://aws.amazon.com/blogs/machine-learning/secure-ai-agents-with-policy-and-lambda-interceptors-in-amazon-bedrock-agentcore-gateway/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 36
Signal tags: agent, governance, infra
```

```text
Enable safe agentic payments with built-in guardrails using Amazon Bedrock AgentCore payments
In this post, we address several key risks that surface when designing an agentic payment system, and how to address them with the capabilities of AgentCore payments.
Published: Mon, 01 Jun 2026 17:30:12 +0000
URL: https://aws.amazon.com/blogs/machine-learning/enable-safe-agentic-payments-with-built-in-guardrails-using-amazon-bedrock-agentcore-payments/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 29
Signal tags: agent, infra
```

```text
AgentOps: Operationalize agentic AI at scale with Amazon Bedrock AgentCore
When you build agentic AI solutions, you face unique operational challenges. Agents make unpredictable decisions, costs spiral unexpectedly, and debugging non-deterministic failures seems impossible. Agentic AI applications don't just execute predetermined workflows. They reason, adapt, and make autonomous decisions, and DevOps practices need to be adapted. That's where AgentOps comes in, the operational discipline for deploying, managing, and continuously improving AI agents in production.
Published: Mon, 01 Jun 2026 16:12:18 +0000
URL: https://aws.amazon.com/blogs/machine-learning/agentops-operationalize-agentic-ai-at-scale-with-amazon-bedrock-agentcore/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 50
Signal tags: agent, workflow, infra
```

```text
Accelerate LLM model loading and increase context windows with GPUDirect on Amazon FSx for Lustre and TurboQuant
If you’re iterating on deploying large language models (LLMs) on AWS GPU instances, you’ve probably noticed the larger the model to be loaded into GPU High Bandwidth Memory (HBM), the longer the painful wait until the GPUs are ready for inference. As models grow to hundreds of billions of parameters and GPU environments grow ever […]
Published: Mon, 01 Jun 2026 16:07:19 +0000
URL: https://aws.amazon.com/blogs/machine-learning/accelerate-llm-model-loading-and-increase-context-windows-with-gpudirect-on-amazon-fsx-for-lustre-and-turboquant/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 35
Signal tags: infra, memory, finance
```

```text
Amazon Quick integration with time-series databases for market intelligence using MCP
In this post, we walk through a practical implementation using KDB-X MCP server integration with Amazon Quick, demonstrating how traders and analysts can ask questions using conversational language and receive actionable insights from datasets. You can apply this same integration pattern across various domains, from financial market analysis to IoT sensor monitoring to DevOps performance dashboards, where you need to simplify access to time series insights.
Published: Mon, 01 Jun 2026 16:01:24 +0000
URL: https://aws.amazon.com/blogs/machine-learning/amazon-quick-integration-with-time-series-databases-for-market-intelligence-using-mcp/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 32
Signal tags: mcp, infra, finance
```

```text
Comprehensive observability for Amazon SageMaker AI LLM inference: From GPU utilization to LLM quality
This post demonstrates a comprehensive observability solution using Amazon Managed Grafana dashboards that provides a holistic view of both quality and quantity for LLMs served on Amazon SageMaker AI endpoints with inference components.
Published: Fri, 29 May 2026 23:36:58 +0000
URL: https://aws.amazon.com/blogs/machine-learning/comprehensive-observability-for-amazon-sagemaker-ai-llm-inference-from-gpu-utilization-to-llm-quality/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 28
Signal tags: infra, finance
```

```text
Training Azerbaijani language models on Amazon SageMaker AI
Azercell Telecom LLC, Azerbaijan's leading telecommunications provider, wanted to build an Azerbaijani large language model (LLM) on Amazon SageMaker AI for telecom use cases and a customer-facing chatbot. The challenge: adapting foundation models (FMs) to a morphologically rich language with limited training data and no existing blueprint for efficient LLM training in Azerbaijani. In a six-week collaboration, Azercell worked with the AWS Generative AI Innovation Center to establish a production-ready framework on Amazon SageMaker AI.
Published: Thu, 28 May 2026 21:54:06 +0000
URL: https://aws.amazon.com/blogs/machine-learning/training-azerbaijani-language-models-on-amazon-sagemaker-ai/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

### Google Developers Blog
Source URL: `https://developers.googleblog.com/en/feed.xml`
Final URL: `https://developers.googleblog.com/en/feed.xml`
Status/content: `None` / ``
Unavailable: `<HTTPError 404: 'Not Found'>`

### Google Cloud Blog AI/ML
Source URL: `https://cloud.google.com/blog/products/ai-machine-learning/rss/`
Final URL: `https://cloud.google.com/blog/products/ai-machine-learning/rss/`
Status/content: `200` / `text/html; charset=utf-8`

```text
Jump to Content
Jump to Content <div class="nRhiJb-rSCjMe-haAclf"
Published: not provided
URL: https://cloud.google.com/blog/products/ai-machine-learning/rss/#content
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Contact sales
track-name="blog"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/"track-metadata-module="header"> Blog Contact sales Get started for free <form action="/blog/s
Published: not provided
URL: https://cloud.google.com/contact/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Get started for free
google.com/contact/" track-name="contact sales"track-type="blog nav"track-metadata-eventdetail="cloud.google.com/contact/"track-metadata-module="header" track-name="contact sales"track-type="button"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/contact/">Contact sales Get started for free <span class="A0lwXc" jsname="D8MWrd" aria-labe
Published: not provided
URL: https://console.cloud.google.com/freetrial/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
AI & Machine Learning
ass="glue-header__link">Solutions & technology AI & Machine Learning API Management <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/application-development" track-name="
Published: not provided
URL: https://cloud.google.com/blog/products/ai-machine-learning
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
API Management
ts/ai-machine-learning" track-name="ai & machine learning"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/ai-machine-learning"track-metadata-module="header"> AI & Machine Learning API Management Application Development <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/a
Published: not provided
URL: https://cloud.google.com/blog/products/api-management
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Application Development
s://cloud.google.com/blog/products/api-management" track-name="api management"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/api-management"track-metadata-module="header"> API Management Application Development Application Modernization <a class="glue-header__link janap " href="https://cloud.google.com/blog/pr
Published: not provided
URL: https://cloud.google.com/blog/products/application-development
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Application Modernization
pplication-development" track-name="application development"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/application-development"track-metadata-module="header"> Application Development Application Modernization Chrome Enterprise <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/compute" track-name="comp
Published: not provided
URL: https://cloud.google.com/blog/products/application-modernization
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Chrome Enterprise
on-modernization" track-name="application modernization"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/application-modernization"track-metadata-module="header"> Application Modernization Chrome Enterprise Compute <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/containers-kubernetes" track-name="containers & kubernetes"tr
Published: not provided
URL: https://cloud.google.com/blog/products/chrome-enterprise
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: sandbox, infra
```

```text
Containers & Kubernetes
der__link janap " href="https://cloud.google.com/blog/products/compute" track-name="compute"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/compute"track-metadata-module="header"> Compute Containers & Kubernetes Data Analytics <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/databases" track-name="databases"trac
Published: not provided
URL: https://cloud.google.com/blog/products/containers-kubernetes
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: sandbox, infra
```

```text
Data Analytics
iners-kubernetes" track-name="containers & kubernetes"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/containers-kubernetes"track-metadata-module="header"> Containers & Kubernetes Data Analytics Databases <a class="glue-header__link janap " href="https://cloud.google.com/blog/products/devops-sre" track-name="devops & sre"track-type="blog
Published: not provided
URL: https://cloud.google.com/blog/products/data-analytics
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: sandbox, infra
```

```text
Databases
s://cloud.google.com/blog/products/data-analytics" track-name="data analytics"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/data-analytics"track-metadata-module="header"> Data Analytics Databases DevOps & SRE <a class="glue-header__link janap " href="https://cloud.google.com/blog/topics/maps-geospatial" track-name="maps & geo
Published: not provided
URL: https://cloud.google.com/blog/products/databases
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
DevOps & SRE
k janap " href="https://cloud.google.com/blog/products/databases" track-name="databases"track-type="blog nav"track-metadata-position="nav"track-metadata-eventdetail="cloud.google.com/blog/products/databases"track-metadata-module="header"> Databases DevOps & SRE Maps & Geospatial Security<svg class="nRhiJb-Bz112c nRhiJb-Bz112c-OWXEXe-SFi8G" viewBox="
Published: not provided
URL: https://cloud.google.com/blog/products/devops-sre
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: governance, infra
```

### GitHub Changelog
Source URL: `https://github.blog/changelog/feed/`
Final URL: `https://github.blog/changelog/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
Evaluation models in auto for individual plans
GitHub Copilot offers access to evaluation models for individual non-enterprise users, and these models may be served in Copilot auto model selection. To disable use of evaluation models through Copilot… The post Evaluation models in auto for individual plans appeared first on The GitHub Blog .
Published: Mon, 01 Jun 2026 16:18:17 +0000
URL: https://github.blog/changelog/2026-06-01-evaluation-models-in-auto-for-individual-plans
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Updates to GitHub Copilot billing and plans
As announced in our recent blog post, usage-based billing for GitHub Copilot is now live for all users and Copilot code review consumes GitHub Actions minutes, in addition to GitHub… The post Updates to GitHub Copilot billing and plans appeared first on The GitHub Blog .
Published: Mon, 01 Jun 2026 14:00:26 +0000
URL: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Copilot usage metrics API adds cohorts for AI adoption
To help you tell a deeper Copilot adoption story—not just who is active, but how they’re using Copilot—the Copilot usage metrics API now classifies each engaged user into an AI… The post Copilot usage metrics API adds cohorts for AI adoption appeared first on The GitHub Blog .
Published: Fri, 29 May 2026 21:03:00 +0000
URL: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Hard budget limits now available for GitHub Advanced Security
Enterprise administrators and billing managers can now set hard budget limits for GitHub Advanced Security (GHAS) SKUs, preventing teams from exceeding their allocated license budgets. Previously, license-based products like GHAS… The post Hard budget limits now available for GitHub Advanced Security appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:59:05 +0000
URL: https://github.blog/changelog/2026-05-28-hard-budget-limits-now-available-for-github-advanced-security
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
CodeQL 2.25.5 improves query accuracy for GitHub Actions
CodeQL is the static analysis engine behind GitHub code scanning, which finds and remediates security issues in your code. We’ve recently released CodeQL 2.25.5, which includes accuracy improvements across C/C++,… The post CodeQL 2.25.5 improves query accuracy for GitHub Actions appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:09:44 +0000
URL: https://github.blog/changelog/2026-05-28-codeql-2-25-5-improves-query-accuracy-for-github-actions
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
Claude Opus 4.8 is generally available for GitHub Copilot
Claude Opus 4.8, Anthropic’s latest Opus model, is now available in GitHub Copilot. In our early testing, Opus 4.8 demonstrates a clear step forward in code understanding and generation across… The post Claude Opus 4.8 is generally available for GitHub Copilot appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 16:56:24 +0000
URL: https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Copilot Memory has more controls for deletion, scope, and the Copilot CLI
Copilot Memory now includes improved memory deletion, adds a repository-level off switch, and brings further memory controls into the Copilot CLI. Copilot Memory is in public preview and available to… The post Copilot Memory has more controls for deletion, scope, and the Copilot CLI appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 21:05:28 +0000
URL: https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: memory
```

```text
GitHub Code Quality: Repository Enablement API
You can now programmatically enable and configure GitHub Code Quality on individual repositories using the new Repository Enablement API, available today in public preview. Two new endpoints are now available:… The post GitHub Code Quality: Repository Enablement API appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 20:35:06 +0000
URL: https://github.blog/changelog/2026-05-26-github-code-quality-repository-enablement-api
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Target Copilot models to organizations with model rules
Enterprise owners now have granular control over which GitHub Copilot models are available to each organization. With targeted model rules, you can allow specific models for specific organizations instead of… The post Target Copilot models to organizations with model rules appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 19:47:22 +0000
URL: https://github.blog/changelog/2026-05-26-target-copilot-models-to-organizations-with-model-rules
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Dependabot version updates now support the sbt ecosystem
Dependabot now supports sbt. Add sbt as a package ecosystem in your dependabot.yml file. Dependabot will then monitor your build.sbt inputs and open pull requests when newer commits are available… The post Dependabot version updates now support the sbt ecosystem appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 16:10:46 +0000
URL: https://github.blog/changelog/2026-05-26-dependabot-version-updates-now-support-the-sbt-ecosystem
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

### GitHub Engineering
Source URL: `https://github.blog/engineering/feed/`
Final URL: `https://github.blog/engineering/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
From latency to instant: Modernizing GitHub Issues navigation performance
How the GitHub Issues team used client-side caching, smart prefetching, and service workers to make navigation feel instant. The post From latency to instant: Modernizing GitHub Issues navigation performance appeared first on The GitHub Blog .
Published: Thu, 14 May 2026 16:00:00 +0000
URL: https://github.blog/engineering/architecture-optimization/from-latency-to-instant-modernizing-github-issues-navigation-performance/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How GitHub uses eBPF to improve deployment safety
Learn how Github uses eBPF to detect and prevent circular dependencies in its deployment tooling. The post How GitHub uses eBPF to improve deployment safety appeared first on The GitHub Blog .
Published: Thu, 16 Apr 2026 16:00:00 +0000
URL: https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
The uphill climb of making diff lines performant
The path to better performance is often found in simplicity. The post The uphill climb of making diff lines performant appeared first on The GitHub Blog .
Published: Fri, 03 Apr 2026 16:00:00 +0000
URL: https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Agent-driven development in Copilot Applied Science
I used coding agents to build agents that automated part of my job. Here's what I learned about working better with coding agents. The post Agent-driven development in Copilot Applied Science appeared first on The GitHub Blog .
Published: Tue, 31 Mar 2026 16:00:00 +0000
URL: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent
```

```text
Continuous AI for accessibility: How GitHub transforms feedback into inclusion
AI automates triage for accessibility feedback, allowing us to focus on fixing barriers—turning a chaotic backlog into continuous, rapid resolutions. The post Continuous AI for accessibility: How GitHub transforms feedback into inclusion appeared first on The GitHub Blog .
Published: Thu, 12 Mar 2026 16:00:00 +0000
URL: https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How we rebuilt the search architecture for high availability in GitHub Enterprise Server
Here's how we made the search experience better, faster, and more resilient for GHES customers. The post How we rebuilt the search architecture for high availability in GitHub Enterprise Server appeared first on The GitHub Blog .
Published: Tue, 03 Mar 2026 18:45:09 +0000
URL: https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner
Learn how GitHub built an accessible, multi-terminal-safe ASCII animation for the Copilot CLI using custom tooling, ANSI color roles, and advanced terminal engineering. The post From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner appeared first on The GitHub Blog .
Published: Wed, 28 Jan 2026 17:00:00 +0000
URL: https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
When protections outlive their purpose: A lesson on managing defense systems at scale
User feedback led us to clean up outdated mitigations. See why observability and lifecycle management are critical for defense systems. The post When protections outlive their purpose: A lesson on managing defense systems at scale appeared first on The GitHub Blog .
Published: Thu, 15 Jan 2026 20:54:32 +0000
URL: https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Post-quantum security for SSH access on GitHub
GitHub is introducing post-quantum secure key exchange methods for SSH access to better protect Git data in transit. The post Post-quantum security for SSH access on GitHub appeared first on The GitHub Blog .
Published: Mon, 15 Sep 2025 16:00:00 +0000
URL: https://github.blog/engineering/platform-security/post-quantum-security-for-ssh-access-on-github/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: governance, finance
```

```text
How GitHub engineers tackle platform problems
Our best practices for quickly identifying, resolving, and preventing issues at scale. The post How GitHub engineers tackle platform problems appeared first on The GitHub Blog .
Published: Tue, 10 Jun 2025 16:00:00 +0000
URL: https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
Final URL: `https://blog.cloudflare.com/rss/`
Status/content: `200` / `application/xml`

```text
How we reduced core unit boot time from hours to minutes
We investigated why firmware updates were causing our core servers to take four hours to reboot. By diving into UEFI data structures and iPXE automation, we eliminated unnecessary timeouts and cut boot times back down to minutes.
Published: Mon, 01 Jun 2026 16:53:39 GMT
URL: https://blog.cloudflare.com/optimizing-core-unit-boot-time/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: workflow
```

```text
How we built Cloudflare's data platform and an AI agent on top of it
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
Published: Thu, 28 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/our-unified-data-platform/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
Iran's Internet is partially restored, Cloudflare Radar data shows
Cloudflare Radar data confirms early indications of a partial Internet restoration in Iran, nearly three months after the shutdown began. Traffic spikes and DNS queries have risen, but network activity is currently just 40% of pre-shutdown levels.
Published: Wed, 27 May 2026 17:25:00 GMT
URL: https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Announcing Claude Compliance API support with Cloudflare CASB
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
Published: Thu, 21 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: governance, infra
```

```text
Announcing Claude Managed Agents on Cloudflare
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
Published: Tue, 19 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/claude-managed-agents/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 30
Signal tags: agent, workflow
```

```text
Project Glasswing: what Mythos showed us
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
Published: Mon, 18 May 2026 06:00:00 GMT
URL: https://blog.cloudflare.com/cyber-frontier-models/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
When a partitioning change to our petabyte-scale ClickHouse cluster caused critical billing jobs to stall, standard metrics showed no obvious errors. This post explores how we identified severe lock contention in ClickHouse's query planner and built upstream patches to fix it.
Published: Thu, 14 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/clickhouse-query-plan-contention/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: workflow, infra
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
Published: Wed, 13 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/browser-run-containers/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: sandbox
```

```text
When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug
We investigated a bug where CUBIC's congestion window became pinned at its minimum floor, causing a performance to plummet. The fix involved correctly measuring idle periods to distinguish RTT wait times from actual application idleness.
Published: Tue, 12 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/quic-death-spiral-fix/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Building for the future
This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency, and we believe it's important that you hear this directly from us because it’s a major moment at Cloudflare.
Published: Thu, 07 May 2026 20:15:12 GMT
URL: https://blog.cloudflare.com/building-for-the-future/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
Published: Thu, 07 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
When DNSSEC goes wrong: how we responded to the .de TLD outage
On May 5, 2026, DENIC published broken DNSSEC signatures for the .de TLD, making millions of domains unreachable. Here's what 1.1.1.1 saw, how serve stale cushioned the impact, and how we restored resolution.
Published: Wed, 06 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/de-tld-outage-dnssec/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### Docker Blog
Source URL: `https://www.docker.com/blog/feed/`
Final URL: `https://www.docker.com/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
What is Sandbox Security?
If you're already familiar with sandboxing as an isolation technique, sandbox security is the next layer: the policies, controls, and enforcement mechanisms that make sure those isolation boundaries actually hold under real-world pressure. According to our State of Agentic AI report, 40% of respondents cite security as the top challenge in scaling agentic AI, and...
Published: Mon, 01 Jun 2026 15:51:31 +0000
URL: https://www.docker.com/blog/what-is-sandbox-security/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 23
Signal tags: agent, sandbox, governance
```

```text
Coding Agent Horror Stories: The rm -rf ~/ Incident
This is Part 2 of our AI Coding Agent Horror Stories series, an in-depth look at real-world security incidents exposing the vulnerabilities in AI coding agents, and how Docker Sandboxes deliver workspace-scoped isolation that contains the worst failures at the execution layer. In part 1 of this series, we mapped six categories of AI coding...
Published: Mon, 01 Jun 2026 13:00:00 +0000
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 41
Signal tags: agent, sandbox, governance
```

```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
Published: Wed, 27 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: sandbox
```

```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
Published: Tue, 26 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 37
Signal tags: agent, claude-code, sandbox
```

```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
Published: Tue, 19 May 2026 19:08:04 +0000
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 20
Signal tags: agent, sandbox, workflow
```

```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
Published: Mon, 18 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/ai-coding-agent-horror-stories-security-risks/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 41
Signal tags: agent, sandbox, governance
```

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
Published: Fri, 15 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: mcp, memory
```

```text
NIST Narrows the NVD: What Container Security Programs Should Reassess
On April 15, NIST announced a prioritized enrichment model for the National Vulnerability Database. Most CVEs will still be published, but fewer will receive the CVSS scores, CPE mappings, and CWE classifications that container scanners and compliance programs have historically relied on. The change formalizes a drift that has been visible to anyone pulling NVD...
Published: Wed, 13 May 2026 10:38:28 +0000
URL: https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: sandbox, governance, infra
```

```text
Docker AI Governance: Unlock Agent Autonomy, Safely
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call, so every developer in your company can run AI agents safely, wherever they work. Your laptop is the new prod Agents are the biggest productivity unlock...
Published: Tue, 12 May 2026 18:00:09 +0000
URL: https://www.docker.com/blog/docker-ai-governance-unlock-agent-autonomy-safely/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 34
Signal tags: agent, mcp, governance, workflow, infra
```

```text
Comparing Different Approaches to Sandboxing
Whether you are a software engineer, a product manager, or a designer, this quote should fundamentally change how we approach our daily routine. We are no longer just building interfaces; we are creating environments where agents can operate autonomously with minimal human interaction. What could be the fundamental requirement for such an environment ? In...
Published: Thu, 07 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/comparing-sandboxing-approaches-ai-agents/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, sandbox
```

### Kubernetes Blog
Source URL: `https://kubernetes.io/feed.xml`
Final URL: `https://kubernetes.io/feed.xml`
Status/content: `200` / `application/xml`

```text
From Kubernetes Dashboard to Headlamp: Understanding the Transition
For many people, Kubernetes Dashboard was their first window into Kubernetes. It offered a simple visual way to see what was running in a cluster, inspect resources, and build confidence without relying on the command line. For years, it helped developers, students, and operators make sense of Kubernetes, and it served as an important onramp into the ecosystem. The Kubernetes Dashboard project has now been archived. We deeply respect the work the team did and the role Dashboard played in making Kubernetes more approachable for so many users. Headlamp builds on that foundation and carries it forward. It keeps the clarity of a visual interface while adding capabilities that match how Kubernetes is used today. This includes multi-cluster visibility, application-centric views, extensibility through plugins, and flexible deployment options that work both in-cluster and on the desktop. This gu
Published: Mon, 01 Jun 2026 10:00:00 -0800
URL: https://kubernetes.io/blog/2026/06/01/dashboard-to-headlamp/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: infra
```

```text
Reconciling the Past: Correcting Records for Unfixed Kubernetes CVEs
The Kubernetes project relies on transparency to empower cluster administrators and security researchers. One important way we do that is by publishing CVE records into the Common Vulnerabilities and Exposures database. As part of our ongoing effort to mature the official Kubernetes CVE Feed , we have identified some discrepancies. CVE records for a few older, unfixed issues incorrectly include a fixed version field. The Kubernetes Security Response Committee (SRC) will correct the affected CVE records on June 1, 2026. This may result in vulnerability scanners identifying these vulnerabilities in places where they were previously not detected. To help reduce confusion, this post provides a technical update on three vulnerabilities that were disclosed in previous years but remain unfixed: CVE-2020-8561 , CVE-2020-8562 , and CVE-2021-25740 . Why we are updating these records now While thes
Published: Tue, 26 May 2026 09:30:00 -0800
URL: https://kubernetes.io/blog/2026/05/26/reconciling-unfixed-kubernetes-cves/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: governance, infra
```

```text
Announcing etcd 3.7.0-beta.0
SIG-Etcd announces the availability of the first beta release of etcd v3.7.0 . This new version of the popular distributed database and key Kubernetes component includes the long-requested RangeStream feature, as well as a refactoring and cleanup of multiple legacy components and interfaces. v3.7 will deliver improved security, better operational reliability, and an improved experience for working with large resultsets. First, however, the project needs users to test the beta. You can find v3.7.0-beta.0 here: Source code Binaries Official container images Please try it out and report issues in the etcd repo . This beta also determines the EOL of version 3.4. RangeStream In etcd v3.6 and earlier, it is challenging to work with requests that return large resultsets. The client or requesting application is forced to wait for the full result set, leading to unpredictable latency and memory u
Published: Wed, 20 May 2026 00:00:00 +0000
URL: https://kubernetes.io/blog/2026/05/20/etcd-370-beta/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 23
Signal tags: sandbox, governance, infra, memory
```

```text
Kubernetes v1.36: New Metric for Route Sync in the Cloud Controller Manager
This article was originally published with the wrong date. It was later republished, dated the 15th of May 2026. Kubernetes v1.36 introduces a new alpha counter metric route_controller_route_sync_total to the Cloud Controller Manager (CCM) route controller implementation at k8s.io/cloud-provider . This metric increments each time routes are synced with the cloud provider. A/B testing watch-based route reconciliation This metric was added to help operators validate the CloudControllerManagerWatchBasedRoutesReconciliation feature gate introduced in Kubernetes v1.35 . That feature gate switches the route controller from a fixed-interval loop to a watch-based approach that only reconciles when nodes actually change. This reduces unnecessary API calls to the infrastructure provider, lowering pressure on rate-limited APIs and allowing operators to make more efficient use of their available quo
Published: Fri, 15 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/ccm-new-metric-route-sync-total/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature (under the feature gate UnknownVersionInteroperabilityProxy ) in a previous blog post . The goal was simple but critical: make cluster upgrades safer by ensuring that requests for resources not yet known to an older API server are correctly routed to a newer peer API server, instead of returning an incorrect 404 Not Found . We are excited to announce that the Mixed Version Proxy is moving to Beta in Kubernetes 1.36 and will be enabled by default! The feature has evolved significantly since its initial release, addressing key gaps and modernizing its architecture. Here is a look at how the feature has evolved and what you need to know to leverage it in your clusters. What problem are we solving? In a highly available control plane undergoing an upgrade, you often have API servers running different ver
Published: Fri, 15 May 2026 10:00:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/kubernetes-1-36-feature-mixed-version-proxy-beta/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: infra, memory
```

```text
Kubernetes v1.36: Deprecation and removal of Service ExternalIPs
The .spec.externalIPs field for Service was an early attempt to provide cloud-load-balancer-like functionality for non-cloud clusters. Unfortunately, the API assumes that every user in the cluster is fully trusted, and in any situation where that is not the case, it enables various security exploits, as described in CVE-2020-8554 . Since Kubernetes 1.21, the Kubernetes project has recommended that all users disable .spec.externalIPs . To make that easier, Kubernetes also added an admission controller ( DenyServiceExternalIPs ) that can be enabled to do this. At the time, SIG Network felt that blocking the functionality by default was too large a breaking change to consider. However, the security problems are still there, and as a project we're increasingly unhappy with the "insecure by default" state of the feature. Additionally, there are now several better alternatives for non-cloud cl
Published: Thu, 14 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/14/kubernetes-v1-36-deprecation-and-removal-of-service-externalips/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: governance, infra
```

```text
Kubernetes v1.36: Advancing Workload-Aware Scheduling
AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling. In Kubernetes v1.35, we introduced the first tranche of workload-aware scheduling improvements, featuring the foundational Workload API alongside basic gang scheduling support built on a Pod-based framework, and an opportunistic batching feature to efficiently process identical Pods. Kubernetes v1.36 introduces a significant architectural evolution by cleanly separating API concerns: the Workload API acts as a static template, while the new PodGroup API handles the runtime state. To support this, the kube-scheduler features a new PodGroup scheduling cycle that enables atomic workload processing and paves the way for future enhancements. This release also debuts the first iterations of topology-aware scheduling and workload-aware preemption to advance scheduling capabilities. Addi
Published: Wed, 13 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/13/kubernetes-v1-36-advancing-workload-aware-scheduling/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: workflow, infra
```

```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage. Unlike traditional utilization metrics, PSI tells the story of tasks stalled and time lost, all in nicely-packaged percentages of time across the CPU, memory, and I/O. With the recent release of Kubernetes v1.36, users across the ecosystem have a stable, reliable interface to observe resource contention at the node, pod, and container levels. In this post, we will dive into the improvements and performance testing that proved its readiness for production. Beyond utilization: why PSI? Monitoring CPU or memory usage alone can be misleading. A node may report XX% (below 100%) CPU utilization while certain tasks are experiencing severe latency due to scheduling delays. PSI fills th
Published: Tue, 12 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/12/kubernetes-v1-36-psi-metrics-ga/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: sandbox, infra, memory
```

```text
Kubernetes v1.36: Moving Volume Group Snapshots to GA
Volume group snapshots were introduced as an Alpha feature with the Kubernetes v1.27 release, moved to Beta in v1.32, and to a second Beta in v1.34. We are excited to announce that in the Kubernetes v1.36 release, support for volume group snapshots has reached General Availability (GA) . The support for volume group snapshots relies on a set of extension APIs for group snapshots . These APIs allow users to take crash-consistent snapshots for a set of volumes. Behind the scenes, Kubernetes uses a label selector to group multiple PersistentVolumeClaim objects for snapshotting. A key aim is to allow you to restore that set of snapshots to new volumes and recover your workload based on a crash-consistent recovery point. This feature is only supported for CSI volume drivers. An overview of volume group snapshots Some storage systems provide the ability to create a crash-consistent snapshot of
Published: Fri, 08 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/08/kubernetes-v1-36-volume-group-snapshot-ga/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: infra, memory
```

```text
Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
Dynamic Resource Allocation (DRA) has fundamentally changed how platform administrators handle hardware accelerators and specialized resources in Kubernetes. In the v1.36 release, DRA continues to mature, bringing a wave of feature graduations, critical usability improvements, and new capabilities that extend the flexibility of DRA to native resources like memory and CPU, and support for ResourceClaims in PodGroups. Driver availability continues to expand. Beyond specialized compute accelerators, the ecosystem includes support for networking and other hardware types, reflecting a move toward a more robust, hardware-agnostic infrastructure. Whether you are managing massive fleets of GPUs, need better handling of failures, or simply looking for better ways to define resource fallback options, the upgrades to DRA in 1.36 have something for you. Let's dive into the new features and graduatio
Published: Thu, 07 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/07/kubernetes-v1-36-dra-136-updates/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: infra, memory
```

```text
Kubernetes v1.36: Server-Side Sharded List and Watch
As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserialize everything, only to discard the objects it is not responsible for. Scaling out the controller does not reduce per-replica cost; it multiplies it. Kubernetes v1.36 introduces server-side sharded list and watch as an alpha feature ( KEP-5866 ). With this feature enabled, the API server filters events at the source so that each controller replica receives only the slice of the resource collection it owns. The problem with client-side sharding Some controllers, such as kube-state-metrics , already support horizontal sharding. Each replica is assigned a portion of the keyspace and discards object
Published: Wed, 06 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: infra, memory
```

```text
Kubernetes v1.36: Declarative Validation Graduates to GA
In Kubernetes v1.36, Declarative Validation for Kubernetes native types has reached General Availability (GA). For users, this means more reliable, predictable, and better-documented APIs. By moving to a declarative model, the project also unlocks the future ability to publish validation rules via OpenAPI and integrate with ecosystem tools like Kubebuilder. For contributors and ecosystem developers, this replaces thousands of lines of handwritten validation code with a unified, maintainable framework. This post covers why this migration was necessary, how the declarative validation framework works, and what new capabilities come with this GA release. The Motivation: Escaping the "Handwritten" Technical Debt For years, the validation of Kubernetes native APIs relied almost entirely on handwritten Go code. If a field needed to be bounded by a minimum value, or if two fields needed to be mu
Published: Tue, 05 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/05/kubernetes-v1-36-declarative-validation-ga/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: workflow, infra
```

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
Final URL: `https://huggingface.co/blog/feed.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains

Published: Mon, 01 Jun 2026 15:45:17 GMT
URL: https://huggingface.co/blog/JetBrains/mellum2-launch
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic

Published: Mon, 01 Jun 2026 13:51:18 GMT
URL: https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action

Published: Mon, 01 Jun 2026 04:44:55 GMT
URL: https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler

Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/torch-profiler
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Reachy Mini goes fully local

Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/local-reachy-mini-conversation
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL

Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/delta-weight-sync
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Harness, Scaffold, and the AI Agent Terms Worth Getting Right

Published: Mon, 25 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/agent-glossary
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook

Published: Fri, 22 May 2026 15:25:59 GMT
URL: https://huggingface.co/blog/Dharma-AI/specialization-beats-scale
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
OlmoEarth v1.1: A more efficient family of Earth observation models

Published: Tue, 19 May 2026 18:38:09 GMT
URL: https://huggingface.co/blog/allenai/olmoearth-v1-1
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Introducing the Ettin Reranker Family

Published: Tue, 19 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/ettin-reranker
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend

Published: Mon, 18 May 2026 15:12:46 GMT
URL: https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality

Published: Thu, 14 May 2026 18:55:01 GMT
URL: https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: memory
```

### LangChain Blog
Source URL: `https://www.langchain.com/blog/rss.xml`
Final URL: `https://www.langchain.com/blog/rss.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
How Rippling built production AI in 6 months with Deep Agents and LangSmith
Rippling uses LangChain Deep Agents and LangSmith to run cross-domain AI across HR, IT, finance, payroll, and global operations.
Published: Mon, 01 Jun 2026 16:05:12 GMT
URL: https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 13
Signal tags: agent, finance
```

```text
Interpreter Skills: Building Workflows for Agents
Interpreter skills extend agent skills with a TypeScript module the agent can import and run. This lets you build more capable workflows with your agents.
Published: Sat, 30 May 2026 01:01:20 GMT
URL: https://www.langchain.com/blog/interpreter-skills
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent, workflow
```

```text
Mission Control for Self-Hosted LangSmith on Kubernetes
How Mission Control helps teams operate self-hosted LangSmith on Kubernetes with in-cluster config, preflight checks, health views, releases, and diagnostics.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/mission-control-operating-self-hosted-langsmith-on-kubernetes
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 6
Signal tags: infra
```

```text
LangSmith Sandboxes are Generally Available
Run AI agents safely with LangSmith Sandboxes (GA): kernel-isolated microVMs with snapshots, parallel forks, service URLs, and auth proxies. Built for coding agents, CI agents, and data pipelines
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/langsmith-sandboxes-generally-available
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 34
Signal tags: agent, sandbox, workflow
```

```text
Introducing Langsmith Engine
LangSmith Engine watches your production traces, clusters failures into named issues, and proposes targeted fixes and eval coverage. Stop manually triaging agent failures.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/introducing-langsmith-engine
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 13
Signal tags: agent, infra, memory
```

```text
The Agent Development Lifecycle: Build, Test, Deploy & Monitor AI Agents | LangChain
Learn how leading engineering teams ship AI agents reliably and repeatedly using a four-phase agent development lifecycle: Build, Test, Deploy, and Monitor. Includes guidance on evals, runtimes, observability, and governance at scale.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/the-agent-development-lifecycle
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 30
Signal tags: agent, governance, workflow, infra
```

```text
Fixing agent failures in production: Interrupt 2026 recap | LangChain Newsletter
Recapping two days of Interrupt 2026 — LangSmith Engine, Sandboxes GA, LangChain Labs, and 23 talks from teams at LinkedIn, Rippling, Cisco, and more. Now on demand.
Published: Thu, 28 May 2026 14:08:39 GMT
URL: https://www.langchain.com/blog/may-2026-langchain-newsletter
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 6
Signal tags: agent, sandbox
```

```text
April 2026: LangChain Newsletter
April means we're officially counting down to Interrupt. We’ve got two more meetups on the agent improvement loop before April officially closes out in New York and San Francisco. RSVP while seats still last!
Published: Thu, 28 May 2026 14:08:39 GMT
URL: https://www.langchain.com/blog/april-2026-langchain-newsletter
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
How Lyft Built a Self-Serve AI Agent Platform with LangGraph and LangSmith
Lyft used LangGraph and LangSmith to build a self-serve AI agent platform for customer support, cutting agent development from months to weeks.
Published: Wed, 27 May 2026 21:41:16 GMT
URL: https://www.langchain.com/blog/lyft-built-a-self-serve-ai-agent-platform-for-customer-support-with-langgraph-and-langsmith
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
From Token Streams to Agent Streams
Move beyond token streaming. Learn how the latest streaming primitives in Deep Agents, LangChain, and LangGraph enable typed events, scoped subscriptions, subagent visibility, multimodal outputs, and resilient frontend experiences for building production-ready agent applications.
Published: Thu, 21 May 2026 20:32:38 GMT
URL: https://www.langchain.com/blog/token-streams-to-agent-streams
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, infra
```

### LlamaIndex Blog
Source URL: `https://www.llamaindex.ai/blog/rss.xml`
Final URL: `https://www.llamaindex.ai/blog/rss.xml`
Status/content: `None` / ``
Unavailable: `<HTTPError 404: 'Not Found'>`

### Vercel Blog
Source URL: `https://vercel.com/blog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
team settings
ext deployment will automatically run on a higher tier Thresholds are set conservatively to balance deployment reliability and cost. Vercel only considers your build's memory usage, not the memory used by Vercel's own build infrastructure. Enable elastic builds in your team settings or project settings , or read the docs . Read more Mehul Kar
Published: not provided
URL: https://vercel.com/d?to=%2F%5Bteam%5D%2F~%2Fsettings%2Fbuild-and-deployment%23build-machines
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: memory
```

```text
project settings
nt reliability and cost. Vercel only considers your build's memory usage, not the memory used by Vercel's own build infrastructure. Enable elastic builds in your team settings or project settings , or read the docs . Read more Mehul Kar https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway Qwen 3.7 Plu
Published: not provided
URL: https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23build-machine
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: memory
```

```text
Read more
am settings or project settings , or read the docs . Read more Mehul Kar https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway Qwen 3.7 Plus now available on AI Gateway 2026-06-01T07:00:00.000Z
Published: not provided
URL: https://vercel.com/changelog/elastic-build-machines-now-protect-against-out-of-memory-builds
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Vercel AI Gateway
I Gateway 2026-06-01T07:00:00.000Z Qwen 3.7 Plus from Alibaba is now available on Vercel AI Gateway . Both Qwen 3.7 Plus and 3.7 Max are free for paid AI Gateway users till 6/4/26 12:00pm PT. The model unifies vision and language into a single agent foundation, with capabilities spanning GUI and CLI operation, coding and productivity workflows with full-modality input, and visual agent tasks including perception and reasoning. It is designed to generalize across diverse agent harnesses. To use Qwen 3.7 Plus, set model to alibaba/qwen-3.7-plus in the <a href="https://ai
Published: not provided
URL: https://vercel.com/ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent, workflow
```

```text
custom reporting
alibaba/qwen-3.7-plus in the AI SDK . AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about <a href="https
Published: not provided
URL: https://vercel.com/changelog/custom-reporting-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Zero Data Retention support
div> AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the <a href="https://vercel.com/a
Published: not provided
URL: https://vercel.com/blog/zdr-on-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
dynamic provider sorting by latency and cost
cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playgrou
Published: not provided
URL: https://vercel.com/changelog/sort-providers-by-cost-latency-or-throughput-on-ai-gateway
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: infra
```

```text
Bring Your Own Key
Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more <name
Published: not provided
URL: https://vercel.com/docs/ai-gateway#bring-your-own-key
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
AI Gateway
ynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng
Published: not provided
URL: https://vercel.com/docs/ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
AI Gateway model leaderboard
reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication
Published: not provided
URL: https://vercel.com/ai-gateway/leaderboards
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: infra
```

```text
model playground
Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication Vercel Blob now supports OIDC authentication <link href="https://
Published: not provided
URL: https://vercel.com/ai-gateway/models/qwen3.7-plus
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Read more
t AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication Vercel Blob now supports OIDC authentication 2026-06-01T00:00:00.000Z <content type=
Published: not provided
URL: https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

```text
team settings
ext deployment will automatically run on a higher tier Thresholds are set conservatively to balance deployment reliability and cost. Vercel only considers your build's memory usage, not the memory used by Vercel's own build infrastructure. Enable elastic builds in your team settings or project settings , or read the docs . Read more Mehul Kar
Published: not provided
URL: https://vercel.com/d?to=%2F%5Bteam%5D%2F~%2Fsettings%2Fbuild-and-deployment%23build-machines
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: memory
```

```text
project settings
nt reliability and cost. Vercel only considers your build's memory usage, not the memory used by Vercel's own build infrastructure. Enable elastic builds in your team settings or project settings , or read the docs . Read more Mehul Kar https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway Qwen 3.7 Plu
Published: not provided
URL: https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fbuild-and-deployment%23build-machine
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: memory
```

```text
Read more
am settings or project settings , or read the docs . Read more Mehul Kar https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway Qwen 3.7 Plus now available on AI Gateway 2026-06-01T07:00:00.000Z
Published: not provided
URL: https://vercel.com/changelog/elastic-build-machines-now-protect-against-out-of-memory-builds
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Vercel AI Gateway
I Gateway 2026-06-01T07:00:00.000Z Qwen 3.7 Plus from Alibaba is now available on Vercel AI Gateway . Both Qwen 3.7 Plus and 3.7 Max are free for paid AI Gateway users till 6/4/26 12:00pm PT. The model unifies vision and language into a single agent foundation, with capabilities spanning GUI and CLI operation, coding and productivity workflows with full-modality input, and visual agent tasks including perception and reasoning. It is designed to generalize across diverse agent harnesses. To use Qwen 3.7 Plus, set model to alibaba/qwen-3.7-plus in the <a href="https://ai
Published: not provided
URL: https://vercel.com/ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent, workflow
```

```text
custom reporting
alibaba/qwen-3.7-plus in the AI SDK . AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about <a href="https
Published: not provided
URL: https://vercel.com/changelog/custom-reporting-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
Zero Data Retention support
div> AI Gateway provides a unified API for calling models, tracking usage and cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the <a href="https://vercel.com/a
Published: not provided
URL: https://vercel.com/blog/zdr-on-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
dynamic provider sorting by latency and cost
cost, and configuring retries, failover, and performance optimizations for higher-than-provider uptime. It includes built-in custom reporting , Zero Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playgrou
Published: not provided
URL: https://vercel.com/changelog/sort-providers-by-cost-latency-or-throughput-on-ai-gateway
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: infra
```

```text
Bring Your Own Key
Data Retention support , dynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more <name
Published: not provided
URL: https://vercel.com/docs/ai-gateway#bring-your-own-key
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
AI Gateway
ynamic provider sorting by latency and cost , and more. AI Gateway reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng
Published: not provided
URL: https://vercel.com/docs/ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

```text
AI Gateway model leaderboard
reflects provider pricing with no markup and does not charge a platform fee on inference, including on Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication
Published: not provided
URL: https://vercel.com/ai-gateway/leaderboards
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: infra
```

```text
model playground
Bring Your Own Key (BYOK) requests. Learn more about AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication Vercel Blob now supports OIDC authentication <link href="https://
Published: not provided
URL: https://vercel.com/ai-gateway/models/qwen3.7-plus
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Read more
t AI Gateway , view the AI Gateway model leaderboard or try it in our model playground . Read more Walter Korman Jerilyn Zheng https://vercel.com/changelog/vercel-blob-now-supports-oidc-authentication Vercel Blob now supports OIDC authentication 2026-06-01T00:00:00.000Z <content type=
Published: not provided
URL: https://vercel.com/changelog/qwen-3-7-plus-now-available-on-ai-gateway
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### PlanetScale Blog
Source URL: `https://planetscale.com/blog/rss.xml`
Final URL: `https://planetscale.com/blog/feed.atom`
Status/content: `200` / `application/xml`

```text
Learn more
children {isDotEnvFile && ( {isWindowsPlatform && ( <> For Windows you may need to download a root certificate to connect securely.{' '} Learn more )} {!isWindowsPlatform && ( <> View the{' '} certificate authority root {' '} paths for the SSL CA details. )} )} ) } Fence.scheme = { // … } Outcomes using Markdoc We are extremely happy with how the onboarding turned out, and based o
Published: not provided
URL: https://planetscale.com/docs/vitess/connecting/secure-connections#windows
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
certificate authority root
For Windows you may need to download a root certificate to connect securely.{' '} Learn more )} {!isWindowsPlatform && ( <> View the{' '} certificate authority root {' '} paths for the SSL CA details. )} )} ) } Fence.scheme = { // … } Outcomes using Markdoc We are extremely happy with how the onboarding turned out, and based on some early data, it seems to be a huge win for new users as well. Working with Markdoc made the building process incredibly simple and straightforward. We're already finding that maintenance, like adding new frameworks, is very manageable as well. We'd love
Published: not provided
URL: https://planetscale.com/docs/vitess/connecting/secure-connections#ca-root-configuration
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

### Simon Willison Blog
Source URL: `https://simonwillison.net/atom/everything/`
Final URL: `https://simonwillison.net/atom/everything/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Pasted File Editor
Tool: Pasted File Editor I really like how you can paste a large volume of text into claude.ai (or the Claude desktop/mobile apps) and it will detect it as a large paste and turn it into a file attachment instead. I decided to have Codex desktop build me a version of that as a prototype. You can also open files directly - including images which will be shown as thumbnails - or drag files onto the textarea. Tags: javascript , tools , ai-assisted-programming , claude , codex
Published: 2026-06-02T04:13:36+00:00
URL: https://simonwillison.net/2026/Jun/2/pasted-file-editor/#atom-everything
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: codex, workflow, memory
```

```text
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked I had trouble believing this story was true, but I've seen it verified from multiple sources now: One video shows a hacker starting a conversation with Meta’s AI support bot and asking it to link the target account with a new email address: “Just link my new email address. This is my username @{target_username}. I will send you the code. {attacker_email} Thank you.” Meta really did wire their support system into an AI chatbot that had the ability to fast-forward through the entire account recovery process. This one hardly even qualifies as a prompt infection. Don't wire your support bot up to allow one-shot account takeovers! Tags: security , ai , prompt-injection , generative-ai , llms , meta , ai-misuse
Published: 2026-06-01T21:14:47+00:00
URL: https://simonwillison.net/2026/Jun/1/hackers-simply-asked-meta-ai/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: governance
```

```text
May 2026 newsletter
I just sent out the May edition of my sponsors-only monthly newsletter . If you are a sponsor (or if you start a sponsorship now) you can access it here . This month: Al got expensive, and Anthropic had a really good month The model releases were a little disappointing Conferences and podcasts I launched Datasette Agent and made a lot of progress on Datasette What I'm using, May 2026 edition Miscellaneous extras Here's a copy of the April newsletter as a preview of what you'll get. Pay $10/month to stay a month ahead of the free copy! Tags: newsletter
Published: 2026-06-01T04:45:00+00:00
URL: https://simonwillison.net/2026/Jun/1/may-newsletter/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
datasette 1.0a32
Release: datasette 1.0a32 A minor bugfix release. Fixes a bug with INSERT ... RETURNING queries via the new /db/-/execute-write endpoint and a bunch of base_url issues which showed up when I was experimenting with Service Workers yesterday. Tags: datasette , annotated-release-notes
Published: 2026-05-31T23:23:38+00:00
URL: https://simonwillison.net/2026/May/31/datasette/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
The solution might be cancelling my AI subscription
The solution might be cancelling my AI subscription I find this post by David Wilson very relatable. David lists 16+ projects he's spun up with AI tooling, and concludes: I didn't mean to build most of these things. Usually the Claude session started with something like " write a quick script for X ", and one hour later the result is not a quick script for X , nor in the usual case is my problem solved, whatever the original itch happened to be. On that last point, this technology is horrific for attention. It's a thermonuclear ADHD amplifier and I have seen the same effect in every single one of my adult friends. Folk running 3 screens simultaneously working on totally unrelated "projects" they have little hope of maintaining, and such little commitment to the outcome that the time is obviously wasted. This is a very real problem. I'm finding that coding agents can take me from a vague 
Published: 2026-05-31T16:31:32+00:00
URL: https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 13
Signal tags: agent
```

```text
Quoting Karen Kwok for Reuters Breakingviews
Anthropic defines “run-rate revenue” in two parts. Use the last 28 days of sales ⁠from customers charged on a consumption basis and multiply it by 13. Then, multiply the monthly subscription take by 12, ​and add the two together. — Karen Kwok for Reuters Breakingviews , citing "a person familiar with the matter" Tags: anthropic , ai
Published: 2026-05-31T01:48:12+00:00
URL: https://simonwillison.net/2026/May/31/anthropic-run-rate/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
How we contain Claude across products
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows
Published: 2026-05-30T21:36:24+00:00
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent, claude-code, sandbox
```

```text
I Am Retiring from Tech to Live Offline
I Am Retiring from Tech to Live Offline I've seen a lot of posts on forums from people threatening to quit their careers over AI. This is not one of those: Chad Whitacre is taking concrete steps, starting with this typewritten, scanned letter I'm retiring from tech. Well, "retiring" is euphemistic. I'm stepping away from tech, and that includes Open Source. [...] AI was the last straw. Have you heard of that island off India where the indigenous population kills any outsiders fool-hardy enough to land? They are doing the rest of us a favor by preserving a way of life we may need again someday, or at the very least should not want to see completely extinguished. A reminder. Never forget your roots. Here in Pennsylvania we have the Amish performing a similar function. Significantly less hostile, though still set apart, they bear witness to what was normal for all of us a couple short centu
Published: 2026-05-30T19:39:08+00:00
URL: https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Quoting Daniel Jalkut
My take on AI is, essentially, everybody who’s against it is too against it and everybody who’s for it is too for it. — Daniel Jalkut , via John Gruber Tags: ai , john-gruber
Published: 2026-05-30T17:29:55+00:00
URL: https://simonwillison.net/2026/May/30/daniel-jalkut/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Running Python ASGI apps in the browser via Pyodide + a service worker
Research: Running Python ASGI apps in the browser via Pyodide + a service worker Datasette Lite is my version of Datasette that runs entirely in the browser using Pyodide in WebAssembly. When I first built it four years ago I used Web Workers and code that intercepts navigation operations and fetches the generated HTML by running the Python app. This worked, but had the disadvantage that any JavaScript in <script> tags would not be executed - breaking some Datasette functionality and a whole lot of Datasette plugins. This morning I set Claude Opus 4.8 the task (in Claude Code for web) of figuring out how to run Python ASGI apps in Pyodide using Service Workers instead, and it seems to work! Here's a basic ASGI FastCGI demo and here's a demo that runs Datasette 1.0a31 . I'm still getting my head around exactly how it works, but once I've done that I plan to upgrade Datasette Lite itself. 
Published: 2026-05-30T15:34:00+00:00
URL: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: claude-code
```

```text
datasette 1.0a31
Release: datasette 1.0a31 Another significant alpha release, with two new headline features. Datasette now offers users with the necessary permissions the ability to both execute write queries against their database and to save stored queries (renamed from "canned queries") both privately and for use by other members of their Datasette instance. There's more detail in SQL write queries and stored queries in Datasette 1.0a31 on the Datasette blog, which now has three posts introducing new features since the blog launched two weeks ago. Here's an animated demo from the blog post showing how the new execute query interface lets people get started with templated insert/update/delete queries from tables they have permission to edit: Tags: projects , sql , sqlite , datasette , annotated-release-notes
Published: 2026-05-29T03:32:02+00:00
URL: https://simonwillison.net/2026/May/29/datasette/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: governance, infra
```

```text
Anthropic's run-rate revenue hits $47 billion
The most interesting thing about Anthropic's $65B Series H announcement is this line (emphasis mine): Since our Series G in February, adoption has continued to grow across global enterprise customers, and our run-rate revenue crossed $47 billion earlier this month. Anthropic have made a bit of a habit of sharing their "run-rate revenue" in this kind of announcement, which is an annualized projection of their current revenue - typically calculated by taking the most recent month and multiplying by 12. Update : here's a leaked description of their run-rate formula . Earlier this year: Apr 6, 2026 in Anthropic expands partnership with Google and Broadcom : "Our run-rate revenue has now surpassed $30 billion —up from approximately $9 billion at the end of 2025." Feb 12, 2026 in Anthropic raises $30 billion in Series G : "Today, our run-rate revenue is $14 billion , with this figure growing o
Published: 2026-05-29T01:23:08+00:00
URL: https://simonwillison.net/2026/May/29/anthropic/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

### Microsoft Foundry Blog
Source URL: `https://devblogs.microsoft.com/foundry/feed/`
Final URL: `https://devblogs.microsoft.com/foundry/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
What’s new in Microsoft Foundry | May 2026
May ships trace-based evaluation for any agent on any cloud, Grok 4.3 and DeepSeek V4 in the model catalog, GPT-5 Reinforcement Fine-Tuning at gated GA, three Microsoft Research on-device agent models, Managed VNET at GA, project-level cost attribution, Content Understanding improvements reaching GA, Foundry Local 1.1 and 1.2 with live audio and vision, and azure-ai-projects 2.2.0 with skills, toolboxes, external agents, and model weight registry — plus a guide to Microsoft Foundry sessions at Microsoft Build. The post What’s new in Microsoft Foundry | May 2026 appeared first on Microsoft Foundry Blog .
Published: Sun, 31 May 2026 06:18:28 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-may-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent
```

```text
How to run evals for the model router
Walk through running quality, cost, and latency evaluations for the Foundry model router using an open-source GitHub repo designed for router-aware eval pipelines. The post How to run evals for the model router appeared first on Microsoft Foundry Blog .
Published: Tue, 19 May 2026 16:34:07 +0000
URL: https://devblogs.microsoft.com/foundry/how-to-run-evals-for-model-router/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: workflow
```

```text
Foundry Local 1.1: Live Transcription, Embeddings, and Responses API
Foundry Local 1.1 adds live transcription, embeddings, Responses API, WebGPU plugin, and download cancellation. The post Foundry Local 1.1: Live Transcription, Embeddings, and Responses API appeared first on Microsoft Foundry Blog .
Published: Tue, 12 May 2026 16:51:39 +0000
URL: https://devblogs.microsoft.com/foundry/foundry-local-v1-1/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: infra, memory
```

```text
What’s new in Microsoft Foundry | April 2026
April brings a wave of model arrivals — GPT-5.5, GPT-image-2, Microsoft first-party MAI models for image, voice, and transcription, Gemma 4, and Claude Opus 4.7 — alongside Foundry Local GA, Microsoft Agent Framework 1.0 GA, the Microsoft Foundry Toolkit for VS Code GA, batch evaluations for third-party agents, new tracing and monitoring capabilities, SDK updates across Python, JavaScript/TypeScript, .NET, and Java, and a reminder to register for Microsoft Build. The post What’s new in Microsoft Foundry | April 2026 appeared first on Microsoft Foundry Blog .
Published: Tue, 12 May 2026 07:13:15 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-apr-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent, infra
```

```text
Introducing Toolboxes in Foundry
Available in Public Preview Today Toolbox is a new way to curate, configure, and reuse tools across all of your AI agents without rewiring them every time from Foundry. Today, teams build agents across different frameworks and runtimes. Each agent often wires tools directly, with its own authentication, credentials, and integration code. As organizations scale agent usage, this leads […] The post Introducing Toolboxes in Foundry appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:43 +0000
URL: https://devblogs.microsoft.com/foundry/introducing-toolboxes-in-foundry/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, workflow
```

```text
From Local to Production: The Complete Developer Journey for Building, Composing, and Deploying AI Agents
When we launched Microsoft Agent Framework last October, we made a promise: building production-grade AI agents should feel as natural and structured as building any other software. Today, we’re delivering on that promise — with the v1.0 release of Microsoft Agent Framework and the general availability of Foundry Toolkit for Visual Studio Code (formerly AI […] The post From Local to Production: The Complete Developer Journey for Building, Composing, and Deploying AI Agents appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:12 +0000
URL: https://devblogs.microsoft.com/foundry/from-local-to-production-the-complete-developer-journey-for-building-composing-and-deploying-ai-agents/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent
```

```text
Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents
Agents are already transforming how developers solve problems. Whether it’s a coding agent that refactors your repo overnight, a research agent that synthesizes hundreds of documents into a brief, or an ops agent that monitors and remediates infrastructure — the pattern is clear. Developers are building agents that don’t just answer questions, they go do […] The post Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:03 +0000
URL: https://devblogs.microsoft.com/foundry/introducing-the-new-hosted-agents-in-foundry-agent-service-secure-scalable-compute-built-for-agents/
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, infra
```

```text
What’s New in Microsoft Foundry Fine-Tuning | April 2026
April 2026 brings three major Reinforcement Fine-Tuning updates: Global Training for o4-mini with lower per-token rates across 12+ regions, new GPT-4.1 model graders for richer reward signals, and a comprehensive RFT best practices guide to help you ship specialized models faster. The post What’s New in Microsoft Foundry Fine-Tuning | April 2026 appeared first on Microsoft Foundry Blog .
Published: Thu, 16 Apr 2026 19:34:46 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-foundry-finetune-april-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
What’s new in Microsoft Foundry | March 2026
﻿March ships Foundry Agent Service GA with private networking, GPT-5.4 and GPT-5.4 Mini, Priority Processing, Phi-4 Reasoning Vision, SDK 2.0 GA across Python, JS/TS, Java, and .NET, Fireworks AI and NVIDIA Nemotron models, and third-party guardrails from Palo Alto and Zenity. The post What’s new in Microsoft Foundry | March 2026 appeared first on Microsoft Foundry Blog .
Published: Thu, 09 Apr 2026 23:33:53 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-mar-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: agent, infra
```

```text
Foundry Local is now Generally Available
Ship local AI to millions of devices - fast, private on-device inference with no per-token costs. The post Foundry Local is now Generally Available appeared first on Microsoft Foundry Blog .
Published: Thu, 09 Apr 2026 19:00:00 +0000
URL: https://devblogs.microsoft.com/foundry/foundry-local-ga/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: infra
```

### GitHub Trending Python
Source URL: `https://github.com/trending/python?since=daily`
Final URL: `https://github.com/trending/python?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
chopratejas/headroom
Sponsor Star chopratejas / headroom Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.; Python; 1,266 stars today
Published: GitHub Trending current page
URL: https://github.com/chopratejas/headroom
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: mcp, infra, memory
```

```text
microsoft/markitdown
Star microsoft / markitdown Python tool for converting files and office documents to Markdown.; Python; 3,616 stars today
Published: GitHub Trending current page
URL: https://github.com/microsoft/markitdown
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
D4Vinci/Scrapling
Sponsor Star D4Vinci / Scrapling 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!; Python; 1,196 stars today
Published: GitHub Trending current page
URL: https://github.com/D4Vinci/Scrapling
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
nesquena/hermes-webui
Sponsor Star nesquena / hermes-webui Hermes WebUI: The best way to use Hermes Agent from the web or from your phone!; Python; 1,725 stars today
Published: GitHub Trending current page
URL: https://github.com/nesquena/hermes-webui
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
OpenBMB/VoxCPM
Star OpenBMB / VoxCPM VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning; Python; 779 stars today
Published: GitHub Trending current page
URL: https://github.com/OpenBMB/VoxCPM
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
jamwithai/production-agentic-rag-course
Python; 31 stars today
Published: GitHub Trending current page
URL: https://github.com/jamwithai/production-agentic-rag-course
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: agent, memory
```

```text
Open-LLM-VTuber/Open-LLM-VTuber
Star Open-LLM-VTuber / Open-LLM-VTuber Talk to any LLM with hands-free voice interaction, voice interruption, and Live2D taking face running locally across platforms; Python; 65 stars today
Published: GitHub Trending current page
URL: https://github.com/Open-LLM-VTuber/Open-LLM-VTuber
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
anthropics/claude-code
Star anthropics / claude-code Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.; Python; 599 stars today
Published: GitHub Trending current page
URL: https://github.com/anthropics/claude-code
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 16
Signal tags: agent, claude-code, workflow
```

```text
awslabs/aidlc-workflows
Star awslabs / aidlc-workflows AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents; Python; 46 stars today
Published: GitHub Trending current page
URL: https://github.com/awslabs/aidlc-workflows
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 35
Signal tags: agent, workflow
```

```text
datalab-to/surya
Star datalab-to / surya OCR, layout analysis, reading order, table recognition in 90+ languages; Python; 93 stars today
Published: GitHub Trending current page
URL: https://github.com/datalab-to/surya
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
Asabeneh/30-Days-Of-Python
Sponsor Star Asabeneh / 30-Days-Of-Python The 30 Days of Python programming challenge is a step-by-step guide to learn the Python programming language in 30 days. This challenge may take more than 100 days. Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw; Python; 123 stars today
Published: GitHub Trending current page
URL: https://github.com/Asabeneh/30-Days-Of-Python
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
zakirkun/deep-eye
Sponsor Star zakirkun / deep-eye Deep Eye orchestrates multiple AI providers (OpenAI, Claude, Grok, Gemini, OLLAMA, Groq, Mistral, OpenRouter, LiteLLM, LM Studio) for intelligent payload generation, scans targets for 45+ vulnerability types, and produces professional reports with compliance mapping.; Python; 32 stars today
Published: GitHub Trending current page
URL: https://github.com/zakirkun/deep-eye
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 15
Signal tags: governance
```

```text
harry0703/MoneyPrinterTurbo
Star harry0703 / MoneyPrinterTurbo 利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.; Python; 1,347 stars today
Published: GitHub Trending current page
URL: https://github.com/harry0703/MoneyPrinterTurbo
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
TauricResearch/TradingAgents
Star TauricResearch / TradingAgents TradingAgents: Multi-Agents LLM Financial Trading Framework; Python; 768 stars today
Published: GitHub Trending current page
URL: https://github.com/TauricResearch/TradingAgents
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent, finance
```

### GitHub Trending TypeScript
Source URL: `https://github.com/trending/typescript?since=daily`
Final URL: `https://github.com/trending/typescript?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
reconurge/flowsint
Star reconurge / flowsint A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.; TypeScript; 319 stars today
Published: GitHub Trending current page
URL: https://github.com/reconurge/flowsint
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: governance
```

```text
supermemoryai/supermemory
Star supermemoryai / supermemory Memory engine and app that is extremely fast, scalable. The Memory API for the AI era.; TypeScript; 677 stars today
Published: GitHub Trending current page
URL: https://github.com/supermemoryai/supermemory
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: memory
```

```text
nanocoai/nanoclaw
Star nanocoai / nanoclaw A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messaging apps,, has memory, scheduled jobs, and runs directly on Anthropic's Agents SDK; TypeScript; 44 stars today
Published: GitHub Trending current page
URL: https://github.com/nanocoai/nanoclaw
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 35
Signal tags: agent, sandbox, governance, memory
```

```text
adobe/react-spectrum
Star adobe / react-spectrum A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.; TypeScript; 67 stars today
Published: GitHub Trending current page
URL: https://github.com/adobe/react-spectrum
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: workflow
```

```text
mksglu/context-mode
Sponsor Star mksglu / context-mode Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 15 platforms; TypeScript; 95 stars today
Published: GitHub Trending current page
URL: https://github.com/mksglu/context-mode
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 49
Signal tags: agent, sandbox, infra, memory
```

```text
EveryInc/compound-engineering-plugin
Star EveryInc / compound-engineering-plugin Official Compound Engineering plugin for Claude Code, Codex, Cursor, and more; TypeScript; 351 stars today
Published: GitHub Trending current page
URL: https://github.com/EveryInc/compound-engineering-plugin
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: codex, claude-code
```

```text
nicobailon/pi-subagents
Sponsor Star nicobailon / pi-subagents Pi extension for async subagent delegation with truncation, artifacts, and session sharing; TypeScript; 214 stars today
Published: GitHub Trending current page
URL: https://github.com/nicobailon/pi-subagents
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 9
Signal tags: agent
```

```text
JCodesMore/ai-website-cloner-template
Star JCodesMore / ai-website-cloner-template Clone any website with one command using AI coding agents; TypeScript; 118 stars today
Published: GitHub Trending current page
URL: https://github.com/JCodesMore/ai-website-cloner-template
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 28
Signal tags: agent
```

```text
koala73/worldmonitor
Star koala73 / worldmonitor Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface; TypeScript; 175 stars today
Published: GitHub Trending current page
URL: https://github.com/koala73/worldmonitor
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: infra
```

```text
janhq/jan
Star janhq / jan Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.; TypeScript; 33 stars today
Published: GitHub Trending current page
URL: https://github.com/janhq/jan
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

```text
mengxi-ream/read-frog
Sponsor Star mengxi-ream / read-frog 🐸 Read Frog - Open Source Immersive Translate | 🐸 陪读蛙 - 开源沉浸式翻译; TypeScript; 143 stars today
Published: GitHub Trending current page
URL: https://github.com/mengxi-ream/read-frog
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

### GitHub Trending Overall
Source URL: `https://github.com/trending?since=daily`
Final URL: `https://github.com/trending?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
chopratejas/headroom
Sponsor Star chopratejas / headroom Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.; Python; 1,266 stars today
Published: GitHub Trending current page
URL: https://github.com/chopratejas/headroom
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: mcp, infra, memory
```

```text
microsoft/markitdown
Star microsoft / markitdown Python tool for converting files and office documents to Markdown.; Python; 3,616 stars today
Published: GitHub Trending current page
URL: https://github.com/microsoft/markitdown
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
affaan-m/ECC
Sponsor Star affaan-m / ECC The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.; JavaScript; 1,842 stars today
Published: GitHub Trending current page
URL: https://github.com/affaan-m/ECC
Seen in recent new-target baseline: yes
Route read: manual_review
Signal score: 23
Signal tags: agent, codex, claude-code, governance, memory
```

```text
D4Vinci/Scrapling
Sponsor Star D4Vinci / Scrapling 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!; Python; 1,196 stars today
Published: GitHub Trending current page
URL: https://github.com/D4Vinci/Scrapling
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
nesquena/hermes-webui
Sponsor Star nesquena / hermes-webui Hermes WebUI: The best way to use Hermes Agent from the web or from your phone!; Python; 1,725 stars today
Published: GitHub Trending current page
URL: https://github.com/nesquena/hermes-webui
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: agent
```

```text
reconurge/flowsint
Star reconurge / flowsint A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.; TypeScript; 319 stars today
Published: GitHub Trending current page
URL: https://github.com/reconurge/flowsint
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 7
Signal tags: governance
```

```text
OpenBMB/VoxCPM
Star OpenBMB / VoxCPM VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning; Python; 779 stars today
Published: GitHub Trending current page
URL: https://github.com/OpenBMB/VoxCPM
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: none
```

```text
stefan-jansen/machine-learning-for-trading
Star stefan-jansen / machine-learning-for-trading Code for Machine Learning for Algorithmic Trading, 2nd edition.; Jupyter Notebook; 570 stars today
Published: GitHub Trending current page
URL: https://github.com/stefan-jansen/machine-learning-for-trading
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: finance
```

```text
jamwithai/production-agentic-rag-course
Python; 31 stars today
Published: GitHub Trending current page
URL: https://github.com/jamwithai/production-agentic-rag-course
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 21
Signal tags: agent, memory
```

```text
supermemoryai/supermemory
Star supermemoryai / supermemory Memory engine and app that is extremely fast, scalable. The Memory API for the AI era.; TypeScript; 677 stars today
Published: GitHub Trending current page
URL: https://github.com/supermemoryai/supermemory
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
Signal tags: memory
```

```text
Open-LLM-VTuber/Open-LLM-VTuber
Star Open-LLM-VTuber / Open-LLM-VTuber Talk to any LLM with hands-free voice interaction, voice interruption, and Live2D taking face running locally across platforms; Python; 65 stars today
Published: GitHub Trending current page
URL: https://github.com/Open-LLM-VTuber/Open-LLM-VTuber
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
Signal tags: none
```

## Filtering notes
- Excluded social/browser surfaces handled by 08:00 and 19:00 jobs.
- Low-signal product/news/backfill rows were preserved in the source snapshot but kept out of durable pages.
- Repeated same-axis rows from the 11:00 new-target append were treated as reinforcement unless they made the AgentCore/AgentOps control-plane sharper.

## Why this raw exists
This file is the evidence store for the 22:00 new-target Honcho triage pass.
