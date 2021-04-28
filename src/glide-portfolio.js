import Glide from '@glidejs/glide'

export default function () { 
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    peek: { before: 80, after: 150 },
    gap: 48,
    breakpoints: {
      790: {
        perView: 1
      },
      1060: {
        perView: 2
      },
      1280: {
        perView: 3
      }
    }
  }).mount()
}