import '../styles/home.scss';

import { Main, Section, Container} from '../components/Layout';
import { ButtonLink } from '../components/Link';

import videoIntro from '../assets/videos/video_intro.mp4';
import { Solucoes } from '../components/others/Solucoes';

export function Home()
{
    return(
        <Main id='home-page' className='page'>
            <Section id='intro'>
                <Container>
                    <div id='texto_intro'>
                        <h1>For your <br /> disruptive <br /> ideas.</h1>

                        <div>
                            <ButtonLink
                                style={{
                                    color: 'var(--main-red)'
                                }}
                            >
                                Nossas soluções
                            </ButtonLink>

                            <ButtonLink
                                typebutton='solid'
                                style={{
                                    backgroundColor: 'var(--main-red)'
                                }}
                            >
                                Entre para o time!
                            </ButtonLink>
                        </div>
                    </div>

                    <div id='video_intro'>
                        <video autoPlay muted loop>
                            <source src={videoIntro} type='video/mp4' />
                        </video>
                    </div>  
                </Container>
            </Section>
            
            <Solucoes />
        </Main>
    )
}