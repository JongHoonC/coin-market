import React from "react";
import { Reset } from "styled-reset";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import CoinContainer from "./CoinMarket/CoinContainer";
import TodoList from "./TodoList/TodoContainer";
import CoinDetail from "./CoinMarket/CoinDetail";

function App() {
  return (
    <div>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoinContainer" element={<CoinContainer />} />
        <Route path="/CoinContainer/:name" element={<CoinDetail />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
