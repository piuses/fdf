document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section, header"); // Додаємо header до вибірки
        const menuLinks = document.querySelectorAll(".fixed-menu__list_link");
    
        let currentSection = "";
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
    
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });
    
        menuLinks.forEach((link) => {
            link.classList.remove("actives");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("actives");
            }
        });
    });