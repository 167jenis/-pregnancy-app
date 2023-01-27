import { IonContent, IonHeader, IonIcon } from '@ionic/react'
import Signin from "../../assets/images/create.jpg"
import { personOutline, keyOutline, callOutline, eyeOffOutline, eyeOutline } from "ionicons/icons"
import Google from '../../assets/images/login-icon/google.jpg'
import Facebook from '../../assets/images/login-icon/facebook.jpg'
import Phone from '../../assets/images/login-icon/phone.jpg'
import React, { useState } from 'react'
import "./login-create.css"

export const Create = () => {
    const [activePassword, setActivePassword] = useState("eye")
    const [activeConfPassword, setActiveConfPassword] = useState("eye")
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
                            <div className='d-flex justify-content-center align-items-center' onClick={() => activePassword == 'eye' ? setActivePassword('eyes') : setActivePassword('eye')}>
                                {activePassword == 'eye' ?
                                    <IonIcon icon={eyeOffOutline} className="eye" /> :

                                    <IonIcon icon={eyeOutline} className="eyes" />
                                }
                            </div>
                        </div>
                        <div className='login-create'>
                            <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
                            <input type="password" placeholder="Confirm Password...." />
                            <div className='d-flex justify-content-center align-items-center' onClick={() => activeConfPassword == 'eye' ? setActiveConfPassword('eyes') : setActiveConfPassword('eye')}>
                                {activeConfPassword == 'eye' ?
                                    <IonIcon icon={eyeOffOutline} className="eye" /> :

                                    <IonIcon icon={eyeOutline} className="eyes" />
                                }
                            </div>
                        </div>
                        <button>Sign In</button>
                        <div className='changes'>
                            <p>Alredy have an account? <a href='/login' >Sign Up</a></p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                            <div className='socials'>
                                <img src={Google} />
                                <p>Login with Google</p>
                            </div>
                            <div className='socials'>
                                <img src={Facebook} />
                                <p>Login with Facebook</p>
                            </div>
                            <div className='socials'>
                                <img src={Phone} />
                                <p>Login with Mobile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    )
}
