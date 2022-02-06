import React, { useContext } from 'react';
import { UserContext } from '../context/contextAPI';

export const Balance = () => {

    const [{ totalSupply }] = useContext(UserContext)


    return (
        <div>

            {totalSupply}


        </div>
    )


}
