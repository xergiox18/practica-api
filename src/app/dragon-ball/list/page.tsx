import { DragonBallResponse } from "../../../features/dragon-ball/data/dto";
import DragonBallList from "../../../features/dragon-ball/components/dragon-ball-list";

export default async function DragonBallListPage() {
  const result = await fetch("https://dragonball-api.com/api/planets");

  const data: DragonBallResponse = await result.json();

  return <DragonBallList planets={data.items} />;
}
