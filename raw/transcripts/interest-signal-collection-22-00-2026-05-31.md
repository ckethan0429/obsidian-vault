---
title: Interest Signal Collection — 2026-05-31 22:00 KST
created: 2026-05-31
updated: 2026-05-31
type: raw-transcript
source: live RSS/Atom/HTML fetch from big-tech and infrastructure blogs, engineering newsletters, official docs/changelogs/release feeds, and GitHub Trending
route_hint: raw_only
route_confidence: 0.80
route_reason: The 22:00 new-target pass found newly observed Vercel Sandbox / Conductor, GitHub Trending memory-subagent-Hermes UI repos, and PlanetScale Postgres operating rows after the same-day 11:00 LangChain/LlamaIndex append. These are useful evidence for the existing managed-agent / AI-infra axes, but they do not justify another same-day concept-page update or a new wiki page.
routing:
  route: raw_only
  confidence: 0.80
  reasons:
    - Same-day 11:00 new-target run already absorbed the durable LangChain / LlamaIndex production-agent delta into existing pages.
    - Vercel Sandbox and GitHub Trending add fresh evidence for the same cloud-sandbox / memory / subagent lane rather than a new durable branch.
    - Newly added PlanetScale feed rows are relevant infrastructure context but are not strong enough, alone, to promote.
  signal_tags:
    - new-target
    - official-feeds
    - engineering-blogs
    - github-trending
    - vercel-sandbox
    - agent-memory
    - raw-only
---

# Raw Transcript — Interest Signal Collection 22:00 KST 2026-05-31

Source: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, launch posts, and GitHub Trending
Date: 2026-05-31
Captured at: 2026-05-31T22:02:56.882539+09:00

## Live session notes
- This was the 22:00 new-target pass; social-signal surfaces such as Threads / YouTube / likes / reposts / activity were intentionally excluded.
- Read `/home/ck/wiki/README.md` first and followed the raw-evidence → Honcho triage → durable-promotion split.
- Compared against `raw/transcripts/interest-signal-collection-11-00-2026-05-31.md`, `raw/transcripts/interest-signal-collection-22-00-2026-05-30.md`, `~/wiki/.cache/new-target-11-00-2026-05-31.json`, and same-day Honcho/log context before judging novelty.
- Collection used live HTTP fetches of RSS/Atom/XML feeds, GitHub Trending HTML, and HTML blog-index fallbacks where needed.
- Disposable JSON cache: `~/wiki/.cache/new-target-22-00-2026-05-31.json`.

## Strongest routing read
- Overall route: `raw_only`.
- Route driver: newly observed Vercel Sandbox / Conductor cloud-sandbox items and GitHub Trending memory/subagent/Hermes UI repos are high-signal but stay within the same managed-agent / AI-infra axis already appended at 11:00.
- Durable action: update Honcho/log audit only; leave `index.md` and non-Honcho durable concept pages unchanged.

## 1) Strongest rows selected for triage

### Vercel Changelog / Blog

```text
Run Docker containers inside Vercel Sandbox
URL: https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox
Route read: append_existing
Reason: Vercel Sandbox가 Docker 컨테이너 실행까지 노출되어, 코딩 에이전트용 클라우드 샌드박스가 더 제품화되는 신호.
```

### Vercel Blog

```text
How Conductor moved parallel coding agents from the laptop to the cloud with Vercel Sandbox
URL: https://vercel.com/blog/how-conductor-moved-parallel-coding-agents-from-the-laptop-to-the-cloud-with-vercel-sandbox
Route read: append_existing
Reason: Conductor의 병렬 코딩 에이전트가 로컬 워크스페이스에서 Vercel Sandbox 기반 클라우드 실행으로 이동한 사례.
```

### GitHub Trending daily

```text
supermemoryai/supermemory
URL: https://github.com/supermemoryai/supermemory
Route read: append_existing
Reason: AI 시대용 Memory API / memory engine으로, agent memory surface가 다시 트렌딩에 노출.
```

### GitHub Trending daily

```text
nicobailon/pi-subagents
URL: https://github.com/nicobailon/pi-subagents
Route read: append_existing
Reason: async subagent delegation, truncation, artifacts, session sharing을 내세운 subagent 확장 신호.
```

### GitHub Trending daily

```text
nesquena/hermes-webui
URL: https://github.com/nesquena/hermes-webui
Route read: raw_only
Reason: Hermes Agent 웹/모바일 UI 후보로 보이나 단일 트렌딩 repo라 raw evidence로 보존.
```

### PlanetScale Blog

```text
Patterns for Postgres Traffic Control
URL: https://planetscale.com/blog/patterns-for-postgres-traffic-control
Route read: manual_review
Reason: Postgres 트래픽 예산/우선순위 제어는 AI infra 운영경제와 맞닿지만, 이번 패스에서는 신규로 추가한 소스의 단일 DB-ops 클러스터라 보수적으로 보존.
```

## 2) Full collected source snapshot with URLs

