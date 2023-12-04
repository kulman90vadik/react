import "./quotes.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quotes = () => {
  const navigate = useNavigate();
  const [random, setRandom] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(
          "https://api.gameofthronesquotes.xyz/v1/random/5"
        );
        setRandom(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  }, []);

  const randomHandler = () => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(
          "https://api.gameofthronesquotes.xyz/v1/random/5"
        );
        setRandom(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchCart();
  };

  return (
    <div className="quotes">
      <div className="quotes__container">
        <div className="quotes__inner">
          <ul className="quotes-list">
            {random.map((item) => {
              return (
                <li key={item.sentence} className="quotes-list__item">
                  <blockquote>{item.sentence}</blockquote>
                </li>
              );
            })}
          </ul>
          <button className="btn-reset btn" onClick={randomHandler}>
            Random Quotes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
