import { IonPage, IonContent, IonGrid, IonRow } from "@ionic/react";

import Header from "../components/Header";

import "./style.css";
import BtnAddTask from "../components/BtnAddTask";
import Modal from "../components/Modal";
import Task from "../components/Task";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";

import { TaskContext } from "../contexts/task";
import Footer from "../components/Footer";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width:780px)" });

  const { tasksList } = useContext(TaskContext);

  return (
    <IonPage>
      <Header />
      <main>
        <IonContent>
          <IonGrid>
            <IonRow
              className={
                isMobile
                  ? "ion-jusify-content-center"
                  : "ion-padding-horizontal"
              }
            >
              {tasksList.map((item: any) => (
                <Task key={item.id} task={item} />
              ))}
            </IonRow>
          </IonGrid>
          <Modal />
          <BtnAddTask id="open-modal" />
        </IonContent>
      </main>
      <Footer/>
    </IonPage>
  );
};

export default Home;
