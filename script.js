async function addProducts() {
    const productName = document.getElementById('name');
    const productYear = document.getElementById('year');
    const productCountry = document.getElementById('country');
    const message = document.getElementById('message');
    const category = document.getElementById("pro-category");

    try {
        let response;
        if(category.value == "drinks") {

            response = await fetch('http://localhost:3002/addDrinkProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName.value,
                    year: parseInt(productYear.value),
                    country: productCountry.value,
                }),
            });
        }

        if(category.value == "dairy") {

            response = await fetch('http://localhost:3002/addDairyProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName.value,
                    year: parseInt(productYear.value),
                    country: productCountry.value,
                }),
            })
        }
            
        if(response.ok) {
            console.log("Product is added successfully!");
            message.textContent = "The item " + `"${productName.value}"` + " is added successfully!";
            productName.value =  productYear.value = productCountry.value = "";
        } else {
            const errorText = await response.text();
            message.textContent = "The item failed to add!";
            message.style.color = "red";
            console.error("Failed to add product:", errorText);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred: " + error.message);
    }
}
