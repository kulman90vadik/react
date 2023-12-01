import "./persons.scss";
import { useSelector } from "react-redux";
import PersonsItem from "./PersonsItem";

const Persons = () => {
  const personsList = useSelector((state) => state.personsList.personsList);
  const valueSearch = useSelector((state) => state.valueSearch.valueSearch);

  // updateSearchValuePersons
// console.log(personsList);
  // let arrPersons = personsList.map((item) => item.members).flat();

  return (

    <div className="persons">
      <div className="persons__container">
        <ul className="persons__list">
          {personsList
          .map((item) => item.members)
          .flat()
          .filter((obj) => {
            return obj.name.toLowerCase().includes(valueSearch.toLowerCase());
          })
          .map((item) => <PersonsItem key={item.slug} item={item} />)}
        </ul>
      </div>
    </div>

  );
};

export default Persons;
