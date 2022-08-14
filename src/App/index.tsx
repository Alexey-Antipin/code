import React, { useState, FC } from "react";
import styled from "styled-components";
import { Profile } from "../Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const App: FC = () => {
  const [email, setEmail] = useState<string | undefined>("");

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login setEmail={setEmail} />} />
        <Route
          path="/profile"
          element={<Profile setEmail={setEmail} email={email} />}
        />
      </Routes>
    </Container>
  );
};
