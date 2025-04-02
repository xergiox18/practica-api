"use client";

import Link from "next/link";
import { dragonballResult } from "../server/dto";

interface DragonballCardProps {
  character: dragonballResult;
}

export default function DragonballCard({ character }: DragonballCardProps) {
  // Genera una URL amigable reemplazando espacios por guiones
  const characterSlug = character.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link href={`/dragonball/${characterSlug}`} passHref>
      <div className="flex h-[300px] w-[250px] border rounded-xl justify-center align-middle bg-black text-white cursor-pointer hover:scale-105 transition-transform">
        <div className="flex flex-col items-center p-4">
          <img
            src={character.image}
            alt={character.name}
            className="h-[150px] w-[150px] object-cover rounded-full"
          />
          <div className="mt-2 text-lg font-bold">{character.name}</div>
          <div className="text-sm">Ki: {character.ki}</div>
          <div className="text-sm">Raza: {character.race}</div>
        </div>
      </div>
    </Link>
  );
}
