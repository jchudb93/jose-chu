import { Container, Icon } from 'semantic-ui-react'
import React from 'react'
import { shortid } from "shortid"

import { ExtLink } from './generic'
import { colors, topBottomMargin } from './styles'
import { profileType } from '../../person'

export const Profiles = ({ profiles }) => {
    return(
        <Container>
            {
                profiles.map(p => (
                    <ExtLink
                    key={shortid.generate()}
                    href={p.url}
                    text={<Icon size="huge" name={p.network.toLowerCase()} link />}
                    color={colors.darkGrey}
                    />
                ))
            }
        </Container>
    )
}

Profiles.defaultProps = {
    profiles: []
}

Profiles.propTypes = profileType
