import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addSlugHous } from "../../redux/slices/housesClise";

const HousesListItem = ({item}) => {
  // const dispatch = useDispatch();
  return ( 
    <li className="houses__item">
      <article className="houses__card">
        <Link className="houses__link" to={`/hous/${item.slug}`}>
           <span className="houses__name">{item.name}</span>
        </Link>
      </article>
    </li>
  );
}
 




export default HousesListItem;