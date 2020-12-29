import React from "react";

const Emojis = ({symbol, onItemClick}) => {

    return (
        <div className="emoji" onClick={onItemClick}>{symbol}</div>
    )
}

export default Emojis;