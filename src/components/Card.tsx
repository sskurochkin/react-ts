import React, {FC, useState} from 'react';

interface CardProps {
    width: string
    height: string
    children: React.ReactNode
    variant: cardVariant
    onClick: (num:number)=> void
}

export enum cardVariant {
    outlined = 'outlined',
    primary = 'primary'
}


const Card: React.FC<CardProps> = ({onClick, width, height, variant, children}) => {

    const [state, setState] = useState(0)
    return (
        <div style={{width, height, background: variant==='outlined' ? 'green' : 'red'}} onClick = {()=>onClick(state)}>
            {children}

        </div>
    );
};

export default Card;