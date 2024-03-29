// import { css } from "@emotion/react"

const breakpoints = [481, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mq;
export { breakpoints };
