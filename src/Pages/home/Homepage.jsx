import React from 'react';
import { Title } from '../../components/Title';
import { Footer } from '../../layout/footer';
import { Canvas } from '../../components/Canvas';
import { StartButton } from '../../components/StartButton';

export function Homepage() {
    return (
        <>
            <Title />
            <Canvas />
            <StartButton />
            <Footer />
        </>
    )
};
