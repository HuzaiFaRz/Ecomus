(() => {
  const topBar = document.querySelector(".top-bar");
  const topBarCloseBtn = document.querySelector(".top-bar-close-btn");
  const countrySelect = document.querySelectorAll(".country-select");
  const countrySelectMenu = document.querySelectorAll(".country-select-menu");

  const topBarFunctionality = () => {
    if (countrySelect) {
      Array.from(countrySelect).forEach(
        (countrySelectElem, countrySelectIndex) => {
          countrySelectElem.addEventListener("mouseenter", () => {
            gsap.to(countrySelectMenu[countrySelectIndex], {
              opacity: 1,
              visibility: "visible",
              duration: 0.3,
              ease: Power2.easeInOut,
            });
          });
          countrySelectElem.addEventListener("mouseleave", () => {
            gsap.to(countrySelectMenu[countrySelectIndex], {
              opacity: 0,
              visibility: "hidden",
              duration: 0.3,
              ease: Power2.easeInOut,
            });
          });
        }
      );
    }

    if (topBarCloseBtn) {
      topBarCloseBtn.addEventListener("click", () => {
        gsap.to(topBar, {
          duration: 0.5,
          ease: Power3.easeInOut,
          y: "-100%",
        });
        setTimeout(() => {
          gsap.to(topBar, {
            display: "none",
          });
        }, 200);
      });
    }
  };
  topBarFunctionality();
  const centerSearchForm = document.querySelector(".center-search-form");
  const centerSearchMenu = document.querySelector(".center-search-menu");
  const centerSearchInput = document.querySelector(".center-search-input");
  const centerSearchInputCancel = document.querySelector(
    ".center-search-input-cancel"
  );
  const loginForm = document.querySelector(".login-form");
  const accountInput = document.querySelectorAll(".accountInput");
  const accountInputLabel = document.querySelectorAll("#accountInputLabel");

  const centerBarFunctionality = () => {
    if (centerSearchInput) {
      centerSearchInput.addEventListener("input", () => {
        if (!centerSearchInput.value) {
          gsap.to(centerSearchInputCancel, {
            visibility: "hidden",
          });
        } else {
          gsap.to(centerSearchInputCancel, {
            visibility: "visible",
          });
          centerSearchInputCancel.addEventListener("click", () => {
            centerSearchInput.value = "";
          });
        }
      });
    }
    if (centerSearchForm) {
      centerSearchForm.addEventListener("mouseenter", () => {
        gsap.to(centerSearchMenu, {
          visibility: "visible",
          opacity: 1,
          duration: 0.3,
          ease: Power2.easeInOut,
        });
      });
      centerSearchInput.addEventListener("input", () => {
        gsap.to(centerSearchMenu, {
          visibility: "visible",
          opacity: 1,
          duration: 0.3,
          ease: Power2.easeInOut,
        });
        if (centerSearchInput.value === "") {
          gsap.to(centerSearchMenu, {
            visibility: "hidden",
            opacity: 0,
            duration: 0.3,
            ease: Power2.easeInOut,
          });
        }
      });
      centerSearchForm.addEventListener("mouseleave", () => {
        gsap.to(centerSearchMenu, {
          visibility: "hidden",
          opacity: 0,
          duration: 0.3,
          ease: Power2.easeInOut,
        });
      });
    }
    const loginFunctionality = () => {
      if (loginForm) {
        Array.from(accountInput).forEach(
          (accountInputElem, accountInputIndex) => {
            console.log(accountInputElem, accountInputIndex);
            accountInputElem.addEventListener("click", () => {
              console.log(this);
            });
          }
        );
      }
    };
    loginFunctionality();
  };
  centerBarFunctionality();

  const navDropdown = document.querySelectorAll(".nav-dropdown");
  const navDropdownMenu = document.querySelectorAll(".nav-dropdown-menu");
  const navDropdownMenuPart1 = document.querySelector(
    ".nav-dropdown-menu-part-1"
  );

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
