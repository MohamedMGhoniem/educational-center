'use strict';

class member {
  constructor(member, role, linkedin, github) {
    this.member = member;
    this.role = role;
    this.linkedin = linkedin;
    this.github = github;

    this.#setName();
  }

  #setName() {
    this.member = this.member
      .split(' ')
      .map(el => el[0].toUpperCase() + el.slice(1))
      .join(' ');
    console.log(this.member);
  }
}

const desktopTeam = [
  {
    member: 'Yousef Ahmed',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/yousef-ahmed-a683242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/youssefkhedr',
  },
  {
    member: 'Renad Alshooni',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/renad-alshooni-3a05792a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/RenadAlshooni',
  },
  {
    member: 'Aya Ahmed',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/aya-ahmed-03507925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Aya-Ahmeed',
  },
  {
    member: 'Khaled Mostafa',
    role: 'desktop',
    linkedin: 'https://www.linkedin.com/in/khaled-mostafa-jr',
    github: 'https://github.com/khaledrokaya',
  },
  {
    member: 'Aya El-Agamy',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/aya-el-agamy-826124255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/elagamy257',
  },
  {
    member: 'Aya El-Saeed',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/aya-elsaeed-560b742a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Aya-Elsaeed',
  },
  {
    member: 'Alaa Rehab',
    role: 'desktop',
    linkedin:
      'https://www.linkedin.com/in/alaa-rehab-725555251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Alaarhb',
  },

  {
    member: 'Nour Salem',
    role: 'desktop',
    linkedin: 'https://www.linkedin.com/thisuserdoesnotexist123456789',
    github: 'https://github.com/nourrsalem1',
  },

  {
    member: 'Nadin Ehab',
    role: 'design',
    linkedin:
      'https://www.linkedin.com/in/nadin-ehab-17b0202a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/thisuserdoesnotexist123456789',
  },
  {
    member: 'Ahmed Roshdy',
    role: 'design',
    linkedin: 'https://www.linkedin.com/in/ahmed-roshdy-82103a2a5/',
    github: 'https://github.com/thisuserdoesnotexist123456789',
  },
  {
    member: 'Mohamed Ghoniem',
    role: 'frontend',
    linkedin: 'https://www.linkedin.com/in/mohamed-ghoniem-96b307285/',
    github: 'https://github.com/MohamedMGhoniem',
  },
  {
    member: 'Mohamed Shosha',
    role: 'backend',
    linkedin: 'https://www.linkedin.com/in/mohamed-shosha-994803273/',
    github: 'https://github.com/MOHAMED22SHOSHA',
  },
  {
    member: 'Ahmed Selim',
    role: 'backend',
    linkedin: 'https://www.linkedin.com/in/ahmed-selim-627165273',
    github: 'https://github.com/ahmedselim-10',
  },
];

//////////////////////////////////////////
// _______________ COMMENTS _________________

class comment {
  constructor(content, author, title, image) {
    this.content = content;
    this.author = author;
    this.title = title;
    this.image = image;
  }
}

const comment1 = new comment(
  "The instructors here are fantastic! They break down complex topics into manageable steps, and their dedication has significantly boosted my confidence. I can't recommend this place enough!",
  'James Wilson',
  'Sophomore, 2nd Year',
  'images/faces/face-1.jpg'
);

const comment2 = new comment(
  'The learning environment here is unmatched. You can tell that the staff is passionate about helping students succeed. The support I’ve received has been truly invaluable.',
  'John Smith',
  'Freshman, 1st Year',
  'images/faces/face-2.jpg'
);

const comment3 = new comment(
  'This educational center has completely transformed the way I approach studying. The personalized attention and structured lessons have helped me tackle even the most daunting subjects.',
  'Ethan Davis',
  'Junior, 3rd Year',
  'images/faces/face-3.jpg'
);

const comment4 = new comment(
  'Before joining, I struggled a lot with keeping up in my courses. The practical methods and constant guidance here have not only improved my grades but also my love for learning.',
  'Michael Brown',
  'Senior, 4th Year',
  'images/faces/face-4.jpg'
);

const comment5 = new comment(
  "The teachers are incredibly knowledgeable and approachable. No matter how many questions I ask, they always have the patience to explain things clearly. It's a game-changer for any student.",
  'Daniel Johnson',
  'Graduate, Alumni',
  'images/faces/face-5.jpg'
);

const commentsArr = [comment1, comment2, comment3, comment4, comment5];

//////////////////////////////////////////
// _______________ BRANCHES ______________

const branches = [
  {
    city: 'giza',
    address: '203 Mohamed Tayseer Street with Orouba',
    coords: { lat: 29.988401520064563, lng: 31.176766499019223 },
    phone: '401 - 34 - 22',
    branchNum: 1,
  },
  {
    city: 'cairo',
    address:
      '20 intersection of Mohamed Talaat Street with Mohamed ShaheenStreet',
    coords: { lat: 30.04857496200301, lng: 31.214406448634207 },
    phone: '981 - 45 - 68',
    branchNum: 2,
  },
  {
    city: 'cairo',
    address: '57 Al Ashgar Street, El Shorouk City',
    coords: { lat: 30.127077734953037, lng: 31.61123338343935 },
    phone: '372 - 44 - 25',
    branchNum: 3,
  },
  {
    city: 'tanta',
    address: '23 Cleopatra St. in front of Tanta Sports Club',
    coords: { lat: 30.795376891407525, lng: 30.993185647059814 },
    phone: '551 - 12 - 37',
    branchNum: 4,
  },
  {
    city: 'Alex',
    address: '4 Ibrahim Hussein Street',
    coords: { lat: 31.1984715876316, lng: 29.904698797347415 },
    phone: '678 - 09 - 11',
    branchNum: 5,
  },
  {
    city: 'alex',
    address: '4 Osama Bin Zaid Street, Al Ajmi',
    coords: { lat: 31.110910733767156, lng: 29.792199663735563 },
    phone: '129 - 00 - 43',
    branchNum: 6,
  },
];

