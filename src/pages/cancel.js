import React from 'react'
import { Button, Purchase} from '../styles/components'
import { Seo } from '../components'
import { Link } from 'gatsby'

export default function gracias(){
    return (
        <div>
            <Seo title='Error Purchase'/>
            <Purchase>
                <h2>Something went wrong!</h2>
                <span rol='img' aria-label='emoji'></span>
                <Link to='/'>
                <Button>
                Back Shopping</Button>
                </Link>
            </Purchase>
        </div>
    )
}

