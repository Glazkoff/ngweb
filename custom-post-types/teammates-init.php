<?php
add_action( 'init', 'teammates_register_post_type_init' ); // Использовать функцию только внутри хука init
 
function teammates_register_post_type_init() {
	$labels = array(
		'name' => 'Команда',
		'singular_name' => 'Участника команды', // админ панель Добавить->Функцию
		'add_new' => 'Добавить участника команды',
		'add_new_item' => 'Добавить нового участника команды', // заголовок тега <title>
		'edit_item' => 'Редактировать участника команды',
		'new_item' => 'Новый участник команды',
		'all_items' => 'Вся команда',
		'view_item' => 'Просмотр участника на сайте',
		'search_items' => 'Искать участника',
		'not_found' =>  'Участников не найдено.',
		'not_found_in_trash' => 'В корзине нет участников.',
		'menu_name' => 'Команда ' // ссылка в меню в админке
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_ui' => true, // показывать интерфейс в админке
		'has_archive' => true, 
		// 'menu_icon' => get_stylesheet_directory_uri() .'/img/function_icon.png', // иконка в меню
		'menu_icon' => 'dashicons-universal-access', // иконка в меню
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
	register_post_type('teammates', $args);
}

add_filter( 'post_updated_messages', 'teammates_post_type_messages' );
 
function teammates_post_type_messages( $messages ) {
	global $post, $post_ID;
 
	$messages['teammates'] = array( // teammates - название созданного нами типа записей
		0 => '', // Данный индекс не используется.
		1 => sprintf( 'Участник команды обновлён. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
		2 => 'Параметр обновлён.',
		3 => 'Параметр удалён.',
		4 => 'Участник команды обновлён',
		5 => isset($_GET['revision']) ? sprintf( 'Участник команды восстановлен	  из редакции: %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( 'Участник команды опубликован на сайте. <a href="%s">Просмотр</a>', esc_url( get_permalink($post_ID) ) ),
		7 => 'Услуга сохранена.',
		8 => sprintf( 'Отправлено на проверку. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
		9 => sprintf( 'Запланировано на публикацию: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Просмотр</a>', date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( 'Черновик обновлён. <a target="_blank" href="%s">Просмотр</a>', esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
	);
 
	return $messages;
}

function teammates_post_type_help_tab() {
 
	$screen = get_current_screen();
 
	// Прекращаем выполнение функции, если находимся на страницах других типов постов
	if ( 'teammates' != $screen->post_type )
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
 
add_action('admin_head', 'teammates_post_type_help_tab');
?>