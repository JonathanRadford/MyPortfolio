const project1 = document.getElementById("Project-Text1");
const project2 = document.getElementById("Project-Text2");
const project3 = document.getElementById("Project-Text3");
const project4 = document.getElementById("Project-Text4");

function myFunction(x) {
  x.classList.toggle("change");
}

const changeClass = () => {
  const navbar = document.getElementById("navbar-container");
  const NavbarLinks = document.getElementById("Navbar__Links");
  if (navbar.className == "container change") {
    NavbarLinks.className = "smallNav";
  } else {
    NavbarLinks.className = "navbar";
  }
};

/*function deleteMessages() {
  if (window.sessionStorage.getItem("messages")) {
    window.sessionStorage.removeItem("messages");
  }
  renderMessages();
}

function submitMessage(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const feedbackType = document.getElementById("feedbackType").value;
  const comment = document.getElementById("comment").value;

  const messageObject = {
    email,
    fullName,
    feedbackType,
    comment
  };

  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages =
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }

  currentMessages.push(messageObject);

  window.sessionStorage.setItem(
    "messages",
    JSON.stringify(currentMessages)
  );
  renderMessages();
}

function renderMessages() {
  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages =
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }

  let listItems = [];
  for (let i = 0; i < currentMessages.length; i++) {
    let listItem = "";
    const currentMessage = currentMessages[i];
    listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email}</dt>`;
    listItem += `<dd>${currentMessage.feedbackType}: ${currentMessage.comment}</dd>`;
    listItem += `<br />`;
    listItems.push(listItem);
  }

  let descList = document.getElementById("currentMessages");
  descList.innerHTML = listItems.join("");

}

renderMessages();*/

//My name is Jonathan and I chose to join the _nology course because from the outset they seemed the perfect fit for myself and my future. I have been fortunate enough to be able to perform professionally as a singer for over 5 years, whereby I was able to tour Europe multiple times, giving me life experiences I'll always treasure. However, it was touring that made me realise that I was spending far too much time away from my wife and family and I wanted to take the next step in my life, which for me was to move into a passion of mine and that was technology and coding. As an avid gamer I run a Podcast dedicated to the Video Games industry, and this combined with the creative and technical aspects of coding genuinely resonate with me, and combine my love of the technology with creativity. As someone with ADHD and Autism, it also an open space to people who aren't neurotypical, which I greatly appreciate. I realise that there are many things I need to learn, but I love learning, and this is a path I'm planning on taking for a very long time.
