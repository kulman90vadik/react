import "./houses.scss";
import { useSelector } from "react-redux";
import HousesListItem from './housesListItem';

const Houses = () => {

  const housesList = useSelector((state) => state.housesList.housesList);

  return (
    <div className="houses">
      {/* <div className="section"> */}
        <div className="houses__container">
          <ul className="houses__list">
            {housesList.map(item => <HousesListItem item={item}/>)}
          </ul>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Houses;
