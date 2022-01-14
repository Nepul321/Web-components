const posts = [
  {
    id: 1,
    title: "Django Rest Framework",
    author: "Nepul Kahandawa",
    content: "Django Rest Framework can be used to build APIs.",
  },
  {
    id: 2,
    title: "Python",
    author: "Nepul Kahandawa",
    content: "Python is the best programming language.",
  },
];

const searchInput = document.querySelector(".searchInput");
const results = document.querySelector(".results");
const searchForm = document.querySelector("#search")

function getFilteredResults(searching) {
  const filtered = posts.filter((post) => {
    if (searching !== "") {
      return (
        post.title.includes(searching) ||
        post.author.includes(searching) ||
        post.content.includes(searching)
      );
    }
  });

  return filtered;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searched = searchInput.value;
  const posts = getFilteredResults(searched);
  insertToResults(posts);
});

function insertToResults(posts) {
  results.innerHTML = ``
  posts.forEach((post) => {
    const div = document.createElement("div");
	div.className = "card mb-3"
    div.innerHTML = `
	    <div class="card-body">
			<h3>${post.title}</h3>
			<p>${post.content}</p>
			<p class="text-muted">By ${post.author}</p>
	   </div>
	  `;
    results.appendChild(div);
  });
}
