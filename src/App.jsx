import "./scss-setings/includes.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Header/Header";
import Persons from "./pages/Persons/Persons";
import Quotes from "./pages/Quotes/Quotes";
import Houses from "./pages/Houses/Houses";
import Hous from "./pages/Houses/Hous";
import Person from "./pages/Persons/Person";

import { addToHouses } from "./redux/slices/housesClise";
import { addToPersons } from "./redux/slices/personsClise";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('loading');

  useEffect(() => {

    (async () => {
      setLoading('loading');
      try {
        const houses = await axios.get("https://api.gameofthronesquotes.xyz/v1/houses");
        dispatch(addToHouses(houses.data));
        dispatch(addToPersons(houses.data));
        setLoading('success');
      } catch (error) {
        console.warn(error);
        setLoading('error');
      } 
    })();

  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<Houses loading={loading} />} />
        
        <Route path="persons" element={<Persons />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="houses/:slug" element={<Hous />} />
        <Route path="persons/:slug" element={<Person />} />
      </Routes>
    </>
  );
};

export default App;
