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
} from "@ionic/react";
import { checkmark, create, trash } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./styles.css";
import BtnTask from "./BtnTask";

import { TaskContext } from "../../contexts/task";

  export interface TaskInterface{
    id: string;
    title: string;
    description: string;
    checked: boolean;
  }

  type TaskCard = {
    task: TaskInterface
  }


export default ({task}: TaskCard ) => {
  let isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  const {removeTask} = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  function openEditTask(){
    setIsEditing(!isEditing);
  }

  function handleRemoveTask(){
    
  }

  return (
    <IonCol
      size={isMobile ? "12" : "3"}
      className={isMobile ? "ion-margin-vertical" : "ion-margin"}
    >
      <IonCard>
        <IonCardHeader>

          <div className="alignEnd">
            <IonButton fill="clear" onClick={openEditTask}>
              <IonIcon slot="icon-only" color="dark" icon={create}></IonIcon>
            </IonButton>
          </div>

          <IonCardTitle className="ion-margin-vertical" contentEditable={isEditing}><strong>{task.title} </strong></IonCardTitle>
        </IonCardHeader>

        <IonCardContent contentEditable = {isEditing}>
         {task.description}
        </IonCardContent>

        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <BtnTask click={() => removeTask(task.id)} disabled={isEditing} color="danger" icon={trash}/>
            <BtnTask disabled={!isEditing} color="tertiary" icon={create}/>
            <BtnTask disabled={isEditing} color="success" icon={checkmark}/>
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonCol>
  );
};
