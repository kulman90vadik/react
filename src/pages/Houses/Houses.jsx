import "./houses.scss";
import { useSelector } from "react-redux";
import HousesListItem from './HousesListItem';

const Houses = () => {
  const valueSearch = useSelector((state) => state.valueSearch.valueSearch);
  const housesList = useSelector((state) => state.housesList.housesList);
// console.log(housesList);


  return (
    <div className="houses">
        <div className="houses__container">
          <ul className="houses__list">
            {housesList
            
            .filter((obj) => {
              return obj.name.toLowerCase().includes(valueSearch.toLowerCase());
            })
            .map(item => <HousesListItem key={item.slug} item={item} />)
            
            }
          </ul>
        </div>
    </div>
  );
};

export default Houses;
