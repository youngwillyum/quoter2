import React from 'react'
import {Link} from 'react-router-dom'

function History(){
    return(
        <React.Fragment>
        <div><strong>Quote History</strong></div>

        <table>
            <tr>
                <th>Date</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Price</th>
            </tr>

            </table>
        <Link to='/home'>Click here for home</Link>

        </React.Fragment>
    )
}

export default History;