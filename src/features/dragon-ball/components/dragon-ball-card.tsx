import { DragonBallPlanetsDetail } from "../data/dto";

interface DragonBallPlanetsDetailProps {
  planet: DragonBallPlanetsDetail;
}

export default function DragonBallPlanetsDetailComponent({
  planet,
}: DragonBallPlanetsDetailProps) {
  const firstRowCharacters = planet.characters.slice(0, 8); // Primeros 8 personajes
  const secondRowCharacters = planet.characters.slice(8, 16); // Siguientes 8 personajes

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-orange-500"
      style={{
        backgroundImage:
          "repeating-conic-gradient(from 0deg, orangered, transparent 10deg, orange 10deg, orangered 20deg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "orange",
      }}
    >
      <div className="w-[90vw] h-[80vh] bg-yellow-500 rounded-lg shadow-lg overflow-hidden border-4 border-orange-600">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-full p-4">
          <div className="flex justify-center items-center mb-4 md:mb-0">
            <img
              src={planet.image}
              alt={planet.name}
              className="h-102 w-102 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center items-start text-white">
            <h1 className="text-3xl font-bold mb-4">{planet.name}</h1>
            <p className="text-lg">{planet.description}</p>
            <br />
            <p className=" font-bold text-3xl mb-4">
              Personajes que hacen parte de este planeta:
            </p>

            <ul className="flex space-x-10">
              {firstRowCharacters.map((characters) => (
                <li key={planet.id} className="flex flex-col items-center">
                  <img
                    src={characters.image}
                    alt={characters.name}
                    className="h-18 w-18 object-cover object-top rounded-full mb-2"
                  />
                  <span className="text-lg text-center">{characters.name}</span>
                  <span className="text-sm text-center">{characters.race}</span>
                </li>
              ))}
            </ul>

            <ul className="flex space-x-10">
              {secondRowCharacters.map((characters) => (
                <li key={planet.id} className="flex flex-col items-center">
                  <img
                    src={characters.image}
                    alt={characters.name}
                    className="h-18 w-18 object-cover object-top rounded-full mb-2"
                  />
                  <span className="text-lg text-center">{characters.name}</span>
                  <span className="text-sm text-center">{characters.race}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
