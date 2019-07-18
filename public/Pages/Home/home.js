
let name = localStorage.getItem('Name')
function home() {
    $.get(`http://localhost:8080/getProfile/${name}`, function (res) {
        let allData = res
        console.log(res)
        const sourse = $('#home-template').html()
        const template = Handlebars.compile(sourse)
        const newHtml = template(res)
        $(".homeContainer2").append(newHtml)
    })

    
}
home()
function basicPopup(url) {
    popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
        }