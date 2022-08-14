import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const ContentChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
`;

interface Props {
  children: ReactNode;
}

export const Content: FC<Props> = ({ children }) => {
  return <ContentChildren>{children}</ContentChildren>;
};
