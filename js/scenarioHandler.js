// Function to calculate adjusted hourly norm based on scenario
function calculateAdjustedNorm(baseNorm, scenario) {
    let adjustedNorm = baseNorm;

    switch (scenario) {
        case "3 on 2": // Standard scenario
            // No adjustment
            break;

        case "2 on 2":
            adjustedNorm = baseNorm / 1.33;
            break;

        case "2 on 1":
            adjustedNorm = baseNorm / 2;
            break;

        case "1 on 1":
            adjustedNorm = baseNorm / 2 / 1.33;
            break;

        default:
            console.warn("Invalid scenario selected. Using base norm.");
            break;
    }

    return adjustedNorm;
}
