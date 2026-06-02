---
title: Interest Signal Collection — 2026-06-02 11:00 KST
created: 2026-06-02
updated: 2026-06-02
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release notes, launch posts, and GitHub Trending
route_hint: append_existing
route_confidence: 0.86
route_reason: The 11:00 new-target pass found fresh, high-signal official rows around OpenAI/Codex on AWS Bedrock, private-network MCP in Amazon Quick, HyperPod troubleshooting skills for AI coding assistants, Docker sandbox-security policy, and LangSmith Sandboxes GA. These strengthen existing managed-agent / AI-infra operating-economics pages without requiring a new concept page.
routing:
  route: append_existing
  confidence: 0.86
  reasons:
    - Fresh AWS/OpenAI rows make Codex and frontier models available through governed AWS procurement, Bedrock inference, and operational controls.
    - Amazon Quick VPC MCP and LangSmith Sandboxes GA add concrete private-network connector, microVM, auth-proxy, snapshot, and service-URL primitives for production agents.
    - Docker's sandbox-security post and SageMaker HyperPod troubleshooting skills reinforce the same execution-boundary / AI-infra-operator lane already tracked in durable pages.
    - No wholly new durable branch emerged; the correct action is append_existing rather than promote_to_wiki.
  signal_tags:
    - new-target
    - official-feeds
    - engineering-blogs
    - aws
    - openai-codex
    - mcp
    - sandboxes
    - ai-infra
    - append-existing
---

# Raw Transcript — Interest Signal Collection 11:00 KST 2026-06-02

Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-06-02
Captured at: 2026-06-02T11:04:30.252624+09:00

## Live session notes
- This was the 11:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against `raw/transcripts/interest-signal-collection-22-00-2026-06-01.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-01.md`, `raw/transcripts/interest-signal-collection-22-00-2026-05-31.md`, `raw/transcripts/interest-signal-collection-11-00-2026-05-31.md`, and the same-day 08:00 social/browser transcript before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, official HTML/blog index pages, and GitHub Trending HTML; disposable JSON cache: `~/wiki/.cache/new-target-11-00-2026-06-02.json`.
- URL evidence rule was applied: each captured row below includes the canonical item URL or the available feed/surface URL plus an explicit note if exact item URL was unavailable.

## Strongest routing read
- Overall route: `append_existing`.
- Route driver: AWS/OpenAI made Codex/frontier models generally available through Bedrock, while AWS Quick added private VPC MCP connectivity; Docker/LangSmith added stronger sandbox primitives.
- Durable action: append existing managed-agent / AI-infra pages and Honcho/log audit; leave `index.md` unchanged because no new page is created.

## 1) Strongest rows selected for triage

### AWS What's New
```text
GPT-5.5, GPT-5.4, and Codex from OpenAI are now generally available on Amazon Bedrock
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-openai-models-codex-generally-available/
Published: Mon, 01 Jun 2026 13:00:00 GMT
Route read: append_existing
Signal score: 59
Signal tags: agent, agentic, ai, codex, document, governance, inference, security
You can now use GPT-5.5 and GPT-5.4 in production workloads on Amazon Bedrock and build with Codex for AI-powered software development, with the same security, governance, and operational controls you already use across AWS. GPT-5.5 is the most capable model from OpenAI, excelling at agentic coding, data analysis, and multi-step autonomous tasks. It runs on the Bedrock next-generation inference engine, built for high performance, reliability, and security. Codex is available through the Codex App, the Codex CLI, and IDE integrations with Visual Studio Code, JetBrains, and Xcode. You can now configure Codex to run inference through Bedrock. Pricing matches OpenAI first-party rates, and usage counts toward existing AWS commitments. For Regional availability of GPT-5.5 and GPT-5.4 see the AWS Regions page . Read the launch blog to learn more, for documentation and a step-by-step walkthrough
```

### Docker Blog
```text
What is Sandbox Security?
URL: https://www.docker.com/blog/what-is-sandbox-security/
Published: Mon, 01 Jun 2026 15:51:31 +0000
Route read: append_existing
Signal score: 50
Signal tags: agent, agentic, ai, isolation, sandbox, security
If you're already familiar with sandboxing as an isolation technique, sandbox security is the next layer: the policies, controls, and enforcement mechanisms that make sure those isolation boundaries actually hold under real-world pressure. According to our State of Agentic AI report, 40% of respondents cite security as the top challenge in scaling agentic AI, and...
```

### LangChain Blog
```text
LangSmith Sandboxes are Generally Available
URL: https://www.langchain.com/blog/langsmith-sandboxes-generally-available
Published: Thu, 28 May 2026 23:04:43 GMT
Route read: append_existing
Signal score: 50
Signal tags: agent, ai, coding-agent, langsmith, sandbox
Run AI agents safely with LangSmith Sandboxes (GA): kernel-isolated microVMs with snapshots, parallel forks, service URLs, and auth proxies. Built for coding agents, CI agents, and data pipelines
```

### AWS What's New
```text
Amazon Quick now supports VPC connectivity for MCP connections
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/
Published: Mon, 01 Jun 2026 17:26:00 GMT
Route read: append_existing
Signal score: 46
Signal tags: agent, ai, mcp, model-context-protocol, workflow
Amazon Quick now enables enterprise customers to connect their privately hosted Model Context Protocol (MCP) servers to Quick through Amazon Virtual Private Cloud (VPC). Amazon Quick is an AI assistant that turns questions into answers, answers into actions, and actions into outcomes for you and your entire team. Previously, Quick's MCP support was limited to third-party hosted servers accessible over the public internet. With VPC support, organizations that host MCP servers on private networks for proprietary applications, custom data sources, and internal tools can now securely extend those capabilities to AI workflows in Quick. With VPC connectivity for MCP, you can connect Quick to MCP servers running on Amazon EC2, AWS Fargate, AWS Agentcore, or other compute within your private network without exposing them to the internet. During MCP connector creation, select your VPC connection
```

### AWS What's New
```text
Amazon SageMaker HyperPod now offers troubleshooting skills for AI coding assistants
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-hyperpod-troubleshooting-skills/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Route read: append_existing
Signal score: 32
Signal tags: ai, claude-code, gpu, inference
Amazon SageMaker HyperPod now provides troubleshooting skills that bring expert-level AI/ML cluster diagnostics directly into AI coding assistants such as Claude Code, Cursor, and Kiro. SageMaker HyperPod is a purpose-built infrastructure for developing, training, and deploying foundation models at scale. It provides a resilient and performant environment with built-in fault tolerance, and automated cluster recovery, reducing the undifferentiated heavy lifting of managing large-scale AI/ML infrastructure. HyperPod skills enable you to diagnose and resolve cluster issues through natural language, reducing the time and expertise required to troubleshoot distributed training and inference infrastructure. Debugging GPU hardware faults, diagnosing NCCL communication failures, and identifying performance bottlenecks across large distributed clusters remains complex and time-consuming. Operator
```

### Microsoft DevBlogs AI
```text
Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents
URL: https://devblogs.microsoft.com/foundry/introducing-the-new-hosted-agents-in-foundry-agent-service-secure-scalable-compute-built-for-agents/
Published: Wed, 22 Apr 2026 17:30:03 +0000
Route read: append_existing
Signal score: 31
Signal tags: agent, coding-agent, document
Agents are already transforming how developers solve problems. Whether it’s a coding agent that refactors your repo overnight, a research agent that synthesizes hundreds of documents into a brief, or an ops agent that monitors and remediates infrastructure — the pattern is clear. Developers are building agents that don’t just answer questions, they go do […] The post Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents appeared first on Microsoft Foundry Blog .
```

### LangChain Blog
```text
How Rippling built production AI in 6 months with Deep Agents and LangSmith
URL: https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith
Published: Mon, 01 Jun 2026 16:05:12 GMT
Route read: append_existing
Signal score: 31
Signal tags: agent, ai, finance, langsmith
Rippling uses LangChain Deep Agents and LangSmith to run cross-domain AI across HR, IT, finance, payroll, and global operations.
```

### OpenAI News RSS
```text
OpenAI frontier models and Codex are now available on AWS
URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws
Published: Mon, 01 Jun 2026 10:00:00 GMT
Route read: append_existing
Signal score: 27
Signal tags: ai, codex, evaluation, workflow
OpenAI frontier models and Codex are now generally available on AWS, giving enterprises a new path to build with OpenAI through the AWS environments, controls, and procurement workflows they already use. Customers can get started with OpenAI on AWS and move faster from evaluation to production.
```

### AWS What's New
```text
Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8i-m8i-flex-new-zealand/
Published: Mon, 01 Jun 2026 16:00:00 GMT
Route read: manual_review
Signal score: 24
Signal tags: ai, database, memory, postgres
Starting today, Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region. These instances are powered by custom Intel Xeon 6 processors, available only on AWS, delivering the highest performance and fastest memory bandwidth among comparable Intel processors in the cloud. The M8i and M8i-flex instances offer up to 15% better price-performance, and 2.5x more memory bandwidth compared to previous generation Intel-based instances. They deliver up to 20% better performance than M7i and M7i-flex instances, with even higher gains for specific workloads. The M8i and M8i-flex instances are up to 30% faster for PostgreSQL databases, up to 60% faster for NGINX web applications, and up to 40% faster for AI deep learning recommendation models compared to M7i and M7i-flex instances. M8i-flex are the easiest way to get price performance benefits for a majority of gen
```

### LangChain Blog
```text
The Agent Development Lifecycle: Build, Test, Deploy & Monitor AI Agents | LangChain
URL: https://www.langchain.com/blog/the-agent-development-lifecycle
Published: Thu, 28 May 2026 23:04:43 GMT
Route read: manual_review
Signal score: 24
Signal tags: agent, ai, governance, observability
Learn how leading engineering teams ship AI agents reliably and repeatedly using a four-phase agent development lifecycle: Build, Test, Deploy, and Monitor. Includes guidance on evals, runtimes, observability, and governance at scale.
```

