
Template.recommendations.helpers({

	// random : function(){
	// 	return Math.floor(Math.random()*5);
	// },

	// randVideos : function(){
	// 	var videos = ['eSR0JaIIM88', 'Z4GvxAFUyg0', 'WsNZCBzA7jE', 'zjU2GF1ro20', 'WBpVPpc-Uus', '8i1VmOBOkP0', 'egxEfBI3hyk', 'sd8CX-Jq8L4', 'hLIWgYrWKrE', 'KJ4hxmrk6iI', 'C9_2m5iHPtI', 'evLsTc4SC5s', 'dd6eHQahAx4', ''];
	// 	var index=Math.floor(Math.random() * videos.length);
	// 	var index2 = Math.floor(Math.random() * videos.length);
	// 	var index3 = Math.floor(Math.random() * videos.length);
	// 	var index4 = Math.floor(Math.random() * videos.length);
	// 	// var html='<body class="news"><header><div class="nav"><ul><h1 class = "navb">CrickRate</h1></ul></div></header></body><h1 style="text-align:center">Recommended Vidoes</h1><div class = "allVideos" id="allVideos" style="margin:0 0 0 80px"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index2] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index3] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index4] + '" frameborder="0" allowfullscreen></iframe></div>';
	// 	// return videos[index];
	// 	var html='<body class="news"><header><div class="nav"><ul><h1 class = "navb">CrickRate</h1></ul></div></header></body><h1 style="text-align:center">Recommended Vidoes</h1><div class = "allVideos" id="allVideos" style="margin:0 0 0 80px"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index2] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index3] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index4] + '" frameborder="0" allowfullscreen></iframe></div>';
	// 	document.write(html);	
	// },

	// randomVideos : function(){
	// 	var videos = ['eSR0JaIIM88', 'Z4GvxAFUyg0', 'WsNZCBzA7jE', 'zjU2GF1ro20', 'WBpVPpc-Uus', '8i1VmOBOkP0', 'egxEfBI3hyk', 'sd8CX-Jq8L4', 'hLIWgYrWKrE', 'KJ4hxmrk6iI', 'C9_2m5iHPtI', 'evLsTc4SC5s', 'dd6eHQahAx4', ''];
	// 	var index=Math.floor(Math.random() * videos.length);
	// 	var index2 = Math.floor(Math.random() * videos.length);
	// 	var index3 = Math.floor(Math.random() * videos.length);
	// 	var index4 = Math.floor(Math.random() * videos.length);
	// 	// var html='<body class="news"><header><div class="nav"><ul><h1 class = "navb">CrickRate</h1></ul></div></header></body><h1 style="text-align:center">Recommended Vidoes</h1><div class = "allVideos" id="allVideos" style="margin:0 0 0 80px"><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index2] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index3] + '" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="http://www.youtube.com/embed/' + videos[index4] + '" frameborder="0" allowfullscreen></iframe></div>';
	// 	return videos[index];
	// },

	showVideos : function(){
		var sum = 0;
		var check = 0;
		userid = messages.find({id: Meteor.userId()}).fetch();
		_.each(userid, function(rate){
			_.each(rate.ratings, function(value){
				var t = parseInt(value,10);
				sum = sum + t;
			});
			if(sum!=0){
				check = 1;
			}
			else{
				check = 0;
			}
		});
		if(check==0){
			return false;
		}	
		else{
			return true;
		}
	}
// 	keyWordsearch : function(){
// 		gapi.client.setApiKey('api_key_here');
// 		gapi.client.load('youtube', 'v3', function(){
// 		    makeRequest();
// 		});
// 	},
	
// 	makeRequest : function(){
// 		var q = 'darren sammy';
// 		var request = gapi.client.youtube.search.list({
// 		    q: q,
// 		    part: 'snippet', 
// 		    maxResults: 10
// 		});
//     	request.execute(function(response) {                          
//         	$('#results').empty();
//         	var srchItems = response.result.items;                      
//         	$.each(srchItems, function(index, item){
//         		vidTitle = item.snippet.title;  
//         		vidThumburl =  item.snippet.thumbnails.default.url;                 
//         		vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';    
//         		$('#results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');  
//         	});  
//   		});  
// 	}
});
