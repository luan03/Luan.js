/*

function iniciaAjax () {
	var objAjax = false;

	if (window.XMLHttpRequest) {
		objAjax = new XMLHttpRequest();
	}

	return objAjax;
}

var requisicaoAjax = iniciaAjax();

if (requisicaoAjax) {

	requisicaoAjax.onreadystatechange = function(){

		if (requisicaoAjax.readyState == 1) {
			
			
			if (requisicaoAjax.status == 200) {
				console.log('Conexao Feita, request Ok!');
				console.log(requisicaoAjax.responseText);
			}

			else {
				console.log('Probllema na comunicacao');
			}

		} else {
			console.log('Fail...')
		}
	};

}

requisicaoAjax.open("POST", "http://img.wunderman.com.br/wunderman/ajax/index.html?", true);
requisicaoAjax.setRequestHeader("Conetnt-type", "application/x-www-form-urlencoded");
requisicaoAjax.send("produto=mouse&modelo=Microsoft");


*/

/********

	requisicaoAjax.open("POST", "url/algo.html?", true);              						- Endereço do arquivo requisitado.
	requisicaoAjax.setRequestHeader("Conetnt-type", "application/x-www-form-urlencoded");	- Metadados descritivos da requisição.
	requisicaoAjax.send("produto=mouse&modelo=Microsoft");            						- Iniciar requisição que ja tenha sido definido pelo open.
	requisicaoAjax.send(null); 																- Requisição não envia dados para o servidor.

	resultado: url/algo.html?produto=mouse&modelo=Microsoft

	requisicaoAjax.status       														- Status da resposta enviado pelo servidor.
	requisicaoAjax.readyState															- Status da comunicação [ 0 1 2 3 4 ]
	requisicaoAjax.responseText															- Resposta enviada no formato Txt ou html do servidor.
	requisicaoAjax.responseXML															- Resposta enviada no formato XML (É preciso definir o cabeçalho http do tipo MIME)


	0. UNSENT Comunicacao nao iniciada. open nao foi chamado.
	1. OPENED incio da comunicacao, mas envio de dados nao iniciado.
	2. LOADING servidor em processo de envio a resposta da requisição.
	3. DONE servidor acaba de enviar a resposta a requisição.


###########################################################################################################################################################################

 
	requisicaoAjax.onreadystatechange();

	* POST submit data to server.
	* GET outros casos. dados passados de forma de QUERY STRING.
	* HOSPEDAR NO MESMO DOMÍNIO (CROSS DOMAIN)
	

	Objeto literal com a finalidade de apenas armezenar dados: JSON.

	- Usar Fade para apresentação do conteudo.

__________________________________________________________________________________________________________________________________________________________________________
	
	MÉTODOS: 
	
	abort() "Abortando uma conexão"
	
	var tempo;

	function inciciaAjax(){...}
	function linkClicado(){...}

	function carregando(container){...}

	function requisitar (arquivo) {
		var requisicaoAjax = iniciaAjax();
		if (requisicaoAjax) {
			carregando(document.getElementById("content"));
			requisicaoAjax.onreadystatechange = function() {
				trataResposta(requisicaoAjax);
			};

			requisicaoAjax.open("GET", arquivo, true);
			tempo = setTimeout(tempoEsgotado, 6000); 								//Truque Aqui (se passar de 6 segundos chamamos funcao para abortar)

			...
		}
	}


	function trataResposta(requisicaoAjax) {
			if ( requisicaoAjax.readyState == 4){
				clearTimeOut(tempo);

				...
			}
	}

	function tempoEsgotado() {
		var requisicaoAjax = iniciaAjax();
		requisicaoAjax.abort();
		console.log('ocorreu problema na conexão').
	}

	

******/



function iniciaAjax () {
	var objetoAjax = false;

	if (window.XMLHttpRequest) {
		objetoAjax = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			objetoAjax = new ActiveXObject("Msxml.XMLHTTP");
		} catch(e) {
			try {
				objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");	
			} catch(ex) {
				objetoAjax = false;
			}
		} 
	}

	return objetoAjax;
}

function requisicao (arquivo) {
	var requisicaoAjax = iniciaAjax();
	if (requisicaoAjax) {
		requisicaoAjax.onreadystatechange = function(){
			//mostraResposta(requisicaoAjax); 											// Requisição html e Txt */
			trataResposta(requisicaoAjax);												// Requisição XML    (tratamento de requisições Xml)    */
		};
		requisicaoAjax.open("GET", arquivo, true);
		requisicaoAjax.send(null);
	}
}

/*

function mostraResposta (requisicaoAjax) {
	if (requisicaoAjax.readyState == 4)	{
		if (requisicaoAjax.status == 200 || requisicaoAjax.status == 304) {
			 console.log(requisicaoAjax.responseText); 									// Requisição TXT 

			var content = document.getElementById('content'); 							// Requisição HTML
			content.innerHTML = requisicaoAjax.responseText;
			
		} else {
			console.log('fail');
		}
	}
}

*/

function trataResposta(requisicaoAjax) {
	if (requisicaoAjax.readyState == 4)	{
		if (requisicaoAjax.status == 200 || requisicaoAjax.status == 304) {
			
			/* Requisição Xml 

			var dados = requisicaoAjax.responseXML;

			//Nó do XML
			var tituloDado = dados.getElementsByTagName('titulo')[0].firstChild.nodeValue;
			var autorDado = dados.getElementsByTagName('autor')[0].firstChild.nodeValue;
			var siteDado = dados.getElementsByTagName('site')[0].firstChild.nodeValue;

			*/

			// Requisição Json (Nunca mais usar eval aqui).



			var dados = eval("(" + requisicaoAjax.responseText + ")");
			var tituloDado = dados.livro.titulo;
			var autorDado = dados.livro.autor;
			var siteDado = dados.livro.site;


			var titulo = document.createElement('h2');
			var site = document.createElement('a');
			site.setAttribute('href', siteDado);

			var textoTitulo = document.createTextNode(tituloDado);
			site.appendChild(textoTitulo);

			titulo.appendChild(site);

			var autor = document.createElement('p');
			var textoAutor = document.createTextNode(autorDado);
			autor.appendChild(textoAutor);


			//Garantir que a div content está vazia para isnerção de conteudo!

			var insere = document.getElementById('content');
			
			while ( insere.hasChildNodes() ) {
				insere.removeChild(insere.lastChild);
			}

			insere.appendChild(titulo);
			insere.appendChild(autor);
		} else {
			console.log('erro de comunicacao');
		}
	}
}

