let unOrdrdList = document.querySelector("ul");
let userInputField = document.querySelector("input");
let submitButton = document.querySelector("button");

submitButton.onclick = function submitButton() {
  let userInput = userInputField;
  userInputField = "";

  listItem = document.createElement("li");
  span = document.createElement("span");
  deleteButton = document.createElement("button");

  listItem.appendChild(span);
  listItem.appendChild(button);

  span.textContent = userInput;
  deleteButton.textContent = "Delete";
  unOrdrdList.appendChild(listItem);

  deleteButton.onClick = unOrdrdList.removeChild(listItem);
  focus(userInputField);
};
