
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
		<div class="footer-custom"><div>
			<ul>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Услуги</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Портфолио</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Статьи</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Контакты</a></li>
			</ul></div>
			<div><ul>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Facebook</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Instagram</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				ВКонтакте</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Telegram</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				TikTok</a></li>
				<li><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				Behance</a></li>
			</ul></div>
				<div class="footer-contact"><ul>
				<li>+7(967)335-79-67</li>
				<li>contact@nglazkov.ru</li>
			</ul></div></div>
			<div>
				<hr>
				<h6>NIKITA GLAZKOV <?php echo date('Y'); ?></h6>
			</div>
			<!-- <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ngwebstudio' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'ngwebstudio' ), 'WordPress' );
				?>
			</a> -->
			<!-- <span class="sep"> | </span> -->
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				// printf( esc_html__( 'Theme: %1$s by %2$s.', 'ngwebstudio' ), 'ngwebstudio', '<a href="http://nglazkov.ru">Nikita Glazkov</a>' );
				// ?>
		<!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