### OpenAI News RSS
Source URL: `https://openai.com/news/rss.xml`
```text
Boston Children’s uses AI to unlock new diagnoses
Boston Children’s Hospital uses OpenAI technology to improve patient care, reduce operational burden, and help diagnose more than 40 rare disease cases.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/boston-childrens-hospital
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How Braintrust turns customer requests into code with Codex
How Braintrust engineers use Codex with GPT-5.5 to run experiments and code faster.
Published: Fri, 29 May 2026 12:00:00 GMT
URL: https://openai.com/index/braintrust
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Strengthening societal resilience with Rosalind Biodefense
OpenAI launches Rosalind Biodefense, expanding trusted access to GPT-Rosalind for vetted developers and U.S. government partners advancing biodefense, public health, and pandemic preparedness through frontier AI.
Published: Fri, 29 May 2026 03:00:00 GMT
URL: https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
A shared playbook for trustworthy third party evaluations
OpenAI shares guidance on third-party AI evaluations, covering how to assess model capabilities, safeguards, and validity for frontier systems.
Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://openai.com/index/trustworthy-third-party-evaluations-foundations
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How Endava builds an agentic organization with Codex
Learn how Endava uses Codex to build an agentic organization, accelerating software delivery and reducing requirements analysis from weeks to hours.
Published: Thu, 28 May 2026 12:00:00 GMT
URL: https://openai.com/index/endava
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
OpenAI’s Frontier Governance Framework
Explore OpenAI’s Frontier Governance Framework and how our AI safety, security, and risk practices align with emerging EU and California regulations.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/openai-frontier-governance-framework
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
MUFG aims to become AI-native with OpenAI
MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.
Published: Thu, 28 May 2026 00:00:00 GMT
URL: https://openai.com/index/mufg
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Cisco and OpenAI redefine enterprise engineering with Codex
Cisco and OpenAI are redefining enterprise engineering with Codex, helping Cisco scale AI-native development, accelerate AI Defense work, and automate defect remediation.
Published: Wed, 27 May 2026 11:00:00 GMT
URL: https://openai.com/index/cisco
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Building self-improving tax agents with Codex
See how OpenAI, Thrive, and Crete built a self-improving tax agent with Codex, automating filings, improving accuracy, and accelerating workflows.
Published: Wed, 27 May 2026 07:00:00 GMT
URL: https://openai.com/index/building-self-improving-tax-agents-with-codex
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Election information and safeguards in 2026
Ahead of global elections, we’re helping people access information, supporting cyber defenders, and increasing AI transparency
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://openai.com/index/election-safeguards-2026
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Warp’s big bet on building open source with GPT-5.5
Warp uses GPT-5.5 and OpenAI models to coordinate coding agents across local, cloud, and open-source development workflows.
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://openai.com/index/warp
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership
OpenAI partners with Grupo Folha and Grupo UOL to bring trusted Brazilian journalism to ChatGPT, expanding access to news with attribution and transparency.
Published: Mon, 25 May 2026 00:00:00 GMT
URL: https://openai.com/index/grupo-folha-grupo-uol-partnership
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### AWS What's New
Source URL: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`
```text
Amazon SES now offers inbox placement metrics and blocklist monitoring
Today, Amazon Simple Email Service (SES) launched a new set of deliverability features that help customers get more information about their outbound sending deliverability performance and reputation. Customers can now see the percentage of messages that are placed in recipient spam folders based on samples of industry data, as well as see when their domains and IPs are listed on public email sender block lists. This makes it easier for customers to optimize their sending content to maximize customer engagement. Previously, customers could use SES' Virtual Deliverability Manager to visualize the full end-to-end journey of email deliverability metrics. This included delivery rates, bounce rates of various types, as well as complaint, open and click rates. Customers did not have visibility into how many emails were placed in the spam folder, making it difficult to estimate how many emails w
Published: Fri, 29 May 2026 21:48:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-ses-global-deliverability/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
AWS End User Messaging RCS for Business now available in 20 additional countries
AWS End User Messaging now supports RCS for Business messaging in 20 additional countries, bringing the total to 22. Businesses can now send verified, branded RCS messages to customers in Austria, Brazil, Colombia, Czech Republic, Denmark, Dominican Republic, France, Germany, Guatemala, Italy, Mexico, Netherlands, Norway, Peru, Poland, Singapore, Slovakia, Spain, Sweden, and the United Kingdom, in addition to the United States and Canada. Customers can use the existing SendTextMessage API to send RCS messages to these countries with no application changes. Messages are delivered from a recognized business identity, and when a recipient's device does not support RCS, they automatically fall back to SMS for reliable delivery. RCS for Business is available in all AWS Regions where AWS End User Messaging is available. Pricing varies by destination country; see the AWS End User Messaging pric
Published: Fri, 29 May 2026 20:23:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-rcs-countries/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Amazon Connect Customer now supports scheduling tasks up to 90 days in advance
Amazon Connect Customer now supports scheduling tasks up to 90 days in advance, helping organizations plan, route, and track long-running follow-up work. For example, an insurance team managing an auto repair claim can schedule future tasks for an adjuster visit, parts availability check, and repair completion follow-up, with each task routed to the right team at the right time with relevant claim context. You can schedule tasks using the StartTaskContact API, flows, or the agent workspace. This feature is available in all commercial and AWS GovCloud (US) regions where Amazon Connect Customer is offered. To learn more, see our documentation . To learn more about Connect Customer, visit the Amazon Connect Customer website .
Published: Fri, 29 May 2026 18:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-connect-customer-tasks-90day-schedule
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
AWS Shield Advanced introduces DDoS attack flow logs
AWS Shield Advanced announces distributed denial-of-service (DDoS) attack flow logs, giving you packet-level visibility into traffic hitting Shield Advanced protected resources during a DDoS attack. The log data is published to Amazon S3, Amazon CloudWatch Logs, or Amazon Data Firehose, for forensic analysis and compliance purposes. The DDoS attack flow logs, capture critical packet-level details, including source and destination IP addresses, ports, protocols, packet and byte counts, source country information, and others. The log data is automatically published to your chosen destination at 5-minute intervals during active attacks. Once published, you can retrieve and analyze your flow log data using your preferred analytics tools, enabling post-incident investigation, threat intelligence gathering, and compliance reporting. To enable flow logs, you must protect the resources with Shie
Published: Fri, 29 May 2026 17:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-shield-ddos/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Amazon Redshift Serverless now offers 4-RPU Minimum Capacity in 7 additional AWS Regions
Amazon Redshift now allows you to get started with Amazon Redshift Serverless with a lower data warehouse base capacity configuration of 4 Redshift Processing Units (RPUs) in the Asia Pacific (Hong Kong), Asia Pacific (Seoul), Canada (Central), Europe (London), South America (Sao Paulo), AWS GovCloud (US-East), and AWS GovCloud (US-West) regions. Amazon Redshift Serverless measures data warehouse capacity in RPUs. 1 RPU provides you 16 GB of memory. You pay only for the duration of workloads you run in RPU-hours on a per-second basis. Previously, the minimum base capacity required to run Amazon Redshift Serverless was 8 RPUs. You can start using Amazon Redshift Serverless for as low as $1.50 per hour and pay only for the compute capacity your data warehouse consumes when it is active. For predictable workloads, Amazon Redshift Serverless capacity reservations with 1-year and 3-year terms
Published: Fri, 29 May 2026 15:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-serverless-4-rpu-seven-regions/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
AWS Interconnect - multicloud now offers a free 500 Mbps tier
AWS Interconnect - multicloud now offers a free 500 Mbps multicloud Interconnect, making it easier to privately connect your workloads on AWS and other public clouds. Customers have been adopting multicloud strategies while migrating more applications to the cloud. With AWS Interconnect - multicloud, AWS simplified the way cloud services providers (CSPs) offer managed, highly-resilient, private connectivity for customers. The specification that powers Interconnect is open and already adopted by Google Cloud and Oracle Cloud Infrastructure (currently in Public Preview), with Microsoft Azure coming later in 2026. Today we are making it easier for customers to evaluate, test, and operate workloads between AWS and another CSP. The new Free Tier Interconnect gives customers a fully managed, 500 Mbps Interconnect to another CSP at no charge on the AWS side, with the same network path, facility
Published: Fri, 29 May 2026 15:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-interconnect-multicloud-offers-free-500-mbps-tier
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Amazon RDS for Oracle now supports April 2026 Release Update and Supplemental Patch Bundle
Amazon Relational Database Service (Amazon RDS) for Oracle now supports the Oracle April 2026 Release Update (RU) for Oracle Database versions 19c and 21c, and the corresponding Supplemental Patch Bundle for Oracle Database version 19c. We recommend upgrading to the April 2026 RU as it includes security updates for Oracle database products. Starting with April 2026 releases, the Oracle Spatial Patch Bundle has been renamed to Supplemental Patch Bundle (SPB). The SPB includes additional database patches recommended by Oracle for specific use cases, such as Oracle Spatial, Oracle Data Pump, and Oracle GoldenGate. You can apply the April 2026 RU from the Amazon RDS Management Console, or by using the AWS SDK or CLI. To automatically apply updates to your database instance during your maintenance window, enable Automatic Minor Version Upgrade. You can apply the Supplemental Patch Bundle upda
Published: Fri, 29 May 2026 07:49:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-oracle-supports-april-2026-release-update-supplemental-patch-bundle
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Oracle Database@AWS is now available in twenty AWS Regions
Oracle Database@AWS is now generally available in eight additional AWS Regions: EU-Central-2 (Zurich), EU-South-1 (Milan), EU-South-2 (Spain), EU-West-3 (Paris), AP-Northeast-3 (Osaka), AP-Southeast-1 (Singapore), AP-Southeast-4 (Melbourne) and SA-East-1 (Sao Paulo). Oracle Database@AWS enables customers to access Oracle Cloud Infrastructure (OCI) managed Oracle Exadata systems within AWS data centers. With this launch, customers in Europe, South America, and Asia Pacific with in-region data residency requirements can migrate on-premises Oracle Exadata and Oracle Real Application Clusters (RAC) applications to AWS. With this expansion, Oracle Database@AWS services are now available in twenty Regions: US-East-1 (N. Virginia), US-West-2 (Oregon), US-East-2 (Ohio), CA-Central-1 (Canada Central), SA-East-1 (Sao Paulo), EU-Central-1 (Frankfurt), EU-West-1 (Dublin), EU-West-2 (London), EU-Cent
Published: Fri, 29 May 2026 07:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/oracle-database-aws-available-twenty-regions/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Amazon S3 Tables are now available in two additional AWS Regions
Amazon S3 Tables are now available in the Asia Pacific (Taipei) and Asia Pacific (New Zealand) Regions. Amazon S3 Tables deliver the first cloud object store with built-in Apache Iceberg support, streamlining tabular data storage at scale. S3 Tables automatically perform continual table maintenance to optimize query efficiency and reduce storage costs as your data lake grows and evolves. Because S3 Tables support the Apache Iceberg standard, your data is easily queryable by both AWS and third-party engines. With the Intelligent-Tiering storage class, S3 Tables automatically manage costs based on access patterns with no performance impact or operational overhead. For more information about the AWS Regions where S3 Tables are available, see S3 Tables AWS Regions and endpoints . To learn more, see the following resources: Amazon S3 Tables Working with Amazon S3 Tables and table buckets S3 T
Published: Fri, 29 May 2026 04:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-s3-tables-aws-regions/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Monitor AWS Budgets directly in Billing and Cost Management Dashboards with new Budgets widget
Today, AWS Billing and Cost Management (BCM) announces support for Budgets widgets in BCM Dashboards, giving you the flexibility to customize your cost management console with the views that matter most to your organization. You can now monitor AWS Budgets alongside Cost Explorer reports and Savings Plans and Reserved Instance coverage and utilization reports, all in a single, tailored dashboard. Previously, reviewing budget performance required navigating to a separate console page. Now, finance teams and cloud administrators can add one or more Budgets widgets to any BCM Dashboard, displaying budget name, budgeted amount, actual spend, and forecasted amount. You can filter budgets by name, threshold, and budget type, directly within the widget, and choose which budgets appear on each dashboard, reducing the time spent switching between console pages and enabling faster budget monitorin
Published: Thu, 28 May 2026 20:57:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/monitor-aws-budgets-using-dashboards
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
AWS IoT Core adds APIs for MQTT connection management
Today, AWS IoT Core launches two new MQTT connection management APIs, GetConnection and ListSubscriptions, enabling you to easily access MQTT client connection and subscription information for your Internet of Things (IoT) devices. These APIs help you troubleshoot connectivity issues, monitor client behavior, and audit connection patterns across your device fleet. The GetConnection API gives you visibility into an IoT device connection by retrieving detailed connection information, including connection status, MQTT session details, and optional socket-level data such as source and target IP addresses, ports, and client VPC endpoint ID, controlled via granular IAM policies. The ListSubscriptions API complements this by returning all topic subscriptions, including QoS levels for a client’s MQTT session, for connected and offline clients with persistent sessions. This enables you to validat
Published: Thu, 28 May 2026 20:30:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-iot-core-apis-mqtt/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
AWS Organizations emits CloudTrail events for account membership changes
AWS Organizations now automatically emits CloudTrail events to your management account whenever accounts join or leave your organization. These new events—AccountJoinedOrganization and AccountDepartedOrganization—provide security teams and cloud administrators with enhanced visibility into organizational membership changes, helping detect unauthorized activities and potential security incidents that previously could go unnoticed. The AccountJoinedOrganization event captures how an account joined an organization (Created or Invited) and the join timestamp, while the AccountDepartedOrganization event records how an account departed —Left for accounts that departed voluntarily, Removed for accounts removed by the management account, or Cleaned for accounts that were permanently closed along with the departure timestamp. You can leverage these events to create CloudWatch alarms or Amazon Eve
Published: Thu, 28 May 2026 16:00:00 GMT
URL: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-cloudtrail/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### GitHub Changelog
Source URL: `https://github.blog/changelog/feed/`
```text
Copilot usage metrics API adds cohorts for AI adoption
To help you tell a deeper Copilot adoption story—not just who is active, but how they’re using Copilot—the Copilot usage metrics API now classifies each engaged user into an AI… The post Copilot usage metrics API adds cohorts for AI adoption appeared first on The GitHub Blog .
Published: Fri, 29 May 2026 21:03:00 +0000
URL: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Hard budget limits now available for GitHub Advanced Security
Enterprise administrators and billing managers can now set hard budget limits for GitHub Advanced Security (GHAS) SKUs, preventing teams from exceeding their allocated license budgets. Previously, license-based products like GHAS… The post Hard budget limits now available for GitHub Advanced Security appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:59:05 +0000
URL: https://github.blog/changelog/2026-05-28-hard-budget-limits-now-available-for-github-advanced-security
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
CodeQL 2.25.5 improves query accuracy for GitHub Actions
CodeQL is the static analysis engine behind GitHub code scanning, which finds and remediates security issues in your code. We’ve recently released CodeQL 2.25.5, which includes accuracy improvements across C/C++,… The post CodeQL 2.25.5 improves query accuracy for GitHub Actions appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 21:09:44 +0000
URL: https://github.blog/changelog/2026-05-28-codeql-2-25-5-improves-query-accuracy-for-github-actions
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Claude Opus 4.8 is generally available for GitHub Copilot
Claude Opus 4.8, Anthropic’s latest Opus model, is now available in GitHub Copilot. In our early testing, Opus 4.8 demonstrates a clear step forward in code understanding and generation across… The post Claude Opus 4.8 is generally available for GitHub Copilot appeared first on The GitHub Blog .
Published: Thu, 28 May 2026 16:56:24 +0000
URL: https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Copilot Memory has more controls for deletion, scope, and the Copilot CLI
Copilot Memory now includes improved memory deletion, adds a repository-level off switch, and brings further memory controls into the Copilot CLI. Copilot Memory is in public preview and available to… The post Copilot Memory has more controls for deletion, scope, and the Copilot CLI appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 21:05:28 +0000
URL: https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
GitHub Code Quality: Repository Enablement API
You can now programmatically enable and configure GitHub Code Quality on individual repositories using the new Repository Enablement API, available today in public preview. Two new endpoints are now available:… The post GitHub Code Quality: Repository Enablement API appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 20:35:06 +0000
URL: https://github.blog/changelog/2026-05-26-github-code-quality-repository-enablement-api
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Target Copilot models to organizations with model rules
Enterprise owners now have granular control over which GitHub Copilot models are available to each organization. With targeted model rules, you can allow specific models for specific organizations instead of… The post Target Copilot models to organizations with model rules appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 19:47:22 +0000
URL: https://github.blog/changelog/2026-05-26-target-copilot-models-to-organizations-with-model-rules
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Dependabot version updates now support the sbt ecosystem
Dependabot now supports sbt. Add sbt as a package ecosystem in your dependabot.yml file. Dependabot will then monitor your build.sbt inputs and open pull requests when newer commits are available… The post Dependabot version updates now support the sbt ecosystem appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 16:10:46 +0000
URL: https://github.blog/changelog/2026-05-26-dependabot-version-updates-now-support-the-sbt-ecosystem
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Filter secret scanning approval requests by sort order and bypass status
This week, we’re rolling out two improvements to our delegated workflows for secret scanning. What’s changing Sort bypass and dismissal requests in the UI: You can now choose between ascending… The post Filter secret scanning approval requests by sort order and bypass status appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 16:01:21 +0000
URL: https://github.blog/changelog/2026-05-26-filter-secret-scanning-approval-requests-by-sort-order-and-bypass-status
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
GitHub Classroom sign-ups are no longer available
Starting today, new sign-ups for GitHub Classroom are no longer available as we transition to partner solutions. If you already have a GitHub Classroom account or existing classrooms, you can… The post GitHub Classroom sign-ups are no longer available appeared first on The GitHub Blog .
Published: Tue, 26 May 2026 15:44:08 +0000
URL: https://github.blog/changelog/2026-05-26-github-classroom-sign-ups-are-no-longer-available
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Google Developers Blog
Source URL: `https://developers.googleblog.com/feeds/posts/default?alt=rss`
Final URL: `https://developers.googleblog.com/feeds/posts/default/?alt=rss`
```text
Supercharge your integration workflow with the Google Pay & Wallet Developer MCP server
Google has announced the new Google Pay & Wallet Developer MCP server, an open-standard tool designed to securely connect AI development assistants and IDEs with real-time API and account context. The server allows developers to remain within their development environment to search official documentation, validate Wallet pass definitions, check integration status, and manage merchant accounts. Ultimately, this integration aims to reduce friction and accelerate development workflows by minimizing context switching and providing up-to-date, grounded AI support.
Published: 
URL: https://developers.googleblog.com/supercharge-your-integration-workflow-with-the-google-pay-wallet-developer-mcp-server/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How the community trained Gemma to "Think" with Tunix and TPUs
The Google Tunix Hackathon on Kaggle challenged developers to transform small, non-reasoning base models into general reasoning engines using Kaggle TPUs and a limited compute budget. The winning teams achieved this by implementing multi-stage post-training pipelines that combined Supervised Fine-Tuning (SFT) with advanced alignment techniques like GRPO and SimPO. Ultimately, the competition democratized AI development by proving that highly capable, structured reasoning models can be successfully trained by the community using accessible, open-source resources.
Published: 
URL: https://developers.googleblog.com/how-the-community-trained-gemma-to-think-with-tunix-and-tpus/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
The latest updates to Google Pay
Google Pay is evolving for "agentic commerce" by introducing the Universal Commerce Protocol and a new MCP server that allows AI agents to manage integrations and analyze trends. New Android updates introduce dynamic callbacks for seamless express checkouts and extend payment support into social media apps via WebViews. Additionally, the platform is launching cross-device biometric authentication and new transaction signals to help merchants reduce friction and optimize processing costs.
Published: 
URL: https://developers.googleblog.com/the-latest-updates-to-google-pay/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Enhancing Android Checkout with Dynamic Callbacks in Google Pay
We are excited to bring Express checkout with Google Pay for Android native apps enabling developers...
Published: 
URL: https://developers.googleblog.com/enhancing-android-checkout-with-dynamic-callbacks-in-google-pay/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Empowering Service Providers and Hardware Partners with Gemini for Home
Google is expanding its smart home ecosystem by launching a full-stack Gemini AI offering that integrates advanced camera intelligence, natural language queries, and daily activity summaries. This initiative provides service providers and hardware manufacturers with turnkey reference designs and APIs to build proactive, branded services without extensive research and development. Ultimately, the program aims to move beyond basic device control toward an AI-native home that can understand context and care for users' needs in real time.
Published: 
URL: https://developers.googleblog.com/empowering-service-providers-and-hardware-partners-with-gemini-for-home/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Announcing ADK for Kotlin and ADK for Android 0.1.0: Building AI Agents on Android and Beyond
ADK for Kotlin brings agentic workflows to your backend projects, while ADK for Android provides spe...
Published: 
URL: https://developers.googleblog.com/adk-kotlin-android-building-ai-agents/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Blazing fast on-device GenAI with LiteRT-LM
Google AI Edge’s LiteRT-LM provides a production-proven, highly optimized infrastructure for running Gemma 4 across cross-platform mobile and edge environments. It actively unlocks the model's native multimodal and agentic features on-device by utilizing memory-efficient dynamic loading, Multi-Token Prediction for up to a 2.2x speedup, and advanced orchestration tools like Thinking Mode and Constrained Decoding. Furthermore, the engine is rapidly expanding its integration surfaces beyond Android, introducing new native Swift APIs for Apple ecosystems and WebGPU-accelerated JavaScript APIs for high-performance, serverless browser inference.
Published: 
URL: https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
One Year of Innovation: Celebrating 100k Members in the Google Cloud x NVIDIA Developer Community
The Google Cloud and NVIDIA developer community is celebrating its first anniversary with 100,000 members and a renewed focus on providing builders with advanced AI infrastructure and resources. To accelerate development, the community offers curated learning pathways for mastering LLM optimization, GPU-accelerated data analytics, and monthly expert-led webinars. Moving into its second year, the initiative will expand to include hands-on labs, engineering events, and specialized content focused on the growth of agentic AI.
Published: 
URL: https://developers.googleblog.com/one-year-of-innovation-celebrating-100k-members-in-the-google-cloud-x-nvidia-developer-community/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
All the news from the Google I/O 2026 Developer keynote
Google announced the transition from assistive AI to independent agents, highlighting the launch of the Gemini 3.5 series and major updates to its Antigravity agent-first development platform. For mobile developers, the post introduces new Android CLI tools, the Android Bench evaluation leaderboard, and an automated Migration agent designed to rapidly convert various frameworks into native Kotlin code. Web development is also being transformed through Chrome DevTools for agents, the HTML-in-Canvas API, and the proposal of WebMCP, an open web standard that enables browser-based AI agents to execute complex tasks.
Published: 
URL: https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
A Smarter Google AI Edge Gallery: MCP integration, notifications, and session continuity
The Google AI Edge Gallery app has expanded its on-device AI capabilities by introducing experimental support for the open-source Model Context Protocol (MCP) on Android, allowing Gemma 4 to coordinate complex tasks across external data sources like Google Workspace and Google Maps. To enable more proactive and persistent user interactions, the update adds a "Schedule Notification" skill for automating routines and a persistent chat history feature that restores long session contexts nearly instantly. Driven by an open-source toolkit, the platform encourages community developers to build and share custom utility-focused workflows, prompt configurations, and tool integrations via its GitHub repository.
Published: 
URL: https://developers.googleblog.com/a-smarter-google-ai-edge-gallery-mcp-integration-notifications-and-session-continuity/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Google Tensor SDK Beta with LiteRT
The Google Tensor ML SDK is graduating to its Beta phase, allowing developers to build and deploy high-performance machine learning models directly onto the TPU of Google Pixel 10 devices. By integrating with LiteRT, Google's edge deployment framework, the SDK provides a unified workflow for developers to convert, compile, and run PyTorch or TFLite models with robust fallback options. Additionally, a new model garden offers over 100 classic and generative AI models, including Gemma 3, enabling low-latency, private features like speech recognition, computer vision, and text generation.
Published: 
URL: https://developers.googleblog.com/google-tensor-sdk-beta-with-litert/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
An important update: Transitioning Gemini CLI to Antigravity CLI
Google is unifying its AI terminal tools by transitioning the community-focused Gemini CLI into Antigravity CLI, a new agent-first platform built for complex, multi-agent workflows. This new Go-based tool offers faster execution, asynchronous processing, and a unified architecture that syncs with the Antigravity 2.0 desktop application. While enterprise customers will maintain existing access, individual and free users must transition to the new platform before Gemini CLI stops serving requests on June 18, 2026.
Published: 
URL: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Google AI Blog
Source URL: `https://blog.google/technology/ai/rss/`
Final URL: `https://blog.google/innovation-and-ai/technology/ai/rss/`
```text
Take our I/O 2026 quiz, vibe coded in Google AI Studio.
We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.
Published: Fri, 29 May 2026 19:00:00 +0000
URL: https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
9 demos of Gemini Omni and Gemini 3.5 in action
Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.
Published: Fri, 29 May 2026 17:30:00 +0000
URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Check out real-life AI prototypes from the Futures Lab.
University of Waterloo students develop AI prototypes like sign language tutors to reshape the future of education and work.
Published: Fri, 29 May 2026 12:00:00 +0000
URL: https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Catch up on 12 major I/O 2026 moments
Here are 12 of the biggest Google I/O 2026 keynote moments, including news about Gemini Omni, Gemini 3.5 Flash and more.
Published: Thu, 28 May 2026 15:00:00 +0000
URL: https://blog.google/innovation-and-ai/technology/ai/io-2026-keynote-moment-videos/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Catch up on the Dialogues stage at Google I/O 2026.
A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.
Published: Fri, 22 May 2026 18:00:00 +0000
URL: https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
We’re announcing new community investments in Missouri.
We’re helping build the state’s next-generation workforce and investing in energy programs.
Published: Wed, 20 May 2026 20:40:00 +0000
URL: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
100 things we announced at I/O 2026
We've been busy! Here’s a rundown of the top announcements, launches and demos at I/O 2026.
Published: Wed, 20 May 2026 19:30:00 +0000
URL: https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
A new experiment brings better group meetings to Google Beam
See and hear your colleagues in true-to-life size and sound, making hybrid meetings feel more inclusive and connected.
Published: Wed, 20 May 2026 16:45:00 +0000
URL: https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How AI Mode is changing the way people search in the U.S.
One year after launch, see how AI Mode’s users are shifting from keywords to natural language queries.
Published: Tue, 19 May 2026 17:45:00 +0000
URL: https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
New ways to create and get things done in Google Workspace
Announcing new voice capabilities in Gmail, Docs and Keep, a new design tool called Google Pics and updates to AI Inbox.
Published: Tue, 19 May 2026 17:45:00 +0000
URL: https://blog.google/products-and-platforms/products/workspace/workspace-updates/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
I/O 2026: Welcome to the agentic Gemini era
The latest from Google I/O: See how we’re helping you get more done with Gemini.
Published: Tue, 19 May 2026 17:45:00 +0000
URL: https://blog.google/innovation-and-ai/sundar-pichai-io-2026/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Gemini 3.5: frontier intelligence with action
At Google I/O we released Gemini 3.5, our latest series of models combining frontier intelligence with action.
Published: Tue, 19 May 2026 17:45:00 +0000
URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Cloudflare Blog
Source URL: `https://blog.cloudflare.com/rss/`
```text
How we built Cloudflare's data platform and an AI agent on top of it
Here’s how we built Town Lake, Cloudflare's unified analytics platform, alongside Skipper, an internal AI agent running on top of it.
Published: Thu, 28 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/our-unified-data-platform/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Iran's Internet is partially restored, Cloudflare Radar data shows
Cloudflare Radar data confirms early indications of a partial Internet restoration in Iran, nearly three months after the shutdown began. Traffic spikes and DNS queries have risen, but network activity is currently just 40% of pre-shutdown levels.
Published: Wed, 27 May 2026 17:25:00 GMT
URL: https://blog.cloudflare.com/iran-internet-partially-restored-may-2026/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Announcing Claude Compliance API support with Cloudflare CASB
Cloudflare now integrates with the Claude Compliance API, so that security teams can monitor Claude Enterprise activity directly in the Cloudflare Dashboard.
Published: Thu, 21 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/casb-anthropic-integration/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Announcing Claude Managed Agents on Cloudflare
Cloudflare has integrated with Anthropic's Claude Managed Agents to provide a fast, isolated execution environment for autonomous code delivery. This means builders can scale agent workflows globally while strictly controlling access to private backends and easily customizing their agent’s tools and runtimes.
Published: Tue, 19 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/claude-managed-agents/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Project Glasswing: what Mythos showed us
In recent weeks, we pointed Mythos and other security-focused LLMs at live code across critical parts of our infrastructure. We share what we observed, the models’ strengths and weaknesses, and what the work around them needs to look like before any of it can scale.
Published: Mon, 18 May 2026 06:00:00 GMT
URL: https://blog.cloudflare.com/cyber-frontier-models/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
When a partitioning change to our petabyte-scale ClickHouse cluster caused critical billing jobs to stall, standard metrics showed no obvious errors. This post explores how we identified severe lock contention in ClickHouse's query planner and built upstream patches to fix it.
Published: Thu, 14 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/clickhouse-query-plan-contention/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers. Here’s how.
Published: Wed, 13 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/browser-run-containers/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug
We investigated a bug where CUBIC's congestion window became pinned at its minimum floor, causing a performance to plummet. The fix involved correctly measuring idle periods to distinguish RTT wait times from actual application idleness.
Published: Tue, 12 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/quic-death-spiral-fix/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Building for the future
This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency, and we believe it's important that you hear this directly from us because it’s a major moment at Cloudflare.
Published: Thu, 07 May 2026 20:15:12 GMT
URL: https://blog.cloudflare.com/building-for-the-future/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How Cloudflare responded to the “Copy Fail” Linux vulnerability
When a critical Linux kernel privilege escalation was publicly disclosed, Cloudflare's security and engineering teams detected, investigated, and mitigated the threat across our global fleet, confirming zero customer impact and no malicious exploitation.
Published: Thu, 07 May 2026 13:00:00 GMT
URL: https://blog.cloudflare.com/copy-fail-linux-vulnerability-mitigation/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
When DNSSEC goes wrong: how we responded to the .de TLD outage
On May 5, 2026, DENIC published broken DNSSEC signatures for the .de TLD, making millions of domains unreachable. Here's what 1.1.1.1 saw, how serve stale cushioned the impact, and how we restored resolution.
Published: Wed, 06 May 2026 17:00:00 GMT
URL: https://blog.cloudflare.com/de-tld-outage-dnssec/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Code Orange: Fail Small is complete. The result is a stronger Cloudflare network
We have completed a massive engineering effort to make our infrastructure more resilient. Through new tools like Snapstone and the Engineering Codex, we've implemented safer configuration changes and automated best practices to prevent future incidents.
Published: Fri, 01 May 2026 21:07:30 GMT
URL: https://blog.cloudflare.com/code-orange-fail-small-complete/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Microsoft DevBlogs
Source URL: `https://devblogs.microsoft.com/feed/`
Final URL: `https://devblogs.microsoft.com/feed`
```text
Improve your agentic developer tools by grounding in Microsoft Learn
Development workflows span terminals, IDEs, background agents, and custom assistants. What matters is whether they draw from the same current source. Learn MCP Server gives any MCP-compatible agent direct access to current Microsoft documentation – one endpoint, nothing to install, no authentication required. What does that look like in practice? You give your coding agent […] The post Improve your agentic developer tools by grounding in Microsoft Learn appeared first on Microsoft for Developers .
Published: Thu, 28 May 2026 17:00:52 +0000
URL: https://devblogs.microsoft.com/blog/improve-your-agentic-developer-tools-by-grounding-in-microsoft-learn
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How AI coding agents actually use your technology
You ship an SDK, a CLI, an API, and developers use it. Now AI coding agents use it too, except they use it differently than humans do. Most of the time you have no idea what’s actually happening between “developer types a prompt” and “agent generates code with your technology.” Is the agent reading your […] The post How AI coding agents actually use your technology appeared first on Microsoft for Developers .
Published: Wed, 27 May 2026 18:30:38 +0000
URL: https://devblogs.microsoft.com/blog/how-ai-coding-agents-actually-use-your-technology
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
The AX stack: what’s fixed, where you can win
AI coding agents promise to make you more productive. On the surface they do, but in practice they fall short: agents generate code that doesn’t compile, use a deprecated SDK, or pick the wrong service entirely. Is it you using it wrong? Is it your tech stack? Or is it the tools you haven’t configured […] The post The AX stack: what’s fixed, where you can win appeared first on Microsoft for Developers .
Published: Thu, 21 May 2026 17:39:59 +0000
URL: https://devblogs.microsoft.com/blog/the-ax-stack-whats-fixed-where-you-can-win
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Agentic-Agile: Why Agent Development Needs Agile (Not Just Prompts)
“A bad system will beat a good person [or agent] every time” ~Dr. William Edwards Deming (with apologies) I started vibe coding by writing prompts (often dictated into my phone), refining them with an agent in M365 Copilot, and creating handoff files to use with GitHub Copilot CLI. The results were predictably non-deterministic. Prompt-driven development […] The post Agentic-Agile: Why Agent Development Needs Agile (Not Just Prompts) appeared first on Microsoft for Developers .
Published: Tue, 19 May 2026 15:00:09 +0000
URL: https://devblogs.microsoft.com/blog/agentic-agile-why-agent-development-needs-agile-not-just-prompts
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Azure Cosmos DB Conf 2026 Recap: Lessons from Production
A team was running at 100% RU utilization. Throttles were compounding into retries. P99 latency was degrading. The assumption was obvious: provision more throughput. They didn’t. Instead, they found a single logical partition absorbing more than 80% of traffic. After fixing the data model—without scaling the database—RU utilization dropped to 20–35%, throttling vanished, and latency […] The post Azure Cosmos DB Conf 2026 Recap: Lessons from Production appeared first on Microsoft for Developers .
Published: Tue, 05 May 2026 19:30:25 +0000
URL: https://devblogs.microsoft.com/blog/azure-cosmos-db-conf-2026-recap-lessons-from-production
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
LangChain.js for Beginners: A Free Course to Build Agentic AI Apps with JavaScript
Want to build AI agents with JavaScript that go beyond basic chat completions? Agents that reason, call tools, and pull from knowledge bases on their own? We put together a free, open source course to help you get there. LangChain.js for Beginners is 8 chapters and 70+ runnable TypeScript examples. Clone the repo, add your […] The post LangChain.js for Beginners: A Free Course to Build Agentic AI Apps with JavaScript appeared first on Microsoft for Developers .
Published: Thu, 23 Apr 2026 17:00:14 +0000
URL: https://devblogs.microsoft.com/blog/langchainjs-for-beginners
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Securing MCP: A Control Plane for Agent Tool Execution
The Model Context Protocol (MCP) is quickly becoming a common way for AI agents to discover and use tools. It provides a consistent interface to databases, APIs, file systems, and third-party services, which makes it easier to plug capabilities into agent workflows. However, MCP standardizes the execution surface without defining how that surface should be […] The post Securing MCP: A Control Plane for Agent Tool Execution appeared first on Microsoft for Developers .
Published: Wed, 22 Apr 2026 17:00:09 +0000
URL: https://devblogs.microsoft.com/blog/securing-mcp-a-control-plane-for-agent-tool-execution
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Take your PostgreSQL-backed apps to the next level
PostgreSQL is a powerful and hugely popular database engine, and it really comes alive across Microsoft developer platforms. You can build with PostgreSQL across Azure offerings, develop productively in Visual Studio Code with strong extensions and tooling, and connect your data to agentic development workflows and AI services. There’s amazing opportunity to bring those pieces […] The post Take your PostgreSQL-backed apps to the next level appeared first on Microsoft for Developers .
Published: Tue, 14 Apr 2026 17:00:37 +0000
URL: https://devblogs.microsoft.com/blog/take-your-postgresql-backed-apps-to-the-next-level
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Awesome GitHub Copilot just got a website, and a learning hub, and plugins!
Back in July, we launched the Awesome GitHub Copilot Customizations repo with a simple goal: give the community a place to share custom instructions, prompts, and chat modes to customize the AI responses from GitHub Copilot. We were hoping for maybe one community contribution per week. That… did not happen. Instead, you all showed up. […] The post Awesome GitHub Copilot just got a website, and a learning hub, and plugins! appeared first on Microsoft for Developers .
Published: Mon, 16 Mar 2026 17:00:33 +0000
URL: https://devblogs.microsoft.com/blog/awesome-github-copilot-just-got-a-website-and-a-learning-hub-and-plugins
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Build a real-world example with Microsoft Agent Framework, Microsoft Foundry, MCP and Aspire
Building AI agents is getting easier. Deploying them as part of a real application, with multiple services, persistent state, and production infrastructure, is where things get complicated. Developers from the .NET community have requested whether a real-world example that shows running on local machine as well as on the cloud in a cloud-native way. We’ve […] The post Build a real-world example with Microsoft Agent Framework, Microsoft Foundry, MCP and Aspire appeared first on Microsoft for Developers .
Published: Mon, 09 Mar 2026 16:00:42 +0000
URL: https://devblogs.microsoft.com/blog/build-a-real-world-example-with-microsoft-agent-framework-microsoft-foundry-mcp-and-aspire
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Docker Blog
Source URL: `https://www.docker.com/feed/`
```text
Mitigating CVE-2026-31431 (“Copy Fail”) in Docker Engine
CVE-2026-31431 is a Linux kernel vulnerability that was recently disclosed. This CVE does not compromise Docker infrastructure. That said, Docker Engine's default profiles prior to v29.4.3 allowed containers to create AF_ALG sockets, which is the syscall surface the exploit uses. You are not exposed if you are running Docker Engine v29.4.3 or later, OR a...
Published: Wed, 27 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/mitigating-cve-2026-31431-copy-fail-in-docker-engine/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
The Untrusted Autonomous Workload: How AI Coding Agents Reshape What Isolation Has to Do
Earlier this year I mass-migrated my blog to Astro using Claude Code. 146 posts. 6,024 images. Canonical URLs, JSON-LD markup, sitemap generation, the whole stack. I'd spent hours writing a skills file to teach the agent about my blog's architecture, how deployment worked, what not to touch. And it worked. Claude Code rewrote components, fixed...
Published: Tue, 26 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/untrusted-autonomous-workload-ai-sandboxes/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Meet Gordon: Docker’s AI Agent For Your Entire Container Workflow
Gordon understands your environment, proposes fixes, and takes action across your entire Docker workflow. Now generally available. Image 1: Gordon in Docker Desktop Why Gordon Exists Developers are more productive than ever. AI coding assistants are writing code, merging PRs and cutting review cycles. But the moment something breaks in a container, or a teammate...
Published: Tue, 19 May 2026 19:08:04 +0000
URL: https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Coding Agent Horror Stories: The Security Crisis Threatening Developer Infrastructure
This is issue 1 of a new series called Coding Agent Horror Stories where we examine critical security failures in the AI coding agent ecosystem and how Docker Sandboxes provide enterprise-grade protection against these threats. AI coding agents are everywhere. According to Anthropic's 2026 Agentic Coding Trends Report, developers are now using AI in roughly...
Published: Mon, 18 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/ai-coding-agent-horror-stories-security-risks/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling. Custom MCP Catalogs let organizations curate and distribute approved collections of MCP servers. MCP Profiles enable individual developers to easily build, run,...
Published: Fri, 15 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/create-custom-mcp-catalogs-and-profiles/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
NIST Narrows the NVD: What Container Security Programs Should Reassess
On April 15, NIST announced a prioritized enrichment model for the National Vulnerability Database. Most CVEs will still be published, but fewer will receive the CVSS scores, CPE mappings, and CWE classifications that container scanners and compliance programs have historically relied on. The change formalizes a drift that has been visible to anyone pulling NVD...
Published: Wed, 13 May 2026 10:38:28 +0000
URL: https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Docker AI Governance: Unlock Agent Autonomy, Safely
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call, so every developer in your company can run AI agents safely, wherever they work. Your laptop is the new prod Agents are the biggest productivity unlock...
Published: Tue, 12 May 2026 18:00:09 +0000
URL: https://www.docker.com/blog/docker-ai-governance-unlock-agent-autonomy-safely/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Comparing Different Approaches to Sandboxing
Whether you are a software engineer, a product manager, or a designer, this quote should fundamentally change how we approach our daily routine. We are no longer just building interfaces; we are creating environments where agents can operate autonomously with minimal human interaction. What could be the fundamental requirement for such an environment ? In...
Published: Thu, 07 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/comparing-sandboxing-approaches-ai-agents/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Generate Images Locally with Docker Model Runner and Open WebUI
We've all been there: you need to generate a few images for a project, you fire up an AI image service, and suddenly you're wondering what happens to your prompts, how many credits you have left, or why that "safe content" filter rejected your perfectly reasonable request for a dragon wearing a business suit. What...
Published: Tue, 05 May 2026 13:00:00 +0000
URL: https://www.docker.com/blog/blog-generate-images-locally-dmr-open-webui/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Precision Container Security with Docker and Black Duck
The complexity of modern containerized applications often leaves developers drowning in a sea of "noise"—vulnerabilities that exist in the file system but pose zero actual risk to the application. The integration between Black Duck and Docker Hardened Images (DHI) provides a definitive answer to this challenge. By combining Docker’s secure-by-default foundations, using VEX (Vulnerability Exploitability...
Published: Tue, 05 May 2026 08:00:00 +0000
URL: https://www.docker.com/blog/precision-container-security-with-docker-and-black-duck/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Hugging Face Blog
Source URL: `https://huggingface.co/blog/feed.xml`
```text
Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler
(no summary in feed/body parse)
Published: Fri, 29 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/torch-profiler
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
ITBench-AA: Frontier Models Score Below 50% on the First Benchmark for Agentic Enterprise IT Tasks — by Artificial Analysis and IBM
(no summary in feed/body parse)
Published: Wed, 27 May 2026 17:20:29 GMT
URL: https://huggingface.co/blog/ibm-research/itbench-aa
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Reachy Mini goes fully local
(no summary in feed/body parse)
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/local-reachy-mini-conversation
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL
(no summary in feed/body parse)
Published: Wed, 27 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/delta-weight-sync
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Harness, Scaffold, and the AI Agent Terms Worth Getting Right
(no summary in feed/body parse)
Published: Mon, 25 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/agent-glossary
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Towards Speed-of-Light Text Generation with Nemotron-Labs Diffusion Language Models
(no summary in feed/body parse)
Published: Sat, 23 May 2026 00:02:03 GMT
URL: https://huggingface.co/blog/nvidia/nemotron-labs-diffusion
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook
(no summary in feed/body parse)
Published: Fri, 22 May 2026 15:25:59 GMT
URL: https://huggingface.co/blog/Dharma-AI/specialization-beats-scale
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
OlmoEarth v1.1: A more efficient family of Earth observation models
(no summary in feed/body parse)
Published: Tue, 19 May 2026 18:38:09 GMT
URL: https://huggingface.co/blog/allenai/olmoearth-v1-1
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Introducing the Ettin Reranker Family
(no summary in feed/body parse)
Published: Tue, 19 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/ettin-reranker
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend
(no summary in feed/body parse)
Published: Mon, 18 May 2026 15:12:46 GMT
URL: https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality
(no summary in feed/body parse)
Published: Thu, 14 May 2026 18:55:01 GMT
URL: https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Unlocking asynchronicity in continuous batching
(no summary in feed/body parse)
Published: Thu, 14 May 2026 00:00:00 GMT
URL: https://huggingface.co/blog/continuous_async
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Kubernetes Blog
Source URL: `https://kubernetes.io/feed.xml`
```text
Reconciling the Past: Correcting Records for Unfixed Kubernetes CVEs
The Kubernetes project relies on transparency to empower cluster administrators and security researchers. One important way we do that is by publishing CVE records into the Common Vulnerabilities and Exposures database. As part of our ongoing effort to mature the official Kubernetes CVE Feed , we have identified some discrepancies. CVE records for a few older, unfixed issues incorrectly include a fixed version field. The Kubernetes Security Response Committee (SRC) will correct the affected CVE records on June 1, 2026. This may result in vulnerability scanners identifying these vulnerabilities in places where they were previously not detected. To help reduce confusion, this post provides a technical update on three vulnerabilities that were disclosed in previous years but remain unfixed: CVE-2020-8561 , CVE-2020-8562 , and CVE-2021-25740 . Why we are updating these records now While thes
Published: Tue, 26 May 2026 09:30:00 -0800
URL: https://kubernetes.io/blog/2026/05/26/reconciling-unfixed-kubernetes-cves/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Announcing etcd 3.7.0-beta.0
SIG-Etcd announces the availability of the first beta release of etcd v3.7.0 . This new version of the popular distributed database and key Kubernetes component includes the long-requested RangeStream feature, as well as a refactoring and cleanup of multiple legacy components and interfaces. v3.7 will deliver improved security, better operational reliability, and an improved experience for working with large resultsets. First, however, the project needs users to test the beta. You can find v3.7.0-beta.0 here: Source code Binaries Official container images Please try it out and report issues in the etcd repo . This beta also determines the EOL of version 3.4. RangeStream In etcd v3.6 and earlier, it is challenging to work with requests that return large resultsets. The client or requesting application is forced to wait for the full result set, leading to unpredictable latency and memory u
Published: Wed, 20 May 2026 00:00:00 +0000
URL: https://kubernetes.io/blog/2026/05/20/etcd-370-beta/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: New Metric for Route Sync in the Cloud Controller Manager
This article was originally published with the wrong date. It was later republished, dated the 15th of May 2026. Kubernetes v1.36 introduces a new alpha counter metric route_controller_route_sync_total to the Cloud Controller Manager (CCM) route controller implementation at k8s.io/cloud-provider . This metric increments each time routes are synced with the cloud provider. A/B testing watch-based route reconciliation This metric was added to help operators validate the CloudControllerManagerWatchBasedRoutesReconciliation feature gate introduced in Kubernetes v1.35 . That feature gate switches the route controller from a fixed-interval loop to a watch-based approach that only reconciles when nodes actually change. This reduces unnecessary API calls to the infrastructure provider, lowering pressure on rate-limited APIs and allowing operators to make more efficient use of their available quo
Published: Fri, 15 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/ccm-new-metric-route-sync-total/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature (under the feature gate UnknownVersionInteroperabilityProxy ) in a previous blog post . The goal was simple but critical: make cluster upgrades safer by ensuring that requests for resources not yet known to an older API server are correctly routed to a newer peer API server, instead of returning an incorrect 404 Not Found . We are excited to announce that the Mixed Version Proxy is moving to Beta in Kubernetes 1.36 and will be enabled by default! The feature has evolved significantly since its initial release, addressing key gaps and modernizing its architecture. Here is a look at how the feature has evolved and what you need to know to leverage it in your clusters. What problem are we solving? In a highly available control plane undergoing an upgrade, you often have API servers running different ver
Published: Fri, 15 May 2026 10:00:00 -0800
URL: https://kubernetes.io/blog/2026/05/15/kubernetes-1-36-feature-mixed-version-proxy-beta/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Deprecation and removal of Service ExternalIPs
The .spec.externalIPs field for Service was an early attempt to provide cloud-load-balancer-like functionality for non-cloud clusters. Unfortunately, the API assumes that every user in the cluster is fully trusted, and in any situation where that is not the case, it enables various security exploits, as described in CVE-2020-8554 . Since Kubernetes 1.21, the Kubernetes project has recommended that all users disable .spec.externalIPs . To make that easier, Kubernetes also added an admission controller ( DenyServiceExternalIPs ) that can be enabled to do this. At the time, SIG Network felt that blocking the functionality by default was too large a breaking change to consider. However, the security problems are still there, and as a project we're increasingly unhappy with the "insecure by default" state of the feature. Additionally, there are now several better alternatives for non-cloud cl
Published: Thu, 14 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/14/kubernetes-v1-36-deprecation-and-removal-of-service-externalips/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Advancing Workload-Aware Scheduling
AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling. In Kubernetes v1.35, we introduced the first tranche of workload-aware scheduling improvements, featuring the foundational Workload API alongside basic gang scheduling support built on a Pod-based framework, and an opportunistic batching feature to efficiently process identical Pods. Kubernetes v1.36 introduces a significant architectural evolution by cleanly separating API concerns: the Workload API acts as a static template, while the new PodGroup API handles the runtime state. To support this, the kube-scheduler features a new PodGroup scheduling cycle that enables atomic workload processing and paves the way for future enhancements. This release also debuts the first iterations of topology-aware scheduling and workload-aware preemption to advance scheduling capabilities. Addi
Published: Wed, 13 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/13/kubernetes-v1-36-advancing-workload-aware-scheduling/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage. Unlike traditional utilization metrics, PSI tells the story of tasks stalled and time lost, all in nicely-packaged percentages of time across the CPU, memory, and I/O. With the recent release of Kubernetes v1.36, users across the ecosystem have a stable, reliable interface to observe resource contention at the node, pod, and container levels. In this post, we will dive into the improvements and performance testing that proved its readiness for production. Beyond utilization: why PSI? Monitoring CPU or memory usage alone can be misleading. A node may report XX% (below 100%) CPU utilization while certain tasks are experiencing severe latency due to scheduling delays. PSI fills th
Published: Tue, 12 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/12/kubernetes-v1-36-psi-metrics-ga/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Moving Volume Group Snapshots to GA
Volume group snapshots were introduced as an Alpha feature with the Kubernetes v1.27 release, moved to Beta in v1.32, and to a second Beta in v1.34. We are excited to announce that in the Kubernetes v1.36 release, support for volume group snapshots has reached General Availability (GA) . The support for volume group snapshots relies on a set of extension APIs for group snapshots . These APIs allow users to take crash-consistent snapshots for a set of volumes. Behind the scenes, Kubernetes uses a label selector to group multiple PersistentVolumeClaim objects for snapshotting. A key aim is to allow you to restore that set of snapshots to new volumes and recover your workload based on a crash-consistent recovery point. This feature is only supported for CSI volume drivers. An overview of volume group snapshots Some storage systems provide the ability to create a crash-consistent snapshot of
Published: Fri, 08 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/08/kubernetes-v1-36-volume-group-snapshot-ga/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
Dynamic Resource Allocation (DRA) has fundamentally changed how platform administrators handle hardware accelerators and specialized resources in Kubernetes. In the v1.36 release, DRA continues to mature, bringing a wave of feature graduations, critical usability improvements, and new capabilities that extend the flexibility of DRA to native resources like memory and CPU, and support for ResourceClaims in PodGroups. Driver availability continues to expand. Beyond specialized compute accelerators, the ecosystem includes support for networking and other hardware types, reflecting a move toward a more robust, hardware-agnostic infrastructure. Whether you are managing massive fleets of GPUs, need better handling of failures, or simply looking for better ways to define resource fallback options, the upgrades to DRA in 1.36 have something for you. Let's dive into the new features and graduatio
Published: Thu, 07 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/07/kubernetes-v1-36-dra-136-updates/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Server-Side Sharded List and Watch
As Kubernetes clusters grow to tens of thousands of nodes, controllers that watch high-cardinality resources like Pods face a scaling wall. Every replica of a horizontally scaled controller receives the full stream of events from the API server, paying the CPU, memory, and network cost to deserialize everything, only to discard the objects it is not responsible for. Scaling out the controller does not reduce per-replica cost; it multiplies it. Kubernetes v1.36 introduces server-side sharded list and watch as an alpha feature ( KEP-5866 ). With this feature enabled, the API server filters events at the source so that each controller replica receives only the slice of the resource collection it owns. The problem with client-side sharding Some controllers, such as kube-state-metrics , already support horizontal sharding. Each replica is assigned a portion of the keyspace and discards object
Published: Wed, 06 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/06/kubernetes-v1-36-server-side-sharded-list-and-watch/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Declarative Validation Graduates to GA
In Kubernetes v1.36, Declarative Validation for Kubernetes native types has reached General Availability (GA). For users, this means more reliable, predictable, and better-documented APIs. By moving to a declarative model, the project also unlocks the future ability to publish validation rules via OpenAPI and integrate with ecosystem tools like Kubebuilder. For contributors and ecosystem developers, this replaces thousands of lines of handwritten validation code with a unified, maintainable framework. This post covers why this migration was necessary, how the declarative validation framework works, and what new capabilities come with this GA release. The Motivation: Escaping the "Handwritten" Technical Debt For years, the validation of Kubernetes native APIs relied almost entirely on handwritten Go code. If a field needed to be bounded by a minimum value, or if two fields needed to be mu
Published: Tue, 05 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/05/kubernetes-v1-36-declarative-validation-ga/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kubernetes v1.36: Admission Policies That Can't Be Deleted
If you've ever tried to enforce a security policy across a fleet of Kubernetes clusters, you've probably run into a frustrating chicken-and-egg problem. Your admission policies are API objects, which means they don't exist until someone creates them, and they can be deleted by anyone with the right permissions. There's always a window during cluster bootstrap where your policies aren't active yet, and there's no way to prevent a privileged user from removing them. Kubernetes v1.36 introduces an alpha feature that addresses this: manifest-based admission control . It lets you define admission webhooks and CEL -based policies as files on disk, loaded by the API server at startup, before it serves any requests. The gap we're closing Most Kubernetes policy enforcement today works through the API. You create a ValidatingAdmissionPolicy or a webhook configuration as an API object, and the admi
Published: Mon, 04 May 2026 10:35:00 -0800
URL: https://kubernetes.io/blog/2026/05/04/kubernetes-v1-36-manifest-based-admission-control/
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Simon Willison Blog
Source URL: `https://simonwillison.net/atom/everything/`
```text
Quoting Karen Kwok for Reuters Breakingviews
Anthropic defines “run-rate revenue” in two parts. Use the last 28 days of sales ⁠from customers charged on a consumption basis and multiply it by 13. Then, multiply the monthly subscription take by 12, ​and add the two together. — Karen Kwok for Reuters Breakingviews , citing "a person familiar with the matter" Tags: anthropic , ai
Published: 2026-05-31T01:48:12+00:00
URL: https://simonwillison.net/2026/May/31/anthropic-run-rate/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How we contain Claude across products
How we contain Claude across products A complaint I often have about sandboxing products is that they are rarely thoroughly documented , and in the absence of detailed documentation it's hard to know how much I can trust them. Anthropic just published a fantastic overview of how their various sandbox techniques work across Claude.ai , Claude Code, and Cowork. We constrain where and how an agent can act with process sandboxes, VMs, filesystem boundaries, and egress controls. The goal is to set a hard boundary on what an agent can reach. For example, if credentials never enter the sandbox, they can't be exfiltrated, regardless of whether the cause is a user, a model finding a “creative” path, or an attacker. Claude.ai uses gVisor. Claude Code, run locally, uses Seatbelt on macOS and Bubblewrap on Linux. Claude Cowork runs a full VM (Apple's Virtualization framework on macOS, HCS on Windows
Published: 2026-05-30T21:36:24+00:00
URL: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Running Python ASGI apps in the browser via Pyodide + a service worker
Research: Running Python ASGI apps in the browser via Pyodide + a service worker Datasette Lite is my version of Datasette that runs entirely in the browser using Pyodide in WebAssembly. When I first built it four years ago I used Web Workers and code that intercepts navigation operations and fetches the generated HTML by running the Python app. This worked, but had the disadvantage that any JavaScript in <script> tags would not be executed - breaking some Datasette functionality and a whole lot of Datasette plugins. This morning I set Claude Opus 4.8 the task (in Claude Code for web) of figuring out how to run Python ASGI apps in Pyodide using Service Workers instead, and it seems to work! Here's a basic ASGI FastCGI demo and here's a demo that runs Datasette 1.0a31 . I'm still getting my head around exactly how it works, but once I've done that I plan to upgrade Datasette Lite itself. 
Published: 2026-05-30T21:02:16+00:00
URL: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
I Am Retiring from Tech to Live Offline
I Am Retiring from Tech to Live Offline I've seen a lot of posts on forums from people threatening to quit their careers over AI. This is not one of those: Chad Whitacre is taking concrete steps, starting with this typewritten, scanned letter I'm retiring from tech. Well, "retiring" is euphemistic. I'm stepping away from tech, and that includes Open Source. [...] AI was the last straw. Have you heard of that island off India where the indigenous population kills any outsiders fool-hardy enough to land? They are doing the rest of us a favor by preserving a way of life we may need again someday, or at the very least should not want to see completely extinguished. A reminder. Never forget your roots. Here in Pennsylvania we have the Amish performing a similar function. Significantly less hostile, though still set apart, they bear witness to what was normal for all of us a couple short centu
Published: 2026-05-30T19:39:08+00:00
URL: https://simonwillison.net/2026/May/30/retiring-from-tech-to-live-offline/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Quoting Daniel Jalkut
My take on AI is, essentially, everybody who’s against it is too against it and everybody who’s for it is too for it. — Daniel Jalkut , via John Gruber Tags: ai , john-gruber
Published: 2026-05-30T17:29:55+00:00
URL: https://simonwillison.net/2026/May/30/daniel-jalkut/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
datasette 1.0a31
Release: datasette 1.0a31 Another significant alpha release, with two new headline features. Datasette now offers users with the necessary permissions the ability to both execute write queries against their database and to save stored queries (renamed from "canned queries") both privately and for use by other members of their Datasette instance. There's more detail in SQL write queries and stored queries in Datasette 1.0a31 on the Datasette blog, which now has three posts introducing new features since the blog launched two weeks ago. Here's an animated demo from the blog post showing how the new execute query interface lets people get started with templated insert/update/delete queries from tables they have permission to edit: Tags: projects , sql , sqlite , datasette , annotated-release-notes
Published: 2026-05-29T03:32:02+00:00
URL: https://simonwillison.net/2026/May/29/datasette/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Anthropic's run-rate revenue hits $47 billion
The most interesting thing about Anthropic's $65B Series H announcement is this line (emphasis mine): Since our Series G in February, adoption has continued to grow across global enterprise customers, and our run-rate revenue crossed $47 billion earlier this month. Anthropic have made a bit of a habit of sharing their "run-rate revenue" in this kind of announcement, which is an annualized projection of their current revenue - typically calculated by taking the most recent month and multiplying by 12. Update : here's a leaked description of their run-rate formula . Earlier this year: Apr 6, 2026 in Anthropic expands partnership with Google and Broadcom : "Our run-rate revenue has now surpassed $30 billion —up from approximately $9 billion at the end of 2025." Feb 12, 2026 in Anthropic raises $30 billion in Series G : "Today, our run-rate revenue is $14 billion , with this figure growing o
Published: 2026-05-29T01:23:08+00:00
URL: https://simonwillison.net/2026/May/29/anthropic/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Claude Opus 4.8: "a modest but tangible improvement"
Anthropic shipped Claude Opus 4.8 today. My favourite thing about it is this note in the release announcement: Users will find Opus 4.8 to be a modest but tangible improvement on its predecessor. There’s still more to be done: we’re working on developing and releasing models that provide many of the same capabilities as Opus at a lower cost. It's so refreshing to see an AI lab honestly describe a release as a minor incremental improvement over the previous model! Honesty seems to be a theme. Here's my other favorite note from that announcement: One of the most prominent improvements in Opus 4.8 is its honesty . We train all our models to be honest---for instance, to avoid making claims that they can't support. But a general problem with AI models is that they sometimes jump to conclusions, confidently claiming to have made progress in their work despite the evidence being thin. Early tes
Published: 2026-05-28T23:59:50+00:00
URL: https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
llm-anthropic 0.25.1
Release: llm-anthropic 0.25.1 New model: Claude Opus 4.8 ( claude-opus-4.8 ). New -o fast 1 option for fast mode , for organizations with that feature enabled on their account. Default max_tokens for each model now defaults to that model's maximum output rather than 8,192. #72 See also my notes on Opus 4.8 - I used this new release of llm-anthropic to generate the pelicans.
Published: 2026-05-28T23:54:56+00:00
URL: https://simonwillison.net/2026/May/28/llm-anthropic/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
markdown-svg-renderer
Tool: markdown-svg-renderer A slightly customized Markdown rendering tool with special treatment for fenced code SVG blocks - it both renders the image and provides a tab for switching to the code view. You can paste in Markdown or give it a URL to a CORS-enabled Markdown file or Gist. Here's an example where it loads a Markdown file full of LLM pelican logs for Opus 4.8 . Tags: svg , tools , markdown , cors
Published: 2026-05-28T19:45:14+00:00
URL: https://simonwillison.net/2026/May/28/markdown-svg-renderer/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
sqlite AGENTS.md
sqlite AGENTS.md SQLite gained an AGENTS.md file five days ago - but it's not intended for their own development, it's presumably aimed at people who are pointing agents at the SQLite codebase. It includes: SQLite does not accept pull requests without prior agreement and/or accompanying legal paperwork that places the pull request in the public domain. However, the human SQLite developers will review a concise and well-written pull request as a proof-of-concept prior to reimplementing the changes themselves. SQLite does not accept agentic code. However the project will accept agentic bug reports that include a reproducible test case. Patches or pull requests demonstrating a possible fix, for documentation purposes, are welcomed. The most recent commit to that file removed "(currently)" from "SQLite does not (currently) accept agentic code", with the commit message "Strengthen the stateme
Published: 2026-05-27T23:44:37+00:00
URL: https://simonwillison.net/2026/May/27/sqlite-agents/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
I think Anthropic and OpenAI have found product-market fit
Anthropic are strongly rumored to be about to have their first profitable quarter. Stories are circulating of companies surprised at how expensive their LLM bills are becoming from usage by their staff. I think this is because OpenAI and Anthropic have both found product-market fit. Enterprise customers are now paying API prices I think they've found product-market fit And they're ramping up The AI-failure stories around this are pretty thin We also know the labs are spending a lot API revenue is becoming less important April is a new inflection point Enterprise customers are now paying API prices I currently subscribe to the $100/month Max plan from Anthropic and the $100/month Pro plan from OpenAI. If you are a heavy user of coding agents these plans are a fantastic deal. I just ran the ccusage tool on my laptop to get an estimate of how much I would have spent if I were to pay for API
Published: 2026-05-27T16:38:35+00:00
URL: https://simonwillison.net/2026/May/27/product-market-fit/#atom-everything
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### Anthropic News
Source URL: `https://www.anthropic.com/news/rss.xml`
Collection note: unavailable / fetch failed — `<HTTPError 404: 'Not Found'>`