## 2) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
Final URL: `https://openai.com/news/rss.xml`
Status/content: `200` / `text/xml; charset=utf-8`

```text
Our views on AI policy and political advocacy
Our approach to AI policy and political advocacy, transparency, support for thoughtful regulation and AI safety, and that no outside political group speaks on the company’s behalf.
Published: Mon, 01 Jun 2026 17:00:00 GMT
URL: https://openai.com/index/our-views-on-ai-policy-and-political-advocacy
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Building the infrastructure for the Intelligence Age in Michigan
OpenAI breaks ground on a 1GW data center project in Michigan as part of Stargate, building AI infrastructure to expand access, create jobs, and support communities.
Published: Mon, 01 Jun 2026 12:00:00 GMT
URL: https://openai.com/index/stargate-michigan-data-center
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
OpenAI frontier models and Codex are now available on AWS
OpenAI frontier models and Codex are now generally available on AWS, giving enterprises a new path to build with OpenAI through the AWS environments, controls, and procurement workflows they already use. Customers can get started with OpenAI on AWS and move faster from evaluation to production.
Published: Mon, 01 Jun 2026 10:00:00 GMT
URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 27
Signal tags: ai, codex, evaluation, workflow
```

```text
Boston Children’s uses AI to unlock new diagnoses
Boston Children’s Hospital uses OpenAI technology to improve patient care, reduce operational burden, and help diagnose more than 40 rare disease cases.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/boston-childrens-hospital
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
How Braintrust turns customer requests into code with Codex
How Braintrust engineers use Codex with GPT-5.5 to run experiments and code faster.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/braintrust
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 14
Signal tags: ai, codex
```

```text
Strengthening societal resilience with Rosalind Biodefense
OpenAI launches Rosalind Biodefense, expanding trusted access to GPT-Rosalind for vetted developers and U.S. government partners advancing biodefense, public health, and pandemic preparedness through frontier AI.
Published: Fri, 29 May 2026 03:00:00 GMT
URL: https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
A shared playbook for trustworthy third party evaluations
OpenAI shares guidance on third-party AI evaluations, covering how to assess model capabilities, safeguards, and validity for frontier systems.
Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://openai.com/index/trustworthy-third-party-evaluations-foundations
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, evaluation
```

```text
How Endava builds an agentic organization with Codex
Learn how Endava uses Codex to build an agentic organization, accelerating software delivery and reducing requirements analysis from weeks to hours.
Published: Thu, 28 May 2026 12:00:00 GMT
URL: https://openai.com/index/endava
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 32
Signal tags: agent, agentic, codex
```

```text
MUFG aims to become AI-native with OpenAI
MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/mufg
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, workflow
```

```text
OpenAI’s Frontier Governance Framework
Explore OpenAI’s Frontier Governance Framework and how our AI safety, security, and risk practices align with emerging EU and California regulations.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/openai-frontier-governance-framework
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: ai, governance, security
```

```text
Cisco and OpenAI redefine enterprise engineering with Codex
Cisco and OpenAI are redefining enterprise engineering with Codex, helping Cisco scale AI-native development, accelerate AI Defense work, and automate defect remediation.
Published: Wed, 27 May 2026 11:00:00 GMT
URL: https://openai.com/index/cisco
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 14
Signal tags: ai, codex
```

```text
Building self-improving tax agents with Codex
See how OpenAI, Thrive, and Crete built a self-improving tax agent with Codex, automating filings, improving accuracy, and accelerating workflows.
Published: Wed, 27 May 2026 07:00:00 GMT
URL: https://openai.com/index/building-self-improving-tax-agents-with-codex
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: agent, ai, codex, workflow
```

### Anthropic News
Source URL: `https://www.anthropic.com/news`
Final URL: `https://www.anthropic.com/news`
Status/content: `200` / `text/html; charset=utf-8`

```text
Introducing Claude Opus 4.8 Product May 28, 2026 An upgrade to our Opus class of models, with stronger performance across coding, agentic tasks, and professional work, and the consistency to handle long-running work.
Published: not provided
URL: https://www.anthropic.com/news/claude-opus-4-8
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, agentic
```

```text
Product Apr 17, 2026 Introducing Claude Design by Anthropic Labs Today, we’re launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-p
Published: not provided
URL: https://www.anthropic.com/news/claude-design-anthropic-labs
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Announcements Feb 4, 2026 Claude is a space to think We’ve made a choice: Claude will remain ad-free. We explain why advertising incentives are incompatible with a genuinely helpful AI assistant, and how we plan to expand access without com
Published: not provided
URL: https://www.anthropic.com/news/claude-is-a-space-to-think
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Jun 1, 2026 Announcements Anthropic confidentially submits draft S-1 to the SEC
Published: not provided
URL: https://www.anthropic.com/news/confidential-draft-s1-sec
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 0
```

```text
May 28, 2026 Announcements Anthropic raises $65B in Series H funding at $965B post-money valuation
Published: not provided
URL: https://www.anthropic.com/news/series-h
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
May 27, 2026 Announcements Anthropic opens Milan office to support Italian enterprise, research, and developers
Published: not provided
URL: https://www.anthropic.com/news/milan-office-opening
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
May 26, 2026 Announcements Anthropic appoints KiYoung Choi as Representative Director of Korea ahead of Seoul office opening
Published: not provided
URL: https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
May 25, 2026 Announcements Anthropic co-founder Chris Olah's remarks on Pope Leo XIV's encyclical "Magnifica humanitas"
Published: not provided
URL: https://www.anthropic.com/news/chris-olah-pope-leo-encyclical
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
May 19, 2026 Announcements Widening the conversation on frontier AI
Published: not provided
URL: https://www.anthropic.com/news/widening-conversation-ai
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
May 19, 2026 Announcements KPMG integrates Claude across its core business and workforce of more than 276,000 in strategic alliance
Published: not provided
URL: https://www.anthropic.com/news/anthropic-kpmg
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
May 18, 2026 Announcements Anthropic acquires Stainless
Published: not provided
URL: https://www.anthropic.com/news/anthropic-acquires-stainless
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Responsible Scaling Policy
Published: not provided
URL: https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
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
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 8
Signal tags: workflow
```

```text
AWS HealthOmics now supports Nextflow version 26.04
AWS HealthOmics now supports Nextflow version 26.04, enabling customers to take advantage of new Nextflow features and enhancements: record types, the strict syntax parser, workflow output summaries, and agent logging mode. AWS HealthOmics is a HIPAA-eligible service that helps healthcare and life sciences customers accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows. The strict syntax parser, now enabled by default in Nextflow v26.04, helps customers save compute time and costs by enforcing strict linting, consistent block structures, and unambiguous scoping, catching issues during pipeline initialization rather than hours into workflows. Record types allow workflow developers to write workflows with meaningful data names rather than keeping track of order of tuple elements, making workflows more readable, and less error-prone. Workflow output summar
Published: Mon, 01 Jun 2026 23:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-healthomics-nextflow-version-26-04/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 23
Signal tags: agent, parse, workflow
```

```text
Quick Research now supports customer managed keys
Amazon Quick Research now enables customers to encrypt their data using customer-managed keys (CMK) through AWS Key Management Service (KMS). This enhancement allows organizations with strict security and compliance requirements to manage their own encryption keys. With customer-managed keys, you gain enhanced security control and comprehensive audit capabilities through AWS CloudTrail integration. You can encrypt your data with your own KMS keys, trace all data access for security auditing, and revoke access to compromised keys within 15 minutes during security incidents. This feature supports multiple CMKs with one default key per AWS account per region, providing the flexibility to manage encryption across different datasets while maintaining granular control over your sensitive business intelligence data. Customer-managed keys must be created in the same AWS account and region as you
Published: Mon, 01 Jun 2026 18:27:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-research-cm-keys
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 10
Signal tags: ai, security
```

```text
Amazon Quick now supports VPC connectivity for MCP connections
Amazon Quick now enables enterprise customers to connect their privately hosted Model Context Protocol (MCP) servers to Quick through Amazon Virtual Private Cloud (VPC). Amazon Quick is an AI assistant that turns questions into answers, answers into actions, and actions into outcomes for you and your entire team. Previously, Quick's MCP support was limited to third-party hosted servers accessible over the public internet. With VPC support, organizations that host MCP servers on private networks for proprietary applications, custom data sources, and internal tools can now securely extend those capabilities to AI workflows in Quick. With VPC connectivity for MCP, you can connect Quick to MCP servers running on Amazon EC2, AWS Fargate, AWS Agentcore, or other compute within your private network without exposing them to the internet. During MCP connector creation, select your VPC connection
Published: Mon, 01 Jun 2026 17:26:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 46
Signal tags: agent, ai, mcp, model-context-protocol, workflow
```

```text
Amazon SageMaker adds permissions boundaries for SCP compliance
Amazon SageMaker Unified Studio now supports custom IAM permissions boundaries, so organizations that enforce Service Control Policies (SCPs) requiring permissions boundaries on all IAM roles can adopt SageMaker Unified Studio without modifying their security posture. When a user creates a project, SageMaker Unified Studio provisions three IAM roles: a project user role, an Amazon Bedrock service role, and a Bedrock Lambda execution role. With this launch, administrators can specify a permissions boundary in the Tooling blueprint configuration, and all three roles are created with that permissions boundary attached. This satisfies SCP requirements at creation time, and project provisioning succeeds without administrator intervention. The permissions boundary also limits what the provisioned roles can do, so administrators retain control over project-level permissions even as new projects
Published: Mon, 01 Jun 2026 17:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-sagemaker-scp/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 10
Signal tags: ai, security
```

