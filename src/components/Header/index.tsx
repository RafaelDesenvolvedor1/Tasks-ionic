import { IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from "@ionic/react";
import React from "react";

// import { isPlatform, getPlatforms } from "@ionic/react";

import "./style.css";

import logo from "../../img/Tasks/Logo_Tasks.svg";
import { useMediaQuery } from "react-responsive";

export default () => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <IonHeader class="header">
      <IonToolbar>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size={isMobile ? "8" : "2"}>
              <div>
                <img src={logo} alt="logo do projeto" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};
