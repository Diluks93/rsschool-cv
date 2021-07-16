# CV && RESUME

## **Name:** *Dmitrii* **LastName:** *Ilyukovich* 

## My contacts 

* **Phone:** +375 (29) 165-79-57 *mobile operate* A1
    * ![Viber](/icons/viber.svg) Viber;
    * ![Telegram](/icons/telegram.svg) Telegram;
    * ![WhatsApp](/icons/whatsapp.svg) WhatsApp;

  **Phone:** +375 (33) 692-12-15 *mobile operate* MTC

* **E-mail:** 
    * mr.ilyukovich@mail.ru   ![Mail.ru](/icons/mail.svg);
    * mr.ilyukovich@gmail.com ![Gmail.com](/icons/gmail.svg);

* **Social:** 
    * ![Vkontakte](/icons/vk.svg) [VK](https://vk.com/dmitriyfart);
    * ![Instagram](/icons/instagram.svg) [Instagram](https://www.instagram.com/dimkaizum/); 
    * ![GitHub](/icons/github.svg) [GitHub](https://github.com/Diluks93); 
    * ![Discord](/icons/discord.svg) [Discord](https://discord.com/Diluks#8227);
    * ![Skype](/icons/skype.svg) [Skype](https://join.skype.com/invite/OsjFBuVWbuTr);

---

## Personal information

My goal is **Full-stuck developer**.
I want to navigate from all sides of the application release.

My strengths: 
* *perseverance,* 
* *I understand as much as possible what I am doing,* 
* *learnability,* 
* *dedication,* 
* *enthusiasm.*

I haven’t worked in IT, but I’ve been going to turn my life around for a long time. I am well versed in Word, Excel, PowerPoint, AutoCAD, Adobe Reader and other similar applications.

**I always love to learn new things. I love to study.**

---

## Ability

I'm not bad at ![HTML5](/icons/html.svg) **HTML5**, ![CSS3](/icons/css.svg) **CSS3**. I'm using the ![SASS](/icons/sass.svg) **SASS** preprocessor. I use sematic tags, flex-box, grids, animations css. I can customize the adaptation.

Good at ![BOOTSTRAP5](/icons/bootstrap.svg) **BOOTSTRAP5**.

I speak ![JavaScript](/icons/javascript.svg) **JavaScript** at the level of *ModalWindow, Slider, Tabs* and similar scripts. With the help of ![Jquery](/icons/jquery.svg) **Jquery**, I can customize the validation and mask of forms, as well as use various frameworks (*parallax, swipper, etc.*).

I study ![PHP](/icons/php.svg) **PHP** and ![MySQL](/icons/mysql.svg) **MySQL** (so far only the basics), with the help of mailer I can set up sending letters to mail. 

I study the ![BEM](/icons/bem.svg) **BEM** methodology and try to apply it - it's convenient. 

I use **PixelPerfect** and the ![W3C](/icons/w3c.svg) **W3C** validator. 

I think I know ![GIT](/icons/git.svg) **GIT** 2/5 and am eager to learn it (very useful). *I don't know any other version control systems*.

I am using ![Gulp](/icons/gulp.svg) **Gulp**. Not my own development, but downloaded and sorted out [gulp-scss-starter-master](https://github.com/andreyalexeich/gulp-scss-starter). I always try to minimize code (*SVG sprites, fonts, image re-encoding without loss of quality*).

 I work with ![Figma](/icons/figma.svg) **Figma**, ![Photoshop](/icons/photoshop.svg) **Photoshop**. 

 ---

## Code examples

### My tabs

**HTML**

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>2.Tabs</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>TABS</h1>
    <div class="tabs-block-wrapper">
        <div id="tabs">
            <div class="tab-btn active" data-btn="1">1</div>
            <div class="tab-btn" data-btn="2">2</div>
            <div class="tab-btn" data-btn="3">3</div>
        </div>
        <div id="contents">
            <div class="content active" data-content="1">Content 1</div>
            <div class="content" data-content="2">Content 2</div>
            <div class="content" data-content="3">Content 3</div>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

**CSS**
```
h1 {
    width: 100%;
    text-align: center;
}

.tabs-block-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
}

#tabs {
    display: flex;
}

.tab-btn {
    width: 100px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
}

.tab-btn.active {
    background-color: blue;
    color: #ffffff;
}

.tab-btn.show {
    background-color: blue;
    color: #ffffff;
}

#contents {
    max-width: 300px;
    width: 100%;
    height: 150px;
    border: 1px solid black;
}

.content {
    display: none;
}

.content.active {
    display: block;
}
```

**JS**
```
const tabs = document.getElementById('tabs'),
    contents = document.querySelectorAll('.content'),
//console.log(contents);

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if (contents[i].dataset.content === currTab) {
            contents[i].classList.add('active');
        }
    }
})
```

### My ModalWindow

**HTML**

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>3.Modal Window</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Modal Window</h1>
    <div class="flex-wrapper">
        <button id="btn-open">Open</button>
    </div>
    <div id="wrapper-modal">
        <div id="overlay"></div>
        <div id="modal-window">
            <div>
                <button id="btn-close">Close modal</button>
            </div>
            <div class="content">
                any content
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

**CSS**
```
html {
    margin: 0;
    padding: 0;
}
h1 {
    width: 100%;
    text-align: center;
}

.flex-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
}

#btn-open {
    width: 150px;
    height: 40px;
    background-color: red;
    color: #ffffff;
    font-size: 22px;
    border-radius: 20px;
    cursor: pointer;
}

#wrapper-modal {
    width: 100%;
    height: 100%;
    display: none;
}

#wrapper-modal.active {
    display: block;
}

#overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: gray;
    opacity: 0.5;
}

#modal-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
    z-index: 2;
    border: 1px solid black;
    background-color: #ffffff;
}
```

**JS**

```
const btnOpen = document.getElementById('btn-open'),
    modal = document.getElementById('wrapper-modal'),
    overlay = document.getElementById('overlay'),
    btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', function() {
    modal.classList.add('active');
});

function closeModal() {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
```