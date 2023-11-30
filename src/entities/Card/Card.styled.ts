import styled from "styled-components";

export const CardEl = styled.div`
  position: relative;
  background-color: var(--colors-form);
  width: 282px;
  height: 362px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.p`
  color: var(--colors-dark-text);
  padding-left: 10px;
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

export const PopupWithImage = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 282px;
  height: 282px;
  object-fit: cover;
  object-position: center;
`;

export const CardImageInPopup = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  padding-bottom: 10px;
`;

export const DiscriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--colors-form);
`;

export const DiscriptionContainerInPopup = styled.div`
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  line-height: 20px;
  color: var(--colors-light-text);
  margin-bottom: 10px;
`;

export const MenuEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  position: absolute;
  top: 18px;
  padding: 0 6px 0;
  width: 38px;
  height: 0;
  background-color: var(--colors-form);
  z-index: 2;
  overflow: hidden;
  border-radius: 0 0 12px 12px;
  transition: 0.6s height ease-in;
`;

export const MarkerEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  top: 8px;
  right: 14px;
  width: 38px;
  height: 38px;
  padding: 6px;
  border-radius: 50%;
  background-color: var(--colors-form);
  border: 1px solid var(--colors-disabled);
  z-index: 3;

  &:hover {
    height: 60px;
  }
  /*
  &:hover &MenuEl &DeleteButton {
    visibility: visible;
    opacity: 1;
    transition: 0.3s all ease-in;
    transition-delay: 0.4s; */
  /* } */
`;

export const MarkerImage = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 4;
`;
