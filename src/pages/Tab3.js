import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Group209 from "../assets/images/tab-3 image/Group 209.png";
import Momsweight from "../assets/images/tab-3 image/Mom;s weight.png";
import Momsbump from "../assets/images/tab-3 image/Moms bump.png";
import Birthplan from "../assets/images/tab-3 image/Birth plan.png";
import Appointments from "../assets/images/tab-3 image/Appointments.png";
import Todo from "../assets/images/tab-3 image/To do.png";
import { arrowBackOutline, personCircleOutline } from "ionicons/icons";
import "./Tab3.css";

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="d-flex justify-content-between align-items-center">
              <IonIcon icon={arrowBackOutline} className="fs-2"></IonIcon>
              <h4 className="fw-bold m-0">Me</h4>
              <IonIcon icon={personCircleOutline} className="fs-3"></IonIcon>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <>
        <div className="tab-2_main">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 g-4">
            <div className="col ">
              <div className="card border-0 rounded-3 img-card">
                <img src={Group209} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Momsweight} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Momsbump} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Birthplan} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Appointments} className="card-img" />
              </div>
            </div>
            <div className="col">
              <div className="card border-0 rounded-3 img-card">
                <img src={Todo} className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </>
    </IonPage>
  );
};

export default Tab3;
