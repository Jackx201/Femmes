import HeaderComponent from "../components/Header";
import TextEditorComponent from "../components/TextEditorComponent";
import styles from "../styles/Home.module.css";

const NuevoArticulo = () => {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={styles.editor}>
        <form method="POST">
          <TextEditorComponent
            header="Nuevo Artículo"
          ></TextEditorComponent>
        </form>
      </div>
    </>
  );
};

export default NuevoArticulo;
