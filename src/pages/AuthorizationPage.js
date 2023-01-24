import "./AuthorizationPage.css";

import ItemsContainer from "../components/ItemsContainer";
import PageName from "../components/PageName";
import Select from "react-select";

const AuthorisationPage = () => {
  return (
    <>
      <PageName name="Authorisation" />
      <ItemsContainer className="items-container">
        <form className="auth-form">
          <label for="auth-input" className="auth-title">
            Enter your username or email address
          </label>
          <div className="auth-form-wrapper">
            <div className="auth-input-wrapper">
              <input
                id="auth-input"
                className="auth-input"
                placeholder="username or email address"
              />
              <button className="auth-button">save</button>
            </div>
            <div className="select-wrapper">
              <Select placeholder="select" className="auth-select" />
            </div>
          </div>
        </form>
      </ItemsContainer>
    </>
  );
};
export default AuthorisationPage;
