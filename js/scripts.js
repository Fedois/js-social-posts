const post = [
    {
        numPost: 1,
        userName: 'Federico Fois',
        imgUser: 'https://unsplash.it/300/300?image=15',
        date: '05-14-2023',
        text: 'balbalblabbla',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 3,
    },
    {
        numPost: 2,
        userName: 'Mario Rossi',
        imgUser: 'https://i.picsum.photos/id/814/300/300.jpg?hmac=KfCT542TeSKcJF1UI04ElmkgnM7MaujRNX67Z2wD_pU',
        date: '02-20-2023',
        text: 'Lorem Ipsum',
        image: 'https://unsplash.it/300/300?image=15',
        likes: 7,
    },
    {
        numPost: 3,
        userName: 'Alessandro Deplano',
        imgUser: 'https://i.picsum.photos/id/735/300/300.jpg?hmac=7IspCPgojje4HE9ZAY-xKACfF5r2Z9AZpWIV1zC-PK4',
        date: '03-22-2023',
        text: 'Lorem Ipsum',
        image: 'https://img.fotocommunity.com/profilo-di-ragazzo-ce520f37-cc66-403d-b380-b8973b6aeee1.jpg?height=1080',
        likes: 10,
    }
]

console.log(post)

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
        <div class="like-button  js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </div>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${post[i].likes}</b> persone
    </div>
</div> `
    containerPost.append(footer)
}

const numPostLike = [];
console.log(numPostLike)

const button = document.querySelector('.likes__cta')
button.addEventListener('click', function(){
    const buttonColor = document.querySelector('.like-button')
    let numLikes = document.querySelector('.js-likes-counter')

    if (buttonColor.classList.contains('red') == true){
        buttonColor.classList.remove('red')
        numLikes.innerHTML--
        console.log(post.likes)
    }
    else{
        buttonColor.classList.add('red')
        numLikes.innerHTML++
        numPostLike.push(post.numPost)
    }
})