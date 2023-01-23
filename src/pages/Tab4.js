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
    <IonContent>
      <>


        <IonHeader>
          <div className="header py-3 px-3 d-flex justify-content-between align-items-center" style={{ background: "#FF8686" }}>
            <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "#fff" }} />
            <p className="m-0 fw-bold fs-5 text-white">Profile</p>
            <IonIcon icon={menuOutline} style={{ fontSize: "24px", color: "#fff" }} />
          </div>
        </IonHeader>

        <IonContent>
          <div className="p-3" style={{ background: "#FF8686" }}>
            <div className="d-flex justify-content-center w-100 m-auto align-items-center">
              <div className="">
                <div className="profile-img m-auto rounded-circle border border-5 border-white">
                  <img src={Profile} className="w-100 h-100 rounded-circle" />
                </div>
              </div>
            </div>
            <p className="text-center mt-2 m-2 fs-5 fw-semibold text-white">Utsav Thakkar</p>
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
    </IonContent>
  );
};

export default Tab4;
