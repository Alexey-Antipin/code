import React, { FC } from "react";
import styled from "styled-components";

const NotExistUser = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 640px;
  height: 60px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  vertical-align: baseline;
`;
const Signal = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffc8c8;
  text-align: center;
  color: #ee6565;
  margin: 20px;
`;
const User = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 60px;
  color: #000000;
`;

export const ErrorUser: FC = () => {
  return (
    <NotExistUser>
      <Signal>!</Signal>
      <User>Пользователя test.user@example.com не существует</User>
    </NotExistUser>
  );
};
