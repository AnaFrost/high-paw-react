import styled from "styled-components";

export const UserEl = styled.div`
  display: flex;
  width: 100%;
  color: var(--colors-text);
`;

export const UserAvatarEl = styled.img`
  border-radius: 50%;
  border: 2px solid rgba(84, 84, 84, 0.7);
  width: 120px;
  height: 120px;
`;

export const UserInfoEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 30px;
`;

export const ContainerEl = styled.div`
  display: flex;
`;

export const ContainerInfoEl = styled.div`
  margin-right: 20px;
`;

export const UserNameEl = styled.span`
  font-weight: var(--fw-normal);
  font-size: var(--fs-xlg);
  line-height: 48px;
  padding-bottom: 16px;
`;

export const UserBioEl = styled.p`
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  line-height: var(--fs-lg);
`;
