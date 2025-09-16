# Repositório para aprender Next.js e registrar minhas anotações e testes.

## 📝 Anotações

### 16/09/25

- ### 1ª anotação - Estrutura do Next.JS
- **O que entendi**: O Next possui uma estrutura quase fixa, que muda conforme decisões de usar TypeScript ou não, ou usar um modelo mais antigo. Ainda assim, possui elementos básicos como o "layout" que aplica uma estrutura comum para todas as "pages" que estão na mesma raíz (também chamado de rota).

    No exemplo, imagine um programa que possui páginas como "about" e "dashboard".
    
     *Exemplo de código*:
  ```javascript
  app/
    ┣ layout.tsx         ← layout global do app (envolve todas as páginas)
    ┣ page.tsx           ← página da rota "/"
    ┣ about/
    ┃ ┗ page.tsx         ← página da rota "/about"
    ┣ dashboard/
    ┃ ┣ layout.tsx       ← layout específico da rota "/dashboard"
    ┃ ┗ page.tsx         ← página da rota "/dashboard"
    ┣ styles/            ← CSS Modules ou outros arquivos de estilo
    ┗ components/        ← componentes React reutilizáveis
  ```

## Modelo de Anotação

- ### *(nº da anotação)* anotação - *(nome da anotação)*
- **O que entendi**: *Descrição breve.*

  *Exemplo de código*:
  ```javascript
  // código aqui
  ```

## Autor

<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="20" td align="center"/> - [Nicolas Silva](https://www.linkedin.com/in/nicolas-silva-b53b16327/)