    //Construtor

   var Pessoa = function(){
   		console.log('Bem Vindo!');
   }

   //interface
   Pessoa.prototype = {

	   	falar: function(){
	   		console.log('oi');
	   	},
	   	dormir: function(){
	   		console.log('ZzzZZzzZzzZ');
	   	},
	   	idade: function(){
	   		return 22;
	   	}
   }



   /***** DECORATOR *******/
   var PessoaDecorator = function(pessoa){
   		this.pessoa = pessoa;
   }

   //implements interface Pessoa
   PessoaDecorator.prototype = {

   		falar: function(){
	   		this.pessoa.falar();
	   	},
	   	dormir: function(){
	   		this.pessoa.dormir();
	   	},
	   	idade: function(){
	   		return this.pessoa.idade();
	   	}
   }

   // novas funcionalidades
    var andarSkate = function(pessoa) {
        PessoaDecorator.call(this, pessoa);
        console.log('Skatista Mano');
    }
    andarSkate.prototype = new PessoaDecorator();

    var andarBike = function(pessoa) {
        PessoaDecorator.call(this, pessoa);
        console.log('Andando de bike');
    }

    andarBike.prototype = new PessoaDecorator();
    andarBike.prototype.falar = function() {
        this.pessoa.falar();
        console.log('Override method');
    }


      var luan = new Pessoa(); 
          luan = new andarSkate(luan);
          luan = new andarBike(luan);


      
      luan.falar();
      luan.dormir();
      luan.idade();

       //call new methods
      andarBike(luan);
      andarSkate(luan);