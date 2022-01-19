export function List(props)
{
    const primaryClass = ' list';

    let secondClass = props.className;

    if (secondClass === undefined)
    {
        secondClass = '';
    }

    let classElement = secondClass + primaryClass;
    /////

    let typeList = props.typeList;

    if (typeList === undefined)
    {
        typeList = 'ul';
    }

    if (typeList !== 'ul' && typeList !== 'ol')
    {
        typeList = 'ul';
    }

    if (typeList === 'ul')
    {
        return(
            <ul {...props} className={classElement}>
                {props.children}
            </ul>
        )
    } else {
        return(
            <ol className={classElement}>
                {props.children}
            </ol>
        )
    }
}

export function ListItem(props)
{
    return(
        <li {...props}>
            {props.children}
        </li>
    )
}