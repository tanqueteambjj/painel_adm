# Guia Passo a Passo: Deploy no Vercel via GitHub

Este guia explica como fazer o deploy do seu Painel Administrativo no Vercel, utilizando o GitHub como repositório de código.

## Passo 1: Preparar o Repositório no GitHub

1. Se você ainda não tem uma conta, crie uma em [github.com](https://github.com).
2. Faça login no GitHub e clique no botão **"New"** (ou no ícone de `+` no canto superior direito e selecione "New repository").
3. Dê um nome ao seu repositório (ex: `tanque-team-admin`).
4. Escolha se o repositório será **Public** (Público) ou **Private** (Privado). Para sistemas administrativos, é altamente recomendável escolher **Private**.
5. Clique em **"Create repository"**.

## Passo 2: Enviar o Código para o GitHub

Se você estiver usando o terminal/linha de comando na pasta do seu projeto:

```bash
# Inicialize o repositório git (se ainda não estiver inicializado)
git init

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "Commit inicial: Painel Administrativo"

# Mude a branch para main
git branch -M main

# Conecte ao seu repositório remoto (substitua a URL pela do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/tanque-team-admin.git

# Envie o código para o GitHub
git push -u origin main
```

*Dica: Se você não tem experiência com linha de comando, pode usar o GitHub Desktop ou arrastar e soltar os arquivos diretamente na página do repositório no GitHub.*

## Passo 3: Criar Conta e Conectar no Vercel

1. Acesse [vercel.com](https://vercel.com) e clique em **"Sign Up"**.
2. Escolha a opção **"Continue with GitHub"**. Isso conectará automaticamente sua conta do Vercel à sua conta do GitHub.
3. Autorize o Vercel a acessar seus repositórios do GitHub.

## Passo 4: Importar o Projeto no Vercel

1. No painel do Vercel (Dashboard), clique no botão **"Add New..."** e selecione **"Project"**.
2. Na seção "Import Git Repository", você verá uma lista dos seus repositórios do GitHub.
3. Encontre o repositório que você criou (`tanque-team-admin`) e clique no botão **"Import"**.

## Passo 5: Configurar o Deploy

1. **Project Name:** O Vercel sugerirá um nome baseado no repositório. Você pode manter ou alterar.
2. **Framework Preset:** O Vercel geralmente detecta automaticamente. Como o projeto usa Next.js (ou apenas HTML/JS estático), ele deve detectar "Next.js" ou "Other". Se for apenas o `index.html` estático, "Other" funciona perfeitamente.
3. **Root Directory:** Mantenha como `./` (raiz).
4. **Build and Output Settings:** Deixe as configurações padrão. O Vercel sabe como lidar com projetos estáticos e Next.js.
5. **Environment Variables (Variáveis de Ambiente):** 
   - Se o seu projeto utiliza chaves de API do Firebase ou outras configurações secretas que não estão no código, adicione-as aqui.
   - Nome (Key) e Valor (Value).
6. Clique no botão **"Deploy"**.

## Passo 6: Aguardar o Build e Acessar

1. O Vercel começará a construir (build) o seu projeto. Você verá uma tela com o progresso.
2. Isso geralmente leva menos de um minuto para projetos simples.
3. Quando terminar, você verá uma tela de "Congratulations!" com uma prévia do seu site.
4. Clique no botão **"Continue to Dashboard"**.
5. No dashboard do projeto, você verá o botão **"Visit"** e o link (URL) gerado pelo Vercel (ex: `tanque-team-admin.vercel.app`).
6. **Pronto!** Seu painel administrativo está online e acessível através desse link.

## Atualizações Futuras (Integração Contínua)

A grande vantagem de usar o Vercel com o GitHub é a **Integração Contínua (CI/CD)**. 

Sempre que você fizer uma alteração no código e enviar (push) para a branch `main` no GitHub, o Vercel detectará a mudança automaticamente e iniciará um novo deploy. Em poucos segundos, suas atualizações estarão no ar sem que você precise fazer nada no painel do Vercel.
