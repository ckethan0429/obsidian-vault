---
title: Interest signal collection — 11:00 new-target run (2026-09-18)
created: 2026-09-18
type: raw-transcript
captured_at: 2026-09-18T11:12:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, new-target, blogs, changelogs, releases, github-trending, nvidia, vera-rubin, vercel-production-index, open-weight, mistral-watch]
route_hint: append_existing
route_confidence: high
route_reason: >
  11:00 new-target pass, on time (~11:12 KST). Idempotency clear: no interest-signal-collection-11-00-2026-09-18
  raw existed before this run (only the same-day 08:00 social run present). Baseline for the new-target track =
  the most-recent successful new-target transcript interest-signal-collection-22-00-2026-09-17.md (captured
  ~22:05 KST, reinforcement-only) + interest-signal-collection-11-00-2026-09-17.md (which absorbed the NVIDIA
  Vera Rubin NVL72 MLPerf Inference v6.1 durable delta) + concepts/ai-infra-operating-economics.md +
  concepts/nvidia-vera-rubin.md + concepts/managed-agents-practical-summary.md + concepts/honcho.md. Collection via
  public RSS/Atom + HTML fetch (stdlib Python /tmp/nt_fetch_1100_0918.py -> .cache/newtarget-2026-09-18-1100/,
  parsed with /tmp/nt_parse_1100_0918.py + /tmp/nt_body2_0918.py for the Vercel Production Index body, grep for
  GitHub Trending / Mistral slugs). All feeds HTTP 200 except Anthropic RSS 404 (availability fact, consistent
  08-02..09-18).
  RESULT: ONE GENUINELY-NEW DURABLE DELTA this window -> append_existing to concepts/ai-infra-operating-economics.md.
  The recurring monthly Vercel AI Gateway Production Index published its SEPTEMBER 2026 edition (August data),
  'Open-weight models take 56% of token volume, Astra doubles Fable 5.1 spend'
  (https://vercel.com/blog/ai-gateway-production-index-september-2026, 09-17 07:00). This page has tracked this exact
  series since 2026-07-14 (July edition ~29% open-weight snapshot; August edition = DeepSeek overtakes Google / cost
  per token -13.6% / open-weight tripled). September = the next monthly data point squarely on the operating-economics
  axis: (1) open-weight models ran 56% of ALL gateway tokens in August, a MAJORITY for the first time (up from 7% in
  Dec 2025); (2) avg price per token fell 23.2% in August, third straight monthly drop, steepest since April, median
  team -7.6%; (3) frontier plateaus / step-down: Anthropic Fable 5 share of spend fell 13.2%->4.9% while Opus 5 (half
  the price) rose to 22.5% — Anthropic still kept 64% of all gateway spend (61c+ every month since Dec); (4) 'loyalty
  follows model profile, not lab' — Google's share of gateway TOKEN VOLUME collapsed 30%->5% (Gemini 3 Flash = 22 of
  25 pts lost), workloads fleeing to GPT-5.6 Luna / Opus 5 / Sonnet 5 / DeepSeek; (5) special report: GPT-6 Astra
  (launched 09-03, same price as Fable 5.1) took a third of OpenAI spend within 48h and 7.7% of ALL gateway spend in
  first 12 days vs Fable 5.1's 3.7% (2x). This is the next monthly reading of the bifurcation thesis the page argues
  (cheap/self-hostable open-weight taking volume + premium spend concentrating) -> append_existing (one new dated
  section), no new page. Everything else = raw_only reinforcement / carry: NVIDIA — NO new Vera Rubin / Rubin Ultra /
  Vera CPU / NVL576 / Hot Chips / GTC spec ITEM this window (new dev-blog rows all on-axis-mild-or-off: 'CUDA Toolkit
  13.4 Windows-on-Arm + shared-GPU control' 09-17, 'Accelerating Dropless MoE Training in JAX with Transformer Engine'
  09-17, 'How to Use AI Agents to Prepare 3D Scenes for Simulation' 09-17 sim/robotics off-axis; MLPerf v6.1 debut +
  CUDA Rust + TensorRT Edge-LLM all carry from 09-16/17). Simon Willison new 09-17: 'Self-generated prompt injections
  in compaction summaries' + 'Be alert: targeted attacks on prominent Rustaceans' + 'How To Write With An LLM' (mild,
  agent-security/writing). github-changelog new 09-17: 'Agentic CLI customizations now in the usage metrics API' +
  'Copilot impact dashboard feature engagement' + 'Workflow execution protections in Actions GA' + 'Ubuntu 26 GA'
  (Copilot/CI housekeeping, mild). AWS new 09-17: EC2 T8i GA, S3 Express One Zone +7 regions, Elastic Beanstalk
  Cluster Mode, Batch bulk cancel, Transfer Family SFTP source-IP (routine-infra, off/mild). OpenAI new 09-17:
  'Introducing Astra for Law' + 'How Cooley is accelerating IPO work with ChatGPT' (vertical/legal, mild off-axis).
  Google blog 09-17: UN Data Commons platform + 'new CC AI agent for families' + green steel (consumer/social/
  sustainability off-axis). HN frontpage rotated: 'Alibaba releases Qwen 3.8 Omni Flash' (open-weight model, mild
  on-axis single-surface) + 'Bonsai 2 27B near-lossless compression' + 'Fujitsu MONAKA next-gen CPU' + 'Bend — proof-
  based lang blocks AI mistakes' + 'Goose faster than C++/Rust' (mild/off). GitHub Trending same skills/agents/harness
  cluster (new-ish cloudflare/security-audit-skill maps to existing skills/security lane; strands-agents/harness-sdk,
  trailofbits/skills, bmad-code-org/BMAD-METHOD, LLMQuant/quant-mind all carry) -> NO new durable branch. HF / Google
  Research / Cloudflare / Docker / Meta tops UNCHANGED. Mistral €3B open-weight RAISE manual_review watch (carried
  09-08..09-18, NINETEENTH consecutive new-target pass): STILL no cross-surface confirmation (Mistral absent from all
  OTHER feeds again; news page lists sovereign/frontier + undated mistral-3 + unconfirmed nvidia-partner + mozilla +
  1-7-b slugs) -> stays manual_review, unresolved. Durable action = this raw transcript + a Honcho routing audit +
  a log.md entry + ONE append_existing section to concepts/ai-infra-operating-economics.md + an index.md log-date
  touch; no other concept page changed.
