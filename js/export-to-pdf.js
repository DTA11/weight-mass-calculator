function exportToPDF() {
    console.log("Export button clicked!");

    // Create a new container for the export
    const exportContainer = document.createElement("div");

    // Select all table containers (e.g., K2-3, K4-5, etc.)
    const tableContainers = document.querySelectorAll(".table-container");

    // Loop through each table container and add its header, sum, and table to the export container
    tableContainers.forEach(container => {
        // Get the kalander name (e.g., K2-3, K4-5, etc.)
        const kalanderName = container.querySelector("h3").innerText;

        // Get the sum of hours of norm
        const sumHours = container.querySelector("span[id^='sum-']").innerText;

        // Get the table element inside this container
        const tableElement = container.querySelector("table");

        // Add the kalander name and sum of hours of norm
        exportContainer.innerHTML += `<h3>${kalanderName}</h3>`;  // Kalander name
        exportContainer.innerHTML += `<p>h:${sumHours}</p>`;  // Sum of hours of norm

        // Clone the table to avoid modifying the original
        exportContainer.appendChild(tableElement.cloneNode(true));
    });

    // Set options for html2pdf
    const opt = {
        margin: 10,
        filename: 'exported-tables.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate and download the PDF
    html2pdf().from(exportContainer).set(opt).save();
}
