// com tipagem correta em TSX
import { ReactNode } from "react";

//metadata substitui o head
export const metadata = {
    title: "Meu Next App", // define nome da aba
    description: "Aprendendo Next.js do zero com app/" // descrição da página para pré-visualização
}
  
export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">

        <body>
            <header>
            <h1>Layout Global</h1>
            </header>
            <main>
            <p>{children}</p>
            </main>
            <footer>
            <p>Feito manualmente com Next.js</p>
            </footer>
        </body>
        </html>
    )
}