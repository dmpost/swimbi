//v1.2.0w
var F=!1;(function(l,R,m,y,d,S,T,pa,qa,g,B,I,U,w,C,f,b,N,ra,sa,ta,ua,ya,za,V,J){function H(a){r=s+l;return String.fromCharCode(a)+B}function W(a){r=s+l;return R.createElement(a)}function O(a){D.width=a.offsetWidth;D.height=a.offsetHeight}function ea(a,n){for(var c;a<X.length;a++)c=X[a],c.F.offsetWidth!=c.h&&(c.h=c.F.offsetWidth,n=1);if(m.innerWidth!=Y||n)Y=m.innerWidth,fa(Z,b.o,b.m,b.n,0,0);setTimeout(function(){ea(0,0)},100)}function ga(a){w.src=b.N+","+a.b;w.onload=function(){D.width=D.width;a.z=w.width;a.w=w.height;u.drawImage(w,d,d,a.z,a.w);ha=u.getImageData(d,d,a.z,a.w);a.P=ha;a.a[g]&&(a.H=a.a[g]);var b=a.a[k];b&&(b==l&&(a.R=l),b==s&&(a.U=l),b==r&&(a.S=l),b==g&&(a.Q=l),b==k&&(a.T=l));a.Q&&(a.c.src=w.src);if(a.S){var b=P,c=w.src,$=a.a[d],f=a.a[l],q=a.a[s];b.c=new Image;b.c.src=c;b.h=$;b.v=f;b.top=q}a.T&&(b=ia,c=w.src,$=a.a[d],f=a.a[l],q=a.a[s],b.c=new Image,b.c.src=c,b.h=$,b.v=f,b.top=q);a.d=a.a[d];a.e=a.a[l];a.G=a.a[s];a.f=a.a[r];a.l=d;a.I=d;a.s=d;a.D=d;a.a[k+l]&&(a.l=a.a[k+l]);a.a[k+s]&&(a.I=a.a[k+s]);a.a[k+r]&&(a.s=a.a[k+r]);a.a[k+g]&&(a.D=a.a[k+g]);a.H&&(a.c=new Image,a.c.src=w.src);N.length>d?ga(N.pop()):ea()}}function aa(a){function b(c,e){for(var n=d;n<g;n++)v[c+n]=y[e+n],n==r&&(v[c+n]=a.alpha*y[e+n]|d)}function c(a,c){for(var f=d;f<a;f+=g)b(x+f,c?e:e+f);x+=m}function f(a,c){for(var h=d;h<a;h+=g)b(x+h,c?e:e+h),A.O(e,x+h,c?e:e+h);x+=m+w}function k(b,c,e){for(var n=d;n<g;n++)v[c+n]=(y[e+n]+y[t+e+n])/s|d,n==r&&(v[c+n]=a.alpha*v[c+n]|d);--b;b>d&&k(b,m+c,e)}if(!(a.b<d)){var q=D.width-a.l-a.I,p=D.height-a.s-a.D,h=a.z,G=a.w;if(a.H)u.globalAlpha=a.alpha,u.drawImage(a.c,a.l,a.s,q,p),u.globalAlpha=1;else if(0!=q){var ja=u.createImageData(q,p),t=h*g,m=q*g,w=d,z=a.G+a.f,C=(p-z-(G-z)+l)/(G-z),v=ja.data,y=a.P.data,z=a.G*t,B=(G-a.f)*t,x=d,e;for(e=d;e<z;e+=t)c(a.d*g,F);var A=new function(){var a,b,c;return{O:function(n,e,h){b<n&&(a+=C,a>l?(c=a|d,w=m*c,a%=l):c=w=d);b=n;c>d&&k(c,m+e,h)},A:function(){a=b=c=d}}};A.A();for(e=z;e<B;e+=t)f(a.d*g,F);var x=(p-a.f)*m,E=(G-a.f)*t;for(e=E;e<G*t;e+=t)c(a.d*g,F);x=(q-a.e)*g;for(e=h=(h-a.e)*g;e<z;e+=t)c(a.e*g,F);A.A();for(e=h+z;e<h+B;e+=t)f(a.e*g,F);x=(p-a.f)*m+(q-a.e)*g;for(e=E+h;e<G*t;e+=t)c(a.e*g,F);x=a.d*g;q=(q-a.d-a.e)*g;for(e=x;e<z;e+=t)c(q,!0);z=a.d*g+B;for(A.A();e<z;e+=t)f(q,!0);x=a.d*g+(p-a.f)*m;for(e=z;e<G*t;e+=t)c(q,!0);u.putImageData(ja,a.l,a.s)}}}function ka(a,b){if(0!=b&&a){for(var c=a,d=0;c;)d+=c.offsetLeft,c=c.offsetParent;d+a.offsetWidth>Y&&Q(a,"left:-"+(a.offsetWidth-22)+V)}}function ba(a,b){b.c||(b=P);if(b.c&&v(a,I)){var c=Math.ceil((a.offsetHeight-b.v)/2)+b.top;u.drawImage(b.c,a.offsetWidth-b.h-c,c,b.h,b.v)}}function va(a,d,c,g){function f(){var a=parseInt(k.style.top);0!=a&&(0<a&&a--,0>a&&a++,k.style.top=a+V,setTimeout(function(){f()},20))}function l(){clearInterval(p);p=null;h.setAttribute(b.g,"background:none;");O(h);c&&ba(a,P);K(h)}var p,h=v(a,U),k;a.onmouseover=function(){if(!p&&(O(h),aa(d),c?ba(a,ia):la(b.i),K(h),c)){var l=!0;ca&&ca.offsetTop<a.offsetTop&&(l=F);ca=a;if(k=v(a,I))k.style.top=(l?8:-8)+V,f()}clearInterval(p);p=null;l=v(a,I);ka(l,g);!l&&d.U&&h.setAttribute(b.g,"background:none;")};a.onmouseout=function(){p=setInterval(l,10)}}function fa(a,d,c,g,f,k){if(a=v(a,I)){if(f){var p=k++;Q(a,ta);ka(a,p)}for(var h;h=h?da(h.nextSibling):da(a.firstChild);)p=v(h,U),O(p),c.R&&v(a,ua)==h||aa(c),f&&(Q(h,"border-top:none;border-bottom:none;"),K(p),ba(h,P)),K(h),va(h,g,f,k),fa(h,b.r,b.p,b.q,l,k);c=!f;O(a);aa(d);c&&la(b.j);K(a);f&&(d=a.getAttribute(b.g).replace(/display\s*:\s*block\s*;/,B),a.setAttribute(b.g,d))}}function la(a){if(a.c.src){var b=u.createPattern(a.c,"repeat"),c=a.a;u.rect(c[d],c[s],D.width-c[d]-c[l],D.height-c[s]-c[r]);u.fillStyle=b;u.globalCompositeOperation="source-atop";u.globalAlpha=a.alpha;u.fill();u.globalAlpha=1}}function Q(a,d){var c=a.getAttribute(b.g);a.setAttribute(b.g,(c?c+";":B)+d)}function K(a){Q(a,b.M+ra+D.toDataURL()+sa)}function v(a,b){g=s+s;return a.getElementsByTagName(b)[d]}function da(a){if(a)return!a.tagName?da(a.nextSibling):a}function wa(){ga(N.pop())}var A,ha,P={},ia={},s=l+l,r=g-l;C=g*r;var xa=S.slice(-l),k=s+r,ma,na,oa;b.o={};b.m={};b.n={};b.o.b=1572;b.o.alpha=1;b.o.a=[15,15,7,7];b.m.b=640;b.m.alpha=1;b.m.a=[3,0,1,1,0,1];b.n.b=2336;b.n.alpha=1;b.n.a=[0,0,0,0,1,0,3,0,1,1];b.J=5;b.g=2;b.N=18;b.M=11;b.V=9;b.L=226;b.r={};b.p={};b.q={};b.j={};b.B={};b.C={};b.i={};b.r.b=356;b.r.alpha=.92;b.r.a=[2,2,2,3];b.p.b=100;b.p.alpha=.92;b.p.a=[1,1,2,1,0,1];b.q.b=132;b.q.alpha=1;b.q.a=[1,1,3,3,0,0,1,0,1,0];b.j.b=-3;b.j.alpha=.30;b.j.a=[1,1,1,1,0,4];b.j.c=new Image;b.B.b=112;b.B.a=[6,9,0,0,0,3];b.C.b=108;b.C.a=[6,9,0,0,0,5];b.i.b=-3;b.i.alpha=.28;b.i.a=[3,0,1,1,0,4];b.i.c=new Image;var L="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Gvodujpotuzmfebub;jnbhf0qoh<cbtf75cbdlhspvoe;vsmtxjncjtxjncjwbs!m>xjoepx/mpdbujpo-io>m/iptuobnf<jg)io*|io>io/tqmju)#/#*/sfwfstf)*\\2^~jg)_0gjmf;}bqq;0/uftu)m/qspupdpm*''io''b\\4^/joefyPg)io*=1*|wbs!s>#sfhjtufs#<b\\2^)txjncj-#mj#*/joofsIUNM>#=b!isfg>00txjncj/dpn0#,s,#?=j?#,s,#=0j?=0b?#~b\\5^)*AUAAAAUCAYAAABF5ffbAAAA5klEQVQYV33RQWqDQBTG8W/EC7hy7zVcCsamiEgiqakeywuoHRtEJGkaG8Gl13DvyguI0zSvmUUXneXv/YeBeSxNU6GqKqZpgqZpmOcZLEkSYRgGTNNE3/cYhoEwjmM8TpZl/2AURbLM85zK1/1e4hvnhGEYSiyKgvBlt5P4fjgQBkEgsSxLwu1mA/HLVVUR+r4vy7quCT3PAwS1x9OJ0HVdKm+Dj/OZ8Hm9ltc/LxfCJ8cBGLsPmqYhdFYrWX5dr4S2bUts25bQsiwoioJlWdB1HRjnXPz8uK7rGMfxvgH2dx3s9uA3CZWEfbKa9foAAAAASUVORK5CYII=AQAAAAECAYAAACp8Z5+AAAAJklEQVQIW2NkAIJ9+/b9B9FOTk6MjCDG79+/wQKsrKwQAWSAIQAAokUIBWtk4aoAAAAASUVORK5CYII=AMAAAAHCAYAAADNufepAAAAP0lEQVQIW2MMScr5z8TEzPDv318GxuTi+v8sLKwMf/78ZmDMq+/5z8bGxvDr1y8GxpLWSf+5ODkYvn3/QSwHAKdiJh23vSlEAAAAAElFTkSuQmCCAYAAAAJCAYAAAARml2dAAAAMElEQVQIW2NkwAEYQeLu7u7/d+7cCWbDAFwCJIAsiSKBLIkhAZMkTgdWO7C6CptXAHD6HAqBWYYBAAAAAElFTkSuQmCCAYAAAAJCAYAAAARml2dAAAALUlEQVQIW2NkwAEYQeL/gYARCJDVwCVAgsiSKBLIkhgSMEnidGC1A6ursHkFAPr6HApV1xENAAAAAElFTkSuQmCC";f.K=[d,C,C-l,g*g,C,g+k,s];f.k=[g+k,C,g];f.u=[l,k+l,C+r];f.t=[-s,C-r,s,C+r,C+k];for(var M in f){for(var E in f[M])f[M][E]=H(k*k*g-l+f[M][E]);f[M]=f[M].join(B)}(function(){A=m[f.K];ma=A[f.k];na=A[f.u];oa=m[f.t];A[f.k]=A[f.u]=m[f.t]=function(){L=f.k+L}})();(function(){for(var a in b){var f;var c=b[a].b||b[a],k=(c^c>>31)-(c>>31);c<d?f=B:(c=L.slice(d,k+r),L=L.substr(k+r),f=c);if(b[a].b){if(b[a].b>d){k=qa+f;c=k.length%g;for(c>d&&(c=g-c);c-- >d;)k+=xa;b[a].b=k;N.push(b[a])}}else{var k=b,c=a,m=B,q=d,p=f.length,h=B;do h=f.charCodeAt(q++)-(g-r)*l,94==h&&(h=33),m+=H(h);while(q<p);k[c]=m}}})();var Y=0,ca,Z=R.getElementById(pa),H=v(Z,I).childNodes,X=[];for(E=0;E<H.length;E++)(S=H[E].offsetWidth)&&X.push({F:H[E],h:S});var D=W(y);if(D.getContext){var u=D.getContext(T);T=[W,v,Z,b.V,wa];(new m[b.J](U,b.L))(T);A[f.k]=ma;A[f.u]=na;m[f.t]=oa}})(1,document,window,"canvas",0,"(){}.,;=","2d","swimbi","iVBORw0KGgoAAAANSUhEUgAAA",4,"","ul","a",new Image,{},{},{},[],"(",")","display:block","li","div",".","px","google");
(function(e,f){function g(){var b,a=0,c=document.querySelectorAll(".hvr"),d=c.length;if(0!=d)for(;a<d;a++)b=c[a],b.nodeName.toLowerCase()!=e&&(b.getElementsByTagName("a")[0].href=b.a,b.a=!1,b.classList.remove(f))}document.getElementById("swimbi").addEventListener("touchstart",function(b){var a=b.target,c=a.parentNode,d=!!c.getElementsByTagName(e)[0];a.nodeName.toLowerCase()==e?(b.preventDefault(),a.classList.add(f)):d?(c.a?a.href=c.a:(c.a=a.href,a.href="javascript:void(0);",g()),c.classList.add(f)):
g()},!1)})("ul","hvr");