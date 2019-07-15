import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import mq from '../utils/emotion';

export default ({ basePath, next, nextImage, nextLabel, prev, prevImage, prevLabel }) => {
    const Container = styled.nav`
      margin: 3.2rem -0.8rem 3rem;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -0.8rem;
        left: 0;
        right: 0;
        border-top: 1px solid #ddd;
        margin: 0 0.8rem;
      }
    `
    const NavItem = styled.div`
      margin: 0.8rem 0.8rem 0;
      display: inline-flex;
      flex-direction: column;
      ${mq[1]} {
        max-width: 45%;
      }
    `
    const Label = styled.div`
      font-size: ${rhythm(14/24)};
      margin: 0 0 ${rhythm(3/12)};
    `
    const Title = styled.div`
      flex: 1 0 0%;
    `
    const Inner = styled.div`
      display: inline-flex;
      flex-direction: row;
      align-items: center;
    `
    return (
      <Container>
        { next &&
          <NavItem>
            <Label>{nextLabel}</Label>
            <Link to={`${basePath}/${next.slug}`}>
              <Inner>
                { nextImage && <Img style={{width: `72px`, marginRight: `12px`}} fluid={nextImage} /> }
                <Title>{ next.title }</Title>
              </Inner>
            </Link>
          </NavItem> }
        { prev &&
          <NavItem>
            <Label>{prevLabel}</Label>
            <Link to={`${basePath}/${prev.slug}`}>
              <Inner>
                { prevImage && <Img style={{width: `72px`, marginRight: `12px`}} fluid={prevImage} /> }
                <Title>{ prev.title }</Title>
              </Inner>
            </Link>
        </NavItem> }
      </Container> )
  }