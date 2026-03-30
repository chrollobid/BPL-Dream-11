import React, { useState } from 'react';
import { use } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise , setCoin, coin }) => {
const [ selectedPlayers, setSelectedPlayers] = useState([])
    const [ selectedType , setSelectedType] = useState('available')
    
    const players = use(playersPromise);
    return (
        <div className='container mx-auto my-[60px]'>
<div className="flex justify-between gap-4 items-center ">
{ selectedType==="available" ?  <h2 className="font-bold text-3xl">Available Players</h2>   : <h2 className="font-bold text-3xl">Selected Players ({selectedPlayers.length}/ {players.length})</h2>
}
<div className="mb-2">
    <button
     onClick={()=> setSelectedType('available')} className={`btn ${selectedType === 'available' ?  "bg-[#E7FE29]" :" bg-white"} rounded-r-none rounded-2xl `}>Available</button>
    <button  onClick={()=> setSelectedType('selected')} className={`btn ${selectedType === 'selected' ?  "bg-[#E7FE29]" :" bg-white"} rounded-l-none rounded-2xl `  }>Selected({selectedPlayers.length}) </button>
    </div>

</div>

{
    selectedType === 'available' ? (<AvailablePlayers setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} setCoin={setCoin} players={players} coin={coin}  ></AvailablePlayers> ): (<SelectedPlayers 
    selectedPlayers={selectedPlayers}
    setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} ></SelectedPlayers>)
}
            

        </div>
    );
};

export default Players;