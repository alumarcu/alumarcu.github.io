import linkedin_icon from './images/icons/linkedin.svg'
import Typography from '@material-ui/core/Typography'
import React, { ReactNode } from 'react'
import './Menu.css'

type SocialLink = {
    icon: string
    href: string
    text: string
}

class Menu extends React.Component {
    render(): ReactNode {
        return (
            <div>
                <SocialLinkItem icon={linkedin_icon} text="LinkedIn" href="http://www.google.com" />
            </div>
        )
        
    }
}

function SocialLinkItem(props: SocialLink) {
    return (
        <div>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <img src={props.icon} alt={props.text} width="48px" />
                <Typography className="my-link">{props.text}</Typography>
            </a>
        </div>
    )
}

export default Menu
