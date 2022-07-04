document.getElementById("btnGetExample").addEventListener("click", () => {
  getExample()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

// async --> returns a promise
async function getExample() {
  const apiUrl = document.getElementById("inputApiUrl").value;
  try {
    // fetch GET request
    const response = await fetch(apiUrl); // GET method is default

    // check if fetch was successful
    if (!response.ok) {
      throw new Error("Fetch request not successful");
    }

    const data = await response.json(); // get body

    // return data
    return data;
  } catch (err) {
    // log and handle error
    // rethrow error to caller
    throw err;
  }
}
