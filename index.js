// BD
var posts = [
    {
        id: 1,
        user: {
            nickname: 'Cururu',
            local: 'Tijucas - SC',
            profileImg: 'https://media.discordapp.net/attachments/1190893756149420074/1552093661330939914/IMG-20260904-WA0054.jpg?ex=6abced1d&is=6abb9b9d&hm=02984da8373b91efb7b24652509c5f21a15d66d23dd09bcf9389cd3eb46faa91&=&format=webp&width=768&height=1024'
        },
        image: 'https://media.discordapp.net/attachments/1524197927982071922/1549215590323978291/1784736492697.jpg?ex=6abd00b3&is=6abbaf33&hm=3c1d29a47fa47cb686ee326dba75b098a77c79e8a0c6c2422dda1e723a17bfab&=&format=webp&width=768&height=1024',
        legend: "AFF ODEIO GAYS",
        likes: 0,
        isLike: false,
        data: "2026-09-28T19:24:00",
        comments: [
            {
                id: 1,
                username: "pedrinhdasilva",
                text: "Bahhh que legal!!",
                data: "2026-09-28T20:24:00"
            },
             {
                id: 2,
                username: "pedrinhdasilva",
                text: "Muito Legal!!",
                data: "2026-09-28T21:24:00"
            },
             {
                id: 3,
                username: "nicoRodrigues",
                text: "TE AMO!!",
                data: "2026-09-28T21:24:00"
            },
        ]
    },
    {
        id: 2,
        user: {
            nickname: 'pé aga',
            local: 'Itapema - SC',
            profileImg: 'https://media.discordapp.net/attachments/1524197927982071922/1549214619845922937/IMG-20260914-WA0016.jpg?ex=6abcffcc&is=6abbae4c&hm=205e6cbd06252b3d8e42001369ccc75d9af0b28c57fac194fd75c6c68128bf4b&=&format=webp&width=576&height=1024'
        },
        image: 'https://media.discordapp.net/attachments/1524197947292647466/1552804201522921543/IMG_20260923_212213.jpg?ex=6abd889b&is=6abc371b&hm=16d234194c4b06497acaea95b2a8e48fa8630f57f2175ef6a983bec337f34b48&=&format=webp&width=768&height=1024',
        legend: "Sinistro esse mano",
        likes: 0,
        isLike: false,
        data: "2026-09-28T19:24:00",
        comments: [
            {
                id: 1,
                username: "pedrinhdasilva",
                text: "Bahhh que legal!!",
                data: "2026-09-28T20:24:00"
            },
             {
                id: 2,
                username: "pedrinhdasilva",
                text: "Muito Legal!!",
                data: "2026-09-28T21:24:00"
            }
        ]
    }
]

// FUNÇÕES JS
const feed = document.getElementById("feed");
console.log(feed)
const botaoAbrir = document.getElementById("botaoAbrirModal")
const botaoFechar = document.getElementById("botaoFecharModal")
const modal = document.getElementById("modalPost")

botaoAbrir.addEventListener("click" , () => {
    modal.classList.remove("hidden")
})

botaoFechar.addEventListener("click", () => {
    modal.classList.add("hidden");
})

function renderPosts() {
    feed.innerHTML = "";

    for(var i = 0; i < posts.length; i++) {
        var article = document.createElement("article");

        var commentsHTML = "";
        for (var comment of posts[i].comments){
            commentsHTML += `
              <p class="comment">
                        <strong>${comment.username}</strong>
                        ${comment.text}
                    </p>

            `
        }


        article.innerHTML = `
            <header class="post-header">
                <div class="post-user">
                    <img src="${posts[i].user.profileImg}">

                    <div>
                        <strong><a href="">${posts[i].user.nickname}</a></strong>
                        <span>${posts[i].user.local}</span>
                    </div>
                </div>

                <button class="more">•••</button>
                </header>
                <img class="post-image" src="${posts[i].image}">
                <div class="post-actions">
                    <div>
                        <button>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>${posts[i].likes} curtidas</strong>

                    <p>
                        <strong>${posts[i].user.nickname}</strong>
                        ${posts[i].legend}
                    </p>

                    <a href="#">Ver todos os 7 comentários</a>

                  ${commentsHTML}

                    <span class="post-date">Há 2 horas</span>
                </div>

        `;

        feed.appendChild(article);
    }
}

renderPosts();