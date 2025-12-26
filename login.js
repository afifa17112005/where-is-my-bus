function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCred => {
      const user = userCred.user;

      // store user info in database
      firebase.database().ref("users/" + user.uid).set({
        email: user.email,
        role: "passenger",
        createdAt: new Date().toISOString()
      });

      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}
