// JavaScript Document

(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) { return; }
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1933454553572459';
	  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function sortBy(prop){
   return function(a,b){
	  if( a[prop] > b[prop]){
		  return 1;
	  }else if( a[prop] < b[prop] ){
		  return -1;
	  }
	  return 0;
   };
}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}


function loaded() {

	document.getElementById("contact-form").addEventListener("submit",
		function(event) {

			event.preventDefault(); // stop page from reloading
		
			var alertbox = document.getElementById('contact-message');
		    var contactform = this;
		
			$.ajax({
				type: 'POST', 
				url: 'php/sendmail.php',
				data: $('#contact-form').serialize(),
				success: function (data) {
					alertbox.classList.remove('hidden');
					alertbox.classList.remove('alert-success');
					alertbox.classList.remove('alert-danger');
					if(data.status === "success") {
						alertbox.classList.add('alert-success');
						alertbox.innerHTML = 'Thank you! Your information was sent. We will be in touch shortly.';
						contactform.reset();
					} else {
						alertbox.classList.add('alert-danger');
						alertbox.innerHTML = 'Uh oh! There was a problem with your submission. Please correct the error and try again.<br>' + data.message;
					}
				}
			});
		},
		false);
}

window.addEventListener("load", loaded, false);
	