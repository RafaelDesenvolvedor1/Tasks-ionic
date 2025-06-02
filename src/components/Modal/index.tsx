import type { OverlayEventDetail } from "@ionic/core/components";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";

import React, { useRef } from "react";
import FormTask from "../FormTask";


export default () => {
  const modal = useRef<HTMLIonModalElement>(null);

  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {}

  return (
    <IonModal
      ref={modal}
      trigger="open-modal"
      onWillDismiss={(event) => onWillDismiss(event)}
    >
      <IonHeader class="ion-padding" translucent>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={() => modal.current?.dismiss()}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle color="dark" size="large">
            <strong>Criar Tarefa</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormTask />
      </IonContent>
    </IonModal>
  );
};
