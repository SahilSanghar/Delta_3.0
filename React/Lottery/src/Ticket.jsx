import React from 'react'
import TicketNum from "./TicketNum";
import './Ticket.css'

const Ticket = ({ticket}) => {
return (
    <div className='ticket'>
        <p>Ticket</p>
        {ticket.map((num, idx) => (
            <TicketNum num={num} key={idx}/>
        ))}
    </div>
)
}

export default Ticket