### Vercel Changelog
Source URL: `https://vercel.com/changelog/rss`
Final URL: `https://vercel.com/atom`
```text
Function invocations now billed per unit
(no summary in feed/body parse)
Published: 2026-05-29T10:00:00.000Z
URL: https://vercel.com/changelog/function-invocations-now-billed-per-unit
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Protecting against token theft
(no summary in feed/body parse)
Published: 2026-05-29T04:00:00.000Z
URL: https://vercel.com/blog/protecting-against-token-theft
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Run Docker containers inside Vercel Sandbox
(no summary in feed/body parse)
Published: 2026-05-29T00:01:00.000Z
URL: https://vercel.com/changelog/run-docker-containers-inside-vercel-sandbox
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Port 8080 is now available in Vercel Sandboxes
(no summary in feed/body parse)
Published: 2026-05-29T00:01:00.000Z
URL: https://vercel.com/changelog/port-8080-is-now-available-in-vercel-sandboxes
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Building a real-time power outage map with Next.js on Vercel
(no summary in feed/body parse)
Published: 2026-05-28T14:00:00.000Z
URL: https://vercel.com/blog/building-a-real-time-power-outage-map-with-next-js-on-vercel
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Opus 4.8 on AI Gateway
(no summary in feed/body parse)
Published: 2026-05-28T07:00:00.000Z
URL: https://vercel.com/changelog/opus-4-8-on-ai-gateway
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Team-wide provider allowlist on AI Gateway
(no summary in feed/body parse)
Published: 2026-05-28T00:00:00.000Z
URL: https://vercel.com/changelog/team-wide-provider-allowlist-on-ai-gateway
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Amazon OpenSearch Serverless is now available in the Vercel Marketplace
(no summary in feed/body parse)
Published: 2026-05-28T00:00:00.000Z
URL: https://vercel.com/changelog/amazon-opensearch-serverless-is-now-available-in-the-vercel-marketplace
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
How Conductor moved parallel coding agents from the laptop to the cloud with Vercel Sandbox
(no summary in feed/body parse)
Published: 2026-05-27T14:00:00.000Z
URL: https://vercel.com/blog/how-conductor-moved-parallel-coding-agents-from-the-laptop-to-the-cloud-with-vercel-sandbox
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Experimental native binaries for Vercel CLI
(no summary in feed/body parse)
Published: 2026-05-27T00:00:00.000Z
URL: https://vercel.com/changelog/experimental-native-binaries-for-vercel-cli
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Redesigned Deployments List
(no summary in feed/body parse)
Published: 2026-05-27T00:00:00.000Z
URL: https://vercel.com/changelog/redesigned-deployments-list
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
Sandbox persistence is now GA
(no summary in feed/body parse)
Published: 2026-05-26T00:01:00.000Z
URL: https://vercel.com/changelog/sandbox-persistence-is-now-ga
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```

