window.addEventListener('load', () =>
{
    d_address.value = localStorage.getItem('ADDRESS');
    d_address1.value = localStorage.getItem('ADDRESS');

    document.getElementById("d_address").innerHTML = d_address.value;
    document.getElementById("d_address1").innerHTML = d_address.value;

    document.getElementById("gallons_id").innerHTML = localStorage.getItem('gallons_id');
    document.getElementById("test").innerHTML = localStorage.getItem('test');
    document.getElementById("price_p_gallon").innerHTML = localStorage.getItem('PRICE/GALLON');
    document.getElementById("total_due").innerHTML = localStorage.getItem('total');
})