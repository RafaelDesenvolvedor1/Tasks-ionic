import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import React from "react";



interface Buttons {
    color: string;
    icon: string;
    disabled ?: boolean;
    click: ()=>void;
}


export default ({color, icon, disabled, click}:Buttons) => {
  return (
    <IonCol size="3">
      <IonButton disabled={disabled}  shape="round" size="large" color={color} onClick={click}>
        <IonIcon slot="icon-only" color="light" icon={icon} />
      </IonButton>
    </IonCol>
  );
};
