$(document).ready(function(){	
	var url = $(location).attr('href');
	var socket = io.connect(url);
	var username = "Default";
	var username_id = Math.floor((Math.random() * 6) + 1);
	$('[data-toggle="tooltip"]').tooltip()
	$('#form-new-message').submit(function(event){
		event.preventDefault();
		socket.emit('new-message',{'message': $('#form-message').val(), 'username': username, 'username_id': username_id });
		$('#form-message').val('');
	});
	$('#select-username').submit(function(event){
		event.preventDefault();
		username = $('#select-username-input').val();
		if (username != ''){
			$('#chat').css('height',window.innerHeight- 150);
			$('#start').slideUp();
			$('#chat-room').slideDown();	
			socket.emit('all-users',{'username': username});
			$('#form-message').val('');		
		}
		for (var i = 1; i <= $('#chat li').length; i++) {
			imageSrc = md5($('#chat li:nth-child('+i+')').children('img').attr('username').toLowerCase());
			$('#chat li:nth-child('+i+')').children('img').attr('src','http://www.gravatar.com/avatar/'+imageSrc+'?s=30');
		};
		emojify.run(document.getElementById('chat'))
		var objDiv = document.getElementById("chat");
		objDiv.scrollTop = objDiv.scrollHeight;
	});

	socket.on('new-message',function(data){
		var className = "default";
		var src = 'http://www.gravatar.com/avatar/' + md5(data.username.toLowerCase()) +'?s=30';		
		$('#chat').append('<li><img data-toggle="tooltip" data-placement="left" title="'+data.username+'" title="'+data.username+'" class="image" src="'+src+'" />  '+data.message+'</li>')
		var objDiv = document.getElementById("chat");
		objDiv.scrollTop = objDiv.scrollHeight;
		emojify.run(document.getElementById('chat'))
	});
});