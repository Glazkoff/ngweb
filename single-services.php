<?php
/**
 * Template Name: Services Template
 *
 * @package Underscoresme
 * @since Underscoresme 1.0
 */

get_header();
the_post();
?>
<?php the_post_thumbnail_url("full"); ?>
<?php
the_title('<h1 class="entry-title">Услуга: ', "</h1>");
the_post_thumbnail("full");
the_content();
the_excerpt();
get_the_author();
the_tags();
the_time();
the_date();
get_post_time();
the_ID();
the_category();
get_footer();
 ?>
