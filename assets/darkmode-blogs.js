let darkMode = localStorage.getItem('darkMode');

const button = document.getElementById("dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  document.getElementById("changeicon").src = "../assets/light-mode.svg";

  const images = document.getElementsByTagName("img");

  for (let index = 0; index < images.length; index++) {
    const element = images.item(index);

    element.src = element.src.replace("-light", "-dark");
  }

  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  document.getElementById("changeicon").src = "../assets/dark-mode.svg";

  const images = document.getElementsByTagName("img");

  for (let index = 0; index < images.length; index++) {
    const element = images.item(index);

    element.src = element.src.replace("-dark", "-light");
  }

  localStorage.setItem("darkMode", null);
};

button.onclick = () => {
  let darkMode = localStorage.getItem("darkMode");
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
