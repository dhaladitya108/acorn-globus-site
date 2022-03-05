//SECTION TO DISPLAY THE NUMBER OF TIMES WE ARE CONTACTED

window.addEventListener('scroll', function () {
  var place = document.scrollingElement.scrollTop;
  var alertOn = document.getElementById('container-7').offsetTop;
  // console.log(place);
  // console.log(alertOn);
  if (place + 250 > alertOn) {
    this.removeEventListener('scroll', arguments.callee, false);

    let count = 0;
    var counterPhoneCalls = document.getElementsByClassName('counter')[0];
    setInterval(() => {
      if (count < 500) {
        count = count + 1;
        counterPhoneCalls.innerHTML = `${count}`;
      }
    }, 1);

    let count2 = 8500;
    var counterCostAndTime = document.getElementsByClassName('counter')[1];
    setInterval(() => {
      if (count2 < 9000) {
        count2 = count2 + 1;
        counterCostAndTime.innerHTML = `${count2}`;
      }
    }, 1.2);

    let count3 = 831;
    var counterStatsBar = document.getElementsByClassName('counter')[2];
    setInterval(() => {
      if (count3 < 1331) {
        count3 = count3 + 1;
        counterStatsBar.innerHTML = `${count3}`;
      }
    }, 1.4);

    let count4 = 1760;
    var counterCupCoffee = document.getElementsByClassName('counter')[3];
    setInterval(() => {
      if (count4 < 2260) {
        count4 = count4 + 1;
        counterCupCoffee.innerHTML = `${count4}`;
      }
    }, 1.6);
  }
});

// FORMS SECTION

//! Commenting the Forms User Toggle Section

/*
var employerBtn = document.querySelector("#option-1");
var jobSeekerBtn = document.querySelector("#option-2");
var numberOrNameInput = document.querySelector("#nameOrNumber");

employerBtn.addEventListener("click", () => {
  employerBtn.style.backgroundColor = "#e01631";
  employerBtn.style.color = "white";
  numberOrNameInput.placeholder = "Company Name";
  jobSeekerBtn.style.removeProperty("background-color");
  jobSeekerBtn.style.color = "rgb(57, 57, 139)";
});

jobSeekerBtn.addEventListener("click", () => {
  jobSeekerBtn.style.backgroundColor = "#2a2a68";
  jobSeekerBtn.style.color = "white";
  numberOrNameInput.placeholder = "Phone Number";
  employerBtn.style.backgroundColor = "white";
  employerBtn.style.color = "rgb(57, 57, 139)";
});

*/

// CTA SECTION
var likeBtn = document.querySelector('#container-4-btn-1');
var hireUsBtn = document.querySelector('#container-4-btn-2');

likeBtn.addEventListener('mouseover', () => {
  likeBtn.style.backgroundColor = '#571f9c';
  likeBtn.style.color = 'white';
  hireUsBtn.style.backgroundColor = '#571f9c';
  hireUsBtn.style.color = 'white';
});

likeBtn.addEventListener('mouseout', () => {
  likeBtn.style.backgroundColor = '';
  likeBtn.style.color = '';
  hireUsBtn.style.backgroundColor = '';
  hireUsBtn.style.color = '';
});

hireUsBtn.addEventListener('mouseover', () => {
  likeBtn.style.backgroundColor = '#571f9c';
  likeBtn.style.color = 'white';
  hireUsBtn.style.backgroundColor = '#571f9c';
  hireUsBtn.style.color = 'white';
});

hireUsBtn.addEventListener('mouseout', () => {
  likeBtn.style.backgroundColor = '';
  likeBtn.style.color = '';
  hireUsBtn.style.backgroundColor = '';
  hireUsBtn.style.color = '';
});

// scroll to contact form
function scrollWin() {
  window.scrollTo(0, 0);
}

// Project Details Section - controlled with vue
var app = new Vue({
  el: '#projects',
  data: {
    message: 'Hello Vue!',
    projects: [
      // {
      //   title: "Frappe Books",
      //   link: "https://frappebooks.com/",
      //   role: "Full stack developer",
      //   tags: ["Opensource"],
      //   filename: "Frappe-Books.png",
      //   stack: ["vue.svg", "electron.png", "javascript.png", "nodejs.png", "tailwind.png"],
      //   description: "Open source contribution on Frappe Books. <Br /> A free Desktop book-keeping software for small-businesses and freelancers."
      // },
      {
        title: 'Eitoss',
        link: 'https://eitoss.com/',
        role: 'SOFTWARE CONSULTANT',
        tags: ['Remote Work'],
        image: {
          filename: 'eitoss.png',
          alt: 'Eitoss'
        },
        stack: [
          {
            img: 'vue.svg',
            alt: 'vue',
          },
          {
            img: 'nodejs.png',
            alt: 'nodejs',
          },
          {
            img: 'javascript.png',
            alt: 'javascript',
          },
        ],
        description:
          'Eitoss is a communication tool for managers and frontline workers. It builds on the concept of Kaizen and help companies build product that are driven by the people who are on the frontline.',
      },
      {
        title: 'Rumie',
        link: 'https://about.rumie.org/',
        role: 'SENIOR FRONTEND ENGINEER',
        tags: ['Project'],
        image: {
          filename: 'rumie-pic.png',
          alt: 'Rumie'
        },
        stack: [
          {
            img: 'vue.svg',
            alt: 'vue',
          },
          {
            img: 'javascript.png',
            alt: 'javascript',
          },
        ],
        description:
          'Rumie is a non-profit that makes access to free digital education possible for underserved communities worldwide. We collaborated on revamping the experience for application content managers. The new app built using Vue provides a fast and intuitive way to deal with complex flows.',
      },
      {
        title: 'Formester',
        link: 'https://formester.com/',
        role: 'FULL STACK DEVELOPER',
        tags: ['Full time'],
        image: {
          filename: 'formester-pic.png',
          alt: 'Formester'
        },
        stack: [
          {
            img: 'vue.svg',
            alt: 'vue',
          },
          {
            img: 'javascript.png',
            alt: 'javascript',
          },
          {
            img: 'rails-logo.png',
            alt: 'Ruby on Rails',
          },
        ],
        description:
          'A form backend as a service. It makes creating form endpoints for websites very easy. It requires zero programming knowledge. The user has the full control over the look and feel of the form. In Formester validation, spam protection and integration with different CRMs are few clicks away.',
      },
    ],
  },
});
