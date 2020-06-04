//! -------- Global Variables -------- //

const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub"]

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
    li.id = `nav-${navlink}`;
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
    let sectionDiv = document.createElement("div");
    sectionDiv.className = "section";
    sectionDiv.id = `${section}`
    all_sections.appendChild(sectionDiv);


    // Text Container //
    let textDiv = document.createElement("div");
    textDiv.className = "text-container";
    sectionDiv.appendChild(textDiv);

    // Section Title //
    let h2 = document.createElement("h2");
    h2.innerHTML += `${section} Projects`;
    h2.className = "content-title";
    textDiv.appendChild(h2);

    // Section Paragraph //
    let p = document.createElement("p");
    p.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    p.className = "content-text";
    textDiv.appendChild(p);

    let para = document.createElement("p");
    para.innerHTML += "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    para.className = "content-text-two";
    textDiv.appendChild(para);

    let up = document.createElement("a")
    up.href = "#top"
    up.className = "fas fa-angle-up fa-2x"
    textDiv.appendChild(up);


    // Image Container
    let image_container = document.createElement("div");
    image_container.className = "image_container";
    sectionDiv.appendChild(image_container);

    let figure = document.createElement("figure");
    figure.className = `${section}_image`;
    image_container.appendChild(figure);

    let figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);

  }
}

displayContent();

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


//! -------- Check if section is out of ViewPort -------- //

function isOutOfViewport (elem) {

  // Get element's bounding
  const bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0 ;
  out.bottom = bounding.bottom > 0;
  out.all = out.top && out.bottom;
  out.part = out.top || out.bottom
  return out;

};

//! -------- Add Active Class if in Viewport & Link to Nav -------- //

const each_sections = document.querySelectorAll('.section');

function logViewport () {
  for (let each_section of each_sections) {
    const isOut = isOutOfViewport(each_section);
    if (isOut.all) {
      each_section.classList.add("your-active-class")
      const nav = document.querySelector(`#nav-${each_section.id}`)
      nav.classList.add("your-active-nav-class")

    } else {
      each_section.classList.remove("your-active-class")
      const nav = document.querySelector(`#nav-${each_section.id}`)
      nav.classList.remove("your-active-nav-class")
    }
  };
}

logViewport();
window.addEventListener('scroll', logViewport, false);







