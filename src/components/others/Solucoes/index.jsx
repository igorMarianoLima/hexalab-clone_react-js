import { useState } from 'react';

import './style.scss';

import { Section, Container } from '../../Layout';
import { Header } from '../../Header';
import { List, ListItem} from '../../List';
import { Link } from '../../Link/';
import { AppleStore, PlayStore, Browser } from '../../Icon';

import logo87Fm from '../../../assets/images/logo87Fm.svg';
import logoCarteira from '../../../assets/images/logoCarteira.svg';
import logoEpedido from '../../../assets/images/logoEpedido.svg';
import logoGetzFood from '../../../assets/images/logoGetzFood.svg';
import logoGetzGestor from '../../../assets/images/logoGetzGestor.svg';
import logoMicroBank from '../../../assets/images/logoMicroBank.svg';
import logoGetzEntrega from '../../../assets/images/logoGetzEntrega.svg';

import fm87 from '../../../assets/images/fm87.svg';
import carteiraDark from '../../../assets/images/carteira dark.svg';
import carteiraLight from '../../../assets/images/carteira light.svg';
import epedido from '../../../assets/images/epedido.svg';
import getzFood from '../../../assets/images/getzFood.png';
import getzGestor from '../../../assets/images/getzGestor.svg';
import microBank from '../../../assets/images/microBank.svg';
import getzEntrega from '../../../assets/images/getzEntrega.svg'

