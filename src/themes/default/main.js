import {
    Container, 
    Icon,
    Image,
    Menu,
    Responsive,
    Sidebar,
} from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'
import shortid from 'shortid'

import { resumeType } from '../../person'
import Basics from './basics'

const ResumeMenuItem = ({
    title,
    active,
    element,
    show,
    onClick
}) => {
    if (!show) {
        return false
    }

    if (element) {
        return(<Menu.Item
            name= {title}
            header
            onClick = {
                ()=>{
                    onClick(title);
                }
            }
            active = {active}
        />)
    }
    return (
        <Menu.Item
        name={title}
        header
        onClick={() => {
            onClick(title);
        }}
        active={active}
        />
    )
}


ResumeMenuItem.defaultProps = {
    element: undefined,
}

ResumeMenuItem.propTypes = {
title: PropTypes.string.isRequired,
active: PropTypes.bool.isRequired,
element: PropTypes.element,
show: PropTypes.bool.isRequired,
onClick: PropTypes.func.isRequired,
}  

class Default extends React.Component {
    
}