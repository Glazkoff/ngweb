<style>
.grid-contact-form{
    display:grid;
		 grid-template-areas: "a1 a1 a2"; 
    background-color: #9FD3F8;
    padding-top: 5rem;
    padding-bottom:8,75rem;
}

.grid-contact-form label{
padding-bottom:1rem;
padding-top: 1rem;
}
/* .contact-form #name,#phone,#email{
  width:31rem;
} */
.grid-contact-form button{
  padding:1rem 3.5rem 1rem 3.5rem;
margin-left: auto;
    margin-right: auto;
    margin-top:2rem;
}
.contact-form{
   margin-left: auto;
    margin-right: auto;
    padding-right: 9rem;
    padding-left: 2.5rem;
    grid-area: a2;
}
.sale-heading{
  grid-area: a1;
}
.grid-contact-form h2{
  padding-left: 4rem;
  font-size: 40px;
  line-height: 3.5rem;
  padding-top: 5rem;
}
.grid-contact-form a{
		text-decoration: underline;
		color: #080808 !important;
    
	}
#confpolitic{

margin-top: 2rem;
    
	}

@media only screen and (max-width: 740px) {
  .grid-contact-form {
    grid-template-areas:"a1"
                        "a2";
  }
}

</style>
<section class="grid-contact-form"><div class="sale-heading"><h2>Cобери все монетки на сайте и получи скидку 10%
</h2></div><div class="contact-form">
  <?php 
// если была нажата кнопка "Отправить"
if ($_POST["submit"]) {
	$name = htmlspecialchars($_POST["name"]);
	$phone = htmlspecialchars($_POST["phone"]);
	// $to - кому отправляем
	$to = "nvkolezneva@gmail.com";
	// $from - от кого
	$from = htmlspecialchars($_POST["email"]);;
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


  </section>
