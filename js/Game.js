
var obj = {
	val1: {nome: "nome1", vida: true},
    val2: {nome: "nome2", vida: false},
    val3: {nome: "nome3", vida: true}
}

var i = 0,
	cemiterio = [];

var morreu = function ( objeto ) {
	for (i in objeto){
		if (objeto.hasOwnProperty(i)) {
			if (!objeto[i].vida) {
				var presunto = objeto[i];
				 delete objeto[i];
				cemiterio.push(presunto);
			}
		}
	}
}

//morreu(obj);


 var i = 0,
 	 intervalo = null;

 function move() {
 		var bola = document.getElementById('bola');
 		bola.style.left = i + 'px';
 		var posicao = parseInt(bola.style.left);
 		
 		if ( posicao === 750 ) {
 			clearInterval(intervalo);
 		}

 		i = i+2;
 }

//intervalo = setInterval(move, 40);