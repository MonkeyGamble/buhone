const desktopWidth = window.innerWidth > 850;

const header_content = document.querySelector('.header_content');

const header_h = [
	'Бухгалтерские услуги <br>в вашем городе',
	'Бухгалтерские услуги <br>в городе № 2',
	'Бухгалтерские услуги <br>в городе № 3',
	'Бухгалтерские услуги <br>в городе № 4',
];

const header_h_mobile = [
	'Бухгалтерские услуги <br>в вашем любимом <br>городе',
	'Бухгалтерские услуги <br>в вашем любимом <br>городе № 2',
	'Бухгалтерские услуги <br>в вашем любимом <br>городе № 3',
	'Бухгалтерские услуги <br>в вашем любимом <br>городе № 4',
];

const h2_item = document.createElement('h2');

function updateHeaderScreenWidth() {
	h2_item.innerHTML = desktopWidth ? header_h[0] : header_h_mobile[0];
}
updateHeaderScreenWidth();
window.addEventListener('resize', updateHeaderScreenWidth);

header_content.append(h2_item);

const header_button = document.createElement('div');
header_button.className = 'header_button';
header_button.innerText = 'Наша презентация';
header_content.append(header_button);

const slider = document.createElement('div');
slider.className = 'slider';

const triggers = document.createElement('div');
triggers.className = 'triggers';

const leftBtn = document.createElement('div');
leftBtn.className = 'left_button';
const leftArrow = document.createElement('img');
leftArrow.src = './media/left.png';
leftArrow.alt = 'left arrow';
leftBtn.append(leftArrow);

const rightBtn = document.createElement('div');
rightBtn.className = 'right_button active';

const rightArrow = document.createElement('img');
rightArrow.src = './media/right.png';
rightArrow.alt = 'right arrow';
rightBtn.append(rightArrow);

triggers.append(leftBtn, rightBtn);

const slider_btns = document.createElement('div');
slider_btns.className = 'slider_btns';

for (let i = 0; i < header_h.length; i++) {
	const round_btn = document.createElement('button');
	round_btn.className = 'round_btn';
	slider_btns.append(round_btn);
}

slider.append(slider_btns, triggers);
header_content.append(slider);

let h2_index = 0;

rightBtn.onclick = () => {
	h2_item.style.opacity = 0;
	setTimeout(() => {
		if (h2_index !== header_h.length - 1) {
			h2_index++;
		} else {
			h2_index = 0;
		}
		h2_item.innerHTML = desktopWidth
			? header_h[h2_index]
			: header_h_mobile[h2_index];
		h2_item.style.opacity = 1;
		rightBtn.classList.add('active');
		leftBtn.classList.remove('active');
		changeActiveBtn();
	}, 500);
};

leftBtn.onclick = () => {
	h2_item.style.opacity = 0;
	setTimeout(() => {
		if (h2_index !== 0) {
			h2_index--;
		} else {
			h2_index = header_h.length - 1;
		}
		h2_item.innerHTML = desktopWidth
			? header_h[h2_index]
			: header_h_mobile[h2_index];
		h2_item.style.opacity = 1;
		leftBtn.classList.add('active');
		rightBtn.classList.remove('active');
		changeActiveBtn();
	}, 500);
};

