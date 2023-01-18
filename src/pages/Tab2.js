import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Daily from "../assets/images/tab-2 image/Daily.png";
import Weekly from "../assets/images/tab-2 image/Weekly.png";
import Scan from "../assets/images/tab-2 image/Scan.png";
import Size from "../assets/images/tab-2 image/Size.png";
import Timeline from "../assets/images/tab-2 image/Timeline.png";
import Group208 from "../assets/images/tab-2 image/Group 208.png";
import { arrowBackOutline, personCircleOutline } from "ionicons/icons";
import "./Tab2.css";

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="d-flex justify-content-between align-items-center">
              <IonIcon icon={arrowBackOutline} className="fs-2"></IonIcon>
              <h4 className="fw-bold m-0">Baby</h4>
              <IonIcon icon={personCircleOutline} className="fs-3"></IonIcon>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <>
        <div className="tab-2_main">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Daily} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Weekly} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Scan} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Size} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Timeline} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Group208} className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </>
    </IonPage>
  );
};

export default Tab2;
