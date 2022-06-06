import React from 'react'
import { Button, Purchase} from '../styles/components'
import { Seo } from '../components'
import { Link } from 'gatsby'

export default function gracias(){
    return (
        <div>
            <Seo title='Successful Purchase'/>
            <Purchase>
                <h2>Successful Purchase</h2>
                <p>ENJOY IT</p>
                <span rol='img' aria-label='emoji'></span>
                <Link to='/'>
                <Button>
                Back Shopping</Button>
                </Link>
            </Purchase>
        </div>
    )
}

