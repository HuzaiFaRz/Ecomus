(() => {
  const topBar = document.querySelector(".top-bar");
  const topBarCloseBtn = document.querySelector(".top-bar-close-btn");
  const countrySelectBtn = document.querySelectorAll(".country-select-btn");
  const countrySelectMenu = document.querySelectorAll(".country-select-menu");

  const topBarFunctionality = () => {
    if (countrySelectBtn) {
      Array.from(countrySelectBtn).forEach(
        (countrySelectBtnElem, countrySelectBtnIndex) => {
          countrySelectBtnElem.addEventListener("click", () => {
            countrySelectMenu[countrySelectBtnIndex].classList.toggle(
              "country-Select-Menu-Active"
            );

            if (
              countrySelectMenu[countrySelectBtnIndex].classList.contains(
                "country-Select-Menu-Active"
              )
            ) {
              gsap.to(countrySelectMenu[countrySelectBtnIndex], {
                opacity: 1,
                visibility: "visible",
                ease: Power1.easeInOut,
                duration: 0.3,
              });

              if (countrySelectMenu[countrySelectBtnIndex].opa) {
                console.log("ds");
              }
            } else {
              gsap.to(countrySelectMenu[countrySelectBtnIndex], {
                opacity: 0,
                visibility: "hidden",
                ease: Power1.easeInOut,
                duration: 0.3,
              });
            }

            // if (
            //   countrySelectMenu[1].classList.contains(
            //     "country-Select-Menu-Active"
            //   )
            // ) {
            //   console.log("this");
            //   gsap.to(countrySelectMenu[1], {
            //     visibility: "visible",
            //     opacity: 1,
            //     ease: Power1.easeInOut,
            //     duration: 0.3,
            //   });
            // }
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
      centerSearchForm.addEventListener("mouseleave", () => {
        gsap.to(centerSearchMenu, {
          visibility: "hidden",
          opacity: 0,
          duration: 0.3,
          ease: Power2.easeInOut,
        });
      });
    }
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
