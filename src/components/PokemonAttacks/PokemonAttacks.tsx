import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowForward } from 'react-icons/io'
import PokemonAttack from "../../types/pokemon-attack";

import './PokemonAttacks.sass'

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
        <span onClick={() => setShow(true)} ref={attacksRef} className='attack-span'>
            <h4 data-testid='test-display-name'>{attack.name}</h4>
            <IoMdArrowForward />

            <div hidden={!show}>
                <p>
                    <b data-testid='test-modal-cost'>Cost: </b>
                    {attack.cost.map(item => { return `${item}, ` })}
                </p>
                <p data-testid='test-modal-energy-cost'>
                    <b>Converted Energy Cost: </b> {attack.convertedEnergyCost}
                </p>
                <p data-testid='test-modal-damage'>
                    <b>Damage: </b> {attack.damage}
                </p>
                <p data-testid='test-modal-text'>
                    <b>Description: </b> {attack.text}
                </p>
            </div>
        </span>
    );
}

export default PokemonAttacks