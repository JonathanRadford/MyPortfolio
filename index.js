const project1 = document.getElementById("Project-Text1")
const project2 = document.getElementById("Project-Text2")
const project3 = document.getElementById("Project-Text3")
const project4 = document.getElementById("Project-Text4")



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