// function apicall() {
//     let data = fetch("https://jsonplaceholder.typicode.com/users");
//     let sampleData = data.then((item) => item.json());
//     sampleData.then((apiValue) => apiValue.forEach(function(c){
//         console.log(c);
//         document.getElementsByClassName("container")[0].innerHTML += `<div class="box">
//         <h1> ${c.name} </h1>
//         </div>`
//     }))
// };

// apicall();

function apicall() {
  fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20"
  )
    .then((item) => item.json())
    .then((value) =>
      value.forEach(function (ele) {
        console.log(ele);
        document.getElementsByClassName("container")[0].innerHTML += `
        <div class="card">
<img src="${ele.url}" alt="cat image" height="250" width="250px"/>
</div>
`;
      })
    );
}
function refersh(){
    window,location.reload("refersh")
}

apicall();
