<section class="contact-form">
  <div class="fill"></div>

  <div class="flex-form-container">
    <div class="heading-for-form">
      <h2>Cобери все монетки на сайте и получи скидку 10%</h2>
    </div>

    <div class="wrap-for-form">
      <?php 
      // // Получаем значения переменных из пришедших данных 
      // $name = $_POST['name']; 
      // $email = $_POST['email']; 
      // $phone = $_POST['phone']; 
      // // Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме 
      // $mes = "Имя: $name \nE-mail: $email \nТема: $phone \n"; 
      // // Пытаемся отправить письмо по заданному адресу 
      // $send = mail("d.belyaeva1@gmail.com", "WORK", $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email"); 
      // // Если отправка прошла успешно — так и пишем 
      // if ($send == 'true') {echo "Сообщение отправлено";} 
      // // Если письмо не ушло — выводим сообщение об ошибке 
      // else {echo "Ой, что-то пошло не так";} ?> 
    
      <form action='' method='POST'>
        <label for="name">Как вас зовут?</label>
        <input type="text" id="name" name="name" required>
        
        <label for="phone">А скажете номер?</label>
        <input type="text" id="phone" name="phone" required>

        <label for="email">А почтой поделитесь?</label>
        <input type="text" id="email" name="email" required>

        <div class="wrap-for-checkbox">
          <input type="checkbox" id="confpolitic" value="agreement" required> <label class="confpolitic" for="confpolitic">Отправляю форму, принимаю <a>условия политики и пользовательского соглашения</a></label>
        </div>

        <input type='submit' name="submit" value='Отправить'></input>
      </form>
    </div>      
  </div>

</section>
