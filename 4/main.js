
// document.onload = () => // what will happen when a document competes loading ,i.e., downloading all the assets
{
}
    const game = new PIXI.Application(
        {
            width:1800,
            height:1900,
            backgroundColor: 0x3366ff
        }
    );
    document.getElementById('game').append(game.view);

// Loading all assets-----------------
loadAssets( 
[
    {name:"full",url:"./assets/cards.jpg"},
    {name:"back",url:"./assets/back.jpg"},
],start
);

// Progress Bar ---------------------
const pBar = document.getElementById('bar'); 
const pText = document.getElementById('progress');
function preload(e)
{
pBar.style.width = e.progress * 2 + "%";
pText.innerText = e.progress + "%";
if(e.progress === 100)
{
    document.getElementById('loader').style.display = "none";
    console.log("loaded");
}
};

// array of all the assets that are to be loaded
function loadAssets(list, onLoadComplete) // the list of assets to be loaded and what to do when loading is completed
{
game.loader.onProgress.add(preload);
game.loader.add(list).load(onLoadComplete);
}

//-----------------------------------------------------
function start(loader,resources)
{
console.log('params', arguments);
const back = PIXI.Sprite.from(resources['back'].texture);
// game.stage.addChild(back);
back.scale.set(0.2);

const front = PIXI.Sprite.from(resources['full'].texture);
// game.stage.addChild(front);
front.scale.set(0.2);


const one = new PIXI.Texture(resources['full'].texture,
            new PIXI.Rectangle(0,0,226,316));
const on1 = PIXI.Sprite.from(one);
// game.stage.addChild(on1);
let newx = 10;
    let newy = 10;
for(let k = 0; k < 20; k++)
{
    let random1 = Math.floor(Math.random()*7);
    let random2 = Math.floor(Math.random()*3);
    let rx = random1 * 225;
    let ry = random2 * 315;
    console.log("rx ",rx," ry ",ry);
    
    let two = new PIXI.Texture(resources['full'].texture,
            new PIXI.Rectangle(rx, ry, 225,315));
    let on2 = PIXI.Sprite.from(two);
    // on2.anchor.set(0.5);
    game.stage.addChild(on2);
    on2.scale.set(0.5);
    
    on2.x += newx;
    on2.y += newy;
    if((newx+270) >= 1600)
    {
        newy+=370;
        newx = 10;
    }
    else{
        newx += 270;
    }
    // newx+= 270;
    // newy+= 370;
}
    // for(let i = rx; i <= 1350; i += 225)
    // {
    //     for(let j = rx; j <= 940; j += 315)
    //     {
    //         let two = new PIXI.Texture(resources['full'].texture,
    //                 new PIXI.Rectangle(i, j, 226, 316));
    //         let on2 = PIXI.Sprite.from(two);
    //         game.stage.addChild(on2);
    //         // console.log(arguments);
    //         // on2.anchor.set(0.5);
    //         on2.x = i;
    //         on2.y = j;
    //         on2.scale.set(0.9);

            
    //     }
    // }

}




