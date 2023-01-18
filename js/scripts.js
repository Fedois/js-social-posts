const post = [
    {
        numPost: 1,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        imgUser: "https://unsplash.it/600/300?image=171",
        autore: {
            userName: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        date: "2021-06-25"
    },
    {
        numPost: 2,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        imgUser: "https://unsplash.it/600/400?image=112",
        autore: {
            userName: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        date: "2021-09-03"
    },
    {
        numPost: 3,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        imgUser: "https://unsplash.it/600/400?image=234",
        autore: {
            userName: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        date: "2021-05-15"
    },
    {
        numPost: 4,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        imgUser: "https://unsplash.it/600/400?image=24",
        autore: {
            userName: "Luca Formicola",
            image: 'https://img.fotocommunity.com/profilo-di-ragazzo-ce520f37-cc66-403d-b380-b8973b6aeee1.jpg?height=1080'
        },
        likes: 56,
        date: "2021-04-03"
    },
    {
        numPost: 5,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        imgUser: "https://unsplash.it/600/400?image=534",
        autore: {
            userName: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        date: "2021-03-05"
    }
];
console.log(post);

const container = document.getElementById('container');

for(let i = 0; i < post.length; i++){
    const containerPost = document.createElement('div');
    containerPost.classList.add('post');
    container.append(containerPost);
    
    const header = document.createElement('div');
    header.classList.add('post__header')
        header.innerHTML = `<div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post[i].imgUser}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post[i].autore.userName}</div>
            <div class="post-meta__time">${post[i].date}</div>
        </div>                    
    </div>`;

    containerPost.append(header);

    const textHtml = document.createElement('div');
    textHtml.classList.add('post__text');
    textHtml.innerHTML = post[i].text;
    containerPost.append(textHtml);

    const imageHtml = document.createElement('div');
    imageHtml.classList.add('post__image');
    imageHtml.innerHTML = '<img src="' + post[i].autore.image + '">'
    containerPost.append(imageHtml);

    const footer = document.createElement('div');
    footer.classList.add('post__footer');
    footer.innerHTML = `<div class="likes js-likes">
    <div class="likes__cta">
        <div class="like-button  js-like-button">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </div>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${post[i].likes}</b> persone
    </div>
</div> `;
    containerPost.append(footer);
}

const numPostLike = [];
console.log(numPostLike);

const button = document.querySelectorAll('.likes__cta');

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
    const buttonColor = document.querySelectorAll('.like-button');
    let numLikes = document.querySelectorAll('.js-likes-counter');

    if (buttonColor[i].classList.contains('red') == true){
        buttonColor[i].classList.remove('red');
        numLikes[i].innerHTML--;

    }
    else{
        buttonColor[i].classList.add('red');
        numLikes[i].innerHTML++;

        if(numPostLike.includes(post[i].numPost) == false){
            numPostLike.push(post[i].numPost);
        }
        
    }
})
}



