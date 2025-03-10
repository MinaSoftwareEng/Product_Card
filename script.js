document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");
  const sidebar = document.getElementById("sidebar");

  //Open sidear and change hamburger to close icon
  hamburger.addEventListener("click", function () {
    sidebar.classList.add("open");
    hamburger.classList.add("rotate");
    setTimeout(() => {
      hamburger.style.display = "none";
      close.style.display = "block";
      sidebar.style.display = "block";
    }, 300);
  });

  //close sidebar and change close icon back to hamburger icon
  close.addEventListener("click", function () {
    sidebar.classList.remove("open");
    close.classList.add("rotate");
    hamburger.style.display = "block";
    close.style.display = "none";
    hamburger.classList.remove("rotate");
  });

  // Left-sidebar for mobile view
  const toggleButton = document.querySelector(".toggle-btn");
  const toggle_right = toggleButton.querySelector(".toggle-right");
  const toggle_left = toggleButton.querySelector(".toggle-left");
  const l_sidebar = document.querySelector("#l-sidebar");

  //Define the navbar menu HTML as a template literal
  const navbarMenu = `
 <ul class="cloned-navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Cusine</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
   </ul>
`;
  //Create a container element for the navar menu
  const navbarContainer = document.createElement("div");
  navbarContainer.id = "cloned-navbar";
  navbarContainer.innerHTML = navbarMenu;
  l_sidebar.appendChild(navbarContainer);

  //open sidebar and change icon
  toggle_left.addEventListener("click", function () {
    l_sidebar.classList.add("open");
    l_sidebar.classList.remove("close");
    toggle_left.style.display = "none";
    toggle_right.style.display = "block";
  });
  //close sidebar and change icon
  toggle_right.addEventListener("click", function () {
    l_sidebar.classList.remove("open");
    l_sidebar.classList.add("close");
    toggle_right.style.display = "none";
    toggle_left.style.display = "block";
  });
});
