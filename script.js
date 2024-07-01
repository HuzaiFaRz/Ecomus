(() => {
  const header = document.querySelector(".header");
  const headerCloseBtn = document.querySelector(".top-header-close-btn");
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownMenu = document.querySelector(".nav-dropdown-menu");
  const navDropdownMenuPart1 = document.querySelector(
    ".nav-dropdown-menu-part-1"
  );

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
          transition: Power3,
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
    navDropdown.addEventListener("mouseenter", (e) => {
      gsap.to(navDropdownMenu, {
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        transition: Power1,
      });
    });
    navDropdown.addEventListener("mouseleave", (e) => {
      gsap.to(navDropdownMenu, {
        scaleY: 0,
        opacity: 0,
        duration: 0.5,
        transition: Power1,
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
            duration: 0.6,
            transition: Power2,
          });
        });
        b.addEventListener("mouseleave", () => {
          gsap.to(b, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            transition: Power2,
          });
        });
      });
    }
  };
  navDropdownS();
})();
