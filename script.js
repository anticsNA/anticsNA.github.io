document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("second-page-trans");
    
    overlay.addEventListener("click", function() {
      // Trigger the open state: doors slide out and background becomes white.
      overlay.classList.add("open");
      
      // After the transition completes, navigate to the second page.
      setTimeout(function() {
        window.location.href = "second-page.html";
      }, 1100); // Adjust timing to match the CSS transition duration if needed.
    });
  });