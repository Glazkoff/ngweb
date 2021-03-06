<?php
/**
 * ngwebstudio functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ngwebstudio
 */

if (!defined("_S_VERSION")) {
	// Replace the version number of the theme on each release.
	define("_S_VERSION", "1.0.0");
}

if (!function_exists("ngwebstudio_setup")):
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function ngwebstudio_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on ngwebstudio, use a find and replace
		 * to change 'ngwebstudio' to the name of your theme in all the template files.
		 */
		load_theme_textdomain(
			"ngwebstudio",
			get_template_directory() . "/languages"
		);

		// Add default posts and comments RSS feed links to head.
		add_theme_support("automatic-feed-links");

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support("title-tag");

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support("post-thumbnails");

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus([
			"menu-1" => esc_html__("Primary", "ngwebstudio"),
		]);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support("html5", [
			"search-form",
			"comment-form",
			"comment-list",
			"gallery",
			"caption",
			"style",
			"script",
		]);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			"custom-background",
			apply_filters("ngwebstudio_custom_background_args", [
				"default-color" => "ffffff",
				"default-image" => "",
			])
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support("customize-selective-refresh-widgets");

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support("custom-logo", [
			"height" => 250,
			"width" => 250,
			"flex-width" => true,
			"flex-height" => true,
		]);
	}
endif;
add_action("after_setup_theme", "ngwebstudio_setup");

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function ngwebstudio_content_width()
{
	$GLOBALS["content_width"] = apply_filters("ngwebstudio_content_width", 640);
}
add_action("after_setup_theme", "ngwebstudio_content_width", 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function ngwebstudio_widgets_init()
{
	register_sidebar([
		"name" => esc_html__("Sidebar", "ngwebstudio"),
		"id" => "sidebar-1",
		"description" => esc_html__("Add widgets here.", "ngwebstudio"),
		"before_widget" => '<section id="%1$s" class="widget %2$s">',
		"after_widget" => "</section>",
		"before_title" => '<h2 class="widget-title">',
		"after_title" => "</h2>",
	]);
}
add_action("widgets_init", "ngwebstudio_widgets_init");

/**
 * Enqueue scripts and styles.
 */
function ngwebstudio_scripts()
{
	wp_enqueue_style("ngwebstudio-style", get_stylesheet_uri(), [], _S_VERSION);

	wp_enqueue_style(
		"ngwebstudio-additional-style",
		get_template_directory_uri() . "/dist/site.css"
	);

	wp_style_add_data("ngwebstudio-style", "rtl", "replace");

	wp_enqueue_script(
		"ngwebstudio-site",
		get_template_directory_uri() . "/dist/site.js",
		_S_VERSION,
		true
	);

	if (is_front_page()) {
		wp_enqueue_script(
			"ngwebstudio-front-page",
			get_template_directory_uri() . "/dist/frontPage.js",
			_S_VERSION,
			true
		);
	}

	if (is_singular() && comments_open() && get_option("thread_comments")) {
		wp_enqueue_script("comment-reply");
	}
}
add_action("wp_enqueue_scripts", "ngwebstudio_scripts");

function true_metrika()
{
	?>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(82291090, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/82291090" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
	<?php
}
add_action("wp_head", "true_metrika");

function true_analytica()
{
	?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QXF57ZWWFN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QXF57ZWWFN');
</script>
<?php
}
add_action("wp_head", "true_analytica");

function ngl_favicon()
{
	echo '<link rel="apple-touch-icon" sizes="180x180" href="' .
		get_template_directory_uri() .
		"/src/favicon" .
		'/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="' .
		get_template_directory_uri() .
		"/src/favicon" .
		'/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="' .
		get_template_directory_uri() .
		"/src/favicon" .
		'/favicon-16x16.png">
<link rel="manifest" href="' .
		get_template_directory_uri() .
		"/src/favicon" .
		'/site.webmanifest">
<link rel="mask-icon" href="' .
		get_template_directory_uri() .
		"/src/favicon" .
		'/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#b91d47">
<meta name="theme-color" content="#ffffff">';
}
add_action("wp_head", "ngl_favicon");

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . "/inc/custom-header.php";

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . "/inc/template-tags.php";

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . "/inc/template-functions.php";

/**
 * Customizer additions.
 */
require get_template_directory() . "/inc/customizer.php";

/**
 * Load Jetpack compatibility file.
 */
if (defined("JETPACK__VERSION")) {
	require get_template_directory() . "/inc/jetpack.php";
}

// // ******************************
// // ?????????????????????? jQuery Mask
// //
// wp_enqueue_script(
// 	"theme_slug-jquery-mask-js",
// 	get_template_directory_uri() . "/js/jquery.mask.min.js",
// 	[],
// 	false,
// 	true
// );

// ******************************
// ?????????????????????? ?????????? ?????????? ????????????
// ******************************

//
require get_template_directory() . "/custom-post-types/services-init.php";

require get_template_directory() . "/custom-post-types/portfolio-init.php";

require get_template_directory() . "/custom-post-types/teammates-init.php";
