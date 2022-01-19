import './style.scss';

export function Link(props)
{
    const mainClass = ' link';

    let hrefLink = props.href;

    if (hrefLink === undefined)
    {
        hrefLink = '#';
    }

    let secondaryClass = props.className;


    if (secondaryClass === undefined)
    {
        secondaryClass = '';
    }

    return(
        <a
            href={hrefLink}
            className={secondaryClass + mainClass}
            {...props}
        >
            {props.children}
        </a>
    )
}

export function ButtonLink(props)
{
    let typeButton = props.typebutton;

    if (typeButton === undefined)
    {
        typeButton = 'regular';
    }

    if (typeButton !== 'regular' && typeButton !== 'solid')
    {
        typeButton = 'regular';
    }

    return(
        <Link {...props} className={typeButton + '_button button_link'}>
            {props.children}
        </Link>
    )
}