### PlanetScale Blog
Source URL: `https://planetscale.com/blog/rss.xml`
Final URL: `https://planetscale.com/blog/feed.atom`
```text
Egress problems and where to find them
Name something in recent history that got better and cheaper (other than the TVs at the entrance of Costco). I'll wait. Better performance and lower costs rarely come together, but optimizing your queries to reduce egress gives you both. So once you hit scale, or ideally before scale bites you, improving the efficiency of your queries by making the responses smaller and their frequency lower can pull off a rare double: make your application faster and cheaper. Definitions Egress: Data transferred out from your database over the public internet. Most cloud providers bill for this, so it's something we want to minimize. Ingress: Data transferred into your database over the public internet. Most cloud providers either do not bill for this, or do so only in specific scenarios. PlanetScale includes 100GB of egress on High Availability (HA) plans. Non-HA $5/month Postgres includes 10GB of egre
Published: 2026-05-14T00:00:00.000Z
URL: https://planetscale.com/blog/database-egress
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Problem solving with PlanetScale Insights
There are so many ways your database can disappoint you. It'll make your application perform in ways you don't expect and upset your users. In a sufficiently complex application, finding and eliminating performance problems can be difficult. Fortunately, PlanetScale gives you the tools to isolate the problem. PlanetScale Insights, available in the dashboard and through the MCP server, provides accurate, up-to-date information on how the queries in your codebase perform in production. But with so many different metrics available, how do you differentiate good numbers from bad, signal from noise, or know what the most likely fix is once you've pinned down the problem? For this post, I'll walk through exploring Query Insights for a demo e-commerce app connected to a PlanetScale Postgres PS-10 database with a few million rows of data. I set up a flow of constant, regular traffic along with a
Published: 2026-05-07T00:00:00.000Z
URL: https://planetscale.com/blog/problem-solving-with-insights
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
On benchmarking
Benchmarking is hard.There are many ways to do it wrong and few to do it right. But zooming out from any single system or harness, there are broad principles that should be applied to all benchmarking.Using these correctly makes it difficult to produce biased results. Am I the world's best benchmarker?Certainly not.I invented the language balls, after all.But correctness and precision are important parts of PlanetScale's culture.We've spent considerable time learning the art of benchmarking, and are here to share best-practices. Here, we're focusing primarily on benchmarking databases, but these principles apply to many domains. Client-server architecture Databases typically operate in a client-server model.The database server is started, accepts connections from clients, executes queries, and returns results. To benchmark, we need a client that establishes the connections, generates que
Published: 2026-05-05T00:00:00.000Z
URL: https://planetscale.com/blog/on-benchmarking
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Transparency in benchmarking
Database benchmarks are imperfect.They are also useful. No benchmark can tell you exactly how a database will perform for your application.Workload shape, data size, region placement, storage, configuration, and cost all matter.But fair benchmarks help customers understand tradeoffs, compare options, and ask better questions before choosing infrastructure. The DeWitt clause Many cloud vendors include language in their terms that restricts comparative benchmarking.These restrictions are called "DeWitt clauses", named after database researcher David DeWitt.That is a strange legacy for someone whose work helped move the database industry forward by measuring real systems and publishing results. Previously, PlanetScale also included a DeWitt clause in our Acceptable Use Policy (AUP).Today, we are removing this in favor of a more open "Benchmarking" section in our AUP. The new section reads: 
Published: 2026-05-05T00:00:00.000Z
URL: https://planetscale.com/blog/transparency-in-benchmarking
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
RLS sounds great until it isn't
When you leave your house, go to sleep, or go do work in the yard, you lock yourdoor. Maybe you have a gate or fence you lock too. Without these, anyone canwaltz into your house and snoop around. Row Level Security (RLS) can be attractive to developers for numerous reasons,but the foot-guns and gotchas in RLS often outweigh the benefits. You probablywant to keep your doors locked. Friends and family: Managing access RLS for Postgres lets administrators define security policies in their database,instead of the application layer. Let's imagine your house is your database, andthe rows, tables, and data are like the things inside. When your friends or family come over, you give them keys to every drawer theyare allowed to have access to. Maybe everyone gets access to the silverware, butonly the family can access your laundry room. This is similar to how policies work in RLS. The rules for wh
Published: 2026-04-30T00:00:00.000Z
URL: https://planetscale.com/blog/rls-sounds-great-until-it-isnt
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Approaches to tenancy in Postgres
We've updated our use of the term "row-level isolation" to "shared-schema" in this article to avoid confusion with Postgres RLS.We do not recommend relying on Postgres RLS. Multi-tenancy is a term used across various kinds of technical infrastructure, including application hosting, compute, databases, and more. For example, you may purchase cloud services from a provider, but your account is one of many that draws from a common pool of resources. Your account is one "tenant" in a multi-tenant infrastructure. In this article, we're focusing on using a single Postgres database cluster to serve an application with many tenants—you are our customer, and your customers are tenants in that cluster. Given the many approaches to multi-tenancy within a Postgres database, it is worth clarifying the recommended best practices and the data models you should avoid. These recommendations are informed 
Published: 2026-04-21T00:00:00.000Z
URL: https://planetscale.com/blog/approaches-to-tenancy-in-postgres
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Keeping a Postgres queue healthy
A healthy digestive system is one that efficiently eliminates waste. Fiber is a key part of a healthy diet, not because it is nutritious, but because it keeps everything you consume moving. Databases are not so different. If you want a healthy queue table, you'll need to monitor the systems that are designed to perform cleanup well before they're backed up. Postgres has been a popular choice for queue-based workloads long before it was a good fit for the job. Over many years and multiple major versions, Postgres has only become an even stronger choice for this type of workload. But what makes job queues uniquely problematic? And in spite of all these advancements, what traps remain? It's worth knowing, since they could bring down not only your job queue but also your mixed-workloads database and your entire application. Sharing the load The "just use Postgres" meme lends credence to the 
Published: 2026-04-10T00:00:00.000Z
URL: https://planetscale.com/blog/keeping-a-postgres-queue-healthy
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Patterns for Postgres Traffic Control
Last week we introducedDatabase Traffic Control™. TrafficControl lets you attach resource budgets to slices of your Postgres traffic,like keeping your checkout flow running while a runaway analytics query getsshed instead. We have already discussed some scenarios where youshould use Traffic Control, along with how to define resource limits, so nowlet's dig into what Traffic Control looks like in your codebase. This post walks through some practical patterns in Go. Each pattern targets adifferent failure mode, architecture, or foot gun. Most of them layer on top ofone another too, so you can adopt them individually or combine them for extrapeace of mind. Keep in mind the general concepts here are applicable to whateverlanguage your application is written in. Setup Most of the patterns here rely on custom tags attached to your queries. TrafficControl reads these using theSQLCommenter forma
Published: 2026-04-02T00:00:00.000Z
URL: https://planetscale.com/blog/patterns-for-postgres-traffic-control
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Graceful degradation in Postgres
Not all traffic is created equal.When a database is overwhelmed, you want the important queries to keep executing, even if that means shedding lower-priority work.This is a much better outcome than the alternative: a total database outage. PlanetScale's Traffic Control makes this feasible at the database level by introducing resource budgets.These let you apply strict limits on slices of traffic, protecting resources for high-priority queries even when there's a surge in requests. I'll run through exactly how this works in the scenario of running a social media platform.The same principles apply to any application with a wide variety of traffic types. The scenario Operating a social media platform involves quite a few different types of queries, each corresponding to different app features: Authentication Fetching post content Fetching user profile information Submitting new posts Fetchi
Published: 2026-03-31T00:00:00.000Z
URL: https://planetscale.com/blog/graceful-degradation-in-postgres
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
High memory usage in Postgres is good, actually
Houseplants often die from over-watering, not neglect. It is easy to project human needs onto them: "If I am thirsty, they must be thirsty too." But many indoor plants actually benefit from drying out between waterings. Similarly, your empathy can lead to misinterpreting signals from your database. You don't like feeling overwhelmed, so you don't want your database overwhelmed either. But not all usage is created equal, and memory in computers can be uniquely complex to understand. A look at your PlanetScale dashboard might show memory usage sitting at 80%. That looks bad, but it could actually be representative of a healthy system. To be clear, consistently high CPU usage is a problem. For as long as CPU stays high, queries wait longer, the slowest queries get slower, and you have less headroom for spikes. Memory is different. The percentage shown in the cluster diagram on your PlanetSc
Published: 2026-03-30T00:00:00.000Z
URL: https://planetscale.com/blog/high-memory-usage-in-postgres-is-good-actually
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Stripe Projects partnership: Provision PlanetScale Postgres and MySQL databases from the Stripe CLI
We're excited to announce that PlanetScale is participating as a co-design and launch partner for Stripe Projects, a new developer preview from Stripe that centralizes dev tool provisioning and billing in one place. What is Stripe Projects? Stripe Projects is a new way for developers and coding agents to discover, provision, and pay for developer tools all from the Stripe CLI. Instead of jumping between dashboards, entering payment info, and copying credentials across services, everything lives in one centralized workflow. This fragmented developer workflow has always existed, but AI agents have made the gap much more obvious. The ecosystem has been missing a standard way for provisioning and credential handoff to work reliably across providers. And we're excited to partner with Stripe to close this gap. With PlanetScale as a launch partner, you can now spin up and pay for fully managed 
Published: 2026-03-26T00:00:00.000Z
URL: https://planetscale.com/blog/planetscale-stripe-projects-partnership
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Enhanced tagging in Postgres Query Insights
As part of yesterday's Traffic Control launch, we made enhancements to the Insights query tagging feature for Postgres databases. Insights has supported query tags for some time, but they were previously only attached as metadata on individual notable query logs. With yesterday's release, tags are now present in aggregated query data, which enables powerful new capabilities. It's now possible to view the complete distribution of tags assigned to a query pattern, search queries by tag, and see a per-tag breakdown of database-level statistics. This blog post gives an overview of the feature, and digs into the details of how we implemented it. Adding Tags Query tags are string key-value pairs that are included in query SQL using specially formatted SQL comments. For example, the following query has the controller and action tags attached.select * from users where id = 1 /* controller='users
Published: 2026-03-24T00:00:00.000Z
URL: https://planetscale.com/blog/enhanced-tagging-in-postgres-query-insights
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```

