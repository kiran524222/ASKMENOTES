function storageFunction() {
		if(localStorage.getItem('username') == null) {
			var a = prompt("Enter Your Name");
			localStorage.setItem('username', a)
			document.querySelector("p").innerHTML = localStorage.getItem("username");
		} else {
			document.querySelector("p").innerHTML = localStorage.getItem("username");
		}
	}
