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
        {
            date: "17-7-2019 , 16:43",
            text: "So today I started my journey! Bacon ipsum dolor amet dolore est tenderloin ut incididunt kevin eiusmod commodo. Ut short ribs jerky lorem officia qui doner pastrami nostrud. Pork belly short loin ball tip nisi sirloin. Prosciutto laborum cillum pastrami, rump ball tip pork belly sirloin adipisicing t-bone. Tri-tip sunt dolore capicola. Jerky deserunt voluptate shank laborum in laboris tempor andouille boudin officia ea ipsum. Boudin dolor flank prosciutto reprehenderit ex pariatur sausage rump, meatloaf quis picanha pastrami.",
            id: "p1",
        },

        {
            date: "17-7-2019 , 17:43",
            text: "Bacon ipsum dolor amet dolore est tenderloin ut incididunt kevin eiusmod commodo. Ut short ribs jerky lorem officia qui doner pastrami nostrud. Pork belly short loin ball tip nisi sirloin. Prosciutto laborum cillum pastrami, rump ball tip pork belly sirloin adipisicing t-bone. Tri-tip sunt dolore capicola. Jerky deserunt voluptate shank laborum in laboris tempor andouille boudin officia ea ipsum. Boudin dolor flank prosciutto reprehenderit ex pariatur sausage rump, meatloaf quis picanha pastrami.   Brisket magna anim ut bacon. Irure reprehenderit jerky, cow pig filet mignon id. Eu andouille elit ut, cow veniam leberkas biltong esse dolor labore tenderloin doner culpa. Magna strip steak officia sirloin. Officia ullamco beef ribs eu. Beef ribs tenderloin dolore occaecat pork consectetur consequat tempor capicola anim picanha brisket tail frankfurter mollit. Meatball bresaola alcatra andouille, sint ex pork mollit qui consectetur.",
            id: "p2",
        },
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



