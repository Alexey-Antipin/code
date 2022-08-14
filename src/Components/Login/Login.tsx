import React, { FC, useState } from "react";
import { Banner } from "../Banner";
import { Content } from "../Content";
import { ErrorUser } from "../ErrorUser";
import { Input } from "../Input";
import { RadioButton } from "../RadioButton";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MandatoryField = styled.div`
  color: #e26f6f;
`;
const ButtonIn = styled.button`
  width: 640px;
  height: 60px;
  border-radius: 8px;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  border: none;
  background: #4a67ff;
  &:disabled {
    background: #617aff;
  }
`;

interface Email {
  setEmail: (email: string | undefined) => void;
}

interface Data {
  login?: string | undefined;
}

interface FormValues {
  login: string;
  password: string;
  radioBox?:string
};

export const Login: FC<Email> = (props: Email) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onBlur" });

  let navigate = useNavigate();
  const [errorUser, setErrorUser] = useState(false);

  const onSubmit = (data: Data) => {
    setTimeout(() => {
      // Такой почты не существует.
      if (data.login === "test.user@example.com") {
        setErrorUser(true);
        return;
      }

      // Переходим на профиль.
      navigate("/profile");
      props.setEmail(data.login);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Banner />
      <Content>
        {errorUser && <ErrorUser />}
        <Input
          header="Логин"
          type="email"
          register={register("login", { required: true })}
          errors={errors}
        />
        {errors.login && (
          <MandatoryField>Обязательное поле </MandatoryField>
        )}

        <Input
          header="Пароль"
          type="password"
          register={register("password", { required: true })}
          errors={errors}
        />
        {errors.password && (
          <MandatoryField>Обязательное поле </MandatoryField>
        )}
        <RadioButton />
        <ButtonIn disabled={!isValid} type="submit">
          Войти
        </ButtonIn>
      </Content>
    </form>
  );
};
