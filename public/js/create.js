const postTitle = document.getElementById("titleInput");
const postBody = document.getElementById("bodyInput");
const formButton = document.getElementById("formSubmit")


const handleFormSub = (e) => {
    e.preventDefault();
    console.log(postTitle.value + " " + postBody.value );
    //ToDo: add a post to sql database with new post! and then redirect to the dashboard
}



formButton.addEventListener("click", handleFormSub);