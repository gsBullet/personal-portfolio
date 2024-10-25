let projects = [
  {
    name: "project one",
    tags: "#javaScript, #fullStack , #PSDtoHTML, #backend #HTML_CSS",
    image: "all.png",
    link: "#",
  },
  {
    name: "nested_nested_navbar",
    tags: "#html_css",
    image: "1.png",
    link: "https://gsbullet.github.io/nested_nested_navbar/",
  },
  {
    name: "personal_cv",
    tags: "#html_css",
    image: "2.png",
    link: "https://gsbullet.github.io/personal_cv/",
  },
  {
    name: "windows_8_menu",
    tags: "#html_css",
    image: "3.png",
    link: "https://gsbullet.github.io/windows_8_menu/index.html",
  },
  {
    name: "responsive_webpage",
    tags: "#html_css #responsive",
    image: "4.png",
    link: "https://gsbullet.github.io/responsive_webpage/",
  },

  {
    name: "meat_house_web",
    tags: " #PSDtoHTML,#html_css",
    image: "psd.png",
    link: "https://gsbullet.github.io/meat_house_web/",
  },
  {
    name: "personal_portfolio",
    tags: "#html_css",
    image: "port.png",
    link: "https://gsbullet.github.io/personal_portfolio/",
  },
  {
    name: "praroz_web_design",
    tags: "#html_css",
    image: "praroz.png",
    link: "https://gsbullet.github.io/praroz_web_design/",
  },
  {
    name: "Blog App",
    tags: " #backend , #javaScript , #merm , #aws",
    image: "blog.png",
    link: "https://provati-blog.netlify.app/",
  },
  {
    name: "Banglesh.2",
    tags: "#html_css , #javaScript",
    image: "bd.PNG",
    link: "https://bangladesh-2.netlify.app/",
  },
  {
    name: "project four",
    tags: " #backend , #javaScript",
    image: "all.png",
    link: "",
  },
  {
    name: "project four",
    tags: " #backend , #javaScript",
    image: "all.png",
    link: "",
  },
];

let projectContainer = document.querySelector(".project-container");

projects.forEach((project) => {
  projectContainer.innerHTML += `
  <a class="project-link" href="${project.link}">
  <div class="project-card " data-tags="#all, ${project.tags}">
        <img src="./assects/img/${project.image}" alt="" class="project-image" />
        <div class="project-content">
          <h3 class="project-title">${project.name}</h3>
          <span class="tags">${project.tags}</span>
        </div>
      </div>
      </a>
      `;
});

const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
    filters.forEach((btn) => btn.classList.remove("active"));
    filterBtn.classList.add("active");
  });
});
