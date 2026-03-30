import React, { useState } from 'react';
import { Flag, User } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({player, setCoin , coin , setSelectedPlayers , selectedPlayers}) => {
    const [isSelected, setIsSelected ] = useState(false)
    const handleChoosePlayer =  () => {
        const playerPrice = player.price
        let newCoin = coin - playerPrice
        if(newCoin >= 0) {
            
            setIsSelected(true) ; setCoin(coin - playerPrice)}
            else {
                toast.error('Not Enough Money to purchase')
            return
        }
            toast(`${player.playerName} is selected`)
            setSelectedPlayers([...selectedPlayers , player])
}       
    return (
        <div key={player.id} className="mt-3 card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player.playerImg} />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-2'>

    <User></User><h2 className="card-title">{player.playerName}</h2>
    </div>
    <div className='flex justify-between gap-2'>
    <div className='flex gap-2 items-center'>
        <Flag></Flag>
   {player.playerCountry}
    </div>
<button className="btn ">{player.playerType}</button>

    </div>
    <hr />
    <h2 className="font-bold">{player.rating} </h2>
    <div className='flex justify-between font-bold'>
        <p>{player.battingStyle}</p>
        <p>{player.bowlingStyle}</p>
    </div>
    
    <div className="card-actions item-center justify-between">
        <p className='font-semibold'>Price : ${player.price}</p>
      <button className="btn " disabled= {isSelected ? true : false}  onClick={ handleChoosePlayer} >{isSelected === false ? 'Choose Player' : 'Selected Player' }</button>
    </div>
  </div>
</div>
    );
};

export default Card;