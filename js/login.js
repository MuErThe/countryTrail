// Email Field Underline Animation
var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// Password Field Underline Animation
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// Button Border animation
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});


// Below function Executes on click of login button.
var attempt = 3; // Variable to count number of attempts.
document.querySelector("#submit").addEventListener("click", function (e) {
 
  e.preventDefault();
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // login details in json format
  var loginDetails = '{"employee":[' + '{"empEmail":"admin@gmail.com","empPassword":"admin123"}]}';
  details = JSON.parse(loginDetails);

  var validEmail = details.employee[0].empEmail;
  var validPassword = details.employee[0].empPassword;
  //console.log(validEmail, validPassword);
  
  // Conditon to check login deatails 
  if (username == validEmail && password == validPassword) {
    window.location.href = "/index.html"; // Redirecting to Dashboard page.
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
});