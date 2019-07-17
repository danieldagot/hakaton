class Renderer {
     renderPosts (posts) {
        $('#posts').empty()
        const source = $('#post-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({posts});
        $('#posts').append(newHTML);
        }
}