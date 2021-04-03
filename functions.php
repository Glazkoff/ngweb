<?php
/**
 * ngwebstudio functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ngwebstudio
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'ngwebstudio_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function ngwebstudio_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on ngwebstudio, use a find and replace
		 * to change 'ngwebstudio' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'ngwebstudio', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'ngwebstudio' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'ngwebstudio_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'ngwebstudio_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function ngwebstudio_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'ngwebstudio_content_width', 640 );
}
add_action( 'after_setup_theme', 'ngwebstudio_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function ngwebstudio_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'ngwebstudio' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'ngwebstudio' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'ngwebstudio_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ngwebstudio_scripts() {
	wp_enqueue_style( 'ngwebstudio-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'ngwebstudio-style', 'rtl', 'replace' );

	wp_enqueue_script( 'ngwebstudio-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'ngwebstudio_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

add_action( 'init', 'service_register_post_type_init' ); // Использовать функцию только внутри хука init
 
function service_register_post_type_init() {
	$labels = array(
		'name' => 'Услуги',
		'singular_name' => 'Услугу', // админ панель Добавить->Функцию
		'add_new' => 'Добавить услугу',
		'add_new_item' => 'Добавить новую услугу', // заголовок тега <title>
		'edit_item' => 'Редактировать услугу',
		'new_item' => 'Новая услуга',
		'all_items' => 'Все услуги',
		'view_item' => 'Просмотр услуги на сайте',
		'search_items' => 'Искать услуги',
		'not_found' =>  'Услуг не найдено.',
		'not_found_in_trash' => 'В корзине нет услуг.',
		'menu_name' => 'Услуги' // ссылка в меню в админке
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_ui' => true, // показывать интерфейс в админке
		'has_archive' => true, 
		// 'menu_icon' => get_stylesheet_directory_uri() .'/img/function_icon.png', // иконка в меню
		'menu_icon' => 'dashicons-money-alt', // иконка в меню
		'menu_position' => 2, // порядок в меню
		// 1	в самом верху меню
		// 2-3	под «Консоль»
		// 4-9	под «Записи»
		// 10-14	под «Медиафайлы»
		// 15-19	под «Ссылки»
		// 20-24	под «Страницы»
		// 25-59	под «Комментарии» (по умолчанию, null)
		// 60-64	под «Внешний вид»
		// 65-69	под «Плагины»
		// 70-74	под «Пользователи»
		// 75-79	под «Инструменты»
		// 80-99	под «Параметры»
		// больше 100	под разделителем после «Параметры»
		'supports' => array( 'title', 'editor', 'comments', 'author', 'thumbnail'),
	);
	register_post_type('services', $args);
}

// add_filter( 'post_updated_messages', 'services_post_type_messages' );
 
// function service_post_type_messages( $messages ) {
// 	global $post, $post_ID;
 
// 	$messages['functions'] = array( // functions - название созданного нами типа записей
// 		0 => '', // Данный индекс не используется.
// 		1 => sprintf( 'Услуга обновлена. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
// 		2 => 'Параметр обновлён.',
// 		3 => 'Параметр удалён.',
// 		4 => 'Услуга обновлена',
// 		5 => isset($_GET['revision']) ? sprintf( 'Услуга восстановлена из редакции: %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
// 		6 => sprintf( 'Услуга опубликована на сайте. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
// 		7 => 'Услуга сохранена.',
// 		8 => sprintf( 'Отправлено на проверку. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
// 		9 => sprintf( 'Запланировано на публикацию: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Просмотр</a>', date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
// 		10 => sprintf( 'Черновик обновлён. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
// 	);
 
// 	return $messages;
// }