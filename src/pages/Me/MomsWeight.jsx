import { IonContent, IonHeader, IonIcon, IonLabel } from "@ionic/react";
import axios from "axios";
import {
  chevronBackOutline,
  navigate,
  personCircleOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./me.css";

export const MomsWeight = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "true");

    fetch("https://169c-49-43-32-156.in.ngrok.io/v1/user/weight/getWeight", {
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const [date, setdate] = useState("");
  const [weight, setweight] = useState("");
  const [monthNumber, setmonth] = useState("");
  const [user,setUser] = useState("");

  const location = useLocation();
  const selectedValue = new URLSearchParams(location.search).get(
    "selectedValue"
  );
  console.log(selectedValue);
  const history = useHistory();
  const handleClick = () => {
    history.push("/momWeight2");
  };

  const handleSubmit = async (e) => {
    const wdataa = {
      user_id : "6412af6bbdfc42c19fb00f6c",
      date: date,
      weight: selectedValue,
      monthNumber: monthNumber,
    };
    console.log(wdataa, "data==>>>");
    try {
      const response = await axios.post(
        "https://d092-2405-201-2029-a83c-18e3-8154-c699-46af.in.ngrok.io/v1/user/weight/addWeight/",
        wdataa
      );
      console.log(response);
      console.log("weightdataaa", date, weight, monthNumber, user);
      navigate();
    } catch (error) {}
  };

  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Mom's Weight</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div>
        <input
          class="ridge"
          type="text"
          value={selectedValue}
          name="weight"
          placeholder="Enter Weight"
          onClick={handleClick}
          onChange={(e) => setweight(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          class="ridge"
          type="text"
          value={monthNumber}
          name="month"
          placeholder="Enter Month Number"
          onChange={(e) => setmonth(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          class="ridge"
          type="datetime-local"
          value={date}
          name="date"
          onChange={(e) => setdate(e.target.value)}
        ></input>
      </div>
      <button onClick={() => handleSubmit()}>SUBMIT</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
              <th>MonthNumber</th>
            </tr>
          </thead>
          <tbody>
            {console.log("dddd", data)}
            {data?.data?.map((user) => (
              <tr key={user.user_id}>
                <td>{user.date}</td>
                <td>{user.weight}</td>
                <td>{user.monthNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </IonContent>
  );
};
