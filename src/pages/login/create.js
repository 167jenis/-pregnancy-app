import { IonContent, IonHeader, IonIcon } from '@ionic/react'
import Signin from "../../assets/images/create.jpg"
import { personOutline, keyOutline, callOutline } from "ionicons/icons"
import React from 'react'
import "./login-create.css"

export const Create = () => {
    return (
        <IonContent>
            <div className='main-login'>
                <div className='logimg'>
                    <img src={Signin} />
                </div>
                <div className='login-content'>
                    <div className='log-cont'>
                        <h3>Create Your Account</h3>
                        <div className='login-create'>
                            <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
                            <input type="text" placeholder="Email...." />
                        </div>
                        <div className='login-create'>
                            <IonIcon icon={callOutline} style={{ color: "#C2C2C2" }} />
                            <input type="text" placeholder="Phone...." />
                        </div>
                        <div className='login-create'>
                            <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
                            <input type="password" placeholder="Password...." />
                        </div>
                        <div className='login-create'>
                            <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
                            <input type="password" placeholder="Confirm Password...." />
                        </div>
                        <button>Sign In</button>
                        <div className='changes'>
                            <p>Alredy have an account? <a href='' >Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    )
}
