# Agent Instructions

O contexto de IA deste workspace (documentação técnica e skills operacionais) vive em um repositório separado: `kadem-ai-context/`, irmão deste projeto.

Leia estes arquivos antes de modificar o site público:

1. `D:/Workspace/ws-github/kadem/kadem-ai-context/AGENTS.md`
2. `D:/Workspace/ws-github/kadem/kadem-ai-context/docs/README.md`
3. `D:/Workspace/ws-github/kadem/kadem-ai-context/docs/workspace-overview.md`
4. `D:/Workspace/ws-github/kadem/kadem-ai-context/docs/public-site.md`
5. `D:/Workspace/ws-github/kadem/kadem-ai-context/docs/engineering-conventions.md`

Iteração:

- Novas instruções de projeto devem ser atualizadas em `kadem-ai-context/docs/`, criando e/ou alterando arquivos existentes — não crie documentação técnica dentro deste repositório (`kadem-site`).
- `kadem-ai-context` é commitado automaticamente quando alterado (skill `context-commit`). O push dele só é feito depois que o commit de origem estiver em `origin/main` deste projeto, que não tem `dev` (condições na skill); fora disso, nunca dê `git push` nele sem o usuário pedir.

Regra de trabalho:

- Se houver conflito entre docs e código atual, leia o código, trate os docs como guia e atualize a documentação no mesmo pacote quando a divergência ficar clara.
