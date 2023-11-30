

const housesListItem = ({item}) => {
  return ( 
    <li className="houses__item">
      <article className="houses__card">
        <span className="houses__name">{item.name}</span>
      </article>
    </li>
  );
}
 



export default housesListItem;