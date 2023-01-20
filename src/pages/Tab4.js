import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Vector from "../assets/images/tab-4 image/Vector.svg";
import Group from "../assets/images/tab-4 image/Group.svg";
import Profile from "../assets/images/tab-4 image/DENISH.jpg";
import Name from "../assets/images/tab-4 image/name.png";
import Date from "../assets/images/tab-4 image/date.png";
import Week from "../assets/images/tab-4 image/week.png";
import Child from "../assets/images/tab-4 image/child.png";
import { closeOutline } from "ionicons/icons";
import "./Tab4.css";
import { IonNav } from "@ionic/core/components";
import { menuOutline, chevronBackOutline, createOutline, personOutline, peopleOutline } from "ionicons/icons"

const Tab4 = () => {
  return (
    <IonPage>
      <>

        {/* <div className="main_bg_img shadow-lg">
          <span className="cancel_icon">
            <IonIcon icon={closeOutline}></IonIcon>
          </span>
        </div>
        <div className="tab-4_main">
          <div className="d-flex align-items-center">
            <img src={Vector} alt="" className="me-2 hedding_img" />
            <h4 className="m-0 ms-1">Your weight and your fertility</h4>
          </div>

          <div className="mt-3 mb-4">

            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap m-0">
              Lorem Ipsum is simply dummy text of the printing and and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an of the unknown
              printer took a galley of type and scrambled it to a make a type
              specimen book It has survived not only five centuries, but also
              the leap into electronic typesetting remaining It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularized
              in the 1960s with the release{" "}
              <span class="read-more-target">
                Libero fuga facilis vel consectetur quos sapiente deleniti
                eveniet dolores tempore eos deserunt officia quis ab?
                Excepturi vero tempore minus beatae voluptatem!
              </span>
            </p>
            <label for="post-1" class="read-more-trigger p-0"></label>

          </div>

          <hr className="bg-black" />
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <img src={Group} alt="" className="me-2 hedding_img" />
              <h4 className="m-0 ms-1">BMI and fertility</h4>
            </div>

            <div className="d-flex align-items-top">
              <ul class="numbered-list p-0 mt-3">
                <li className="mb-2">
                  <p className="m-0 fs-6">
                    It is a long established fact that a reader will be when an
                    unknown distracted by the readable.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="m-0 fs-6">
                    The point of using Lorem Ipsum is that it has a more less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                  </p>
                </li>
                <li className="mb-2">
                  <p className="m-0 fs-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old Richard
                    McClintock, a Latin professor at Hampden remaining
                    essentially unchanged. It was popularized in the 1960s with
                    the release.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <IonHeader>
          <div className="header py-3 px-3 d-flex justify-content-between align-items-center" style={{ background: "#8870E6" }}>
            <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "#fff" }} />
            <p className="m-0 fw-bold fs-5 text-white">Profile</p>
            <IonIcon icon={menuOutline} style={{ fontSize: "24px", color: "#fff" }} />
          </div>
        </IonHeader>

        <IonContent>
          <div className="p-3" style={{ background: "#8870E6" }}>
            <div className="d-flex justify-content-center w-100 m-auto align-items-center">
              <div className="">
                <div className="h-50 w-50 m-auto rounded-circle border border-5 border-white">
                  <img src={Profile} className="w-100 h-auto rounded-circle" />
                </div>
              </div>
            </div>
            <p className="text-center mt-2 m-2 fs-5 fw-semibold text-white">Denish Donga</p>
          </div>
          <div className="p-3">
            <p className="fs-4 fw-semibold">Your Pregnancy</p>
            <div className="px-3">
              <div className="border-dark-subtle border-bottom">
                <div className="d-flex align-items-center pb-1">
                  <img className="me-2" src={Name} />
                  <p className="m-0 fw-semibold">Baby’s Name</p>
                </div>
                <input className="border-0 py-2 ps-4 w-100" placeholder="Type here..." />
              </div>
            </div>
            <div className="px-3">
              <div className="mb-2 mt-3 border-dark-subtle border-bottom">
                <div className="d-flex align-items-center pb-1">
                  <img className="me-2" src={Date} />
                  <p className="m-0 fw-semibold">Due date</p>
                </div>
                <input type="date" className="border-0 py-2 ps-4 w-100" />
              </div>
            </div>
            <div className="px-3">
              <div className="mb-2 mt-3 border-dark-subtle border-bottom">
                <div className="d-flex align-items-center pb-1">
                  <img className="me-2" src={Child} />
                  <p className="m-0 fw-semibold">First Child?</p>
                </div>
                <select className="border-0 py-2 ps-4 w-100">
                  <option value="Select">Select</option>
                  <option value="yes" >Yes</option>
                  <option value="no" >No</option>
                </select>
              </div>
            </div>
            <div className="px-3">
              <div className="mb-2 mt-3 border-dark-subtle border-bottom">
                <div className="d-flex align-items-center pb-1">
                  <img className="me-2" src={Week} />
                  <p className="m-0 fw-semibold">Show Week</p>
                </div>
                <select className="border-0 ps-4 py-2 w-100">
                  <option value="Select">Select</option>
                  <option value="currant" >Currant</option>
                  <option value="complete" >Complete</option>
                </select>
              </div>
            </div>

            <div className="edit-part">
              <p className="fs-4 fw-semibold">Account</p>
              <div className="d-flex px-3 mb-3 justify-content-between">
                <div className="border border-secondary-subtle gap-3 px-3 py-2 d-flex rounded-3" style={{ cursor: "pointer" }}>
                  <IonIcon icon={createOutline} className="fs-5" />
                  <p className="m-0">First Name</p>
                </div>
                <div className="border border-secondary-subtle gap-3 px-3 py-2 d-flex rounded-3" style={{ cursor: "pointer" }}>
                  <IonIcon icon={createOutline} className="fs-5" />
                  <p className="m-0">Last Name</p>
                </div>
              </div>
              <div className="d-flex px-3 justify-content-between">
                <div className="border border-secondary-subtle gap-3 py-2 d-flex rounded-3" style={{ cursor: "pointer", padding: "0 40px" }}>
                  <IonIcon icon={personOutline} className="fs-5" />
                  <p className="m-0">Age</p>
                </div>
                <div className="border border-secondary-subtle gap-3 py-2 d-flex rounded-3" style={{ cursor: "pointer", padding: "0 15px" }}>
                  <IonIcon icon={peopleOutline} className="fs-5" />
                  <p className="m-0">You are the</p>
                </div>
              </div>
              <button className="signout">Sign out</button>
            </div>
          </div>

        </IonContent>

      </>
    </IonPage >
  );
};

export default Tab4;
