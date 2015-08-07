function getAllChildsOf(p, sw, isNavTab) {
    var ret = '';

    p.eachChild(function(node) {
        var firstLastID = '';
        node.childID = '';
        if(lilevel===1 && menuSettings.menuLayout && menuSettings.menuLayout.match(/100Left|100Right/)){
            if(node === p.firstChild)firstLastID = ' id="lifirst"';
            if(node === p.lastChild)firstLastID = ' id="lilast"';
        }
        var name = node.data.name;
        if(sw === 'onClickTreeSelect'){
            if(isNavTab)markPreviewChildsNav(lilevel, node);
            else markPreviewChilds(lilevel, node, p);
        }
        var link = node.data.link;
        var target = node.data.target;
        var fontIcon = node.data.fontIcon;
        var htmlClass = node.data.htmlClass;
        if(target != ''){
            target = ' target="'+target+'"';
        }
        if (fontIcon != '') {
            fontIcon = ' data-icon="' + fixSingleCharIcon(fontIcon) + '"';
            if (lilevel === 1) menuSettings.enableMainIcons = true;
            else menuSettings.enableSubIcons = true;
        }
        if(htmlClass != ''){
            htmlClass = ' class="'+htmlClass+'"';
        }
        if(sw === 'onClickTreeSelect'){
            ret += ''+addTabAndGet()+'<li'+firstLastID+node.childID+'><a onclick="selectNodeFromMenu(\'' + node.internalId + '\')"'+fontIcon+htmlClass+' href="#" '+target+'>' + name.replace(/"/g, "''") + '</a>'+ addULlistOf(node, sw, isNavTab)+'</li>\n';
        }else{
            ret += ''+addTabAndGet()+'<li'+firstLastID+'><a'+fontIcon+htmlClass+' href="' + link + '"'+target+'>' + name + '</a>'+ addULlistOf(node)+'</li>\n';
        }

        removeTab();
    });
    return ret;
}
