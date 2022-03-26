import * as React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import Seo from "../components/seo";
import { css } from "@emotion/react";
import mq from "../utils/emotion";
import { GatsbyImage } from "gatsby-plugin-image";

const WorksContainer = styled.div`
  margin: 0 auto;
  max-width: 940px;
`;
const WorksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -${rhythm(6 / 12)} ${rhythm(3 / 12)} 60px;
  &::after {
    content: "";
    flex: auto;
  }
  ${mq[0]} {
    margin: 0 ${rhythm(6 / 12)} 60px;
  }
`;
const WorksListItem = ({ image, title, description, date, link }) => {
  const Item = styled.li`
    margin: 0;
    padding: ${rhythm(12 / 12)} 6% ${rhythm(8 / 12)};
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    ${mq[0]} {
      flex-basis: 50%;
      padding: ${rhythm(8 / 12)} ${rhythm(6 / 12)} ${rhythm(8 / 12)};
    }
    ${mq[1]} {
      flex-basis: 33.3%;
      padding-bottom: ${rhythm(16 / 12)};
    }
    ${mq[2]} {
      flex-basis: 32%;
      margin: 0;
    }
  `;
  const ImageArea = styled.div`
    background: transparent;
    padding-bottom: ${(100 * 16) / (16 + 10)}%; /* 16:10 */
  `;
  const titleStyle = css`
    margin: ${rhythm(6 / 12)} 0 ${rhythm(2 / 12)};
    & h3 {
      font-size: ${rhythm(17 / 24)};
      font-weight: bold;
      line-height: ${rhythm(22 / 24)};
    }
  `;
  const Description = styled.div`
    font-size: ${rhythm(14 / 24)};
    line-height: ${rhythm(23 / 24)};
    ${mq[1]} {
      font-size: ${rhythm(14 / 24)};
      line-height: ${rhythm(23 / 24)};
    }
  `;
  const Time = styled.div`
    font-size: ${rhythm(13 / 24)};
    padding: 0 0 ${rhythm(4 / 12)} 0;
    text-align: right;
    position: relative;
    ${mq[1]} {
      font-size: ${rhythm(13 / 24)};
    }
  `;

  return (
    <Item>
      <Time>{date}</Time>
      {image && (
        <Link
          to={link}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <GatsbyImage image={image} alt={title} />
        </Link>
      )}
      {!image && <ImageArea />}
      <Link
        to={link}
        css={css(
          titleStyle,
          css`
            text-decoration: none;
            color: inherit;
          `
        )}
      >
        <h3>{title}</h3>
      </Link>
      <Description>{description}</Description>
    </Item>
  );
};

const WorksPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="作品集"
        ogDescription={data.allMdx.edges
          .map(({ node }) => node.frontmatter.title)
          .join(` | `)}
      />
      <WorksContainer>
        <h1
          css={css`
            text-align: center;
            font-size: ${rhythm(12 / 12)};
            font-weight: 450;
          `}
        >
          作品集
        </h1>
        <p
          css={css`
            text-align: center;
          `}
        >
          サムネイルが映えないのはご愛嬌
        </p>
        <WorksList>
          {data.allMdx.edges.map(({ node }) => {
            const image =
              node.frontmatter.imagename?.childImageSharp.gatsbyImageData;

            return (
              <WorksListItem
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                image={image}
                description={node.frontmatter.description}
                link={node.frontmatter.slug}
                key={node.id}
              />
            );
          })}
        </WorksList>
      </WorksContainer>
    </Layout>
  );
};

export default WorksPage;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "works/" } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM")
            title
            slug
            imagename {
              childImageSharp {
                gatsbyImageData(width: 360, layout: CONSTRAINED)
              }
            }
          }
          id
        }
      }
    }
  }
`;
