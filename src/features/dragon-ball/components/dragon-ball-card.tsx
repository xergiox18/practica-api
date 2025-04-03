import { DragonBallPlanetsDetail } from "../data/dto";

interface DragonBallPlanetsDetailProps {
  planet: DragonBallPlanetsDetail;
}

export default function DragonBallPlanetsDetailComponent({
  planet,
}: DragonBallPlanetsDetailProps) {
  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen justify-items-center p-8 space-x-4">
      <div className="flex flex-col justify-center items-center border-r-2 border-gray-300 pr-4">
        <h1 className="text-2xl font-bold mb-4">{planet.name}</h1>
        <img
          src={planet.image}
          alt={planet.name}
          className="h-126 w-auto object-cover object-top"
        />
      </div>

      <div className="flex justify-center items-center">
        <p className="text-lg text-center">{planet.description}</p>
      </div>
    </div>
  );
}
