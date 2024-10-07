
import KartyaNezet from './KartyaNezet.js';

class JatekterNezet {
    constructor(kartyak) {
        this.kartyak = kartyak;
        this.kartyaContainer = document.querySelector('.kartyak');
        this.eredmenyElem = document.createElement('p');
        document.body.appendChild(this.eredmenyElem);
        this.kartyak.forEach((kartya, index) => {
            new KartyaNezet(kartya, index, this.setSzoveg.bind(this));
        });
    }

    setSzoveg(szoveg) {
        this.eredmenyElem.textContent = szoveg;
    }
}

export default JatekterNezet;