### GitHub Trending daily
Source URL: `https://github.com/trending?since=daily`
```text
harry0703/MoneyPrinterTurbo
Star harry0703 / MoneyPrinterTurbo 利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM. Language: Python. Stars today: 1,937.
Published: daily trending 2026-05-31
URL: https://github.com/harry0703/MoneyPrinterTurbo
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
microsoft/markitdown
Star microsoft / markitdown Python tool for converting files and office documents to Markdown. Language: Python. Stars today: 2,759.
Published: daily trending 2026-05-31
URL: https://github.com/microsoft/markitdown
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
D4Vinci/Scrapling
Sponsor Star D4Vinci / Scrapling 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Language: Python. Stars today: 639.
Published: daily trending 2026-05-31
URL: https://github.com/D4Vinci/Scrapling
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
nesquena/hermes-webui
Star nesquena / hermes-webui Hermes WebUI: The best way to use Hermes Agent from the web or from your phone! Language: Python. Stars today: 320.
Published: daily trending 2026-05-31
URL: https://github.com/nesquena/hermes-webui
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
EveryInc/compound-engineering-plugin
Star EveryInc / compound-engineering-plugin Official Compound Engineering plugin for Claude Code, Codex, Cursor, and more Language: TypeScript. Stars today: 243.
Published: daily trending 2026-05-31
URL: https://github.com/EveryInc/compound-engineering-plugin
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
github/docs
Star github / docs The open-source repo for docs.github.com Language: TypeScript. Stars today: 20.
Published: daily trending 2026-05-31
URL: https://github.com/github/docs
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
OpenBMB/VoxCPM
Star OpenBMB / VoxCPM VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning Language: Python. Stars today: 779.
Published: daily trending 2026-05-31
URL: https://github.com/OpenBMB/VoxCPM
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
revfactory/harness
Star revfactory / harness A meta-skill that designs domain-specific agent teams, defines specialized agents, and generates the skills they use. Language: HTML. Stars today: 55.
Published: daily trending 2026-05-31
URL: https://github.com/revfactory/harness
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
FareedKhan-dev/train-llm-from-scratch
Star FareedKhan-dev / train-llm-from-scratch A straightforward method for training your LLM, from downloading data to generating text. Language: Jupyter Notebook. Stars today: 327.
Published: daily trending 2026-05-31
URL: https://github.com/FareedKhan-dev/train-llm-from-scratch
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
supermemoryai/supermemory
Star supermemoryai / supermemory Memory engine and app that is extremely fast, scalable. The Memory API for the AI era. Language: TypeScript. Stars today: 236.
Published: daily trending 2026-05-31
URL: https://github.com/supermemoryai/supermemory
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
Crosstalk-Solutions/project-nomad
Star Crosstalk-Solutions / project-nomad Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere. Language: TypeScript. Stars today: 372.
Published: daily trending 2026-05-31
URL: https://github.com/Crosstalk-Solutions/project-nomad
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
anthropics/claude-code
Star anthropics / claude-code Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. Language: Python. Stars today: 490.
Published: daily trending 2026-05-31
URL: https://github.com/anthropics/claude-code
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
nicobailon/pi-subagents
Sponsor Star nicobailon / pi-subagents Pi extension for async subagent delegation with truncation, artifacts, and session sharing Language: TypeScript. Stars today: 59.
Published: daily trending 2026-05-31
URL: https://github.com/nicobailon/pi-subagents
Seen in same-day 11:00 / recent new-target baseline: no
Route read: append_existing
```
```text
emmabostian/developer-portfolios
Star emmabostian / developer-portfolios A list of developer portfolios for your inspiration Language: Python. Stars today: 67.
Published: daily trending 2026-05-31
URL: https://github.com/emmabostian/developer-portfolios
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```
```text
codecrafters-io/build-your-own-x
Star codecrafters-io / build-your-own-x Master programming by recreating your favorite technologies from scratch. Language: Markdown. Stars today: 1,112.
Published: daily trending 2026-05-31
URL: https://github.com/codecrafters-io/build-your-own-x
Seen in same-day 11:00 / recent new-target baseline: no
Route read: raw_only
```

