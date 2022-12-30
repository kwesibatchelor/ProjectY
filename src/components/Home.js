import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section 
            title="ProjectYY"
            description="Digital Collectibles | Rewards Earning"
            backgroundImg="ybackground1a.PNG"
            leftBtnText="ButtonAA"
            rightBtnText="ButtonBB"      
        />

        <Section 
            title="ProjectAA"
            description="Digital Collectibles | Rewards Earning"
            backgroundImg="ybackground1b.PNG"
            leftBtnText="ButtonCC"
            rightBtnText="ButtonDD" 
        />

        <Section 
            title="ProjectBB"
            description="Digital Collectibles | Rewards Earning"
            backgroundImg="ybackground1c.PNG"
            leftBtnText="ButtonEE"
            rightBtnText="ButtonFF" 
        />

        <Section 
            title="ProjectCC"
            description="Digital Collectibles | Rewards Earning"
            backgroundImg="ybackground1d.PNG"
            leftBtnText="ButtonGG"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`