```text
Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager
Amazon Bedrock AgentCore Identity now allows customers the ability to reference existing AWS Secrets Manager secret ARNs directly in AgentCore Identity Credential Providers. Previously, AgentCore Identity used a service-managed secret approach, where secrets were created and managed by the service on the customer's behalf. This approach prevented customers from applying resource tags on create, encrypting secrets with a customer-managed key (CMK), or applying other organization-specific governance controls at the time of secret creation — causing friction for teams with strict governance requirements. Now, customers create and manage their secrets in AWS Secrets Manager using their own governance and compliance policies, including custom CMKs, tagging strategies, automatic rotation and resource policies, and then reference the existing secret ARN when configuring a Credential Provider in
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 18
Signal tags: agent, governance
```

```text
Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region
Starting today, Amazon EC2 M8i and M8i-flex instances are now available in Asia Pacific (New Zealand) Region. These instances are powered by custom Intel Xeon 6 processors, available only on AWS, delivering the highest performance and fastest memory bandwidth among comparable Intel processors in the cloud. The M8i and M8i-flex instances offer up to 15% better price-performance, and 2.5x more memory bandwidth compared to previous generation Intel-based instances. They deliver up to 20% better performance than M7i and M7i-flex instances, with even higher gains for specific workloads. The M8i and M8i-flex instances are up to 30% faster for PostgreSQL databases, up to 60% faster for NGINX web applications, and up to 40% faster for AI deep learning recommendation models compared to M7i and M7i-flex instances. M8i-flex are the easiest way to get price performance benefits for a majority of gen
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8i-m8i-flex-new-zealand/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 24
Signal tags: ai, database, memory, postgres
```

```text
Amazon EC2 M8azn instances are now available in Europe (Ireland) Region
Starting today, Amazon EC2 M8azn instances are now available in Europe (Ireland) Region. These general purpose high-frequency high-network instances are powered by fifth generation AMD EPYC (formerly code named Turin) processors and offer the highest maximum CPU frequency, 5GHz in the cloud. M8azn instances offer up to 2x compute performance compared to previous generation M5zn instances, and up to 24% higher performance than M8a instances. M8azn instances deliver up to 4.3x higher memory bandwidth and 10x larger L3 cache compared to M5zn instances allowing latency-sensitive and compute-intensive workloads to achieve results faster. These instances also offer up to 2x networking throughput and up to 3x EBS throughput versus M5zn instances. Built on the AWS Nitro System using sixth generation Nitro Cards, these instances are ideal for applications such as real-time financial analytics, hi
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-m8azn-europe-ireland/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 11
Signal tags: ai, memory
```

```text
Amazon SageMaker HyperPod now supports EFA-only network interfaces
Amazon SageMaker HyperPod now supports EFA-only network interfaces for cluster instance groups, enabling you to configure dedicated Elastic Fabric Adapter (EFA) devices without the traditional Elastic Network Adapter (ENA) for IP networking. SageMaker HyperPod is a purpose-built infrastructure for AI/ML model development that provides a resilient, high-performance environment with built-in fault tolerance and automated cluster recovery. Now with EFA-only, you can scale AI/ML clusters further without risking IP address exhaustion in your VPC. When running large-scale distributed training workloads, inter-node communication bandwidth is critical to training performance. SageMaker HyperPod cluster instances support multiple EFA-capable network interfaces, but configuring them with the standard efa interface type attaches both an EFA device and an ENA device (for IP networking) to each inter
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-hyperpod-efa-only/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Amazon SageMaker HyperPod now offers troubleshooting skills for AI coding assistants
Amazon SageMaker HyperPod now provides troubleshooting skills that bring expert-level AI/ML cluster diagnostics directly into AI coding assistants such as Claude Code, Cursor, and Kiro. SageMaker HyperPod is a purpose-built infrastructure for developing, training, and deploying foundation models at scale. It provides a resilient and performant environment with built-in fault tolerance, and automated cluster recovery, reducing the undifferentiated heavy lifting of managing large-scale AI/ML infrastructure. HyperPod skills enable you to diagnose and resolve cluster issues through natural language, reducing the time and expertise required to troubleshoot distributed training and inference infrastructure. Debugging GPU hardware faults, diagnosing NCCL communication failures, and identifying performance bottlenecks across large distributed clusters remains complex and time-consuming. Operator
Published: Mon, 01 Jun 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-sagemaker-hyperpod-troubleshooting-skills/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 32
Signal tags: ai, claude-code, gpu, inference
```

```text
AWS Direct Connect now supports VIF Rate Limiters to help prevent network congestion
AWS Direct Connect now supports Virtual Interface (VIF) Rate Limiters on dedicated connections, which help you prevent network congestion caused by unexpected traffic spikes on a VIF which can potentially consume all available bandwidth, impacting workloads on other VIFs on the same connection. With VIF Rate Limiters, you can set a maximum bandwidth allocation for up to 10 VIFs on a dedicated connection, choosing from a wide range available capacity increments from 50 Mbps to 1.6 Tbps when using a link aggregation group. Rate limiting applies to traffic both ingressing and egressing the AWS network. If traffic on a rate-limited VIF exceeds the configured capacity, excess packets are dropped, preventing that VIF from consuming bandwidth needed by other VIFs on the same connection. A new traffic utilization metric presented as percentage of the VIF’s configured capacity and dropped packet
Published: Mon, 01 Jun 2026 15:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-direct-connect-now-supports-vif-rate-limiters/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Amazon Bedrock adds Amazon CloudWatch metrics for OpenAI- and Anthropic-compatible APIs
Amazon Bedrock is a fully managed service that provides secure, enterprise-grade access to high-performing foundation models from leading AI companies, enabling you to build and scale generative AI applications. Amazon Bedrock customers can now monitor inference traffic to the bedrock-mantle endpoint with Amazon CloudWatch metrics, the same way they already do for the bedrock-runtime endpoint and other AWS services. The bedrock-mantle endpoint supports the OpenAI Responses API, OpenAI Chat Completions API, and the Anthropic Messages API, letting customers run existing OpenAI- or Anthropic-based applications on Amazon Bedrock with minimal code changes. CloudWatch metrics for the bedrock-mantle endpoint are published under the AWS/BedrockMantle namespace and include inference counts, input and output token totals, and client error counts. Metrics are published at multiple granularity level
Published: Mon, 01 Jun 2026 13:38:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-supports-cloudwatch-metrics-bedrock-mantle-endpoint/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: ai, inference
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
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 16
Signal tags: evaluation, github-copilot
```

```text
Updates to GitHub Copilot billing and plans
As announced in our recent blog post, usage-based billing for GitHub Copilot is now live for all users and Copilot code review consumes GitHub Actions minutes, in addition to GitHub… The post Updates to GitHub Copilot billing and plans appeared first on The GitHub Blog .
Published: Mon, 01 Jun 2026 14:00:26 +0000
URL: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 11
Signal tags: github-copilot
```

```text
Copilot usage metrics API adds cohorts for AI adoption
To help you tell a deeper Copilot adoption story—not just who is active, but how they’re using Copilot—the Copilot usage metrics API now classifies each engaged user into an AI… The post Copilot usage metrics API adds cohorts for AI adoption appeared first on The GitHub Blog .
Published: Fri, 29 May 2026 21:03:00 +0000
URL: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Hard budget limits now available for GitHub Advanced Security
Enterprise administrators and billing managers can now set hard budget limits for GitHub Advanced Security (GHAS) SKUs, preventing teams from exceeding their allocated license budgets. Previously, license-based products like GHAS… The post Hard budget limits now available for GitHub Advanced Security appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:59:05 +0000
URL: https://github.blog/changelog/2026-05-28-hard-budget-limits-now-available-for-github-advanced-security
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, security
```

```text
CodeQL 2.25.5 improves query accuracy for GitHub Actions
CodeQL is the static analysis engine behind GitHub code scanning, which finds and remediates security issues in your code. We’ve recently released CodeQL 2.25.5, which includes accuracy improvements across C/C++,… The post CodeQL 2.25.5 improves query accuracy for GitHub Actions appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:09:44 +0000
URL: https://github.blog/changelog/2026-05-28-codeql-2-25-5-improves-query-accuracy-for-github-actions
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 5
Signal tags: security
```

```text
Claude Opus 4.8 is generally available for GitHub Copilot
Claude Opus 4.8, Anthropic’s latest Opus model, is now available in GitHub Copilot. In our early testing, Opus 4.8 demonstrates a clear step forward in code understanding and generation across… The post Claude Opus 4.8 is generally available for GitHub Copilot appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 16:56:24 +0000
URL: https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: ai, github-copilot
```

```text
Copilot Memory has more controls for deletion, scope, and the Copilot CLI
Copilot Memory now includes improved memory deletion, adds a repository-level off switch, and brings further memory controls into the Copilot CLI. Copilot Memory is in public preview and available to… The post Copilot Memory has more controls for deletion, scope, and the Copilot CLI appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 21:05:28 +0000
URL: https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 8
Signal tags: ai, memory
```

```text
GitHub Code Quality: Repository Enablement API
You can now programmatically enable and configure GitHub Code Quality on individual repositories using the new Repository Enablement API, available today in public preview. Two new endpoints are now available:… The post GitHub Code Quality: Repository Enablement API appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 20:35:06 +0000
URL: https://github.blog/changelog/2026-05-26-github-code-quality-repository-enablement-api
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Target Copilot models to organizations with model rules
Enterprise owners now have granular control over which GitHub Copilot models are available to each organization. With targeted model rules, you can allow specific models for specific organizations instead of… The post Target Copilot models to organizations with model rules appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 19:47:22 +0000
URL: https://github.blog/changelog/2026-05-26-target-copilot-models-to-organizations-with-model-rules
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: ai, github-copilot
```

```text
Dependabot version updates now support the sbt ecosystem
Dependabot now supports sbt. Add sbt as a package ecosystem in your dependabot.yml file. Dependabot will then monitor your build.sbt inputs and open pull requests when newer commits are available… The post Dependabot version updates now support the sbt ecosystem appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 16:10:46 +0000
URL: https://github.blog/changelog/2026-05-26-dependabot-version-updates-now-support-the-sbt-ecosystem
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

### GitHub Engineering Blog
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
```

