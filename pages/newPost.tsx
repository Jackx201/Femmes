import HeaderComponent from "../components/Header";
import TextEditorComponent from "../components/TextEditorComponent";
import styles from "../styles/Home.module.css";

const newPost = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={styles.editor}>
        <form action="">
          <TextEditorComponent
            header="Nueva Publicación"
          ></TextEditorComponent>
        </form>
      </div>
    </>
  );
};

export default newPost;
