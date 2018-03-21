import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../../images/neobet_logo_onDark.svg'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 44px;
    background: black;
    padding-top: 0;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1 1 1596px;
    max-width: 1596px;
    padding-left: 2px;
    padding-right: 2px;
    position: relative;
    overflow: hidden;
    height: 44px;
    background: black;
    padding-top: 1px;
`
const MainNav = styled.nav`
    display: flex;
    text-transform: uppercase;
    height: inherit;
    width: calc((100vw - 80px) / 2);
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
        padding: 0px 8px;
        color: white;
        fill: white;
        cursor: pointer;
        height: inherit;
        font-size: 1.2rem;
        &:hover,
        &:active {
            color: #00a1e7;
        }
    }
    a.livewetten {
        &:hover,
        &:active {
            color: #eb0143ed;
        }
    }
`
const Logo = styled.h1`
    width: 80px;
    position: absolute;
    left: calc(50% - (80px / 2));
    top: 0;
    bottom: 0;
    opacity: 1;
    z-index: 10;
    transition: opacity 300ms;
    height: inherit;
    a {
        display: block;
        height: inherit;
    }
`
export default class Header extends Component {
    // componentDidUpdate = (prevProps, prevState) => {
    //     const {location} = this.props
    //     if (location.pathname !== prevProps.location.pathname) {
    //         if (this.props.location.pathname == '/') {
    //             this.wrapper.animate([{height: '20vh'}, {height: '70vh'}], {
    //                 duration: 300,
    //                 fill: 'forwards',
    //                 easing: 'cubic-bezier(0.86,0,0.07,1)',
    //                 iterations: 1,
    //             })
    //         } else {
    //             this.wrapper.animate([{height: '70vh'}, {height: '20vh'}], {
    //                 duration: 300,
    //                 fill: 'forwards',
    //                 easing: 'cubic-bezier(0.86,0,0.07,1)',
    //                 iterations: 1,
    //             })
    //         }
    //     }
    // }

    render() {
        const {data, location} = this.props
        return (
            <HeaderWrapper isLive={location.pathname == '/livewetten'}>
                <HeaderContainer>
                    <MainNav>
                        <Link to="/">Sportwetten</Link>
                        <Link to="/" className="livewetten">
                            Livewetten
                        </Link>
                        <Link to="/">Promo</Link>
                        <Link to="/">Features</Link>
                    </MainNav>
                    <Logo>
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                            <img src={logo} alt="NEO.bet Logo" />
                        </Link>
                    </Logo>
                </HeaderContainer>

                {/* <Img
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.3,
                    }}
                    sizes={data.background.sizes}
                /> */}
            </HeaderWrapper>
        )
    }
}

const Billboard = styled(Img)``
