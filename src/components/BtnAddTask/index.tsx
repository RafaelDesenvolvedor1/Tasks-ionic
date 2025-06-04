import "./style.css";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";


type btnAdd = {
  id: string
}

export default ({id}:btnAdd) => {
  return (
    <IonFab slot="fixed" horizontal="end"  vertical="bottom" className="ion-margin">
      <IonFabButton id={id}>
        <IonIcon icon={add}/>
      </IonFabButton>
    </IonFab>
  );
};
