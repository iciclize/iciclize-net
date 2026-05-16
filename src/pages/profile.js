import React from "react";

import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, PostContainer, PostInner } from "../components/layout";
import { rhythm } from "../utils/typography";
import Seo from "../components/seo";
import ReactMarkdown from "react-markdown";
import { css } from "@emotion/react";
import mq from "../utils/emotion";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import Iframely from "../components/Iframely";
import { transformMarkdownUrl } from "../utils/markdown-url-transform";
// import rehypeSanitize from "rehype-sanitize";

const pageWidth = "620px";

const markdownStyle = css`
  td {
    line-height: 1.4rem;
  }
  details > summary {
    display: list-item;
    cursor: pointer;
  }
  details > summary,
  details[open] {
    background-color: hsl(204, 100%, 97%);
  }
  h3 {
    border-left: 5px solid hsl(204, 100%, 82%);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    font-weight: bold;
    margin: 1.5rem 0 1.25rem;
  }
  h4 {
    font-weight: bold;
    margin: 1.6rem 0 0.6rem;
    font-size: 1.1rem;
  }
  h3 + h4 {
    margin-top: 1rem;
  }
  font-size: ${rhythm(10 / 16)};
  line-height: 1.75;
  margin: ${rhythm(8 / 12)} 0 0;
  ${mq[1]} {
    font-size: ${rhythm(8 / 12)};
  }
`;

const ProfilePage = ({ data }) => {
  const profile = data.strapiProfile || {};
  const profileMarkdown = profile.content?.data?.content || "";
  const profileUpdateDate = profile.update_date || profile.updatedAt;

  return (
    <Layout>
      <Seo title="自己紹介" ogDescription={`24歳、学生です。(大嘘)`} />
      <Iframely />
      <PostContainer>
        <h1
          css={css`
            text-align: center;
            font-size: ${rhythm(12 / 12)};
            font-weight: 450;
          `}
        >
          自己紹介
        </h1>
        <PostInner pageWidth={pageWidth}>
          <div
            css={css`
              text-align: right;
              font-size: ${rhythm(6 / 12)};
            `}
          >
            {profileUpdateDate && `最終更新: ${profileUpdateDate}`}
          </div>
          <p
            css={css`
              text-align: center;
            `}
          >
            インターネット自分語り許可エリア
          </p>
          <div
            css={css`
              display: table;
              margin: 1.5rem 0 1rem;
            `}
          >
            <img
              css={css`
                margin: 0;
              `}
              width="64px"
              src="https://www.gravatar.com/avatar/e5ef3698ccb90ecd2a50b1440dd7ee37?s=128"
              alt=""
            />
            <div
              css={css`
                display: table-cell;
                padding: 0 0.8rem;
                vertical-align: middle;
              `}
            >
              <h2
                css={css`
                  border: none;
                  font-weight: normal;
                  font-size: 1.1rem;
                  margin: 0;
                  padding: 0 0 0.6rem;
                `}
              >
                いの
              </h2>
              <div
                css={css`
                  font-size: 0.9rem;
                `}
              >
                <span
                  css={css`
                    display: inline-block;
                    margin-right: 1.2rem;
                  `}
                >
                  Twitter: <a href="https://twitter.com/iciclize">@iciclize</a>{" "}
                </span>
                <span
                  css={css`
                    display: inline-block;
                    margin-right: 1.2rem;
                  `}
                >
                  YouTube:{" "}
                  <a href="https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg">
                    @szkfk
                  </a>
                </span>
                <span
                  css={css`
                    display: inline-block;
                  `}
                >
                  Instagram:{" "}
                  <a href="https://www.instagram.com/iciqle/">@iciqle</a>
                </span>
              </div>
            </div>
          </div>

          <b>写真</b>
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              gap: 0.75rem;
              padding: 0.5rem 0;
            `}
          >
            <StaticImage
              css={css`
                flex: 0 1 200px;
              `}
              width={200}
              height={300}
              objectFit="cover"
              objectPosition="center"
              src="https://nnyapi.iciclize.net/uploads/20260426_yino_0_fdc2d5a8cd.jpeg"
              alt="Y.Ino profile image 0 2026-04-26"
            />
            <StaticImage
              css={css`
                flex: 0 1 400px;
              `}
              width={400}
              height={300}
              objectFit="cover"
              objectPosition="center"
              src="https://nnyapi.iciclize.net/uploads/ino_atlier_renard_ae2f87bc53.jpg"
              alt="Y.Ino profile image 1 2026-05-10"
            />
          </div>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug /* rehypeSanitize */]}
            css={markdownStyle}
            urlTransform={transformMarkdownUrl}
          >
            {profileMarkdown}
          </ReactMarkdown>
        </PostInner>
      </PostContainer>
    </Layout>
  );
};

export default ProfilePage;

export const query = graphql`
  query ProfilePage {
    strapiProfile {
      update_date(formatString: "YYYY-MM-DD")
      updatedAt(formatString: "YYYY-MM-DD")
      content {
        data {
          content
        }
      }
    }
  }
`;
