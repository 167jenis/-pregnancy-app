import { IonContent, IonHeader, IonIcon } from '@ionic/react'
import Signin from "../../assets/images/login.jpg"
import { personOutline, keyOutline } from "ionicons/icons"
import React from 'react'
import "./login-create.css"

export const Login = () => {
    return (
        <IonContent>
            <div className='main-login'>
                <div className='logimg'>
                    <img src={Signin} />
                </div>
                <div className='login-content'>
                    <div className='log-cont'>
                        <h3>Login Your Account</h3>
                        <div className='login-create'>
                            <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
                            <input type="text" placeholder="User Id...." />
                        </div>
                        <div className='login-create'>
                            <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
                            <input type="password" placeholder="Password...." />
                        </div>
                        <div className='forgots'>
                            <a href='' >Forgot Password?</a>
                        </div>
                        <button>Sign In</button>
                        <div className='changes'>
                            <p>Don't have an account? <a href='' >Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    )
}
