let projects = [
  {
    name: "project one",
    tags: "#javaScript, #fullStack , #PSDtoHTML, #backend",
    image: "1.jpg",
  },
  {
    name: "project two",
    tags: "#javaScript, #fullStack",
    image: "2.jpg",
  },
  {
    name: "project three",
    tags: " #PSDtoHTML",
    image: "3.jpg",
  },
  {
    name: "project four",
    tags: " #backend , #javaScript",
    image: "4.jpg",
  },
];

let projectContainer = document.querySelector(".project-container");

projects.forEach((project) => {
  projectContainer.innerHTML += `<div class="project-card " data-tags="#all, ${project.tags}">
        <img src="./assects/img/${project.image}" alt="" class="project-image" />
        <div class="project-content">
          <h3 class="project-title">${project.name}</h3>
          <span class="tags">${project.tags}</span>
        </div>
      </div>`;
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
