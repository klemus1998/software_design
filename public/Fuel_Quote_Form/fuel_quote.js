function handleSubmitHistory() {
    var gallons = document.getElementById("gallons_id").value;
    var deliverydate = document.getElementById('test').value;

    if (typeof Number(gallons) == 'number') {
        localStorage.setItem('gallons_id', gallons);
    }
    
    localStorage.setItem("test", deliverydate);
    localStorage.setItem("PRICE/GALLON", pricing_module());
    localStorage.setItem("total", calc_result());

    return;
}

window.addEventListener('load', () =>
{
    d_address.value = localStorage.getItem('ADDRESS');

    document.getElementById("d_address").innerHTML = d_address.value;
})

function pricing_module() {
    return 2.4;
}

function calc_result() {
    total = 50 * pricing_module();
    return total.toFixed(2);
}