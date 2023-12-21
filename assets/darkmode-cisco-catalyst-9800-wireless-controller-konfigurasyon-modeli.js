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

var acc = document.getElementsByClassName("accordion-icerik");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("icerik-accordion").innerHTML = "+ İçerik"
    } else {
      panel.style.display = "block";
      document.getElementById("icerik-accordion").innerHTML = "- İçerik"
    }
  });
}

var acc = document.getElementsByClassName("accordion-wlan-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("wlan-profile-accordion").innerHTML = "+ WLAN Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("wlan-profile-accordion").innerHTML = "- WLAN Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-policy-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("policy-profile-accordion").innerHTML = "+ Policy Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("policy-profile-accordion").innerHTML = "- Policy Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-ap-join-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("ap-join-profile-accordion").innerHTML = "+ AP Join Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("ap-join-profile-accordion").innerHTML = "- AP Join Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-flex-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("flex-profile-accordion").innerHTML = "+ Flex Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("flex-profile-accordion").innerHTML = "- Flex Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-rf-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("rf-profile-accordion").innerHTML = "+ RF Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("rf-profile-accordion").innerHTML = "- RF Profile"
    }
  });
}