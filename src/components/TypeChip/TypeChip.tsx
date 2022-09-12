import React from "react";

interface TypeChipProps {
    color: string;
    type: string;
}

const TypeChip = (props: TypeChipProps): JSX.Element => {
    const { color, type} = props;

    return(
        <section id={`type-chip-${type}`} style={{ borderRadius: 10, backgroundColor: color, height: 30, padding: '0 10px', color: '#FFF', boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.7)', margin: '10px 5px' }}>
            <b>{type}</b>
        </section>
    )
};

export default TypeChip;