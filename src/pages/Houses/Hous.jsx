import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./hous.scss";

const Hous = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        console.log("https://api.gameofthronesquotes.xyz/v1/house/" + slug);
        const { data } = await axios.get(
          "https://api.gameofthronesquotes.xyz/v1/house/" + slug
        );
        setItems(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  }, []);

  return (
    <div className="hous">
      <div className="hous__container">
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
      </div>
    </div>
  );
};

export default Hous;
