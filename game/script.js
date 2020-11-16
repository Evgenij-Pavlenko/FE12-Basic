function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    this.image.onload = () => this.ready = true;
    if (imageUrl) {
        this.image.src = imageUrl
    }
}

GameObject.prototype.render = function (ctx) {
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

const background = new GameObject('images/background.png');
const hero = new GameObject('images/hero.png');
const monster = new GameObject('images/monster.png');



const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

hero.x = hero.image.width+(Math.random()*(canvas.width-hero.image.width*2));
hero.y = hero.image.height+(Math.random()*canvas.height-hero.image.height*2);

monster.x = monster.image.width+(Math.random()*(canvas.width-monster.image.width*2));
monster.y = monster.image.height+(Math.random()*(canvas.height-monster.image.height*2));


const ctx = canvas.getContext('2d');
ctx.drawImage(background.image, 0, 0);

window.addEventListener('keydown', (event) =>{
    // if (event.key==='arrowUp'){
    //     hero.moveUp();
    // }
    // if (event.key==='arrowDown'){
    //     hero.moveDown();
    // }
    // if (event.key==='arrowLeft'){
    //     hero.moveLeft();
    // }
    // if (event.key==='arrowRight'){
    //     hero.moveRight();
    // }
})

const gameCycle = function(){
    // console.log('gameCycle');
    // console.log(monster.image.width);
    console.log(monster.image.height);
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);

setTimeout(() => {
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);

}, 1500)



