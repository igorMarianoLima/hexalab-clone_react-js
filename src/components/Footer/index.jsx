import './style.scss';

import { Container } from '../Layout';
import { Navigator } from '../Navigator';
import { List, ListItem} from '../List';
import { Link } from '../Link';

import hexalabIconGrey from '../../assets/images/hexalab-icon-grey.svg';

export function Footer(props)
{
    return(
        <footer id='rodape'>
            <div id='topo'>
                <Container>
                    <div>
                        <img src={hexalabIconGrey} />

                        <address>
                            <p>© 2020 hexaLAB</p>
                            <p>HEXALAB SOLUCOES EM SOFTWARE<br />LTDA</p>
                            <p>CNPJ 37.267.428/0001-05</p>
                            <p>Rua Teófilo David Muzel, 639, Vila<br />Ophelia, Itapeva/SP, Brasil.</p>
                        </address>
                    </div>

                    <Navigator>
                        <List>
                            <ListItem><b>Produtos</b></ListItem>

                            <ListItem>
                                <Link>epedidos</Link>
                            </ListItem>

                            <ListItem>
                                <Link>hexapay</Link>
                            </ListItem>

                            <ListItem>
                                <Link>hexaplay</Link>
                            </ListItem>

                            <ListItem>
                                <Link>hexad</Link>
                            </ListItem>

                            <ListItem>
                                <Link>hexaradio</Link>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem><b>hexaLAB</b></ListItem>

                            <ListItem>
                                <Link>Vagas</Link>
                            </ListItem>

                            <ListItem>
                                <Link>Termos de Privacidade de Dados</Link>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem><b>Fale Conosco</b></ListItem>

                            <ListItem>
                                <Link>Nossa Ouvidoria</Link>
                            </ListItem>

                            <ListItem>
                                <Link>+55 (15) 3521-2805</Link>
                            </ListItem>
                            <ListItem>
                                <Link>ouvidoria@hexalab.com.br</Link>
                            </ListItem>
                        </List>
                    </Navigator>
                </Container>
            </div>

            <div id='creditos'>
                <span>© 2020 hexaLAB</span>
            </div>
        </footer>
    )
}