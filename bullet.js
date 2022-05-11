class Bullet{
    constructor(shooter,speed){
        var bul=createSprite(shooter.x,shooter.y,5,5);
        bul.velocityX=speed;
        bul.debug=true;
        console.log('dez nuts')
        //console.log(bul);
    };
    
}
