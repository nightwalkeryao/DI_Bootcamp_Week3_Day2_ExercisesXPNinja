// Exercise 1 : Calculate the tip

// First Part :

// 2. Create a function called calculateTip() that takes no parameter.
function calculateTip() {
    // 2.1 Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.
    let billAmount = Number(document.getElementById('billamt').value.trim())
    // 2.2 Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
    let serviceQuality = Number(document.getElementById('serviceQual').value.trim())
    // 2.3 Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table. 
    let numberOfPeople = Number(document.getElementById('peopleamt').value.trim())
    // 2.4 Create a condition
    if (serviceQuality == 0 || !billAmount.toString().length)
        alert('Please fill in the bill amount and the service quality')
    // 2.5 Create another condition after the first one : 
    if (!numberOfPeople.toString().length || numberOfPeople < 1) {
        numberOfPeople = 1
        document.getElementById('peopleamt').value = '1'
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'initial'
    }
    // 2.6 Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)
    let total = (billAmount * serviceQuality) / numberOfPeople
    // 2.7 Use the toFixed method to round total to two decimal points.
    total = total.toFixed(2)
    // 2.8 Add the CSS property “display:block” to the tag which id is totalTip.
    document.getElementById('totalTip').style.display = 'block'
    document.getElementById('tip').textContent = total
}

// Second Part:

// 1. To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
document.getElementById('totalTip').style.display = 'none';
// 2. Call the function calculateTip() when the tag which id is calculate is clicked.
document.getElementById('calculate').onclick = calculateTip