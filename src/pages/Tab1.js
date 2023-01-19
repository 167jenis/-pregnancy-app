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
import { arrowForwardOutline } from "ionicons/icons";
import { IonRange } from "@ionic/react";
import roundImg from "../assets/images/tab-1 image/round-img.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Tab1.css";

const Tab1 = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (
    <IonPage>
      <IonTitle>
        <p className="m-0 fs-5 fw-light pt-2">Monday,12 Dec.</p>
        <p className="m-0 fs-5 fw-semibold pb-1">Today</p>
      </IonTitle>

      <>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide1">
                <div className="text-start slide1_contain">
                  <h3 className="m-0 text-white">
                    Good Morning <br /> Fezz
                  </h3>
                  <button className="slide1_btn mt-1">Your Profile</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          {/* <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <div>
                <img
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
                  alt=""
                />
              </div>

            </IonSlide>
            <IonSlide>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae dicta molestiae quis deserunt non nemo nesciunt,
                aperiam quibusdam doloremque magnam?
              </p>
            </IonSlide>
            <IonSlide>
              <h1>Slide 3</h1>
            </IonSlide>
          </IonSlides> */}

          <div className="home-content">
            <IonCard className="rounded-4 m-0">
              <div className="d-flex align-items-center justify-content-between w-100 p-2 card1_main">
                <div className="w-auto">
                  <IonCardHeader className="py-2 px-1 px-0">
                    <IonCardTitle className="hedding">
                      1 week, 1 day pregnant
                    </IonCardTitle>
                    {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                  </IonCardHeader>

                  <IonCardContent className="p-0 px-1">
                    <p className="small-hedding fw-semibold text-dark">
                      First trimester
                    </p>
                    <IonRange className="w-100 ps-2 py-0"></IonRange>
                  </IonCardContent>
                </div>
                <div>
                  <IonIcon
                    className="card_icon_size me-1"
                    icon={arrowForwardOutline}
                  ></IonIcon>
                </div>
              </div>
            </IonCard>

            <IonCard className="rounded-4 shadow m-0 mt-3">
              <div className="d-flex align-items-center justify-content-between w-100 p-2">
                <div>
                  <div className="card_image">
                    <img
                      src={roundImg}
                      className="w-100 h-100 rounded-circle"
                    />
                  </div>
                </div>
                <div className="w-auto ps-1">
                  <IonCardContent className="p-0">
                    <p className="crd2_hedding fw-semibold text-dark">
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
        </div>
      </>
    </IonPage>
  );
};

export default Tab1;
