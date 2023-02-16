import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React from "react";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory } from "react-router";
import "./me.css";

export const ToDo = () => {
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
          <p className="m-0 fw-bold fs-5 text-white">To Do</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div>
        <IonList>
          <IonItem>
            <IonInput placeholder="Enter Your Task"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Buy a pregnancy test</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Drink two glasses of water before breakfast</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Discuss my exercise routine with my healthcare provider</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </IonContent>
  );
};
