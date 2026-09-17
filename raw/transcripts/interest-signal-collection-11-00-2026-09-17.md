---
title: Interest signal collection — 11:00 new-target run (2026-09-17)
created: 2026-09-17
type: raw-transcript
captured_at: 2026-09-17T11:15:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, new-target, blogs, changelogs, releases, github-trending, nvidia, vera-rubin, mlperf, cuda-rust, mistral-watch]
route_hint: append_existing
route_confidence: high
route_reason: >
  11:00 new-target pass, on time (~11:15 KST). Idempotency clear: no interest-signal-collection-11-00-2026-09-17
  raw existed before this run (only the same-day 08:00 social run present). Baseline for the new-target track =
  the most-recent successful new-target transcript interest-signal-collection-22-00-2026-09-16.md (captured
  ~22:05 KST / 13:05 GMT, reinforcement-only) + interest-signal-collection-11-00-2026-09-16.md (which absorbed the
  AI Infra Summit Vera Rubin cluster) + concepts/nvidia-vera-rubin.md + concepts/ai-infra-operating-economics.md +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md. Collection via public RSS/Atom + HTML fetch
  (stdlib Python /tmp/nt_fetch_1100_0917.py -> .cache/newtarget-2026-09-17-1100/, parsed with
  /tmp/nt_parse_1100_0917.py + /tmp/nt_body_0917.py for NVIDIA MLPerf/CUDA-Rust body verification, grep for GitHub
  Trending / Mistral slugs). All feeds HTTP 200 except Anthropic RSS 404 (availability fact, consistent 08-02..09-17).
  RESULT: ONE GENUINELY-NEW DURABLE DELTA this window -> append_existing to concepts/nvidia-vera-rubin.md.
  NVIDIA published the FIRST Vera Rubin NVL72 MLPerf Inference v6.1 preview results (blogs.nvidia.com, 09-16 15:00 GMT
  — i.e. AFTER the 22:00 KST/13:05 GMT baseline capture): up to 3.7x throughput vs GB300 NVL72 on Qwen3-VL and 2.5x on
  DeepSeek-R1 (vLLM+Dynamo / TensorRT-LLM, NVFP4, disaggregated prefill/decode + large-scale expert parallelism), 30x
  on the SemiAnalysis AgentX agentic benchmark, DSR1 scaling 72->288 GPUs at 99% efficiency, NVLink 6 10x packet rate
  / 3x lower latency vs Ethernet; partner Nebius also submitted. This is the FIRST real-silicon measured-performance
  data for Vera Rubin (the concept page had only spec/roadmap + AI-Infra-Summit power-mgmt detail) and is squarely on
  CK's explicitly prioritized next-gen-GPU axis -> append_existing (one new section to nvidia-vera-rubin.md).
  SECOND genuinely-new cross-surface row (raw_only, notable watch): NVIDIA CUDA Rust — native GPU programming in Rust
  (developer.nvidia.com 'Introducing CUDA Rust: Two Tracks for Writing GPU Kernels' + companion 'Translating CUDA Tile
  Operations from Python to Rust Using Agentic AI', both 09-16; the announcement is ALSO on the HN frontpage
  'Nvidia announces native GPU programming in Rust' -> cross-surface). A GPU-toolchain/language-ecosystem shift, on-axis
  but not next-gen-GPU ARCHITECTURE and has no natural existing concept page -> raw_only watch, does not cross the
  new-page bar in one pass. Supporting NVIDIA (raw_only reinforcement): 'Emerald AI, Google and NVIDIA Launch Alliance
  to Advance Flexible AI Data Centers' (09-16 13:00 — formalizes the DSX Flex grid-responsive power-mgmt story already
  absorbed 09-16 11:00) + 'TensorRT Edge-LLM 6.4x on Jetson AGX Thor' (09-16, edge). Everything else = raw_only
  reinforcement: OpenAI new 09-16 business/consumer posts (advertising-with-AI, usage->business-value, misalignment
  reporting framework, older adults — mild/off-axis); GitHub changelog new 09-16 (Copilot budget-increase GA, Code
  scanning AI Scan drops CodeQL requirement, SSO/SCIM housekeeping — mild); AWS new 09-16 (SageMaker serverless
  customization for Nemotron 3.5 Lightning, WorkSpaces Blackwell GPU instances, Corretto 27 — mild); Vercel new 09-16
  (Mem0 agent-memory joins Marketplace, TypeSafe AI Jev on AI Gateway, Secure Compute builds 64% faster — mild);
  Simon Willison 'Claude Cowork and chat are now one Claude' (09-16, mild) + datasette 1.0a40/0.65.5; Google blog 09-16
  off-axis (search profiles, holiday ads/commerce, teens+AI, Brazil climate); HN mild on-axis 'HarnessTax: How Much
  Does the Harness Matter for Coding Agents?' + 'OpenSpec AI spec framework' + 'Training a 4B model 81% faster query
  plans than Postgres (qorl)' + 'Breaking the 1.58-bit Barrier for Ternary LLMs'; GitHub Trending same skills/agent/
  code-review cluster (new-ish google/skills, wshobson/agents, onyx-dot-app/onyx all map to existing lanes, no new
  branch). Mistral EUR 3B open-weight manual_review watch (carried, SEVENTEENTH consecutive new-target pass): STILL no
  cross-surface confirmation (Mistral absent from all OTHER feeds again; news page adds a mistral-3 slug, undated/
  unconfirmed) -> stays manual_review, unresolved. Durable action = this raw transcript + a Honcho routing audit +
  a log.md entry + ONE append_existing section to nvidia-vera-rubin.md + an index.md log-date touch; no other concept
  page changed.
