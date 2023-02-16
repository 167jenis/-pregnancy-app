import React from "react";
import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import { IonDatetime, IonButton } from "@ionic/react";
import "./me.css";
import { useHistory } from "react-router";

export const Appointments = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/appointment2");
  }
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Appointment</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div>
      <IonDatetime></IonDatetime>
        <>
          <IonButton expand="full" color="light" onClick={handleClick}>
            ADD
          </IonButton>
          {/* <IonButton expand="full" onClick="" style={{ color: "white" }}>ADD</IonButton> */}
        </>
      </div>
    </IonContent>
  );
};
