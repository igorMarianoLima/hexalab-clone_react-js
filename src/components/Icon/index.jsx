import PlayStoreIcon from '../../assets/images/iconPlayStore.svg';
import AppleStoreIcon from '../../assets/images/IconAppleStore.svg';
import BrowserIcon from '../../assets/images/iconInternet.svg';

export function Icon({icon, className})
{
    if (className === undefined)
    {
        className = '';
    }

    return(
        <img src={icon} className={'icon ' + className}/>
    )
}

export function PlayStore()
{
    return(
        <Icon icon={PlayStoreIcon} className='playstore_icon' />
    )
}

export function AppleStore()
{
    return(
        <Icon icon={AppleStoreIcon} className='applestore_icon' />
    )
}

export function Browser()
{
    return(
        <Icon icon={BrowserIcon} className='browser_icon' />
    )
}