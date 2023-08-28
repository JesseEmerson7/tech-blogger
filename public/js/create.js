const postTitle = document.getElementById("titleInput");
const postBody = document.getElementById("bodyInput");
const formButton = document.getElementById("formSubmit");
const formDiv = document.getElementById("formDiv");

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

    console.log(response);
    if (response.status === 200) {
      //creating alert pop up and appending it to the bottom of the form
      //once pop up is there for 1 sec the window will redirect to home
      const formAlert = document.createElement("h2");
      formAlert.classList.add("gAlert");
      formAlert.innerHTML = "successfully posted!";
      formDiv.append(formAlert);
      postTitle.value = "";
      postBody.value = "";
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

formButton.addEventListener("click", handleFormSub);
