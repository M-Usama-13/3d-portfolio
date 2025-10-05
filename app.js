document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("actions").classList.toggle("show");
});


// Contact form with EmailJS
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("u9aFFu02xZEvzSEMG");  // keep your public key

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_bwbra7c", "template_ir8fznf", this)
      .then(() => {
        // Show success message
        document.getElementById("successMessage").style.display = "block";
        this.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
        }, 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  });
});
