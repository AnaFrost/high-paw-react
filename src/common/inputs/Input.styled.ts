import styled from "styled-components";

export const InputEl = styled.input`
  width: 358px;
  height: 28px;
  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  line-height: var(--fs-md);
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
`;

export const InputSubmitEl = styled.input.attrs({ type: "submit" })`
  cursor: pointer;
  width: 358px;
  height: 50px;
  color: var(--colors-light-text);
  border: 2px solid;
  background-color: var(--colors-dark-text);
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }

  &:disabled {
    border: 2px solid;
    background-color: var(--colors-disabled);
    width: 358px;
    height: 50px;
    color: var(--colors-light-text);
  }
`;

export const InputRadioEl = styled.input.attrs({ type: "radio" })`
  margin: 4px;
  cursor: pointer;
  width: 16px;
`;

export const LabelEl = styled.label`
  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  line-height: var(--fs-md);
`;

export const ErrorMessageField = styled.div`
  color: var(--colors-error);
  height: var(--fs-lg);
`;

export const InputErrorMessage = styled.p`
  margin: 0;
`;
