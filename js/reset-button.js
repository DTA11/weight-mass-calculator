document.getElementById('resetBtn').addEventListener('click', resetForm);

function resetForm() {
    // Reset all inputs to default values (empty or specific default values)
    document.getElementById('kalanderPair').value = '';  // or default value
    document.getElementById('massName').value = '';      // or default value
    document.getElementById('podlaga').value = '';       // or default value
    document.getElementById('thickness').value = '';     // or default value
    document.getElementById('numPieces').value = '';     // or default value

    // Reset sum values
    sumK2_3 = 0;
    sumK4_5 = 0;
    sumK6_7 = 0;
    sumK9_10 = 0;
    document.getElementById("sum-K2-3").textContent = '0.00';
    document.getElementById("sum-K4-5").textContent = '0.00';
    document.getElementById("sum-K6-7").textContent = '0.00';
    document.getElementById("sum-K9-10").textContent = '0.00';

    // Optionally, you could clear the tables as well if needed
    const tables = document.querySelectorAll('table tbody');
    tables.forEach(table => {
        table.innerHTML = '';
    });
}