function changeActiveBtn() {
	const allBtns = document.querySelectorAll('.round_btn');
	allBtns.forEach((elem, index) => {
		if (h2_index === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}

changeActiveBtn();

// CLIENTS section

const clients = [
	'./media/microsoft.png',
	'./media/amazon.png',
	'./media/google.png',
	'./media/wallmart.png',
	'./media/antivir.png',
	'./media/carecredit.png',
	'./media/disney.png',
	'./media/hyatt.png',
	'./media/hyundai.png',
	'./media/redbull.png',
	'./media/stihl.png',
	'./media/thermaltake.png',
	'./media/truman-state-university.png',
	'./media/vichy.png',
	'./media/weiler.png',
	'./media/bolt.png',
];

const clients_content = document.querySelector('.clients_content');
const clients_slider = document.createElement('div');
clients_slider.className = 'clients_slider';

for (let elem of clients) {
	const client_slide = document.createElement('img');
	client_slide.src = elem;
	client_slide.alt = 'client';
	client_slide.className = 'client_slide';

	clients_slider.append(client_slide);
}
clients_content.append(clients_slider);

// SLIDER
const allSlides = document.querySelectorAll('.client_slide');

function updateClientsSliderScreenWidth() {
	for (let i = 0; i < allSlides.length; i++) {
		if (desktopWidth) {
			if (i < 4) {
				allSlides[i].style.display = 'block';
			} else {
				allSlides[i].style.display = 'none';
			}
		} else {
			allSlides[i].style.display = i === 0 ? 'block' : 'none';
		}
	}
}
updateClientsSliderScreenWidth();
window.addEventListener('resize', updateClientsSliderScreenWidth);

// BUTTONS
const clients_bottom_content = document.createElement('div');
clients_bottom_content.className = 'clients_bottom_content content_line';
const clients_triggers = document.createElement('div');
clients_triggers.className = 'clients_triggers content_line';

const clients_leftBtn = document.createElement('div');
clients_leftBtn.className = 'clients_left_button';
const clients_leftArrow = document.createElement('img');
clients_leftArrow.src = './media/left.png';
clients_leftArrow.alt = 'left arrow';
clients_leftBtn.append(clients_leftArrow);

const clients_rightBtn = document.createElement('div');
clients_rightBtn.className = 'clients_right_button active';
const clients_rightArrow = document.createElement('img');
clients_rightArrow.src = './media/right.png';
clients_rightArrow.alt = 'right arrow';
clients_rightBtn.append(clients_rightArrow);

const clients_slider_btns = document.createElement('div');
clients_slider_btns.className = 'clients_slider_btns';

for (let i = 0; i < clients.length; i++) {
	const clients_round_btn = document.createElement('button');
	clients_round_btn.className = 'clients_round_btn';
	clients_slider_btns.append(clients_round_btn);
	if (i >= 4) {
		clients_round_btn.style.display = 'none';
	}
}

clients_triggers.append(clients_leftBtn, clients_rightBtn);
clients_bottom_content.append(clients_slider_btns, clients_triggers);
clients_content.append(clients_slider, clients_bottom_content);

let slider_index = 0;
// const card_width = 1110;

// console.log('Slider index beforeclick:', slider_index);

clients_rightBtn.onclick = () => {
	if (desktopWidth) {
		if (slider_index + 4 < clients.length) {
			slider_index += 4;
		} else {
			slider_index = 0;
		}
	} else {
		if (slider_index < clients.length - 1) {
			slider_index++;
		} else {
			slider_index = 0;
		}
	}
	// console.log('Slider index click:', slider_index);
	clients_rightBtn.classList.add('active');
	clients_leftBtn.classList.remove('active');
	updateSlider();
	changeActiveClientBtn();
};

clients_leftBtn.onclick = () => {
	if (desktopWidth) {
		if (slider_index - 4 >= 0) {
			slider_index -= 4;
		} else {
			slider_index = clients.length - 4;
		}
	} else {
		if (slider_index > 0) {
			slider_index--;
		} else {
			slider_index = clients.length - 1;
		}
	}

	// console.log('Slider index after:', slider_index);
	clients_leftBtn.classList.add('active');
	clients_rightBtn.classList.remove('active');
	updateSlider();
	changeActiveClientBtn();
};

function updateSlider() {
	for (let i = 0; i < allSlides.length; i++) {
		if (desktopWidth) {
			if (i >= slider_index && i < slider_index + 4) {
				allSlides[i].style.display = 'block';
			} else {
				allSlides[i].style.display = 'none';
			}
		} else {
			allSlides[i].style.display = i === slider_index ? 'block' : 'none';
		}
	}
}

function changeActiveClientBtn() {
	const allBtns = document.querySelectorAll('.clients_round_btn');
	const activeIndex = Math.floor(slider_index / (desktopWidth ? 4 : 1));
	allBtns.forEach((elem, index) => {
		if (activeIndex === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}

changeActiveClientBtn();

// REVIEWS SECTION

const reviews = [
	{
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		img: './media/ivanova.png',
		name: 'Екатерина Иванова',
		occupation: 'Директор ООО “Раз-два”',
	},
	{
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nihil ea ex dolores. Quos quo aspernatur possimus perspiciatis reprehenderit debitis corporis eius, deleniti, voluptate assumenda dolorem ad libero explicabo laborum qui aperiam aliquid quam repudiandae distinctio nisi voluptates hic quibusdam. Minus quas voluptate tempora ullam quam eaque iste quaerat a.',
		img: './media/photo_1.png',
		name: 'Наталья Петрова',
		occupation: 'Директор ООО "Три-Четыре"',
	},
	{
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim sit maxime! Fugiat cum aspernatur exercitationem dolorum quia repellendus autem fugit, rerum harum et saepe eaque ipsum similique quae beatae ut voluptatem delectus assumenda. Eum blanditiis culpa suscipit odio, eius consequuntur ratione, ducimus, optio facilis illo earum quae magnam dolorum!',
		img: './media/photo_2.png',
		name: 'Виктор Кудимов',
		occupation: 'Директор ООО "Пять-Шесть"',
	},
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur libero dolorem nihil amet odit impedit repellat id, velit blanditiis numquam suscipit explicabo porro assumenda repudiandae facere necessitatibus rem tenetur animi dolores laboriosam molestias, eius illum totam! Illo fugiat similique cum molestias fuga sint iusto, nam quae laborum, adipisci quia quidem!',
		img: './media/photo_3.png',
		name: 'Виктория Самойлова',
		occupation: 'Директор ООО "Семь-Восемь"',
	},
];

const reviews_container = document.querySelector('.reviews');
const review_block = document.querySelector('.review_block');

const review_content = document.createElement('div');
review_content.className = 'review_content';

const text = document.createElement('p');
text.innerText = reviews[0].text;

review_content.append(text);

if (desktopWidth) {
	const review_sign = document.createElement('div');
	review_sign.className = 'review_sign';
	const photo = document.createElement('img');
	photo.alt = 'profile_photo';
	photo.src = reviews[0].img;
	const sign = document.createElement('p');
	const sign_span = document.createElement('span');
	sign_span.innerText = reviews[0].occupation;
	sign.append(reviews[0].name, ' ', sign_span);
	review_sign.append(photo, sign);
	review_content.append(review_sign);
}

review_block.append(review_content);

const review_slider = document.createElement('div');
review_slider.className = 'review_slider';

const review_triggers = document.createElement('div');
review_triggers.className = 'review_triggers';

const review_leftBtn = document.createElement('div');
review_leftBtn.className = 'review_left_button';
const review_leftArrow = document.createElement('img');
review_leftArrow.src = './media/left.png';
review_leftArrow.alt = 'left arrow';
review_leftBtn.append(review_leftArrow);

const review_rightBtn = document.createElement('div');
review_rightBtn.className = 'review_right_button active';
const review_rightArrow = document.createElement('img');
review_rightArrow.src = './media/right.png';
review_rightArrow.alt = 'right arrow';
review_rightBtn.append(review_rightArrow);

const review_btns = document.createElement('div');
review_btns.className = 'review_btns';

for (let i = 0; i < reviews.length; i++) {
	const review_round_btn = document.createElement('button');
	review_round_btn.className = 'review_round_btn';
	review_btns.append(review_round_btn);
	if (i >= 4) {
		review_round_btn.style.display = 'none';
	}
}
review_triggers.append(review_leftBtn, review_rightBtn);
review_slider.append(review_btns, review_triggers);
reviews_container.append(review_slider);

let review_index = 0;

review_rightBtn.onclick = () => {
	if (review_index !== reviews.length - 1) {
		review_index++;
	} else {
		review_index = 0;
	}
	review_rightBtn.classList.add('active');
	review_leftBtn.classList.remove('active');
	nextReview(review_index);
	changeActiveReviewBtn();
};

review_leftBtn.onclick = () => {
	if (review_index !== 0) {
		review_index--;
	} else {
		review_index = reviews.length - 1;
	}
	review_rightBtn.classList.remove('active');
	review_leftBtn.classList.add('active');
	nextReview(review_index);
	changeActiveReviewBtn();
};

function nextReview(index) {
	const review = reviews[index];
	text.innerText = review.text;
	if (desktopWidth) {
		let review_sign = document.querySelector('.review_sign');
		if (!review_sign) {
			review_sign = document.createElement('div');
			review_sign.className = 'review_sign';
		} else {
			review_sign.innerHTML = '';
		}
		const photo = document.createElement('img');
		photo.alt = 'profile_photo';
		photo.src = review.img;
		const sign = document.createElement('p');
		const sign_span = document.createElement('span');
		sign_span.innerText = review.occupation;
		sign.innerText = review.name + ' ';
		sign.append(sign_span);
		review_sign.append(photo, sign);
		review_content.append(text, review_sign);
	} else {
		review_sign.innerHTML = '';
		review_content.append(text);
	}
}

function changeActiveReviewBtn() {
	const allReviewBtns = document.querySelectorAll('.review_round_btn');
	allReviewBtns.forEach((elem, index) => {
		if (review_index === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}
changeActiveReviewBtn();

//BURGER MENU

const burger_menu = document.querySelector('.fa-solid');
const nav_list = document.querySelector('nav');

let setBurgerMenu = false;

burger_menu.onclick = () => {
	burgerMenuHandler();
};

function burgerMenuHandler() {
	if (setBurgerMenu) {
		burger_menu.classList.remove('active');
		nav_list.classList.remove('active');
		nav_list.style.height = 'auto';
		nav_list.style.overflow = 'unset';
		setTimeout(() => {
			nav_list.style.display = 'none';
		}, 450);
	} else {
		burger_menu.classList.add('active');
		nav_list.classList.add('active');
		nav_list.style.height = '200px';
		nav_list.style.overflow = 'hidden';
		nav_list.style.display = 'block';
	}
	setBurgerMenu = !setBurgerMenu;
}

window.onresize = () => {
	if (!desktopWidth) {
		if (setBurgerMenu) {
			nav_list.classList.add('active');
		} else {
			nav_list.classList.remove('active');
		}
	}

	updateHeaderScreenWidth();
	updateClientsSliderScreenWidth();
	updateSlider();
};
