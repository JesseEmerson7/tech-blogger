const createBtn = document.getElementById("create-post");

const handleCreateBtn = () => {
  console.log("clicking");
  window.location.href = "/create";
};

//todo: create a feed of all users blog posts and an edit and delete button for each. simple with title and date

createBtn.addEventListener("click", handleCreateBtn);
