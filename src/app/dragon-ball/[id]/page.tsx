import { DragonBallPlanetsDetail } from "@/features/dragon-ball/data/dto";
import DragonBallPlanetsDetailComponent from "@/features/dragon-ball/components/dragon-ball-card";

interface planetProps {
  params: Promise<{ id: string }>;
}

export default async function planet({ params }: planetProps) {
  const { id } = await params;

  const result = await fetch(`https://dragonball-api.com/api/planets/${id}`);

  const data: DragonBallPlanetsDetail = await result.json();

  return <DragonBallPlanetsDetailComponent planet={data} />;
}
