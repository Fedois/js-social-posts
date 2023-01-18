const post = [
    {
        userName: 'Federico Fois',
        imgUser: '',
        date: '05-14-2023',
        text: 'balbalblabbla',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 3,
    },
    {
        userName: 'Federico Fois',
        imgUser: '',
        date: '05-14-2023',
        text: 'balbalblabbla',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 3,
    }
]

const containerPost = document.querySelector('.post')
const nameHtml = document.querySelector('.post-meta__author')
const dateHtml = document.querySelector('.post-meta__time')
const textHtml = document.querySelector('.post__text')
const imageHtml = document.querySelector('.post__image')
const buttonlike = document.querySelector('.like-button')
const numLikes = document.getElementById('like-counter-1')

for(let i = 0; i < post.length; i++){
    nameHtml.innerHTML = post[i].userName
    dateHtml.innerHTML = post[i].date
    textHtml.innerHTML = post[i].text
    imageHtml.innerHTML = '<img src="' + post[i].image + '">'
    numLikes.innerHTML =  post[i].likes
}

for(let i = 0; i < 3; i++){
    containerPost
}