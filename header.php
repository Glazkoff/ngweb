<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ngwebstudio
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo("charset"); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">	
	<?php wp_head(); ?>
	
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e(
 	"Skip to content",
 	"ngwebstudio"
 ); ?></a>

	<header id="masthead" class="site-header headroom">
		<div class="site-branding">
			<div class="logo">
				<a href="https://nglazkov.ru/" class="custom-logo-link" rel="home" aria-current="page">
					<img  src="<?php echo get_template_directory_uri(); ?>/src/img/logo.png" alt="Logo" />
				</a>
			</div>
			<?php
// the_custom_logo();
//  if (is_front_page() && is_home()):
?>
				<!-- <h1 class="site-title"><a href=" -->
				<?php
// echo esc_url(home_url("/"));
?>
				<!-- " rel="home"> -->
				<?php
// bloginfo("name");
?>
				<!-- </a></h1> -->
				<?php
// else:
?>
				<!-- <p class="site-title"><a href=" -->
				<?php
// echo esc_url(home_url("/"));
?>
				 <!-- " rel="home"> -->
				 <?php
// bloginfo("name");
?>
				<!-- </a></p> -->
				<?php
//  endif;
//  $ngwebstudio_description = get_bloginfo("description", "display");
//  if ($ngwebstudio_description || is_customize_preview()):
?>
				<!-- <p class="site-description">
					<?php
// echo $ngwebstudio_description;
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
?></p> -->
			<?php
// endif;
?>
		</div>

		<nav id="site-navigation" class="main-navigation">
			<!-- <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<?php
//  esc_html_e("Primary Menu","ngwebstudio");
?>
	 </button> -->
	 <div class="menu-menu-1-container">
		 <ul id="primary-menu" class="menu">
			 <li id="menu-item-8" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8"><a href="#" aria-current="page">Главная</a></li>
			 <li id="menu-item-9" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-9"><a href="#about-us" aria-current="page">О нас</a></li>
			 <li id="menu-item-11" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-11"><a href="#services" aria-current="page">Услуги</a></li>
			 <li id="menu-item-12" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-12"><a href="#contact-form" aria-current="page">Обратная связь</a></li>
</ul></div>
			<?php
// 		wp_nav_menu([
//  	"theme_location" => "menu-1",
//  	"menu_id" => "primary-menu",
//  ]);
?>
		</nav>

		<!-- ЧАСТЬ ПРО МОНЕТКИ: НАЧАЛО -->
		<!-- <div class="money" id="money-panel">
		<span>3/10</span>
		<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3333 19.3333C19.3333 17.9981 15.5463 16.9167 10.8749 16.9167M19.3333 19.3333C19.3333 20.6685 15.5463 21.75 10.8749 21.75C6.2035 21.75 2.41659 20.6685 2.41659 19.3333M19.3333 19.3333V25.2989C19.3333 26.6752 15.5463 27.7917 10.8749 27.7917C6.2035 27.7917 2.41659 26.6764 2.41659 25.2989V19.3333M19.3333 19.3333C23.9539 19.3333 27.7916 18.1407 27.7916 16.9167V4.83334M10.8749 16.9167C6.2035 16.9167 2.41659 17.9981 2.41659 19.3333M10.8749 16.9167C5.5365 16.9167 1.20825 15.724 1.20825 14.5V8.45834M1.20825 8.45834C1.20825 7.12313 5.5365 6.04167 10.8749 6.04167V10.875M1.20825 8.45834C1.20825 9.79355 5.5365 10.875 10.8749 10.875M10.8749 10.875C10.8749 12.099 14.8056 13.2917 19.4263 13.2917C24.0458 13.2917 27.7916 12.099 27.7916 10.875M27.7916 4.83334C27.7916 3.49813 24.0458 2.41667 19.4263 2.41667C14.8056 2.41667 11.061 3.49813 11.061 4.83334M27.7916 4.83334C27.7916 6.16855 24.0458 7.25001 19.4263 7.25001C14.8068 7.25001 11.061 6.16855 11.061 4.83334M11.061 4.83334V17.1173" stroke="#080808" stroke-width="2"/>
</svg>
			<div id="money-prompt" class="prompt">
			<small>Собирай монетки на сайте и обменивай их на скидку 10%</small>
			</div>
			</div> -->
		<!-- ЧАСТЬ ПРО МОНЕТКИ: КОНЕЦ -->

	</header>
