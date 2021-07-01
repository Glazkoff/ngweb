
<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ngwebstudio
 */
?>
	<footer id="colophon" class="site-footer">
		<div class="footer-custom"><div class="test-centert">
			<ul>
				<li><a href="#" aria-current="page">Главная</a></li>
				<li><a href="#about-us" aria-current="page">О нас</a></li>
				<li><a href="#services" aria-current="page">Услуги</a></li>
				<li><a href="#contact-form" aria-current="page">Обратная связь</a></li>
			</ul></div>
			<div><ul>
				<li><a href="<?php echo esc_url(
    	__("https://www.facebook.com/nglazkovstudio/", "ngwebstudio")
    ); ?> "target="_blank">
				Facebook</a></li>
				<li><a href="<?php echo esc_url(
    	__("https://www.instagram.com/nglazkov_studio/", "ngwebstudio")
    ); ?> "target="_blank">
				Instagram</a></li>
				<li><a href="<?php echo esc_url(
    	__("https://vk.com/nglazkov_studio", "ngwebstudio")
    ); ?> "target="_blank">
				ВКонтакте</a></li>
			</ul></div>
				<div class="footer-contact"><ul>
				<li><a href="tel:+79673357967">+7 (967) 335-79-67</a></li>
				<li><a href="mailto:contact@nglazkov.ru?subject=Заявка на заказ">contact@nglazkov.ru</a></li>
			</ul></div></div>
			<div>
				<hr>
				<h6>NIKITA GLAZKOV <?php echo date("Y"); ?></h6>
			</div>
			<!-- <a href="<?php echo esc_url(__("https://nglazkov.ru", "ngwebstudio")); ?>">
				 /* translators: %s: CMS name, i.e. WordPress. */<?php
/* translators: %s: CMS name, i.e. WordPress. */
?>printf(esc_html__("Proudly powered by %s", "ngwebstudio"), "WordPress"); ?>
			</a> -->
			<!-- <span class="sep"> | </span> -->
				<?php
/* translators: 1: Theme name, 2: Theme author. */
// printf( esc_html__( 'Theme: %1$s by %2$s.', 'ngwebstudio' ), 'ngwebstudio', '<a href="http://nglazkov.ru">Nikita Glazkov</a>' );
//
?>
		<!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
