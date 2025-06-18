import { IonButton, IonCol, IonIcon } from "@ionic/react";



interface Buttons {
    color: string;
    icon: string;
    disabled ?: boolean;
    click: ()=>void;
}


export default ({color, icon, disabled, click}:Buttons) => {
  return (
    <IonCol size="12">
      <IonButton disabled={disabled}   size="large" color={color} onClick={click} >
        <IonIcon slot="icon-only" color="light" icon={icon} />
      </IonButton>
    </IonCol>
  );
};
