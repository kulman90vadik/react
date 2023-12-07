import "./houses.scss";
import { useSelector } from "react-redux";
import HousesListItem from "./HousesListItem/HousesListItem";
import Loader from "../Loader/Loader";

const Houses = ({ loading }) => {
  const valueSearch = useSelector((state) => state.valueSearch.valueSearch);
  const housesList = useSelector((state) => state.housesList.housesList);

  return (
    <div className="houses">
      <div className="houses__container">
        <ul className="houses__list">
      
          {loading === "error" ? (
            <li className="error">Error receiving data. 
              try later</li>
          ) : loading === "loading" ? (
            [...Array(10)].map((item, i) => <Loader key={i} />)
          ) : (
            housesList
              .filter((obj) => {
                return obj.name
                  .toLowerCase()
                  .includes(valueSearch.toLowerCase());
              })
              .map((item) => <HousesListItem key={item.slug} item={item} />)
          )}

        </ul>
      </div>
    </div>
  );
};

export default Houses;
