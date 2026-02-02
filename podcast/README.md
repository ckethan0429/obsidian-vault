# Podcast (GitHub Releases)

This folder contains episode scripts and the GitHub Actions workflow to generate TTS audio with ElevenLabs and publish the MP3 files as **GitHub Releases**.

## How it works
- Put scripts in `podcast/scripts/`
- Run the workflow **Podcast TTS → Release** (manual trigger)
- It generates:
  - `ep01_ko.mp3` (Korean, male voice)
  - `ep01_en.mp3` (English, female voice)
- Uploads them to a GitHub Release

## Secrets
Set in repo settings → Secrets and variables → Actions:
- `ELEVENLABS_API_KEY`

## Optional variables (workflow_dispatch inputs)
You can override voice selection by passing voice IDs.
