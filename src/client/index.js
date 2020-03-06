import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
​
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";
​
const text = "John is a super nice guy";
​
fetch(`/api/test`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ text })
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });