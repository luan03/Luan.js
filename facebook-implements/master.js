Master = new Class.implement(Facebook, {
	FBAPPID: "XXXXXXXX-X",
	FBREADY: false,
	JQREADY: false,
	PAGE: null,
	
	construct: function(page){
		$this.PAGE = page;
		$this.jq_asyncInit();
	},
	
	jq_asyncInit: function(){
		$this.JQREADY = true;
		$this.is_ready();
	},
	
	fb_asyncInit: function(){
		$this.FBREADY = true;
		$this.is_ready();
	},
	
	is_ready: function(){
		if(!$this.JQREADY || !$this.FBREADY)
			return;
			
		var name = $this.PAGE ? $this.PAGE.toLowerCase() : null;
		var page = $this[name] ? $this[name] : $this.common;
		
		page();
	},
	
	common: function(){
		
		console.info('eu');
		
	},
});