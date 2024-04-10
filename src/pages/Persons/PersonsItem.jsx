import { Link } from "react-router-dom";


const PersonsItem = ({item}) => {

// console.log(item);

  return ( 
    <li className="persons__item">
      <article className="persons__card">
      <Link className="houses__link" to={`/persons/${item.slug}`}>
         <span className="persons__name">{item.name}</span>
      </Link>
      </article>
    </li>
  );
}

 




export default PersonsItem;