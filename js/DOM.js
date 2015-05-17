var DOM={};//分类的作用，命名空间，单例
DOM.getIndex=function(ele){
	var index=0;
	for(var p=ele.previousSibling;p;p=p.previousSibling){
		if(p.nodeType===1){
			index++;
		}
	}
	return index;
}
DOM.listToArray=function(list){
	try{
		return [].slice.call(list,0);
	}catch(e){
		var a=[];
		for(var i=0;i<list.length;i++){
			a.push(list[i]);	
		}
		return a;
	}
}
DOM.offset=function(ele){
	var l=ele.offsetLeft;
	var t=ele.offsetTop;
	var p=ele.offsetParent;
	while(p){
		l+=p.offsetLeft+p.clientLeft;
		t+=p.offsetTop+p.clientTop;
		p=p.offsetParent;
	}
}
DOM.siblings=function(ele){
		var p=ele.parentNode;
		var nodes=p.childNodes;
		var a=[];
		for(var i=0;i<nodes.length;i++){
			var node=nodes[i];
			if(node.nodeType===1&&node!=ele){
				a.push(node);
			}
		}
		return a;
}
DOM.prevSiblings=function(ele){
	/*var p=ele.previousSibling;
	var a=[];
	while(p){
		if(p.nodeType===1){
			a.push(p);
		}
	}
	a.reverse();
	return a;*/
	
	var node=ele.parentNode.firstChild;
	var a=[];
	var i
	while(1){
		if(node===ele)break;
		if(node.nodeType===1){
			a.push(node);
		}
		node=node.nextSibling;
	}
	return a;
}

DOM.nextSilbings=function(ele){
	var node=ele.parentNode.lastChild;
	var a=[];
	while(1){
		if(node===ele)break;
		if(node.nodeType===1){
			a.push(node);
		}
		node=node.previousSibling;
	}
	return a;
}
DOM.prev=function(ele){//获得ele的相邻的第一个哥哥元素节点
	
}
DOM.next=function(ele){//获得ele的相邻的第一个弟弟元素节点
	
}
DOM.closest=function(){//获得ele相邻的哥哥和弟弟（最多两个）
}
DOM.children=function(parent,tag){
	//第二个参数可选，如果写了第二个参数，则表示获得指定标签名的子元素
	var nodes=parent.childNodes
	var a=[];
	if(typeof tag =="undefined"){	
		for(var i=0;i<nodes.length;i++){
			var node=nodes[i];
			if(	node.nodeType===1){
				a.push(node);	
			}
		}
	}else if(typeof tag=="string"){//如果第二个参数是个字符串，
		tag=tag.toUpperCase();//把tag无条件转为大写字母
		for(var i=0;i<nodes.length;i++){
			var node=nodes[i];
			if(	node.nodeType===1&&node.tagName==tag){
				a.push(node);	
			}
		}
	}else{
		throw new Error("第二个参数类型不正确");	
	}
	return a;
}

DOM.getEleByClass=function(str,context){
	context=context||document;
	/*if(document.getElementsByClassName){
		return context.getElementsByClassName(str);
	}*/
	str=str.replace(/^ +| +$/g,"");
	var aClassName=str.split(/ +/);
	var eles=context.getElementsByTagName("*");
	for(var i=0;i<aClassName.length;i++){
		var strClass=aClassName[i];
		var reg=new RegExp("(?:^| )"+strClass+"(?: |$)");
		var aTemp=[];
		for(var j=0;j<eles.length;j++){
			var ele=eles[j];
			if(reg.test(ele.className)){
				aTemp.push(ele);	
			}
		}
		eles=aTemp;
		
	}
	return eles;
}

DOM.addClass=function(ele,strClass){
	//"a b c a"+"a";
	var reg=new RegExp("(^| )"+strClass+"( |$)");
	if(!reg.test(ele.className)){
		ele.className+=" "+strClass;
	}
}
	
DOM.removeClass=function(ele,strClass){
	var reg=new RegExp("(^| )"+strClass+"( |$)","g");
	ele.className=ele.className.replace(reg,"");
}


