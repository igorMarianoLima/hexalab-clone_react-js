import './style.scss';

import reactDom from 'react-dom';
import { useState } from 'react';

import { Container } from '../Layout/';
import { Navigator } from '../Navigator/';
import { Link } from '../Link/';
import { Logo } from '../Logo/';
import { List, ListItem } from '../List/';

export function Header(props)
{
    const mainClass = 'header';
    let secondaryClass = props.className;

    if (secondaryClass === undefined)
    {
        secondaryClass = '';
    }

    return(
        <header className={mainClass + " " + secondaryClass}>
            {props.children}
        </header>
    )
}

export function BotaoMenu(props)
{
    let menuVisibility = props.menuVisibility;
    let setMenuVisibility = props.setVisibility;

    let containerBotao = document.getElementById('botao_menu');

    return(
        reactDom.createPortal(
            <button
                className='mobile'
                id='menu_button'
                onClick={() => setMenuVisibility(!menuVisibility)}

                style={{
                    position: menuVisibility ? 'fixed' : 'static'
                }}
            >
                <div className='menu_hamburguer'>
                    <div id='1_barra' className='barra'></div>
                    <div id='2_barra' className='barra'></div>
                    <div id='3_barra' className='barra'></div>
                </div>
            </button>,
            containerBotao
        )
    )
}

export function MenuResponsivo(props)
{
    let menuVisibility = props.menuVisibility;

    let containerMenu = document.getElementById('menu_responsivo');

    return(
        reactDom.createPortal(
            <div
                id='menu_mobile'

                style={{
                    display: menuVisibility ? 'flex' : 'none'
                }}
            >
                <List>
                    <ListItem>
                        <Link>Home</Link>
                    </ListItem>

                    <ListItem>
                        <Link>Sobre nós</Link>
                    </ListItem>

                    <ListItem>
                        <Link>Contato</Link>
                    </ListItem>

                    <ListItem>
                        <Link>Vagas</Link>
                    </ListItem>
                </List>
            </div>,
            containerMenu
        )
    )
}

export function NavMenu()
{
    let [menuVisibility, setMenuVisibility] = useState(false);

    return(
        <Header className="nav-menu">
            <Container>
                <Navigator>
                    <button
                        className='mobile'
                        id='menu_button'
                        onClick={() => setMenuVisibility(!menuVisibility)}

                        style={{
                            position: menuVisibility ? 'fixed' : 'static',
                            '--barraM-animacao' : menuVisibility ? 'animacaoBarr_meio' : 'resetaAnimacao',
                            '--barraP-animacao' : menuVisibility ? 'animacaoBarra_prim' : 'resetaAnimacaoPrim',
                            '--barraS-animacao' : menuVisibility ? 'animacaoBarra_seg' : 'resetaAnimacaoSeg'
                        }}
                    >
                        <div className='menu_hamburguer'>
                            <div className='barra'></div>
                        </div>
                    </button>

                    <Link id='logo_topo'>
                        <Logo />
                    </Link>

                    <List className='desktop'>
                        <ListItem>
                            <Link>Soluções</Link>
                        </ListItem>

                        <ListItem>
                            <Link>Sobre nós</Link>
                        </ListItem>

                        <ListItem>
                            <Link>Contato</Link>
                        </ListItem>

                        <ListItem>
                            <Link>Vagas</Link>
                        </ListItem>
                    </List>

                    <div
                        id='menu_mobile'

                        style={{
                            display: menuVisibility ? 'flex' : 'none'
                        }}
                    >
                        <List>
                            <ListItem>
                                <Link>Home</Link>
                            </ListItem>

                            <ListItem>
                                <Link>Sobre nós</Link>
                            </ListItem>

                            <ListItem>
                                <Link>Contato</Link>
                            </ListItem>

                            <ListItem>
                                <Link>Vagas</Link>
                            </ListItem>
                        </List>
                    </div>
                </Navigator>
            </Container>
        </Header>
    )
}