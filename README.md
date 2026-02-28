# Bendinelli Gestora - Site Institucional

Projeto React + Vite da pagina institucional da Bendinelli.

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Rodar localmente

1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse:
   `http://localhost:3000`

## Build de producao

```bash
npm run build
```

Os arquivos finais serao gerados em `dist/`.

## Deploy na Vercel

1. Suba este repositorio no GitHub/GitLab/Bitbucket.
2. Na Vercel, clique em **Add New Project** e importe o repositorio.
3. Confirme as configuracoes:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**.

As rotas ja estao configuradas para SPA em `vercel.json`.
