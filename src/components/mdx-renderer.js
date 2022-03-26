import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const components = {
  img: props => {
    const newSrc = props.src.startsWith("http")
      ? props.src
      : `${process.env.IMAGE_BASE_URL}${props.src}`;
    const newAlt = props.alt ? props.alt : "";
    return <img {...props} alt={newAlt} src={newSrc} />;
  }
};

const MyMDXRenderer = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);

export { MyMDXRenderer };
