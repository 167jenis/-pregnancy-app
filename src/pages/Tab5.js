import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import image9 from "../assets/images/tab-1 image/image 9.png";
import image10 from "../assets/images/tab-1 image/image 10.png";
import "./Tab5.css";
import { chevronForwardOutline, settingsOutline } from "ionicons/icons";

const Tab5 = () => {
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3">
          <p className="m-0 fw-bold fs-5 text-white text-center">Setting</p>
        </div>
      </IonHeader>
      <div className="px-3">
        <div>
          <h5 className="mb-3">Menu</h5>
          <div className="px-2">
            <div className="setting-content">
              <p className="mb-0">Setting</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Tell a friend</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Please rate us here</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">About us</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Contact us</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Download Baby+ on Google Play</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Terms of Use</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Privacy Policy</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-3 mt-4">Your Pregnancy</h5>
          <div className="px-2">
            <div className="setting-content">
              <p className="mb-0">Baby Name</p>
              {/* <IonIcon icon={chevronForwardOutline} /> */}
              <input type="text" placeholder="Type Here..." />
            </div>
            <div className="setting-content">
              <p className="mb-0">Due Date</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Due Date calculator</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">First Child?</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Show week</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Pregnancy loss?</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
            <div className="setting-content">
              <p className="mb-0">Baby already born?</p>
              <IonIcon icon={chevronForwardOutline} />
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Tab5;
