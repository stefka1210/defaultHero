import React from 'react'
import Link from 'gatsby-link'
import DefaultHero from '../components/Heroes/DefaultHero'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
    <div>
        {/* <h2>Posts</h2>
         {data.allMarkdownRemark.edges.map(({node}) => <PostListing key={node.id} post={node} />)} */}
        <DefaultHero data={data} heroAlignType="right" />
    </div>
)

export default IndexPage

//queries(uniqueName!) only work layout & pages, from there you can send props down to the components
export const query = graphql`
    query SiteQuery {
        site {
            siteMetadata {
                title
                desc
            }
        }
        background: imageSharp(id: {regex: "/soccerStadium_1-bg-lg-2x.jpg/"}) {
            # background: imageSharp(id: {regex: "/soccerStadium_measure.jpg/"}) {
            sizes(maxWidth: 2560, quality: 70) {
                ...GatsbyImageSharpSizes
            }
        }
        # foreground: imageSharp(id: {regex: "/mobileMockup_5.png/"}) {
        foreground: imageSharp(id: {regex: "/player_3.png/"}) {
            sizes(maxWidth: 2880, quality: 70) {
                ...GatsbyImageSharpSizes
            }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        background
                    }
                    fields {
                        slug
                    }
                    html
                    excerpt(pruneLength: 280)
                }
            }
        }
    }
`
