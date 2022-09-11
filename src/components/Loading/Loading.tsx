import React from "react";
import Pokeball from '../../assets/pokeball.png'

import './loading.css'

const Loading = (): JSX.Element => {
    return (
        <img className="loading" src={Pokeball} />
    )
}

export default Loading