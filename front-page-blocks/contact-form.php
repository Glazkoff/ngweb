<style>
.grid-contact-form{
    display:grid;
		grid-template-columns: 3fr 2fr;
    background-color: #9FD3F8;
    padding-top: 80px;
    padding-bottom:140px;
}
.grid-contact-form label{
padding-bottom:11px;
padding-top: 21px;
}
.contact-form #name,#phone,#email{
  width:500px;
}
.grid-contact-form button{
  padding:20px 60px 20px 60px;
margin-left: auto;
    margin-right: auto;
    margin-top:35px;
}
.contact-form{
   margin-left: auto;
    margin-right: auto;
    padding-right: 150px;
    padding-left: 40px;
}
.grid-contact-form h2{
  padding-left: 170px;
}
.grid-contact-form a{
		text-decoration: underline;
		color: #080808 !important;
    
	}
#confpolitic{

margin-top: 30px;
    
	}
</style>
<section class="grid-contact-form"><div><h2>Cобери все монетки на сайте и получи скидку 10%
</h2></div><div class="contact-form"><label for="name">Как вас зовут?</label>
    <input type="text" id="name">
    <label for="phone">А скажете номер?</label>
    <input type="text" id="phone">
    <label for="email">А почтой поделитесь?</label>
    <input type="text" id="email">
    <input type="checkbox" id="confpolitic" value="" style="width: 20px;" class="form-checkbox"> Создавая аккаунт, принимаю <a>условия политики и пользовательского соглашения</a>
    <button>Отправить</button></div></section>