### LangChain Blog HTML
Source URL: `https://www.langchain.com/blog`
```text
Interpreter Skills
"icon-14-14"/> 13 min <img src="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a05f8044c3c7b33c3838202_introducing-langchain-labs.png" loading="lazy" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" srcset="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a05f8044c3c7b33c3838202_introducing-langchain-labs-p-500.png 500w, https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a05f8044c3c7b33c3838202_introducing-langchain-labs-p-800.png 800w,
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/interpreter-skills
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Introducing Langchain Labs
="icon-14-14"/> 3 min <img src="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a18c6cb88253b878b64a363_langsmith%20engine.png" loading="lazy" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" srcset="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a18c6cb88253b878b64a363_langsmith%20engine-p-500.png 500w, https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a18c6cb88253b878b64a363_langsmith%20engine-p-800.png 800w, https://cdn.prod.websit
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/introducing-langchain-labs
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Introducing Langsmith Engine
="icon-14-14"/> 5 min <div class="blog-card-
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/introducing-langsmith-engine
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Introducing Smithdb
"icon-14-14"/> 11 min Recent stories <div fs-list-resetix="true" fs-list-element="list" fs
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/introducing-smithdb
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
May 2026 Langchain Newsletter
="icon-14-14"/> 3 min <div role="listitem" class="w-dyn-it
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/may-2026-langchain-newsletter
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Lyft Built A Self Serve Ai Agent Platform For Customer Support With Langgraph And Langsmith
"icon-14-14"/> 10 min <div role="listite
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/lyft-built-a-self-serve-ai-agent-platform-for-customer-support-with-langgraph-and-langsmith
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Mission Control Operating Self Hosted Langsmith On Kubernetes
="icon-14-14"/> 6 min <div
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/mission-control-operating-self-hosted-langsmith-on-kubernetes
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Token Streams To Agent Streams
="icon-14-14"/> 9 min <div fs-list-field=
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/token-streams-to-agent-streams
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How Auth Proxy Secures Network Access For Langsmith Agent Sandboxes
="icon-14-14"/> 9 min <img src="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a19109c2af7527cb5ec809e_logo%20and%20title%20-%2020%20characters%20max%20(8).png" loading="eager" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" srcset="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a19109c2af7527cb5ec809e_logo%20and%20title%20-%2020%20characters%20max%20(8)-p-500.png 500w, https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a19109c2af752
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/how-auth-proxy-secures-network-access-for-langsmith-agent-sandboxes
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Financial Ai That Investigates Macro Trends Eu Economic Analysis With You Com And Langchain
"icon-14-14"/> 18 min <
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/financial-ai-that-investigates-macro-trends-eu-economic-analysis-with-you-com-and-langchain
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Give Your Agents An Interpreter
"icon-14-14"/> 11 min <img src="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a0c7cab710767bbc0f61dc9_Screenshot%202026-05-19%20at%208.05.40%E2%80%AFAM.png" loading="eager" alt="" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px" srcset="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a0c7cab710767bbc0f61dc9_Screenshot%202026-05-19%20at%208.05.40%E2%80%AFAM-p-500.png 500w, https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6a0c7cab710767bbc0f6
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/give-your-agents-an-interpreter
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
How We Built Langsmith Engine Our Agent For Improving Agents
"icon-14-14"/> 17 min Company Announcements LangSmith Everything we shipped at Interrupt <div class="blog-card-inn
Published: HTML blog index 2026-05-31
URL: https://www.langchain.com/blog/how-we-built-langsmith-engine-our-agent-for-improving-agents
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```

