import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import Signin from "../../assets/images/login.jpg";
import {
  personOutline,
  keyOutline,
  eyeOutline,
  eyeOffOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import "./login-create.css";
import axios from "axios";

export const Login = () => {
  const [activePassword, setActivePassword] = useState("eye");
  const [activeConfPassword, setActiveConfPassword] = useState("eye");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handlelogin = async (e) => {
    const tologinnn = {
      email: user,
      password: pass,
    };

    console.log(tologinnn, "data==>>>");

    try {
      const response = await axios.post(
        "https://98d8-2405-201-2029-a83c-247b-e518-d56b-7159.in.ngrok.io/v1/user/auth/login",
        tologinnn
      );
      console.log(response);
      console.log("tologinnn", user, pass);
    } catch (error) {}
  };
  return (
    <IonContent>
      <div className="main-login">
        <div className="logimg">
          <img src={Signin} />
        </div>
        <div className="login-content">
          <div className="log-cont">
            <h3>Login Your Account</h3>
            <div className="login-create">
              <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
              <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="User Id...." />
            </div>
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password...." />
              <div
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  activeConfPassword == "eye"
                    ? setActiveConfPassword("eyes")
                    : setActiveConfPassword("eye")
                }
              >
                {activeConfPassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div>
            <div className="forgots">
              <a href="">Forgot Password?</a>
            </div>
            <button onClick={() => handlelogin()}>Log In</button>
            <div className="changes">
              <p>
                Don't have an account? <a href="/create">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};
