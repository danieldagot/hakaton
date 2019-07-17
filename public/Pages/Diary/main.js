const DiaryPos = DiaryPost()
let renderer = new Renderer()

renderer.renderPosts(DiaryPos.getPosts())


$('#post').on('click', function () {
    DiaryPos.addPost($("#input").val())

    let name = localStorage.getItem('Name')

    $.getJSON(`http://localhost:8080/getProfile/${name}`, function (res) {
        console.log(res);
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



