(function(){
	var Pageing = functionparamObj
		var cfg = {
			$wrap:null, //分页的容器
			pageTotal:0, //总条数
			pageNum:5, //每页的条数
			totalPage:0; //总的页数
			isPrevNext:false, //是否要显示上一页和下一页的触发元素
			isFirstLast:false, //是否要显示跳到首页和尾页的元素
			pageClick:function(page){ 
				
			}
		}
		$.extend(cfg,paramObj);
		var $pageUl = $wrap.children("ul");
		var $ul = $("<ul></ul>");
		 this.cfg .totalPage = this.cfg.pageTotal / this.cfg.pageNum;
		 for(var i=1;i<=this.cfg.totalPage;){
		 	$ul.append($("<li>"+i+"</li>"));
		 }
		 .append();

	}
	/**
	 * 	点击具体的页数之后调用的方法
	 * @param  {[number]} page [当前的页数]
	 * @param  {[function]} callBack [点击具体的页数之后执行的回掉函数]
	 */
	Pageing.prototype.pageClick:function(page,callBack){


	}
})();