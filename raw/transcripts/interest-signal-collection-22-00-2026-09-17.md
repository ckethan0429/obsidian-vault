---
title: Interest signal collection — 22:00 new-target run (2026-09-17)
created: 2026-09-17
type: raw-transcript
captured_at: 2026-09-17T22:05:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, new-target, blogs, changelogs, releases, github-trending, nvidia, vera-rubin, glm-inference, mistral-watch]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time (~22:05 KST). Idempotency clear: no interest-signal-collection-22-00-2026-09-17
  raw existed before this run (same-day 08:00 social + 11:00 new-target + 19:00 social present). Baseline for the
  new-target track = the SAME-DAY 11:00 new-target transcript interest-signal-collection-11-00-2026-09-17.md
  (~11h ago, which ALREADY absorbed the NVIDIA Vera Rubin NVL72 MLPerf Inference v6.1 durable delta via
  append_existing into concepts/nvidia-vera-rubin.md) + concepts/nvidia-vera-rubin.md +
  concepts/ai-infra-operating-economics.md + concepts/managed-agents-practical-summary.md + concepts/honcho.md.
  Collection via public RSS/Atom + HTML fetch (stdlib Python /tmp/nt_fetch_2200_0917.py ->
  .cache/newtarget-2026-09-17-2200/, parsed with /tmp/nt_parse_2200_0917.py + grep for GitHub Trending / Mistral
  slugs). All feeds HTTP 200 except Anthropic RSS 404 (availability fact, consistent 08-02..09-17).
  RESULT: REINFORCEMENT-ONLY at the durable layer (route raw_only, whole run) + ONE carried manual_review watch.
  No new durable delta this window — the NVIDIA Vera Rubin MLPerf v6.1 debut was already absorbed at 11:00 today,
  and NVIDIA has NO new Vera Rubin / Rubin Ultra / Vera CPU / Hot Chips / GTC spec/roadmap ITEM since that
  absorption (only carry: MLPerf debut, Emerald AI/Google alliance, CUDA Rust, TensorRT Edge-LLM, all already
  captured 11:00; new nvidia-dev top 'How to Use AI Agents to Prepare 3D Scenes for Simulation' 09-16 23:25 is
  off-axis sim/robotics). Genuinely-new-since-11:00 rows are all single-surface / mild: (1) HN 'GLM Built Its Own
  Inference Infrastructure' (z.ai, 09-17 08:27 — on-axis inference-infra economics but single-surface, does NOT
  cross append bar) -> raw_only watch; (2) HN 'Better Vector Search for Long Documents: Chunking Inside Manticore
  Search' (09-17, mild RAG) + HN 'How, Exactly, Could A.I. Kill Us?' (New Yorker, safety essay, off-axis) + Servo
  sponsorship / Neovim BTC / driver-license keys (off-axis); (3) Google blog 'first large-scale near-zero-emissions
  steel plant' (09-17 07:00, sustainability, off-axis); (4) GitHub Trending new-ish rows strands-agents/harness-sdk
  (harness axis), trailofbits/skills, Tencent/BrowserSkill, bmad-code-org/BMAD-METHOD, LLMQuant/quant-mind,
  n8n-io/n8n, coder/coder, cilium/cilium, google-research/timesfm, hao-ai-lab/FastVideo, Tracer-Cloud/opensre — all
  map to existing skills/agents/harness/infra lanes, NO new durable branch. Everything else unchanged/mild since
  11:00: OpenAI top unchanged (older-adults/advertising/business-value/misalignment 09-16 carry); GitHub changelog
  same 09-16 rows (SSO/SCIM housekeeping, Copilot budget GA, AI Scan drops CodeQL); AWS same 09-16/09-17 batch
  (Corretto 27 GA, SageMaker serverless Nemotron 3.5 Lightning, WorkSpaces Blackwell GPU, Client VPN MacOS,
  Connect metrics); HF/Vercel/Cloudflare/Google-Research/Simon-Willison/Docker/Meta tops unchanged. Mistral EUR 3B
  open-weight RAISE manual_review watch (carried 09-08..09-17, EIGHTEENTH consecutive new-target pass): still no
  cross-surface confirmation (Mistral absent from all OTHER feeds again; news page still lists sovereign/frontier
  + undated mistral-3 + unconfirmed nvidia-partner + mozilla + 1-7-b slugs) -> stays manual_review, unresolved.
  Durable action = this raw transcript + a Honcho routing audit + a log.md entry ONLY; index.md and all concept
  pages left unchanged.
