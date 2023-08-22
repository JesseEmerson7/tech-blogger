const createBtn = document.getElementById("create-post");

const handleCreateBtn = () => {
  console.log("clicking");
  window.location.href = "/create";
};

createBtn.addEventListener("click", handleCreateBtn);
