
import clientPromise from "../lib/mongodb";

export default function namePeople({ people }) {
  return (
    <div>
      <h1>Hola sr/a</h1>
      <ul>
        {people.map((peop) => (
          <li>
            <h2>Hola, Bienvenido {peop.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    try {
        await clientPromise   
        const  connected = await clientPromise ;
        const db = connected.people.find({});
//   const people = await connected
//   .people
//   .find({})
//   .toArray();
        console.log(db);
        return {
            props:{ 
                people: JSON.parse(JSON.stringify(db)),
            }
        }
    }
    catch (e) {
        console.error(e)
    }
}
  