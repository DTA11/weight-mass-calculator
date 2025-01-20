// Track sum of hours for each kalander pair
let sumK2_3 = 0;
let sumK4_5 = 0;
let sumK6_7 = 0;
let sumK9_10 = 0;

function calculateWeight() {
    const massName = document.getElementById('massName').value;
    const kalander = document.getElementById('kalanderPair').value;
    const thickness = parseFloat(document.getElementById('thickness').value);
    const numPieces = parseInt(document.getElementById('numPieces').value);

    if (isNaN(thickness) || isNaN(numPieces) || thickness <= 0 || numPieces <= 0) {
        alert("Please enter valid thickness and quantity.");
        return;
    }

    // Check if the mass name exists in the norms
    if (!hourlyNorms[massName]) {
        alert(`No norms defined for mass name: ${massName}`);
        return;
    }

    // Check if the kalander pair exists for the selected mass name
    if (!hourlyNorms[massName][kalander]) {
        alert(`No norms defined for kalander pair: ${kalander}`);
        return;
    }

    // Get the norm for the selected thickness
    const norm = hourlyNorms[massName][kalander][thickness];
    if (!norm) {
        alert(`No norm defined for thickness ${thickness}`);
        return;
    }

    const hoursOfNorm = (numPieces / norm).toFixed(2);

    // Define multipliers for kalander pairs
    let multiplier;
    if (kalander === "K2-3" || kalander === "K4-5") {
        multiplier = 9.0; // Replace with the correct value for Pair A (e.g., K2-3, K4-5)
    } else if (kalander === "K6-7" || kalander === "K9-10") {
        multiplier = 13.3; // Replace with the correct value for Pair C (e.g., K6-7, K9-10)
    } else {
        alert("Invalid kalander pair selected.");
        return;
    }

    // Calculate weight based on the selected kalander pair
    const weight = (thickness * numPieces * multiplier).toFixed(2);

    // Retrieve the unit mass
    const unitMass = unitMasses[massName];
    if (!unitMass) {
        alert(`No unit mass defined for mass name: ${massName}`);
        return;
    }

    // Calculate required number of mass units
    const massUnits = (weight / unitMass).toFixed(2);

    // Populate tables
    const tableId = `table-${kalander}`;
    const targetTable = document.getElementById(tableId).querySelector('tbody');

    // Generate a new result row
    const resultRow = document.createElement("tr");
    
    resultRow.innerHTML = `
    <td>${massName}</td>
    <td>${kalander}</td>
    <td>${thickness}</td>
    <td>${numPieces}</td>
    <td>${weight}</td>
    <td>${massUnits}</td>
    <td>${hoursOfNorm}</td>
    <td><button class="delete-btn"><i class="fa-solid fa-x"></i></button></td>
`;

    // Add delete functionality to the button
    resultRow.querySelector('.delete-btn').addEventListener('click', function() {
        resultRow.remove();  // Remove the row when the button is clicked
        updateSum(kalander, hoursOfNorm, -1);  // Update sum when row is deleted
    });

    // Append the new row to the table
    targetTable.appendChild(resultRow);
    
    // Clear the inputs after calculation
    document.getElementById("thickness").value = "";
    document.getElementById("numPieces").value = "";

    // Update the sum of hours of norm for the selected kalander pair
    if (hoursOfNorm !== "Norm not defined.") {
        const hours = parseFloat(hoursOfNorm);
        updateSum(kalander, hoursOfNorm, 1);  // Update sum when a row is added
    }
}

// Function to update the sum based on the kalander pair
function updateSum(kalander, hoursOfNorm, action) {
    if (hoursOfNorm !== "Norm not defined.") {
        const hours = parseFloat(hoursOfNorm);
        if (kalander === "K2-3") {
            sumK2_3 += (action * hours);
            document.getElementById("sum-K2-3").textContent = sumK2_3.toFixed(2);
        } else if (kalander === "K4-5") {
            sumK4_5 += (action * hours);
            document.getElementById("sum-K4-5").textContent = sumK4_5.toFixed(2);
        } else if (kalander === "K6-7") {
            sumK6_7 += (action * hours);
            document.getElementById("sum-K6-7").textContent = sumK6_7.toFixed(2);
        } else if (kalander === "K9-10") {
            sumK9_10 += (action * hours);
            document.getElementById("sum-K9-10").textContent = sumK9_10.toFixed(2);
        }
    }
}
