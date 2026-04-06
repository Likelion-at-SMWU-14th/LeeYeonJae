(function () {
  var nickname = document.getElementById("profile-nickname");
  var email = document.getElementById("profile-email");
  var phone = document.getElementById("profile-phone");

  if (email) {
    email.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.confirm("이메일을 보내시겠습니까?")) {
        var addr = email.getAttribute("data-email") || "";
        if (addr) window.location.href = "mailto:" + addr;
      }
    });
  }

  if (phone && nickname) {
    phone.addEventListener("click", function () {
      var nick = nickname.textContent.trim() || "user";
      if (window.confirm(nick + "에게 연락하시겠습니까?")) {
        var raw = phone.getAttribute("data-tel") || "";
        var digits = raw.replace(/\D/g, "");
        if (digits) window.location.href = "tel:" + digits;
      }
    });
  }
})();
