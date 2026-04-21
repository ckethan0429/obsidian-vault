# I Replaced Karpathy's LLM Wiki with Something That Actually Works

- Source: https://x.com/ArtemXTech/status/2045912259210485815
- Author: Artem Zhutov (@ArtemXTech)
- Published: 2026-04-20 02:07 AM
- Captured: 2026-04-21
- Type: X article / long-form post

## Extracted text

The top comment on the biggest LLM wiki video says it's "largely worthless for most people." The author wanted to know if that is true and used Ray Dalio's decision-making sources as a side-by-side test case.

### Karpathy's wiki architecture
- Raw sources: YouTube transcripts, articles, PDFs
- Wiki layer: Claude reads each source, writes summaries, and extracts people and concepts into pages
- Schema file: tells Claude how the wiki is organized
- Index and entity pages: make the wiki queryable and navigable as a graph

### Where the wiki breaks
- 19 sources were ingested in parallel in about 20 minutes
- 10 questions were asked against the wiki
- Claude had to read the full transcripts to answer each question
- One question cost about 44,000 tokens
- The author argues this becomes expensive fast and runs into token limits

### NotebookLM comparison
- NotebookLM could ingest 50 sources quickly because ingestion is embedding-based
- Answers came back in about a minute per question
- Responses included citations back to the transcripts
- The author argues NotebookLM is much cheaper and faster for broad question answering

### Main critique
- A wiki gives summaries and an index, but it does not directly connect knowledge to real-world action
- The author argues the wiki is still just a place to ask questions unless it is operationalized

### What he does instead
- Create skills from the knowledge
- Integrate those skills into daily routines
- Run the skills inside those routines

He gives a Dalio-based decision skill as an example:
- Know your goals
- Don't tolerate problems
- Diagnose root causes
- Design a plan
- Execute the plan

He also mentions daily reflection prompts and weekly review questions about repeated problems.

### Where the wiki still shines
- Deep research
- PhD-level work
- Team wikis
- Competitive analysis
- Cases where high accuracy matters more than speed

### Broader takeaway
For broad research and fast citation-backed Q&A, NotebookLM is the better tool.
For deep, durable synthesis and long-term knowledge infrastructure, the wiki still makes sense.

The article ends by pointing to a NotebookLM skill and a walkthrough video.
