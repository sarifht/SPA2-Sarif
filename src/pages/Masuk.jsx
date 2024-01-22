import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import useInput from "../hooks/Masukkan";
import { Link, useNavigate } from "react-router-dom";
import useLanguage from "../hooks/Bahasa";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import CustomInput from "../components/KustomKomponen/KustomMasukkan";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const navigate = useNavigate();
  const textLangApp = useLanguage("mainApp");
  const textLangLogin = useLanguage("login");

  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    login({ email, password }).then((res) => {
      if (!res.error) {
        putAccessToken(res.data.accessToken);
        getUserLogged()
          .then((res) => {
            if (!res.error) {
              setAuth(res.data);
            } else {
              setAuth(null);
            }
            navigate("/");
          })
          .catch(() => {
            alert(textLangApp.message.error);
          });
      }
    });
  };

  return (
    <div className="login-page">
      <h2>{textLangLogin.title}</h2>
      <form onSubmit={onSubmitHandler} className="input-login">
        <label htmlFor="email">Email</label>
        <CustomInput type="email" name="email" value={email} minLength="6" maxLength="255" onChange={onEmailChangeHandler} isRequired={true} />
        <label htmlFor="email">Kata Sandi</label>
        <CustomInput type="password" name="password" value={password} minLength="6" maxLength="255" onChange={onPasswordChangeHandler} isRequired={true} />
        <button type="submit">Masuk</button>
      </form>
      <p className="login-page__footer">
        {textLangLogin.textFooter} <Link to="/register">{textLangLogin.linkRegister}</Link>
      </p>
    </div>
  );
};

export default LoginPage;

// by: Sarif Hidayatullah
