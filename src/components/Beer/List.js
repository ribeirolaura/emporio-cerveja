import { useEffect, useState } from 'react';

export function List() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []); //utilizado para evitar o loop que o useState causa nessa function

  return (
    <ul className="Beer-List">
      {beers.map((beer) => (
        <li key={beer.id}> {beer.name} </li>
      ))}
    </ul>
  );
}
