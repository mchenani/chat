var url = $(location).attr('href');
var socket = io.connect(url);
var username = "Default";
var username_id = Math.floor((Math.random() * 6) + 1);
$('#form-new-message').submit(function(event){
	event.preventDefault();
	socket.emit('send message',{'message': $('#form-message').val(), 'username': username, 'username_id': username_id });
	$('#form-message').val('');
});
$('#select-username').submit(function(event){
	event.preventDefault();
	username = $('#select-username-input').val();
	if (username != ''){
		$('#start').slideUp();
		$('#chat-room').slideDown();
	}
});

socket.on('new message',function(data){
	var className = "default";
	if (data.username_id % 6 == 1){className = 'default';};
	if (data.username_id % 6 == 2){className = 'primary';};
	if (data.username_id % 6 == 3){className = 'success';};
	if (data.username_id % 6 == 4){className = 'info';};
	if (data.username_id % 6 == 5){className = 'warning';};
	if (data.username_id % 6 == 6){className = 'danger';};
	$('#chat').append('<li><span class="label label-'+className+'">'+data.username+'</span>: '+data.message+'</li>')
});