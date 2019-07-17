const DiaryPos = DiaryPost()
let renderer = new Renderer()

renderer.renderPosts(DiaryPos.getPosts())

$('#post').on('click', function(){
    DiaryPos.addPost($("#input").val())
    renderer.renderPosts(DiaryPos.getPosts())
    
})


$('body').on('click', '.delete', function(){
    let id = $(this).parent().data().id
    DiaryPos.removePost(id)
    renderer.renderPosts(DiaryPos.getPosts())
})



