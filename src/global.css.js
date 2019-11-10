import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import { baseFontSize, baseFontStack, monoFontStack, accentColor, baseColor, baseLineHeight, headFontStack } from './constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
  }

  body {
    font-family: ${baseFontStack};
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
    color: ${baseColor};
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${headFontStack};
  }

  ol li, ul li {
    margin: 0.4rem 0 0.5rem 1rem;
    padding-left: 0.5rem;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote {
    font-size: 80%;
    padding: 0.4rem 0 0.5rem 1.5rem;
    border-left: 2px solid ${baseColor};
  }

  blockquote p {
    margin: 0;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    transition: opacity 0.2s ease;
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accentColor};
  }

  a:hover {
    color: ${accentColor};
    opacity: 0.7;
    text-decoration: none;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid ${accent};
    font-family: ${monoFontStack};
  }

  video {
    max-width: 100%;
  }

  blockquote, p, ol, ul {
    margin-bottom: 1rem;
  }
`;
