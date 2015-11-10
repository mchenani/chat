$(document).ready(function(){	
	var url = $(location).attr('href');
	var socket = io.connect(url);
	var username = "Default";
	var username_id = Math.floor((Math.random() * 6) + 1);
	$('[data-toggle="tooltip"]').tooltip()
	$('#form-new-data').submit(function(event){
		event.preventDefault();
		socket.emit('new-data',{'message': $('#form-message').val(), 'username': username});
		$('#form-message').val('');
	});
	$('#select-username').submit(function(event){
		event.preventDefault();
		username = $('#select-username-input').val();
		if (username != ''){
			$('#chat').css('height',window.innerHeight- 150);
			$.ajax({
				url: "/register",
				method: "POST", 
				data: {username:username},
			}).done(function(data){
	    	    $('#start').slideUp();
				$('#chat-room').slideDown();	
				$('#form-message').val('');	
				socket.emit('new-data',{'username':username});
		    });
		}
		for (var i = 1; i <= $('#chat li').length; i++) {
			imageSrc = md5($('#chat li:nth-child('+i+')').children('img').attr('username').toLowerCase());
			$('#chat li:nth-child('+i+')').children('img').attr('src','http://www.gravatar.com/avatar/'+imageSrc+'?s=30');
		};
		emojify.run(document.getElementById('chat'))
		var objDiv = document.getElementById("chat");
		objDiv.scrollTop = objDiv.scrollHeight;
	});

	socket.on('new-data',function(data){
		if (typeof data.message != 'undefined'){
			var className = "default";
			var src = 'http://www.gravatar.com/avatar/' + md5(data.username.toLowerCase()) +'?s=30';		
			$('#chat').append('<li><img data-toggle="tooltip" data-placement="left" title="'+data.username+'" title="'+data.username+'" class="image" src="'+src+'" />  '+data.message+'</li>')
			var objDiv = document.getElementById("chat");
			objDiv.scrollTop = objDiv.scrollHeight;
			emojify.run(document.getElementById('chat'))
		}
	});
});