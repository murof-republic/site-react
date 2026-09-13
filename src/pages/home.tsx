import './css/home.css'
import Intro from '../components/intro/intro'
import CardIntro from '../components/cards/card-intro'
import Trigger from '../assets/images/icon_user/6321f16d3c7dbeba8e0975a3929b1b20.webp'
import snuf from '../assets/images/icon_user/24d834316d889fb31dd8a393f3df3e2e.webp'

function Home() {
    return(
        <main>
            <article>
                <Intro/>
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
                        imagem={snuf}
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