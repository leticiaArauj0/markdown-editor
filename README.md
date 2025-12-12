# 📝 Markdown Editor

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

> 🔗 **Acesse o projeto online:** [markdown-editor-bay-zeta.vercel.app](https://markdown-editor-bay-zeta.vercel.app/)

Um editor de Markdown funcional e responsivo. O projeto permite criar, editar, gerenciar e excluir documentos Markdown com persistência de dados local e suporte a temas (Dark/Light).

## Funcionalidades

### 🚀 Core
- **CRUD Completo:** Criação, Leitura, Atualização e Exclusão de documentos.
- **Persistência de Dados:** Todos os documentos são salvos automaticamente no `localStorage` do navegador.
- **Renomeação Inline:** Permite renomear documentos diretamente na listagem da Home.
- **Gerenciamento de Estado:** Uso da **Context API** para gerenciar documentos globalmente.

### ✍️ Editor
- **Split View (Desktop):** Edição e pré-visualização lado a lado em tempo real.
- **Toolbar de Formatação:** Botões para inserir Negrito, Itálico, Títulos, Listas, Códigos e Links.
- **Atalhos de Teclado:** Suporte para produtividade (veja tabela abaixo).
- **Auto-Save:** Feedback visual de salvamento automático.

### 🎨 UI/UX
- **Tema Dark/Light:** Alternância de tema com persistência da preferência do usuário.
- **Responsividade Total:** Layout adaptável para Desktop, Tablet e Mobile.
- **Sidebar Responsiva:** Menu lateral estilo "Drawer/Hambúrguer".

## 🛠 Tecnologias Utilizadas

- **Core:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Estilização:** CSS Modules (CSS puro escopado)
- **Roteamento:** [React Router DOM](https://reactrouter.com/)
- **Renderização Markdown:** [React Markdown](https://github.com/remarkjs/react-markdown)
- **Ícones:** [Phosphor Icons](https://phosphoricons.com/)
- **Utilitários:** `uuid` (Geração de IDs únicos)

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
| :--- | :--- |
| `Ctrl` + `B` | **Negrito** |
| `Ctrl` + `I` | *Itálico* |
| `Ctrl` + `H` | # Título |
| `Ctrl` + `U` | - Lista |
| `Ctrl` + `J` | `Código` |
| `Ctrl` + `K` | [Link](url) |

## 🚀 Como rodar o projeto

Pré-requisitos: Você precisa ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/markdown-editor.git](https://github.com/seu-usuario/markdown-editor.git)

# 2. Entre na pasta do projeto
cd markdown-editor

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo de desenvolvimento
npm run dev
