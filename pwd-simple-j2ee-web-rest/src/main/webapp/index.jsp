<html>
	<head>
		<script src="./vendor/js/jquery-3.3.1.min.js"></script>
	</head>
	<body>
		<h2>Hello World!</h2>
		<span id="btn-time-reload">Update Time</span>
		<div>Time: <span id="time-display"></span></div>
	</body>
	
	<script>
		$('#btn-time-reload').click(function() {
			console.log('did click reload button');
			
			$.ajax({
				method: "GET",
				url: "./api/rest/time/now"
			}).done(function( msg ) {
				console.log('Did Receive: ');
				console.log(msg);
				$('#time-display').html(msg.time)
				console.log('updated view');
			});
		});
	</script>
</html>
