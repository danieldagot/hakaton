const DiaryPost = function () {
let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
let dateTime = date+' , '+time;

    const newID = function (arr) {
        if (arr.length) {
            const id = Number((arr[arr.length - 1].id[1]))
            return id + 1
        }
        else return 1
    }

    const posts = [
    
    ]

    const getPosts = () => posts

    const addPost = (text) => {
        id = "p" + newID(posts)
        const post = {
            date: dateTime,
            text: text,
            id: id,
        }
        posts.push(post)
    }

    const removePost = (postID) => {
        for (i = 0; i < posts.length; i++) {
            if (posts[i].id == postID) {
                posts.splice(i, 1)
                break
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
    }
}



