import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headerStyle = {};
  // const headerStyle = {
  //   color: "red",
  //   fontSize: "48px",
  // };
  return (
    <header className="header">
      <h1 style={headerStyle}>Fast React Pizza</h1>
    </header>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openTime = 9;
  const closeTime = 22;
  const isOpen = currentHour >= openTime && currentHour <= closeTime;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && <Order openTime={openTime} closeTime={closeTime} />}
    </footer>
  );
}

const Order: React.FC<{ openTime: number; closeTime: number }> = ({
  openTime,
  closeTime,
}) => {
  return (
    <div className="order">
      <p>
        {" "}
        We are open from {openTime}:00 until {closeTime}:00. Come visit or order
        online
      </p>

      <button className="btn">Order</button>
    </div>
  );
};

function Menu() {
  return (
    <div>
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzaData.length > 0 ? (
          <>
            <p>We have very authentic mouth-watering pizzas</p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaDTO={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : null}
      </main>
    </div>
  );
}

type PizzaDTO = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
};

const Pizza: React.FC<{ pizzaDTO: PizzaDTO }> = ({ pizzaDTO }) => {
  return (
    <li className="pizza">
      <img src={pizzaDTO.photoName} alt={pizzaDTO.name} />
      <div>
        <h3>{pizzaDTO.name}</h3>
        <p>{pizzaDTO.ingredients}</p>
        <span>{pizzaDTO.soldOut ? "SOLD OUT" : pizzaDTO.price}</span>
      </div>
    </li>
  );
};

// function Pizza(props: { pizzaObj: PizzaDTO }) {
//   return (
//     <li className="pizza">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price + 3}</span>
//       </div>
//     </li>
//   );
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
