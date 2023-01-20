import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import Daily from '../assets/images/baby/daily.png'
import "./Tab2.css";

const Tab2 = () => {
  return (
    <>
      <IonContent>
        <IonHeader>
          <div className="header py-3 px-3 d-flex justify-content-between align-items-center bg-white">
            <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px" }} />
            <p className="m-0 fw-bold fs-5">Baby</p>
            <IonIcon icon={personCircleOutline} style={{ fontSize: "24px" }} />
          </div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="px-3 py-2">
            <div className="row">
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#BBECD7", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Daily</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#E6E9ED", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Weekly</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#FEE3E3", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Scan</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#FEF0D7", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Size</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#D7EDF0", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Timeline</p>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ padding: "12px" }}>
                <div className="cards py-4 px-3 rounded-3" style={{ background: "#C4C9F0", cursor: "pointer" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Baby Names</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Tab2;
