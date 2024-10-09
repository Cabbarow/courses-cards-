import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(3);
  const sayiArttir = () => {
    setValue(value + 2);
  };
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nemo eius repellat cupiditate corporis animi perferendis, quis placeat. Asperiores quibusdam magni possimus ratione ullam soluta est nihil velit corrupti."
              />
            </div>
            <div className="column">
              <Course
                image={Boostrap}
                title="Boostrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nemo eius repellat cupiditate corporis animi perferendis, quis placeat. Asperiores quibusdam magni possimus ratione ullam soluta est nihil velit corrupti."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Ccsharp"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nemo eius repellat cupiditate corporis animi perferendis, quis placeat. Asperiores quibusdam magni possimus ratione ullam soluta est nihil velit corrupti."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nemo eius repellat cupiditate corporis animi perferendis, quis placeat. Asperiores quibusdam magni possimus ratione ullam soluta est nihil velit corrupti."
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <button onClick={sayiArttir} className="button is-dark">
          Sayıyı 2 Arttır
        </button>
        <div>Yeni Sayı:{value}</div>
      </div>
    </div>
  );
}

export default App;
