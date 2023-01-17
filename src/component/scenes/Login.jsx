import { useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "antd";
import { firebaseConfig } from "../../publickey";
import { UserContext } from "../../App";
import "./sign-in-button.css";

export default function SignInButton() {
  const { setUser, setToken } = useContext(UserContext);
  const handleSignin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const token = result.user.stsTokenManager.accessToken;
        // in case user refreshes page, save state in local storage
        // localStorage.setItem("token", token);
        setToken(token);
        // in case user refreshes page, save state in local storage
        // localStorage.setItem("user", JSON.stringify(result.user));
        setUser(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Button id='sign-in-button' type="primary" onClick={handleSignin}>
        Sign in with Google
      </Button> 
    </div>
  );
}