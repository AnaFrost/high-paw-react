import styled from "styled-components";

export const FormEl = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--colors-form);
  width: 430px;
  height: 330px;
  border-radius: 10px;
`;

export const Title = styled.span`
  margin: 0;
  color: var(--colors-dark-text);
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  line-height: 30px;
`;

export const RadioButtonsContainer = styled.div`
  color: var(--colors-dark-text);
  display: flex;
  width: 358px;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
