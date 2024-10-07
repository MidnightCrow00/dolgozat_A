import { KARTYAK } from "./adatok.js";
import KartyaModell from "./modell/KartyaModell.js";
import JatekterNezet from "./view/JatekterNezet.js";

document.addEventListener('DOMContentLoaded', () => {
    const jatekNezet = new JatekterNezet(KARTYAK); 
});
