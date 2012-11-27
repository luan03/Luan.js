
createEvent(),
dispatchEvent(),
addEventListener();

var PATH = "C:/images/carrosel";

var file = new LocalFile(PATH);

/* Instance Methods
close open read write */

file.open();


var obj = {
	val1: {nome: "nome1", vida: true},
    val2: {nome: "nome2", vida: false},
    val3: {nome: "nome3", vida: true}
}

var i = 0,
	cemiterio = [];

var morreu = function(objeto){
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

morreu(obj);

