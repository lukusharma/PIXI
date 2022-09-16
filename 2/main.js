
// document.onload = () => // what will happen when a document competes loading ,i.e., downloading all the assets
    {
    }
        const game = new PIXI.Application(
            {
                width:innerWidth,
                height:innerHeight,
                backgroundColor: 0x3366ff
            }
        );
        document.getElementById('game').append(game.view);
    
// Loading all assets-----------------
loadAssets( 
    [
        {name:"cardImage" , url:"./assets/card1.png"},
        {name:"ev",url:"./assets/2.png"},
        {name:"ev2",url:"./assets/back.jpg"},
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
    const back = PIXI.Sprite.from(resources['cardImage'].texture);
    back.scale.set(0.6);
    const one = new PIXI.Texture(resources['cardImage'].texture,
        new PIXI.Rectangle(57,190,150,200));
    const on1 = PIXI.Sprite.from(one);
    game.stage.addChild(back);
    game.stage.addChild(on1);
    on1.x = innerHeight/2;
    on1.x = innerWidth/2;
    // const back2 = PIXI.Sprite.from(resources['ev2'].texture);
    // game.stage.addChild(back2);

}