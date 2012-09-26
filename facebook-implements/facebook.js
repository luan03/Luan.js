Facebook = new Class({
	FBROOT: document.getElementById('fb-root'),
	FBAPPID: null,
	FBSTATUS: true,
	FBCOOKIE: true,
	FBXFBML: true,
	FBLOCALE: 'en_US',
	
	construct: function(){
		window.fbAsyncInit = this.fb_asyncInit;
		
		var body = document.getElementsByTagName('body');
		
		if (body[0] && !this.FBROOT)
		{
			this.FBROOT = document.createElement('div');
			this.FBROOT.id = 'fb-root';
			
			body[0].appendChild(this.FBROOT);
		}
		
		var d = document;
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/" + this.FBLOCALE + "/all.js";
		ref.parentNode.insertBefore(js, ref);
		
	},
	
	fb_asyncInit: function(){			
		FB.init({
			appId: this.FBAPPID + '',
			status: this.FBSTATUS,
			channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
			cookie: this.FBCOOKIE,
			xfbml: this.FBXFBML
		});
	}
});