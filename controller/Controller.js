
import KartyaModell from './KartyaModell.js';
import JatekterNezet from './JatekterNezet.js';

class Controller {
    constructor() {
        this.kartyaModell = new KartyaModell();
        this.jatekterNezet = new JatekterNezet(this.kartyaModell.getKartyak());
    }
}


