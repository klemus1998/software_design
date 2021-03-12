window.addEventListener('load', () =>
{
    d_address.value=localStorage.getItem('ADDRESS');
})

function handleSubmitHistory() {
    const gallons = document.getElementById('gallons').value;
    const deliverydate = document.getElementById('deliverydate').value;
    const price_gallon = document.getElementById('price/gallon').value;
    const result = document.getElementById('result').value;

    localStorage.setItem("GALLONS", gallons);
    localStorage.setItem("DELIVERYDATE", deliverydate);
    localStorage.setItem("PRICE/GALLON", price_gallon);
    localStorage.setItem("RESULT", result);

    return;
}