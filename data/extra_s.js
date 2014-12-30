function showTinyBoxRegDomain(){
	var app_platform;
	var link;
	if(isNWK){
		if(isMac){
			app_platform = 'Mac app';
		}else{
			app_platform = 'Win app';
		}
		link = 'javascript:gui.Shell.openExternal(\'http://swimbi.com/register/?SRC='+app_platform+'#plans\');';
	}else{
		link = 'http://swimbi.com/register/?SRC=Chrome app#plans'
	}
	var cnt = "<a id='tbox-close' href='javascript:TINY.box.hide();'><img src='"+scriptPrefix+"tour/closex.png' ></img></a>";
		cnt +='<br/>Don\'t have an order ID? <a href="'+link+'">Sign up.</a><br/><br/>'
		cnt +="Enter your order info and domain you want to register.<br/><br/>"
		cnt += "<div id='extFormRegDomain' style='display:block; width:320px; height: 130px;'></div>";
		cnt +="<br/>"
		cnt +="<button class='button' onclick='submitRegDomain()'>  Submit  </button><br/>"


	TINY.box.show(cnt,0,0,0,1);

	waitForLoadDIVforExtFormRegDomain();
}

function sendRegisterRequest(email, orderID, domainNm){
	var http = require('http');
    var querystring = require('querystring');
	
	var post_data = querystring.stringify({'email' : email, 'order': orderID, 'domain': domainNm});
	
	var options = {
	  hostname: 'swimbi.com',
	  port: 80,
	  path: '/user_reg/register/',
	  method: 'POST',
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
	};

	var req = http.request(options, function(res) {
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	  	var oData = JSON.parse(chunk);
	  	console.log("oData ", oData);
	    wr(prf(), addDomain(domainNm, oData,1));
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	req.write(post_data);
	req.end();
}