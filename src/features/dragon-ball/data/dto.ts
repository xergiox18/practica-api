export interface DragonBallPlanets {
  id: number;
  name: string;
  isDestroyed: string;
  description: string;
  image: string;
  deletedAt: string | null;
}

export interface Characters {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}

export interface DragonBallPlanetsDetail extends DragonBallPlanets {
  characters: Characters;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface DragonBallResponse {
  items: DragonBallPlanets[];
  meta: Meta;
  links: Links;
}

// export interface DragonBallCharacter {
//   id: number;
//   name: string;
//   ki: string;
//   maxKi: string;
//   race: string;
//   gender: string;
//   description: string;
//   image: string;
//   affiliation: string;
//   deletedAt: string | null;
// }

// export interface OriginPlanet {
//   id: number;
//   name: string;
//   isDestroyed: boolean;
//   description: string;
//   image: string;
//   deletedAt: string | null;
// }

// export interface Transformation {
//   id: number;
//   name: string;
//   image: string;
//   ki: string;
//   deletedAt: string | null;
// }

// export interface DragonBallCharacterDetail extends DragonBallCharacter {
//   originPlanet: OriginPlanet;
//   transformations: Transformation[];
// }

// export interface Meta {
//   totalItems: number;
//   itemCount: number;
//   itemsPerPage: number;
//   totalPages: number;
//   currentPage: number;
// }

// export interface Links {
//   first: string;
//   previous: string;
//   next: string;
//   last: string;
// }

// export interface DragonBallResponse {
//   items: DragonBallCharacter[];
//   meta: Meta;
//   links: Links;
// }
