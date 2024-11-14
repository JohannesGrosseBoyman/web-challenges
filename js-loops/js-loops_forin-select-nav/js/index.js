console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--
for (const key in languages) {
  const newOption = document.createElement("option");
  select.append(newOption);
  newOption.textContent = languages[key];
  newOption.value = languages[key];
}
// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (const key in nav) {
  const newListItem = document.createElement("li");
  const newAnchor = document.createElement("a");
  // console.log(nav[key].href);
  // console.log(nav[key].text);
  newAnchor.textContent = nav[key].text;
  newAnchor.href = nav[key].href;
  ul.appendChild(newListItem);
  newListItem.appendChild(newAnchor);
}


// --^-- write or modify code above this line --^--