### LlamaIndex Blog HTML
Source URL: `https://www.llamaindex.ai/blog`
```text
Parsebench
1"> +147 more Introducing ParseBench: The First Document Parsing Benchmark for AI Agents Document parsing is the foundation of every AI agent working with real-world files, yet no benchmark has measured parsing quality the way agents actually need it. ParseBench is a new open-source benchmark of ~2,000 human-verified enterprise document pages with over 167,000 test rules, evaluating parsers across five critical dimensions: tables, charts, content faithfulness, semantic formatting, and visual gro
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/parsebench
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Parsing The Unreadable How Llamaparse Handles Legal Discovery Documents
s="PostImage"> Parsing the Unreadable: How LlamaParse Handles Legal Discovery Documents [ LlamaParse ] </
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/parsing-the-unreadable-how-llamaparse-handles-legal-discovery-documents
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Liteparse V2 0 Runs Everywhere
stro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> LiteParse v2.0 Runs Everywhere May 27, 2026 [ LiteParse ] <p leftSquare="false" data-astro-cid-l55qahak="true" data-astro-cid-yzlqzfct="true" class="Text TextVariantLab
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/liteparse-v2-0-runs-everywhere
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Is Grep All You Need Lexical Vs Sematic Search For Agents
png" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> Is grep all you need? Lexical VS Sematic Search for Agents May 26, 2026 [ Search ] <p leftSquare="false" data-astro-cid-l55qahak="true" data-astro-
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/is-grep-all-you-need-lexical-vs-sematic-search-for-agents
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Llamaindex Newsletter 5 19 26
izeNormal" id="newsletterViewAllButton" data-astro-cid-5tznm7mj="true" data-astro-cid-vnzlvqnm> View all LlamaIndex Newsletter 5-19-26 Register for our ParseBench webinar to learn how to evaluate the accuracy of your document ingestion pipelines. Two new open-source repos for keeping document parsing fully local, and a quick recap from our recent events at Singapore and NYC. <div class="CardContainer" data-astro-cid-5tznm7mj="true" data-tags data-astro-ci
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/llamaindex-newsletter-5-19-26
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Llamaindex Newsletter 2026 04 21
163ea-1200x630.png" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="1200" height="630" class="PostImage"> LlamaIndex Newsletter 2026-04-21 This week: we launched ParseBench, the first document OCR benchmark built for AI agents, with deep-dive videos on three of the five new accuracy metrics (TableRecordMatch, ChartDataPointMatch, and Content Faithfulness). Plus — LiteParse gets its official home on the site after crossing 4.3K GitHub stars, Anthropi
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/llamaindex-newsletter-2026-04-21
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Llamaindex Newsletter 2026 04 14
a9216-1782x932.png" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="1782" height="932" class="PostImage"> LlamaIndex Newsletter 2026-04-14 This week we're spotlighting ParseBench — the first open-source document OCR benchmark built for the agentic era — alongside LiteParse's explosive growth (4K+ GitHub stars in 3 weeks), a structure-aware PDF QA pipeline with LanceDB, and a new partnership with Auth0 on secure document agents. Plus: two live worksh
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/llamaindex-newsletter-2026-04-14
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Ocr For Kyc
ue" class="Text TextVariantParagraph TextVariantParagraphSize3"> 395 posts OCR for KYC: Why Standard Text Extraction Falls Short of Compliance Requirements Standard OCR was built for clean typed text, not the worn passports, angled phone photos, and multilingual identity documents that real KYC intake looks like. This guide covers why standard text extraction falls short of compliance requirements, where the errors propagate, and what agentic OCR does differently to meet the accuracy threshold t
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/ocr-for-kyc
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Mortgage Document Automation
" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> Mortgage Document Automation: Transforming Loan Processing Mortgage lending depends on accurate document processing, but most workflows still rely on manual review or template-based systems that break down as document variability increases. This guide covers how mortgage document automation works, what a production-ready workflow actually requires, and where int
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/mortgage-document-automation
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Income Verification Api
" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> Income Verification API: How to Automate Document-Based Income Checks at Scale Income verification is straightforward for salaried employees with standard pay stubs. The hard cases are everyone else: gig workers, freelancers, contractors, and self-employed individuals whose income lives in tax returns, bank statements, and platform earnings summaries. This guide
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/Income-verification-api
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Kyc Automation
" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> KYC Automation: How to Replace Manual Verification with Scalable, Compliant Workflows Manual KYC takes days, scales poorly, and produces inconsistent results under volume pressure. Automated KYC handles document extraction, identity verification, sanctions screening, and risk scoring at a fraction of the cost, with greater consistency and a complete audit trail.
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/kyc-automation
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
```text
Deep Extraction
" alt data-astro-cid-l55qahak="true" loading="lazy" decoding="async" fetchpriority="auto" width="2400" height="1352" class="PostImage"> Why Single-Pass Extraction Fails and What Deep Extraction Actually Solves Single-pass extraction has no accountability loop. It extracts once, ships whatever it produced, and has no way to flag what got dropped. This guide covers why that breaks on real-world documents, what deep extraction actually does differently, and when the architecture shift is worth it. 
Published: HTML blog index 2026-05-31
URL: https://www.llamaindex.ai/blog/deep-extraction
Seen in same-day 11:00 / recent new-target baseline: yes
Route read: raw_only
```
