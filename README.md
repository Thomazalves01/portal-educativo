# ⚡ Portal Educacional de Eletroeletrônica — Resistores e a Lei de Ohm

> Módulo educacional interativo e responsivo sobre Resistores e a Lei de Ohm, desenvolvido para a disciplina de Eletroeletrônica.

---

## 📌 Sobre o Projeto

O **Portal Educacional de Eletroeletrônica** é uma plataforma colaborativa desenvolvida para reunir conceitos fundamentais de circuitos elétricos e eletrónicos. Este repositório contém a implementação completa do módulo dedicado aos **Resistores e à Lei de Ohm**, estruturado estritamente segundo o sistema de *grid* e os padrões visuais fornecidos pela disciplina.

---

## 🎨 Identidade Visual e Estritura CSS

O projeto utiliza o sistema de design e regras de layout do ficheiro de estilos oficial (`css/style.css`):

| Elemento Visual | Especificação / Valor |
| :--- | :--- |
| **Cor Primária** | `#1769aa` (Azul Tech) |
| **Cor Secundária** | `#475569` (Cinza Escuro) |
| **Cor de Destaque** | `#0f766e` (Verde Petróleo) |
| **Fundo da Página** | `#f5f7fb` (Cinza Claro) |
| **Superfície dos Cartões** | `#ffffff` (Branco) |
| **Grelha Principal** | Layout de 12 Colunas (`.col-4` para Sidebar e `.col-8` para Conteúdo) |
| **Tipografia Base** | `system-ui`, `-apple-system`, `sans-serif` |

---

## 📂 Estrutura de Ficheiros

```text
projeto-endrew/
├── css/
│   └── style.css            # Estilos CSS oficiais do professor (Grelha de 12 colunas)
├── js/
│   └── quiz.js              # Lógica de validação dinâmica das respostas do Quiz
├── assets/
│   └── images/              # Ficheiros e diagramas visuais
│       ├── imagem.png       # Figura 1: Componentes Resistores
│       ├── imagem (1).png   # Figura 2: Tabela do Código de Cores
│       └── imagem (2).png   # Figura 3: Triângulo da Lei de Ohm
├── index.html               # Página do portal (Header, Sidebar, Main e Footer)
└── README.md                # Documentação do repositório