/*
branch tanta: {lat: 30.795376891407525, lng: 30.993185647059814}
branch cario1:{lat: 30.04857496200301, lng: 31.214406448634207}
branch cario2: {lat: 30.127077734953037, lng: 31.61123338343935}
branch giza:{lat: 29.988401520064563, lng: 31.176766499019223}
branch alex1:{lat: 31.196649535282084, lng: 29.906084089008317}
branch alex2:{lat: 31.110910733767156, lng: 29.792199663735563}
*/

//////////////////////////////////////////
// _______________ BOOKS _________________

class Book {
  constructor(id, bookName, description, author, link) {
    this.id = id; // Unique ID based on subject
    this.bookName = bookName;
    this.description = description;
    this.author = author;
    this.link = link;
  }
}

// Create individual book objects with unique IDs
const book1 = new Book(
  'chemistry',
  'Chemistry - A Comprehensive Guide',
  'An in-depth guide into the principles of chemistry, exploring atoms, molecules, and chemical reactions. It covers topics from basic concepts like the periodic table to advanced topics such as thermodynamics and equilibrium. Designed for students and enthusiasts looking for a complete understanding of the subject.',
  'Mr. James Carter',
  'https://web.ung.edu/media/Chemistry2/Chemistry-LR.pdf'
);

const book2 = new Book(
  'physics',
  'Physics for Class 12',
  'This detailed textbook covers essential physics concepts including mechanics, optics, electromagnetism, and thermodynamics. With clear diagrams and solved examples, it’s ideal for class 12 students preparing for exams or anyone seeking a deep understanding of the physical world.',
  'Mr. John Smith',
  'https://static.collegedekho.com/media/uploads/2022/09/21/class-12-physics-textbook-pdf.pdf'
);

const book3 = new Book(
  'biology',
  'Principles of Biology',
  'A foundational book for biology, this text delves into cellular biology, genetics, ecosystems, and evolutionary theories. It provides a balanced approach to theory and application, making it a perfect choice for students and readers who want to explore the natural world scientifically.',
  'Mr. Andrew Bennett',
  'https://dept.clcillinois.edu/biodv/PrinciplesOfBiology.pdf'
);

const book4 = new Book(
  'geology',
  'Geology for Dummies',
  'An accessible introduction to geology for beginners, covering topics like rock formations, plate tectonics, and Earth’s geological history. The book simplifies complex topics into manageable lessons, perfect for students or enthusiasts of Earth sciences.',
  'Mr. Michael Anderson',
  'https://www.geokniga.org/bookfiles/geokniga-geologyfordummies.pdf'
);

const book5 = new Book(
  'mathematics',
  'Advanced Mathematics',
  'This comprehensive book covers a range of mathematical topics such as calculus, algebra, and geometry. Each chapter builds on concepts with worked examples and practice problems, making it suitable for advanced learners and competitive exam preparation.',
  'Mr. David Lee',
  'https://www.ulm.edu.pk/departments/admin/upload/downloads/202110030921.pdf'
);

const book6 = new Book(
  'history',
  'The History Book',
  "A fascinating exploration of historical events, movements, and individuals that shaped the world. With vivid illustrations and engaging summaries, this book offers insights into humanity's journey across centuries, making history accessible and exciting for everyone.",
  'Mr. Thomas Wilson',
  'https://www.torosceviri.info/wp-content/uploads/2019/09/The-History-Book-DK-2016.pdf'
);

const book7 = new Book(
  'philosophy',
  'Introduction to Philosophy',
  'This introductory text takes readers through fundamental philosophical ideas, including metaphysics, ethics, and epistemology. It examines profound questions about existence, morality, and the nature of knowledge in an approachable manner, perfect for beginners.',
  'Mr. William Harris',
  'https://assets.openstax.org/oscms-prodcms/media/documents/Introduction_to_Philosophy-WEB_cszrKYp.pdf'
);

const book8 = new Book(
  'languages',
  'Essential English for Learners',
  'A practical guide to mastering English, this book focuses on grammar, vocabulary, and reading comprehension. Packed with exercises and examples, it’s an ideal resource for students, professionals, or anyone aiming to improve their English skills.',
  'Mr. Richard Evans',
  'https://bayanebartar.org/file-dl/library/IELTS3/Essential-English.pdf'
);

const book9 = new Book(
  'languages',
  'Teach Yourself French',
  'A beginner-friendly resource for learning French, with practical exercises, grammar explanations, and vocabulary tips. This book provides a structured approach to mastering French for travelers, students, and language enthusiasts alike.',
  'Mr. Charles Johnson',
  'https://theswissbay.ch/pdf/Books/Linguistics/Mega%20linguistics%20pack/Indo-European/Italic/French%2C%20Teach%20Yourself%20(Adams%20%26%20Wilson).pdf'
);

// Add books to an array
const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9];
