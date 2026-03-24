

// emailjs.init("_iF7_mtCk2iYLpG2g");

function sendResponse() {
    const user_name = document.getElementById("name_of_user").value;
    const user_phone = document.getElementById("phone_of_user").value;
    const user_email = document.getElementById("email_of_user").value;
    const user_intent = document.getElementById("intent_of_user").value;

    const text = "Name: " + user_name + "\nPhone Number: " + user_phone + "\nEmail ID: " + user_email + "\nIntent: " + user_intent;

    sendMail(text);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Loaded");
  sendResponse(); // call your function here
});

function sendMail(user) {
  
  emailjs.send("service_i3y8a1p", "template_jek8gp4", {
    to_email: "sayanp31blr@ximeorg",
    subject: "Landing Page Request Received",
    message: user,
  }, "_iF7_mtCk2iYLpG2g")
  .then((response) => {
    document.getElementById("status-text").innerHTML +="<i>Thanks for your interest. Someone from our team will get in touch soon</i>";
  })
  .catch((error)=> {
    document.getElementById("status-text").innerHTML += "<i>Sorry. Something went wrong. Please try again later.</i>";
  })
}