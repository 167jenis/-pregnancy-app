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

const Tab5 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <>
        <IonCard className="rounded-4 shadow mt-3 m-0">
          <div className="d-flex align-items-center justify-content-between w-100 p-2">
            <div>
              <div className="card_image">
                <img src={image9} className="w-100 h-100 " />
              </div>
            </div>
            <div className="w-auto ps-1">
              <IonCardContent className="p-0">
                <p className="crd2_hedding fw-semibold text-dark">
                  Are you getting enough folic acid?
                </p>
                {/* <IonRange className="w-100 ps-2 py-0"></IonRange> */}
                <p className=" ">
                  A healthy, balanced, nutritious diet is importantfor everyone,
                  throughout the...
                </p>
                <div>
                  <ion-button shape="round" color="medium">
                    READ
                  </ion-button>
                  <ion-button shape="round" color="medium">
                    ESSENTIALS
                  </ion-button>
                </div>
              </IonCardContent>
            </div>
          </div>
        </IonCard>

        <IonCard className="rounded-4 shadow mt-3 m-0">
          <div className="d-flex align-items-center justify-content-between w-100 p-2">
            <div>
              <div className="card_image">
                <img src={image10} className="w-100 h-100 rounded-circle" />
              </div>
            </div>
            <div className="w-auto ps-1">
              <IonCardContent className="p-0">
                <p className="crd2_hedding fw-semibold text-dark">
                  Will pregnancy affect my breast implants?{" "}
                </p>
                {/* <IonRange className="w-100 ps-2 py-0"></IonRange> */}
                <p className=" ">
                  A healthy, balanced, nutritious diet is importantfor everyone,
                  throughout the...
                </p>
                <div>
                  <ion-button shape="round" color="medium">
                    READ
                  </ion-button>
                  <ion-button shape="round" color="medium">
                    ESSENTIALS
                  </ion-button>
                </div>
              </IonCardContent>
            </div>
          </div>
        </IonCard>
        <IonCard className="rounded-4 shadow mt-3 m-0">
          <div className="d-flex align-items-center justify-content-between w-100 p-2">
            <div>
              <div className="card_image">
                {/* <img src={roundImg} className="w-100 h-100" /> */}
              </div>
            </div>
            <div className="w-auto ps-1">
              <IonCardContent className="p-0">
                <p className="crd2_hedding fw-semibold text-dark">
                  Body odour during pregnancy{" "}
                </p>
                {/* <IonRange className="w-100 ps-2 py-0"></IonRange> */}
                <p className=" ">
                  A healthy, balanced, nutritious diet is importantfor everyone,
                  throughout the...
                </p>
                <div>
                  <ion-button shape="round" color="medium">
                    READ
                  </ion-button>
                  <ion-button shape="round" color="medium">
                    ESSENTIALS
                  </ion-button>
                </div>
              </IonCardContent>
            </div>
          </div>
        </IonCard>
      </>
    </IonPage>
  );
};

export default Tab5;
