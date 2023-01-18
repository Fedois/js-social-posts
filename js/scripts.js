const post = [
    {
        userName: 'Federico Fois',
        imgUser: 'https://unsplash.it/300/300?image=15',
        date: '05-14-2023',
        text: 'balbalblabbla',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 3,
    },
    {
        userName: 'Mario Rossi',
        imgUser: 'https://unsplash.it/300/300?image=15',
        date: '02-20-2023',
        text: 'Lorem Ipsum',
        image: 'https://unsplash.it/300/300?image=15',
        likes: 7,
    }
]

const container = document.getElementById('container')

for(let i = 0; i < post.length; i++){
    const containerPost = document.createElement('div')
    containerPost.classList.add('post')
    container.append(containerPost)
    
    const header = document.createElement('div');
    header.classList.add('post__header')
        header.innerHTML = `<div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post[i].imgUser}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post[i].userName}</div>
            <div class="post-meta__time">${post[i].date}</div>
        </div>                    
    </div>`

    containerPost.append(header);

    const textHtml = document.createElement('div');
    textHtml.classList.add('post__text')
    textHtml.innerHTML = post[i].text
    containerPost.append(textHtml)

    const imageHtml = document.createElement('div');
    imageHtml.classList.add('post__image')
    imageHtml.innerHTML = '<img src="' + post[i].image + '">'
    containerPost.append(imageHtml)

    const footer = document.createElement('div');
    footer.classList.add('post__footer')
    footer.innerHTML = `<div class="likes js-likes">
    <div class="likes__cta">
        <a class="like-button  js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${post[i].likes}</b> persone
    </div>
</div> `
    containerPost.append(footer)
}

const button = document.querySelector('.likes__cta')
button.addEventListener('click', function(){
    incremento = post.likes
    let numLikes = document.querySelector('.js-likes-counter')
    console.log(numLikes)
    numLikes.innerHTML ++
})