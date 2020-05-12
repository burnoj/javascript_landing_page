//! -------- Navbar-------- //

function displayNav() {

  const navlinks = ["LiquidDnB", "Ambient", "Melodic", "Dub"];

  const ul = document.querySelector('ul');

  for (let navlink of navlinks) {
    let li = document.createElement("li");
    li.innerHTML += `<a href="#${navlink}">${navlink}</a>`;
    li.className = "navlink";
    ul.appendChild(li);
  }
}

displayNav();

//! -------- Content-------- //

function displayContent() {

  const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub"];

  const all_sections = document.querySelector('.sections');

  for (let section of sections) {

    // Section Container //
    let section_div = document.createElement("div");
    section_div.className = "section";
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


//! -------- Content Ordering-------- //

function switchOrder() {

  const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub"];
  for (let section of sections) {
    s = document.getElementById(`${section}`)
    if (s.id === "LiquidDnB" || s.id === "Melodic")  {
      s.appendChild(s.firstElementChild);
      s.lastElementChild.firstElementChild.style.textAlign = "right";
    }
  }
}

switchOrder();

//! -------- Footer-------- //

function displayFooter () {

  const footer = document.querySelector("footer");
  footer.innerHTML = "&copy Nox Ltd";
}

displayFooter();



    // const title = document.querySelector('.content-title');

    // let p = document.createElement("p");
    // p.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quae, dicta. Sequi minima possimus quidem, distinctio molestias ut fuga et a facilis rem, consequatur! Obcaecati, error maxime facere tempora distinctio.";
    // p.className = "content-text";
    // title.appendChild(p);
