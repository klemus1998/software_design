function handleSubmit() {
    const address = document.getElementById('address').value;

    localStorage.setItem("ADDRESS", address);

    return;
}