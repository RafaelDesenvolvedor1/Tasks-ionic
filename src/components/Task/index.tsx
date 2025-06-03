import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { checkmark, create, trash } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./styles.css";
import BtnTask from "./BtnTask";

import { TaskContext } from "../../contexts/task";

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  checked: boolean;
}

type TaskCard = {
  task: TaskInterface;
};

export default ({ task }: TaskCard) => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  const [presentAlert] = useIonAlert();

  const { removeTask, checkTask, updateTask } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  function showAlert() {
    presentAlert({
      header: "Confirmação",
      message: "Você tem certeza que deseja excluir?",
      buttons: [
        "Cancelar",
        {
          text: "Confirmar",
          handler: () => removeTask(task.id),
        },
      ],
    });
  }

  function showAlertEdit() {
    presentAlert({
      header: "Editar Tarefa",
      inputs: [
        {
          name: "title",
          type: 'text',
          value: task.title,
          placeholder:'Titulo...'
        },
        {
          name: "description",
          type: 'textarea',
          value: task.description,
          placeholder:'Descrição...',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (data) => updateTask(task.id, data.title, data.description)
        }
      ]
    });
  }

  function openEditTask() {
    setIsEditing(!isEditing);
  }

  function handleRemoveTask() {
    showAlert();
  }

  return (
    <IonCol
      size={isMobile ? "12" : "3"}
      className={isMobile ? "ion-margin-vertical" : "ion-margin"}
    >
      <IonCard color={task.checked ? "success" : "default"}>
        <IonCardHeader>
          {/* <div className="alignEnd">
            <IonButton fill="clear" onClick={openEditTask}>
              <IonIcon slot="icon-only" color="dark" icon={create}></IonIcon>
            </IonButton>
          </div> */}

          <IonCardTitle
            className="ion-margin-vertical"
            contentEditable={isEditing}
          >
            <strong>{task.title} </strong>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent contentEditable={isEditing}>
          {task.description}
        </IonCardContent>

        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <BtnTask
              click={handleRemoveTask}
              disabled={isEditing}
              color="danger"
              icon={trash}
            />
            <BtnTask click={showAlertEdit} color="tertiary" icon={create} />
            <BtnTask
              click={() => checkTask(task.id)}
              disabled={isEditing}
              color="success"
              icon={checkmark}
            />
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonCol>
  );
};
