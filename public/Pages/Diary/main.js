const DiaryPos = DiaryPost()
let renderer = new Renderer()

let name = localStorage.getItem('Name')

function lode()
{
    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        console.log(res.posts);
        
        let posts = JSON.parse(res.posts)
        console.log(posts);
        console.log(res);
        console.log(JSON.parse(res.posts) );
        renderer.renderPosts(posts)
    })
   

}

lode()

$('#post').on('click', function () {
    DiaryPos.addPost($("#input").val())


    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
        console.log(JSON.parse(res.posts) );
        
        console.log(typeof res.posts);
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


    renderer.renderPosts(DiaryPos.getPosts())

})


$('body').on('click', '.delete', function () {
    let id = $(this).parent().data().id
    DiaryPos.removePost(id)
    renderer.renderPosts(DiaryPos.getPosts())
})



