<?php
/**
 * Template Name: Homepage Template
 *
 * @package Underscoresme
 * @since Underscoresme 1.0
 */

get_header();

// include "front-page-blocks/main-block.php";
// ?>
 <div class="full-about-us">
<div class="wrap-for-about">
    <div class="description-for-about">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo mollis magna volutpat sagittis. Vivamus et dolor a velit commodo posuere. Sed dignissim volutpat lectus, non fermentum velit varius vitae. Proin non sem in mi ullamcorper sagittis. Donec et gravida purus, ut volutpat eros. Suspendisse sagittis, arcu eget vulputate gravida, arcu nunc eleifend velit, eu suscipit orci ex ut ante. Sed eget pulvinar dui, et pretium nunc. Donec condimentum libero in justo euismod scelerisque. Cras ultrices sit amet elit quis tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed posuere nec ex at efficitur. Aenean ultrices, elit id egestas pulvinar, diam dui accumsan enim, vitae varius ipsum nulla vel tellus.</p>
    </div>
    <div class="images-for-about">
    </div></div>
<div class="flex-about-us">
<?php
      $args = [
      	"post_type" => "teammates",
      	"publish" => true,
      ];
      query_posts($args);
      ?>
      <?php if (have_posts()):
      	while (have_posts()):
      		the_post(); ?>
  <div class="participant"><div class="participant-foto"><img src="<?php the_post_thumbnail_url('medium'); ?>"  alt="lorem"></img></div><p><?php the_title(); ?></p>
	<small><?php $search_text = get_the_excerpt();
$tags = array("<p>", "</p>");
$search_content = str_replace($tags, "", $search_text);
echo $search_content; ?></small></div> 
<?php
      	endwhile;
      else:
      	 ?><p>Сотрудников нет.</p>
      <?php
      endif; ?></div></div>
<?php
get_footer();
?>