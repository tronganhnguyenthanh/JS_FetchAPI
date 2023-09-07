let postAPI = "https://jsonplaceholder.typicode.com/posts"
async function getPostList(){
  document.querySelector(".post").innerHTML = "<img src='./assets/images/loading.gif' class='w-100'/>"
  try {
    let response = await fetch(postAPI)
    let posts = await response.json()
    let output = "<div class='row'>"
     posts?.map(i => {
      return(
       output += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="result">
          <p>${i?.title}</p>
          <button class="btn btn-primary" onclick="seeDetails()">See details</button>
        </div>
        `  
       )
     })
    output += "</div>"
    document.querySelector(".post").innerHTML = output  
  }catch(error){
    if(error?.message){
     document.querySelector(".post").innerHTML = "<img src='./assets/images/400_error.jpg' class='w-100'/>"
    }
 }
}
getPostList()

async function seeDetails(){
   try{
    let response = await fetch(`${postAPI}/${detail}`)
    let detail = await response.json()
    detail?.forEach(i => {
     console.log("i", i?.id) 
    })
   }catch(error){
     if(error?.message){
      document.querySelector(".post").innerHTML = "<img src='./assets/images/400_error.jpg' class='w-100'/>"
     }   
   }
}
