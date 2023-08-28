
const createBtn = document.getElementById("create-post");

const handleCreateBtn = () => {
  console.log("clicking");
  window.location.href = "/create";
};

//todo: edit and delete button for each

createBtn.addEventListener("click", handleCreateBtn);
