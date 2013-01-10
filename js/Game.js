
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


/*
var doc = document.getElementById('wrapper');
var i = 0,
	j = 0,
	elements = 3,
 	intervalo = null;

var create = function() {
	for ( ; j < elements; j++ ) {
		var span = document.createElement('span');
		doc.appendChild(span);
	}

	var bola = document.getElementsByTagName('span');
 	var totalBolas = bola.length;

 	
}



 function move() {
 		var bola = document.getElementsByTagName('span');
 		var totalBolas = bola.length;

 		for ( var j = 0; j < totalBolas; j++ ) {
 			bola[j].style.left = i + 'px';
 			var posicao = parseInt(bola[j].style.left);
 		}
 		
 		if ( posicao === 150 ) {
 			clearInterval(intervalo);
 		}

 		i = i+2;
 }


 var createBola = function(){
 	
 	var span = document.createElement('span');
 	doc.appendChild(span);

 	intervalo = setInterval(move, 40);
 }

create();
*/


var Animacao = function(objeto){
	objeto = this.objeto;
}

var bola = document.getElementById('')


	var id = 0;

	var ff = document.createElement('span');
		ff.setAttribute('id','smoke-out-' +id);
		ff.setAttribute('class','smoke-base');
		ff.className = 'smoke-base';
		document.body.appendChild(ff);

		 throw "fail";