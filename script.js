'use strict';

const heroSection = document.querySelector('.hero-section');
const nav = document.querySelector('.navigator');
const navLinks = document.querySelector('.nav__links');
const btnVideo = document.querySelector('.btn__video');
const btnStarted = document.querySelector('.btn__get-started');
const videoContainer = document.querySelector('.video-container');
const arrowUp = document.querySelector('.go-up-container');

const categoriesSection = document.querySelector('.section-categories');
const categoriesList = document.querySelector('.categories-list');
const subjectcontainer = document.querySelector('.subject-container');

const featureSection = document.querySelector('.section-about');

const teacherSection = document.querySelector('.section-teachers');

const locationSection = document.querySelector('.section-location');
const mapSidebar = document.querySelector('.map-sidebar');
const branchsList = document.querySelector('.branches-list');
const btnPosition = document.querySelector('.btn__check');

const sectionQuestion = document.querySelector('.question-section');

const envelopeWrapper = document.querySelector('.envelope-wrapper');
const question = document.querySelector('.question__input');
const labelQuestion = document.querySelector('.form__label--question');
const form = document.querySelector('.question-form');
const envelope = document.querySelector('.envelope');
const lidContainer = document.querySelector('.lid-container');
const btnSubmit = document.querySelector('.form__btn--submit');
const btnClear = document.querySelector('.form__btn--clear');
const reviewdQuestion = document.querySelector('.selected-question');
const questionsList = document.querySelector('.questions-list');
const asideWrapper = document.querySelector('.asked-questions__wrapper');

const testimonial = document.querySelector('.testimonials-slider');
const testimonialFaces = document.querySelector('.testimonials-faces');

// async function loadAllData() {
//   const response = await fetch('json/data.json');

//   if (response.ok) {
//     const allData = await response.json();
//     // const questionsList = document.getElementById('questionsList');

//     console.log(allData);
//   } else {
//     alert('Failed to load questions.');
//   }
// }
// loadAllData();

//_________________ OVERLAYS ________________
document.documentElement.addEventListener('click', e => {
  if (
    !e.target.classList.contains('btn') &&
    !videoContainer.classList.contains('video--hidden')
  ) {
    videoContainer.classList.add('video--hidden');
    videoContainer.innerHTML = '';
  }
  if (
    !e.target.classList.contains('btn') &&
    !e.target.closest('.subject-wrapper')
  ) {
    subjectcontainer.classList.add('hidden');
  }
});

// ________________ VEDIO ___________________

btnVideo.addEventListener('click', () => {
  const html = `
      <video controls autoplay>
          <source
            src="images/video/Untitled video - Made with Clipchamp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
  `;

  videoContainer.insertAdjacentHTML('afterbegin', html);
  videoContainer.classList.remove('video--hidden');
});

// ________________ HERO SECTION_____________________

const heroImagesColumns = document.querySelectorAll('.column');

const heroObserver = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      heroImagesColumns.forEach(el => el.classList.remove('hidden'));
      nav.classList.add('sticky');
      arrowUp.classList.remove('hidden');
      if (nav.classList.contains('list__open'))
        nav.classList.remove('list__open');
    } else {
      heroImagesColumns.forEach(el => el.classList.add('hidden'));
      nav.classList.remove('sticky');
      arrowUp.classList.add('hidden');
    }
  },
  {
    root: null,
    threshold: 0.7,
  }
);

heroObserver.observe(heroSection);

