let currency = 0; //goose currency
let grass = 0; //grass

let farm_grass = 0; //amount of grass in the farm

//let quality = 'type_clover'; //quality will be a string text of the grass type
let growth = 1;
let quality_level = 1;
let growth_level = 1;



//function that upgrades the quality when clicking the button. quality level will be a number type. 
function upgrade_quality() {
  //let grass_type = {'type_clover':1, 'type_bluegrass':2, 'type_orchard':3, 'type_timothy':4, 'type_brome':5};
  let grass_type = ['clover', 'bluegrass', 'orchard', 'timothy', 'brome'];
  
  //if statement currency must be at least $20 to run
  if (quality_level == 1 && currency >= 20) {
    currency -= 20;
    quality_level+=1;
    let grasstype_element = document.getElementById('grassName');
    grasstype_element.innerHTML = grass_type[quality_level];
  } else if (quality_level == 2 && currency >= 30) {
    currency -= 30;
    quality_level+=1;
    let grasstype_element = document.getElementById('grassName');
    grasstype_element.innerHTML = grass_type[quality_level];
  } else if (quality_level == 3 && currency >= 40) {
    currency -= 40;
    quality_level+=1;
    let grasstype_element = document.getElementById('grassName');
    grasstype_element.innerHTML = grass_type[quality_level];
  } else if (quality_level == 4 && currency >= 50) {
    currency -= 50;
    quality_level+=1;
    let grasstype_element = document.getElementById('grassName');
    grasstype_element.innerHTML = grass_type[quality_level];
  }

}
  
//function that upgrades the growth value. growth_level will be a number type.
function upgrade_growth() {
  if (growth_level == 1 && currency >= 20) {
    growth_level+=1;
    currency-=20;
  } else if (growth_level == 2 && currency >= 30) {
    growth_level+=1;
    currency-=30;
  } else if (growth_level == 3 && currency >= 40) {
    growth_level+=1;
    currency-=40;
  } else if (growth_level == 4 && currency >= 50) {
    growth_level+=1;
    currency-=50;
  }
}

//function that produces grass over time using setInterval Function. The growth parameter is the amount of grass being produced. The quality parameter is the type of grass being produced.
function produce_grass() {
  //let grass_type = {'type_clover':1, 'type_bluegrass':2, 'type_orchard':3, 'type_timothy':4, 'type_brome':5};
  
  //rate = type of grass value * growth
  let rate = quality_level * growth_level;
  grass += rate;
}

//function that sells grass to become currency. amount parameter is the amount of grass we want to sell
function sell_grass() {
  if (grass>0) {
    currency += 1;
    grass -= 1;
  }
}

//function that sells all grass to become currency. amount parameter is the amount of grass we want to sell
function sell_all_grass() {
  if (grass>0) {
    currency += grass;
    grass = 0;
  }
}

let timeSecond = 0;
function feed_goose() {
  if (timeSecond > 3){
  }
  else if(grass>0){
    grass-=1;
    document.getElementById("goose").src='goose_high.png';
    timeSecond = 0;
    let honk_element = document.getElementById("honkAudio");
    honk_element.play();
  }
}

//Function that causes the goose to die overtime
function dying_goose(death_num) {
  let death_sprites = ['goose_high.png', 'goose_medium.png', 'goose_low.png'];

  document.getElementById("goose").src=death_sprites[death_num];
}
function kill_goose() {
  document.getElementById("goose").src='goose_poof.png';
}

const countUp = setInterval(() => {
  timeSecond++;

  if (timeSecond < 3 && timeSecond >= 0) {
    dying_goose(timeSecond);

  } else if (timeSecond > 3) {
    kill_goose();
  } 
}, 20000);


//changes the currency value
function run_game() {
  let grass_element = document.getElementById("grass");
  let currency_element = document.getElementById("currency");
  let quality_level_element = document.getElementById("upgrade_quality");
  let growth_level_element = document.getElementById("upgrade_growth");
  let currency_result = "currency: " + currency;
  let grass_result = "grass: " + grass;
  let qualitylevel_result = "Upgrade quality <br>Level: " + quality_level + "</br>"; 
  let growthlevel_result = "Upgrade growth <br>Level: " + growth_level + "</br>";
  
  currency_element.innerHTML = currency_result;
  grass_element.innerHTML = grass_result;
  quality_level_element.innerHTML = qualitylevel_result;
  growth_level_element.innerHTML = growthlevel_result;
  goose_name(); //changes goose name

}



//setInterval function that produces grass over time by repeating the produce_grass function 
//setInterval(produce_grass, 1000);
//setInterval function runs the game
setInterval(run_game, 1)


