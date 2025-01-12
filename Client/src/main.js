const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const formValues = Object.fromEntries(formData);
  fetch("http://localhost:8080/guestbookentry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  console.log(formValues);
}
messageForm.addEventListener("submit", handleSubmitMessageForm);

app.post("/guestbookentry", async (req, res) => {
  const data = req.body.formValues;
  const query = await db.query(
    `INSERT INTO juicyjakesguestbook (col2, col3, col4, col5) VALUES ($1, $2, $3, $4)`,
    [data.input1, data.input2, data.input3, data.input4]
  );
  await res.json(query.rows);
});
