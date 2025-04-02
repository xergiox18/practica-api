import DragonballList from "../app/features/pokemon/components/pokemon-list";
import { dragonballResponse } from "../app/features/pokemon/server/dto";

export default async function Dragonball() {
  try {
    const result: Response = await fetch(
      "https://dragonball-api.com/api/characters"
    );

    if (!result.ok) {
      throw new Error(`Error ${result.status}: ${result.statusText}`);
    }

    const data: dragonballResponse = await result.json();

    return (
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Personajes de Dragon Ball
        </h1>
        <DragonballList characters={data.items} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        Error al cargar los personajes. Por favor, inténtalo de nuevo más tarde.
      </div>
    );
  }
}
