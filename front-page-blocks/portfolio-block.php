<section class="portfolio-block">
  <h2 class="heading-for-services">Портфолио</h2>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <div class="portfolio-list glide__slides">
      <?php
      $args = [
      	"post_type" => "portfolio",
      	"publish" => true,
      ];
      query_posts($args);
      ?>
      <?php if (have_posts()):
      	while (have_posts()):
      		the_post(); ?>
        <div class="portfolio-card glide__slide" onclick="location.href='<?php the_permalink(); ?>'" onMouseOver="this.style.backgroundImage=`url('<?php the_post_thumbnail_url(
	"full"
); ?>')`"
   onMouseOut="this.style.backgroundImage='none'">
        <div class="portfolio-card__top"> 
          <h3><?php the_title(); ?></h3>
          <p><?php the_excerpt(); ?></p>
        </div> 
        <div class="portfolio-card__bottom"> 
          <a class="btn-block" href="<?php the_permalink(); ?>">
            <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg" class="go-btn">
              <path class="btn-circle" d="M69 35.8478C69 54.7138 53.7736 70.0003 35 70.0003C16.2264 70.0003 1 54.7138 1 35.8478C1 16.9818 16.2264 1.69531 35 1.69531C53.7736 1.69531 69 16.9818 69 35.8478Z" stroke="#080808" stroke-width="2"/>
              <path class="btn-arrow" d="M51.8257 36.5553C52.2162 36.1647 52.2162 35.5316 51.8257 35.141L45.4617 28.7771C45.0712 28.3866 44.4381 28.3866 44.0475 28.7771C43.657 29.1676 43.657 29.8008 44.0475 30.1913L49.7044 35.8481L44.0475 41.505C43.657 41.8955 43.657 42.5287 44.0475 42.9192C44.4381 43.3097 45.0712 43.3097 45.4617 42.9192L51.8257 36.5553ZM19.3423 36.8481L51.1186 36.8481L51.1186 34.8481L19.3423 34.8481L19.3423 36.8481Z" fill="#080808"/>
            </svg>
          </a> 
        </div>
        </div>
              <?php
      	endwhile;
      else:
      	 ?>
        <p>Записей портфолио нет.</p>
      <?php
      endif; ?>
      </div>
      <div class="glide__arrows left" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <
        </button>
      </div>
      <div class="glide__arrows right" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          >
        </button>
      </div> 
    </div>   
  </div>
</div>