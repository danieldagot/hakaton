
let renderer = new Renderer()

let name = localStorage.getItem('Name')

let DiaryPos = ""

function lode()
{
    
    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        let posts = JSON.parse(res.posts)
         DiaryPos = new DiaryPost(posts)
       
        console.log(posts);
        console.log(res);
        console.log(JSON.parse(res.posts) );
        renderer.renderPosts(posts)
    })
   

}

lode()

$('#post').on('click', function () {
    DiaryPos.addPost($("#input").val())
    DiaryPos2 = new DiaryPost(DiaryPos.getPosts())
    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        console.log(JSON.parse(res.posts) );
        
        let post =  JSON.stringify(DiaryPos2.getPosts() )
        res.posts =  post
        $.ajax({
            url: `http://localhost:8080/updateProfile/${name}`,
            method: "PUT",
            data:  res,
            success: function (response) {
                console.log("PUT complete")
            }
    
        
        })
    })


    renderer.renderPosts(DiaryPos.getPosts())

})


$('body').on('click', '.delete', function () {
    let id = $(this).parent().data().id
    DiaryPos.removePost(id)
    renderer.renderPosts(DiaryPos.getPosts())

    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        console.log(JSON.parse(res.posts) );
        
        let post =  JSON.stringify(DiaryPos.getPosts() )
        res.posts =  post
        $.ajax({
            url: `http://localhost:8080/updateProfile/${name}`,
            method: "PUT",
            data:  res,
            success: function (response) {
                console.log("PUT complete")
            }
    
        
        })
    })

})



