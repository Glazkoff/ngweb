"use strict";
require('dotenv').config()

const fs = require('fs');

const express = require('express');
const nodemailer = require("nodemailer");

if (process.env.TELEGRAM_ENABLE !== 'false') {
  const TelegramBot = require('node-telegram-bot-api');
  const token = '1848742663:AAGCcisKnawCeMSIRSJLtmDNWVzF92BlZpI';

  const bot = new TelegramBot(token, {polling: true});
  let fileContent = fs.readFileSync("tg_chats.txt", "utf8");
  let users = fileContent.split(/\r?\n/);
  bot.on("polling_error", console.log);

  bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, `Привет! Я <b>чат-бот для служебной рассылки</b>\n\nТебе нужно отправить <code>/register</code>, чтобы подписаться на сообщения от меня`,{parse_mode : "HTML"})
  })

  bot.onText(/\/register/, (msg, match) => {
    const chatId = msg.chat.id
    let findUserIndex = users.findIndex(userId => {
      return userId ==chatId 
    })
    if (findUserIndex == -1) {
      users.push(chatId)
      fs.appendFile('tg_chats.txt', chatId + "\n", function (err) {
        if (err) throw err;
        console.log('Сохранено!');
      });
      bot.sendMessage(chatId, `<b>Сотрудник добавлен в рассылку</b> ✔\nЧат #${chatId}`,{parse_mode : "HTML"})
    } else {
      bot.sendMessage(chatId, `Прекрати! Ты уже добавлен, что ещё нужно?`)
    }
  })

  bot.onText(/\/employees/, async (msg, match) => {
    const chatId = msg.chat.id
    let message = '<b>Список подписанных пользователей:</b>\n\n'
  let findUserIndex = users.findIndex(userId => {
      return userId ==chatId 
    })
    if (findUserIndex !== -1) {
      for (let index = 0; index < users.length; index++) {
        const userId = users[index];
        if (userId != "") {
          let chatData = await bot.getChat(userId)
          message += chatData.first_name + " " + chatData.last_name + " / " + chatData.username + " (Сhat ID: " + userId + ")" + "\n"
        }
      }
      bot.sendMessage(chatId, message, { parse_mode: "HTML" });
    } else {
      bot.sendMessage(chatId, "<b>Вы не зарегистрированы!</b>", { parse_mode: "HTML" });
    }
  })
}

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))

let transporter = nodemailer.createTransport({
    service: "Yandex",
    auth: {
      user: "requests@nglazkov.ru", 
      pass: "nglazkov2021"
  },
  secure: true,
  //  dkim: {
  //   domainName: "nglazkov.ru",
  //   keySelector: "mail._domainkey",
  //   privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg..."
  // }
    
  });

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear()

  return dd + '.' + mm + '.' + yy;
}

app.post('/api/request', async (req, res) => {
  console.log("BODY: ", req.body);

  let now = new Date();
  let name = req.body.name || '-'  
  let phone = req.body.phone || '-' 
  let email = req.body.email || '-'

  let htmlBody = `<div><h1>ЗАЯВКА</h1></div><div><b>Имя: ${name}</b><br><b>Телефон: ${phone}</b><br><b>Email: ${email}</b><br></div>`

  try {
    if (process.env.TELEGRAM_ENABLE !== 'false') {
      for (let index = 0; index < users.length; index++) {
        const userChatId = users[index];
        if (userChatId != "") {
          await bot.sendMessage(userChatId, `<b>Заявка с сайта nglazkov.ru от ${formatDate(now)}</b>\n\nИмя: <b>${name}</b>\nТелефон: <b>${phone}</b>\nEmail: <b>${email}</b>`, { parse_mode: "HTML" })
        }
      }
    }
    try {
      let info = await transporter.sendMail({
        from: '"Заявки с сайта nglazkov.ru 😸" <requests@nglazkov.ru>', // адрес отправителя
          to: "zitrnik@gmail.com, d.belyaeva1@gmail.com, nvkolezneva@gmail.com", // список получателей,
        // to: "zitrnik@gmail.com", // список получателей,
        subject: `Заявка на nglazkov.ru от ${formatDate(now)}`, // Тема письма
        text: "Привет", // Тело письма обычным текстом
        html: htmlBody // Тело письма HTML
      });
        console.log(info);  
    } catch (error) {
      console.log(error);
    }
    res.send({ message: "All is ok!" });
  } catch (error) {
    res.send({ error });
  }
});

app.get('*', (req, res) => {
  res.send({ message: 'Привет! Ты нашёл наше API. Если ты знаешь, что это такое, подай заявку на работу вместе с резюме на почту contact@nglazkov.ru'})
})



app.listen(port, () => console.log(`Запущено на http://localhost:${port}`));
