import { IonButton, IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory } from "react-router";
import "./me.css";

export const Appointment2 = () => {
  const history = useHistory();
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
        <IonList>
          <IonItem>
            <IonInput placeholder="Enter Your name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Enter Your Age"></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect placeholder="Is your first child?">
              <IonSelectOption value="Yes">Yes</IonSelectOption>
              <IonSelectOption value="No">No</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton expand="full" color="light">
            SUBMIT 
          </IonButton>
        </IonList>
      </div>
    </IonContent>
  );
};
