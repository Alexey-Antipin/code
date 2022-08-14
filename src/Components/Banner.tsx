import React, { FC } from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Helvetica Neue";
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  margin-top: 40px;
`;
export const Banner: FC = () => {
  return <Header>ONLY.</Header>;
};
