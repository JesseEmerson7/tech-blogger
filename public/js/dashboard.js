const createBtn = document.getElementById("create-post");
const feed = document.getElementById("userFeed");

const handleCreateBtn = () => {
  console.log("clicking");
  window.location.href = "/create";
};

//delete post by id after delete button is clicked
const handleDeleteBtn = async (e) => {
  if (e.target.className == "deleteBtn") {
    //pop up confirm
    let shouldDelete = await confirmDelete();
    if (shouldDelete) {
      let data = e.target.getAttribute("data");
      console.log(data);
      try {
        const postData = await fetch("/dashboard/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: data }),
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }
};

//popup to confirm delete button
const confirmDelete = () => {
  const popUp = document.createElement("div");
  popUp.setAttribute("id", "deletePopUp");

  // Create a paragraph element for the text
  const popUpText = document.createElement("p");
  popUpText.textContent = "Are you sure you want to delete?";
  popUpText.classList.add("popUpText");

  // Create "Yes" buttons
  const popUpBtn1 = document.createElement("button");
  popUpBtn1.innerHTML = "Yes";
  popUpBtn1.classList.add("deleteConfirm");

  const popUpBtn2 = document.createElement("button");
  popUpBtn2.innerHTML = "No"; // Corrected "Yes" to "No"
  popUpBtn2.classList.add("deleteConfirm");

  popUpText.append(popUpBtn1, popUpBtn2);
  popUp.appendChild(popUpText);
  feed.prepend(popUp);
  //promise for click answer
  return new Promise((resolve, reject) => {
    popUpBtn1.addEventListener("click", () => {
      feed.removeChild(popUp);
      resolve(true);
    });
    popUpBtn2.addEventListener("click", () => {
      feed.removeChild(popUp);
      resolve(false);
    });
  });
};

createBtn.addEventListener("click", handleCreateBtn);
feed.addEventListener("click", handleDeleteBtn);
