
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra điều kiện đăng nhập (thay đổi theo yêu cầu của bạn)
  if (username === "admin" && password === "password123") {
      alert("Đăng nhập thành công!");
      document.getElementById("loginButton").style.display = "none";
      document.getElementById("logoutButton").style.display = "block";
  } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

function logout() {
  // Hiện nút Đăng nhập và ẩn nút Đăng xuất
  document.getElementById("loginButton").style.display = "block";
  document.getElementById("logoutButton").style.display = "none";
  
  alert("Đã đăng xuất!");
}