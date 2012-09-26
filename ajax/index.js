Index = new Class.extend(Master, {
	ready: function(ghfghfgh){
		parent.ready();
		
		such.teste.apply({
			enada: 'dsafdsa'
		});
		
		
		
		var menu = new ControlMenu({
			container: '#header ul.menu',
			content: '#content div.wrapper',
			onStart:function(){
				//console.info('start');
			},
			onStartListener:function(){
				//console.info('listener');
			},
			onStopListener:function(){
				//console.info('no listener');
			},
			onDestroyListeners:function(){
				//console.info('destroy listener');
			},
			onLinkClick:function(){
				//console.info('click');
			},
			onReset:function(){
				//console.info('reset');
			},
			onBackup:function(){
				//console.info('backup');
			},
			onSuccess:function(){
				//console.info('success');
			},
			onFailure:function(){
				//console.info('fail');
			}
		});
	},
	
	teste: function(){
		//console.info(self);
		//console.info(such);
		//console.info(parent);
		//console.info(caller);
	}
});

var people = [{first: "Jason", last: "Bourne"},
    {first: "Gandalf", last: "The Grey"},
    {first: "John", last: "Smith"},
    {first: "Albert", last: "Smith"}];
    
var results = $linq(people)
    .orderBy(function (x) { return x.last; })
    .thenBy("x => x.first")
    .toArray();