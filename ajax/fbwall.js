$(document).ready(function(){
	// LOGAR
	// Logar como Kraft
	$('#kraft a').bind('click', function(){
		$.ajax({
			type: 'POST',
			url: '/Service/EnterKraft',
			success: function (response) {
				window.location.href = "/home/Index"
			},
			dataType: 'json'
		});
	});
	
	// Logar como usuario 
	$('#usuario a').bind('click', function(){
		var data = {
				name: $('#nomeUsuario').val()
			};
		
		$.ajax({
			type: 'POST',
			url: '/Service/Enter',
			data: data,
			success: function (response) {
				window.location.href = "/home/Index"
			},
			dataType: 'json'
		});
	});
	
	
	// Postar Feed Wall
	$('.postarFeed').bind('click', function(){
		var data = {
			message: $('#share').val()
		};
		
		$.ajax({
			type: 'POST',
			url: '/Service/Post',
			data: data,
			success: function (response) {
				var ultimoFeed = response.Data[0];
				var ultimoFeedMsg = ultimoFeed.Message;
				var ultimoFeedId = ultimoFeed.ID;
				var ultimoFeedQuem = ultimoFeed.UserName;
				var fotoQuem = ultimoFeed.UserPhoto;
				$('#blocoMensagens div:first').before(
					addMensagem($('<div class="mensagens true" id="blocMensagem'+ ultimoFeedId +'">'+
						'<img src="../Assets/img/temp/menor-'+ fotoQuem +'" />'+
						'<p class="oQue">'+
							'<a href="#" class="quem">'+ ultimoFeedQuem +'</a>'+
							'<a href="#" class="excluirMensagem"></a>'+
							'<span>'+ ultimoFeedMsg +'</span>'+
						'</p>'+
						'<p class="quando">about a minute ago . <a href="#" title="">Like .</a><a href="#" title="" class="comentar">Comment</a></p>'+
						'<div class="comentarios" id="blocComentario'+ ultimoFeedId +'">'+
							'<div class="comentPost">'+
								'<textarea name="comment" class="textComent">Write a comment...</textarea>'+
							'</div>'+
						'</div>'+
					'</div>')));
					
					/*'<div class="mensagens true" id="blocMensagem'+ ultimoFeedId +'">'+
						'<img src="../Assets/img/temp/menor-'+ fotoQuem +'" />'+
						'<p class="oQue">'+
							'<a href="#" class="quem">'+ ultimoFeedQuem +'</a>'+
							'<a href="#" class="excluirMensagem"></a>'+
							'<span>'+ ultimoFeedMsg +'</span>'+
						'</p>'+
						'<p class="quando">about a minute ago . <a href="#" title="">Like .</a><a href="#" title="" class="comentar">Comment</a></p>'+
						'<div class="comentarios" id="blocComentario">'+
							'<div class="comentPost">'+
								'<textarea name="comment" class="textComent">Write a comment...</textarea>'+
							'</div>'+
						'</div>'+
					'</div>');*/
				$('#share').val('');
			},
			dataType: 'json'
		});
	});

	// Limpar o campo de Textarea
	$('textarea').focus(function() {
		$(this).val('');
	});

	// Abrir textarea do share
	$('textarea#share').focus(function(){
		$(this).css('height', '65px');
		$('.postarFeed').show();
	});

});

function addComent(scope){
	// Botao excluir comentario 
	$(scope).hover(function(){
		$(this).children('.true .excluirComent').show();
	},function(){
		$(this).children('.true .excluirComent').hide();
	}
	);

	$('.excluirComent', scope).bind('click', function(){
		var data = {
			idComment: $(this).parent().attr('id').split('Coment')[1],
		}
		$.ajax({
			type: 'POST',
			url: '/Service/DeleteComment',
			data: data,
			success: function (response) {
				$('#divComent'+ data.idComment).fadeOut('fast', function(){
					$(this).remove();
				});
			},
			dataType: 'json'
		});
		return false
	});
	
	return scope;
}

function addMensagem(scope){
	// Botao excluir mensagem 
	$(scope).hover(function(){
		$(this).children().children('.true .excluirMensagem').show();
	},function(){
		$(this).children().children('.true .excluirMensagem').hide();
	}
	);

	$('.excluirMensagem', scope).bind('click', function(){
		var data = {
			idPost: $(this).parent().parent().attr('id').split('Mensagem')[1],
		}
		$.ajax({
			type: 'POST',
			url: '/Service/DeletePost',
			data: data,
			success: function (response) {
				$('#blocMensagem'+ data.idPost).fadeOut('fast', function(){
					$(this).remove();
				});
			},
			dataType: 'json'
		});
		return false
	});
	
	// Limpar o campo de Textarea
	$('textarea', scope).focus(function() {
		$(this).val('');
	});
	
	// Ir para o comentario apos clicar no link comentar
	$('.comentar', scope).bind('click', function(){
		$(this).parent().next().children().last().children().focus();
		return false
	});
	
	// Postar comentario em mensagem
	$('.textComent', scope).keypress(function(e){
		if(e.which==13){
			var data = {
				idPost: $(this).parent().parent().attr('id').split('Comentario')[1],
				comment: $(this).val()
			}
			$.ajax({
				type: 'POST',
				url: '/Service/Comment',
				data: data,
				success: function (response) {
					var ultimoComment = response.Data[response.Data.length - 1];
					var ultimoComTexto = ultimoComment.Message;
					var nomeComent = ultimoComment.UserName;
					var idComent = ultimoComment.ID;
					var fotoQuem = ultimoComment.UserPhoto;
					$('#blocComentario'+ data.idPost +' .comentPost').before(
						addComent($('<div class="true" id="divComent'+ idComent +'">'+
							'<a href="#" class="excluirComent"></a>'+
							'<img src="../Assets/img/temp/menor-'+ fotoQuem +'" />'+
							'<p class="oQue">'+
								'<a href="#" class="quem">'+ nomeComent +' </a>'+
								ultimoComTexto +
							'</p>'+
							'<p class="quando">about a minute ago . <a href="#" title="">Like</a></p>'+
						'</div>'))
					).hide().fadeIn('slow');
				},
				dataType: 'json'
			});
			$(this).val('');
		}
	});
	
	$('.comentarios div', scope).each(function(){
		addComent(this);
	});
	
	return scope;
}

function posCarregamento(){
	$('#blocoMensagens .mensagens').each(function(){
		addMensagem(this);
	})
}
