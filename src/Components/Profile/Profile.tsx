import React, { Dispatch, FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  height: 700px;
`;
const ProfileButton = styled.button`
  width: 340px;
  height: 60px;
  border-radius: 8px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  border: none;
  background: #4a67ff;
`;
const ProfileEmail = styled.div`
  text-align: center;
  font-size: 25px;
`;
const Lyrics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LyricsText = styled.div`
  font-size: 25px;
`;

interface Email {
  email: string | undefined;
  setEmail: (email: string) => void;
}

export const Profile: FC<Email> = (props: Email) => {
  let navigate = useNavigate();

  const exitFromSystem = () => {
    navigate("/");
    props.setEmail("");
  };

  return (
    <ProfileContainer>
      <ProfileEmail>Почта: {props.email}</ProfileEmail>
      <Lyrics>
        <LyricsText>Eins, zwei, Polizei Drei</LyricsText>
        <LyricsText>Drei, vier, Grenadier</LyricsText>
        <LyricsText>Fünf, sechs, alte Hex</LyricsText>
        <LyricsText>Sieben, acht, gute Nacht…</LyricsText>
      </Lyrics>
      <ProfileButton onClick={() => exitFromSystem()}>Выйти</ProfileButton>
    </ProfileContainer>
  );
};
