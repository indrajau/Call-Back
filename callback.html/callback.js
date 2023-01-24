const posts=[
    {title:'Post one', body:'This is post one',},
    {title:'Post Two', body:'This is post Two'}
];
function getposts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post,callback){
setTimeout(()=>{
    posts.push(post);
    callback();
},1000);
}

createPost({title:'this three',body:'this is three post'},getposts);