routing:
  - {surface: nvidia-newsroom, route: append_existing, note: "DURABLE DELTA: 'NVIDIA Vera Rubin NVL72 Delivers Leading Performance in MLPerf Inference v6.1 Debut' (09-16 15:00 GMT, https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/ — FIRST Vera Rubin NVL72 preview submission; up to 3.7x throughput vs GB300 NVL72 on Qwen3-VL and 2.5x on DeepSeek-R1; NVFP4 precision + disaggregated prefill/decode + large-scale expert parallelism; 30x vs GB300 on SemiAnalysis AgentX agentic benchmark; DeepSeek-R1 scaled 72->288 GPUs at 99% offline scaling efficiency; NVL72 6th-gen NVLink = 10x packet rate / 3x lower latency vs off-the-shelf Ethernet; partner Nebius also submitted; 19 partners total). Published AFTER the 22:00 KST/13:05 GMT baseline -> genuinely new, first real-silicon measured performance for Vera Rubin. -> append_existing (new MLPerf performance section on nvidia-vera-rubin.md). Also 'Emerald AI, Google and NVIDIA Launch Alliance to Advance Flexible AI Data Centers' (09-16 13:00, https://blogs.nvidia.com/blog/ai-energy-management-alliance/ — formalizes the DSX Flex grid-responsive power-mgmt story already absorbed 09-16 11:00) -> raw_only reinforcement of the existing power-mgmt section. Carry: Manchester Earth-2 (09-16 climate off-axis), Jensen Dreamforce (09-15), AI Infra Summit cluster (absorbed 11:00 09-16)."}
  - {surface: nvidia-dev, route: raw_only, note: "SECOND genuinely-new cross-surface item (raw_only watch): 'Introducing CUDA Rust: Two Tracks for Writing GPU Kernels' (09-16, https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/ — NVIDIA leaning into NATIVE GPU programming in Rust; meta: 'CUDA C++ and CUDA Python are mature... NVIDIA will be growing and maturing CUDA [Rust]'; also on HN frontpage as 'Nvidia announces native GPU programming in Rust' -> cross-surface) + companion 'Translating CUDA Tile Operations from Python to Rust Using Agentic AI' (09-16, https://developer.nvidia.com/blog/translating-cuda-tile-operations-from-python-to-rust-using-agentic-ai/). GPU-toolchain/language-ecosystem shift, on-axis but NOT next-gen-GPU architecture and no natural existing page -> raw_only watch, does not cross new-page bar in one pass. Also 'TensorRT Edge-LLM Completes MLPerf Edge Agentic 6.4x Faster on Jetson AGX Thor' (09-16 20:37, https://developer.nvidia.com/blog/tensorrt-edge-llm-completes-the-mlperf-edge-agentic-benchmark-6-4x-faster-on-jetson-agx-thor/ — edge, mild) + 'How to Use AI Agents to Prepare 3D Scenes for Simulation' (09-16, sim/robotics, off-axis). Carry: NVLink 6 resiliency + Groq 3 LPX (absorbed 11:00 09-16), Dense vs MoE (09-15), FLARE federated-learning (09-15)."}
  - {surface: nvidianews, route: raw_only, note: "https://nvidianews.nvidia.com/releases.xml HTTP 200. Mirror of blogs.nvidia.com — same MLPerf v6.1 debut row (captured under nvidia-newsroom) + Emerald AI/Google alliance + Manchester Earth-2 + Jensen Dreamforce + AI Infra Summit cluster + CUDA-Q quantum (09-14 carry). -> raw_only (durable delta captured under nvidia-newsroom)."}
  - {surface: openai-news, route: raw_only, note: "NEW 09-16 rows all business/consumer/policy, mild/off-axis: 'Reimagining advertising with AI' (09-16 13:00, https://openai.com/index/reimagining-advertising-with-ai), 'How to connect AI usage to business value' (09-16 12:00), 'Our framework for reporting model misalignment' (09-16 17:00, safety/policy, mild), 'How workers are unlocking new ways of working' (09-16 09:00), 'Helping older adults use AI in everyday life' (09-16 16:00). Carry: Fyxer AI-EA (09-14), GPT-6 Astra proof-points. -> raw_only."}
  - {surface: github-changelog, route: raw_only, note: "NEW 09-16: 'Copilot budget increase requests are generally available' (09-16 20:17, https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available — Copilot cost admin, mild), 'Code scanning AI Scan no longer requires CodeQL default setup' (09-16 13:26, https://github.blog/changelog/2026-09-16-code-scanning-ai-scan-no-longer-requires-codeql-default-setup — AI security scan, mild), 'Automate SSO authorization for classic PATs and SSH keys' + 'SCIM user responses include profileUrl' (09-16, org/SSO housekeeping, off-axis). Carry: Enforce GH Advanced Security (09-15), Copilot custom properties (09-15). -> raw_only."}
  - {surface: aws-whatsnew, route: raw_only, note: "NEW 09-16: 'Amazon SageMaker AI now supports serverless model customization for NVIDIA Nemotron 3.5 Lightning' (09-16 22:29, https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sagemaker-ft-nemotron-3-5-lightning/ — serverless fine-tuning, mild on-axis model-serving), 'Amazon WorkSpaces adds support for NVIDIA Blackwell GPU instances' (09-16 17:00, https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-workspaces-nvidia-blackwell-gpu-instances/ — GPU VDI, mild), 'Amazon Corretto 27 GA' (09-17 00:00, JDK, off-axis), 'New AWS experience helps builders get started' (09-16 17:45, dev UX). Carry: cost anomalies widget, SageMaker instance preference lists (09-15). -> raw_only."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED top vs 09-16. Top still 'Your Agent Aced the Task. Will It Do It Again?' (IBM Research, 09-15, https://huggingface.co/blog/ibm-research/altk-evolve-consistency — agent output-consistency eval, mild). Carry: Async GRPO with LoRA (09-10), funes coding-agent-memory (09-03). -> raw_only."}
  - {surface: vercel, route: raw_only, note: "NEW 09-16: 'Mem0 joins the Vercel Marketplace' (09-16 17:00, https://vercel.com/changelog/mem0-joins-the-vercel-marketplace — agent-memory provider on Marketplace, mild on-axis), 'TypeSafe AI's Jev now available on AI Gateway' (09-16 00:00, https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway — the System One / Jev model from 09-15 HN, model-gateway add), 'Secure Compute and Static IP builds start 64% faster' (09-16 17:00), 'Hobby projects retain fewer deployments' (09-16 18:00, storage). Carry: Is Agentic audit-by-site-type (09-16 00:00), Gemini 3.8 Live on AI Gateway (09-15), Delphi 100x/day (09-15). -> raw_only."}
  - {surface: cloudflare, route: raw_only, note: "NEW 09-16: 'When scanners miss the attack: how Cloudflare Client-Side Security protects storefronts' (09-16 20:06, https://blog.cloudflare.com/client-side-security-finds-4-malicious-campaigns/ — client-side security, off durable agent/GPU axis). Carry: stay-discoverable-while-disallowing-AI-training (09-15), Give-every-agent-right-access-to-Workers (09-15 granular agent authz, mild), CASB policies (09-11). -> raw_only."}
  - {surface: google-blog, route: raw_only, note: "NEW 09-16 rows off-axis: 'Search profiles for publishers' (09-16 16:00), 'holiday sales strategies' + 'agentic commerce updates' + 'Rethink 2026' (09-16, ads/commerce), '5 things to know about teens' views on AI' (09-16 15:00, social research), Brazil climate + Chicago Thompson Center (carry). On-axis-mild carry: Gemini 3.8 Live launch (09-15). 'agentic commerce updates' mildly on-axis but consumer-shopping framing. -> raw_only (new rows off/consumer-axis)."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED top vs 09-16. Top still 'Bypassing inference bottlenecks: Retrieve-for-Train' (09-15 20:00, inference/training method, mild). Carry: ToolGrad (09-10). -> raw_only."}
  - {surface: simonwillison, route: raw_only, note: "NEW 09-16: 'Claude Cowork and chat are now one Claude' (09-16 18:09, https://simonwillison.net/2026/Sep/16/one-claude/ — Anthropic product-surface consolidation commentary, mild on-axis), 'Quoting Mustafa Suleyman' (09-16 16:00), datasette 1.0a40 + 0.65.5 (09-16 23:51, his own releases). Carry: Gemini Live audio (09-15). -> raw_only."}
  - {surface: hackernews, route: raw_only, note: "Frontpage rotated. Strongest new on-axis: 'Nvidia announces native GPU programming in Rust' (09-16 11:15, https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/ — CUDA Rust, cross-surface with nvidia-dev, see that surface) + 'HarnessTax: How Much Does the Harness Matter for Coding Agents?' (09-16 22:10, https://harnesstax.github.io/ — coding-agent harness benchmark, on CK's harness/managed-agents axis, mild) + 'OpenSpec - A lightweight and configurable AI spec framework' (09-16 23:06, https://openspec.dev/ — AI spec-driven-dev tool, mild) + 'Training a 4B model to produce 81% faster query plans than Postgres' (09-16 18:50, https://rohanbansal.com/qorl — small-model RL for DB query planning, mild) + 'Breaking the 1.58-bit Barrier for Ternary LLMs' (09-16 20:59, https://arxiv.org/abs/2609.16338 — quantization research, mild). Off-axis: Xiaomi Mimo 2.6 dashboard, Backups Aren't Simple, .NET 11 perf, Factorio RNG, US Strategic Petroleum Reserve, Verus Rust proofs. -> raw_only."}
  - {surface: github-trending, route: raw_only, note: "Same skills/agent/code-review cluster; NO new durable branch -> raw_only. Newly-visible same-axis: google/skills (agent skills, maps to skills/plugins lane), wshobson/agents (agent collection), onyx-dot-app/onyx (RAG/search app), TencentCloud/Octop, volcengine/OpenViking. Carry-axis: anthropics/knowledge-work-plugins, rlaope/oh-my-hermes (Hermes config), alibaba/open-code-review, addyosmani/agent-skills, alphaXiv/OpenResearch, SnailSploit/Claude-Red, Tencent/WeKnora, cline/cline. Off-axis excluded: 666ghj/MiroFish, MakazhanAlpamys/Soup, OpenBMB/VoxCPM, meituan-longcat/LongCat-Video, multimodal-art-projection/YuE, NationalSecurityAgency/ghidra, roboflow/supervision, supabase/supabase, ever-co/ever-gauzy, ankitects/anki, JustVugg/colibri, Lakr233/vphone-cli, abue-ammar/tinycast, jamiepine/voicebox, bobeff/open-source-games."}
  - {surface: docker, route: raw_only, note: "UNCHANGED. No new since 09-08 '6 Benefits of Sandbox Environments'. Agent-sandbox lane already within window. -> raw_only."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED. ZGateway (09-03), Organizational Second Brain (09-02); MTIA 300 / MetaRoCE (08-24) already durable in ai-infra-operating-economics.md. -> raw_only."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml 404); availability fact, consistent 08-02..09-17."}
  - {surface: mistral, route: manual_review, note: "CARRY-FORWARD manual_review watch (SEVENTEENTH consecutive new-target pass, 09-08 22:00 .. 09-17 11:00): 'Mistral makes sovereign open-weight AI to frontier' EUR 3B raise (https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier). News page still shows sovereign/frontier/open-weight family + mistral-x-mozilla (09-16 product, carry) + a mistral-3 slug (undated/unconfirmed) + mistral-ai-and-nvidia-partner slug (NOT confirmed on any NVIDIA surface incl. today's MLPerf debut) + physics-ai-at-mistral + ai-now-summit-2026. STILL no cross-surface confirmation of the EUR 3B raise — Mistral absent from all OTHER collected feeds again. Stays manual_review, unresolved, carried forward. Below ai-infra-operating-economics.md's append bar."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-09-16.md
  - raw/transcripts/interest-signal-collection-11-00-2026-09-16.md
  - concepts/nvidia-vera-rubin.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-09-17)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, official docs, GitHub Trending, NVIDIA developer blog + newsroom + nvidianews
Date: 2026-09-17 (captured ~11:15 KST; on-time 11:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_1100_0917.py` → `.cache/newtarget-2026-09-17-1100/`, parsed with `/tmp/nt_parse_1100_0917.py`; NVIDIA MLPerf + CUDA-Rust article bodies verified with `/tmp/nt_body_0917.py`; `grep` for GitHub Trending / Mistral slugs). No CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), NVIDIA developer blog, NVIDIA newsroom (`blogs.nvidia.com/feed/`), **nvidianews releases** (`nvidianews.nvidia.com/releases.xml`), GitHub Trending (daily + python), Hacker News frontpage, Mistral news (HTML). **Anthropic RSS 404** (`/rss.xml`) — availability fact (consistent 08-02..09-17).
- Baseline: most-recent successful new-target transcript `interest-signal-collection-22-00-2026-09-16.md` (captured ~22:05 KST / 13:05 GMT, reinforcement-only) + `interest-signal-collection-11-00-2026-09-16.md` (which absorbed the AI Infra Summit Vera Rubin cluster) + `concepts/nvidia-vera-rubin.md` + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**ONE GENUINELY-NEW DURABLE DELTA this window → `append_existing` to `concepts/nvidia-vera-rubin.md`.** NVIDIA published the **first Vera Rubin NVL72 MLPerf Inference v6.1 preview results** (blogs.nvidia.com, 09-16 15:00 GMT — **after** the 22:00 KST / 13:05 GMT baseline capture). This is the first real-silicon *measured* performance data for Vera Rubin (the concept page had only spec/roadmap + AI-Infra-Summit power-management detail) and is squarely on CK's explicitly prioritized next-gen-GPU axis. Plus one genuinely-new cross-surface **watch** (CUDA Rust, `raw_only`). Everything else = `raw_only` reinforcement + the carried Mistral `manual_review` watch.

### Durable delta (append_existing → nvidia-vera-rubin.md)
- **`NVIDIA Vera Rubin NVL72 Delivers Leading Performance in MLPerf Inference v6.1 Debut`** (blogs.nvidia.com, 09-16 15:00 GMT) — https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/. **First Vera Rubin NVL72 preview submission.** Up to **3.7× throughput vs GB300 NVL72 on Qwen3-VL** (offline/server/interactive, vLLM + NVIDIA Dynamo) and **2.5× on DeepSeek-R1** (TensorRT-LLM). Full-stack codesign: enhanced Tensor Cores + Transformer Engine accelerate both prefill and decode; **NVFP4** precision shrinks weights/attention/KV-cache; heavy use of **disaggregated serving** (separate prefill/decode) + large-scale **expert parallelism** across MoE layers. On the agentic **SemiAnalysis AgentX** benchmark, Vera Rubin NVL72 delivered **30× GB300 NVL72** in preview. DeepSeek-R1 scaled from 1 rack (72 GPUs) to 4 racks (288 GPUs) at **99% offline scaling efficiency**. NVL72 scale-up domain = 6th-gen NVLink + NVLink Switch → **10× packet rate / 3× lower latency vs off-the-shelf Ethernet**. Partner **Nebius** also submitted Vera Rubin NVL72 preview results; 19 partners total (8 on multi-node Blackwell NVL72).

### New cross-surface watch (raw_only)
- **CUDA Rust — native GPU programming in Rust** (developer.nvidia.com, 09-16) — https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/. NVIDIA is **leaning into native GPU programming in Rust** ("CUDA C++ and CUDA Python are mature, enterprise-grade toolchains, and NVIDIA will be growing and maturing CUDA [Rust]"). Companion post: `Translating CUDA Tile Operations from Python to Rust Using Agentic AI` (https://developer.nvidia.com/blog/translating-cuda-tile-operations-from-python-to-rust-using-agentic-ai/). **Cross-surface** — also the HN frontpage headline `Nvidia announces native GPU programming in Rust`. A GPU-toolchain/language-ecosystem shift — on-axis but **not next-gen-GPU architecture** and no natural existing concept page → `raw_only` watch; does not cross the new-page bar in one pass.

### Everything else = raw_only reinforcement (new-but-mild / unchanged since 09-16 22:00)
- **NVIDIA (supporting):** `Emerald AI, Google and NVIDIA Launch Alliance to Advance Flexible AI Data Centers` (09-16 13:00, https://blogs.nvidia.com/blog/ai-energy-management-alliance/ — formalizes the **DSX Flex** grid-responsive power-management story already absorbed 09-16 11:00) + `TensorRT Edge-LLM 6.4× faster on Jetson AGX Thor` (09-16 20:37, edge). No new Rubin Ultra / Vera CPU / NVL576 / Hot Chips / GTC spec item.
- **OpenAI:** new 09-16 business/consumer/policy posts (reimagining advertising with AI, connect AI usage to business value, model-misalignment reporting framework, workers/older-adults) — mild/off-axis; Fyxer + GPT-6 Astra carry.
- **GitHub changelog:** Copilot budget-increase GA (09-16), Code scanning AI Scan drops CodeQL requirement (09-16), SSO/SCIM housekeeping — mild.
- **AWS:** SageMaker serverless customization for NVIDIA Nemotron 3.5 Lightning (09-16, mild on-axis), WorkSpaces Blackwell GPU instances (09-16), Corretto 27 GA — mild.
- **Vercel:** Mem0 agent-memory joins Marketplace (09-16, mild on-axis), TypeSafe AI Jev on AI Gateway (09-16), Secure Compute builds 64% faster (09-16).
- **Cloudflare:** Client-Side Security storefront protection (09-16, off-axis); granular agent authz (09-15) carry.
- **Google blog / Research:** new 09-16 off/consumer-axis (search profiles, holiday ads/commerce, teens+AI); Gemini 3.8 Live launch + Retrieve-for-Train (09-15) carry.
- **Simon Willison:** `Claude Cowork and chat are now one Claude` (09-16, mild) + datasette 1.0a40/0.65.5.
- **Hacker News:** on-axis-mild `HarnessTax: How Much Does the Harness Matter for Coding Agents?` (09-16) + `OpenSpec AI spec framework` (09-16) + `Training a 4B model 81% faster query plans than Postgres / qorl` (09-16) + `Breaking the 1.58-bit Barrier for Ternary LLMs` (09-16); CUDA Rust is the strongest (see watch above).
- **GitHub Trending:** same skills/agent/code-review cluster; new-ish `google/skills`, `wshobson/agents`, `onyx-dot-app/onyx` all map to existing lanes → no new durable branch.
- **Docker / Meta / HuggingFace:** unchanged.
- **Mistral €3B `manual_review` watch (carried, 17th consecutive pass): STILL no cross-surface confirmation** — Mistral absent from every other feed again; news page adds an undated `mistral-3` slug → stays `manual_review`, unresolved.

**Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry + ONE `append_existing` section to `concepts/nvidia-vera-rubin.md` + an `index.md` log-date touch; no other concept page changed.**

## 1) NVIDIA — Vera Rubin NVL72 MLPerf Inference v6.1 debut (DURABLE, append_existing)
Source URL: https://blogs.nvidia.com/feed/ + https://developer.nvidia.com/blog/feed/ + https://nvidianews.nvidia.com/releases.xml
- `[2026-09-16 15:00 GMT] NVIDIA Vera Rubin NVL72 Delivers Leading Performance in MLPerf Inference v6.1 Debut` — https://blogs.nvidia.com/blog/vera-rubin-nvl72-mlperf-inference/
- `[2026-09-16 13:00 GMT] Emerald AI, Google and NVIDIA Launch Alliance to Advance Flexible AI Data Centers` — https://blogs.nvidia.com/blog/ai-energy-management-alliance/ (reinforces DSX Flex power-mgmt, raw_only)
- `[2026-09-16 20:37 GMT] TensorRT Edge-LLM Completes the MLPerf Edge Agentic Benchmark 6.4x Faster on Jetson AGX Thor` — https://developer.nvidia.com/blog/tensorrt-edge-llm-completes-the-mlperf-edge-agentic-benchmark-6-4x-faster-on-jetson-agx-thor/ (edge, mild)

## 2) NVIDIA CUDA Rust — native GPU programming in Rust (NEW cross-surface watch, raw_only)
Source URL: https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/ + https://news.ycombinator.com/rss
- `[2026-09-16] Introducing CUDA Rust: Two Tracks for Writing GPU Kernels` — https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/
- `[2026-09-16] Translating CUDA Tile Operations from Python to Rust Using Agentic AI` — https://developer.nvidia.com/blog/translating-cuda-tile-operations-from-python-to-rust-using-agentic-ai/
- `[2026-09-16 11:15] Nvidia announces native GPU programming in Rust` (HN frontpage, links to the CUDA Rust post) — https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/

## 3) Other on-axis-mild rows (raw_only)
### OpenAI
- `[2026-09-16 13:00] Reimagining advertising with AI` — https://openai.com/index/reimagining-advertising-with-ai
- `[2026-09-16 17:00] Our framework for reporting model misalignment` — https://openai.com/index/model-misalignment-reporting-framework
- `[2026-09-14 12:00] How Fyxer built an AI executive assistant people trust` — https://openai.com/index/fyxer (carry)
### GitHub changelog
- `[2026-09-16 20:17] Copilot budget increase requests are generally available` — https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available
- `[2026-09-16 13:26] Code scanning AI Scan no longer requires CodeQL default setup` — https://github.blog/changelog/2026-09-16-code-scanning-ai-scan-no-longer-requires-codeql-default-setup
### AWS What's New
- `[2026-09-16 22:29] Amazon SageMaker AI now supports serverless model customization for NVIDIA Nemotron 3.5 Lightning` — https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sagemaker-ft-nemotron-3-5-lightning/
- `[2026-09-16 17:00] Amazon WorkSpaces adds support for NVIDIA Blackwell GPU instances` — https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-workspaces-nvidia-blackwell-gpu-instances/
### Vercel
- `[2026-09-16 17:00] Mem0 joins the Vercel Marketplace` — https://vercel.com/changelog/mem0-joins-the-vercel-marketplace (agent-memory, mild on-axis)
- `[2026-09-16 00:00] TypeSafe AI's Jev now available on AI Gateway` — https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway
### Simon Willison
- `[2026-09-16 18:09] Claude Cowork and chat are now one Claude` — https://simonwillison.net/2026/Sep/16/one-claude/

## 4) Hacker News — frontpage rotation, mild on-axis (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-09-16 22:10] HarnessTax: How Much Does the Harness Matter for Coding Agents?` — https://harnesstax.github.io/ (coding-agent harness benchmark, on CK's harness/managed-agents axis, mild)
- `[2026-09-16 23:06] OpenSpec – A lightweight and configurable AI spec framework` — https://openspec.dev/ (spec-driven-dev, mild)
- `[2026-09-16 18:50] Training a 4B model to produce 81% faster query plans than Postgres` — https://rohanbansal.com/qorl (small-model RL for DB query planning, mild)
- `[2026-09-16 20:59] Breaking the 1.58-bit Barrier for Ternary LLMs` — https://arxiv.org/abs/2609.16338 (quantization research, mild)
- Off-axis: Xiaomi Mimo 2.6 dashboard, Backups Aren't Simple, .NET 11 perf, Factorio RNG, US Strategic Petroleum Reserve, Verus Rust proofs.

## 5) GitHub Trending — same cluster; no new durable branch (raw_only)
Source URL: https://github.com/trending?since=daily + https://github.com/trending/python?since=daily
- Newly-visible same-axis: `google/skills` (agent skills), `wshobson/agents`, `onyx-dot-app/onyx` (RAG/search app), `TencentCloud/Octop`, `volcengine/OpenViking`.
- Carry-axis: `anthropics/knowledge-work-plugins`, `rlaope/oh-my-hermes` (Hermes config), `alibaba/open-code-review`, `addyosmani/agent-skills`, `alphaXiv/OpenResearch`, `SnailSploit/Claude-Red`, `Tencent/WeKnora`, `cline/cline`.
- Off-axis excluded: `666ghj/MiroFish`, `MakazhanAlpamys/Soup`, `OpenBMB/VoxCPM`, `meituan-longcat/LongCat-Video`, `multimodal-art-projection/YuE`, `NationalSecurityAgency/ghidra`, `roboflow/supervision`, `supabase/supabase`, `ever-co/ever-gauzy`, `ankitects/anki`, `JustVugg/colibri`, `Lakr233/vphone-cli`, `abue-ammar/tinycast`, `jamiepine/voicebox`, `bobeff/open-source-games`.

## 6) Mistral €3B open-weight raise — manual_review carried (17th consecutive pass)
Source URL: https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier
- News page still lists the sovereign/frontier/open-weight family of slugs + `mistral-x-mozilla` (09-16 product, carry) + an undated `mistral-3` slug + `mistral-ai-and-nvidia-partner-to-accelerate-open-frontier-models` (NOT confirmed on any NVIDIA surface including today's MLPerf debut) + `introducing-physics-ai-at-mistral` + `ai-now-summit-2026`. STILL no cross-surface confirmation of the €3B raise — Mistral absent from all OTHER collected feeds again → stays `manual_review`, unresolved, carried forward, below `ai-infra-operating-economics.md`'s append bar.

## Filtering notes
- Excluded as noise/off-axis: HF training-infra/image-UI; Google consumer/ads/commerce/climate/real-estate (search profiles, holiday sales, teens+AI, Brazil, Chicago); Google Research bio/neuro/earth; AWS routine-infra (Corretto, Client VPN MacOS, Connect metrics, MediaTailor, ECS S3); Cloudflare client-side security; HN off-axis frontpage (Xiaomi Mimo, backups, .NET 11, Factorio, Petroleum Reserve, Verus); NVIDIA healthcare/robotics/AV/climate (Manchester Earth-2, Children's Hospital, 3D-scene sim); Simon Willison personal; off-axis trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — 08:00/19:00 jobs own them.

## Why this raw exists
Evidence store for the 2026-09-17 11:00 new-target pass. **ONE genuinely-new durable delta → `append_existing` to `concepts/nvidia-vera-rubin.md`:** NVIDIA's first Vera Rubin NVL72 MLPerf Inference v6.1 preview results (09-16 15:00 GMT, after the 22:00 KST baseline) — up to 3.7× vs GB300 on Qwen3-VL / 2.5× on DeepSeek-R1 / 30× on SemiAnalysis AgentX, NVFP4 + disaggregated serving + expert parallelism, 99% scaling 72→288 GPUs, NVLink 6 10× packet rate / 3× lower latency vs Ethernet, Nebius partner submission — the first real-silicon measured performance for Vera Rubin, on CK's explicitly prioritized next-gen-GPU axis. Plus a `raw_only` cross-surface watch: **NVIDIA CUDA Rust** native GPU programming in Rust (developer.nvidia.com + HN frontpage), a GPU-toolchain/language shift with no natural existing page. Everything else = `raw_only` reinforcement (OpenAI 09-16 business/policy posts; GitHub/AWS/Vercel/Cloudflare/Google 09-16 mild rows; HN HarnessTax/OpenSpec/qorl/ternary-LLM; GitHub Trending same skills/agent cluster) + the carried Mistral €3B `manual_review` watch (17th consecutive pass, still no cross-surface confirmation). Anthropic RSS 404 = availability fact. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry + one `append_existing` section to `nvidia-vera-rubin.md` + an `index.md` log-date touch; no other concept page changed.
