const createBtn = document.getElementById("create-post");
const feed = document.getElementById("userFeed");

const handleCreateBtn = () => {
  console.log("clicking");
  window.location.href = "/create";
};

//todo: edit and delete button for each
const handleDeleteBtn = async (e) => {
  if (e.target.className == "deleteBtn") {
    let data = e.target.getAttribute("data");
    console.log(data);
    try {
      const postData = await fetch("/dashboardRoutes/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data }),
      });
    } catch (error) {
      console.log(error);
    }
  }
};

createBtn.addEventListener("click", handleCreateBtn);
feed.addEventListener("click", handleDeleteBtn);
