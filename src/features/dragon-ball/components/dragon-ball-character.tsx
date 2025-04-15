import { DragonBallPlanetsDetail } from "../data/dto";

interface DragonBallPlanetsDetailProps {
  character: DragonBallPlanetsDetail;
}

export default function DragonBallPlanetsDetailComponent({
  character,
}: DragonBallPlanetsDetailProps) {
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
              src={character.image}
              alt={character.name}
              className="h-102 w-102 object-cover rounded-lg shadow-md"
            />
          </div>
          </div>
     
    </div>
  );
}
