/* =====================================================
   FABCUBE ENGINEERING
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   GET A QUOTE FORM - WHATSAPP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const quoteForm = document.getElementById("quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Get form values
            const name = quoteForm.querySelector('input[name="name"]').value.trim();
            const company = quoteForm.querySelector('input[name="company"]').value.trim();
            const email = quoteForm.querySelector('input[name="email"]').value.trim();
            const phone = quoteForm.querySelector('input[name="phone"]').value.trim();
            const service = quoteForm.querySelector('select[name="service"]').value;
            const message = quoteForm.querySelector('textarea[name="message"]').value.trim();

            // WhatsApp number
            const whatsappNumber = "919970676801";

            // Create WhatsApp message
            const whatsappMessage =
                "Hello FabCube Engineering,\n\n" +
                "NEW ENQUIRY\n\n" +
                "Name: " + name + "\n" +
                "Company: " + (company || "Not provided") + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n" +
                "Service Required: " + service + "\n\n" +
                "Project Requirement:\n" +
                message;

            // Create WhatsApp URL
            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            // Open WhatsApp
            window.open(whatsappURL, "_blank");

            quoteForm.reset();
        });

    }


    /* =====================================================
       NAVBAR ACTIVE PAGE
    ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   SCROLL ANIMATION
===================================================== */

const scrollElements = document.querySelectorAll(
    ".scroll-slide, .scroll-slide-left, .scroll-slide-right"
);

const scrollObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                scrollObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

scrollElements.forEach(function (element) {
    scrollObserver.observe(element);
});


/* =====================================================
   INDUSTRIES CARD STAGGER ANIMATION
===================================================== */

const industryCards = document.querySelectorAll(".industry-card-animate");

const industryObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                industryObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

industryCards.forEach(function (card) {
    industryObserver.observe(card);
});


/* =====================================================
   GALLERY SCROLL ANIMATION
===================================================== */

const galleryItems = document.querySelectorAll(".gallery-item-animate");

const galleryObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                galleryObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

galleryItems.forEach(function (item) {
    galleryObserver.observe(item);
});
