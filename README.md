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

- ### 2ª anotação - CSS Modules
- **O que entendi**: Aparentemente, é comum nesses frameworks o uso de CSS Modules, completamente diferente do HTML comum que aplica o CSS na aplicação inteira. É possível chamar o CSS de forma global, criando um diretório "/globals" por exemplo e exportando no layout, que aplicará a todas as telas que estão na mesma rota. 


    Entretanto, conforme a componentização é frequentemente aplicada na utilização de ferramentas como o Next, é comum criar um CSS Module para cada componente.

  *Exemplo de código*:
  ```javascript
  /my-next-app
    ├─ /app
    │   ├─ page.tsx
    │   └─ /components
    │       ├─ Button.tsx
    │       └─ Button.module.css
  ```

  ```css
  .button {
    background-color: #0070f3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  .button:hover {
    background-color: #0051a2;
  }

  ```

  ```javascript
    import React from 'react';
    import styles from './Button.module.css';

    type ButtonProps = {
    text: string;
    onClick?: () => void;
    };

    const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
        {text}
        </button>
    );
    };

    export default Button;
  ```

- ### 3ª anotação - Client Component vs Server Component
- **O que entendi**: Por padrão, o Next.js deixa todo componente ou tela criado como Server Component. Isso significa que tudo é carregado do lado do servidor, sem interferência com o usuário. Por outro lado, temos Client Components, que devem ser utilizados principalmente para fazer chamadas de estados (que possibilitam que dados sejam mudados em tempo real).

    O exemplo que eu trouxe está escrito no próprio projeto desse repositório, e é possível ver em "/app/components/Navegar.tsx", onde eu precisava fazer a navegação entre telas, e o Next.js exige que eu faça isso apenas com Client Component, para ser aplicado o efeito de SPA (Single Page Application) no projeto.

  *Exemplo de código*:
  ```typescript
  'use client' // virou um client component

    import Link from 'next/link'

    export default function BotaoNavegar({route}: NavegarProps) {

        return(
            <Link href={"/" + route}>
            <button>Ir para {route[0].toUpperCase() + route.substring(1)}</button>
            </Link>
        )

    }
  ```

- ### 4ª anotação - TypeScript vs JavaScript
- **O que entendi**: Enquanto fui pesquisando e vendo exemplos de formas como usar o framework do Next.JS, achei comum o uso de TypeScript nos códigos. E ao fazer testes rápidos para compreender se era melhor ou não, achei fascinante como ao apenas mudar o nome dos arquivos de "js" para "ts", o Next já fez todo o build para eu utilizar TypeScript. 

    Vendo o código na prática, coisas mínimas mudam ao utilizar TypeScript invés de JavaScript. Ao pesquisar a diferença, entendi que o TS suporta JS plenamente, apenas adiciona funcionalidades a mais como a tipagem estática opcional. Ou seja, permite a definição explícita de tipos de dados e verificação de erros enquanto o código está sendo compilado.

    A seguir está um exemplo do mesmo código, executado tanto em JavaScript quanto em TypeScript.

  *Exemplo de código*:
  ```typescript
  'use client' // Indica para o Next.js que este componente será um Client Component, permitindo uso de estado, efeitos e eventos no navegador

    import Link from 'next/link' // Importa o componente Link do Next.js, usado para navegação entre páginas

    // Criação do type alias (apelido para um tipo de objeto que será usado nas props do componente)
    type NavegarProps = {
        route: string; // Define que a prop 'route' deve ser uma string
    }

    // Componente funcional do React/Next.js
    export default function BotaoNavegar({ route }: NavegarProps) { 
        // Recebe a prop 'route' tipada pelo type alias NavegarProps

        return(
            // Componente Link envolve o botão, garantindo navegação interna sem reload da página (SPA)
            <Link href={"/" + route}> 
                <button>
                    Ir para {route[0].toUpperCase() + route.substring(1)}
                </button>
            </Link>
        )
    }
  ```

    ```javascript

    'use client' // Continua sendo um Client Component
    import Link from 'next/link'

    // Em JavaScript não usamos type alias, pois não há tipagem estática

    export default function BotaoNavegar({ route }) { // Não precisamos tipar {route}        

        return (
            <Link href={"/" + route}>
                <button>Ir para {route[0].toUpperCase() + route.substring(1)}</button>
            </Link>
        )
    }
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