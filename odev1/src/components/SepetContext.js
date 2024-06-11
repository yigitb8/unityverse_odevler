import React, { createContext, useState, useEffect } from 'react';

const SepetContext = createContext();

const SepetProvider = ({ children }) => {
    const [sepet, setSepet] = useState([]);

    useEffect(() => {
        const localStorageSepet = localStorage.getItem('sepet');
        if (localStorageSepet) {
            setSepet(JSON.parse(localStorageSepet));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sepet', JSON.stringify(sepet));
    }, [sepet]);

    const sepeteEkle = (urun) => {
        setSepet([...sepet, urun]);
    };

    const sepettenCikar = (urunId) => {
        setSepet(sepet.filter(item => item.id !== urunId));
    };

    return (
        <SepetContext.Provider value={{ sepet, sepeteEkle, sepettenCikar }}>
            {children}
        </SepetContext.Provider>
    );
};

export { SepetProvider, SepetContext };
