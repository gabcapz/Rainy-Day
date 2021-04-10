class Rain{
		constructor(x,y){
			var options = {
				friction: 0.1,
				restitution:0.1           
			}
			this.rain = Bodies.circle(x,y,5,options);
			this.radius = 10;
			this.image = loadImage("proc41images/images/water2.png");
			World.add(world, this.rain);
		}
	
		updateY(){     
			if(this.rain.position.y > height){
	
				Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
			}
		}
	
		showDrop(){
			fill("blue");
            imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image, this.rain.position.x, this.rain.position.y, this.radius, this.radius);
		}
	}