const sectionObserver = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    const sectionInner = [...entry.target.querySelectorAll('.section-column')];

    if (
      entry.isIntersecting &&
      entry.boundingClientRect.top > entry.rootBounds.top
    ) {
      sectionInner.forEach(part => part.classList.remove('hidden'));
    } else if (
      !entry.isIntersecting &&
      entry.boundingClientRect.top > entry.rootBounds.top
    ) {
      sectionInner.forEach(part => part.classList.add('hidden'));
    } else if (entry.isIntersecting && document.querySelectorAll('hidden')) {
      sectionInner.forEach(part => part.classList.remove('hidden'));
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

// arrow up
arrowUp.addEventListener('click', function (e) {
  e.preventDefault();
  const id = this.querySelector('.go-up').getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// ________________ CATIGORIES SECTION_____________________
sectionObserver.observe(categoriesSection);

const insertBooks = function () {
  books.forEach(book => {});
};

categoriesList.addEventListener('click', function (e) {
  subjectcontainer.innerHTML = '';
  if (!e.target.closest('.item-btn')) return;
  const title = e.target.textContent.toLowerCase();
  console.log(title);

  const book = books.filter(el => el.id === title) ?? {
    bookName: 'Not Found',
    description:
      'something went wrong while getting your book if the problem keep happening for you contact us',
    author: 'the center team',
    link: undefined,
  };

  console.log(book);

  book.forEach(book => {
    const html = `
    <div class="subject-wrapper">
              <h2 class="heading-secondary subject-heading">${
                book.bookName
              }</h2>
              <p class="paragraph subject-summary">${book.description}</p>
              <div class="download-container">
                <span class="subject-author">👨‍🏫 ${book.author}</span>
                <a href="${
                  book.link
                }" target="_blank" class="btn btn__download">${
      book.link ? 'Download' : 'no Link'
    }</a>
              </div>
          </div>
    `;

    subjectcontainer.insertAdjacentHTML('afterbegin', html);
    subjectcontainer.classList.remove('hidden');
  });
});

// ________________ FEATURES SECTION_____________________
sectionObserver.observe(featureSection);

// ________________ FEATURES SECTION_____________________
sectionObserver.observe(teacherSection);

// ________________ LOCATION SECTION_____________________
sectionObserver.observe(locationSection);
// ________________ LOCATION SECTION_____________________
sectionObserver.observe(sectionQuestion);

// Display branches
const displayBranches = function (branches) {
  branches.forEach(branch => {
    const html = `
    <li class="branch section-column" data-branch-num="${branch.branchNum}">
        <h3 class="heading-ternary">
          ${branch.address}
        </h3>
        <span class="city">${
          branch.city[0].toUpperCase() + branch.city.slice(1)
        }</span>
        <a class="branch-number" href="tel:${branch.phone}">📞:<span>${
      branch.phone
    } </span></a>
      </li>
    `;
    branchsList.insertAdjacentHTML('afterbegin', html);
  });

  [...branchsList.children].forEach((el, i) => {
    el.style.transition = `transform ${(i + 1) * 0.5}s ease-out`;
  });
};

let map;

// Render the map
const loadMap = function () {
  map = L.map('map', {
    center: { lat: 30.138804491832616, lng: 29.51098274231921 },
    zoom: 6,
    scrollWheelZoom: false,
    doubleClickZoom: false, // Disable zooming on double-click
    touchZoom: false, // Disable pinch-to-zoom on touch devices
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Render the branches on map
  branches.forEach(branch => {
    const customIcon = L.icon({
      iconUrl: 'images/marker.png',
      iconSize: [30, 40],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
    L.marker(branch.coords, { icon: customIcon })
      .addTo(map)
      .bindPopup(`${branch.city}`)
      .openPopup();
  });
};

const getUserLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(findBranch, () => {
      alert('Pleace click allow');
    });
  } else {
    alert(`Your browser doesn't support geolocation`);
  }
};

const findBranch = function (position) {
  const userPosition = L.latLng(
    position.coords.latitude,
    position.coords.longitude
  );

  let distance = Infinity;
  let nearstBranch;
  branches.forEach(branch => {
    const branchPosition = L.latLng(branch.coords.lat, branch.coords.lng);
    const currDistance = userPosition.distanceTo(branchPosition) / 1000;

    if (currDistance < distance) {
      nearstBranch = branch;
      distance = currDistance;
    }
  });
  mapSidebar.querySelector('.selected')?.classList.remove('selected');
  mapSidebar
    .querySelector(`.branch[data-branch-num="${nearstBranch.branchNum}"]`)
    .classList.add('selected');

  map.flyTo(nearstBranch.coords, 17, {
    animated: true,
    duration: 3,
  });
};

// branch navigation
mapSidebar.addEventListener('click', function (e) {
  mapSidebar.querySelector('.selected')?.classList.remove('selected');
  if (e.target.closest('.branch')) {
    const branchEl = e.target.closest('.branch');
    branchEl.classList.add('selected');
    const location = branches.find(
      branch => branch.branchNum === Number(branchEl.dataset.branchNum)
    );
    map.flyTo(location.coords, 17, {
      animated: true,
      duration: 3,
    });
  }
});

// check nearest branch
btnPosition.addEventListener('click', getUserLocation);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
// ______________ fetching questions __________________

const url = 'https://thecenter.runasp.net/api/questions';
let questions;

async function submitQuestion() {
  // const questionContent = document.getElementById('questionContent').value;
  const questionContent = question.value;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      questionContent: questionContent,
    }),
  });

  if (response.ok) {
    alert('Question submitted successfully!');
    question.value = '';
    loadAnsweredQuestions();
  } else {
    alert('Failed to submit the question.');
  }
}

async function loadAnsweredQuestions() {
  const response = await fetch(url);

  if (response.ok) {
    questions = await response.json();
    // const questionsList = document.getElementById('questionsList');

    questionsList.innerHTML = '';
    questions.forEach((el, i) => {
      const html = `
      <li class="question--row" data-question-num="${i}">
              <h3 class="heading-ternary question__title">
                ${el.questionContent}
              </h3>
              <span class="preview" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M132.94,231.39A8,8,0,0,1,128,224V184H72a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h56V32a8,8,0,0,1,13.66-5.66l96,96a8,8,0,0,1,0,11.32l-96,96A8,8,0,0,1,132.94,231.39ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z"
                  />
                </svg>
              </span>
              <span class="question__meta-data">
                <span question__date> 📅 ${el.questionCreatedAt} </span>
                <span question__teacher> 👨‍🏫 the center team </span>
              </span>
            </li>
      `;
      questionsList.insertAdjacentHTML('afterbegin', html);
    });
  } else {
    alert('Failed to load questions.');
  }
}

const displayFullQuestion = function (currentQuestion) {
  reviewdQuestion.innerHTML = '';
  const html = `
  <h2 class="heading-secondary">
              ${currentQuestion.questionContent}
            </h2>
            <p class="question-answer">
            ${currentQuestion.questionAnswer}
            </p>
            <button class="btn btn__new-question btn__active">
              Ask new questionn
            </button>
  `;
  reviewdQuestion.insertAdjacentHTML('afterbegin', html);
};

// make sure the input is not empty
const inputValidation = () => (question.value != '' ? true : false);

// shrink form for animation
const shrinkForm = () => {
  form.classList.add('shrink--form');
};

// function holding the initial state of the form section
const envlopeInit = () => {
  form.classList.remove(
    'shrink--form',
    'form__wrapped',
    'hidden',
    'form--disabled'
  );
  labelQuestion.classList.remove('form__label--sending');
  labelQuestion.textContent = 'Your question...?';
  envelope.classList.add('envelope__hidden');
  envelope.classList.remove('envelope__animation');
  lidContainer.classList.remove('lid__animation');
  asideWrapper.classList.remove('asked-questions__initial--position');
  reviewdQuestion.classList.add(
    'form__wrapped',
    'selected-question--initial-position'
  );

  question.value = '';
};

// listen for a submit attempt
btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  // making sure to remove the error effect
  question.classList.remove('input--missing');

  if (!inputValidation()) {
    question.classList.add('input--missing');
  } else {
    // setting the scene for the animation

    const distance =
      envelopeWrapper.getBoundingClientRect().top -
      sectionQuestion.getBoundingClientRect().top;

    shrinkForm();
    labelQuestion.classList.add('form__label--sending');
    labelQuestion.textContent = 'Sending Question...';
    envelope.classList.remove('envelope__hidden');
    // disabling the form when moving it
    form.classList.add('form--disabled');
    document.documentElement.style.setProperty(
      '--form-transform-down',
      `${+distance}px`
    );
    // waiting for the scene to be set before starting animation
    setTimeout(() => {
      // moving down the form towards the envelope
      form.classList.add('hidden');

      // waiting before closing the envelope lid until the form reaches it
      setTimeout(() => {
        lidContainer.classList.add('lid__animation');

        // hiding the form inside the form but waiting for the lid to close first
        setTimeout(() => {
          form.classList.add('form__wrapped');
          envelope.classList.add('envelope__animation');
          submitQuestion();
        }, 700);
      }, 700);
    }, 1500);
  }
});

