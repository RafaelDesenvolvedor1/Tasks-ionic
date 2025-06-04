import { IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from "@ionic/react";

// import { isPlatform, getPlatforms } from "@ionic/react";

import "./style.css";

import logo from "../../img/Tasks/Logo_Tasks_Novo.svg";
import { useMediaQuery } from "react-responsive";

export default () => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  // const isAndroid = isPlatform('android');
  return (
    <IonHeader className="header">
      <IonToolbar>
        <IonGrid>
          <IonRow className="ion-justify-content-center">

            <IonCol size={isMobile ? "6" : "2"}>
            
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
