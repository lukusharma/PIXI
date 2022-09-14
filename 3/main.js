// Make the Canvas ---------------
const game = new PIXI.Application(
    {
    width:innerWidth,
    height:innerHeight,
    backgroundColor:0x3366ff
    }
);
document.getElementById('game').append(game.view);

// Load all assets --------------
loadAssets(
    [
        {name:"image",ulr:"./assets/cards.jpg"},
        {name:"back",ulr:"./assets/back.jpg"},
    ],start
);

// Progress bar ----------
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

function loadAssets(list, onLoadComplete)
{
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
}

// On start-------
function start(loader,resources)
{
    console.log('params', arguments);
    const back = PIXI.Sprite.from(resources['back'].texture);
    // game.stage.addChild(back);
}