```text
How GitHub uses eBPF to improve deployment safety
Learn how Github uses eBPF to detect and prevent circular dependencies in its deployment tooling. The post How GitHub uses eBPF to improve deployment safety appeared first on The GitHub Blog .
Published: Thu, 16 Apr 2026 16:00:00 +0000
URL: https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
The uphill climb of making diff lines performant
The path to better performance is often found in simplicity. The post The uphill climb of making diff lines performant appeared first on The GitHub Blog .
Published: Fri, 03 Apr 2026 16:00:00 +0000
URL: https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Agent-driven development in Copilot Applied Science
I used coding agents to build agents that automated part of my job. Here's what I learned about working better with coding agents. The post Agent-driven development in Copilot Applied Science appeared first on The GitHub Blog .
Published: Tue, 31 Mar 2026 16:00:00 +0000
URL: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 26
Signal tags: agent, coding-agent
```

```text
Continuous AI for accessibility: How GitHub transforms feedback into inclusion
AI automates triage for accessibility feedback, allowing us to focus on fixing barriers—turning a chaotic backlog into continuous, rapid resolutions. The post Continuous AI for accessibility: How GitHub transforms feedback into inclusion appeared first on The GitHub Blog .
Published: Thu, 12 Mar 2026 16:00:00 +0000
URL: https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
How we rebuilt the search architecture for high availability in GitHub Enterprise Server
Here's how we made the search experience better, faster, and more resilient for GHES customers. The post How we rebuilt the search architecture for high availability in GitHub Enterprise Server appeared first on The GitHub Blog .
Published: Tue, 03 Mar 2026 18:45:09 +0000
URL: https://github.blog/engineering/architecture-optimization/how-we-rebuilt-the-search-architecture-for-high-availability-in-github-enterprise-server/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner
Learn how GitHub built an accessible, multi-terminal-safe ASCII animation for the Copilot CLI using custom tooling, ANSI color roles, and advanced terminal engineering. The post From pixels to characters: The engineering behind GitHub Copilot CLI’s animated ASCII banner appeared first on The GitHub Blog .
Published: Wed, 28 Jan 2026 17:00:00 +0000
URL: https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 8
Signal tags: github-copilot
```

```text
When protections outlive their purpose: A lesson on managing defense systems at scale
User feedback led us to clean up outdated mitigations. See why observability and lifecycle management are critical for defense systems. The post When protections outlive their purpose: A lesson on managing defense systems at scale appeared first on The GitHub Blog .
Published: Thu, 15 Jan 2026 20:54:32 +0000
URL: https://github.blog/engineering/infrastructure/when-protections-outlive-their-purpose-a-lesson-on-managing-defense-systems-at-scale/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: observability
```

```text
Post-quantum security for SSH access on GitHub
GitHub is introducing post-quantum secure key exchange methods for SSH access to better protect Git data in transit. The post Post-quantum security for SSH access on GitHub appeared first on The GitHub Blog .
Published: Mon, 15 Sep 2025 16:00:00 +0000
URL: https://github.blog/engineering/platform-security/post-quantum-security-for-ssh-access-on-github/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 5
Signal tags: security
```

```text
How GitHub engineers tackle platform problems
Our best practices for quickly identifying, resolving, and preventing issues at scale. The post How GitHub engineers tackle platform problems appeared first on The GitHub Blog .
Published: Tue, 10 Jun 2025 16:00:00 +0000
URL: https://github.blog/engineering/infrastructure/how-github-engineers-tackle-platform-problems/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 3
```

### Google Developers Blog
Source URL: `https://developers.googleblog.com/feeds/posts/default?alt=rss`
Final URL: `https://developers.googleblog.com/feeds/posts/default/?alt=rss`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Supercharge your integration workflow with the Google Pay & Wallet Developer MCP server
Google has announced the new Google Pay & Wallet Developer MCP server, an open-standard tool designed to securely connect AI development assistants and IDEs with real-time API and account context. The server allows developers to remain within their development environment to search official documentation, validate Wallet pass definitions, check integration status, and manage merchant accounts. Ultimately, this integration aims to reduce friction and accelerate development workflows by minimizing context switching and providing up-to-date, grounded AI support.
Published: not provided
URL: https://developers.googleblog.com/supercharge-your-integration-workflow-with-the-google-pay-wallet-developer-mcp-server/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: ai, document, mcp, workflow
```

```text
How the community trained Gemma to "Think" with Tunix and TPUs
The Google Tunix Hackathon on Kaggle challenged developers to transform small, non-reasoning base models into general reasoning engines using Kaggle TPUs and a limited compute budget. The winning teams achieved this by implementing multi-stage post-training pipelines that combined Supervised Fine-Tuning (SFT) with advanced alignment techniques like GRPO and SimPO. Ultimately, the competition democratized AI development by proving that highly capable, structured reasoning models can be successfully trained by the community using accessible, open-source resources.
Published: not provided
URL: https://developers.googleblog.com/how-the-community-trained-gemma-to-think-with-tunix-and-tpus/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
The latest updates to Google Pay
Google Pay is evolving for "agentic commerce" by introducing the Universal Commerce Protocol and a new MCP server that allows AI agents to manage integrations and analyze trends. New Android updates introduce dynamic callbacks for seamless express checkouts and extend payment support into social media apps via WebViews. Additionally, the platform is launching cross-device biometric authentication and new transaction signals to help merchants reduce friction and optimize processing costs.
Published: not provided
URL: https://developers.googleblog.com/the-latest-updates-to-google-pay/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 34
Signal tags: agent, agentic, ai, mcp
```

```text
Enhancing Android Checkout with Dynamic Callbacks in Google Pay
We are excited to bring Express checkout with Google Pay for Android native apps enabling developers...
Published: not provided
URL: https://developers.googleblog.com/enhancing-android-checkout-with-dynamic-callbacks-in-google-pay/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Empowering Service Providers and Hardware Partners with Gemini for Home
Google is expanding its smart home ecosystem by launching a full-stack Gemini AI offering that integrates advanced camera intelligence, natural language queries, and daily activity summaries. This initiative provides service providers and hardware manufacturers with turnkey reference designs and APIs to build proactive, branded services without extensive research and development. Ultimately, the program aims to move beyond basic device control toward an AI-native home that can understand context and care for users' needs in real time.
Published: not provided
URL: https://developers.googleblog.com/empowering-service-providers-and-hardware-partners-with-gemini-for-home/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Announcing ADK for Kotlin and ADK for Android 0.1.0: Building AI Agents on Android and Beyond
Google has announced the launch of version 0.1.0 of the Agent Development Kit (ADK) for Kotlin, alongside a specialized ADK library for Android. This open-source framework simplifies the creation of AI agents by managing complex orchestration, session sharing, and error handling across cloud and edge environments. The release supports hybrid orchestration, enabling developers to build multi-agent systems where a cloud-based model can seamlessly offload specific tasks to local, on-device models like Gemini Nano to enhance user privacy.
Published: not provided
URL: https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: agent, ai, orchestration
```

```text
Blazing fast on-device GenAI with LiteRT-LM
Google AI Edge’s LiteRT-LM provides a production-proven, highly optimized infrastructure for running Gemma 4 across cross-platform mobile and edge environments. It actively unlocks the model's native multimodal and agentic features on-device by utilizing memory-efficient dynamic loading, Multi-Token Prediction for up to a 2.2x speedup, and advanced orchestration tools like Thinking Mode and Constrained Decoding. Furthermore, the engine is rapidly expanding its integration surfaces beyond Android, introducing new native Swift APIs for Apple ecosystems and WebGPU-accelerated JavaScript APIs for high-performance, serverless browser inference.
Published: not provided
URL: https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 51
Signal tags: agent, agentic, ai, gpu, inference, memory, orchestration
```

```text
One Year of Innovation: Celebrating 100k Members in the Google Cloud x NVIDIA Developer Community
The Google Cloud and NVIDIA developer community is celebrating its first anniversary with 100,000 members and a renewed focus on providing builders with advanced AI infrastructure and resources. To accelerate development, the community offers curated learning pathways for mastering LLM optimization, GPU-accelerated data analytics, and monthly expert-led webinars. Moving into its second year, the initiative will expand to include hands-on labs, engineering events, and specialized content focused on the growth of agentic AI.
Published: not provided
URL: https://developers.googleblog.com/one-year-of-innovation-celebrating-100k-members-in-the-google-cloud-x-nvidia-developer-community/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 35
Signal tags: agent, agentic, ai, gpu, llm
```

```text
All the news from the Google I/O 2026 Developer keynote
Google announced the transition from assistive AI to independent agents, highlighting the launch of the Gemini 3.5 series and major updates to its Antigravity agent-first development platform. For mobile developers, the post introduces new Android CLI tools, the Android Bench evaluation leaderboard, and an automated Migration agent designed to rapidly convert various frameworks into native Kotlin code. Web development is also being transformed through Chrome DevTools for agents, the HTML-in-Canvas API, and the proposal of WebMCP, an open web standard that enables browser-based AI agents to execute complex tasks.
Published: not provided
URL: https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: agent, ai, evaluation, mcp
```

```text
A Smarter Google AI Edge Gallery: MCP integration, notifications, and session continuity
The Google AI Edge Gallery app has expanded its on-device AI capabilities by introducing experimental support for the open-source Model Context Protocol (MCP) on Android, allowing Gemma 4 to coordinate complex tasks across external data sources like Google Workspace and Google Maps. To enable more proactive and persistent user interactions, the update adds a "Schedule Notification" skill for automating routines and a persistent chat history feature that restores long session contexts nearly instantly. Driven by an open-source toolkit, the platform encourages community developers to build and share custom utility-focused workflows, prompt configurations, and tool integrations via its GitHub repository.
Published: not provided
URL: https://developers.googleblog.com/a-smarter-google-ai-edge-gallery-mcp-integration-notifications-and-session-continuity/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 33
Signal tags: ai, mcp, model-context-protocol, workflow
```

```text
Google Tensor SDK Beta with LiteRT
The Google Tensor ML SDK is graduating to its Beta phase, allowing developers to build and deploy high-performance machine learning models directly onto the TPU of Google Pixel 10 devices. By integrating with LiteRT, Google's edge deployment framework, the SDK provides a unified workflow for developers to convert, compile, and run PyTorch or TFLite models with robust fallback options. Additionally, a new model garden offers over 100 classic and generative AI models, including Gemma 3, enabling low-latency, private features like speech recognition, computer vision, and text generation.
Published: not provided
URL: https://developers.googleblog.com/google-tensor-sdk-beta-with-litert/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, workflow
```

```text
An important update: Transitioning Gemini CLI to Antigravity CLI
Google is unifying its AI terminal tools by transitioning the community-focused Gemini CLI into Antigravity CLI, a new agent-first platform built for complex, multi-agent workflows. This new Go-based tool offers faster execution, asynchronous processing, and a unified architecture that syncs with the Antigravity 2.0 desktop application. While enterprise customers will maintain existing access, individual and free users must transition to the new platform before Gemini CLI stops serving requests on June 18, 2026.
Published: not provided
URL: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 17
Signal tags: agent, ai, workflow
```

### Google Cloud Blog
Source URL: `https://cloud.google.com/blog/rss`
Final URL: `https://cloud.google.com/blog/rss`
Status/content: `200` / `text/html; charset=utf-8`

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
Final URL: `https://blog.cloudflare.com/rss/`
Status/content: `200` / `application/xml`

