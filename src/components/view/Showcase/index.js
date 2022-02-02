import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../../assets/images/showcase.jpg'

const ShowcaseView = ({ title }) => {
    const Button = styled.button`
    background: red;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    `

    const Container = styled.div`
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    `

    return <Container>
    </Container>
}

export default ShowcaseView