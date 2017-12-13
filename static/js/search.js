function init(){
  		var items =  $(".item");
  		var highItems = null;
  		var currentItem = -1;
  		$("#searchBtn").on("click",function(){
  			currentItem = -1;
  			highItems = null;
  			$(".heigLight").removeClass("heigLight");
  			var searchText = $("#searchText").val();
  			var regExp = new RegExp(searchText, 'g');
  			var contentText = $("#contentGroup").text();
  			if(regExp.test(contentText)){
  				highItems = new Array();
  				items.each(function(idx,item){
  					var _text = $(item).text();
  					if(regExp.test(_text)){
  						highItems.push(idx);
  						$(item).addClass("heigLight");
  					}
  				});
  			}
  		});
  		$("#nextBtn").on("click",function(){
  			if(highItems){
  				currentItem++;
          if(currentItem>=highItems.length){
            currentItem = 0;
          }
  				var item = items[highItems[currentItem]];
  				if(item){
  					var _top = $(item).offset().top-30;
  					$("body").animate({scrollTop:_top});
  				}
  			}
  		});
}