```text
How we reduced core unit boot time from hours to minutes
We investigated why firmware updates were causing our core servers to take four hours to reboot. By diving into UEFI data structures and iPXE automation, we eliminated unnecessary timeouts and cut boot times back down to minutes.
Published: Mon, 01 Jun 2026 16:53:39 GMT
URL: https://blog.cloudflare.com/optimizing-core-unit-boot-time/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 3
```

```text
How we built Cloudflare's data platform and an AI agent on top of it
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
Published: Thu, 28 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/our-unified-data-platform/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
Iran's Internet is partially restored, Cloudflare Radar data shows
Cloudflare Radar data confirms early indications of a partial Internet restoration in Iran, nearly three months after the shutdown began. Traffic spikes and DNS queries have risen, but network activity is currently just 40% of pre-shutdown levels.
Published: Wed, 27 May 2026 17:25:00 GMT
URL: https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Announcing Claude Compliance API support with Cloudflare CASB
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
Published: Thu, 21 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 5
Signal tags: security
```

```text
Announcing Claude Managed Agents on Cloudflare
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
Published: Tue, 19 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/claude-managed-agents/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: agent, workflow
```

```text
Project Glasswing: what Mythos showed us
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
Published: Mon, 18 May 2026 06:00:00 GMT
URL: https://blog.cloudflare.com/cyber-frontier-models/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: llm, security
```

```text
Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
When a partitioning change to our petabyte-scale ClickHouse cluster caused critical billing jobs to stall, standard metrics showed no obvious errors. This post explores how we identified severe lock contention in ClickHouse's query planner and built upstream patches to fix it.
Published: Thu, 14 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/clickhouse-query-plan-contention/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
Published: Wed, 13 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/browser-run-containers/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 9
Signal tags: ai, container
```

```text
When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug
We investigated a bug where CUBIC's congestion window became pinned at its minimum floor, causing a performance to plummet. The fix involved correctly measuring idle periods to distinguish RTT wait times from actual application idleness.
Published: Tue, 12 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/quic-death-spiral-fix/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Building for the future
This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency, and we believe it's important that you hear this directly from us because it’s a major moment at Cloudflare.
Published: Thu, 07 May 2026 20:15:12 GMT
URL: https://blog.cloudflare.com/building-for-the-future/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
Published: Thu, 07 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, security
```

```text
When DNSSEC goes wrong: how we responded to the .de TLD outage
On May 5, 2026, DENIC published broken DNSSEC signatures for the .de TLD, making millions of domains unreachable. Here's what 1.1.1.1 saw, how serve stale cushioned the impact, and how we restored resolution.
Published: Wed, 06 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/de-tld-outage-dnssec/
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
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
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 50
Signal tags: agent, agentic, ai, isolation, sandbox, security
```

```text
Coding Agent Horror Stories: The rm -rf ~/ Incident
This is Part 2 of our AI Coding Agent Horror Stories series, an in-depth look at real-world security incidents exposing the vulnerabilities in AI coding agents, and how Docker Sandboxes deliver workspace-scoped isolation that contains the worst failures at the execution layer. In part 1 of this series, we mapped six categories of AI coding...
Published: Mon, 01 Jun 2026 13:00:00 +0000
URL: https://www.docker.com/blog/coding-agent-horror-stories-the-rm-rf-incident/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 56
Signal tags: agent, ai, coding-agent, isolation, sandbox, security
```

```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
Published: Wed, 27 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 9
Signal tags: ai, container
```

```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
Published: Tue, 26 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 48
Signal tags: agent, ai, claude-code, coding-agent, isolation
```

```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
Published: Tue, 19 May 2026 19:08:04 +0000
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: agent, ai, container, workflow
```

