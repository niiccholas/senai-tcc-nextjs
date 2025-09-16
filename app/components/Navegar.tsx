'use client' // virou um client component
import Link from 'next/link'

//Criação do type alias (apelido para uma parte que seria escrita excessivamente no código)
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
