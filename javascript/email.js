// document.querySelector(".form-element").addEventListener("submit", submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     // Get input values
//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".email").value;
//     let phone = document.querySelector(".phone").value;
//     let subject = document.querySelector("#subject").value;
//     let message = document.querySelector(".message").value;

//     document.querySelector(".form-element").reset();

//     sendEmail(name, email, phone, subject, message);
// };

// // Send Email Data
// function sendEmail(name, email, phone, subject, message) {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "",
//         Password: "",
//         To: "",
//         From: "",
//         Subject: `${name} sent you a message`,
//         Body: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Subject: ${subject} <br/> Message: ${message}`
//     }).then((message) => alert("Success! Your message has been sent!"))
//     .catch((error) => alert("Sorry, your message was not sent. Please make sure all required fields are filled out."))
// }