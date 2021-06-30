"use strict";
const express = require('express');
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))

let transporter = nodemailer.createTransport({
    service: "Yandex",
    auth: {
      user: "requests@nglazkov.ru", 
      pass: "nglazkov2021"
    },
  });

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear()

  return dd + '.' + mm + '.' + yy;
}

app.post('/request', async (req, res) => {
  let now = new Date();
  let name = '' || req.body.name
  let phone = '' || req.body.phone
  let email = '' || req.body.email

  let htmlBody = `<div><b>Имя: ${name}</b><br><b>Телефон: ${phone}</b><br><b>Email: ${email}</b><br></div>`

  try {
    let info = await transporter.sendMail({
    from: '"Заявки с сайта nglazkov.ru 😸" <requests@nglazkov.ru>', // адрес отправителя
    to: "zitrnik@gmail.com, d.belyaeva1@gmail.com, nvkolezneva@gmail.com", // список получателей
      subject: `Заявка на nglazkov.ru от ${formatDate(now)}`, // Тема письма
    text: "Привет", // Тело письма обычным текстом
    html: htmlBody // Тело письма HTML
    });
    res.send({ message: "All is ok!" });
  } catch (error) {
    res.send({ error });
  }
});

app.get('*', (req, res) => {
  res.send({ message: 'Привет! Ты нашёл наше API. Если ты знаешь, что это такое, подай заявку на работу вместе с резюме на почту contact@nglazkov.ru'})
})



app.listen(port, () => console.log(`Запущено на http://localhost:${port}`));
