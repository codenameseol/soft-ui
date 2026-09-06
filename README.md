# soft-ui

<details open><summary>언어 전환 · Language switch</summary>

한국어를 먼저 쓰고 영어를 바로 병기합니다. GitHub Markdown은 script/canvas를 실행하지 않으므로 native disclosure를 사용하며, React demo에는 실제 canvas 토글을 제공합니다. / Korean comes first with English immediately paired. GitHub Markdown cannot execute script/canvas, so the React demo provides the real canvas toggle.

</details>

## 조금 더 부드러운 기본값 · Softer defaults

sharp-edged defaults보다 조금 더 부드럽고 다정한 세 가지 React 컴포넌트 키트입니다.
A tiny React kit of three components that feels a little softer and kinder than sharp-edged defaults.

![TypeScript](https://img.shields.io/badge/TypeScript-7.x-3178C6?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)

## 포함된 것 · What is included

- `SoftButton` — 둥근 primary/outline button / a rounded primary or outline button
- `Tag` — muted/wine tone label / a small tone-aware label
- `NoteCard` — title, body, optional footer / a card with title, body, and optional footer

공유 토큰은 `paper / ink / wine / muted / line`입니다. 무거운 UI framework는 사용하지 않습니다.
The shared tokens are `paper / ink / wine / muted / line`; there is no heavy UI framework underneath.

## 데모 · Demo

```bash
npm install
npm run dev
```

`demo/`에서 세 컴포넌트를 한 화면에서 확인합니다.
The `demo/` app shows all three components together on one screen.

## 빌드·테스트 · Build and test

```bash
npm run build
npm test
```

빌드 산출물은 ESM/CJS bundle, type declarations, CSS입니다.
The build emits ESM/CJS bundles, type declarations, and CSS.

## 디자인 언어 · Design language

Paper 배경, ink 텍스트, wine accent, muted 설명, hairline border를 모든 화면에서 공유합니다.
Every surface shares a paper background, ink text, wine accent, muted copy, and hairline borders.

## License

MIT © 2026 Seol
