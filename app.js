const langEl = document.querySelector("#chosenLang")

function svCLick() {
  localStorage.setItem("lang", "sv")
  location.reload()
}

function fiCLick() {
  localStorage.setItem("lang", "fi")
  location.reload()
}

function enCLick() {
  localStorage.setItem("lang", "en")
  location.reload()
}


langEl.innerHTML = `Your chosen language is ${localStorage.getItem('lang')}`