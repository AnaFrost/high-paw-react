import styled from "styled-components";

export const FooterEl = styled.footer`
  width: 100%;
  max-width: 900px;
  padding: 30px 0 20px;
  background-color: var(--colors-bg);
  position: sticky;
  left: 0;
  bottom: 0;
  z-index: 5;
`;

export const Copyright = styled.span`
  color: var(--colors-captcha);
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  line-height: var(--fs-lg);
`;
