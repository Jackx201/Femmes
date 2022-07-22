import HeaderComponent from "../components/Header";
import TextEditorComponent from "../components/TextEditorComponent";
import styles from "../styles/Home.module.css";

const newPost = () => {
   const handleSubmit = (event: any) => {
    event.preventDefault();
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={styles.editor}>
        <form onSubmit={handleSubmit}>
          <TextEditorComponent
            header="Nueva Publicación"
          ></TextEditorComponent>
        </form>
      </div>
    </>
  );
};

export default newPost;
