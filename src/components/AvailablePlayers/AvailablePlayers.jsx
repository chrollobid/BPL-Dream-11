import { Flag, User } from 'lucide-react';
import React from 'react';
import Card from '../ui/Card';

const AvailablePlayers = ({players, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    console.log(players)
    return (
        <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, ind) => {
          return (
            <Card
              key={ind}
              player={player}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            />
          );
        })}
      </div>
    </div>
    );
};

export default AvailablePlayers;