routing:
  - {surface: nvidia-newsroom, route: raw_only, note: "NO new Vera Rubin / Rubin Ultra / Vera CPU / Hot Chips / GTC spec/roadmap ITEM since the 11:00 absorption. Top still 'NVIDIA Vera Rubin NVL72 Delivers Leading Performance in MLPerf Inference v6.1 Debut' (09-16 15:00 GMT, https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/) — ALREADY absorbed 11:00 into nvidia-vera-rubin.md, carry. Emerald AI/Google alliance (09-16 13:00) + Manchester Earth-2 (09-16 climate) + Jensen Dreamforce (09-15) + AI Infra Summit cluster (09-15, absorbed 09-16 11:00) all carry. -> raw_only."}
  - {surface: nvidia-dev, route: raw_only, note: "NO new Vera Rubin spec item. New-since-11:00 top 'How to Use AI Agents to Prepare 3D Scenes for Simulation' (09-16 23:25, https://developer.nvidia.com/blog/how-to-use-ai-agents-to-prepare-3d-scenes-for-simulation/ — sim/robotics, off-axis). CUDA Rust (09-16, raw_only watch) + TensorRT Edge-LLM Jetson AGX Thor (09-16) + NVLink 6 resiliency + Groq 3 LPX + Dense vs MoE (09-15) all captured 11:00. -> raw_only."}
  - {surface: nvidianews, route: raw_only, note: "https://nvidianews.nvidia.com/releases.xml HTTP 200. Mirror of blogs.nvidia.com — same MLPerf v6.1 debut + Emerald AI alliance + Manchester Earth-2 + Jensen Dreamforce + AI Infra Summit + CUDA-Q quantum (09-14). No new next-gen-GPU spec ITEM. -> raw_only."}
  - {surface: hackernews, route: raw_only, note: "Frontpage rotated. Strongest new-on-axis: 'GLM Built Its Own Inference Infrastructure' (z.ai, 09-17 08:27, https://z.ai/blog/glm-built-its-inference-infrastructure — Zhipu/GLM built its own inference stack, on-axis AI-infra economics, single-surface, does NOT cross append bar) -> raw_only watch. Mild: 'Better Vector Search for Long Documents: Chunking Inside Manticore Search' (09-17, https://manticoresearch.com/blog/auto-chunking/ — RAG/vector), 'How, Exactly, Could A.I. Kill Us?' (New Yorker, 09-17, safety essay). Off-axis: One Year of Sponsored Servo Development, Neovim ~$800k Bitcoin donation, driver-license barcode signing keys, PHP http-build-url deprecation, Dirac math/physics, Z3 guide, Xiaomi Mimo 2.6 dashboard. CUDA Rust HN row (09-16) carry. -> raw_only."}
  - {surface: github-trending, route: raw_only, note: "Same skills/agents/harness/code-review cluster; NO new durable branch -> raw_only. Newly-visible same-axis vs 11:00: strands-agents/harness-sdk (harness SDK, maps to CK's harness/managed-agents lane), trailofbits/skills (security skills), Tencent/BrowserSkill (browser agent skill), bmad-code-org/BMAD-METHOD (agent method), LLMQuant/quant-mind (quant/investing-adjacent), Tracer-Cloud/opensre (SRE agent), n8n-io/n8n (workflow automation), coder/coder, cilium/cilium (infra), google-research/timesfm, hao-ai-lab/FastVideo. Carry-axis: anthropics/knowledge-work-plugins, anthropics/claude-code, alibaba/open-code-review, addyosmani/agent-skills, alphaXiv/OpenResearch, SnailSploit/Claude-Red, Tencent/WeKnora, TencentCloud/Octop, cline/cline, onyx-dot-app/onyx. Off-axis excluded: JustVugg/colibri, NationalSecurityAgency/ghidra, abue-ammar/tinycast, affaan-m/ECC, ever-co/ever-gauzy, jamiepine/voicebox, roboflow/supervision, pytorch/pytorch, arnegiacomo/fugleramme, wilbowes/EchoMuse."}
  - {surface: google-blog, route: raw_only, note: "NEW 09-17 07:00 'Helping bring the world's first large-scale, near-zero emissions steel plant online' (https://blog.google/company-news/outreach-and-initiatives/sustainability/google-stegra-green-steel/ — sustainability, off-axis). 09-16 rows off/consumer-axis (search profiles for publishers, holiday sales, teens+AI, agentic commerce, Rethink 2026, Brazil climate). On-axis-mild carry: Gemini 3.8 Live launch (09-15). -> raw_only."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top still 09-16 business/consumer/policy: 'Helping older adults use AI in everyday life', 'Reimagining advertising with AI', 'How to connect AI usage to business value', 'Our framework for reporting model misalignment', 'How workers are unlocking new ways of working'. Carry: Fyxer (09-14), GPT-6 Astra proof-points. -> raw_only."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Same 09-16 rows: 'Automate SSO authorization for classic PATs and SSH keys', 'SCIM user responses include profileUrl', 'Copilot budget increase requests GA', 'Code scanning AI Scan no longer requires CodeQL default setup'. Carry: Enforce GH Advanced Security, Copilot custom properties (09-15). -> raw_only."}
  - {surface: aws-whatsnew, route: raw_only, note: "Same 09-16/09-17 batch: 'Amazon Corretto 27 GA' (09-17 00:00, JDK off-axis), 'SageMaker AI serverless customization for NVIDIA Nemotron 3.5 Lightning' (09-16, mild on-axis, captured 11:00), 'Client VPN MacOS 27 Golden Gate' (09-16), 'New AWS builder experience' (09-16), 'WorkSpaces NVIDIA Blackwell GPU instances' (09-16, captured 11:00), Connect custom metrics/PDF-import, MediaTailor ad hooks, ECS S3 on EC2. -> raw_only."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 09-16: 'Hobby projects retain fewer deployments', 'Secure Compute + Static IP builds 64% faster', 'Mem0 joins Vercel Marketplace' (agent-memory, mild), 'TypeSafe AI Jev on AI Gateway', 'Is Agentic tailors audit by site type'. Carry: Delphi 100x/day, Gemini 3.8 Live on Gateway (09-15). -> raw_only."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 'When scanners miss the attack: Client-Side Security protects storefronts' (09-16, off-axis) + 'stay discoverable while disallowing AI training' + 'Give every teammate and agent the right level of access to your Workers' (granular agent authz, mild, 09-15). Carry: CASB policies (09-11). -> raw_only."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED. Top still 'Your Agent Aced the Task. Will It Do It Again?' (IBM Research, 09-15, agent-consistency eval, mild). Carry: Async GRPO with LoRA (09-10), funes coding-agent-memory (09-03). -> raw_only."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED. Top still 'Bypassing inference bottlenecks: Retrieve-for-Train' (09-15, inference/training method, mild). Carry: ToolGrad (09-10). -> raw_only."}
  - {surface: simonwillison, route: raw_only, note: "UNCHANGED vs 11:00. Top still datasette 1.0a40 / 0.65.5 (09-16, his own releases) + 'Claude Cowork and chat are now one Claude' (09-16, mild) + 'Quoting Mustafa Suleyman' (09-16). Carry: Gemini Live audio (09-15). -> raw_only."}
  - {surface: docker, route: raw_only, note: "UNCHANGED. No new since 09-08 '6 Benefits of Sandbox Environments'. Agent-sandbox lane already within window. -> raw_only."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED. ZGateway (09-03), Organizational Second Brain (09-02); MTIA 300 / MetaRoCE (08-24) already durable in ai-infra-operating-economics.md. -> raw_only."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml 404); availability fact, consistent 08-02..09-17."}
  - {surface: mistral, route: manual_review, note: "CARRY-FORWARD manual_review watch (EIGHTEENTH consecutive new-target pass, 09-08 22:00 .. 09-17 22:00): 'Mistral makes sovereign open-weight AI to frontier' EUR 3B raise (https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier). News page still lists sovereign/frontier/open-weight family + mistral-3 (undated/unconfirmed) + mistral-ai-and-nvidia-partner slug (NOT confirmed on any NVIDIA surface incl. the MLPerf debut) + mistral-x-mozilla (09-16 product, carry) + mistral-ai-raises-1-7-b (older) + physics-ai-at-mistral + ai-now-summit-2026. STILL no cross-surface confirmation of the EUR 3B raise — Mistral absent from all OTHER collected feeds again. Stays manual_review, unresolved, carried forward. Below ai-infra-operating-economics.md's append bar."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-09-17.md
  - concepts/nvidia-vera-rubin.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-09-17)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, official docs, GitHub Trending, NVIDIA developer blog + newsroom + nvidianews
