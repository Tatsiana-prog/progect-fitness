//подключение карусeли
$(document).ready(function () {
	
	//находим обертку(разметку) для карусели
	const photofirstCarousel = $("#photo-carousel-1");

	//создаем карусель в элементе
	photofirstCarousel.owlCarousel({
		margin:30,
		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1.5
			},
			575:{
				items:2.2
			},
			767:{
				items:3		
			},
			991:{
				items:3		
			},
			1199:{
				items:4
			},
			
		}
	})

	//находим кнопки назад и вперед
	const btnPrev = $("#btn-left-first");
	const btnNext = $("#btn-right-first");

	btnPrev.click(function() {
		photofirstCarousel.trigger('prev.owl.carousel');

	});

	btnNext.click(function() {
		photofirstCarousel.trigger('next.owl.carousel');
	});

	
	//находим обертку(разметку) для карусели
	let photosecondCarousel = $("#photo-carousel-2");
	
	//создаем карусель в элементе
	photosecondCarousel.owlCarousel({
		margin:30,
		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1.3
			},
			575:{
				items:1.8
			},
			767:{
				items:1.6
			},
			1199:{
				items:3,
				loop:true
			},
		}
	})

	//находим кнопки назад и вперед
	let secPrev = $('#btn-left-second');
	let secNext = $('#btn-right-second');

		secPrev.click(function() {
		photosecondCarousel.trigger('prev.owl.carousel');
	});
		secNext.click(function () {
		photosecondCarousel.trigger('next.owl.carousel');
	});


//находим обертку(разметку) для карусели
var photoCarousel = $("#photo-carousel-3");
	
	$("#photo-carousel-3").owlCarousel({
		margin:30,
		loop:true,
		nav:true,
		navText: [' ',' '],
		responsiveClass:true,
		responsive:{
			0:{
				items:1.3				
			},
			575:{
				items:1.8
			},

			767:{
				items:2.3					
			},
			991:{
				items:2.8		
			},
			1199:{
				items:3				
			},
		}
	});
  });





  //подключение  формы
$('#form').validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},
		telephone: {
			required: true,
			minlength: 12
		},
	},
	messages: {
		name: {
			required: 'Введите имя',
			minlength: 'Имя должно иметь хотя-бы 2 буквы'
		},
		telephone: {
			required: 'Введите номер',
			minlength: 'Номер состоит из 12 цифр'
		},
	},
});

//подключение модального окна
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
});

// Находим ссылки внутри мобильной навигации
const modalLinks = document.querySelectorAll('.modal a');

// Обходим ссылки методом forEach
modalLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		modalIcon.classList.remove('modal-icon--active'); // Убираем активный класс у иконки моб. навигации
		modal.classList.remove('modal--active'); // Убираем активный класс у блока моб. навигации
	});
})




  