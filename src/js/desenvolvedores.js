const boxes = [
    `<div class="bg-card">
        <div class="card">
            <img src="../assets/pic-luiz.png" class="img-card" alt="Imagem do desenvolvedor Luiz">
            <div class="box-info">
                <p id="nome">Luiz Gustavo0</p>
                <span id="idade">18 anos</span>
                <p id="area">Dev. Full-Stack</p>
                <div class="media">
                    <a href="#" class="icon-card"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon-card"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
        <div class="bg-card">
        <div class="card">
            <img src="../assets/pic-luiz.png" class="img-card" alt="Imagem do desenvolvedor Luiz">
            <div class="box-info">
                <p id="nome">Luiz Gustavo1</p>
                <span id="idade">18 anos</span>
                <p id="area">Dev. Full-Stack</p>
                <div class="media">
                    <a href="#" class="icon-card"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon-card"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="bg-card">
        <div class="card">
            <img src="../assets/pic-luiz.png" class="img-card" alt="Imagem do desenvolvedor Luiz">
            <div class="box-info">
                <p id="nome">Luiz Gustavo2</p>
                <span id="idade">18 anos</span>
                <p id="area">Dev. Full-Stack</p>
                <div class="media">
                    <a href="https://github.com/luyz-gusta" class="icon-card"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/luyz-gusta/" class="icon-card"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-card">
        <div class="card">
            <img src="../assets/pic-luiz.png" class="img-card" alt="Imagem do desenvolvedor Luiz">
            <div class="box-info">
                <p id="nome">Luiz Gustavo3</p>
                <span id="idade">18 anos</span>
                <p id="area">Dev. Full-Stack</p>
                <div class="media">
                    <a href="#" class="icon-card"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon-card"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="bg-card">
        <div class="card">
            <img src="../assets/pic-milena.png" class="img-card" alt="Imagem da desenvolvedora milena">
            <div class="box-info">
                <p id="nome">Milena</p>
                <span id="idade">18 anos</span>
                <p id="area">Dev. Full-Stack</p>
                <div class="media">
                    <a href="https://github.com/MilenaCodinhoto" class="icon-card"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/milena-codinhoto-da-silva-6900442b6" class="icon-card"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>`
];

let index = -1;
const time = 3000;

const slideShow = () => {
    const container = document.getElementById('container');
    container.style.opacity = '0';

    setTimeout(() => {
        container.style.transition = 'opacity 1s';
        container.style.opacity = '1';
        container.innerHTML = boxes[index];
    }, 350);

    index++;

    if (index === boxes.length) {
        index = 0;
    }

    setTimeout(slideShow, time);
};

slideShow();