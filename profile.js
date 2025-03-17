document.addEventListener("DOMContentLoaded", function () {
  // استرجاع بيانات المستخدم من LocalStorage
  let userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    document.getElementById("firstName").value = userData.lastname || "";
    document.getElementById("lastName").value = userData.firstname || "";
    document.getElementById("phoneNumber").value = userData.phoneNumber || "";
    document.getElementById("email").value = userData.email || "";
  }

  // زر التحديث
  document.getElementById("updateButton").addEventListener("click", function () {
    let updatedUser = {
      lastname: document.getElementById("firstName").value,
      firstname: document.getElementById("lastName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value, // لا يمكن تعديله لكن يتم الاحتفاظ به
    };

    // حفظ البيانات في LocalStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // استخدام SweetAlert بدلاً من alert
    Swal.fire({
      icon: 'success',
      title: 'تم التحديث بنجاح!',
      text: 'تم تحديث معلوماتك بنجاح.',
      confirmButtonText: 'موافق'
    });
  });
});