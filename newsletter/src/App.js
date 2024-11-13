
import './App.css';

function App() {
  return (
    function validateForm(event) {
      event.preventDefault();
      
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const successMessage = document.getElementById('successMessage');
      
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple email regex
      
      emailError.style.display = 'none';
      successMessage.style.display = 'none';
      
      if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
      } else {
        successMessage.textContent = "Thank you for subscribing!";
        successMessage.style.display = 'block';
        
        // Optionally, clear the form after submission
        emailInput.value = '';
      }
    }
    
  );
}

export default App;
