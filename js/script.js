// Connect with me custom submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("finalSubmitBtn").addEventListener("click", function () {
        // Get the value of the name input field
        var name = document.getElementById("name").value;

        // Update the value of the hidden input field for subject
        document.querySelector('input[name="subject"]').value = "New Portfolio Inquiry from " + name;

        // Validate the form
        var form = document.querySelector('form');
        if (form.checkValidity()) {
            // Form is valid, proceed with form submission
            form.submit();
        } else {
            // Form is not valid, display validation error messages
            form.reportValidity();
        }
    });
});

    
// Navbar Active Link the underline under options
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-link');
            }
        });
    });
});

// Skill card animation
function scrollToSkills() {
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });

    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 500 + index * 200); // Increased initial delay to 500ms
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const skillSection = document.getElementById('skills');
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 300 + index * 200); // Decreased initial delay to 300ms
                });
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(skillSection);
});

//Project Card Animation

function projectCardAnimation() {
    var cards = document.querySelectorAll(".project"); // Select all elements with the class "project"
    cards.forEach(function(card) { // Loop through each card element
        card.addEventListener("mouseover", function() {
            this.classList.add("hovered"); // 'this' refers to the card that the mouse is over
        });
        card.addEventListener("mouseout", function() {
            this.classList.remove("hovered"); // 'this' refers to the card that the mouse has left
        });
        /*card.addEventListener("click", function() {
            this.classList.add("hovered");// Add 'clicked' class on click
            setTimeout(function() {
                that.classList.remove("clicked"); // Remove 'clicked' class after 2 seconds (2000 milliseconds)
            }, 1000); // Adjust the timeout duration as needed
        });*/
    });
}
projectCardAnimation();

//document.querySelector(".navbar-toggler").addEventListener("click",function(){document.querySelector(".navbar-toggler").innerHTML='<span class="fa-duotone fa-x fa-beat" aria-label="Close"></span>'});
/*function burgerMenuAnimation() {
    document.querySelector(".navbar-toggler").addEventListener("click",function(){
        document.querySelector(".navbar-toggler").innerHTML='<span class="fa-duotone fa-x fa-beat" aria-label="Close"></span>'});
    document.querySelector(".navbar-toggler").addEventListener("click",function(){
        document.querySelector(".navbar-toggler").innerHTML='<span class="navbar-toggler-icon"></span>'});
}
*/

document.addEventListener('DOMContentLoaded', function () {
    const projectSection = document.getElementById('projects');
    const projectCards = document.querySelectorAll('.project');
    const navbarButtons = document.querySelectorAll('nav a'); // Adjust selector based on your navbar structure
  
    projectCards.forEach(card => {
      card.classList.add('hidden');
    });
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('hidden');
              card.classList.add('visible');
            }, 500 + index * 200);
          });
          observer.unobserve(projectSection); // Stop observing once animation is done
        }
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(projectSection);
  
    navbarButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection && targetId === 'projects') {
          event.preventDefault(); // Prevent default anchor behavior
          targetSection.scrollIntoView({ behavior: 'smooth' });
  
          // Trigger the animation if coming from navbar click
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('hidden');
              card.classList.add('visible');
            }, 500 + index * 200);
          });
        }
      });
    });
  });
  