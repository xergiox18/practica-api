import { DragonBallPlanets } from "../data/dto";
import Link from "next/link";

interface DragonBallListProps {
  planets: DragonBallPlanets[];
}

export default function DragonBallList({ planets }: DragonBallListProps) {
  return (
    <div className="grid justify-center bg-[#3e3327]">
      <h1 className="text-center font-bold text-[28px] mb-6 text-white">
        Dragon Ball Planets
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {planets.map((planet) => (
          <Link key={planet.id} href={`/dragon-ball/${planet.id}`}>
            <li className="text-center bg-[#fc7b03] p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={planet.image}
                alt={planet.name}
                className="h-66 object-cover object-top rounded-md mb-4"
              />
              <p className="font-semibold text-white">{planet.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
