import React, {useState} from 'react'
import { genTicket, sum } from './helper'
import Ticket from './Ticket'
import Button from './Button'
const Lottery = ({n, winCond}) => {
    const [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCond(ticket);

    let genNum = () => {
        setTicket(genTicket(n));
    }

return (
    <div>
        <h1>Lottery Game!</h1>
        <div className='ticket'>
            <Ticket ticket={ticket}/>
        </div>
        <br />
        <Button action={genNum} />
        <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
)
}

export default Lottery