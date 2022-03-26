/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

import { css } from "@emotion/react";

import Header from "./header";
import "./layout.css";
import { rhythm } from "../utils/typography";
import mq from "../utils/emotion";
import styled from "@emotion/styled";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            phrase
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          phrase={data.site.siteMetadata.phrase}
        />
        <main>{children}</main>
        <footer
          css={css`
            margin-top: auto;
            font-size: 13px;
            color: white;
            background: gray;
          `}
        >
          <div
            css={css`
              max-width: 920px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              flex-direction: column;
              justify-content: space-between;
              & section,
              & nav {
                line-height: ${rhythm(1)};
              }
              padding: 20px ${rhythm(6 / 12)} 60px;
              ${mq[0]} {
                padding: 20px ${rhythm(10 / 12)} 60px;
              }
              ${mq[2]} {
                padding: 20px ${rhythm(10 / 12)} 60px;
              }
              ${mq[1]} {
                flex-direction: row;
              }
            `}
          >
            <section
              css={css`
                margin-top: 0.4rem;
              `}
            >
              {data.site.siteMetadata.title} © {new Date().getFullYear()}
            </section>
            <nav
              css={css`
                margin-top: 0.4rem;
                display: flex;
                & a {
                  position: relative;
                  color: white;
                  text-decoration: none;
                }
                & a + a {
                  margin-left: 20px;
                }
                & a + a::before {
                  content: "";
                  position: absolute;
                  top: 11px;
                  left: -11px;
                  display: block;
                  width: 2px;
                  height: 2px;
                  background: #fff;
                  border-radius: 50%;
                }
              `}
            >
              <Link to="/">Posts</Link>
              <Link to="/posts/about">About</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/works">Works</Link>
            </nav>
          </div>
        </footer>
      </div>
    )}
  />
);

const PostContainer = styled.div`
  margin: 0 ${rhythm(8 / 12)} ${rhythm(8 / 12)};
`;
const PostInner = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: ${props => props.pageWidth};
  & pre {
    margin-left: -${rhythm(8 / 12)};
    margin-right: -${rhythm(8 / 12)};
    padding-left: ${rhythm(8 / 12)};
    padding-right: ${rhythm(8 / 12)};
    & > code {
      font-family: Consolas, Monaco, monospace, -apple-system,
        "BlinkMacSystemFont", "Helvetica Neue", "游ゴシック体", "Yugothic",
        "游ゴシック", "Yu Gothic", "Verdana", "メイリオ", sans-serif;
      margin: 0;
      padding: 0;
    }
  }
`;
const mdStyle = css`
  font-size: ${rhythm(10 / 16)};
  line-height: 1.75;
  margin: ${rhythm(8 / 12)} 0 0;
  p {
    margin: ${rhythm(9 / 12)} 0;
  }
  blockquote p {
    margin: 0;
    & + p {
      margin: ${rhythm(3 / 12)} auto 0;
    }
  }
  img {
    margin: ${rhythm(4 / 12)} 0;
  }
  h3 {
    border-left: 5px solid hsl(204, 100%, 82%);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 3rem 0 1.6rem;
  }
  h2 + h3 {
    margin-top: 0;
  }
  h4 {
    font-weight: bold;
    margin: 2rem 0 1.6rem;
    line-height: 1.6rem;
    font-size: 1.2rem;
    display: flex;
  }
  h4::before {
    content: "○";
    font-size: 1.4rem;
    margin-right: 0.5rem;
    color: hsl(204, 100%, 76%);
  }
  h3 + h4 {
    margin-top: 2rem;
  }
  ul ul {
    margin-left: 1.5rem;
    margin-bottom: 0;
  }
  figure img {
    margin: 0;
    border: 1px solid hsl(0, 0%, 90%);
  }
  figure {
    margin: 1rem 0;
  }
  figcaption {
    margin-bottom: 2rem;
    font-size: 80%;
    border-left: 1px solid hsl(0, 0%, 70%);
    border-right: 1px solid hsl(0, 0%, 70%);
    padding: 0 1rem;
    color: hsl(0, 0%, 40%);
  }
  pre code {
    font-size: ${rhythm(7 / 12)};
  }

  ${mq[1]} {
    font-size: ${rhythm(8 / 12)};
    p {
      margin: ${rhythm(12 / 12)} 0;
    }
    ol,
    ul {
      margin-bottom: ${rhythm(11 / 12)};
    }
    pre > code {
      font-size: ${rhythm(7 / 12)};
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout, PostContainer, PostInner, mdStyle };
