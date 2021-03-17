import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, { name: "Batli", animal: "cat", breed: "street" }),
//     React.createElement(Pet, { name: "Sheru", animal: "Dog", breed: "street" }),
//     React.createElement(Pet, {
//       name: "kanye",
//       animal: "cat",
//       breed: "Persian",
//     }),
//   ]);
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me</h1>
//       <Pet
//     </div>
//   );
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
// ReactDOM.render(React.createElement(Pet), document.getElementById("root"));
