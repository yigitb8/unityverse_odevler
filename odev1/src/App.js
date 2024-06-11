import React from 'react';
import { SepetProvider } from './context/SepetContext';
import Urunler from './components/Urunler';
import Sepet from './components/Sepet';

function App() {
    return (
        <SepetProvider>
            <div className="App">
                <h1>Alışveriş Sepeti</h1>
                <Urunler />
                <Sepet />
            </div>
        </SepetProvider>
    );
}

export default App;
