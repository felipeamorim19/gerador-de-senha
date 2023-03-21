import { nanoid } from 'nanoid';
import './style.css';

const btnGerar = document.querySelector('#btnGerar');
const numberGerados = document.querySelector('#numberGerados');

function gerar() {
  numberGerados.innerHTML = nanoid();
}

btnGerar.addEventListener('click', gerar);
