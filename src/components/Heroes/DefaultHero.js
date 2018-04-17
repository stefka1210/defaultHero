import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const HeroContainer = styled.div`
    min-height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        min-height: 50vw;
    }
    @media (min-width: 1280px) {
        min-height: 33.33vw;
    }
    @media (min-width: 1920px) {
        min-height: 640px;
    }
    @media (max-width: 767px) {
        flex-direction: column;
        min-height: 50vw;
    }
    .myOuterWrapper {
        min-height: inherit;
    }
    .Hero-Layer {
        position: absolute;
        min-height: inherit;
        overflow: hidden;
        width: 100vw;
        .gatsby-image-wrapper div:first-child {
            display: none;
        }
    }
    .Hero-Bg {
        z-index: 11;
    }
    .Hero-Mg {
        z-index: 22;
        margin: 0 auto;
        max-width: 1920px;
    }
    .Hero-Fg {
        z-index: 33;
        margin: 0 auto;
        max-width: 1920px;
    }
    .Hero-Content {
        display: flex;
        position: absolute;
        min-height: inherit;
        overflow: hidden;
        width: 100vw;
        z-index: 44;
        @media (max-width: 767px) {
            min-height: 0;
            top: 100%;
        }
    }
    .Hero-Content-Container {
        display: flex;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 60px;
        @media (max-width: 768px) {
            margin: 30px;
            padding: 0;
        }
    }
    .Hero-Content-Body {
        display: flex;
        flex-direction: column;
        padding: 26px 0 40px;
        width: 100%;
        background: red;

        @media (min-width: 768px) {
            border: 0;
            padding: 0;
            width: 352px;
        }
        @media (min-width: 1024px) {
            width: 452px;
        }
        @media (min-width: 1280px) {
            width: 512px;
        }
        @media (min-width: 2560px) {
            width: 676px;
        }
    }
`

const fgImgStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    left: '25%',
    width: '75%',
    height: 'auto',
}

export default class DefaultHero extends Component {
    static propTypes = {
        contentPosition: PropTypes.string,
    }
    static defaultProps = {
        contentPosition: 'right',
    }

    render() {
        const {data, location, heroAlignType} = this.props
        console.log('data: ', data)
        return (
            <HeroContainer className={`HeroContainer ${heroAlignType}`}>
                <div className="Hero-Bg Hero-Layer">
                    <Img
                        fadeIn={true}
                        outerWrapperClassName={'myOuterWrapper'}
                        style={{
                            width: '100%',
                            minHeight: 'inherit',
                        }}
                        sizes={data.background.sizes}
                    />
                </div>
                <div className="Hero-Mg Hero-Layer">Middleground</div>
                <div className="Hero-Fg Hero-Layer">
                    <Img
                        fadeIn={true}
                        outerWrapperClassName={'myOuterWrapper'}
                        style={{
                            position: 'static',
                            overflow: 'initial',
                        }}
                        imgStyle={fgImgStyles}
                        sizes={data.foreground.sizes}
                    />
                </div>
                <div className="Hero-Content">
                    <div className="Hero-Content-Container">
                        <div className="Hero-Content-Body">Content</div>
                    </div>
                </div>
            </HeroContainer>
        )
    }
}
