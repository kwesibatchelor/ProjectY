import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Container>
        <a>
            <img src="/images/ylogo1a.PNG" alt="" />
        </a>
        <Menu>
            <a href="#"> About </a>
            <a href="#"> About </a>
            <a href="#"> About </a>
            <a href="#"> About </a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Sign In</a>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;

    img {
        height: 50px;
        width: 50px;
    }

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-decoration: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

`
const RightMenu = styled.div`
    a {
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
    }

`