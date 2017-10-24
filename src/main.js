fetch('http://www.json-generator.com/api/json/get/bTWXabCtqq?indent=2')
  .then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)
  });
