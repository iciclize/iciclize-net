/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import {css} from "@emotion/core"

import Header from "./header"
import "./layout.css"
import { rhythm } from "../utils/typography";
import mq from "../utils/emotion";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description} />
        <main>{children}</main>
        <footer css={css`
          margin-top: auto;
          font-size: 13px;
          color: white;
          background: gray;
        `}>
          <div css={css`
            max-width: 920px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            & section, & nav { line-height: ${rhythm(1)}; }
            padding: 20px ${rhythm(6/12)} 60px;
            ${mq[0]} { padding: 20px ${rhythm(10/12)} 60px; }
            ${mq[2]} { padding: 20px ${rhythm(10/12)} 60px; }
            ${mq[1]} { flex-direction: row; }
          `}>
            <section>
              {data.site.siteMetadata.title} © {new Date().getFullYear()}
            </section>
            <nav css={css`
              display: flex;
              & a {
                position: relative;
                color: white;
                text-decoration: none;
              }
              & a+a { margin-left: 20px; }
              & a+a::before {
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
            `}>
              <Link to="/">Posts</Link>
              <a href="https://twitter.com/iciclize">Twitter</a>
              <Link to="/profile">Profile</Link>
              <Link to="/works">Works</Link>
            </nav>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
