import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography";
import mq from "../utils/emotion";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PostTitle = styled.h1`
  font-weight: 500;
  font-size: ${rhythm(7 / 12)};
  line-height: ${rhythm(11 / 12)};
  letter-spacing: 0;
  margin: 0 0 ${rhythm(1 / 12)};
  & > a {
    text-decoration: none;
    color: #191919;
  }
  ${mq[1]} {
    font-size: ${rhythm(9 / 12)};
    line-height: ${rhythm(13 / 12)};
  }
`;

const PublishDate = styled.div`
  font-size: ${rhythm(8 / 16)};
  color: hsl(0, 0%, 40%);
  margin: 0;
  ${mq[1]} {
    font-size: ${rhythm(9 / 16)};
  }
`;

const PostTags = styled.ul`
  list-style: none;
  margin: ${rhythm(-2 / 12)} 0 0;
  ${mq[1]} {
    margin: 0;
  }
`;

const PostTag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(4 / 12)} ${rhythm(1 / 12)} 0;
  & > a {
    font-size: ${rhythm(8 / 16)};
    text-decoration: none;
    color: hsl(208, 100%, 66%);
    padding: ${rhythm(1 / 12)} ${rhythm(1 / 12)};
  }
  ${mq[1]} {
    & > a {
      font-size: ${rhythm(9 / 16)};
    }
  }
`;

const postSummaryStyle = css`
  font-weight: 400;
  color: hsl(0, 0%, 40%);
  font-size: ${rhythm(8 / 16)};
  margin: ${rhythm(1 / 12)} 0 ${rhythm(2 / 12)};
  line-height: ${rhythm(12 / 16)};
  ${mq[1]} {
    font-size: ${rhythm(9 / 16)};
    line-height: ${rhythm(15 / 16)};
  }
`;

const PostContainer = styled.li`
  flex: 1 1 auto;
  border-left: 3px solid
    ${props => (props.isLifeTag ? `hsl(150, 65%, 79%)` : `hsl(204, 100%, 79%)`)};
  padding: 0 0 0 ${rhythm(3 / 12)};
  min-width: 30%;
  ${mq[0]} {
    padding: 0 0 0 ${rhythm(4 / 12)};
    flex: 1 1 32%;
    ${props =>
      props.enlargeLatest
        ? `
      &:first-of-type {
        flex: 1 1 100%;
      }`
        : ``}
  }
`;

const PostHead = styled.div``;
const PostImage = styled.div`
  float: right;
  margin: 0 0 0.4rem 0.4rem;
  width: 50%;
  max-width: 11rem;
  max-height: 6rem;

  ${mq[0]} {
    float: none;
    margin: 0 0 ${rhythm(4 / 12)} 0;
    width: unset;
    max-width: none;
    max-height: none;
  }
`;

const Post = ({
  link,
  title,
  publish_date,
  tags,
  image,
  summary,
  enlargeLatest
}) => {
  return (
    <PostContainer
      enlargeLatest={enlargeLatest ?? null}
      isLifeTag={tags[0]?.slug === "life"}
    >
      <PostHead>
        {image && (
          <PostImage>
            <Link to={link}>
              <GatsbyImage
                image={image}
                alt={title}
              />
            </Link>
          </PostImage>
        )}
        <PostTitle>{title}</PostTitle>
        <PublishDate>{publish_date}</PublishDate>
        {tags && tags.length > 0 && (
          <PostTags>
            {tags.map(tag => (
              <PostTag key={tag.id}>
                <Link to={`/tags/${tag.slug}`}>
                  <span
                    css={css`
                    margin-right: 0.1rem;
                  `}
                  >
                    #
                  </span>
                  {tag.tagname}
                </Link>
              </PostTag>
            ))}
          </PostTags>
        )}
      </PostHead>
      {summary && <div css={postSummaryStyle}>{summary}</div>}
    </PostContainer>
  );
};

const Posts = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  gap: ${rhythm(8 / 12)};
  max-width: 740px;
  ${mq[1]} {
    margin: 0 auto;
    gap: ${rhythm(8 / 12)};
  }
  ${mq[3]} {
    flex: 4 1 auto;
  }
`;

export { Post, Posts };
