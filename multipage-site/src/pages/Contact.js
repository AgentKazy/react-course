import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, contact us here...</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        laudantium assumenda rerum velit nam autem nostrum et maxime
        voluptatibus a, quisquam ipsa obcaecati eveniet quasi, tenetur officiis,
        consequuntur magni cum?
      </p>
    </div>
  );
}
