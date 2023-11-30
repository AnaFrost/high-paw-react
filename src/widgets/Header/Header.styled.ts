import styled from "styled-components";

export const HeaderEl = styled.header`
  display: flex;
  align-items: flex-start;
  height: 92px;
  width: 100%;
  max-width: 900px;
  padding-top: 46px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: var(--colors-bg);
  border-bottom: 1px solid rgba(84, 84, 84, 0.7);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const WrapperLogoTitle = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: var(--colors-text);
  font-size: var(--fs-xlg);
  font-weight: var(--fw-normal);
`;

export const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  cursor: pointer;
  text-transform: capitalize;
`;
