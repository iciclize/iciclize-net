import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../utils/typography"

import mq from "../utils/emotion"
import styled from "@emotion/styled"

import bgimage from "../images/crystal.gif"

const Container = styled.header`
  margin-bottom: ${rhythm(8/12)};
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: ${rhythm(8/12)} ${rhythm(6/12)} ${rhythm(6/12)};
  ${mq[0]} {
    padding: 1.45rem 1.0875rem;
  }
`

const Title = styled.div`
  display: inline-flex;
`

const SiteTitle = styled.h1`
  font-weight: normal;
  font-size: ${rhythm(8/12)};
  line-height: ${rhythm(1)};
  margin: 0;
  ${mq[0]} {
    font-size: ${rhythm(8/12)};
  }
`

const Subtitle = styled.p`
  margin: ${rhythm(1/12)} 0 0;
  font-size: ${rhythm(5/12)};
  line-height: ${rhythm(1)};
  &::before {
    content: '';
    padding-left: ${rhythm(4/12)};
    margin: 0 0 0 ${rhythm(4/12)};
    border-left: solid hsl(0, 0%, 86%) 1px;
  }
`

const Background = styled.div`
  padding-bottom: 24%;
  background: url(${bgimage});
  background-size: 123%;
  border-bottom: 3px solid hsl(204, 100%, 72%);
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  flex: 1 1 auto;
  text-align: center;
  margin: 0;
  & > a {
    display: block;
    margin: ${rhythm(1/12)};
    padding: ${rhythm(4/12)};
    text-decoration: none;
    font-size: ${rhythm(7/12)};
    color: #454545;
  }
  & > a:hover {
    transition: background 0.25s;
    background: aliceblue;
  }
  ${mq[0]} {
    flex: 1 1 auto;
  }
`

const Item = ({ text, link }) => (
  <ListItem><Link to={ link }>{ text }</Link></ListItem>
)

const Header = ({ siteTitle, description }) => (
  <Container>
    <Inner>
      <Title>
        <SiteTitle>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: `#454545`,
            }}
          >
            {siteTitle}
          </Link>
        </SiteTitle>
        <Subtitle>{ description }</Subtitle>
      </Title>
    </Inner>
    <Background />
    <List>
      <Item text="HOME" link="/" />
      <Item text="自己紹介" link="/" />
      <Item text="作品集" link="/" />
    </List>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}

export default Header
