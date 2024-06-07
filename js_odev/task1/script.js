

document.addEventListener('DOMContentLoaded', () => {
    const characters = '012345678';

    const div1 = document.getElementById('card1');
    const div2 = document.getElementById('card2');

                
    
    function moveCharacter(charIndex, delay) {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = charIndex;
            span.classList.add('moving');
            div2.appendChild(span);             //spanları div2 ye appendChild ile ekle
        }, delay);
    }       
    


    for (let i = 0; i < characters.length; i++) {
        const charIndex = characters[i];
        if (parseInt(charIndex) % 2 === 0) {
            // Çiftt sayi
            let delay = (parseInt(charIndex) === 0) ? 6000 : 6000 + ((parseInt(charIndex) / 2) * 2000);
            moveCharacter(charIndex, delay);
        } else {
            //teksayı
            let delay = 4000 + (i * 1000);
            moveCharacter(charIndex, delay);
        }
    }
});





