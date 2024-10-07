
class KartyaNezet {
    constructor(kartya, index, onKartyaKattintva) {
        this.kartya = kartya;
        this.index = index;
        this.onKartyaKattintva = onKartyaKattintva;
        this.createKartya();
    }

    createKartya() {
        const kartyaDiv = document.createElement('div');
        kartyaDiv.className = 'card';
        kartyaDiv.innerHTML = `<div class='card-body'>Kattints rám!</div>`;
        
        kartyaDiv.addEventListener('click', () => {
            kartyaDiv.innerHTML = `<div class='card-body'>${this.kartya.kép}</div>`;
            const szoveg = this.onKartyaKattintva(this.index);
            this.onKartyaKattintva(szoveg);
        });

        document.querySelector('.kartyak').appendChild(kartyaDiv);
    }
}

export default KartyaNezet;
