// // استيراد الدوال المطلوبة من Firebase SDK
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// // تكوين Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAk-ZHevwPTEIr4TKnD5OcoJxE-nOvxMOg",
//   authDomain: "ramadan-e756f.firebaseapp.com",
//   projectId: "ramadan-e756f",
//   storageBucket: "ramadan-e756f.firebasestorage.app",
//   messagingSenderId: "182533237776",
//   appId: "1:182533237776:web:474d44b26b471613026e95",
//   measurementId: "G-RMMWBW52CG"
// };

// // تهيئة Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth(app);

// // التحقق من حالة المستخدم المسجل دخوله
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const userId = user.uid; // الحصول على معرف المستخدم
//     console.log("المستخدم مسجل دخوله: ", userId);

//     // جلب بيانات المستخدم من Realtime Database
//     const userRef = ref(database, 'users/' + userId);
//     onValue(userRef, (snapshot) => {
//       const userData = snapshot.val();
//       if (userData) {
//         // تعبئة الحقول بالمعلومات
//         document.getElementById('firstName').value = userData.firstName || '';
//         document.getElementById('lastName').value = userData.lastName || '';
//         document.getElementById('gender').value = userData.gender || 'اختر الجنس';
//         document.getElementById('birthDate').value = userData.birthDate || '';
//         document.getElementById('email').value = userData.email || '';
//         document.getElementById('phoneNumber').value = userData.phoneNumber || '';
//         document.getElementById('countryCode').value = userData.countryCode || '';
//         document.getElementById('receiveOffers').checked = userData.receiveOffers || false;
//       }
//     });

//     // تحديث بيانات المستخدم عند النقر على زر "تحديث المعلومات"
//     document.getElementById('updateButton').addEventListener('click', () => {
//       const updatedUserData = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         gender: document.getElementById('gender').value,
//         birthDate: document.getElementById('birthDate').value,
//         email: document.getElementById('email').value,
//         phoneNumber: document.getElementById('phoneNumber').value,
//         countryCode: document.getElementById('countryCode').value,
//         receiveOffers: document.getElementById('receiveOffers').checked,
//       };

//       set(ref(database, 'users/' + userId), updatedUserData)
//         .then(() => {
//           alert('تم تحديث المعلومات بنجاح!');
//         })
//         .catch((error) => {
//           console.error('حدث خطأ أثناء التحديث: ', error);
//         });
//     });
//   } else {
//     console.log("المستخدم غير مسجل دخوله.");
//     // يمكنك توجيه المستخدم إلى صفحة تسجيل الدخول هنا
//   }
// });