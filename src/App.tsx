import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import { TaskProvider } from "./contexts/task";

const App = () => (
  <IonApp>
      <TaskProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" component={Home} />
          </IonRouterOutlet>
        </IonReactRouter>
      </TaskProvider>
  </IonApp>
);

export default App;