```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
Published: Mon, 18 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/ai-coding-agent-horror-stories-security-risks/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 55
Signal tags: agent, agentic, ai, coding-agent, sandbox, security
```

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
Published: Fri, 15 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: ai, mcp, model-context-protocol
```

```text
NIST Narrows the NVD: What Container Security Programs Should Reassess
On April 15, NIST announced a prioritized enrichment model for the National Vulnerability Database. Most CVEs will still be published, but fewer will receive the CVSS scores, CPE mappings, and CWE classifications that container scanners and compliance programs have historically relied on. The change formalizes a drift that has been visible to anyone pulling NVD...
Published: Wed, 13 May 2026 10:38:28 +0000
URL: https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 20
Signal tags: ai, container, database, security
```

```text
Docker AI Governance: Unlock Agent Autonomy, Safely
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call, so every developer in your company can run AI agents safely, wherever they work. Your laptop is the new prod Agents are the biggest productivity unlock...
Published: Tue, 12 May 2026 18:00:09 +0000
URL: https://www.docker.com/blog/docker-ai-governance-unlock-agent-autonomy-safely/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 29
Signal tags: agent, ai, governance, mcp
```

```text
Comparing Different Approaches to Sandboxing
Whether you are a software engineer, a product manager, or a designer, this quote should fundamentally change how we approach our daily routine. We are no longer just building interfaces; we are creating environments where agents can operate autonomously with minimal human interaction. What could be the fundamental requirement for such an environment ? In...
Published: Thu, 07 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/comparing-sandboxing-approaches-ai-agents/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: agent, ai, sandbox
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
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 11
Signal tags: kubernetes
```

```text
Reconciling the Past: Correcting Records for Unfixed Kubernetes CVEs
The Kubernetes project relies on transparency to empower cluster administrators and security researchers. One important way we do that is by publishing CVE records into the Common Vulnerabilities and Exposures database. As part of our ongoing effort to mature the official Kubernetes CVE Feed , we have identified some discrepancies. CVE records for a few older, unfixed issues incorrectly include a fixed version field. The Kubernetes Security Response Committee (SRC) will correct the affected CVE records on June 1, 2026. This may result in vulnerability scanners identifying these vulnerabilities in places where they were previously not detected. To help reduce confusion, this post provides a technical update on three vulnerabilities that were disclosed in previous years but remain unfixed: CVE-2020-8561 , CVE-2020-8562 , and CVE-2021-25740 . Why we are updating these records now While thes
Published: Tue, 26 May 2026 09:30:00 -0800
URL: https://kubernetes.io/blog/2026/05/26/reconciling-unfixed-kubernetes-cves/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 21
Signal tags: ai, database, kubernetes, security
```

```text
Announcing etcd 3.7.0-beta.0
SIG-Etcd announces the availability of the first beta release of etcd v3.7.0 . This new version of the popular distributed database and key Kubernetes component includes the long-requested RangeStream feature, as well as a refactoring and cleanup of multiple legacy components and interfaces. v3.7 will deliver improved security, better operational reliability, and an improved experience for working with large resultsets. First, however, the project needs users to test the beta. You can find v3.7.0-beta.0 here: Source code Binaries Official container images Please try it out and report issues in the etcd repo . This beta also determines the EOL of version 3.4. RangeStream In etcd v3.6 and earlier, it is challenging to work with requests that return large resultsets. The client or requesting application is forced to wait for the full result set, leading to unpredictable latency and memory u
Published: Wed, 20 May 2026 00:00:00 +0000
URL: https://kubernetes.io/blog/2026/05/20/etcd-370-beta/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 34
Signal tags: ai, container, database, kubernetes, memory, security
```

```text
Kubernetes v1.36: New Metric for Route Sync in the Cloud Controller Manager
This article was originally published with the wrong date. It was later republished, dated the 15th of May 2026. Kubernetes v1.36 introduces a new alpha counter metric route_controller_route_sync_total to the Cloud Controller Manager (CCM) route controller implementation at k8s.io/cloud-provider . This metric increments each time routes are synced with the cloud provider. A/B testing watch-based route reconciliation This metric was added to help operators validate the CloudControllerManagerWatchBasedRoutesReconciliation feature gate introduced in Kubernetes v1.35 . That feature gate switches the route controller from a fixed-interval loop to a watch-based approach that only reconciles when nodes actually change. This reduces unnecessary API calls to the infrastructure provider, lowering pressure on rate-limited APIs and allowing operators to make more efficient use of their available quo
Published: Fri, 15 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/ccm-new-metric-route-sync-total/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: ai, kubernetes
```

```text
Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature (under the feature gate UnknownVersionInteroperabilityProxy ) in a previous blog post . The goal was simple but critical: make cluster upgrades safer by ensuring that requests for resources not yet known to an older API server are correctly routed to a newer peer API server, instead of returning an incorrect 404 Not Found . We are excited to announce that the Mixed Version Proxy is moving to Beta in Kubernetes 1.36 and will be enabled by default! The feature has evolved significantly since its initial release, addressing key gaps and modernizing its architecture. Here is a look at how the feature has evolved and what you need to know to leverage it in your clusters. What problem are we solving? In a highly available control plane undergoing an upgrade, you often have API servers running different ver
Published: Fri, 15 May 2026 10:00:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/kubernetes-1-36-feature-mixed-version-proxy-beta/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 19
Signal tags: ai, control-plane, kubernetes
```

```text
Kubernetes v1.36: Deprecation and removal of Service ExternalIPs
The .spec.externalIPs field for Service was an early attempt to provide cloud-load-balancer-like functionality for non-cloud clusters. Unfortunately, the API assumes that every user in the cluster is fully trusted, and in any situation where that is not the case, it enables various security exploits, as described in CVE-2020-8554 . Since Kubernetes 1.21, the Kubernetes project has recommended that all users disable .spec.externalIPs . To make that easier, Kubernetes also added an admission controller ( DenyServiceExternalIPs ) that can be enabled to do this. At the time, SIG Network felt that blocking the functionality by default was too large a breaking change to consider. However, the security problems are still there, and as a project we're increasingly unhappy with the "insecure by default" state of the feature. Additionally, there are now several better alternatives for non-cloud cl
Published: Thu, 14 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/14/kubernetes-v1-36-deprecation-and-removal-of-service-externalips/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 13
Signal tags: kubernetes, security
```

```text
Kubernetes v1.36: Advancing Workload-Aware Scheduling
AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling. In Kubernetes v1.35, we introduced the first tranche of workload-aware scheduling improvements, featuring the foundational Workload API alongside basic gang scheduling support built on a Pod-based framework, and an opportunistic batching feature to efficiently process identical Pods. Kubernetes v1.36 introduces a significant architectural evolution by cleanly separating API concerns: the Workload API acts as a static template, while the new PodGroup API handles the runtime state. To support this, the kube-scheduler features a new PodGroup scheduling cycle that enables atomic workload processing and paves the way for future enhancements. This release also debuts the first iterations of topology-aware scheduling and workload-aware preemption to advance scheduling capabilities. Addi
Published: Wed, 13 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/13/kubernetes-v1-36-advancing-workload-aware-scheduling/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: ai, kubernetes
```

```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage. Unlike traditional utilization metrics, PSI tells the story of tasks stalled and time lost, all in nicely-packaged percentages of time across the CPU, memory, and I/O. With the recent release of Kubernetes v1.36, users across the ecosystem have a stable, reliable interface to observe resource contention at the node, pod, and container levels. In this post, we will dive into the improvements and performance testing that proved its readiness for production. Beyond utilization: why PSI? Monitoring CPU or memory usage alone can be misleading. A node may report XX% (below 100%) CPU utilization while certain tasks are experiencing severe latency due to scheduling delays. PSI fills th
Published: Tue, 12 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/12/kubernetes-v1-36-psi-metrics-ga/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: ai, container, kubernetes, memory
```

```text
Kubernetes v1.36: Moving Volume Group Snapshots to GA
Volume group snapshots were introduced as an Alpha feature with the Kubernetes v1.27 release, moved to Beta in v1.32, and to a second Beta in v1.34. We are excited to announce that in the Kubernetes v1.36 release, support for volume group snapshots has reached General Availability (GA) . The support for volume group snapshots relies on a set of extension APIs for group snapshots . These APIs allow users to take crash-consistent snapshots for a set of volumes. Behind the scenes, Kubernetes uses a label selector to group multiple PersistentVolumeClaim objects for snapshotting. A key aim is to allow you to restore that set of snapshots to new volumes and recover your workload based on a crash-consistent recovery point. This feature is only supported for CSI volume drivers. An overview of volume group snapshots Some storage systems provide the ability to create a crash-consistent snapshot of
Published: Fri, 08 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/08/kubernetes-v1-36-volume-group-snapshot-ga/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: ai, kubernetes
```

```text
Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
Dynamic Resource Allocation (DRA) has fundamentally changed how platform administrators handle hardware accelerators and specialized resources in Kubernetes. In the v1.36 release, DRA continues to mature, bringing a wave of feature graduations, critical usability improvements, and new capabilities that extend the flexibility of DRA to native resources like memory and CPU, and support for ResourceClaims in PodGroups. Driver availability continues to expand. Beyond specialized compute accelerators, the ecosystem includes support for networking and other hardware types, reflecting a move toward a more robust, hardware-agnostic infrastructure. Whether you are managing massive fleets of GPUs, need better handling of failures, or simply looking for better ways to define resource fallback options, the upgrades to DRA in 1.36 have something for you. Let's dive into the new features and graduatio
Published: Thu, 07 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/07/kubernetes-v1-36-dra-136-updates/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: ai, gpu, kubernetes, memory
```

```text
Kubernetes v1.36: Server-Side Sharded List and Watch
As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserialize everything, only to discard the objects it is not responsible for. Scaling out the controller does not reduce per-replica cost; it multiplies it. Kubernetes v1.36 introduces server-side sharded list and watch as an alpha feature ( KEP-5866 ). With this feature enabled, the API server filters events at the source so that each controller replica receives only the slice of the resource collection it owns. The problem with client-side sharding Some controllers, such as kube-state-metrics , already support horizontal sharding. Each replica is assigned a portion of the keyspace and discards object
Published: Wed, 06 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 14
Signal tags: kubernetes, memory
```

```text
Kubernetes v1.36: Declarative Validation Graduates to GA
In Kubernetes v1.36, Declarative Validation for Kubernetes native types has reached General Availability (GA). For users, this means more reliable, predictable, and better-documented APIs. By moving to a declarative model, the project also unlocks the future ability to publish validation rules via OpenAPI and integrate with ecosystem tools like Kubebuilder. For contributors and ecosystem developers, this replaces thousands of lines of handwritten validation code with a unified, maintainable framework. This post covers why this migration was necessary, how the declarative validation framework works, and what new capabilities come with this GA release. The Motivation: Escaping the "Handwritten" Technical Debt For years, the validation of Kubernetes native APIs relied almost entirely on handwritten Go code. If a field needed to be bounded by a minimum value, or if two fields needed to be mu
Published: Tue, 05 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/05/kubernetes-v1-36-declarative-validation-ga/
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: ai, document, kubernetes
```

### Microsoft DevBlogs AI
Source URL: `https://devblogs.microsoft.com/foundry/feed/`
Final URL: `https://devblogs.microsoft.com/foundry/feed/`
Status/content: `200` / `application/rss+xml; charset=UTF-8`

```text
What’s new in Microsoft Foundry | May 2026
May ships trace-based evaluation for any agent on any cloud, Grok 4.3 and DeepSeek V4 in the model catalog, GPT-5 Reinforcement Fine-Tuning at gated GA, three Microsoft Research on-device agent models, Managed VNET at GA, project-level cost attribution, Content Understanding improvements reaching GA, Foundry Local 1.1 and 1.2 with live audio and vision, and azure-ai-projects 2.2.0 with skills, toolboxes, external agents, and model weight registry — plus a guide to Microsoft Foundry sessions at Microsoft Build. The post What’s new in Microsoft Foundry | May 2026 appeared first on Microsoft Foundry Blog .
Published: Sun, 31 May 2026 06:18:28 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-may-2026/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 17
Signal tags: agent, ai, evaluation
```

```text
How to run evals for the model router
Walk through running quality, cost, and latency evaluations for the Foundry model router using an open-source GitHub repo designed for router-aware eval pipelines. The post How to run evals for the model router appeared first on Microsoft Foundry Blog .
Published: Tue, 19 May 2026 16:34:07 +0000
URL: https://devblogs.microsoft.com/foundry/how-to-run-evals-for-model-router/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: evaluation
```

```text
Foundry Local 1.1: Live Transcription, Embeddings, and Responses API
Foundry Local 1.1 adds live transcription, embeddings, Responses API, WebGPU plugin, and download cancellation. The post Foundry Local 1.1: Live Transcription, Embeddings, and Responses API appeared first on Microsoft Foundry Blog .
Published: Tue, 12 May 2026 16:51:39 +0000
URL: https://devblogs.microsoft.com/foundry/foundry-local-v1-1/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 8
Signal tags: gpu
```

```text
What’s new in Microsoft Foundry | April 2026
April brings a wave of model arrivals — GPT-5.5, GPT-image-2, Microsoft first-party MAI models for image, voice, and transcription, Gemma 4, and Claude Opus 4.7 — alongside Foundry Local GA, Microsoft Agent Framework 1.0 GA, the Microsoft Foundry Toolkit for VS Code GA, batch evaluations for third-party agents, new tracing and monitoring capabilities, SDK updates across Python, JavaScript/TypeScript, .NET, and Java, and a reminder to register for Microsoft Build. The post What’s new in Microsoft Foundry | April 2026 appeared first on Microsoft Foundry Blog .
Published: Tue, 12 May 2026 07:13:15 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-apr-2026/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 17
Signal tags: agent, ai, evaluation
```

