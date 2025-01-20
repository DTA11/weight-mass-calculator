document.addEventListener("DOMContentLoaded", () => {
    const massNameSelect = document.getElementById("massName");

    // Store the last selected value in localStorage or a variable
    let lastSelected = localStorage.getItem("lastSelectedMass");

    // Move the last selected option to the top if available
    if (lastSelected) {
        const options = Array.from(massNameSelect.options);
        const lastSelectedOption = options.find(option => option.value === lastSelected);

        if (lastSelectedOption) {
            massNameSelect.prepend(lastSelectedOption);  // Move it to the top
        }
    }

    // Listen for changes in selection and update the order
    massNameSelect.addEventListener("change", () => {
        const selectedValue = massNameSelect.value;

        // If a new mass is selected, move it to the top
        const selectedOption = massNameSelect.querySelector(`option[value="${selectedValue}"]`);
        if (selectedOption) {
            massNameSelect.prepend(selectedOption);  // Move it to the top
        }

        // Save the selected value to localStorage
        localStorage.setItem("lastSelectedMass", selectedValue);
    });
});
