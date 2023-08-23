const postTitle = document.getElementById("titleInput");
const postBody = document.getElementById("bodyInput");
const formButton = document.getElementById("formSubmit");

const handleFormSub = async (e) => {
  e.preventDefault();
  console.log(postTitle.value + " " + postBody.value);
  let postData = {
    title: postTitle.value,
    body: postBody.value,
  };
  //ToDo: add a post to sql database with new post! and then redirect to the dashboard
  const postHeader = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  };
  try {
    const response = await fetch("/create/post", postHeader);
 

    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

formButton.addEventListener("click", handleFormSub);
