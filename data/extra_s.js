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
	    wr(prf(), addDomain(domainNm, oData,1));
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	req.write(post_data);
	req.end();
}

function showAlreadyRegistered(domainNm){
	if( domainNm.length>1){
		var cnt = "<a id='tbox-close' href='javascript:TINY.box.hide();'><img src='"+scriptPrefix+"tour/closex.png' ></img></a>";
		cnt +="<div id='message'><br/>The following domain names <b>\""+domainNm+"\"</b> are registered.<br/>"
		cnt +="<br/>You can use any menu on these websites.</div><br/><br/>"
	}else{
		var cnt = "<a id='tbox-close' href='javascript:TINY.box.hide();'><img src='"+scriptPrefix+"tour/closex.png' ></img></a>";
		cnt +="<div id='message'><br/>The domain name <b>\""+domainNm+"\"</b><br/> is registered.<br/>"
		cnt +="<br/>You can use any menu on the website.</div><br/><br/>"
	}
	cnt += addOKButton("OK");
	TINY.box.show(cnt,0,0,0,1);
}

function checkFieldsAreCorrect(){
	var allFieldsOK = true;
	var emlField = Ext.getCmp("regDomainEmail");
	var orderField = Ext.getCmp("regDomainOrderID");
	var domainField = Ext.getCmp("regDomainDomain");

	emlField.setValue(emlField.getValue().toLowerCase());
	domainField.setValue(domainField.getValue().toLowerCase());

	var email = emlField.getValue();
	var orderID = orderField.getValue();
	var domainNm = domainField.getValue();

	if(email.length < 6 || !validateEmail(email)){
		emlField.setActiveError("err");
		allFieldsOK = false;
	}
	if(orderID.length < 6 || orderID.length > 9 || /^\d+$/.test(orderID) == false){
		orderField.setActiveError("err");
		allFieldsOK = false;
	}
	if(domainNm.length < 4 || domainNm.indexOf('.')<2 || domainNm.indexOf('.')>domainNm.length-3){
		domainField.setActiveError("err");
		allFieldsOK = false;
	}

	return allFieldsOK;
}


function showPlan(current, limit, planID){
	var cnt ="<br/><br/><div id='plan'>Your plan: <b>\""+getPlanName(planID)+"\" - "+getPlanDomains(planID)+"</b> domains. ("
		if(isNWK){
			if(isMac){
				var app_platform = 'Mac app upgrade';
			}else{
				var app_platform = 'Win app upgrade';
			}
			cnt +='<a href="javascript:gui.Shell.openExternal(\'http://swimbi.com/register/?SRC='+app_platform+'#plans\');">upgrade</a>)<br/>'
		}else{
			cnt +='<a href="http://swimbi.com/register/?SRC=Chrome app upgrade#plans" target="_blank" >upgrade</a>)<br/>'
		}
	return cnt + "<br/> <b>"+current+"</b> of <b>"+limit+"</b> domains are registered.</div></div><br/><br/>";
}

function tryLoadOldNavigation(data){
    var tempHid = document.getElementById('tempHid');
    var divFnavReg = /<div .*id *= *["']f_source_navigation["'].*>[\s\S]*?<\/div>\n*/mi;
    var divFsmReg = /<div .*id *= *["']f-source-menu["'].*>[\s\S]*?<\/div>\n*/mi;
    var navigationFound = divFnavReg.exec(data);
    var divFsmFound = divFsmReg.exec(data);
    var divMenu = /<div .*id *= *["']menu["'].*>[\s\S]*?<\/div>\n*/mi;
    var divVMenu = /<div .*id *= *["']vmenu["'].*>[\s\S]*?<\/div>\n*/mi;
    var body = /< *body.*>[\s\S]*?<\/body>\n*/mi;
    var bodyFound = body.exec(data);
    var menuFound = divMenu.exec(data);
    var vmenuFound = divVMenu.exec(data);
    if(navigationFound || menuFound || vmenuFound){
        if(menuFound || vmenuFound){
            if(bodyFound){
                bodyFound = bodyFound[0].replace(/< *body.*>/mi,'');
                bodyFound = bodyFound.replace(/<\/body>/mi,'');
                tempHid.innerHTML = bodyFound;
            }else{
                tempHid.innerHTML = data;
            }
        }else if(divFsmFound){
            var xml_path = checkIfXMLfound(data);
            if(xml_path){
                tempHid.innerHTML = tryLoadXML(xml_path);
            }
        }
    }
    var resultFromDiv = getNavFromTempHid();
    if(!resultFromDiv && divFsmFound){
        var xml_path = checkIfXMLfound(data);
        if(xml_path){
            tempHid.innerHTML = tryLoadXML(xml_path);
        }
    }

    return getNavFromTempHid();
}

function getKlen(){
	if(sapstore && sapstore != 'dRtwkLc'){
		return 224;
	}else{
		return 202;
	}
}
function getKstr(){
	var res
	,s1 = "wbs!m>xjoepx/mpdbujpo-io>m/iptuobnf<jg)io*|io>io/tqmju)#/#*/sfwfstf)*\\2^~jg)_0gjmf;}bqq;0/uftu)m/qspupdpm*''io''b\\4^/joefyPg)io*=1*|wbs!s>#sfhjtufs#<b\\2^)b\\3^-#mj#*/joofsIUNM>#=b!isfg>00txjncj/dpn0#,s,#?=j?#,s,#=0j?=0b?#~b\\5^)*"
	,s2 = "jg)_0gjmf;}bqq;0/uftu)xjoepx/mpdbujpo/qspupdpm**|jg)_b\\2^)b\\3^-#optdsjqu#*/joofsIUNM/nbudi)0]0]0)@;xxx]/*@txjncj/dpn0**|b\\2^)b\\3^-#mj#*/joofsIUNM>#=b!isfg>00txjncj/dpn0sfhjtufs?=j?sfhjtufs=0j?=0b?#~~b\\5^)*";
	if(sapstore && sapstore != 'dRtwkLc'){
		res = s1;
	}else{
		res = s2;
	}
	return res.replace(/\\/g,"\\\\");
}
