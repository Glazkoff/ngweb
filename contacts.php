<?php
/*
 * Template name: Contacts
 * @package Underscoresme
 * @since Underscoresme 1.0
 */

get_header(); ?>

<section>
<h2>Контакты</h2>
<div class="flex">
<div class="block-left">
<p>Москва</p>
<p>+7 (999) 999 99 99</p>
<p>glazkov@gmail.com</p>
<p>Чтобы задать вопрос, или просто сказать «привет», свяжитесь с нами любым удобным способом</p>
</div>
<div class="block-right">
<div class="contact-form">
  <?php if ($_POST["submit"]) {
  	$name = htmlspecialchars($_POST["name"]);
  	$phone = htmlspecialchars($_POST["phone"]);
  	// $to - кому отправляем
  	$to = "nvkolezneva@gmail.com";
  	// $from - от кого
  	$from = htmlspecialchars($_POST["email"]);
  	// функция, которая отправляет наше письмо.
  	mail($to, $name, $phone, "From:" . $from);
  	echo "Спасибо! Ваше письмо отправлено.";
  } ?>
  <form action="" method=post>
    <label for="name">Как вас зовут?</label>
    <input type="text" id="name" name="name">
    <label for="phone">А скажете номер?</label>
    <input type="text" id="phone" name="phone">
    <label for="email">А почтой поделитесь?</label>
    <input type="text" id="email" name="email">
    <input type="checkbox" id="confpolitic" value="" style="width: 20px;" class="form-checkbox"> Отправляю форму, принимаю <a>условия политики и пользовательского соглашения</a>
    <button name="submit">Отправить</button></form></div>
</div>
</div>
</section>

<?php get_footer();
?>
