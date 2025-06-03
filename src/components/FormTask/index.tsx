import React, { useContext } from "react";

import "./styles.css";
import { Controller, useForm } from "react-hook-form";
import { IonButton, IonInput, IonNote, IonTextarea } from "@ionic/react";

import { TaskContext } from "../../contexts/task";

interface FormData {
  title: string;
  description: string;
}

export default () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const {addTask} = useContext(TaskContext);

  const onSubmit = (data: FormData) => {
    //console.log("dados enviados: ", data);

    addTask(data.title, data.description);

    reset();

  };

  // function errTitle(data: any){
  //   if(errors.title){
  //     showToast("O Titulo é obrigatório", "danger")
  //   }
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <IonInput
              className="ion-margin-vertical "
              label="Titulo da tarefa..."
              labelPlacement="floating"
              // placeholder="Titulo da tarefa..."
              fill="outline"
              autoFocus
              {...field}
    
            />
          )}
        />
      </div>
      {errors.title && <IonNote color="danger">O Titulo é obrigatório</IonNote>}
      <div>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <IonTextarea
              className="ion-margin-vertical"
              label="Descrição..."
              labelPlacement="floating"
              // placeholder="Descrição..."
              fill="outline"
              rows={10}
              autoGrow
              {...field}
            />
          )}
        />
      </div>
      {errors.description && (
        <IonNote color="danger">A descrição é obrigatória</IonNote>
      )}

      <IonButton className="ion-padding-vertical" expand="block" type="submit">
        Criar Tarefa
      </IonButton>
    </form>
  );
};
