document.getElementById("btnDeleteExample").addEventListener("click", () => {
  deleteExample()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

async function deleteExample() {
  const apiUrl = document.getElementById("inputApiUrl").value; // normally the service knows the api url
  const dragonId = document.getElementById("inputDeleteId").value;

  // perform fetch DELETE request
  const response = await fetch(`${apiUrl}/${dragonId}`, {
    // request options
    method: "DELETE",
  });

  console.log(response);
}
