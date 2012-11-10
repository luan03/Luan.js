    //Construtor
   var Pessoa = function(){
   		console.log('Bem Vindo!');
   }

   //Interface que o decorator vai implementar
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



   //Decorator
   var PessoaDecorator = function(pessoa){
   		this.pessoa = pessoa;
   }

   //Implementing the same interface
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

   //novos DECORATORS
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
        //this.pessoa.falar();
        console.log('Add novas funcionalidade');
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


      /*  
          Acrescentar responsabilidades a um objeto dinamicamente
          Objeto usado possui as funcionalidades básicas, mas é necessário adicionar funcionalidades adicionais a ele que podem ocorrer antes ou depois da funcionalidade básica
          Decorator muda comportamento

      */