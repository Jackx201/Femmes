import CardComponent from "../components/Card";
import HeaderComponent from "../components/Header";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={styles.container}>
      <div className="grid my-3">
      <div className="col"><CardComponent></CardComponent></div>
      <div className="col"><CardComponent></CardComponent></div>
      <div className="col"><CardComponent></CardComponent></div>
      <div className="col"><CardComponent></CardComponent></div>
      </div>
      </div>
    </>
  );
};

export default Home;
