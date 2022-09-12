import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowForward } from 'react-icons/io'
import PokemonAttack from "../../types/pokemon-attack";

import './PokemonAttacks.css'

interface PokemonAttacksProps {
    attack: PokemonAttack
}

const PokemonAttacks = (props: PokemonAttacksProps): JSX.Element => {
    const attacksRef = useRef<any>(null);
    const { attack } = props
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (attacksRef.current && !attacksRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [attacksRef])

    return (
        <span onClick={() => setShow(true)} ref={attacksRef} style={{ width: '100%', marginTop: 10, padding: 10, color: '#FFF', display: 'flex', borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#000', alignItems: 'center' }}>
            <h4>{attack.name}</h4>
            <IoMdArrowForward />

        <div hidden={!show} className='modal-attacks' style={{ color: '#000', padding: 20 }}>
            <p>
                <b>Cost: </b>
                {attack.cost.map(item => { return `${item}, ` })}
            </p>
            <p>
                <b>Converted Energy Cost: </b> {attack.convertedEnergyCost}
            </p>
            <p>
                <b>Damage: </b> {attack.damage}
            </p>
            <p>
                <b>Description: </b> {attack.text}
            </p>
        </div>
        </span>
    );
}

export default PokemonAttacks