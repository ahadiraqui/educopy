$(document).ready(function()
{ 
      
franchisee();    
   
});

$("#frach_register").on("submit", function(e)
{ 
	$('#message').html('<div class="spinner-border text-primaryr" role="status"><span class="sr-only">Loading...</span></div>');  	
    e.preventDefault();   
    var formData = new FormData(this);
    $.ajax({
      url  : "action.php",
      type : "POST",
      cache:false,
      data :formData,
      contentType : false,  
      processData: false,
      success:function(response)
      {  
        msg(response);
      }
    });
});

$("#form_data_view").on("submit", function(e)
{ 
	 e.preventDefault();   
	$('#message').html('<div class="spinner-border text-primaryr" role="status"><span class="sr-only">Loading...</span></div>');  	
   
    var formData = new FormData(this);
    $.ajax({
      url  : "action.php",
      type : "POST",
      cache:false,
      data :formData,
      contentType : false,  
      processData: false,
      success:function(response)
      {  
        //console.log(response);
		$("#verifications").html(response);
      }
    });
});


$("#state").change(function()
{
	$.ajax({  url:"action.php",  type:"POST",
          //dataType: "json",
          data:{ val : this.value , action:'district'},success:function(data) 
          	{  
            	$("#destrict").html(data);
            	console.log(data);
          	}
      	}) 
});

$("#form_data").on("submit", function(e)
{ 
    e.preventDefault();   
	$('#message').html('<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>');  	
    var formData = new FormData(this);
    $.ajax(
    {
        url  : "action.php",
        type : "POST",
        cache:false,
        data :formData,
        contentType : false,  
        processData: false,
        success:function(response)
        {  
            msg(response);
        }
    }) 
});


$("#contactForm").on("submit", function(e)
{ 
    e.preventDefault();   
	$('#message').html('<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>');  	
    var formData = new FormData(this);
    $.ajax(
    {
        url  : "action.php",
        type : "POST",
        cache:false,
        data :formData,
        contentType : false,  
        processData: false,
        success:function(response)
        {  
            msg(response);
        }
    }) 
});


$("#form_empvif").on("submit", function(e)
{ 
    e.preventDefault();   
    var formData = new FormData(this);
    $.ajax(
    {
        url  : "action.php",
        type : "POST",
        cache:false,
        data :formData,
        contentType : false,  
        processData: false,
        success:function(response)
        {  
            console.log(response);
            $("#employee_verif").html(response);
        }
    }) 
});

 function franchisee()
{  
    $.ajax({
          url:"addresult_action.php",
          type:"POST",
          //dataType: "json",
          data:{  action:'fr'},success:function(data) 
          { 
            	console.log(data);
                $("#franchiseellll").html(data);
          }
      })
}


 function processlogin()
 {

	var user_email=document.getElementById("user_email").value;
	var user_password=document.getElementById("user_password").value;
	var usertype=document.getElementById("usertype").value;

	var http = new XMLHttpRequest();
	var url = 'main-panel/login_action.php';
	var params = "user_email="+user_email+"&user_password="+user_password+"&action=login&usertype="+usertype; 
	if(user_email!="" && user_password!="" && usertype!="")
	{
		http.open('POST', url, true); 
		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		http.onreadystatechange = function() {  
			if(http.readyState == 4 && http.status == 200) 
			{   
				if((http.responseText).length==10)
				{ 
					$('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>syntax error in query expression</div>"); 

					 location.url='main-panel/dashboard.php';
				}
				else if((http.responseText).length==5)
				{ 
					$('#message').html("<div class='alert alert-success' style='padding: 4px; text-align: center;'>login success</div></span>"); 

					window.location.href ='main-panel/dashboard.php';
				}
				else if((http.responseText).length==11)
				{ 
					$('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>Wrong Email Address</div></span>");  
				}
				else if((http.responseText).length==8)
				{ 
					$('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>Wrong Password</div></span>");  
				}
				console.log(http.responseText.length);
				console.log(http.responseText);
	    	}
		}
		http.send(params);	
	}
	else
	{
		if(user_email=="") { $('#messageuser_email').text("please enter your user email"); }
		else  { $('#messageuser_email').text(""); }
		if(user_password=="") {  $('#messageuser_password').text("please enter your user password"); }
		else  { $('#messageuser_password').text(""); }
	}

 } 

function msg(response)
{
	//$('#message').html("");
	console.log(response.length+"---"+response);  
    $("#messagemodal").modal("show");
    if((response).length==311)
    { 
        $('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>syntax error in query expression</div>");  
    }
    else if((response).length==22)
    { 
        $('#message').html("<div class='alert alert-success' style='padding: 4px; text-align: center;'>Data Save Successfully</div>"); 
    }
    else if((response).length==26)
    { 
        $('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>Data Not Save Successfully</div>");  
    }
    else if((response).length==25)
    { 
        $('#message').html("<div class='alert alert-success' style='padding: 4px; text-align: center;'>Data Update Successfully</div>");  
    }
    else if((response).length==29)
    { 
        $('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>Data Not Update Successfully</div>");  
    }
    else if((response).length==8)
    { 
        $('#message').html("<div class='alert alert-danger' style='padding: 4px; text-align: center;'>Wrong Password</div>");  
    }  
    setInterval(function(){ $('#message').html("");  location.reload(); }, 2000); 
}
++++