btnClear.addEventListener('click', e => {
  e.preventDefault();
  question.value = '';
  question.focus();
});

reviewdQuestion.addEventListener('click', e => {
  if (e.target.classList.contains('btn__new-question')) {
    form.classList.remove('form__fade');
    envlopeInit();
    question.focus();
  }
});

questionsList.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.question--row');
  if (clickedBtn) {
    const { questionNum } = clickedBtn.dataset;
    // hide previously previewd question
    reviewdQuestion.classList.add('selected-question--initial-position');
    setTimeout(() => {
      displayFullQuestion(questions[questionNum]);
      form.classList.add('hidden', 'form__wrapped');
      reviewdQuestion.classList.remove(
        'form__wrapped',
        'selected-question--initial-position'
      );
    }, 500);
  }
});

const envelopeObserver = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      envlopeInit();
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
envelopeObserver.observe(envelope);

//__________________ TESTIMONIALS SECTION __________________

const testimonialIcon = document.querySelector('.testimonials-icon');

const renderComments = function (comments) {
  comments.forEach((comment, i) => {
    const html = `
    <div class="testimonial" data-comment-num="${i + 1}">
      <div class="testimonial-content paragraph">
        ${comment.content}
      </div>
      <span class="testimonial-author">${comment.author}</span>
      <span class="testimonial-author__title">${comment.title}</span>
    </div>
    `;

    // renderning the comments after the quotes icon
    testimonialIcon.insertAdjacentHTML('afterend', html);
  });
};

