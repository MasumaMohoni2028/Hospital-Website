document.addEventListener("DOMContentLoaded", function () {
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
    let totalAmount = 0;
    function addItem() {
        const itemName = document.getElementById('itemName').value;
        const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

       
        if (itemPrices[itemName] !== undefined) {
            const itemValue = itemPrices[itemName] * itemQuantity;
            totalAmount += itemValue;

            
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} x ${itemQuantity} = ${itemValue}`;//Literal used 
            document.getElementById('itemList').appendChild(listItem);

            document.getElementById('totalAmount').textContent = totalAmount;

            
            document.getElementById('itemName').value = '';
            document.getElementById('itemQuantity').value = '';
        } else {
            alert('Item not found in the price list.');
        }
    }
    document.getElementById('addItem').addEventListener('click', addItem);
});
