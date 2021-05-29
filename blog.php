<?php
/*
 * Template name: Blog
 * @package Underscoresme
 * @since Underscoresme 1.0
 */

get_header(); ?>

<section>
<div class="blog">
<h2>Статьи по веб-дизайну и разработке</h2>
<nav class="extra-navigation">
<ul class="menu">
  
<li><a href="#" onclick="showEvery()">Все</a></li>
<!-- <li><a href="#" class="design" onclick="showDesign()">Дизайн</a></li>
<li><a href="#" class="dev" onclick="showDev()">Разработка</a></li>
<li><a href="#" class="prom"onclick="showProm()">Продвижение</a></li> -->
<?php if ($terms = get_terms(["taxonomy" => "category", "orderby" => "name"])) {
	foreach ($terms as $term) {
		echo '<li><a href="#" onclick="' .
			$term->term_id .
			'()">' .
			$term->name .
			"</a></li>";
	}
} ?>
</ul>
</nav>
<div id="articles">

<?php
$current_page = get_query_var("paged") ? get_query_var("paged") : 1; // определяем текущую страницу блога
$args = [
	"posts_per_page" => get_option("posts_per_page"), // значение по умолчанию берётся из настроек, но вы можете использовать и собственное
	"paged" => $current_page, // текущая страница
];
query_posts($args);

$wp_query->is_archive = true;
$wp_query->is_home = false;

while (have_posts()):
	the_post(); ?>
  <div class="article " data-image-url="<?php the_post_thumbnail_url(
  	"full"
  ); ?>" onclick="location.href='<?php the_permalink(); ?>'">
    <p class="tag"><?php
    $cat = get_the_category();
    echo $cat[0]->cat_name;
    ?></p>
<?php echo get_the_post_thumbnail($id, "thumbnail"); ?>
    <h6><?php the_title();
	/* заголовок */
	?></h6>
    <small><?php echo wp_trim_words(get_the_content(), 10);
	/* содержимое поста */
	?></small>
  </div>
    <?php
endwhile;
if (function_exists("wp_pagenavi")) {
	wp_pagenavi();
}

// функция постраничной навигации
?>
</div>
</div>
</section> 





<!-- <section>
<div class="blog">
<h2>Статьи по веб-дизайну и разработке</h2>
<nav class="extra-navigation">
<ul class="menu">
<li><a href="#" onclick="showEvery()">Все</a></li>
<li><a href="#" class="design" onclick="showDesign()">Дизайн</a></li>
<li><a href="#" class="dev" onclick="showDev()">Разработка</a></li>
<li><a href="#" class="prom"onclick="showProm()">Продвижение</a></li>
</ul>
</nav>
<div id="articles">
  <div class="article dev">
    <p class="tag">Разработка</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
<div class="article design">
  <p class="tag">Дизайн</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
<div class="article prom">
  <p class="tag">Продвижение</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
<div class="article dev">
  <p class="tag">Разработка</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
<div class="article dev">
<p class="tag">Разработка</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
<div class="article prom">
  <p class="tag">Продвижение</p>
<img src="http://sun9-12.userapi.com/c11351/u135645498/137910343/x_b3966547.jpg" alt="картинка статьи">
<h6>SEO продвижение сайта в Яндекс:</h6>
<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti eget erat ultricies in habitant risus etiam egestas et. Ac, neque, iaculis nec vulputate tempus hendrerit. Lacus, ipsum elit nibh fusce in vel. Et faucibus mauris, accumsan, elit.</small>
</div>
</div>
</div>
</section> -->
<?php get_footer(); ?>
<script>
var items_el = document.getElementById('articles');
var items = items_el.getElementsByClassName('article');
function showEvery(){
  for (var i=0; i<items.length; i++) {
    	items[i].style.display = 'block';
};
};
function showDesign(){
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains("design")) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
};
function showDev(){
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains("dev")) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
};
function showProm(){
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains("prom")) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
};
</script>
