import './intro.css'
import discord from "../../assets/images/discord.webp"

function Intro() {
    return (
        <section>
            <div id='intro-content'>
                <h2>Olá viajante!</h2>
                <p>Unimos entusiastas e profissionais de programação, tecnologia, jogos e arte em um ambiente feito para a troca de conhecimento e boas conexões. Faça parte!</p>
            </div>

            <div id='intro-social'>
                <a href="https://discord.gg/MWrYrytMCg" target="_blank" rel="noopener noreferrer">
                    <img src={discord} width={35} height={35} alt="Nosso Discord!" />
                </a>
            </div>
        </section>
    )
}

export default Intro