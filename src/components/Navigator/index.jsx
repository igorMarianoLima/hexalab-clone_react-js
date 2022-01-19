import './style.scss';

export function Navigator(props)
{
    return(
        <nav className="navigator">
            {props.children}
        </nav>
    )
}