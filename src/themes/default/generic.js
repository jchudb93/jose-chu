import { Button, Icon, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types'
import React from 'react'

import { colors, hexToRgb} from './styles'

export const Contact = ({ phone, email, website}) => {
    return(
        
        <div>
            {
                phone &&
                <Button
                    style = {{ margin: '10px'}}
                    size = "tiny"
                    icon = "phone"
                    content = {phone}
                />
            }
            {
                email &&
                <ExtLink
                    style = {{ margin: '10px' }}
                    href = {{email}}
                    text = {<Button size="tiny" icon="mail-outline" content = {email}/>}
                    color = {colors.grey}
                />
            }
        </div>
    )
}

class ExtLink extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        color: PropTypes.string.isRequired
    }

    constructor(props){
        super(props)

        this.state = { hover: false}
    } 

    toggleHover = () => {
        this.setState({ hover: !this.state.hover})
    }

    render(){
        let linkStyle = { color: this.props.color }
        if(this.state.hover) {
            linkStyle = { color: `rgba(${hexToRgb(this.props.color)}, .6)` };
        }

        return(
            <a
                href = {this.props.href}
                style = {linkStyle}
                onMouseEnter = {this.toggleHover}
                onMouseLeave = {this.toggleHover}
            >
                {this.props.text}
            </a>
        )
    }
}