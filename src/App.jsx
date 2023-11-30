import "./scss-setings/includes.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Header/Header";
import Persons from "./pages/Persons/Persons";
import Quotes from "./pages/Quotes/Quotes";
import Houses from "./pages/Houses/Houses";

import { addToHouses } from "./redux/slices/housesClise";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    (async () => {
      try {
        const res = await axios.get("https://api.gameofthronesquotes.xyz/v1/houses");
        dispatch(addToHouses(res.data));
        console.log(res.data);
        // setLoading(false);
      } catch (error) {
        console.warn(error);
        // setLoading(false);
      } finally {
        console.log("Выполниться в любом случаи");
      }
    })();

  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<Houses />} />
        <Route path="persons" element={<Persons />} />
        <Route path="quotes" element={<Quotes />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default App;
