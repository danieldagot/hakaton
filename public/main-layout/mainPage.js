//For the colomn bar:
let a = 0


$('.logo').click(function () {
    if (a === 0) {
        a = 1
        $('.allGrid').addClass('activeted')
        $('#frames').addClass('activeFrame')
    }
    else {
        a = 0
        $('.allGrid').removeClass('activeted')
        $('#frames').removeClass('activeFrame')

    }
})

//for the Navbar:

// $(".dropdown-trigger").click(function () {
//     $(this).dropdown()
// })

function name(){

    let a =  $('.dropdown-trigger').text( localStorage.getItem('Name'))
     $('.dropdown-trigger').append(a)
 
  }
 name()

$(document).ready(function(){
   console.log("a")
    $('.dropdown-trigger').dropdown();
    
 });

 
//for the iFrame
if(localStorage.getItem('LogData') == null){
window.location.replace("http://localhost:8080/form/form.html");
}
document.getElementById("frames").src =localStorage.getItem('page')



class page{

    get(){
     return document.getElementById("frames").contentWindow.location.href
    }
}

