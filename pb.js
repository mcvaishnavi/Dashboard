function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		

		
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
		}
		else
		{
	        /*alert('Aye mate, welcome to Shelby Company ');*/
			console.log("Aye mate, welcome to Shelby Company" + " \nyour username is "+ uname +" \nyour password is " + pwd);
   
 
		}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}
	
