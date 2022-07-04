document.getElementById("btnPutExample").addEventListener("click", () => {
  putExample()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

async function putExample() {
  const apiUrl = document.getElementById("inputApiUrl").value; // normally the service knows the api url
  const dragonId = document.getElementById("inputPutId").value;

  // TODO: normally we would fetch input from HTML,....
  const updatedDragon = {
    name: "Updated Dragon",
    breath: "ice",
    wingspan: 12,
  };

  const response = await fetch(`${apiUrl}/${dragonId}`, {
    // request options
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedDragon),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("PUT not successful, try again.");
  }

  // PUT may not return the element in the body, at least in crudcrud.com.
}
