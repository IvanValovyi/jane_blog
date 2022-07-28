
export function render_main_links(){let main_links_blok=document.querySelector('.main_links')
let follow_me_blok=document.querySelector('.heading.follow .content')
let all_main_links=['facebook','insta','telegram','twi','linkedin']
function render(blok){all_main_links.forEach(el=>{blok.innerHTML+=`
            <a href="#"><svg>
                    <use xlink:href='./images/sprite.svg#${el}'></use>
            </svg></a>
            `})}
render(main_links_blok)
render(follow_me_blok)}
export function render_posts(posts){let posts_blok=document.querySelector('.tape .posts')
posts.forEach(post=>{let post_blok=document.createElement('div')
let post_index=posts.indexOf(post)+1
post_blok.className='post'
post_blok.innerHTML=`
        <div class='header'>
            <h2 class='title'>${post.title}</h2>
            <h3 class='description'>${post.description}, <span class='date'>${post.date}</span></h3>
        </div>

        <img src='./images/posts/${post_index}/main_img.jpg' alt='Image' class='main_image'/>
        <div class='text'></div>

        <div class='options_blok'>
            <div class='like_btn'>
            <svg>
                <use xlink:href='./images/sprite.svg#like'></use>
            </svg>
            <span>Like</span>
            </div>
            <div class='reply_btn'>Replies<span>${post.replies.length}</span></div>
        </div>

        <div class='reply_blok'></div>
        `
let text_blok=post_blok.querySelector('.text')
post.text.forEach(el=>{if(post.text.indexOf(el)==0){text_blok.innerHTML+=`
                <p><span class='topic'>${post.topic}</span> ${el}</p>
                `}else{text_blok.innerHTML+=`
                <p>${el}</p>
                `}})
let replies_blok=post_blok.querySelector('.reply_blok')
replies_blok.classList.add('display_none')
post.replies.forEach(reply=>{replies_blok.innerHTML+=`
            <div class='reply'>
                <img src='./images/posts/${post_index}/coment/${post.replies.indexOf(reply)+1}.jpg'></img>
                <div class='reply_content'>
                    <div class='main_info'><span class='author_name'>${reply.author}</span><span class='date'>${reply.date}</span></div>
                    <p>${reply.text}</p>
                </div>
            </div>
            `})
let reply_btn=post_blok.querySelector('.reply_btn')
reply_btn.addEventListener('click',()=>{if(replies_blok.classList.contains('display_none')){replies_blok.classList.remove('display_none')}else{replies_blok.classList.add('display_none')}})
let like_btn=post_blok.querySelector('.like_btn')
like_btn.addEventListener('click',()=>{if(!like_btn.classList.contains('liked')){like_btn.innerHTML=`
                <svg>
                    <use xlink:href='./images/sprite.svg#tick'></use>
                </svg>
                <span>Liked</span>
                `
like_btn.classList.add('liked')}else{like_btn.innerHTML=`
                <svg>
                    <use xlink:href='./images/sprite.svg#like'></use>
                </svg>
                <span>Like</span>
                `
like_btn.classList.remove('liked')}})
posts_blok.append(post_blok)})}
export function render_pop_posts(){let pop_posts=[{name:'Denim',text:'Sed mattis nunc'},{name:'Sweaters',text:'Praes tinci sed'},{name:'Workshop',text:'Ultricies congue'},{name:'Trends',text:'Lorem ipsum dipsum'}]
let pop_posts_blok=document.querySelector('.pop_posts .content')
pop_posts.forEach(post=>{pop_posts_blok.innerHTML+=`
        <div class='pop_post'>
            <img src='./images/heading/pop_post/${pop_posts.indexOf(post)+1}.jpg'/>
            <div class='text_blok'>
                <span class='author_name'>${post.name}</span>
                <p>${post.text}</p>
            </div>
        </div>
        `})}
export function render_tags(){let tags_blok=document.querySelector('.tags .content')
let tags=['Fashion','New York','London','Hats','Norway','Sweaters','Ideas','Deals','Accessories','News','Clothing','Shopping','Jeans','Trends']
tags.forEach(tag=>{tags_blok.innerHTML+=`
        <p class='tag'>${tag}</p>
        `})}