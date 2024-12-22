function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewStr;
    if(views < 1000){
         viewStr = views;
    }else if(views > 1000000){
         viewStr = views / 1000000 + "M";
    }else{
         viewStr = views / 1000 + "k";
    }
   
    let html = `<div class="card">
          <div class="image">
            <img
              src="${thumbnail}"
              alt=""
            />
         <div class="capsule">${duration}</div>
          </div>
          <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
          </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Express Js|Sigma web dev video #2","Shubham karade","876000000000","2","21.34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");


createCard("Introduction to Express Js|Sigma web dev video #2","Aditya karade","7650000","5","36.34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");

createCard("Introduction to Express Js|Sigma web dev video #2","Deepak karade","78888888885","7","25.34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");

createCard("Introduction to Express Js|Sigma web dev video #2","Kartik karade","70000000005","4","10.34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");


createCard("Introduction to Express Js|Sigma web dev video #2","Krishna karade","50005","4","59.34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");