<?php
add_action( 'init', 'portfolio_register_post_type_init' ); // Использовать функцию только внутри хука init
 
function portfolio_register_post_type_init() {
	$labels = array(
		'name' => 'Портфолио',
		'singular_name' => 'Работу в портфолио', // админ панель Добавить->Функцию
		'add_new' => 'Добавить работу портфолио',
		'add_new_item' => 'Добавить новую работу портфолио', // заголовок тега <title>
		'edit_item' => 'Редактировать портфолио',
		'new_item' => 'Новая работа портфолио',
		'all_items' => 'Все работы портфолио',
		'view_item' => 'Просмотр работы портфолио на сайте',
		'search_items' => 'Искать работы портфолио',
		'not_found' =>  'Работ портфолио не найдено.',
		'not_found_in_trash' => 'В корзине нет работ портфолио.',
		'menu_name' => 'Портфолио' // ссылка в меню в админке
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_ui' => true, // показывать интерфейс в админке
		'has_archive' => true, 
		// 'menu_icon' => get_stylesheet_directory_uri() .'/img/function_icon.png', // иконка в меню
		'menu_icon' => 'dashicons-format-gallery', // иконка в меню
		'menu_position' => 3, // порядок в меню
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
	register_post_type('portfolio', $args);
}

add_filter( 'post_updated_messages', 'portfolio_post_type_messages' );
 
function portfolio_post_type_messages( $messages ) {
	global $post, $post_ID;
 
	$messages['portfolio'] = array( // portfolio - название созданного нами типа записей
		0 => '', // Данный индекс не используется.
		1 => sprintf( 'Работа портфолио обновлена. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
		2 => 'Параметр обновлён.',
		3 => 'Параметр удалён.',
		4 => 'Работа портфолио обновлена',
		5 => isset($_GET['revision']) ? sprintf( 'Работа портфолио восстановлена из редакции: %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( 'Работа портфолио опубликована на сайте. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
		7 => 'Услуга сохранена.',
		8 => sprintf( 'Отправлено на проверку. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
		9 => sprintf( 'Запланировано на публикацию: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Просмотр</a>', date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( 'Черновик обновлён. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
	);
 
	return $messages;
}

function portfolio_post_type_help_tab() {
 
	$screen = get_current_screen();
 
	// Прекращаем выполнение функции, если находимся на страницах других типов постов
	if ( 'portfolio' != $screen->post_type )
		return;
 
	// Массив параметров для первой вкладки
	$args = array(
		'id'      => 'tab_1',
		'title'   => 'Обзор',
		'content' => '<h3>Обзор</h3><p>Содержимое первой вкладки.</p>'
	);
 
	// Добавляем вкладку
	$screen->add_help_tab( $args );
 
	// Массив параметров для второй вкладки
	$args = array(
		'id'      => 'tab_2',
		'title'   => 'Доступные действия',
		'content' => '<h3>Доступные действия с типом постов «' . $screen->post_type . '»</h3><p>Содержимое второй вкладки</p>'
	);
 
	// Добавляем вторую вкладку
	$screen->add_help_tab( $args );
 
}
 
add_action('admin_head', 'portfolio_post_type_help_tab');
?>