const rendercommentsAuthors = function (comments) {
  comments.forEach((comment, i) => {
    const html = `
  <img
    class="testimonial-face" 
    data-comment-num = "${i + 1}"
    src="${comment.image}"
    alt="comment author"
  />
  `;

    testimonialFaces.insertAdjacentHTML('afterbegin', html);
  });
};

const swapingComments = function (current) {
  document
    .querySelector('.current-comment')
    ?.classList.remove('current-comment');

  document
    .querySelector(`.testimonial[data-comment-num="${current}"]`)
    .classList.add('current-comment');
};

const selectingFace = function (current) {
  document.querySelector('.selected-face')?.classList.remove('selected-face');

  document
    .querySelector(`.testimonial-face[data-comment-num="${current}"]`)
    .classList.add('selected-face');
};

let swapingTimer;
let currentCommentNum = 1;

const testimonialObserver = new IntersectionObserver(
  entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      swapingTimer = setInterval(() => {
        currentCommentNum++;
        let commentnum;
        if (currentCommentNum <= commentsArr.length)
          commentnum = currentCommentNum;
        else commentnum = currentCommentNum = 1;
        swapingComments(commentnum);
        selectingFace(commentnum);
      }, 3000);
    } else {
      clearInterval(swapingTimer);
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);
testimonialObserver.observe(testimonial);

testimonialFaces.addEventListener('click', function (e) {
  if (e.target.classList.contains('testimonial-face')) {
    const commentnum = e.target.dataset.commentNum;
    swapingComments(commentnum);
    selectingFace(commentnum);
    currentCommentNum = commentnum;
  }
});

// _________________ animating sections __________________________
const animatedSections = document.querySelectorAll('.section-column');
animatedSections.forEach(sec => sec.classList.add('hidden'));

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//_____________________LINKS ANIMATION__________________
navLinks.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link')) return;
  this.querySelectorAll('.link').forEach(child => {
    if (child !== e.target) child.style.color = '#888';
  });
});

navLinks.addEventListener('mouseout', function () {
  this.querySelectorAll('.link').forEach(link => (link.style.color = ''));
});

//_____________________SMOOTH SCROLLING__________________
navLinks.addEventListener('click', function (e) {
  if (e.target.classList.contains('link__page')) return;
  e.preventDefault();
  if (
    !e.target.classList.contains('link') &&
    !e.target.classList.contains('btn')
  )
    return;

  const id = e.target.getAttribute('href');
  const targetSection = document.querySelector(id);
  targetSection.scrollIntoView({ behavior: 'smooth' });
  // list in smaller device
  nav.classList.remove('list__open');
});

btnStarted.addEventListener('click', function (e) {
  e.preventDefault();

  const id = e.target.getAttribute('href');
  const targetSection = document.querySelector(id);
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

//_____________________INITIAL FUNCTION__________________

const init = function () {
  displayBranches(branches);
  loadMap();
  loadAnsweredQuestions();
  renderComments(commentsArr);
  rendercommentsAuthors(commentsArr);
  selectingFace(1);
  swapingComments(1);
};
init();

//_____________________RESPONSIVE ACTIONS__________________

const btnOpenNav = document.querySelector('.btn__open-list');
const openNavIcon = document.querySelector('.open__list-icon');
const closeNavIcon = document.querySelector('.close__list-icon');

btnOpenNav.addEventListener('click', function () {
  nav.classList.toggle('list__open');
});
