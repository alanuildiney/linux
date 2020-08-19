//Mudar imagem da home

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
	let meuSrc = minhaImagem.getAttribute('src');
	if(meuSrc === 'image/linux600x400.png') {
		minhaImagem.setAttribute ('src', 'image/linux-2-600x400.png');} 
			else {
			minhaImagem.setAttribute('src', 'image/linux600x400.png');
		}
	}

	// Mudar nome do usuário

	let meuBotao = document.querySelector('button');
	let meuCabecalho = document.querySelector('h1');
	

	function defineNomeUsuario() {
		let meuNome = prompt('Por favor, digite seu nome.');
		if(!meuNome || meuNome=== null) {
			
		}

		localStorage.setItem('nome', meuNome);

		meuCabecalho.textContent = 'Seja bem vindo ao meu site, ' + meuNome;
	}

	if(!localStorage.getItem('nome')) {
		defineNomeUsuario();
	} else {
		let nomeGardado = localStorage.getItem('nome');
		meuCabecalho.textContent = 'Linux é muito legal, ' + nomeGardado;
	}

	meuBotao.onclick = function() {defineNomeUsuario();
	}