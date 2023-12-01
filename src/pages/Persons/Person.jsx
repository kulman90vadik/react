import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import "./person.scss";

const Person = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      console.log("https://api.gameofthronesquotes.xyz/v1/characters/" + slug);
      console.log(slug);
      try {
        const { data } = await axios.get("https://api.gameofthronesquotes.xyz/v1/characters/" + slug);
        setItems(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  }, []);

  console.log(items);


  if(!items) {
    return 'Loading'
  }

  return (
    <div className="person">
      {/* <div className="hous__container">
        <ul className="hous__list"> 
          {items.map((item) => item.members).flat().map((item, i) => {
            return (
              <li className="hous__item" key={i}>
                <article className="hous__card">
                  <span className="hous__name">{item.name}</span>
                </article>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default Person;
