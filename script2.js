fetch('https://59jl3jmpf9.execute-api.us-east-1.amazonaws.com/prod')
  .then(response => response.text())  // get response as text
  .then(data => {
    let visitorElement = document.getElementById('visitorCount');
    if (visitorElement) {
      visitorElement.textContent = data;  // data is a string
    }
  })
  .catch(error => console.error(error));
