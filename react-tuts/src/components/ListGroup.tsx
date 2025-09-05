


function ListGroup() {
  const items = ["New York", "Philippines", "Singapore", "Paranaque", "Paris"];



  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
