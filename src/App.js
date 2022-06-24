// npx create-react-app portfolio-react
// npm i react-router-dom (npm i react-router-dom@5.3.0)
// npx json-server --watch dados.json --port 5000
// npm install @material-ui/core --save

import React from "react";

// É utilizado na navagação entre as páginas da SPA.
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Nova sintaxe
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Erro404 from "./pages/Erro404.jsx";

import Ps4 from "./pages/Ps4.jsx";
import Ps4Jogos from "./pages/Ps4Jogos.jsx";
import Ps4Acessorios from "./pages/Ps4Acessorios.jsx";

import Xbox from "./pages/Xbox.jsx";
import XboxJogos from "./pages/XboxJogos.jsx";
import XboxAcessorios from "./pages/XboxAcessorios.jsx";

import NSwitch from "./pages/Switch.jsx";
import NSwitchJogos from "./pages/SwitchJogos.jsx";
import NSwitchAcessorios from "./pages/SwitchAcessorios.jsx";

import Historia from "./pages/Historia.jsx";
import Contato from "./pages/Contato.jsx";
import Localizacao from "./pages/Localizacao.jsx";
import Informacoes from "./pages/Informacoes.jsx";

import Produto from "./pages/Produto.jsx";

import "./assets/css/reset.css";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>

            <Route path="/ps4" element={<Ps4/>}/>
            <Route path="/ps4/j" element={<Ps4Jogos/>}/>
            <Route path="/ps4/a" element={<Ps4Acessorios/>}/>

            <Route path="/xbox" element={<Xbox/>}/>
            <Route path="/xbox/j" element={<XboxJogos/>}/>
            <Route path="/xbox/a" element={<XboxAcessorios/>}/>

            <Route path="/switch" element={<NSwitch/>}/>
            <Route path="/switch/j" element={<NSwitchJogos/>}/>
            <Route path="/switch/a" element={<NSwitchAcessorios/>}/>

            <Route path="/historia" element={<Historia/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/localizacao" element={<Localizacao/>}/>
            <Route path="/informacoes" element={<Informacoes/>}/>
            <Route path="/produto/:id" element={<Produto/>}/>
            <Route path="/produto/*" element={<Erro404/>}/>
          </Routes>
      </Router>
    </>
  );
};

export default App;
