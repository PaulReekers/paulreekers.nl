import "../css/style.css"; // relative path to the CSS file

document.querySelectorAll(".project, .website").forEach(function (item) {
  item.addEventListener("click", function () {
    const link = this.querySelector("a");
    // If an anchor tag is found, proceed based on the class of the element
    if (link) {
      if (this.classList.contains("project")) {
        window.location.href = link.getAttribute("href");
      } else if (this.classList.contains("website")) {
        window.open(link.getAttribute("href"), "_blank");
      }
    }
  });
});

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    // Select the input fields
    const email = document.getElementById("email");
    const textarea = document.getElementById("textarea");

    // Check if the email or textarea is empty
    if (email.value === "" || textarea.value === "") {
      // If email is empty, show alert in email field
      if (email.value === "") {
        email.setCustomValidity("Please fill in this field.");
        email.reportValidity();
      } else {
        email.setCustomValidity(""); // Clear custom message if not applicable
      }

      // If textarea is empty, show alert in textarea field
      if (textarea.value === "") {
        textarea.setCustomValidity("Please fill in this field.");
        textarea.reportValidity();
      } else {
        textarea.setCustomValidity(""); // Clear custom message if not applicable
      }

      event.preventDefault(); // Prevent form submission
    } else {
      // Clear any existing custom validity messages
      email.setCustomValidity("");
      textarea.setCustomValidity("");
    }
  });
