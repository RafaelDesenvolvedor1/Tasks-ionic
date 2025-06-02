import React, { createContext, useState, type ReactNode } from "react";
import type { TaskInterface } from "../components/Task";
import { v4 } from "uuid";

import { useIonToast } from "@ionic/react";

type Props = {
  children: ReactNode;
};

export interface TaskContextType {
  tasksList: TaskInterface[];
  addTask: (titleTask: string, descriptionTask: string) => void;
  removeTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

export function TaskProvider({ children }: Props) {
  // const { showToast } = useToast();
  const [present] = useIonToast();

  const [tasksList, setTasksList] = useState<TaskInterface[]>([]);

  function showToast(message: string, color: string): void{
    present({
      message: message,
      color: color,
      duration: 2000,
      position:"bottom"
    })
  }

  function addTask(titleTask: string, descriptionTask: string): void {
    const newTask = {
      id: v4(),
      title: titleTask,
      description: descriptionTask,
      checked: false,
    };

    try {
      setTasksList([...tasksList, newTask]);
      showToast("Task Criado com sucesso!", "success");
    } catch (err) {}
  }

  function removeTask(id: string): void {
    const newTasksList = tasksList.filter((task) => task.id != id);

    try {
      setTasksList(newTasksList);
      showToast("Task removida com sucesso!", "success");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasksList,

        addTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
