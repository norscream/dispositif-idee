
import { GameCard, type Game } from "./GameCard";

interface GamesGridProps {
  games: Game[];
}

export function GamesGrid({ games }: GamesGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
