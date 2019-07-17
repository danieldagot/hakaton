

let name = localStorage.getItem('Name')
function home() {
    $.get(`http://localhost:8080/getProfile/SapirHirak`, function (res) {
        let allData = res
        console.log(res)
        const sourse = $('#home-template').html()
        const template = Handlebars.compile(sourse)
        const newHtml = template(res)

        $(".homeContainer2").append(newHtml)
    })

}
home()