```text
Introducing Toolboxes in Foundry
Available in Public Preview Today Toolbox is a new way to curate, configure, and reuse tools across all of your AI agents without rewiring them every time from Foundry. Today, teams build agents across different frameworks and runtimes. Each agent often wires tools directly, with its own authentication, credentials, and integration code. As organizations scale agent usage, this leads […] The post Introducing Toolboxes in Foundry appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:43 +0000
URL: https://devblogs.microsoft.com/foundry/introducing-toolboxes-in-foundry/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
From Local to Production: The Complete Developer Journey for Building, Composing, and Deploying AI Agents
When we launched Microsoft Agent Framework last October, we made a promise: building production-grade AI agents should feel as natural and structured as building any other software. Today, we’re delivering on that promise — with the v1.0 release of Microsoft Agent Framework and the general availability of Foundry Toolkit for Visual Studio Code (formerly AI […] The post From Local to Production: The Complete Developer Journey for Building, Composing, and Deploying AI Agents appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:12 +0000
URL: https://devblogs.microsoft.com/foundry/from-local-to-production-the-complete-developer-journey-for-building-composing-and-deploying-ai-agents/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents
Agents are already transforming how developers solve problems. Whether it’s a coding agent that refactors your repo overnight, a research agent that synthesizes hundreds of documents into a brief, or an ops agent that monitors and remediates infrastructure — the pattern is clear. Developers are building agents that don’t just answer questions, they go do […] The post Introducing the new hosted agents in Foundry Agent Service: secure, scalable compute built for agents appeared first on Microsoft Foundry Blog .
Published: Wed, 22 Apr 2026 17:30:03 +0000
URL: https://devblogs.microsoft.com/foundry/introducing-the-new-hosted-agents-in-foundry-agent-service-secure-scalable-compute-built-for-agents/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 31
Signal tags: agent, coding-agent, document
```

```text
What’s New in Microsoft Foundry Fine-Tuning | April 2026
April 2026 brings three major Reinforcement Fine-Tuning updates: Global Training for o4-mini with lower per-token rates across 12+ regions, new GPT-4.1 model graders for richer reward signals, and a comprehensive RFT best practices guide to help you ship specialized models faster. The post What’s New in Microsoft Foundry Fine-Tuning | April 2026 appeared first on Microsoft Foundry Blog .
Published: Thu, 16 Apr 2026 19:34:46 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-foundry-finetune-april-2026/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
What’s new in Microsoft Foundry | March 2026
﻿March ships Foundry Agent Service GA with private networking, GPT-5.4 and GPT-5.4 Mini, Priority Processing, Phi-4 Reasoning Vision, SDK 2.0 GA across Python, JS/TS, Java, and .NET, Fireworks AI and NVIDIA Nemotron models, and third-party guardrails from Palo Alto and Zenity. The post What’s new in Microsoft Foundry | March 2026 appeared first on Microsoft Foundry Blog .
Published: Thu, 09 Apr 2026 23:33:53 +0000
URL: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-mar-2026/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
Foundry Local is now Generally Available
Ship local AI to millions of devices - fast, private on-device inference with no per-token costs. The post Foundry Local is now Generally Available appeared first on Microsoft Foundry Blog .
Published: Thu, 09 Apr 2026 19:00:00 +0000
URL: https://devblogs.microsoft.com/foundry/foundry-local-ga/
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 9
Signal tags: ai, inference
```

### Microsoft Azure Updates
Source URL: `https://azurecomcdn.azureedge.net/en-us/updates/feed/`
Final URL: `https://azure.microsoft.com/favicon.ico`
Status/content: `200` / `image/vnd.microsoft.icon`

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
Final URL: `https://huggingface.co/blog/feed.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains
Published: Mon, 01 Jun 2026 15:45:17 GMT
URL: https://huggingface.co/blog/JetBrains/mellum2-launch
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: discard
Signal score: 5
Signal tags: ai
```

```text
Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic
Published: Mon, 01 Jun 2026 13:51:18 GMT
URL: https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 20
Signal tags: agent, ai, llm
```

```text
Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action
Published: Mon, 01 Jun 2026 04:44:55 GMT
URL: https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 5
Signal tags: ai
```

```text
Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler
Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/torch-profiler
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Reachy Mini goes fully local
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/local-reachy-mini-conversation
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/delta-weight-sync
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Harness, Scaffold, and the AI Agent Terms Worth Getting Right
Published: Mon, 25 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/agent-glossary
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook
Published: Fri, 22 May 2026 15:25:59 GMT
URL: https://huggingface.co/blog/Dharma-AI/specialization-beats-scale
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
OlmoEarth v1.1: A more efficient family of Earth observation models
Published: Tue, 19 May 2026 18:38:09 GMT
URL: https://huggingface.co/blog/allenai/olmoearth-v1-1
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Introducing the Ettin Reranker Family
Published: Tue, 19 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/ettin-reranker
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

### Simon Willison Blog
Source URL: `https://simonwillison.net/atom/everything/`
Final URL: `https://simonwillison.net/atom/everything/`
Status/content: `200` / `application/xml; charset=utf-8`

```text
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked
Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked I had trouble believing this story was true, but I've seen it verified from multiple sources now: One video shows a hacker starting a conversation with Meta’s AI support bot and asking it to link the target account with a new email address: “Just link my new email address. This is my username @{target_username}. I will send you the code. {attacker_email} Thank you.” Meta really did wire their support system into an AI chatbot that had the ability to fast-forward through the entire account recovery process. This one hardly even qualifies as a prompt infection. Don't wire your support bot up to allow one-shot account takeovers! Tags: security , ai , prompt-injection , generative-ai , llms , meta , ai-misuse
Published: 2026-06-01T21:14:47+00:00
URL: https://simonwillison.net/2026/Jun/1/hackers-simply-asked-meta-ai/#atom-everything
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 15
Signal tags: ai, llm, security
```

```text
May 2026 newsletter
I just sent out the May edition of my sponsors-only monthly newsletter . If you are a sponsor (or if you start a sponsorship now) you can access it here . This month: Al got expensive, and Anthropic had a really good month The model releases were a little disappointing Conferences and podcasts I launched Datasette Agent and made a lot of progress on Datasette What I'm using, May 2026 edition Miscellaneous extras Here's a copy of the April newsletter as a preview of what you'll get. Pay $10/month to stay a month ahead of the free copy! Tags: newsletter
Published: 2026-06-01T04:45:00+00:00
URL: https://simonwillison.net/2026/Jun/1/may-newsletter/#atom-everything
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 13
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
```

```text
The solution might be cancelling my AI subscription
The solution might be cancelling my AI subscription I find this post by David Wilson very relatable. David lists 16+ projects he's spun up with AI tooling, and concludes: I didn't mean to build most of these things. Usually the Claude session started with something like " write a quick script for X ", and one hour later the result is not a quick script for X , nor in the usual case is my problem solved, whatever the original itch happened to be. On that last point, this technology is horrific for attention. It's a thermonuclear ADHD amplifier and I have seen the same effect in every single one of my adult friends. Folk running 3 screens simultaneously working on totally unrelated "projects" they have little hope of maintaining, and such little commitment to the outcome that the time is obviously wasted. This is a very real problem. I'm finding that coding agents can take me from a vague
Published: 2026-05-31T16:31:32+00:00
URL: https://simonwillison.net/2026/May/31/the-solution-might-be-cancelling-my-ai-subscription/#atom-everything
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 28
Signal tags: agent, ai, coding-agent
```

```text
Quoting Karen Kwok for Reuters Breakingviews
Anthropic defines “run-rate revenue” in two parts. Use the last 28 days of sales ⁠from customers charged on a consumption basis and multiply it by 13. Then, multiply the monthly subscription take by 12, ​and add the two together. — Karen Kwok for Reuters Breakingviews , citing "a person familiar with the matter" Tags: anthropic , ai
Published: 2026-05-31T01:48:12+00:00
URL: https://simonwillison.net/2026/May/31/anthropic-run-rate/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
How we contain Claude across products
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows
Published: 2026-05-30T21:36:24+00:00
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 41
Signal tags: agent, ai, claude-code, document, sandbox
```

```text
Running Python ASGI apps in the browser via Pyodide + a service worker
Research: Running Python ASGI apps in the browser via Pyodide + a service worker Datasette Lite is my version of Datasette that runs entirely in the browser using Pyodide in WebAssembly. When I first built it four years ago I used Web Workers and code that intercepts navigation operations and fetches the generated HTML by running the Python app. This worked, but had the disadvantage that any JavaScript in <script> tags would not be executed - breaking some Datasette functionality and a whole lot of Datasette plugins. This morning I set Claude Opus 4.8 the task (in Claude Code for web) of figuring out how to run Python ASGI apps in Pyodide using Service Workers instead, and it seems to work! Here's a basic ASGI FastCGI demo and here's a demo that runs Datasette 1.0a31 . I'm still getting my head around exactly how it works, but once I've done that I plan to upgrade Datasette Lite itself.
Published: 2026-05-30T21:02:16+00:00
URL: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: claude-code
```

```text
I Am Retiring from Tech to Live Offline
I Am Retiring from Tech to Live Offline I've seen a lot of posts on forums from people threatening to quit their careers over AI. This is not one of those: Chad Whitacre is taking concrete steps, starting with this typewritten, scanned letter I'm retiring from tech. Well, "retiring" is euphemistic. I'm stepping away from tech, and that includes Open Source. [...] AI was the last straw. Have you heard of that island off India where the indigenous population kills any outsiders fool-hardy enough to land? They are doing the rest of us a favor by preserving a way of life we may need again someday, or at the very least should not want to see completely extinguished. A reminder. Never forget your roots. Here in Pennsylvania we have the Amish performing a similar function. Significantly less hostile, though still set apart, they bear witness to what was normal for all of us a couple short centu
Published: 2026-05-30T19:39:08+00:00
URL: https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
Quoting Daniel Jalkut
My take on AI is, essentially, everybody who’s against it is too against it and everybody who’s for it is too for it. — Daniel Jalkut , via John Gruber Tags: ai , john-gruber
Published: 2026-05-30T17:29:55+00:00
URL: https://simonwillison.net/2026/May/30/daniel-jalkut/#atom-everything
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
datasette 1.0a31
Release: datasette 1.0a31 Another significant alpha release, with two new headline features. Datasette now offers users with the necessary permissions the ability to both execute write queries against their database and to save stored queries (renamed from "canned queries") both privately and for use by other members of their Datasette instance. There's more detail in SQL write queries and stored queries in Datasette 1.0a31 on the Datasette blog, which now has three posts introducing new features since the blog launched two weeks ago. Here's an animated demo from the blog post showing how the new execute query interface lets people get started with templated insert/update/delete queries from tables they have permission to edit: Tags: projects , sql , sqlite , datasette , annotated-release-notes
Published: 2026-05-29T03:32:02+00:00
URL: https://simonwillison.net/2026/May/29/datasette/#atom-everything
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 8
Signal tags: ai, database
```

