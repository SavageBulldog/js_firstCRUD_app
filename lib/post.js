document.getElementById("btnPostExample").addEventListener("click", () => {
  postExample()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

async function postExample() {
  const apiUrl = document.getElementById("inputApiUrl").value;

  // TODO: get values from html elements....
  const newDragon = {
    name: "First Dragon",
    breath: "fire",
    wingspan: 6,
  };

  // console.log(newUnicorn);
  // console.log(JSON.stringify(newUnicorn));

  // POST fetch request
  const response = await fetch(apiUrl, {
    // request options
    method: "POST", // define method we want to use
    headers: {
      "Content-Type": "application/json", // important!!!
    },
    body: JSON.stringify(newDragon), // transfer data as string, therefore transform with stringify
  });

  //console.log(response);

  const data = response.json();

  return data;
}
