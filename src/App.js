import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle, home } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import Tab5 from "./pages/Tab5";
// import Home from "../src/assets/images/tab images/home.png"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Home from "../src/assets/images/tab-images/Home.svg"
import Baby from "../src/assets/images/tab-images/Baby.svg"
import Me from "../src/assets/images/tab-images/Me.svg"
import User from "../src/assets/images/tab-images/User.svg"
import Menu from "../src/assets/images/tab-images/Menu.svg"
import "./App.css"

/* Theme variables */
import "./theme/variables.css";
import { Read } from "./pages/Read";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Tab1 />
          </Route>
          <Route exact path="/read">
            <Read />
          </Route>
          <Route exact path="/baby">
            <Tab2 />
          </Route>
          <Route path="/me">
            <Tab3 />
          </Route>
          <Route path="/user">
            <Tab4 />
          </Route>
          <Route path="/denny">
            <Tab5 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="icones">
          <IonTabButton tab="tab1" href="/home" className="icon-img">
            {/* <IonIcon icon={home} /> */}
            <img src={Home} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/baby" className="icon-img">
            {/* <IonIcon icon={ellipse} /> */}
            <img src={Baby} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/me" className="icon-img">
            {/* <IonIcon icon={square} /> */}
            <img src={Me} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/user" className="icon-img">
            {/* <IonIcon icon={home} /> */}
            <img src={User} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/denny" className="icon-img">
            {/* <IonIcon icon={home} /> */}
            <img src={Menu} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