### PlanetScale Blog Atom
Source URL: `https://planetscale.com/blog/feed.atom`
Final URL: `https://planetscale.com/blog/feed.atom`
Status/content: `200` / `application/xml`

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

### Vercel Blog
Source URL: `https://vercel.com/blog/rss.xml`
Final URL: `https://vercel.com/atom`
Status/content: `200` / `application/atom+xml`

### LangChain Blog
Source URL: `https://www.langchain.com/blog/rss.xml`
Final URL: `https://www.langchain.com/blog/rss.xml`
Status/content: `200` / `application/rss+xml; charset=utf-8`

```text
How Rippling built production AI in 6 months with Deep Agents and LangSmith
Rippling uses LangChain Deep Agents and LangSmith to run cross-domain AI across HR, IT, finance, payroll, and global operations.
Published: Mon, 01 Jun 2026 16:05:12 GMT
URL: https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 31
Signal tags: agent, ai, finance, langsmith
```

```text
Interpreter Skills: Building Workflows for Agents
Interpreter skills extend agent skills with a TypeScript module the agent can import and run. This lets you build more capable workflows with your agents.
Published: Sat, 30 May 2026 01:01:20 GMT
URL: https://www.langchain.com/blog/interpreter-skills
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 15
Signal tags: agent, workflow
```

```text
(untitled)
Published: Sat, 30 May 2026 01:01:20 GMT
URL: https://www.langchain.com/blog/financial-ai-that-investigates-macro-trends-eu-economic-analysis-with-you-com-and-langchain
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
Mission Control for Self-Hosted LangSmith on Kubernetes
How Mission Control helps teams operate self-hosted LangSmith on Kubernetes with in-cluster config, preflight checks, health views, releases, and diagnostics.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/mission-control-operating-self-hosted-langsmith-on-kubernetes
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 18
Signal tags: kubernetes, langsmith
```

```text
(untitled)
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/how-we-built-langsmith-engine-our-agent-for-improving-agents
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
LangSmith Sandboxes are Generally Available
Run AI agents safely with LangSmith Sandboxes (GA): kernel-isolated microVMs with snapshots, parallel forks, service URLs, and auth proxies. Built for coding agents, CI agents, and data pipelines
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/langsmith-sandboxes-generally-available
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: append_existing
Signal score: 50
Signal tags: agent, ai, coding-agent, langsmith, sandbox
```

```text
Introducing Langsmith Engine
LangSmith Engine watches your production traces, clusters failures into named issues, and proposes targeted fixes and eval coverage. Stop manually triaging agent failures.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/introducing-langsmith-engine
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: agent, ai, langsmith
```

```text
The Agent Development Lifecycle: Build, Test, Deploy & Monitor AI Agents | LangChain
Learn how leading engineering teams ship AI agents reliably and repeatedly using a four-phase agent development lifecycle: Build, Test, Deploy, and Monitor. Includes guidance on evals, runtimes, observability, and governance at scale.
Published: Thu, 28 May 2026 23:04:43 GMT
URL: https://www.langchain.com/blog/the-agent-development-lifecycle
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: manual_review
Signal score: 24
Signal tags: agent, ai, governance, observability
```

```text
Fixing agent failures in production: Interrupt 2026 recap | LangChain Newsletter
Recapping two days of Interrupt 2026 — LangSmith Engine, Sandboxes GA, LangChain Labs, and 23 talks from teams at LinkedIn, Rippling, Cisco, and more. Now on demand.
Published: Thu, 28 May 2026 14:08:39 GMT
URL: https://www.langchain.com/blog/may-2026-langchain-newsletter
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 34
Signal tags: agent, ai, langsmith, sandbox
```

```text
April 2026: LangChain Newsletter
April means we're officially counting down to Interrupt. We’ve got two more meetups on the agent improvement loop before April officially closes out in New York and San Francisco. RSVP while seats still last!
Published: Thu, 28 May 2026 14:08:39 GMT
URL: https://www.langchain.com/blog/april-2026-langchain-newsletter
Seen in recent new-target baseline: no / not in recent new-target cache
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
How Lyft Built a Self-Serve AI Agent Platform with LangGraph and LangSmith
Lyft used LangGraph and LangSmith to build a self-serve AI agent platform for customer support, cutting agent development from months to weeks.
Published: Wed, 27 May 2026 21:41:16 GMT
URL: https://www.langchain.com/blog/lyft-built-a-self-serve-ai-agent-platform-for-customer-support-with-langgraph-and-langsmith
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 22
Signal tags: agent, ai, langsmith
```

```text
From Token Streams to Agent Streams
Move beyond token streaming. Learn how the latest streaming primitives in Deep Agents, LangChain, and LangGraph enable typed events, scoped subscriptions, subagent visibility, multimodal outputs, and resilient frontend experiences for building production-ready agent applications.
Published: Thu, 21 May 2026 20:32:38 GMT
URL: https://www.langchain.com/blog/token-streams-to-agent-streams
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: agent, ai, subagent
```

### LlamaIndex Blog
Source URL: `https://www.llamaindex.ai/blog/rss.xml`
Final URL: `https://www.llamaindex.ai/blog/rss.xml`
Status/error: `HTTPError: HTTP Error 404: Not Found`

### GitHub Trending daily
Source URL: `https://github.com/trending?since=daily`
Final URL: `https://github.com/trending?since=daily`
Status/content: `200` / `text/html; charset=utf-8`

```text
microsoft/markitdown
Python tool for converting files and office documents to Markdown. Language: Python. Stars today: 3,034.
Published: GitHub Trending daily
URL: https://github.com/microsoft/markitdown
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 5
Signal tags: document
```

```text
nesquena/hermes-webui
Hermes WebUI: The best way to use Hermes Agent from the web or from your phone! Language: Python. Stars today: 945.
Published: GitHub Trending daily
URL: https://github.com/nesquena/hermes-webui
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 10
Signal tags: agent
```

```text
supermemoryai/supermemory
Memory engine and app that is extremely fast, scalable. The Memory API for the AI era. Language: TypeScript. Stars today: 647.
Published: GitHub Trending daily
URL: https://github.com/supermemoryai/supermemory
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 8
Signal tags: ai, memory
```

```text
harry0703/MoneyPrinterTurbo
利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM. Language: Python. Stars today: 3,375.
Published: GitHub Trending daily
URL: https://github.com/harry0703/MoneyPrinterTurbo
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 7
Signal tags: ai, llm
```

```text
D4Vinci/Scrapling
🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Language: Python. Stars today: 1,486.
Published: GitHub Trending daily
URL: https://github.com/D4Vinci/Scrapling
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
pbakaus/impeccable
The design language that makes your AI harness better at design. Language: JavaScript. Stars today: 485.
Published: GitHub Trending daily
URL: https://github.com/pbakaus/impeccable
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 2
Signal tags: ai
```

```text
p-e-w/heretic
Fully automatic censorship removal for language models Language: Python. Stars today: 249.
Published: GitHub Trending daily
URL: https://github.com/p-e-w/heretic
Seen in recent new-target baseline: yes
Route read: discard
Signal score: 0
```

```text
EveryInc/compound-engineering-plugin
Official Compound Engineering plugin for Claude Code, Codex, Cursor, and more Language: TypeScript. Stars today: 417.
Published: GitHub Trending daily
URL: https://github.com/EveryInc/compound-engineering-plugin
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 24
Signal tags: claude-code, codex
```

```text
TauricResearch/TradingAgents
TradingAgents: Multi-Agents LLM Financial Trading Framework Language: Python. Stars today: 299.
Published: GitHub Trending daily
URL: https://github.com/TauricResearch/TradingAgents
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 23
Signal tags: agent, llm, trading
```

```text
revfactory/harness
A meta-skill that designs domain-specific agent teams, defines specialized agents, and generates the skills they use. Language: HTML. Stars today: 524.
Published: GitHub Trending daily
URL: https://github.com/revfactory/harness
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 12
Signal tags: agent, ai
```

```text
godotengine/godot
Godot Engine – Multi-platform 2D and 3D game engine Language: C++. Stars today: 77.
Published: GitHub Trending daily
URL: https://github.com/godotengine/godot
Seen in recent new-target baseline: yes
Route read: discard
Signal score: -3
```

```text
can1357/oh-my-pi
⌥ AI Coding agent for the terminal — hash-anchored edits, optimized tool harness, LSP, Python, browser, subagents, and more Language: TypeScript. Stars today: 335.
Published: GitHub Trending daily
URL: https://github.com/can1357/oh-my-pi
Seen in recent new-target baseline: yes
Route read: raw_only
Signal score: 40
Signal tags: agent, ai, coding-agent, subagent
```

## Filtering notes
- Social/browser surfaces covered by 08:00 and 19:00 jobs were intentionally excluded.
- Repeated official-feed rows from 2026-06-01 and earlier were treated as reinforcement/raw evidence, not new durable novelty.
- Microsoft Foundry hosted-agent rows were preserved as useful baseline/backfill because the source was newly included here, but the durable append is driven by fresh June 1 AWS/OpenAI/Docker/LangChain evidence.
- GitHub Trending was checked; no repo row in this 11:00 pass exceeded the official-feed AWS/OpenAI/Docker/LangChain cluster.

## Why this raw exists
This file is the evidence store for the 11:00 new-target Honcho triage pass. It preserves grounded source URLs and route decisions before a minimal append to existing durable pages.
