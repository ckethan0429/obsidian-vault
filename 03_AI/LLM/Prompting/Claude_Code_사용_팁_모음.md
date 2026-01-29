# Claude Code 사용 팁 모음

## 팁(요약)
1. `!` 프리픽스로 터미널 즉시 실행
   - 예: `!git status`
   - 모델 추론 없이 bash 실행 → 대기 시간/토큰 절약, 개발 흐름 유지

2. `Esc` 두 번으로 이전 상태 되돌리기
   - 대화/코드/둘 다를 되감아 실험을 부담 없이 반복

3. API에서 Extended Thinking 켜기
   - 예시:
     - `thinking: { type: "enabled", budget_tokens: 5000 }`
   - reasoning(추론) 단계를 thinking blocks로 먼저 보여주고 최종 답변 출력

4. `--continue` / `--resume` 로 세션 이어가기
   - 터미널 종료/노트북 꺼짐 이후에도 직전 대화/세션을 이어 작업

5. `#` 프리픽스로 메모리 바로 저장
   - 예: `# Always use bun instead of npm`
   - 파일을 열지 않고도 선호/규칙을 메모리에 저장해 지속 반영

6. `/vim` 으로 프롬프트를 vim 스타일로 편집
   - 마우스 없이 빠르게 문장 수정(h/j/k/l, ciw, dd 등)

7. `-p` 옵션으로 headless 모드
   - 대화형 UI 없이 명령처럼 실행 → 스크립트/CI/CD에 적합

## 관련 링크
- https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/
- https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built