routing:
  - {surface: vercel, route: append_existing, note: "DURABLE DELTA: 'Open-weight models take 56% of token volume, Astra doubles Fable 5.1 spend' — AI Gateway Production Index September 2026 (August data), https://vercel.com/blog/ai-gateway-production-index-september-2026 (09-17 07:00). Next monthly edition of the recurring token-economics series this page has tracked since 2026-07-14 (July ~29% open-weight snapshot) and 08-12 (August: DeepSeek overtakes Google, cost/token -13.6%, open-weight tripled). September figures: (1) open-weight = 56% of ALL gateway tokens in August, MAJORITY for the first time (up from 7% Dec 2025); (2) avg price/token -23.2% in August (3rd straight drop, steepest since April; median team -7.6%, 2x July's 2.9%); (3) Anthropic Fable 5 spend share 13.2%->4.9%, Opus 5 (half price) ->22.5%, Anthropic still 64% of all spend (61c+ every month since Dec); (4) loyalty follows model profile not lab — Google gateway token-volume share 30%->5% (Gemini 3 Flash = 22 of 25 pts lost), workloads to GPT-5.6 Luna / Opus 5 / Sonnet 5 / DeepSeek; (5) special report: GPT-6 Astra (09-03, same price as Fable 5.1) took a third of OpenAI spend in 48h and 7.7% of ALL gateway spend in first 12 days vs Fable 5.1's 3.7%. Next monthly reading of the operator bifurcation thesis (cheap/self-hostable open-weight taking volume + premium spend concentrating) -> append_existing, no new page. Also new 09-17 changelog rows (mild): 'Run Terminal-Bench and other Harbor evals on Vercel Sandbox', 'skills CLI now supports Notion hosted skills', 'Sub-second artifact deployments in Vercel CLI', 'Turbo build machines per deployment'. Carry: Mem0 Marketplace, TypeSafe AI Jev on Gateway (09-16)."}
  - {surface: nvidia-dev, route: raw_only, note: "NO new Vera Rubin / Rubin Ultra / Vera CPU / NVL576 / Hot Chips / GTC spec/roadmap ITEM this window. New-since-22:00 dev-blog rows: 'CUDA Toolkit 13.4 Adds Windows on Arm Support and Greater Control over Shared GPUs' (09-17 20:20, https://developer.nvidia.com/blog/cuda-toolkit-13-4-adds-windows-on-arm-support-and-greater-control-over-shared-gpus/ — toolchain, mild on-axis, reinforces the CUDA-ecosystem watch), 'Accelerating Dropless MoE Training in JAX with NVIDIA Transformer Engine' (09-17 19:23, https://developer.nvidia.com/blog/accelerating-dropless-moe-training-in-jax-with-nvidia-transformer-engine/ — training-infra, mild), 'How to Use AI Agents to Prepare 3D Scenes for Simulation' (09-17 16:21, sim/robotics, off-axis). CUDA Rust (09-16, watch) + TensorRT Edge-LLM Jetson AGX Thor (09-16) + MLPerf v6.1 debut (absorbed 09-17 into nvidia-vera-rubin.md) all carry. -> raw_only."}
  - {surface: nvidia-newsroom, route: raw_only, note: "NO new next-gen-GPU spec ITEM. New top 'Cute Critters Come to the Cloud: Aniimo Launches on GeForce NOW' (09-17 13:00, gaming, off-axis). MLPerf v6.1 debut (09-16, absorbed 09-17), Emerald AI/Google alliance (09-16), Manchester Earth-2 (09-16 climate), Jensen Dreamforce (09-15), AI Infra Summit cluster (09-15, absorbed 09-16) all carry. -> raw_only."}
  - {surface: nvidianews, route: raw_only, note: "https://nvidianews.nvidia.com/releases.xml HTTP 200. Mirror of blogs.nvidia.com — same rows + CUDA-Q quantum (09-14). No new next-gen-GPU spec ITEM. -> raw_only."}
  - {surface: openai-news, route: raw_only, note: "NEW 09-17 rows vertical/legal, mild off-axis: 'Introducing Astra for Law' (09-17 00:00, https://openai.com/index/astra-for-law), 'How Cooley is accelerating IPO work with ChatGPT' (09-17 12:00, https://openai.com/index/cooley-gopublic). Carry: older-adults/advertising/business-value/misalignment (09-16), Fyxer (09-14). GPT-6 Astra spend data captured under the Vercel Production Index delta. -> raw_only."}
  - {surface: github-changelog, route: raw_only, note: "NEW 09-17: 'Agentic CLI customizations now in the usage metrics API' (09-17 21:08, https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api — Copilot agentic-CLI telemetry, mild on-axis), 'Copilot impact dashboard now shows feature engagement' (09-17 21:47), 'Workflow execution protections in GitHub Actions GA' (09-17 15:45, CI security, mild), 'Ubuntu 26 GA and latest migration' (09-17 16:27, runner image). Carry: SSO/SCIM housekeeping, Copilot budget GA, AI Scan drops CodeQL (09-16). -> raw_only."}
  - {surface: aws-whatsnew, route: raw_only, note: "NEW 09-17 batch routine-infra, off/mild: EC2 T8i instances GA (09-17 15:00), S3 Express One Zone +7 regions (09-17 08:00), Elastic Beanstalk Cluster Mode (09-17 08:00), Batch bulk job cancel/terminate (09-17 17:23), HealthOmics IAM session policies (09-17 18:32), Transfer Family SFTP source-IP preservation behind NLB (09-17 19:00), Builder Center mobile app (09-17), Quick generates sheets from image (09-17). Carry: Corretto 27 GA, SageMaker serverless Nemotron 3.5 Lightning, WorkSpaces Blackwell GPU (09-16). -> raw_only."}
  - {surface: simonwillison, route: raw_only, note: "NEW 09-17: 'Self-generated prompt injections in compaction summaries' (09-17 20:57, https://simonwillison.net/2026/Sep/17/compaction-summaries/ — agent-security/context-compaction, mild on-axis), 'Be alert: targeted attacks on prominent Rustaceans' (09-17 23:59, supply-chain security, mild), 'How To Write With An LLM' (09-17 23:37, writing, mild). Carry: datasette 1.0a40/0.65.5 + one-Claude (09-16). -> raw_only."}
  - {surface: hackernews, route: raw_only, note: "Frontpage rotated. Strongest new on-axis: 'Alibaba releases Qwen 3.8 Omni Flash' (09-17 23:05, https://qwen.ai/blog?id=qwen3.8-omni-flash — open-weight multimodal model, single-surface, mild on-axis, reinforces open-weight lane) + 'Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint' (09-17 21:13, https://prismml.com/news/bonsai-2-27b — model compression, mild) + 'Fujitsu launches made-in-Japan next-generation CPU FUJITSU-MONAKA' (09-15, https://global.fujitsu/en-global/pr/news/2026/09/14-02 — Arm HPC CPU, mild hardware) + 'Bend — A language that blocks AI mistakes via proof, on CPU and GPU' (09-17 20:36, https://bend-lang.com/) + 'Goose: 1.16x faster than C++ and 1.12x than safe Rust' (09-18 01:04, https://github.com/aardappel/goose). Off-axis: Wax motor, Telstra outage, Flet 1.0, Spanish Diplodocus, Japan centenarians, CrowdSec source leak, Uber retry storms, Hister private search. -> raw_only."}
  - {surface: github-trending, route: raw_only, note: "Same skills/agents/harness/code-review cluster; NO new durable branch -> raw_only. Newly-visible same-axis: cloudflare/security-audit-skill (security skill, maps to existing skills/security lane), Tencent/BrowserSkill, TencentCloud/Octop. Carry-axis: anthropics/knowledge-work-plugins, anthropics/claude-code, alibaba/open-code-review, addyosmani/agent-skills, alphaXiv/OpenResearch, SnailSploit/Claude-Red, Tencent/WeKnora, cline/cline, coder/coder, n8n-io/n8n, strands-agents/harness-sdk, trailofbits/skills, bmad-code-org/BMAD-METHOD, LLMQuant/quant-mind, Tracer-Cloud/opensre, onyx-dot-app/onyx, google-research/timesfm, hao-ai-lab/FastVideo. Off-axis excluded: JustVugg/colibri, NationalSecurityAgency/ghidra, abue-ammar/tinycast, affaan-m/ECC, ever-co/ever-gauzy, jamiepine/voicebox, roboflow/supervision, pytorch/pytorch, cilium/cilium, arnegiacomo/fugleramme, wilbowes/EchoMuse."}
  - {surface: google-blog, route: raw_only, note: "NEW 09-17 off/consumer/social axis: 'Making global data easier to explore' (UN Data Commons platform, 09-17 20:00, mild data-tooling), 'The new CC, an AI agent built for families' (09-17 18:15, consumer agent), 'Drive with Forgotten Island on Waze' (09-17), green steel (09-17 07:00, sustainability). 09-16 consumer/ads/commerce carry. On-axis-mild carry: Gemini 3.8 Live launch (09-15). -> raw_only."}
  - {surface: google-research, route: raw_only, note: "NEW top 'The future of practice: Enabling teachers to create learning interactives with generative UI' (09-17 20:45, edu/generative-UI, off-axis). Carry: Retrieve-for-Train (09-15), ToolGrad (09-10). -> raw_only."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED. Top still 'When scanners miss the attack: Client-Side Security protects storefronts' (09-16, off-axis) + granular agent authz (09-15, mild). -> raw_only."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED. Top still 'Your Agent Aced the Task. Will It Do It Again?' (IBM Research, 09-15, agent-consistency eval, mild). -> raw_only."}
  - {surface: docker, route: raw_only, note: "UNCHANGED. No new since 09-08 '6 Benefits of Sandbox Environments'. -> raw_only."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED. ZGateway (09-03), Organizational Second Brain (09-02); MTIA 300 / MetaRoCE (08-24) already durable in ai-infra-operating-economics.md. -> raw_only."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml 404); availability fact, consistent 08-02..09-18."}
  - {surface: mistral, route: manual_review, note: "CARRY-FORWARD manual_review watch (NINETEENTH consecutive new-target pass, 09-08 22:00 .. 09-18 11:00): 'Mistral makes sovereign open-weight AI to frontier' EUR 3B raise (https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier). News page still lists sovereign/frontier/open-weight family + undated mistral-3 + unconfirmed mistral-ai-and-nvidia-partner + mistral-x-mozilla + 1-7-b + physics-ai + ai-now-summit-2026 slugs. STILL no cross-surface confirmation of the EUR 3B raise — Mistral absent from all OTHER collected feeds again. Stays manual_review, unresolved, carried forward. Below ai-infra-operating-economics.md's append bar."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-09-17.md
  - raw/transcripts/interest-signal-collection-11-00-2026-09-17.md
  - concepts/ai-infra-operating-economics.md
  - concepts/nvidia-vera-rubin.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-09-18)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, official docs, GitHub Trending, NVIDIA developer blog + newsroom + nvidianews
