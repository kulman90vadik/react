

const housesListItem = ({item}) => {
  return ( 
    <li className="houses__item">
      <article className="houses__card">
        <div className="houses__name">{item.name}</div>
      </article>
    </li>
  );
}
 



export default housesListItem;