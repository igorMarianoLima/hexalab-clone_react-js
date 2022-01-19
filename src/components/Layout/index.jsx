import './style.scss';

import { NavMenu } from "../Header";
import { Home } from '../../pages/Home.jsx';
import { Footer } from '../../components/Footer';

export function Section(props)
{
    return(
        <section {...props}>
            {props.children}
        </section>
    )
}

export function Main(props)
{
    return(
        <main {...props} role='main'>
            {props.children}
        </main>
    )
}

export function Container(props)
{
    return(
        <div className="container" {...props}>
            {props.children}
        </div>
    )
}

export function Layout()
{
    return(
        <>
            <NavMenu />
            <Home />
            <Footer />
        </>
    )
}