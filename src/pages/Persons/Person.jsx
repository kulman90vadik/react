import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./person.scss";
import "../Quotes/quotes.scss";

const Person = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [randomItem, setRandomItem] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(
          "https://api.gameofthronesquotes.xyz/v1/character/" + slug
        );
        setItems(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  }, []);

  if (!items) {
    return "Loading";
  }

  const randomHandler = () => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(
          "https://api.gameofthronesquotes.xyz/v1/author/" + slug + "/" + 3
        );
        setRandomItem(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  };


  return (
    <div className="person">
      <div className="person__container">
        <div className="person__inner">
          {items.map((item) => {
            return (
              <div className="person__item" key={item.slug}>
              
                <div className="person__photo"></div>
                <span className="person__name">{item.name}</span>
                <span className="person__hous">{item.house.name}</span>
                <button className="btn-reset btn" onClick={randomHandler}>
                  Random Quotes
                </button>
                <ul className="quotes-list">
                  {randomItem.length > 0
                    ? randomItem.map((item) => {
                        return (
                          <li key={item.sentence} className="quotes-list__item">
                            <blockquote>{item.sentence}</blockquote>
                          </li>
                        );
                      })
                    : item.quotes.map((item) => {
                        return (
                          <li key={item} className="quotes-list__item">
                            <blockquote>{item}</blockquote>
                          </li>
                        );
                      })}
                </ul>
              
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Person;
