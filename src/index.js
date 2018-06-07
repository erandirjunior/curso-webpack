import { abc } from './myfile.js';
import jslogo from './javascript.png';
import $ from 'jquery';

const imgElement = document.querySelector('#my-image');

imgElement.setAttribute('src', jslogo);

$(imgElement).on('click', function() {
	$(this).hide();
});

console.log('mensagem do index');

abc();

/*
Dicas:
1 - instalação do webpack local: npm install --save-dev webpack
2 - instalação do webpack-cli:npm install --save-dev webpack-cli
3 - Rodando o projeto: npm run build
*/