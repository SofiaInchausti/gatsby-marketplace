import React from 'react'
import { StyledJumbo } from '../styles/components'

const Jumbo = ({description}) => {
    return(
        <StyledJumbo>
            <div>
                <h2> The best coffee</h2>
                <h2> For the best <span> YOU</span></h2>
            </div>
        </StyledJumbo>
    )
}

export default Jumbo