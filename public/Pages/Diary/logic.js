class DiaryPost  {
    




    constructor(posts){
        let today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes();
        let dateTime = date+' , '+time;
        this.posts = Array.from(posts)
        this.id = 1
    }

  

   

       getPosts()
       {
           return this.posts
       }
       addPost(text) {
      let  id = "p" +  this.id
      this.id +=1 
        const post = {
            date: this.dateTime,
            text:  text,
            id: id,
        }
        console.log(this.posts);
        
        this.posts.push(post)
    }

     removePost(postID){
        for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == postID) {
                this.posts.splice(i, 1)
                break
            }
        }
    }
}