Date: 2026-09-17 (captured ~22:05 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0917.py` → `.cache/newtarget-2026-09-17-2200/`, parsed with `/tmp/nt_parse_2200_0917.py` + `grep` for GitHub Trending / Mistral slugs). No CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), NVIDIA developer blog, NVIDIA newsroom (`blogs.nvidia.com/feed/`), **nvidianews releases** (`nvidianews.nvidia.com/releases.xml`), GitHub Trending (daily + python), Hacker News frontpage, Mistral news (HTML). **Anthropic RSS 404** (`/rss.xml`) — availability fact (consistent 08-02..09-17).
- Baseline: the **same-day 11:00 new-target transcript** `interest-signal-collection-11-00-2026-09-17.md` (~11h old, which ALREADY absorbed the NVIDIA Vera Rubin NVL72 MLPerf Inference v6.1 durable delta via `append_existing` into `concepts/nvidia-vera-rubin.md`) + `concepts/nvidia-vera-rubin.md` + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**REINFORCEMENT-ONLY at the durable layer (`raw_only`, whole run) + ONE carried `manual_review` watch.** No new durable delta this window — the NVIDIA Vera Rubin MLPerf v6.1 debut was already absorbed at 11:00 today, and NVIDIA has **no new Vera Rubin / Rubin Ultra / Vera CPU / Hot Chips / GTC spec/roadmap ITEM** since that absorption. Genuinely-new-since-11:00 rows are all single-surface / mild.

### Genuinely-fresh rows (raw_only)
- **`GLM Built Its Own Inference Infrastructure`** (z.ai, 09-17 08:27, HN frontpage) — https://z.ai/blog/glm-built-its-inference-infrastructure. Zhipu/GLM describing building their own inference stack — on-axis (AI-infra operating economics / model serving), but **single-surface** (HN only, not cross-confirmed) → does **not** cross the append bar → `raw_only` watch.
- **`Better Vector Search for Long Documents: Chunking Inside Manticore Search`** (09-17, HN) — https://manticoresearch.com/blog/auto-chunking/ (RAG/vector-search, mild).
- **Google blog `first large-scale near-zero-emissions steel plant`** (09-17 07:00) — https://blog.google/company-news/outreach-and-initiatives/sustainability/google-stegra-green-steel/ (sustainability, off-axis).

### NVIDIA — no new next-gen-GPU spec/roadmap item this window (raw_only)
- The **Vera Rubin NVL72 MLPerf Inference v6.1 debut** (09-16 15:00 GMT) was **already absorbed at 11:00 today** into `concepts/nvidia-vera-rubin.md` → carry, not re-counted.
- New-since-11:00 nvidia-dev top: `How to Use AI Agents to Prepare 3D Scenes for Simulation` (09-16 23:25, sim/robotics, off-axis).
- **NO new Vera Rubin / Rubin Ultra / Vera CPU / NVL576 / Hot Chips / GTC spec/roadmap ITEM since the 11:00 absorption.**

### Everything else = carry / mild (unchanged since 11:00)
- **OpenAI:** top unchanged — 09-16 business/consumer/policy posts (older-adults, advertising, usage→business-value, model-misalignment framework, workers) + Fyxer (09-14) carry.
- **GitHub changelog:** unchanged — SSO/SCIM housekeeping, Copilot budget-increase GA, AI Scan drops CodeQL (all 09-16).
- **AWS:** same 09-16/09-17 batch — Corretto 27 GA (off-axis), SageMaker serverless Nemotron 3.5 Lightning (mild, captured 11:00), WorkSpaces Blackwell GPU (captured 11:00), Client VPN MacOS, Connect metrics/PDF-import, MediaTailor, ECS S3.
- **Vercel:** unchanged — Hobby retention, Secure Compute 64% faster, Mem0 Marketplace (mild), TypeSafe AI Jev on Gateway, Is Agentic audit-by-site-type (all 09-16).
- **Cloudflare:** unchanged — Client-Side Security storefront (09-16, off-axis) + granular agent authz (09-15, mild).
- **HuggingFace / Google Research / Simon Willison / Docker / Meta:** tops unchanged.
- **Google blog:** new 09-17 green-steel + 09-16 consumer/ads/commerce rows off-axis; Gemini 3.8 Live (09-15) carry.
- **GitHub Trending:** same skills/agents/harness/code-review cluster; new-ish `strands-agents/harness-sdk`, `trailofbits/skills`, `Tencent/BrowserSkill`, `bmad-code-org/BMAD-METHOD`, `LLMQuant/quant-mind`, `n8n-io/n8n`, `coder/coder`, `Tracer-Cloud/opensre` all map to existing skills/agents/harness/infra lanes → no new durable branch.
- **Mistral €3B open-weight RAISE `manual_review` watch (carried, 18th consecutive pass): STILL no cross-surface confirmation** — Mistral absent from every other feed again; news page still lists sovereign/frontier + undated `mistral-3` + unconfirmed `nvidia-partner` + `mozilla` + `1-7-b` slugs → stays `manual_review`, unresolved.

**Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.**

## 1) HN — GLM inference infrastructure + mild rows (new, raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-09-17 08:27] GLM Built Its Own Inference Infrastructure` — https://z.ai/blog/glm-built-its-inference-infrastructure (strongest new on-axis; Zhipu/GLM own inference stack; single-surface → raw_only watch)
- `[2026-09-17 10:30] Better Vector Search for Long Documents: Chunking Inside Manticore Search` — https://manticoresearch.com/blog/auto-chunking/ (RAG/vector, mild)
- `[2026-09-17 12:50] How, Exactly, Could A.I. Kill Us?` — https://www.newyorker.com/news/q-and-a/how-exactly-could-ai-kill-us (safety essay, off-axis)
- Off-axis: One Year of Sponsored Servo Development, Neovim ~$800k Bitcoin donation, driver-license barcode signing keys, PHP http-build-url deprecation, Dirac math/physics, Z3 guide, Xiaomi Mimo 2.6 dashboard.
- Carry: `Nvidia announces native GPU programming in Rust` (CUDA Rust, 09-16, raw_only watch captured 11:00).

## 2) NVIDIA — no new next-gen-GPU spec/roadmap item (raw_only)
Source URL: https://blogs.nvidia.com/feed/ + https://developer.nvidia.com/blog/feed/ + https://nvidianews.nvidia.com/releases.xml
- `[2026-09-16 15:00 GMT] NVIDIA Vera Rubin NVL72 Delivers Leading Performance in MLPerf Inference v6.1 Debut` — https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/ (**already absorbed 11:00** into `nvidia-vera-rubin.md`, carry).
- `[2026-09-16 23:25] How to Use AI Agents to Prepare 3D Scenes for Simulation` — https://developer.nvidia.com/blog/how-to-use-ai-agents-to-prepare-3d-scenes-for-simulation/ (NEW nvidia-dev top; sim/robotics, off-axis).
- Emerald AI/Google alliance (09-16), Manchester Earth-2 (09-16 climate), Jensen Dreamforce (09-15), AI Infra Summit cluster (09-15, absorbed 09-16 11:00) — all carry.
- **NO new Vera Rubin / Rubin Ultra / Vera CPU / Hot Chips / GTC spec/roadmap ITEM this window.**

## 3) GitHub Trending — same cluster; no new durable branch (raw_only)
Source URL: https://github.com/trending?since=daily + https://github.com/trending/python?since=daily
- Newly-visible same-axis vs 11:00: `strands-agents/harness-sdk` (harness SDK, on CK's harness/managed-agents axis), `trailofbits/skills` (security skills), `Tencent/BrowserSkill` (browser agent skill), `bmad-code-org/BMAD-METHOD` (agent method), `LLMQuant/quant-mind` (quant/investing-adjacent), `Tracer-Cloud/opensre` (SRE agent), `n8n-io/n8n`, `coder/coder`, `cilium/cilium`, `google-research/timesfm`, `hao-ai-lab/FastVideo`.
- Carry-axis: `anthropics/knowledge-work-plugins`, `anthropics/claude-code`, `alibaba/open-code-review`, `addyosmani/agent-skills`, `alphaXiv/OpenResearch`, `SnailSploit/Claude-Red`, `Tencent/WeKnora`, `TencentCloud/Octop`, `cline/cline`, `onyx-dot-app/onyx`.
- Off-axis excluded: `JustVugg/colibri`, `NationalSecurityAgency/ghidra`, `abue-ammar/tinycast`, `affaan-m/ECC`, `ever-co/ever-gauzy`, `jamiepine/voicebox`, `roboflow/supervision`, `pytorch/pytorch`, `arnegiacomo/fugleramme`, `wilbowes/EchoMuse`.

## 4) Mistral €3B open-weight raise — manual_review carried (18th consecutive pass)
Source URL: https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier
- News page still lists the sovereign/frontier/open-weight family + `mistral-3` (undated/unconfirmed) + `mistral-ai-and-nvidia-partner-to-accelerate-open-frontier-models` (NOT confirmed on any NVIDIA surface incl. the MLPerf debut) + `mistral-x-mozilla` (09-16 product, carry) + `mistral-ai-raises-1-7-b` (older) + `introducing-physics-ai-at-mistral` + `ai-now-summit-2026`. STILL no cross-surface confirmation of the €3B raise — Mistral absent from all OTHER collected feeds again → stays `manual_review`, unresolved, carried forward, below `ai-infra-operating-economics.md`'s append bar.

## Filtering notes
- Excluded as noise/off-axis: HF training-infra/image-UI; Google consumer/ads/commerce/climate/sustainability (green steel, search profiles, holiday sales, teens+AI, Brazil, Thompson Center); Google Research bio/neuro/earth; AWS routine-infra (Corretto, Client VPN, Connect metrics/PDF, MediaTailor, ECS S3); Cloudflare client-side security; HN off-axis frontpage (Servo, Neovim BTC, driver-license keys, PHP, Dirac, Z3, Xiaomi Mimo, New Yorker AI-risk essay); NVIDIA healthcare/robotics/AV/climate/sim (Manchester Earth-2, 3D-scene sim); Simon Willison personal; off-axis trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — 08:00/19:00 jobs own them.

## Why this raw exists
Evidence store for the 2026-09-17 22:00 new-target pass. **REINFORCEMENT-ONLY at the durable layer (`raw_only`, whole run) + ONE carried `manual_review` watch.** No new durable delta this window — the NVIDIA Vera Rubin MLPerf v6.1 debut was already absorbed at 11:00 today, and NVIDIA has no new Vera Rubin / Rubin Ultra / Vera CPU / Hot Chips / GTC spec/roadmap ITEM since that absorption (only new nvidia-dev top = off-axis 3D-scene-sim). Genuinely-new-since-11:00 rows are all single-surface / mild: HN `GLM Built Its Own Inference Infrastructure` (09-17, on-axis inference-infra economics but single-surface → `raw_only` watch), HN Manticore chunking (RAG, mild), HN New Yorker AI-risk essay (off-axis), Google green-steel (09-17, off-axis), GitHub Trending new-ish `strands-agents/harness-sdk` + `trailofbits/skills` + `Tencent/BrowserSkill` + `bmad-code-org/BMAD-METHOD` + `LLMQuant/quant-mind` + infra repos (all map to existing skills/agents/harness/infra lanes, no new branch). Everything else unchanged/mild since 11:00 (OpenAI/GitHub-changelog/AWS/Vercel/Cloudflare/HF/Google-Research/Simon-Willison/Docker/Meta tops carry). Mistral €3B open-weight RAISE `manual_review` watch carried (18th consecutive pass, still no cross-surface confirmation). Anthropic RSS 404 = availability fact. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.
