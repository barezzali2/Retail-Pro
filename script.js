
async function addProducts() {
    const productName = document.getElementById('name').value;
    const productYear = document.getElementById('year').value;
    const productCountry = document.getElementById('country').value;
    const submitBtn = document.getElementById('submit').value;

    const request = await fetch('http://localhost:3002/addProduct' , {

    })
}