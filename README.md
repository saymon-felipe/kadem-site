# kadem-site

Site público de marketing do Kadem (landing, planos, suporte, termos, privacidade, cookies). Não é um app autenticado — é a vitrine pública.

Documentação compartilhada do workspace: [`kadem-ai-context/docs/public-site.md`](../kadem-ai-context/docs/public-site.md).

## Stack

- React 19 + TypeScript, build com Vite.
- Roteamento: `react-router-dom` (`BrowserRouter`) em `App.tsx`.
- Estilo: Tailwind carregado via CDN em `index.html` (não integrado ao build do Vite — não há `tailwind.config.js`), Font Awesome e Google Fonts também via CDN.
- `axios` para HTTP — único uso hoje é `services/api.ts`, consumido por `components/AnalyticsTracker.tsx` para reportar pageviews ao backend (`kadem-core`).

## Estrutura

- `pages/` — `Home.tsx`, `Plans.tsx`, `Support.tsx`, `Terms.tsx`, `Privacy.tsx`, `Cookies.tsx`.
- `components/` — `Navbar.tsx`, `Footer.tsx`, `Button.tsx`, `ScrollToTopButton.tsx`, `AnalyticsTracker.tsx`.
- `constants.ts` — conteúdo estático de marketing (planos, depoimentos, FAQ), sem segredos.

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Variáveis de ambiente

| Variável | Função |
|---|---|
| `VITE_API_URL` | URL da API (`kadem-core`) usada pelo `AnalyticsTracker` para registrar pageviews. |

Não injete segredos no bundle — apenas variáveis `VITE_*` públicas são permitidas (ver `kadem-core/docs/public-site.md`).

## Deploy

`public/_redirects` (`/index.html 200`) indica hospedagem estilo Netlify com fallback de SPA. Confirme refresh direto em `/`, `/plans` e `/support` após o deploy.

## Observações

- Não há suíte de testes nem lint configurados neste projeto.
- A dependência `@vueup/vue-quill` no `package.json` não é usada em nenhum lugar do código (é uma lib para Vue, projeto é React) — candidata a remoção, ver `kadem-ai-context/docs/known-issues.md`.
