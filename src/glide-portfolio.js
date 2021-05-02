import Glide from '@glidejs/glide'

export default function () { 
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    peek: { before: 80, after: 150 },
    gap: 48,
    breakpoints: {
      890: {
        perView: 1
      },
      1160: {
        perView: 2
      },
      1280: {
        perView: 3
      }
    }
  }).mount()

  let portfolioCardArr = document.querySelectorAll(".portfolio-card")
  portfolioCardArr.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      card.style.backgroundImage = 'url('+card.dataset.imageUrl+')';
    })
    card.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      card.style.backgroundImage = 'none';
    })
  })
}