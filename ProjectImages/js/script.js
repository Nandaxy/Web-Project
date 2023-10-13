$(document).ready(function () {
  // Default
  $("#content-all").show();
  $("#content-image").hide();
  $("#content-video").hide();

  // Tombol "all" diklik
  $("#btn-all").click(function () {
    $("#content-all").show();
    $("#content-image").hide();
    $("#content-video").hide();
  });

  // Tombol "image" diklik
  $("#btn-image").click(function () {
    $("#content-all").hide();
    $("#content-image").show();
    $("#content-video").hide();
  });

  // tombol "video" di klik
  $("#btn-video").click(function () {
    $("#content-all").hide();
    $("#content-image").hide();
    $("#content-video").show();
  });
});

// navbar untuk mobile
const menuButton = document.querySelector(".navbar-navigation-mobile .menu");
const mobileDropdown = document.querySelector(".mobile-dropdown");
menuButton.addEventListener("click", function () {
  mobileDropdown.parentElement.classList.toggle("active");
});

// Btn image video
let btnContent = document.getElementById("btnNavContent");
let btns = btnContent.getElementsByClassName("btn-image-video");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let curent = document.getElementsByClassName("btn-active");
    curent[0].className = curent[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}

// saerch
$(document).ready(function () {
  // ... (kode Anda yang sebelumnya)

  // Function to handle search
  function performSearch() {
    var searchTerm = $("#search").val(); // Ambil nilai dari input search
    var newUrl = "?search=" + searchTerm; // Bentuk URL baru dengan parameter pencarian

    // Ganti lokasi URL dengan URL baru
    history.pushState({ search: searchTerm }, "", newUrl);

    // Di sini Anda dapat menambahkan logika untuk memproses pencarian
    // Misalnya, Anda dapat menggunakan searchTerm untuk melakukan pencarian atau memuat konten baru.
    // Kemudian, update tampilan sesuai dengan hasilnya.
  }

  // Event listener untuk ketika tombol Enter ditekan di dalam input
  $("#search").on("keyup", function (event) {
    if (event.keyCode === 13) { // 13 adalah kode untuk tombol "Enter"
      performSearch(); // Panggil fungsi performSearch saat Enter ditekan
    }
  });

  // Event listener untuk klik pada ikon pencarian
  $("#search-icon").click(function (event) {
    event.preventDefault(); // Mencegah navigasi standar

    performSearch(); // Panggil fungsi performSearch saat ikon pencarian diklik
  });
});


// random image unsplash
$(document).ready(function () {
  const images = [
    "https://source.unsplash.com/featured/?mountains",
    "https://source.unsplash.com/featured/?hiking",
    "https://source.unsplash.com/featured/?kayak",
    "https://source.unsplash.com/featured/?forest",
    "https://source.unsplash.com/featured/?mountain",
    "https://source.unsplash.com/featured/?trail",
    "https://source.unsplash.com/featured/?outdoors",
    "https://source.unsplash.com/featured/?video",
    "https://source.unsplash.com/featured/?city",
    "https://source.unsplash.com/featured/?car",
    "https://source.unsplash.com/featured/?river",
    "https://source.unsplash.com/featured/?sea",
  ];

  $("div.card-image").each(function () {
    const random_image_index = Math.floor(images.length * Math.random());
    $(this).css("background-image", "url(" + images[random_image_index] + ")");
    images.splice(random_image_index, 1);
  });
});

// Modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");
var closeModal = document.getElementById("close-modal");


var isModalOpen = false;

function openModal(imageUrl) {
  modal.style.display = "block";
  modalImg.src = imageUrl;
  document.body.classList.add("modal-open");

  history.pushState({ modalOpen: true }, "", "?modalOpen=true");
  isModalOpen = true;
}

function closeModalFunction() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");

  history.replaceState({}, "", window.location.pathname);
  isModalOpen = false;
}

var cardItems = document.querySelectorAll(".card-item");
cardItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var imageUrl = item.style.backgroundImage
      .replace('url("', "")
      .replace('")', "");

    openModal(imageUrl);
  });
});

closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("popstate", function (event) {
  if (isModalOpen) {
    closeModalFunction();
  }
});

// toogle dark and light mode
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle1 = document.getElementById("modeToggle1");
  const modeToggle2 = document.getElementById("modeToggle2");

  // Retrieve mode from local storage
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    modeToggle1.checked = true;
    modeToggle2.checked = true;
    toggleMode("dark");
  }

  // Function to update both toggles
  function updateToggles(state) {
    modeToggle1.checked = state;
    modeToggle2.checked = state;
  }

  // Toggle mode based on checkbox state
  modeToggle1.addEventListener("change", function () {
    const isChecked = modeToggle1.checked;
    updateToggles(isChecked);
    toggleMode(isChecked ? "dark" : "light");
  });

  modeToggle2.addEventListener("change", function () {
    const isChecked = modeToggle2.checked;
    updateToggles(isChecked);
    toggleMode(isChecked ? "dark" : "light");
  });

  // Toggle mode function
  function toggleMode(mode) {
    document.body.classList.toggle("dark-mode", mode === "dark");
    document.body.classList.toggle("light-mode", mode === "light");

    // Save mode to local storage
    localStorage.setItem("mode", mode);

    // Update all divs
    const divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.toggle("dark-mode", mode === "dark");
      divs[i].classList.toggle("light-mode", mode === "light");
    }
  }
});
