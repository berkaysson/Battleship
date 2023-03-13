// import UI from "./Game/UI";
// import "./style/style.css";

// UI.render();

import UI from "./Game/UI";
import "./style/style.css";

const render = () => {
  UI.render();
};

if (module.hot) {
  module.hot.accept("./Game/UI", () => {
    render();
  });

  module.hot.accept("./style/style.css", () => {
    const link = document.querySelector('link[href^="./style/style.css"]');
    link.href = "./style/style.css" + "?ver=" + new Date().getTime();
  });
}

render();