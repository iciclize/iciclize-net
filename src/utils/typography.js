import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "游ゴシック体",
    "Yugothic",
    "游ゴシック",
    "Yu Gothic",
    "Verdana",
    "メイリオ",
    "sans-serif"
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "游ゴシック体",
    "Yugothic",
    "游ゴシック",
    "Yu Gothic",
    "Verdana",
    "メイリオ",
    "sans-serif"
  ]
});

export const { scale, rhythm, options } = typography;
export default typography;
