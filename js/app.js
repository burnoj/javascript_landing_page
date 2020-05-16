//! -------- Global Variables -------- //

const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub"]
const header = document.getElementsByClassName("nox-header")

//! -------- Navbar-------- //

function displayNav() {

const navlinks = ["LiquidDnB", "Ambient", "Melodic", "Dub"];

  const ul = document.querySelector('ul');

  let logo_div = document.createElement("div");
  logo_div.className = "logo_div"
  ul.appendChild(logo_div);

  let li = document.createElement("li");
  li.innerHTML += "NOX"
  li.className = "logo"
  logo_div.appendChild(li);

  let nav_div = document.createElement("div");
  nav_div.className = "nav_div"
  ul.appendChild(nav_div);

  for (let navlink of navlinks) {
    let li = document.createElement("li");
    li.innerHTML += `<a href="#${navlink}">${navlink}</a>`;
    li.className = "navlink";
    nav_div.appendChild(li);
  }
}

displayNav();


//! -------- Content-------- //

// Populating all content via JS. THe four sections are: "LiquidDnB", "Ambient", "Melodic" and "Dub".

function displayContent() {

  const all_sections = document.querySelector('.sections');

  for (let section of sections) {

    // Section Container //
    let section_div = document.createElement("div");
    section_div.className = "section";
     section_div.className += " your-active-class"
    section_div.id = `${section}`
    all_sections.appendChild(section_div);


    // Text Container //
    let text_div = document.createElement("div");
    text_div.className = "text-container";
    section_div.appendChild(text_div);

    // Section Title //
    let h2 = document.createElement("h2");
    h2.innerHTML += `${section} Projects`;
    h2.className = "content-title";
    text_div.appendChild(h2);

    // Section Paragraph //
    let p = document.createElement("p");
    p.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    p.className = "content-text";
    text_div.appendChild(p);

    let para = document.createElement("p");
    para.innerHTML += "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    para.className = "content-text-two";
    text_div.appendChild(para);

    let up = document.createElement("a")
    up.href = "#top"
    up.className = "fas fa-angle-up fa-2x"
    text_div.appendChild(up);


    // Image Container
    let image_container = document.createElement("div");
    image_container.className = "image_container";
    section_div.appendChild(image_container);

    let figure = document.createElement("figure");
    figure.className = `${section}_image`;
    image_container.appendChild(figure);

    let figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);

  }
}

displayContent();

//! -------- -------- //



//! -------- Content Ordering (photo/text)-------- //


function switchOrder() {

  for (let section of sections) {
    s = document.getElementById(`${section}`)
    if (s.id === "LiquidDnB" || s.id === "Melodic")  {
      s.appendChild(s.firstElementChild);
      s.lastElementChild.firstElementChild.style.textAlign = "right";
    } else if (s.id === "Ambient" || s.id === "Dub") {
      s.firstElementChild.lastElementChild.classList.add("to-top-right")
    }
  }
}

switchOrder();


//! -------- Smooth Scroll -------- //


function smoothScroll () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  });
}

smoothScroll();


//! -------- Footer-------- //


function displayFooter () {

  const footer = document.querySelector("footer");
  footer.innerHTML = "&copy Nox Production Ltd.";
}

displayFooter();

//! -------- Check if in ViewPort -------- //




//! -------- Scroll Function -------- //

function focusOnScroll() {
    console.log("hello")
}

window.onscroll = focusOnScroll;

