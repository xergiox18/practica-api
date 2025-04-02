"use client";

import DragonballCard from "./pokemon-card";
import { dragonballResult } from "../server/dto";

interface DragonballCardProps {
  characters: dragonballResult[] | undefined;
}

export default function DragonballList({ characters }: DragonballCardProps) {
  if (!characters || characters.length === 0) {
    return <div>No hay personajes disponibles para mostrar.</div>;
  }

  return (
    <div className="flex-wrap flex gap-4 justify-center">
      {characters.map((character) => (
        <DragonballCard key={character.id} character={character} />
      ))}
    </div>
  );
}
