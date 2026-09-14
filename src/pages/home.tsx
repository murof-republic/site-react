import './css/home.css'
import CardIntro from '../components/cards/card-intro'
import discord from "../assets/images/discord.webp"
import Trigger from '../assets/images/icon_user/6321f16d3c7dbeba8e0975a3929b1b20.webp'
import Snuf from '../assets/images/icon_user/24d834316d889fb31dd8a393f3df3e2e.webp'

function Home() {
    return(
        <main>
            <article>
                <div id="background"></div>
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
                <section className="cards">
                    <CardIntro
                        imagem={Trigger}
                        nome="Trigger"
                        conteudo={<>
                                Acesse nosso source no Github!<br/>
                                E tenha acesso a nossos wallpapers e miscelâneas...</>}
                        link="https://github.com/murof-republic"
                    />

                    <CardIntro
                        imagem={Snuf}
                        nome="Snuf"
                        conteudo={<>
                                Adicione o Snuf ao seu servidor!<br/>
                                Um bot feito para comunidades no Discord...</>}
                        link="https://discord.com/discovery/applications/1370119246276726944"
                    />
                </section>
            </article>
        </main>
    )
}

export default Home