import React from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import mq from "../utils/emotion";

const WorksContainer = styled.div`
  margin: 0 auto;
  max-width: 940px;
`
const WorksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -${rhythm(6/12)} ${rhythm(3/12)} 0;
  ${mq[0]} {
    margin: -${rhythm(6/12)} ${rhythm(6/12)} 0;
  }
`
const WorksListItem = ({ image, title, description, date, link }) => {
  const Item = styled.li`
    margin: 0;
    padding: ${rhythm(8/12)} ${rhythm(3/12)} ${rhythm(8/12)};
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    ${mq[0]} {
      flex-basis: 50%;
      padding: ${rhythm(8/12)} ${rhythm(6/12)} ${rhythm(8/12)};
    }
    ${mq[1]} {
      flex-basis: 33.3%;
      padding-bottom: ${rhythm(16/12)};
    }
    ${mq[2]} {
      flex-basis: 32%;
    }
  `
  const ImageArea = styled.div`
    background: silver;
    padding-bottom: ${100 * 16 / (16 + 10)}%; /* 16:10 */
  `
  const titleStyle = css`
    margin: ${rhythm(6/12)} 0 ${rhythm(4/12)};
    & h3 {
      font-size: ${rhythm(7/12)};
      font-weight: bold;
      line-height: ${rhythm(11/12)};
    }
    ${mq[1]} {
      & h3 {
        font-size: ${rhythm(8/12)};
      }
    }
  `
  const Description = styled.div`
    font-size: ${rhythm(13/24)};
    line-height: ${rhythm(20/24)};
    ${mq[1]} {
      font-size: ${rhythm(15/24)};
      line-height: ${rhythm(24/24)};
    }
  `
  const Time = styled.div`
    font-size: ${rhythm(12/24)};
    padding: 0 0 ${rhythm(4/12)} 0;
    text-align: right;
    position: relative;
    ${mq[1]} {
      font-size: ${rhythm(13/24)};
    }
  `

  const inv = !image

  return (
    <Item>
      <Time>{date}</Time>
      { image &&
        <Link to={link} css={css`text-decoration: none; color: inherit;`}>
          <Img fluid={image} />
        </Link>
      }
      { inv && <ImageArea /> }
      <Link to={link} css={css(titleStyle, css`text-decoration: none; color: inherit;`)}>
        <h3>{title}</h3>
      </Link>
      <Description>{description}</Description>
    </Item>
  )
}

const SecondPage = ({ data }) => {
  const images = data.allImageSharp.edges
  
  return (
    <Layout>
      <SEO title="作品集" />
      <WorksContainer>
        <WorksList>
          {
            data.allMarkdownRemark.edges.map( ({ node }) => {
              const image = (() => {
                if (!node.frontmatter.imagename)
                  return null

                const im = images.find(img => img.node.fluid.originalName === node.frontmatter.imagename)
                return (im) ? im.node.fluid : null
              })()

              return (
                <WorksListItem
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  image={image}
                  description={node.frontmatter.description}
                  link={`/works/${node.frontmatter.slug}`}
                  key={node.id} />
              )
            })
          }
        </WorksList>
      </WorksContainer>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
query WorksQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "YYYY年M月")
          description
          imagename
          images
        }
        id
        rawMarkdownBody
      }
    }
  }
  allImageSharp(sort: {fields: fluid___originalName, order: ASC}) {
    edges {
      node {
        id
        fluid {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
}
`