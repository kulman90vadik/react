import { Link } from "react-router-dom";

const HousesListItem = ({ item }) => {
  return (
    <li className="houses__item">
      <article className="houses__card">
        <Link className="houses__link" to={`/houses/${item.slug}`}>
          <span className="houses__name">{item.name}</span>
        </Link>
      </article>
    </li>
  );
};

export default HousesListItem;
