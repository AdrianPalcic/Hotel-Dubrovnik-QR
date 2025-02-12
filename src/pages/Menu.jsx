import React from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {

    const { category } = useParams();

    return (
        <div>Menu for {category}</div>
    )
}

export default Menu