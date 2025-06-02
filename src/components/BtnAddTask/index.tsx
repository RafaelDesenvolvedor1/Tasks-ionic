import React from "react";

import "./style.css";
import { IonButton, IonCard, IonCol, IonIcon } from "@ionic/react";
import { MdOutlineAddCircle } from "react-icons/md";
import { useMediaQuery } from "react-responsive";


type btnAdd = {
  id: string
}

export default ({id}:btnAdd) => {
    const isMobile = useMediaQuery({query: "(max-width: 1024px)"})
  return (
    <IonCol size={isMobile ? '12' : '3'} className={isMobile ? 'ion-margin-vertical': 'ion-margin'}>
      <IonButton id={id}  color="medium" className="btnAddTask" >
       <span><MdOutlineAddCircle size={90} /></span> 
      </IonButton>
    </IonCol>
  );
};
