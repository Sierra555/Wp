$(function () {
    $('.slider__box').slick({ prevArrow:'<svg class="slick__prev" width="101" height="8" viewBox="0 0 101 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 4.35355C0.451187 4.15829 0.451187 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53554 0.464466C4.7308 0.659728 4.7308 0.976311 4.53554 1.17157L1.70711 4L4.53554 6.82843C4.7308 7.02369 4.7308 7.34027 4.53554 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM101 4.5H1V3.5H101V4.5Z" fill="white"/></svg>',
     nextArrow:'<svg   class="slick__next" width="101" height="8" viewBox="0 0 101 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.354 4.35355C100.549 4.15829 100.549 3.84171 100.354 3.64645L97.1716 0.464466C96.9763 0.269204 96.6597 0.269204 96.4645 0.464466C96.2692 0.659728 96.2692 0.976311 96.4645 1.17157L99.2929 4L96.4645 6.82843C96.2692 7.02369 96.2692 7.34027 96.4645 7.53553C96.6597 7.7308 96.9763 7.7308 97.1716 7.53553L100.354 4.35355ZM0 4.5H100V3.5H0L0 4.5Z" fill="white"/></svg>',
    
    });
//     $('.slider__item-inner').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 	});
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
   
 });
