const memes = [
    "https://i.imgflip.com/4gqiqt.jpg", // Example meme
    "https://i.imgflip.com/5jjkpr.jpg", // Example meme
    "https://dontgetserious.com/wp-content/uploads/2021/08/Bonk-Memes.jpeg", // Example meme
    "https://ih1.redbubble.net/image.1176251848.5584/tst,small,845x845-pad,1000x1000,f8f8f8.u2.jpg", // Example meme
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBVYoO8j7zV-Ihlh3QF6YR36KcFKFEFqwwQ&s", // Example meme
    "https://i.imgflip.com/5q69ds.jpg", // Example meme
    "https://i.imgflip.com/59chxj.jpg", // Example meme
    "https://i.imgflip.com/4zk8r7.jpg?a484800", // Example meme
    "https://i.imgflip.com/8ecu2u.jpg", // Example meme
    "https://i.imgflip.com/4m1jvv.jpg", // Example meme
    "https://pbs.twimg.com/media/GpPC1wlbYAApvpO?format=png&name=small", // Example meme
    "https://pbs.twimg.com/media/GpZG-86bUAAj5pt?format=png&name=small", // Example meme
    "https://pbs.twimg.com/media/GpZmkBGWgAAc3En?format=jpg&name=small", // Example meme
    "https://pbs.twimg.com/media/GpaHzgxbEAAzpto?format=jpg&name=small", // Example meme
    "https://pbs.twimg.com/media/GpaHwaUWoAA5C01?format=jpg&name=small", // Example meme
    "https://pbs.twimg.com/media/Gpben-7XcAAUnRY?format=jpg&name=small", // Example meme
    "https://pbs.twimg.com/media/GpfWXR2WMAAdDI5?format=jpg&name=small", // Example meme
    "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/32849/1704733793_CheemsBonkMemePixelArt.png&width=600&height=600&quality=90&format=auto&fit=pad", // Example meme
    "https://i.imgflip.com/5amx55.jpg"  // Example meme
];

let usedMemes = [];

document.addEventListener('DOMContentLoaded', function () {
    const enterButton = document.getElementById('enter-button');
    const startPage = document.getElementById('start-page');
    const memePage = document.getElementById('meme-page');
    const randomMemeButton = document.getElementById('random-meme-button');
    const memeContainer = document.getElementById('meme-container');

    enterButton.addEventListener('click', () => {
        startPage.style.display = 'none';
        memePage.style.display = 'flex';
        showRandomMeme();
    });

    randomMemeButton.addEventListener('click', showRandomMeme);

    function showRandomMeme() {
        if (usedMemes.length === memes.length) {
            usedMemes = [];
        }

        let meme;
        do {
            meme = memes[Math.floor(Math.random() * memes.length)];
        } while (usedMemes.includes(meme));

        usedMemes.push(meme);

        memeContainer.innerHTML = `<img src="${meme}" alt="Random BONK Meme">`;
    }
});