export function Solucoes()
{
    let [solucaoAtual, definirSolucao] = useState(3);

    let [animationDuration, setDuration] = useState(2);
    
    let [animationRunning, setRunning] = useState(false);

    let [animationSlide, setAnimationSlide] = useState('unset');
    let [slideSize, definirSlide] = useState(0);

    let [fadeAnimation, setFade] = useState('unset');

    let solucoes = {
        0: {
            id: 'hexaradio',
            cor: '#ee494e',

            titulo: 'Hexarádio, o player online para a sua rádio',
            descricao: 'Com a hexarádio você tem o seu próprio player para transmitir sua rádio em todo lugar e para qualquer pessoa.',

            image: [fm87],
            plataformas: []
        },

        1: {
            id: 'carteira_whitelabel',
            cor: '#005df2',

            titulo: 'Carteira WhiteLabel',
            descricao: 'A carteira digital com a sua marca. Potencialize o seu negócio fidelizando seus clientes oferecendo o melhor dos bancos digitais.',

            image: [carteiraDark, carteiraLight],
            plataformas: [<PlayStore />, <AppleStore />, <Browser />]
        },

        2: {
            id: 'ePedido',
            cor: '#f9b61b',

            titulo: 'Acompanhe a venda de representantes e prepostos.',
            descricao: 'Potencialize suas vendas, acompanhe seus clientes. Ferramenta ideal para indústrias, varejo e distribuidoras.',

            image: [epedido],
            plataformas: [<PlayStore />, <AppleStore />]
        },

        3: {
            id: 'getz_food',
            cor: '#ff004e',

            titulo: 'Paixão por delivery',
            descricao: 'Peça seu delivery de comida de forma fácil e rápida! Também aproveite os melhores cupons e ganhe cashback em suas compras.',

            image: [getzFood],
            plataformas: [<PlayStore />, <AppleStore />, <Browser />]
        },

        4: {
            id: 'getz_gestor',
            cor: '#7438ff',

            titulo: 'Gerencie seu restaurante no Getz Food!',
            descricao: 'Receba pedidos, gerencie sua loja, acompanhe seu desempenho e receba feedback de clientes!',

            image: [getzGestor],
            plataformas: [<Browser />]
        },
        
        5: {
            id: 'microbank',
            cor: '#16355a',

            titulo: 'Seu banco digital está pronto!',
            descricao: 'Comece sua Fintech, sem grandes investimentos, sem burocracia e de forma super ágil.',

            image: [microBank],
            plataformas: [<Browser />]
        },

        6: {
            id: 'getz_entrega',
            cor: '#1182ff',

            titulo: 'Getz para entregadores',
            descricao: 'Você que faz entregas e deseja ser um entregador Getz Food, baixe o app e venha fazer parte do Getz Entrega.',

            image: [getzEntrega],
            plataformas: [<PlayStore />, <AppleStore />, <Browser />]
        }
    }

    let solucao = solucoes[solucaoAtual]; //Informacoes sobre a solucao que o usuario esta visualizando
    let color = solucao.cor;
    let imagem = solucao.image;
    let plataforma = solucao.plataformas;

    function resetClass()
    {
        let buttons = document.getElementsByClassName('solucao_single');

        for (let i = 0; i < buttons.length; i++)
        {
            let button = buttons.item(i);
            button.setAttribute('class', 'solucao_single');
        }
    }

    function estilizaBotao(botao)
    {
        botao.setAttribute('class', 'solucao_single ativo');
    }

    function animaRolagem(botao, indice)
    {
        function rolarPagina(botao, indice)
        {
            setRunning(true); //Agora a animacao esta rodando

            let lista = document.getElementById('lista_solucoes');

            let botaoTamanho = botao.offsetWidth;
            let posicaoEsq = botao.offsetLeft; //Margem que o botao tem da esquerda da tela
            let viewport = window.innerWidth; //Tamanho do nosso viewport width

            let rolagemPx = (viewport / 2) - posicaoEsq - (botaoTamanho / 2);

            fadeEffect(indice);

            setAnimationSlide('slideSolucoes');
            definirSlide(rolagemPx) //Quantos px sera rolado para os lados

            setTimeout(function() {
                resetClass();
                estilizaBotao(botao);
            }, animationDuration * 250)

            setTimeout(function(){
                lista.style.transform = 'translateX('+ rolagemPx +'px)'
                setAnimationSlide('unset');

                setRunning(false) //A animacao nao esta mais rodando
            }, animationDuration * 1000)

        }

        //Se a animacao nao estiver ja rodando
        if (animationRunning === false)
        {
            rolarPagina(botao, indice);
        }
    }

    function fadeEffect(indice)
    {
        //Caso o usuário tenha clicado em uma solucao diferente (diferente da que está carregada para ele)
        if (solucaoAtual !== indice)
        {
            setFade('fadeIn');
            definirSolucao(indice)
            
            setTimeout(function(){
                setFade('unset');
            }, 500)
        }
    }

    function alteraSolucao(indice, botao)
    {
        animaRolagem(botao, indice);
        //fadeEffect(indice)

        //resetClass();
        //estilizaBotao(botao);
    }

    return(
        <Section
            id='nossas_solucoes'

            style={{
                '--line-color': color,
                '--slide-size': slideSize + 'px',
                '--animation-duration': animationDuration + 's'
            }}
        >
                <Header>
                    <h2>Nossas soluções.</h2>
                    <p>Conheça o que a Hexalab já desenvolveu.</p>
                </Header>

                <List
                    id='lista_solucoes'
                    style={{
                        animationName: animationSlide
                    }}
                >
                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(0, ev.currentTarget);
                                ev.preventDefault()
                            }}
                        >
                            <img
                                src={logo87Fm}
                                alt='Logo 87 FM'
                            />
                        </button>
                    </ListItem>
                    
                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(1, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoCarteira}
                                alt='Carteira WhiteLabel'
                            />
                        </button>
                    </ListItem>

                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(2, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoEpedido}
                                alt='Logo EPedidos'
                            />
                        </button>
                    </ListItem>

                    <ListItem>
                        <button
                            className='solucao_single ativo'

                            onClick={(ev) => {
                                alteraSolucao(3, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoGetzFood}
                                alt='Logo GetzFood'
                            />
                        </button>
                    </ListItem>

                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(4, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoGetzGestor}
                                alt='Logo GetzGestor'
                            />
                        </button>
                    </ListItem>

                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(5, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoMicroBank}
                                alt='Logo MicroBank'
                            />
                        </button>
                    </ListItem>

                    <ListItem>
                        <button
                            className='solucao_single'

                            onClick={(ev) => {
                                alteraSolucao(6, ev.currentTarget);
                            }}
                        >
                            <img
                                src={logoGetzEntrega}
                                alt='Logo GetzEntrega'
                            />
                        </button>
                    </ListItem>
                </List>

                <div id='line-color'></div>

                <div className='solucao'>
                    <Container
                        id='wrap_solucao'
                        style={{
                            animationName: fadeAnimation
                        }}
                    >
                        <div>
                            {
                                imagem.map((value, i) => {
                                    return(
                                        <img src={value} key={i}/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h2>{solucao.titulo}</h2>
                            <p>{solucao.descricao}</p>

                            <Link
                                style={{
                                    color: 'var(--line-color)'
                                }}
                            >
                                Entrar em contato
                            </Link>

                            <div id='plataformas'>
                                {
                                    plataforma.map((value, i) => {
                                        return(
                                            <Link key={i}>
                                                {value}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Container>
                </div>
        </Section>
    );
}