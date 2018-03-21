import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import './index.css'

const MainContainer = styled.div`
    margin-top: 44px;
`

const TemplateWrapper = ({children, data, location}) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[{name: 'description', content: 'Sample'}, {name: 'keywords', content: 'sample, something'}]}
        />
        <Header data={data} location={location} />
        <MainContainer className="MainContainer">{children()}</MainContainer>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
                desc
            }
        }
        background: imageSharp(id: {regex: "/soccerStadium_1-bg-lg-2x.jpg/"}) {
            sizes(maxWidth: 1240) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
