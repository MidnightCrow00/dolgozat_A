import { KARTYAK } from './adatok.js';

class KartyaModell {
    constructor() {
        this.kartyak = this.kartyaLista();
    }

    kartyaLista() {
        let lista = [];
        for (let i = 0; i < 20; i++) {
            const kartyaIndex = Math.random() < 0.3 ? 0 : 1; // 30% valószínűséggel ördög
            lista.push(KARTYAK[kartyaIndex]);
        }
        return lista;
    }

    getKartyak() {
        return this.kartyak; 
    }

    ellenorzes(index) {
        return this.kartyak[index].név === 'ördög' ? 'Elvitt az ördög!' : 'Megmentettek a jó lelkek!';
    }
}

export default KartyaModell;
