$("#contactForm").submit(function(event){

    event.preventDefault();
    submitForm();
    console.log('Привет от JavaScript!');
});
function submitForm(){
   
    var name = $("#name").val();
    var phone = $("#phone").val();
 
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: "name=" + name + "&phone=" + phone,
        success : function(text){
            if (text == "success"){
              
            }
        }
    });
}
