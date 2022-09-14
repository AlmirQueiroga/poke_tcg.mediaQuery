import React from "react";
import './TypeChip.sass'

interface TypeChipProps {
    color: string;
    type: string;
}

const TypeChip = (props: TypeChipProps): JSX.Element => {
    const { color, type} = props;

    return(
        <section className="type-chip" id={`type-chip-${type}`} style={{ backgroundColor: color }}>
            <b data-testid='test-type'>{type}</b>
        </section>
    )
};

export default TypeChip;