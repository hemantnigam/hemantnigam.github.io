const selectExperience = () => {
  const experienceTabs = document.getElementsByName("experience");
  const experienceDescription = document.querySelectorAll(
    ".experience__container__description"
  );
  experienceTabs.forEach((tab, index) => {
    if (tab.checked) {
      experienceDescription[index].style.opacity = 1;
      experienceDescription[index].style.width = "100%";
      experienceDescription[index].style.height = "auto";
    } else {
      experienceDescription[index].style.opacity = 0;
      experienceDescription[index].style.width = "0px";
      experienceDescription[index].style.height = "0px";
    }
  });
};

function toggleNavIcon() {
  document.querySelector('.nav-icon').addEventListener('click', function (e){
    document.querySelector('.list-container').classList.add('show-navbar')
    document.querySelector('.close-icon').style.display = 'block'
  })

  document.querySelector('.close-icon').addEventListener('click', function (e){
    document.querySelector('.list-container').classList.remove('show-navbar')
    document.querySelector('.close-icon').style.display = 'none'
  })
}

function toggleTheme(){
  document.getElementById('theme-toggle').addEventListener('click', ()=>{
    const html = document.querySelector('html')
    if(html.classList.contains('theme-light')) {
      html.classList.remove('theme-light');
      html.classList.add('theme-dark')
    } else if(html.classList.contains('theme-dark')) {
      html.classList.remove('theme-dark');
      html.classList.add('theme-light')
    }
  })
}

function smoothScroll() {
  const links = document.querySelectorAll('.anchor-link')
  links.forEach(link=>{
    link.onclick =  function(e) {
      e.preventDefault();
      document.querySelector('.close-icon').click()
      let destination = document.querySelector(this.hash);
      destination.scrollIntoView({
          behavior: 'smooth',
          block:'start'
      });
    }
  })
}

function displayExperience() {
  selectExperience();
  const experienceTabs = document.getElementsByName("experience");
  experienceTabs.forEach((tab) => {
    tab.addEventListener("change", selectExperience);
  });
}

toggleTheme();
toggleNavIcon();
smoothScroll()
displayExperience();
