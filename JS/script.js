// *Output to screen :
// • Window.alert() .
// • Document.write() .
// • Console.log() .
 
// document.querySelector("button").onclick =
// function(){
//     window.alert("Hello Message")
// }
 
 
// document.write('<h1>Frontend</h1>')
// document.write('<p>Lorem   </p>')
 
 
// console.log("object");
// console.log("omar");
 
 
 // *Data Types Info :
            // *Primitive DataTypes
                // • String .
                // • Number .
                // • Boolean            
                // • undefined            
                // • null            
            // *non-Primitive DataTypes
                // • Array => Object .
                // • Object .
 
 
// keywords
// function
// var
//  let
//  const
 
// // Declaration
// var x;
// // Assignment
// x = 5;
// // initalization
// var x = 5;
 
// var x = 5;
// var z = "Ali";
// var c = true ;
// // var v = undefined;
// var v;
// var o = null;
 
// console.log(typeof x);
// console.log(typeof z);
// console.log(typeof c);
// console.log(typeof v);
// console.log(typeof o);
 
 
 
 
// Array => object
// var list = [1,2,3,4,5]
// var list = ["omar","Ali","Mo", "Morad"];
// var list = ["omar","Ali","Mo", "Morad", true, undefined];
// var list = ["samsung", 20, "$2000"];
 
// console.log(typeof list);
 
 
// var person = {
//     // key : value
//     name:"Omar",
//     age:20
// }
 
// console.log(person.age);
// console.log(person["age"]);
// console.log(person["name"]);
 
// console.log(typeof person);
 
       // *JS loosely typed and dynamic language
        // *Input from user :
            // Window.prompt()
 
// var x = 5;
// x = 20;
// x= "ali";
// x= false;
// console.log(x);
 
// var x = window.prompt("Enter Your 1st Num"); // "20"
// var y = window.prompt("Enter Your 2sed Num"); // "30"
// console.log(Number(x) + Number(y));
 
 
 
// *Number methods :
            // • toString( ) .
            // • toFixed( ) .
            // • parseInt( ) .
            // • parseFloat( ) .
            // • isInteger( ) [ES6] .
            // • isNaN( ) [ES6] .
 
            // var x = 50.629494;
            // console.log(x.toString());
            // console.log(x.toFixed());
            // console.log(x.toFixed(2));
            // console.log(Number("300"));
            // console.log(Number.parseInt("500"));
            // console.log(Number.parseInt("500 omar"));
            // console.log(Number.parseInt("omar 500 "));
 
            // console.log(Number.parseFloat("500.846"));
            // console.log(Number.parseFloat("500.2544 omar"));
            // console.log(Number.parseFloat("omar 500.546 "));
 
            // console.log(Number.isInteger(500));
            // console.log(Number.isInteger(500.2544));
 
            // omar*20 == NaN
            // omar-20 == NaN
            // omar+20 == omar20
 
            // console.log("omar" / 20);
            // console.log("omar" * 20);
            // console.log("omar" + 20);
 
            // console.log(Number.isNaN("500")); // string
            // console.log(Number.isNaN(500)); // number
            // console.log(Number.isNaN(500 + "omar")); // string 50omar
            // console.log(Number.isNaN(500 / "omar"));  // nan
            // console.log(Number.isNaN("500omar"));  // string
 
 
            // *Math Object :
            // • round( ) .
            // • ceil( ) .
            // • floor( ) .
            // • min( ) .
            // • max( ) .
            // • pow( ) .
            // • random( ) .
            // • trunk( ) .
 
 
            // var x = 500.93565;
            // console.log(Math.round(x));
            // console.log(Math.ceil(x));
            // console.log(Math.floor(x));
            // console.log(Math.min(20,30,500,0,200));
            // console.log(Math.max(20,30,500,0,200));
            // console.log(Math.pow(2,2));
            // console.log(Math.random());
            // console.log(Math.trunc(x));


            //  var x = "Ali Mohamed Ahmed";
            //     console.log(x.length);
            //     console.log(x.length -1);
            //     console.log(x[16]);
            //     console.log(x[6]);
 
            //     console.log(x.charAt(6));
            //     console.log(x.trim());
            //     console.log(x.toUpperCase());
            //     console.log(x.toLowerCase());
            //     console.log(x.repeat(2));
            //     console.log(x.split());
            //     console.log(x.split(" "));
            //     console.log(x.split(""));
            //     console.log(x.split(" ",2));
 



(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();