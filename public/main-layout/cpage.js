function pages(){
let page2 = new page()
 return page2.get()
}

setInterval(function(){
let page =  pages()
localStorage.setItem('page',`${page}`)

},500)