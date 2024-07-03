(() => {
  const header = document.querySelector(".header");
  const headerCloseBtn = document.querySelector(".top-header-close-btn");

  const countrySelect = document.querySelectorAll(".country-select");
  const countrySelectMenu = document.querySelectorAll(".country-select-menu");

  const navDropdown = document.querySelectorAll(".nav-dropdown");
  const navDropdownMenu = document.querySelectorAll(".nav-dropdown-menu");
  const navDropdownMenuPart1 = document.querySelector(
    ".nav-dropdown-menu-part-1"
  );

  const headerFunctionality = () => {
    countrySelect.forEach((countrySelectElem, countrySelectIndex) => {
      countrySelectElem.addEventListener("click", () => {
        countrySelectMenu[countrySelectIndex].classList.toggle(
          "country-Select-Menu-Active"
        );

        if (
          countrySelectMenu[countrySelectIndex].classList.contains(
            "country-Select-Menu-Active"
          )
        ) {
          gsap.to(countrySelectMenu[countrySelectIndex], {
            visibility: "visible",
            opacity: 1,
            ease: Power1.easeInOut,
            duration: 0.3,
          });
        } else {
          gsap.to(countrySelectMenu[countrySelectIndex], {
            visibility: "hidden",
            opacity: 0,
            ease: Power1.easeInOut,
            duration: 0.3,
          });
        }
      });
    });
  };
  headerFunctionality();

  const headerTopSwipperSlider = () => {
    var mySwiper = new Swiper(".top-header-swipper-container", {
      direction: "horizontal",
      loop: true,
      effect: "slide",

      autoplay: {
        delay: 3000,
      },

      navigation: {
        nextEl: ".top-header-swipper-next",
        prevEl: ".top-header-swipper-prev",
      },
    });
  };

  headerTopSwipperSlider();

  const headerAnimation = () => {
    if (headerCloseBtn) {
      headerCloseBtn.addEventListener("click", () => {
        gsap.to(header, {
          duration: 0.5,
          ease: Power3.easeInOut,
          y: "-100%",
        });
        setTimeout(() => {
          gsap.to(header, {
            display: "none",
          });
        }, 200);
      });
    }
  };
  headerAnimation();

  const navDropdownS = () => {
    navDropdown.forEach((elem, index) => {
      elem.addEventListener("mouseenter", () => {
        gsap.to(navDropdownMenu[index], {
          scaleY: 1,

          duration: 0.3,
        });
      });
      elem.addEventListener("mouseleave", () => {
        gsap.to(navDropdownMenu[index], {
          scaleY: 0,

          duration: 0.3,
        });
      });
    });

    for (let a = 1; a <= 12; a++) {
      navDropdownMenuPart1.innerHTML += `<a href="#" class="nav-dropdown-menu-content">
                <div class="nav-dropdown-menu-btns">
                  <button class="nav-dropdown-menu-btn">New</button>
                  <button class="nav-dropdown-menu-btn">Trend</button>
                </div>
                <img src="Dropdown-Menu-image/${[
                  a,
                ]}.jpg" class="nav-dropdown-menu-img"/>
                <div class="nav-dropdown-menu-img-text">Home Fashion ${[
                  a,
                ]}</div>
              </a>`;
      const navDropdownMenuContent = document.querySelectorAll(
        ".nav-dropdown-menu-content"
      );
      navDropdownMenuContent.forEach((b) => {
        b.addEventListener("mouseenter", () => {
          gsap.from(b, {
            scale: 1.1,
            opacity: 0,
            duration: 0.3,
            ease: Power1.easeInOut,
          });
        });
        b.addEventListener("mouseleave", () => {
          gsap.to(b, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: Power1.easeInOut,
          });
        });
      });
    }

    var mySwiper = new Swiper(".dropdown-menu-swipper-container", {
      direction: "horizontal",
      loop: true,
      effect: "slide",

      navigation: {
        nextEl: ".dropdown-menu-swipper-next",
        prevEl: ".dropdown-menu-swipper-prev",
      },
    });
  };
  navDropdownS();
})();
