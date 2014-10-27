function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function addInRandomPlace(arr, el){
    var pos = Math.floor(Math.random() * (arr.length+1));
    arr.splice(pos,0, el);
    return arr;
}

function addImageOrText(txt){
    var randVar = Math.ceil(Math.random() * 5);
    if(randVar==1){
        return  '<img alt="'+txt+'" src="http://swimbi.com/img/swbnr1.png" />';
    }
    return txt;
}

function insertStWord(txt, stop){
    var words = txt.split(' ');
    var order = Math.ceil(Math.random() * 3);
    if(order == 1){
       // add before
        words.unshift(stop);
        return words.join(' ');
    }else if(order == 2){
       // adding with shuffle
        words.unshift(stop);
        return shuffle(words).join(' ');
    }else if(order == 3){
       // adding in random place
        words = addInRandomPlace(words, stop);
        return words.join(' ');
    }
}

function getSwData(){
console.log('getSwData from swimbi gcode');
    var follows = ['','', ' rel="nofollow"','','','','']
    , thes = ['', 'Free ','Free ','free ', 'Simple ', 'Website ','The ', 'Here ', 'Get ', 'Build ', 'A ', 'Create ', 'Generate ', 'Make ', 'Stylish ', 'Advanced ', '']
    , swimbis = ['', 'Swimbi ', '', 'SWIMBI ', '', 'swimbi ']
    , lnkURLs = [ '//swimbi.com', 'http://swimbi.com', 'http://www.swimbi.com', '//swimbi.com', 'http://swimbi.com', '//swimbi.com/download/']
    , provides = ['by', 'provided by', 'property of', 'made by', 'from', 'at', '', 'software of']
    , stops = ['a', 'of', 'how', 'to', 'in the', 'as', 'with', 'for', 'that', 'look', 'more than', 'in',  'in to', 'how to', 'from', 'with', 'by', 'using', '-', '-', ',', ',', '', '', '', '']
    , txts = ['html menu',
    'menu design',
    'dropdown css',
    'css+ menu',
    'drop_down menu',
    'web menu maker',
    'html menu builder',
    'dropdown menu styles',
    'drop_down menu creator',
    'css3 menu builder',
    'css_menu builder',
    'css_menu maker',
    'html menu maker',
    'html menu',
    'menu html',
    'canvas menu',
    'css navigation',
    'horizontal menu',
    'navigation menu',
    'css menu',
    'css menu',
    'css menu',
    'css_menu',
    'css_menu',
    'css_menu',
    'css_menu generator',
    'css drop_down menu',
    'drop_down menu css3',
    'css menu bar',
    'drop_down menu',
    'drop_down menu',
    'drop_down menu',
    'drop_down_menu',
    'drop_down css menu',
    'drop_down css menu',
    'drop_down css menu',
    'css menu drop_down',
    'css menu drop_down',
    'css menu drop_down',
    'html css navigation bar',
    'menu creator',
    'menu maker',
    'menu builder',
    'cool css menu',
    'css menu creator',
    'swimbi.com',
    'swimbi.com',
    'swimbi',
    'swimbi',];

    var url = randInArray(lnkURLs)
    , follow = randInArray(follows)
    , the = randInArray(thes)
    , stop = randInArray(stops)
    , txt = randInArray(txts)
    , swimbi = (txt.indexOf('swimbi')<0 ? randInArray(swimbis) : '')
    , provided = randInArray(provides);
    if(txt=='url'){
        txt = url;
    }else{
        if(stop)txt = insertStWord(txt, stop);
        txt = the+swimbi+txt;
    }
    txt = txt.replace(/_/g,' ');
    var l = '<a href="'+url+'"'+follow+'>'+addImageOrText(txt)+'</a>';

    return '<canvas><noscript>'+l+' '+provided+' swimbi.com. All Rights Reserved'+'</noscript></canvas>\n';
}
