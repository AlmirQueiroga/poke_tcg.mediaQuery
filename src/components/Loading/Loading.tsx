import React from "react";
import './loading.sass'

const Loading = (): JSX.Element => {
    return (
        <img className="loading" src={require('../../assets/pokeball.png')}/>
    )
}

export default Loading