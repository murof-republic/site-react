import './card-intro.css'

interface CardIntroProps {
    imagem: string
    nome: string
    conteudo: React.ReactNode
    link: string
}

function CardIntro({ imagem, nome, conteudo, link }: CardIntroProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="content-cards">
            <img
                src={imagem}
                width="60"
                height="60"
                className="icon-user"
                alt={nome}
            />

            <header>
                <h3>{nome}</h3>
            </header>

            <p>{conteudo}</p>
        </a>
    )
}

export default CardIntro