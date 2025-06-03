import React from "react";

import "./style.css";
import { IonButton, IonCard, IonCol, IonFab, IonFabButton, IonIcon } from "@ionic/react";
// import { MdOutlineAddCircle } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { add } from "ionicons/icons";


type btnAdd = {
  id: string
}

export default ({id}:btnAdd) => {
    const isMobile = useMediaQuery({query: "(max-width: 1024px)"})
  return (
    // <IonCol size={isMobile ? '12' : '3'} className={isMobile ? 'ion-margin-vertical': 'ion-margin'}>
    //   <IonButton id={id}  color="medium" className="btnAddTask" >
    //    <span><MdOutlineAddCircle size={90} /></span> 
    //   </IonButton>
    // </IonCol>

    <IonFab slot="fixed" horizontal="end"  vertical="bottom" className="ion-margin">
      <IonFabButton id={id}>
        <IonIcon icon={add}/>
      </IonFabButton>
    </IonFab>
  );
};
