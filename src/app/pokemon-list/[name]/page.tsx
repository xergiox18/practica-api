import { notFound } from "next/navigation";
import { dragonballResult } from "../../features/pokemon/server/dto";

interface Params {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://dragonball-api.com/api/characters?limit=100"
    );
    if (!response.ok) throw new Error("Failed to fetch characters");

    const data = await response.json();
    return data.items.map((character: dragonballResult) => ({
      name: character.name.toLowerCase().replace(/\s+/g, "-"), // Transforma "Goku" a "goku"
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function CharacterPage({ params }: Params) {
  // Normaliza el nombre (reemplaza guiones por espacios y convierte a minúsculas)
  const normalizedName = params.name.replace(/-/g, " ").toLowerCase();

  try {
    // Intenta buscar directamente el personaje
    const directResponse = await fetch(
      `https://dragonball-api.com/api/characters?name=${normalizedName}`
    );
    let character: dragonballResult | null = null;

    if (directResponse.ok) {
      const directData = await directResponse.json();
      character = directData.items[0];
    } else {
      // Fallback: Obtiene todos los personajes y filtra
      const allResponse = await fetch(
        "https://dragonball-api.com/api/characters?limit=100"
      );
      const allData = await allResponse.json();
      character = allData.items.find(
        (char: dragonballResult) => char.name.toLowerCase() === normalizedName
      );
    }

    if (!character) return notFound();

    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover object-top md:w-96"
                src={character.image}
                alt={character.name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {character.race}
              </div>
              <h1 className="block mt-1 text-3xl leading-tight font-medium text-black">
                {character.name}
              </h1>
              <p className="mt-2 text-gray-500">{character.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Ki</h3>
                  <p className="text-sm text-gray-500">{character.ki}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Ki Máximo
                  </h3>
                  <p className="text-sm text-gray-500">{character.maxKi}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Género</h3>
                  <p className="text-sm text-gray-500">{character.gender}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Afiliación
                  </h3>
                  <p className="text-sm text-gray-500">
                    {character.affiliation}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/dragonball"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  &larr; Volver a todos los personajes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching character:", error);
    return notFound();
  }
}
