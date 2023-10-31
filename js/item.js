document.addEventListener("DOMContentLoaded", function () {
    // Stored the item values
    const itemPrices = {
        Vyndaqet: 80,
        Meltformin: 50,
        Crocin: 45,
        Losagen: 50,
        Angilock: 30,
        Hyperten: 40,
        Amlovs: 55,
        Valsartan: 35
    };

    // Initialize the total amount
    let totalAmount = 0;

    // Function to add an item
    function addItem() {
        const itemName = document.getElementById('itemName').value;
        const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

        // Check if the item exists in the itemPrices object
        if (itemPrices[itemName] !== undefined) {
            const itemValue = itemPrices[itemName] * itemQuantity;
            totalAmount += itemValue;

            // Create a list item to display the added item
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} x ${itemQuantity} = ${itemValue}`;

            // Add the list item to the list
            document.getElementById('itemList').appendChild(listItem);

            // Update the total amount
            document.getElementById('totalAmount').textContent = totalAmount;

            // Clear the input fields
            document.getElementById('itemName').value = '';
            document.getElementById('itemQuantity').value = '';
        } else {
            alert('Item not found in the price list.');
        }
    }

    // Add a click event listener to the "Add Item" button
    document.getElementById('addItem').addEventListener('click', addItem);
});
