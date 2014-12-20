
function validateWithCourse_01()
{
	var frmObj = document.campaigns_01;		

	if(isBlank($('#name_01').val()) || $('#name_01').val() == 'Name*')
	{
		alert('Please Enter Your Name');
	
		frmObj.name_01.focus();		
		return false;
	}
	else
	{
		if(charsOnlyWithSpaces(frmObj.name_01.value)==false)
		{
			alert("Name contain characters only.");
			frmObj.name_01.focus();
			//frmObj.name.select();
			return false;
		}
	}
		
	if(validEmail($('#email_01').val()) == false  || $('#email_01').val() == 'Email')
	{
			alert('Please Enter Your Email ID');			
			frmObj.email_01.focus();
			//frmObj.email.select();
			return false;
	}
		
		
		
	
	if(isBlank(frmObj.cell_no.value)|| $('#cell_no').val() == 'Mobile*')
	{
			alert('Please enter your Cell Number');

			frmObj.cell_no.focus();
			return false;
	}
	else
	{
		if(numbersOnly(frmObj.cell_no.value)==false)
		{

			alert('Cell number contain digits only');			
			frmObj.cell_no.focus();
			//frmObj.mobile.select();
			return false;
		}

		if(frmObj.cell_no.value.length <10)
		{			
			alert('Please enter 10 digit cell number');	

			frmObj.cell_no.focus();
			//frmObj.mobile.select();
			return false;
		}

        if(frmObj.cell_no.value.length >10)
		{

			alert('Cell number cannot be more than 10 digit');	
			frmObj.cell_no.focus();
			//frmObj.phone.select();
			return false;
		}
		
	}
	
	
	
	if(isBlank($('#city').val()) || $('#city').val() == 'City*')
	{
		alert('Please Enter Your City Name');
	
		frmObj.city.focus();		
		return false;
	}
	else
	{
		if(charsOnlyWithSpaces(frmObj.city.value)==false)
		{
			alert("City Name contain characters only.");
			frmObj.city.focus();
			//frmObj.name.select();
			return false;
		}
	}
	
	
	
		if(isBlank($('#selectfield1').val()) || $('#selectfield1').val() == '-1')
	{
		alert('Please select your Course');
	
		frmObj.selectfield1.focus();		
		return false;
	}
		
	
	
	
		

	$('#errorMessage').hide('fast');
}
