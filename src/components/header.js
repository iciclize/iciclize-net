import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { rhythm } from "../utils/typography";
import { css } from "@emotion/react";

import mq from "../utils/emotion";
import { breakpoints } from "../utils/emotion";
import styled from "@emotion/styled";

import bgimage from "../images/crystal.gif";

const Container = styled.header`
  margin-bottom: ${rhythm(12 / 12)};
  ${mq[1]} {
    margin-bottom: ${rhythm(16 / 12)};
  }
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 920px;
  padding: ${rhythm(8 / 12)} ${rhythm(6 / 12)} ${rhythm(6 / 12)};
  ${mq[0]} {
    padding: ${rhythm(10 / 12)} ${rhythm(10 / 12)} ${rhythm(8 / 12)};
  }
  ${mq[2]} {
    padding: ${rhythm(14 / 12)} ${rhythm(10 / 12)} ${rhythm(10 / 12)};
  }
`;
const Title = styled.div`
  display: inline-flex;
`;
const SiteTitle = styled.h1`
  font-weight: normal;
  font-size: ${rhythm(8 / 12)};
  line-height: ${rhythm(1)};
  margin: 0;
  ${mq[0]} {
    font-size: ${rhythm(9 / 12)};
  }
`;
const Subtitle = styled.p`
  margin: ${rhythm(1 / 12)} 0 0;
  font-size: ${rhythm(5 / 12)};
  line-height: ${rhythm(1)};
  &::before {
    content: "";
    padding-left: ${rhythm(4 / 12)};
    margin: 0 0 0 ${rhythm(4 / 12)};
    border-left: solid hsl(0, 0%, 86%) 1px;
  }
  ${mq[0]} {
    font-size: ${rhythm(6 / 12)};
  }
`;
const Background = styled.div`
  padding-bottom: 24%;
  background: url(${bgimage});
  background-size: 123%;
  position: relative;
  z-index: -2;
  ${mq[1]} {
    background-size: 100%;
    padding-bottom: 200px;
  }
  ${mq[2]} {
    background-size: ${breakpoints[2]}px;
  }
`;
const List = styled.ul`
  margin: 0 auto;
  padding: 0 ${rhythm(6 / 12)};
  ${mq[0]} {
    padding: 0 ${rhythm(10 / 12)};
  }
  ${mq[2]} {
    padding: 0 ${rhythm(10 / 12)};
  }
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 920px;
`;
const ListItem = styled.li`
  flex: 1 1 auto;
  text-align: center;
  margin: 0;
  & > a {
    display: block;
    margin: ${rhythm(1 / 12)};
    padding: ${rhythm(6 / 12)} ${rhythm(4 / 12)};
    text-decoration: none;
    font-size: ${rhythm(7 / 12)};
    color: #454545;
  }
  & > a:hover {
    transition: background 0.25s;
    background: aliceblue;
  }
  ${mq[0]} {
    flex: 1 1 auto;
  }
  ${mq[1]} {
    & > a {
      padding: ${rhythm(6 / 12)} ${rhythm(4 / 12)};
    }
  }
`;

const Item = ({ text, link }) => (
  <ListItem>
    <Link to={link}>{text}</Link>
  </ListItem>
);

const Header = ({ siteTitle, phrase }) => (
  <Container>
    <Inner>
      <Title>
        <SiteTitle>
          <Link
            to="/"
            css={css`
              text-decoration: none;
              color: #454545;
            `}
          >
            {siteTitle}
          </Link>
        </SiteTitle>
        <Subtitle>{phrase}</Subtitle>
      </Title>
    </Inner>
    <Background />
    <div
      css={css`
        position: relative;
        border-top: 3px solid hsl(204, 100%, 79%);
        background: white;
        &::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          right: 0;
          left: 0;
          height: 5px;
          box-shadow: 0 -4px 14px 0 rgba(0, 0, 0, 0.18);
        }
        ${mq[1]} {
          border-top-width: 5px;
        }
      `}
    >
      <List>
        <Item text="HOME" link="/" />
        <Item text="自己紹介" link="/profile" />
        <Item text="作品集" link="/works" />
        <Item text="生活系" link="/tags/life" />
      </List>
    </div>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  phrase: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``,
  phrase: ``
};

export default Header;
