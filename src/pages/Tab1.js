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
import image9 from "../assets/images/tab-1 image/image 9.png";
import image10 from "../assets/images/tab-1 image/image 10.png";
import image11 from "../assets/images/tab-1 image/image 11.png";
import { IonRange } from "@ionic/react";
import roundImg from "../assets/images/tab-1 image/round-img.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Tab1.css";
import { Link } from "react-router-dom";

const Tab1 = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  return (

    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 bg-white">
          <p className="m-0 fs-5 fw-light fs-6">Monday,12 Dec.</p>
          <p className="m-0 fs-5 fw-semibold fs-6">Today</p>
        </div>
      </IonHeader>

      <>
        <IonContent>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
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
                      <IonRange className="w-100 IonRange ps-2 py-0"></IonRange>
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
                <div className="d-flex align-items-center w-100 p-3">
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
                      <p className="card-p">
                        A healthy, balanced, nutritious diet is importantfor
                        everyone, throughout the...
                      </p>
                      <div className="card-button d-flex mt-2">
                        <Link to={"/read"}>
                          <button className="btns">
                            READ
                          </button>
                        </Link>
                        {/* <ion-button className="btns" shape="round" color="medium">
                          READ
                        </ion-button> */}
                        {/* <ion-button className="btns" shape="round" color="medium">
                          ESSENTIALS
                        </ion-button> */}
                        <button className="btns ms-2">
                          ESSENTIALS
                        </button>
                      </div>
                    </IonCardContent>
                  </div>
                </div>
              </IonCard>
              <div className=" m-0 mt-4">
                <div className="yesterday">
                  <p>Yesterday</p>
                  <a href="">See More</a>
                </div>
                <IonCard className="rounded-4 shadow mt-3 m-0">
                  <div className="d-flex align-items-center py-3 px-2 w-100 p-2">
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
                        <p className="card-p">
                          A healthy, balanced, nutritious diet is importantfor everyone,
                          throughout the...
                        </p>
                        <div className="card-button d-flex mt-2">
                          <button className="btns">
                            READ
                          </button>
                          {/* <ion-button className="btns" shape="round" color="medium">
                          READ
                        </ion-button> */}
                          {/* <ion-button className="btns" shape="round" color="medium">
                          ESSENTIALS
                        </ion-button> */}
                          <button className="btns ms-2">
                            ESSENTIALS
                          </button>
                        </div>
                      </IonCardContent>
                    </div>
                  </div>
                </IonCard>

                <IonCard className="rounded-4 shadow mt-3 m-0">
                  <div className="d-flex align-items-center py-3 px-2 w-100 p-2">
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
                        <p className="card-p">
                          Breast enlargements are the UK’s most
                          popular cosmetics procedure, and...
                        </p>
                        <div className="card-button d-flex mt-2">
                          <button className="btns">
                            READ
                          </button>
                          {/* <ion-button className="btns" shape="round" color="medium">
                          READ
                        </ion-button> */}
                          {/* <ion-button className="btns" shape="round" color="medium">
                          ESSENTIALS
                        </ion-button> */}
                          <button className="btns ms-2">
                            ESSENTIALS
                          </button>
                        </div>
                      </IonCardContent>
                    </div>
                  </div>
                </IonCard>
                <IonCard className="rounded-4 shadow mt-3 m-0">
                  <div className="d-flex align-items-center py-3 px-2 w-100 p-2">
                    <div>
                      <div className="card_image">
                        <img src={image11} className="w-100 h-100" />
                      </div>
                    </div>
                    <div className="w-auto ps-1">
                      <IonCardContent className="p-0">
                        <p className="crd2_hedding fw-semibold text-dark">
                          Body odour during pregnancy{" "}
                        </p>
                        {/* <IonRange className="w-100 ps-2 py-0"></IonRange> */}
                        <p className="card-p">
                          “What is that smell? Is it me? Oh no!
                          it is!” We have all been there, right?...
                        </p>
                        <div className="card-button d-flex mt-2">
                          <button className="btns">
                            READ
                          </button>
                          {/* <ion-button className="btns" shape="round" color="medium">
                          READ
                        </ion-button> */}
                          {/* <ion-button className="btns" shape="round" color="medium">
                          ESSENTIALS
                        </ion-button> */}
                          <button className="btns ms-2">
                            ESSENTIALS
                          </button>
                        </div>
                      </IonCardContent>
                    </div>
                  </div>
                </IonCard>
              </div>
            </div>
          </div>
        </IonContent>
      </>
    </IonContent>
  );
};

export default Tab1;
