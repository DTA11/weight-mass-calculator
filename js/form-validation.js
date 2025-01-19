document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById('mass-error').textContent = '';
  document.getElementById('norm-error').textContent = '';
  
  let valid = true;

  // Validate Unit Mass
  const mass = document.getElementById('mass').value;
  if (!mass || isNaN(mass) || mass <= 0) {
    document.getElementById('mass-error').textContent = 'Please enter a valid mass.';
    valid = false;
  }

  // Validate Hourly Norm
  const norm = document.getElementById('norm').value;
  if (!norm || isNaN(norm) || norm <= 0) {
    document.getElementById('norm-error').textContent = 'Please enter a valid hourly norm.';
    valid = false;
  }

  if (valid) {
    // Proceed with form submission or further logic
    alert('Form submitted successfully!');
  }
});
