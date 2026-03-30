import { DecimalsArrowLeftIcon, Delete, DeleteIcon, LucideDelete, Trash, User } from 'lucide-react';
import React from 'react';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
const handleSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter((selectedPlayer)=>selectedPlayer.playerName !== player.playerName)
    setSelectedPlayers(filteredPlayers)
setCoin(coin + player.price)
}
    console.log(selectedPlayers)
    return (
        <div>
            <div className="space-y-4">

            {  selectedPlayers.length === 0 ? <div className=' flex justify-center items-center flex-col h-[400px]'>
                <h2 className='font-bold text-4xl'>No Selected Player</h2>
                <p>Go to Available Players</p>
            </div>         :  selectedPlayers.map((player, ind)=>{
                    return(
                        <div key={ind} className=' flex items-center gap-6 justify-between p-5 rounded-2xl border '>
                            <div>
                            <img src={player.playerImg} alt="" className='h-[70px] w-[5-px]' />

                            <div className='flex mt-4 justify-start items-center gap-2'>
                             <User></User>   <h2 className='font-bold'>{player.playerName}</h2>
                            <p className='ml-10 font-semibold'>{player.playerType}</p>
                            
                            </div>
                            </div>
                            <button className='btn text-red-400' onClick={() => handleSelectedPlayer(player)}>
                                <Trash/>
                            </button>
                        </div>
                        
                    )
                })
            }
            </div>
            
        </div>
    );
};

export default SelectedPlayers;