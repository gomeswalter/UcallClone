import "./styles.css";
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <section className="AppProduct">
        <span className="setaLeft">-</span>
        <img
          className="AppPic"
          src="https://recrutamento.ucall.co.ao/images/person.png"
        />
        <div className="AppTitle">
          A HUAWEI ESTÁ A RECRUTAR
          <div className="AppCargo">
            <h3>GESTOR DE PROJECTOS</h3>
            <br />
            <div className="AppDetalhes">Mais detalhes</div>
            <br />
          </div>
        </div>
        <span className="setaDireito">-</span>
      </section>
      <img
        className="editar"
        src="https://cms.digitalfactory.co.ao/api/assets/ucall-recrutamento/82d35aa1-091d-4010-9b56-5946976c445d/"
      />
      <hr></hr>
      <span className="projectos">PROJECTOS</span>
    </div>
  );
}
