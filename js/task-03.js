const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector('.gallery');

const galleryEl = images
  .map(
    ({ url, alt }) =>
      `<li> <img src="${url}" alt="${alt}" height="225" width="378"> </li>`
  )
  .join(" ");
listEl.insertAdjacentHTML("afterbegin", galleryEl);
console.log(galleryEl);

listEl.style.display = "flex";
listEl.style.gap = "20px";
listEl.style.listStyle = "none";






