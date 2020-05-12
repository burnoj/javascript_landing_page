//! -------- Navbar-------- //

function displayNav() {

  const navlinks = ["LiquidDnB", "Ambient", "Melodic", "Dub Fusion"];

  const ul = document.querySelector('ul')

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

  const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub Fusion"];

  const all_sections = document.querySelector('.sections')

  for (let section of sections) {

    // Section Container //
    let section_div = document.createElement("div");
    section_div.className = "section";
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
    p.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quae, dicta. Sequi minima possimus quidem, distinctio molestias ut fuga et a facilis rem, consequatur! Obcaecati, error maxime facere tempora distinctio.";
    p.className = "content-text";
    text_div.appendChild(p);


    // Image Container
    let image_container = document.createElement("div");
    image_container.className = "image_container"
    section_div.appendChild(image_container)
  }
}

displayContent();



    // const title = document.querySelector('.content-title');

    // let p = document.createElement("p");
    // p.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quae, dicta. Sequi minima possimus quidem, distinctio molestias ut fuga et a facilis rem, consequatur! Obcaecati, error maxime facere tempora distinctio.";
    // p.className = "content-text";
    // title.appendChild(p);
