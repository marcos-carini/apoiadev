## 💡 Sobre o Projeto

O **Apoia.Dev** foi criado para fortalecer a comunidade de desenvolvimento, oferecendo uma maneira direta para que desenvolvedores de software, criadores de conteúdo e mantenedores de projetos *open source* possam ser recompensados por seu trabalho.

Usuários se autenticam com suas contas do GitHub, configuram uma página de perfil personalizada e podem receber doações de qualquer pessoa. Toda a gestão financeira é processada de forma segura pelo **Stripe**, que também gerencia o *split* do pagamento, garantindo que uma pequena taxa seja revertida para a manutenção e evolução da plataforma.

## ✨ Funcionalidades Principais

* 🔐 **Autenticação com GitHub:** Login rápido e seguro.
* 👤 **Perfil Personalizável:** Edite seu nome de usuário, URL e descrição para que todos saibam quem você é.
* 📊 **Dashboard de Doações:** Visualize todas as doações recebidas em um painel simples e intuitivo.
* 💸 **Pagamentos Seguros com Stripe:** Processamento de pagamentos confiável e seguro.
* 🤝 **Split de Pagamentos:** Divisão automática de valores entre o criador e a plataforma, gerenciado pelo Stripe Connect.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias de ponta para garantir uma experiência moderna e performática:

* **Framework:** [Next.js](https://nextjs.org/) (com App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) e [Shadcn/ui](https://ui.shadcn.com/)
* **Gerenciamento de Estado de Servidor:** [TanStack React Query](https://tanstack.com/query/latest)
* **Backend & Lógica de Servidor:** Next.js Server Actions e API Routes
* **Pagamentos:** [Stripe](https://stripe.com/)

### Pré-requisitos

Para continuar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* A CLI do [Stripe](https://stripe.com/docs/stripe-cli) para testar os webhooks localmente.
