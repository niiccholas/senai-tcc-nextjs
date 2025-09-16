import Card from "./components/Navegar"


export default function HomePage() {
    return (
      <div style={{ border: "1px solid red", padding: "1rem" }}>
        <h2>Bem-vindo ao Next.js com app/</h2>
        <p>Essa é a página inicial criada na unha 🚀</p>
        <Card route="sobre"></Card>
      </div>
    )
  }