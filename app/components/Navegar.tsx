'use client' // virou um client component
import Link from 'next/link'

type NavegarProps = {
    route: string;
}

export default function BotaoNavegar({route}: NavegarProps) {

    

    return(
        <Link href={"/" + route}>
        <button>Ir para {route[0].toUpperCase() + route.substring(1)}</button>
        </Link>
    )

}

// type CardProps = {
//     title: string;
//     description: string;
//   }
  
//   export default function Card({ title, description }: CardProps) {
//     return (
//          <div style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "1rem",
//         margin: "1rem 0",
//         boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
//       }}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     )
//   }