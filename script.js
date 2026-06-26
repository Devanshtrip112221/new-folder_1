// // ============================
// // CONTACT FORM - FORMSPREE
// // ============================

// const form = document.querySelector(".contact-form");
// const successMessage = document.getElementById("success-message");
// const errorMessage = document.getElementById("error-message");

// if (form) {
//     form.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const submitBtn = form.querySelector("button");
//         const originalBtnText = submitBtn.innerHTML;

//         submitBtn.disabled = true;
//         submitBtn.innerHTML =
//             '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

//         try {
//             const response = await fetch(
//                 "https://formspree.io/f/mdareekb",
//                 {
//                     method: "POST",
//                     body: new FormData(form),
//                     headers: {
//                         Accept: "application/json"
//                     }
//                 }
//             );

//             if (response.ok) {
//                 if (successMessage) {
//                     successMessage.style.display = "block";
//                 }

//                 if (errorMessage) {
//                     errorMessage.style.display = "none";
//                 }

//                 submitBtn.innerHTML =
//                     '<i class="fa-solid fa-check"></i> Message Sent!';
//                 submitBtn.style.background =
//                     "linear-gradient(135deg,#059669,#10b981)";

//                 form.reset();

//                 setTimeout(() => {
//                     submitBtn.innerHTML = originalBtnText;
//                     submitBtn.disabled = false;
//                     submitBtn.style.background = "";

//                     if (successMessage) {
//                         successMessage.style.display = "none";
//                     }
//                 }, 5000);

//             } else {
//                 throw new Error("Form submission failed");
//             }

//         } catch (error) {

//             if (errorMessage) {
//                 errorMessage.style.display = "block";
//             }

//             if (successMessage) {
//                 successMessage.style.display = "none";
//             }

//             submitBtn.innerHTML = originalBtnText;
//             submitBtn.disabled = false;
//         }
//     });
// }