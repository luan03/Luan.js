/*
	- Criar uma interface simples para o usuario.
	- Encapsulamento

	- Metodos (loadImages, loadCombo, listener)
*/



var methods = (function(){

	function fullSelect( options ) {
		this.options = options;
	}

	var select  = new fullSelect({ a: "alpha", b: "beta" });
	select.options;

	var newPost = function() {
	    window.alert("Adicionar novo post");
	}
 
	var searchUsername = function(e) {
	    window.alert("Searching username " + e.target.value);
	}
 
	 var fullScreen = function() {
	    window.alert("Post full screen");
	}
})();

events: {
    "dblclick" : "fullScreen",
    "click #add-button" : "newPost",
    "blur #username" : "searchUsername"
},
newPost: function() {
    window.alert("Adicionar novo post");
},
 
searchUsername: function(e) {
    window.alert("Searching username " + e.target.value);
},
 
fullScreen: function() {
    window.alert("Post full screen");
}

/*****

funcoesNomeadasAssim;
variaveisNomeadasAssim;
ConstrutoresNomeadosAssim;
EnumNomeadosAssim;
metodosNomeadosAssim;
CONSTANTES_SIMBOLICAS_ASSIM;

****/