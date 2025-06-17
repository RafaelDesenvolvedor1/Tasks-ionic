import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  useIonAlert,
} from "@ionic/react";
import { checkmark, create, trash } from "ionicons/icons";
import { useContext } from "react";
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

  // const [isEditing, setIsEditing] = useState<boolean>(false);

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
          type: "text",
          value: task.title,
          placeholder: "Titulo...",
        },
        {
          name: "description",
          type: "textarea",
          value: task.description,
          placeholder: "Descrição...",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Salvar",
          handler: (data) => updateTask(task.id, data.title, data.description),
        },
      ],
    });
  }

  // function openEditTask() {
  //   setIsEditing(!isEditing);
  // }

  function handleRemoveTask() {
    showAlert();
  }

  return (
    <IonCol
      size={isMobile ? "12" : "3"}
      className={isMobile ? "ion-margin-vertical" : "ion-margin"}
    >
      <IonCard
        className="ion-padding-vertical"
        color={task.checked ? "success" : "default"}
      >
        <IonCardHeader>
          <IonCardTitle>
            <strong>{task.title} </strong>
          </IonCardTitle>
          <IonCardSubtitle>17/03/2025</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent /*contentEditable={isEditing}*/>
          {task.description}
        </IonCardContent>

        {/* <IonGrid className="containerButtons">
          <IonRow class="ion-justify-content-center">
            <BtnTask
              click={() => checkTask(task.id)}
              color="success"
              icon={checkmark}
            />
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <BtnTask click={showAlertEdit} color="tertiary" icon={create} />
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <BtnTask click={handleRemoveTask} color="danger" icon={trash} />
          </IonRow>
        </IonGrid> */}
      </IonCard>
    </IonCol>
  );
};