Date: 2026-09-18 (captured ~11:12 KST; on-time 11:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_1100_0918.py` → `.cache/newtarget-2026-09-18-1100/`, parsed with `/tmp/nt_parse_1100_0918.py`; Vercel Production Index body verified with `/tmp/nt_body2_0918.py`; `grep` for GitHub Trending / Mistral slugs). No CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), NVIDIA developer blog, NVIDIA newsroom (`blogs.nvidia.com/feed/`), **nvidianews releases** (`nvidianews.nvidia.com/releases.xml`), GitHub Trending (daily + python), Hacker News frontpage, Mistral news (HTML). **Anthropic RSS 404** (`/rss.xml`) — availability fact (consistent 08-02..09-18).
- Baseline: most-recent successful new-target transcript `interest-signal-collection-22-00-2026-09-17.md` (captured ~22:05 KST, reinforcement-only) + `interest-signal-collection-11-00-2026-09-17.md` (absorbed the NVIDIA Vera Rubin NVL72 MLPerf v6.1 delta) + `concepts/ai-infra-operating-economics.md` + `concepts/nvidia-vera-rubin.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**ONE GENUINELY-NEW DURABLE DELTA this window → `append_existing` to `concepts/ai-infra-operating-economics.md`.** The recurring monthly **Vercel AI Gateway Production Index** published its **September 2026 edition** (August data): `Open-weight models take 56% of token volume, Astra doubles Fable 5.1 spend` (09-17 07:00). This page has tracked the exact series since 2026-07-14 (July ~29% open-weight snapshot) and 08-12 (August: DeepSeek overtakes Google, cost/token −13.6%, open-weight tripled). September = the next monthly data point squarely on the operating-economics axis. Everything else = `raw_only` reinforcement + the carried Mistral `manual_review` watch. **NVIDIA has no new next-gen-GPU spec/roadmap ITEM this window.**

### Durable delta (append_existing → ai-infra-operating-economics.md)
- **`Open-weight models take 56% of token volume, Astra doubles Fable 5.1 spend`** (Vercel AI Gateway Production Index — September 2026, August data) — https://vercel.com/blog/ai-gateway-production-index-september-2026 (09-17 07:00). Measured across "tens of trillions of tokens routed between production applications and AI labs" monthly. Key figures:
  - **Open-weight = 56% of ALL gateway tokens in August — a MAJORITY for the first time** (up from <10% / 7% in December 2025). Open-weight *dollar* share also accelerating though frontier still keeps most spend.
  - **Average price per token fell 23.2% in August** — third straight monthly drop, steepest since April; among teams running >10M tokens both months, the **median team paid 7.6% less** (2x July's 2.9% decline).
  - **Frontier plateaus / step-down:** Anthropic **Fable 5 spend share fell 13.2% → 4.9%**; **Opus 5 (half the price) rose to 22.5%**. 9 in 10 teams that ran Fable cut usage, most moved to Opus 5 ("Fable's extra capability wasn't worth double the price"). **Anthropic still kept 64% of all gateway spend** (61¢+ every month since December, top-two spots by spend every month since December).
  - **Loyalty follows model profile, not lab:** **Google's share of gateway token volume collapsed 30% → 5%** (Gemini 3 Flash = 22 of the 25 pts lost); ~half the fleeing volume went to cheaper GPT-5.6 Luna, the rest to pricier Opus 5 / Sonnet 5; also to DeepSeek. Within 5 days of launch GLM-5.3-Flash ran 3× GLM-5.2's daily volume.
  - **Special report — GPT-6 Astra:** launched on the gateway 09-03 at the same price as Fable 5.1 (2.5× GPT-5.6 Sol). Within 48h it took **a third of OpenAI's spend**; over first 12 days **Astra took 7.7% of ALL gateway spend vs Fable 5.1's 3.7% (2×)**, used by twice as many teams. Astra + Sol = 27% of OpenAI tokens but 71% of its spend.
  - **Also in August data:** Google Nano Banana took the lead in image *spend* (50% vs GPT Image 44%); Google Veo 2nd in video spend (20%); Grok Imagine's share of videos generated more than halved since June (42%→31%→19%).
- **Why it fits the thesis (unchanged framing, next data point):** this is the next monthly reading of the bifurcation the page argues — cheap/self-hostable **open-weight taking volume** (now a majority) + **premium spend concentrating** on one lab (Anthropic 64%) at a widening effective premium, while the operator's durable margin stays in routing/orchestration/observability/securable, not raw model access. → `append_existing` (one new dated section), no new page.

### Everything else = raw_only reinforcement (new-but-mild / unchanged since 09-17 22:00)
- **NVIDIA:** **NO new Vera Rubin / Rubin Ultra / Vera CPU / NVL576 / Hot Chips / GTC spec/roadmap ITEM this window.** New dev-blog rows on-axis-mild or off: `CUDA Toolkit 13.4 Adds Windows on Arm Support and Greater Control over Shared GPUs` (09-17, toolchain — reinforces the CUDA-ecosystem watch), `Accelerating Dropless MoE Training in JAX with NVIDIA Transformer Engine` (09-17, training-infra), `How to Use AI Agents to Prepare 3D Scenes for Simulation` (09-17, sim/robotics, off-axis). MLPerf v6.1 debut + CUDA Rust + TensorRT Edge-LLM all carry.
- **OpenAI:** new 09-17 `Introducing Astra for Law` + `How Cooley is accelerating IPO work with ChatGPT` (vertical/legal, mild off-axis). Astra *spend* data captured under the Vercel delta.
- **Simon Willison:** `Self-generated prompt injections in compaction summaries` (09-17, agent-security/context-compaction, mild) + `Be alert: targeted attacks on prominent Rustaceans` (supply-chain security) + `How To Write With An LLM`.
- **GitHub changelog:** `Agentic CLI customizations now in the usage metrics API` (09-17, mild on-axis) + Copilot impact dashboard + Workflow execution protections GA + Ubuntu 26 GA (CI/Copilot housekeeping).
- **AWS:** 09-17 routine-infra batch (EC2 T8i GA, S3 Express One Zone +7 regions, Elastic Beanstalk Cluster Mode, Batch bulk cancel, HealthOmics IAM, Transfer Family SFTP source-IP) — off/mild.
- **Hacker News:** `Alibaba releases Qwen 3.8 Omni Flash` (open-weight multimodal, single-surface, mild on-axis) + `Bonsai 2 27B near-lossless compression` + `Fujitsu MONAKA` Arm CPU + `Bend` proof-based lang + `Goose` faster-than-C++.
- **Google blog / Research:** UN Data Commons platform + `new CC AI agent for families` + green steel (09-17, off/consumer/social); generative-UI-for-teachers (Research, off-axis); Gemini 3.8 Live (09-15) carry.
- **GitHub Trending:** same skills/agents/harness/code-review cluster; new-ish `cloudflare/security-audit-skill` maps to existing skills/security lane → no new durable branch.
- **Cloudflare / HuggingFace / Docker / Meta / Google Research:** tops unchanged.
- **Mistral €3B open-weight RAISE `manual_review` watch (carried, 19th consecutive pass): STILL no cross-surface confirmation** — Mistral absent from every other feed again → stays `manual_review`, unresolved.

**Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry + ONE `append_existing` section to `concepts/ai-infra-operating-economics.md` + an `index.md` log-date touch; no other concept page changed.**

## 1) Vercel AI Gateway Production Index — September 2026 (DURABLE, append_existing)
Source URL: https://vercel.com/atom + https://vercel.com/blog/ai-gateway-production-index-september-2026
- `[2026-09-17 07:00] Open-weight models take 56% of token volume, Astra doubles Fable 5.1 spend` — https://vercel.com/blog/ai-gateway-production-index-september-2026
- Verbatim highlights:
  > Open-weight models ran the majority of gateway tokens for the first time, up from 7% in December to 56% in August.
  > Price per token fell 23.2% in August, the third straight monthly drop, and the median team paid 7.6% less.
  > Fable 5, Anthropic's most capable model, lost two-thirds of its share of gateway spend in one month. Opus 5, at half the price, tripled its share. Anthropic kept 64% of all spend.
  > Gemini 3 Flash has lost 95% of its share of gateway tokens since May... Google's share of gateway token volume fell from 30% to 5%.
  > GPT-6 Astra took a third of OpenAI's spend within two days of launch and twice Fable 5.1's share of gateway spend... 7.7% of all gateway spend in its first twelve days, while Fable 5.1 took 3.7%.
- New 09-17 Vercel changelog rows (mild): `Run Terminal-Bench and other Harbor evals on Vercel Sandbox` (https://vercel.com/changelog/run-terminal-bench-and-other-harbor-evals-on-vercel-sandbox), `The skills CLI now supports Notion hosted skills` (https://vercel.com/changelog/skills-cli-notion-skills), `Sub-second artifact deployments in Vercel CLI`, `Turbo build machines per deployment`.

## 2) NVIDIA — no new next-gen-GPU spec/roadmap item (raw_only)
Source URL: https://blogs.nvidia.com/feed/ + https://developer.nvidia.com/blog/feed/ + https://nvidianews.nvidia.com/releases.xml
- `[2026-09-17 20:20 GMT] CUDA Toolkit 13.4 Adds Windows on Arm Support and Greater Control over Shared GPUs` — https://developer.nvidia.com/blog/cuda-toolkit-13-4-adds-windows-on-arm-support-and-greater-control-over-shared-gpus/ (toolchain, mild)
- `[2026-09-17 19:23 GMT] Accelerating Dropless MoE Training in JAX with NVIDIA Transformer Engine` — https://developer.nvidia.com/blog/accelerating-dropless-moe-training-in-jax-with-nvidia-transformer-engine/ (training-infra, mild)
- `[2026-09-17 16:21 GMT] How to Use AI Agents to Prepare 3D Scenes for Simulation` — https://developer.nvidia.com/blog/how-to-use-ai-agents-to-prepare-3d-scenes-for-simulation/ (sim/robotics, off-axis)
- `[2026-09-17 13:00 GMT] Cute Critters Come to the Cloud: 'Aniimo' Launches on GeForce NOW` — https://blogs.nvidia.com/blog/geforce-now-thursday-aniimo/ (gaming, off-axis)
- MLPerf v6.1 debut (09-16, absorbed 09-17 into `nvidia-vera-rubin.md`), Emerald AI/Google alliance (09-16), Manchester Earth-2 (09-16), Jensen Dreamforce (09-15), AI Infra Summit cluster (09-15) — all carry.
- **NO new Vera Rubin / Rubin Ultra / Vera CPU / NVL576 / Hot Chips / GTC spec/roadmap ITEM this window.**

## 3) Other on-axis-mild rows (raw_only)
### OpenAI
- `[2026-09-17 00:00] Introducing Astra for Law` — https://openai.com/index/astra-for-law
- `[2026-09-17 12:00] How Cooley is accelerating IPO work with ChatGPT` — https://openai.com/index/cooley-gopublic
### GitHub changelog
- `[2026-09-17 21:08] Agentic CLI customizations now in the usage metrics API` — https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api
- `[2026-09-17 15:45] Workflow execution protections in GitHub Actions generally available` — https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available
### Simon Willison
- `[2026-09-17 20:57] Self-generated prompt injections in compaction summaries` — https://simonwillison.net/2026/Sep/17/compaction-summaries/
- `[2026-09-17 23:59] Be alert: targeted attacks on prominent Rustaceans` — https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/

## 4) Hacker News — frontpage rotation, mild on-axis (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-09-17 23:05] Alibaba releases Qwen 3.8 Omni Flash` — https://qwen.ai/blog?id=qwen3.8-omni-flash (open-weight multimodal, single-surface, mild on-axis)
- `[2026-09-17 21:13] Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint` — https://prismml.com/news/bonsai-2-27b (model compression, mild)
- `[2026-09-15 17:28] Fujitsu launches made-in-Japan next-generation CPU FUJITSU-MONAKA` — https://global.fujitsu/en-global/pr/news/2026/09/14-02 (Arm HPC CPU, mild hardware)
- `[2026-09-17 20:36] Bend – A language that blocks AI mistakes via proof, on CPU and GPU` — https://bend-lang.com/
- `[2026-09-18 01:04] Goose: 1.16x faster than C++ and 1.12x than safe Rust, while memory safe` — https://github.com/aardappel/goose/tree/master
- Off-axis: Wax motor, Telstra outage, Flet 1.0, Spanish Diplodocus, Japan centenarians, CrowdSec source leak, Uber retry storms, Hister private search.

## 5) GitHub Trending — same cluster; no new durable branch (raw_only)
Source URL: https://github.com/trending?since=daily + https://github.com/trending/python?since=daily
- Newly-visible same-axis: `cloudflare/security-audit-skill` (security skill, maps to existing skills/security lane), `Tencent/BrowserSkill`, `TencentCloud/Octop`.
- Carry-axis: `anthropics/knowledge-work-plugins`, `anthropics/claude-code`, `alibaba/open-code-review`, `addyosmani/agent-skills`, `alphaXiv/OpenResearch`, `SnailSploit/Claude-Red`, `Tencent/WeKnora`, `cline/cline`, `coder/coder`, `n8n-io/n8n`, `strands-agents/harness-sdk`, `trailofbits/skills`, `bmad-code-org/BMAD-METHOD`, `LLMQuant/quant-mind`, `Tracer-Cloud/opensre`, `onyx-dot-app/onyx`, `google-research/timesfm`, `hao-ai-lab/FastVideo`.
- Off-axis excluded: `JustVugg/colibri`, `NationalSecurityAgency/ghidra`, `abue-ammar/tinycast`, `affaan-m/ECC`, `ever-co/ever-gauzy`, `jamiepine/voicebox`, `roboflow/supervision`, `pytorch/pytorch`, `cilium/cilium`, `arnegiacomo/fugleramme`, `wilbowes/EchoMuse`.

## 6) Mistral €3B open-weight raise — manual_review carried (19th consecutive pass)
Source URL: https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier
- News page still lists the sovereign/frontier/open-weight family of slugs + undated `mistral-3` + `mistral-ai-and-nvidia-partner-to-accelerate-open-frontier-models` (NOT confirmed on any NVIDIA surface) + `mistral-x-mozilla` + `mistral-ai-raises-1-7-b` (older) + `introducing-physics-ai-at-mistral` + `ai-now-summit-2026`. STILL no cross-surface confirmation of the €3B raise — Mistral absent from all OTHER collected feeds again → stays `manual_review`, unresolved, carried forward, below `ai-infra-operating-economics.md`'s append bar.

## Filtering notes
- Excluded as noise/off-axis: HF training-infra/image-UI; Google consumer/ads/commerce/climate/sustainability (green steel, UN Data Commons, families CC agent, Waze); Google Research edu/bio/neuro; AWS routine-infra (EC2 T8i, S3 Express, Beanstalk, Batch, HealthOmics, Transfer Family, Corretto); Cloudflare client-side security; HN off-axis frontpage (Wax motor, Telstra, Flet, Diplodocus, centenarians, CrowdSec, Uber, Hister); NVIDIA healthcare/robotics/AV/climate/sim/gaming (Aniimo, 3D-scene sim); Simon Willison writing/personal; off-axis trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — 08:00/19:00 jobs own them.

## Why this raw exists
Evidence store for the 2026-09-18 11:00 new-target pass. **ONE genuinely-new durable delta → `append_existing` to `concepts/ai-infra-operating-economics.md`:** the recurring monthly Vercel AI Gateway Production Index published its September 2026 edition (August data, 09-17 07:00) — open-weight = 56% of all gateway tokens (majority for the first time, up from 7% Dec 2025), avg price/token −23.2% (3rd straight drop), Anthropic Fable 5 spend 13.2%→4.9% while Opus 5 →22.5% (Anthropic still 64% of all spend), Google gateway token-volume share 30%→5%, and a special report on GPT-6 Astra taking 7.7% of all gateway spend in 12 days vs Fable 5.1's 3.7% — the next monthly reading of the operator bifurcation thesis (cheap open-weight taking volume + premium spend concentrating). Everything else = `raw_only` reinforcement (NVIDIA no new next-gen-GPU spec ITEM; OpenAI Astra-for-Law/Cooley legal; Simon Willison compaction prompt-injection/Rustacean-attacks; GitHub agentic-CLI telemetry; AWS routine-infra batch; HN Qwen 3.8 Omni Flash/Bonsai 2/Fujitsu MONAKA; Google UN Data Commons/families-CC/green-steel; GitHub Trending same skills/agents/harness cluster) + the carried Mistral €3B `manual_review` watch (19th consecutive pass, still no cross-surface confirmation). Anthropic RSS 404 = availability fact. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry + one `append_existing` section to `ai-infra-operating-economics.md` + an `index.md` log-date touch; no other concept page changed.
