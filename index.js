for (i = 0; i < 28; i++) {
  document.querySelectorAll(".soundbutton")[i].addEventListener("click", function() {
  var buttonHTML = this.innerHTML;
  makeSound(buttonHTML);
  //buttonAnimation(buttonHTML);
});
}

function makeSound(key) {

  switch (key) {
    case "Coin":
      var tom1 = new Audio("sounds/mariocoin.wav");
      tom1.play();
    break;
    case "1up":
      var tom2 = new Audio("sounds/mario1up.wav");
      tom2.play();
    break;
    case "Pipe":
      var tom3 = new Audio("sounds/mariopipe.wav");
      tom3.play();
    break;
    case "Power Up":
      var tom4 = new Audio("sounds/mariopowerup.wav");
      tom4.play();
    break;
    case "Yoshi":
      var snare = new Audio("sounds/marioyoshi-mount.wav");
      snare.play();
    break;
    case "Jump":
      var kick = new Audio("sounds/mariojump.wav");
      kick.play();
    break;
    case "Fireball":
      var crash = new Audio("sounds/mariofireball.wav");
      crash.play();
    break;
    case "Spin":
        var tom1 = new Audio("sounds/sonicspin.wav");
        tom1.play();
    break;
    case "Rings":
        var tom2 = new Audio("sounds/sonicrings.wav");
        tom2.play();
    break;
    case "Gulp":
        var tom3 = new Audio("sounds/sonicgulp.wav");
        tom3.play();
      break;
      case "Smash":
        var tom4 = new Audio("sounds/sonicspring.wav");
        tom4.play();
      break;
      case "Chaos Emerald":
        var snare = new Audio("sounds/sonicchaos.wav");
        snare.play();
      break;
      case "Skid":
        var kick = new Audio("sounds/soncskid.wav");
        kick.play();
      break;
      case "Finish":
        var crash = new Audio("sounds/sonicfinish.wav");
        crash.play();
      break;
      case "Excuse Me":
          var tom1 = new Audio("sounds/zeldaexcuseme.mp3");
          tom1.play();
      break;
      case "Item":
          var tom2 = new Audio("sounds/zeldaitem.mp3");
          tom2.play();
      break;
      case "Korok":
          var tom3 = new Audio("sounds/zeldakorok.mp3");
          tom3.play();
        break;
        case "Heart":
          var tom4 = new Audio("sounds/zeldalink.mp3");
          tom4.play();
        break;
        case "Listen":
          var snare = new Audio("sounds/zeldalisten.mp3");
          snare.play();
        break;
        case "Secret":
          var kick = new Audio("sounds/zeldasecret.mp3");
          kick.play();
        break;
        case "Triforce":
          var crash = new Audio("sounds/zeldatriforce.mp3");
          crash.play();
      break;
      case "Bow":
          var tom1 = new Audio("sounds/mcbow.mp3");
          tom1.play();
      break;
      case "Food":
          var tom2 = new Audio("sounds/mcfood.mp3");
          tom2.play();
      break;
      case "Portal":
          var tom3 = new Audio("sounds/mcportal.mp3");
          tom3.play();
        break;
        case "Sheep":
          var tom4 = new Audio("sounds/mcsheep.mp3");
          tom4.play();
        break;
        case "Skeleton":
          var snare = new Audio("sounds/mcskeleton.mp3");
          snare.play();
        break;
        case "Villager":
          var kick = new Audio("sounds/mcvillager.mp3");
          kick.play();
        break;
        case "xp":
          var crash = new Audio("sounds/mcxp.mp3");
          crash.play();
      break;

    default:
    console.log("error");
  }
}
