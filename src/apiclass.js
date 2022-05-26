/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const ourIDs = 'WqojmUbB8A3rjuXUI';
const ourID = 'VquE0tA2WmPqHydxagQA';

const poo = ' https://api.tvmaze.com/seasons/1/episodes';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const item_id = 'item_id';

const cards = document.querySelector('.app-container');
const displayPoke = (card) => {
  const splice = card.slice(0,9 );
  let item = '';

  splice.forEach((element) => {
    item += `<div class="info-card">
    
<figure>

    <img src="${element.image.medium}" alt="">
    <figcaption> ${element.name}</figcaption>
</figure>
<div class="${element.id}"> 
<i class="fa fa-heart-o" aria-hidden="true"id='card${element.id}'></i> <span>${element.id}</span>

</div>
<button id="comments">Comments</button>
</div>`;
  });
  cards.innerHTML = item;
};


const likesNumber = document.createElement('span');
likesNumber.classList.add('likesnumber');
likesNumber.innerHTML = 'am a winer';

if (likesNumber) {
  console.log(likesNumber.innerHTML);
} else {
  console.log('no apan for likes');
}



async function getpoke() {
  const res = await fetch(poo);
  const data = await res.json();

  displayPoke(data);
  // console.log(data)}
}
window.addEventListener('load', getpoke);

const postLike = (item) => {
  console.log(item);
  fetch(`${baseUrl}/${ourID}/likes`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',

      'Content-Type': 'application/json; charset="utf-8"',
    },
    body: JSON.stringify({
      item_id: item,
    }),
  }).then((response) => response.json());
};
const likeItem = document.querySelector('.cards');
if (!likeItem) {
  getpoke();
  console.log('no');
} else {
  likeItem.addEventListener('click', (e) => {
    const id = e.target.parentElement.className;
    if (isNaN(id)) {
      console.log('is not a number');
    } else {
      postLike(id);
      console.log('is a number');
    }
  });
}

const getLikes = () => {
  fetch(`${baseUrl}/${ourID}/likes`)
    .then((response) => response.json())
    .then((res) => console.log(res));
};

window.addEventListener('load', getLikes);
const comment = document.querySelector('.comment');

const postComent = (id, name, comment) => {
  console.log(id, name, comment);
  fetch(`${baseUrl}/${ourID}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',

      'Content-Type': 'application/json; charset="utf-8"',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  }).then((response) => response.json());
};
const ids = 3;

comment.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.names').value;
  const comment = document.querySelector('textarea').value;

  postComent(77, name, comment);
  name.value = '';
  comment.value = '';
});
const getComments = () => {
  fetch(`${baseUrl}/${ourID}/comments?item_id=2`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};
window.addEventListener('load', getComments);
