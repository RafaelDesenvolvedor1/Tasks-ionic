import { IonFooter, IonIcon, IonNote, IonRow} from "@ionic/react";
import { logoIonic } from "ionicons/icons";
import { FaReact } from "react-icons/fa";

import './style.css'

export default () => (
  <IonFooter>
    <IonRow className="ion-padding-vertical ion-justify-content-center">
        <IonNote>Desenvolvido por <strong>&copy; Rafael Santos <IonIcon icon={logoIonic}/> <FaReact /></strong></IonNote>
    </IonRow>
  </IonFooter>
);
