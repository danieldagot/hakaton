$.get(`http://localhost:5678/teams/${teamName}`, function (data) { //Api for SEarch food

const sourse = $('#food-template').html()
const template = Handlebars.compile(sourse)
const newHtml = template({foodData})

$(".food container").append(newHtml)

})
