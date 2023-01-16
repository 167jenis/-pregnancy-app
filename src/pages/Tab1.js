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
import { arrowForwardCircleOutline } from "ionicons/icons";
import { IonRange } from "@ionic/react";
import "./Tab1.css";

const Tab1 = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <p>Monday,12 Dec.</p>
            <p>Today</p>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle> */}
      <>
        <div className="home-content">
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <div>
                <img
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
                  alt=""
                />
              </div>
              <div></div>
              {/* <h1>Slide 1</h1> */}
            </IonSlide>
            <IonSlide>
              <h1>Slide 2</h1>
            </IonSlide>
            <IonSlide>
              <h1>Slide 3</h1>
            </IonSlide>
          </IonSlides>

          <IonCard>
            <div className="d-flex align-items-center justify-content-between w-100 p-2">
              <div className="w-auto">
                <IonCardHeader className="py-2 px-1 px-0">
                  <IonCardTitle className="hedding">
                    1 week, 1 day pregnant
                  </IonCardTitle>
                  {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                </IonCardHeader>

                <IonCardContent className="p-0 px-1">
                  <p className="small-hedding fw-semibold">First trimester</p>
                  <IonRange className="w-100 ps-2 py-0"></IonRange>
                </IonCardContent>
              </div>
              <div>
                <IonIcon
                  className="p-2 card_icon_size"
                  icon={arrowForwardCircleOutline}
                ></IonIcon>
              </div>
            </div>
          </IonCard>

          <IonCard>
            <div className="d-flex align-items-center justify-content-between w-100 p-2">
              <div>
                <div className="card_image">
                  <img
                    src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
                    className="w-100 h-100 rounded-circle"
                  />
                </div>

              </div>
              <div className="w-auto ps-1">
                <IonCardContent className="p-0">
                  <p className="crd2_hedding fw-semibold">
                    Can food choices affect fertility?
                  </p>
                  {/* <IonRange className="w-100 ps-2 py-0"></IonRange> */}
                  <p className=" ">
                    A healthy, balanced, nutritious diet is importantfor
                    everyone, throughout the...
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
        </div>
      </>

      {/* </IonTitle>
          </IonToolbar>
        </IonHeader> */}
      {/* <ExploreContainer /> */}
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Tab1;
