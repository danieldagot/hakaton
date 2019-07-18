let a = 0


$('.options').on('click', '.pick',  function(){ 
    if (a === 0) {
        a = 1
        $(this).addClass('pickChange')
    }
    else {
        a = 0
        $(this).removeClass('pickChange')

    }
})
