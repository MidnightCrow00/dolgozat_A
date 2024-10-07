import { KARTYAK } from "../adatok";

class Jatekter {
  constructor() {
    kartyaLetrehoz();
  }

  kartyaLetrehoz() {
    const kartya = document.querySelectorAll(".kartyak");
    let txt = "<div class='card'>";
    txt += `
        <div class='card-title'>
            <p>${KARTYAK.név}</p>
        </div>
        `;
    txt="</div>"
    kartya.innerHTML = txt;
  }
}

export default Jatekter;
