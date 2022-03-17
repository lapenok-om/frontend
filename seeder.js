const path = "https://jsonplaceholder.typicode.com/posts"; 
const element = document.querySelector(".container"); 

fetch(path).then(result => result.json()).then(data => {
    return data.map(post => {
        let div = document.createElement('div');
        div.innerHTML = `<hr><h3>${post.title}</h3><p>${post.body}</p>`;
        element.append(div);
      });
    }).catch((err) => element.append("something went wrong: " + err.message));