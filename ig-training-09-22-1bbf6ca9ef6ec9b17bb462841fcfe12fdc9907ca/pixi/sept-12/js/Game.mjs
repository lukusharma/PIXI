import { AnimatedSprite, Application, BitmapFont, BitmapText, Container, Graphics, NineSlicePlane, Rectangle, Sprite, Texture } from "./lib/pixi.mjs";
import { assets, getDinoTextures, getSSAnimTextures, getTextureById, preload } from "./Preloader.mjs";

export class Game extends Application {
    constructor(options) {
        super(options);
        this.background = new Container();
        this.animations = new Container();
        this.stage.addChild(this.background);
        this.stage.addChild(this.animations);

        preload(assets, this.onLoadComplete.bind(this));
    }

    onLoadComplete() {
        console.log('loading complete');
        const gold = new BitmapText('$ 1000.00',{
            fontName: 'gold-dd'
        });
        gold.x = this.screen.width/2;
        gold.y = this.screen.height/2;
        gold.anchor.set(0.5);
        this.stage.addChild(gold);

        const g = new Graphics();
        this.stage.addChild(g);
        g.beginFill('#000000');
        g.drawCircle(0, 0, 150);
        g.endFill();

        const dino = new Sprite(getDinoTextures('dino', 'idle')[0]);
        dino.x = 500;
        dino.y = this.screen.height;
        dino.anchor.set(0.25, 1);
        dino.mask = g;
        this.stage.addChild(dino);
        this.stage.interactive = true;
        this.stage.on('pointermove', (e)=>{
            g.position.set(e.data.global.x, e.data.global.y);
        });

        const btnTexture = new Texture(getTextureById('Buttons'), new Rectangle(545, 665, 195, 195));
        const btn1 = new Sprite(btnTexture);
        btn1.x = 50;
        btn1.y = 50;
        this.stage.addChild(btn1);
        const btn2 = new Sprite(btnTexture);
        btn2.x = 50;
        btn2.y = 250;
        btn2.width = 500;
        this.stage.addChild(btn2);
        const btn3 = new NineSlicePlane(btnTexture, 70,50, 70, 55);
        btn3.x = 50;
        btn3.y = 450;
        btn3.width = 500;
        btn3.height = 300;
        this.stage.addChild(btn3);
    }
}