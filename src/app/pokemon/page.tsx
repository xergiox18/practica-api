import DragonballList from "../features/pokemon/components/pokemon-list";
import { dragonballResponse } from "../features/pokemon/server/dto";

export default async function Dragonball() {
  try {
    const result: Response = await fetch(
      "https://dragonball-api.com/api/characters"
    );

    if (!result.ok) {
      throw new Error(`Error ${result.status}: ${result.statusText}`);
    }

    const data: dragonballResponse = await result.json();
    console.log(data); // Verifica la estructura de los datos recibidos

    return <DragonballList characters={data.items} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        Error al cargar los personajes. Por favor, inténtalo de nuevo más tarde.
      </div>
    );
  }
}
