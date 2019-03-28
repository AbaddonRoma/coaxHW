/**
 * FIRST
 */

let user = function() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
            return res.json();
        })
        .then(res => {
            console.log('USER: ', res);

             // Get posts by id 1
             fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
             .then(res=>{
                 return res.json();
             })
             .then(res => {
                 console.log('POSTS: ', res);
                 res.forEach(post => {
                    
                    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                        .then(res=>{
                            return res.json();
                        })
                        .then(res => {
                            console.log('COMMENTS FOR POST ' + post.id, res);
                        })
                 });
             })
            // Get comments by id 1
            
        })
}

// user();


/**
 * FIRST
 */

const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/posts?userId=1',
]
const commetUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

function gerUserNCommentsNPosts() {
    Promise.all(urls.map((url) => 
        fetch(url)
        .then(res=> {
            return res.json();
        })
    )).then(data => {
        console.log(data);
        data[1].forEach(post => {
            fetch(commetUrl + post.id)
                .then(data => {
                    return data.json();
                })
                .then(comment => {
                    console.log(comment);
                })
        })
        
    })
};

gerUserNCommentsNPosts();

var user3 = function() {
    return fetch('https://jsonplaceholder.typicode.com/users/1');
}

var posts3 = function() {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
}
var comments3 = function(id) {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId='+ id);
}

async function getData() {
    var urlUser = await user3()
    var jsonUser = await urlUser.json();
    console.log(jsonUser);

    var urlPosts3 = await posts3()
    var jsonPosts3 = await urlPosts3.json();
    console.log(jsonPosts3);

    for(let post of jsonPosts3) {
        var urlComments3, jsonComments3;

        var urlComments3 = await comments3(post.id)
        var jsonComments3 = await urlComments3.json();
        console.log(jsonComments3);
    }
}

// getData();





