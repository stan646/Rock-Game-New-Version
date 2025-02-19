const account = [0];


function totalize (current, added){
    return current + added;

}

let computer = ''
let result = ''
const winning = document.getElementById('win');
const looser = document.getElementById('loose');
const drawer = document.getElementById('draw');
const winning1 = document.getElementById('win1');
const looser1 = document.getElementById('loose1');
const drawer1 = document.getElementById('draw1');
const error = document.getElementById('error');
const balance = document.getElementById('balance');
const picker_result = document.getElementById('picker');

balance.innerHTML = `Tsh ${account.toLocaleString()}`;

// class for storing points

const score_results = {
    win: 0,
    loose: 0,
    draw: 0
}

const Computer_score ={
    Win: 0,
    Loose: 0,
    Draw: 0
}

const btn = () =>
{
    const snack = document.getElementById("items2");

    if (snack.style.visibility === "hidden") {
        snack.style.visibility = "visible";
    } else {
        snack.style.visibility = "hidden";
    }
    // setTimeout(display=()=>{snack.className = snack.className.replaceAll("view","");},3000);
}

//user should deposit, down is the function for the user deposit
const deposit = () =>
{
    const Deposit = document.getElementById('user_deposit');
    const DepositValue = Number(Deposit.value);
    if (DepositValue >= 500) {
        account.push(DepositValue);
        accept();
        Deposit.value = '';
    } else if(DepositValue <= 500) {
        console.error(`error new balance ${account}`);
        
    }
    
    const total = account.reduce(totalize);
    balance.innerHTML = `Tsh: ${total.toLocaleString()}`; 
    
}

const accept = () =>
{
    const accept = document.getElementById('accept');
    accept.className = "showup";
    accept.innerHTML = `<i class='fa-solid fa-check sample'></i> <br> Payment Successful!`;
    setTimeout(check=()=>{accept.className = accept.className.replaceAll("showup","")},3000)};


//function for reducing the iteration of user from deposit to account

const Computer = () => 
{
    //randomly numbers

    const RandomNumbers = Math.floor(Math.random() * 5) + 1;

    if(RandomNumbers >= 1 && RandomNumbers < 2.5){
        computer = `<img src = 'rock.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`;
    }else if(RandomNumbers >= 2.5 && RandomNumbers < 3.5){
        computer = `<img src = 'scissor.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`;
    }else if(RandomNumbers >= 3.5 && RandomNumbers < 4.5){
        computer = `<img src = 'paper.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`;
    }
}

// rock function

const Rock = () =>
{
    Computer();
    let total = account.reduce(totalize);


    if (computer === `<img src = 'rock.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`) {
        result = 'Draw';
            
    }else if(computer === `<img src = 'scissor.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Win';
  
    }else if(computer === `<img src = 'paper.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Loose';
    }   
    
    if (result === 'Win' && total >= 500) {
        picker_result.innerHTML = `You pick <span> <b> <img src='rock.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.win += 1;
        
        
        winning.innerHTML = `You Win: ${score_results.win}, Times`; 
        Computer_score.Loose += 1;
        looser1.innerHTML = `computer Loose ${Computer_score.Loose}, Times`;

    } else if(result === 'Loose' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='rock.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.loose += 1;
        looser.innerHTML = `You Loose: ${score_results.loose}, Times`; 
        Computer_score.Win += 1;
        winning1.innerHTML = `computer Win ${Computer_score.Win}, Times`;
         
    } else if(result === 'Draw' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='rock.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.draw += 1;
        drawer.innerHTML = `Draw: ${score_results.draw}, Times`; 
        Computer_score.Draw += 1;
        drawer1.innerHTML = `Draw ${Computer_score.Draw}, Times`;
    }

    else {
        const error = document.getElementById('error');
        error.className = "show";
        error.innerHTML = `Please deposit some amount into your account!`;
        setTimeout(function(){error.className = error.className.replaceAll("show", "");}, 4000)
    }

    
    
}



// function for scissors

const Scissors = () => 
{
    Computer();
    let total = account.reduce(totalize);

    if (computer === `<img src = 'rock.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`) {
        result = 'Loose';
            
    }else if(computer === `<img src = 'scissor.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Draw';
  
    }else if(computer === `<img src = 'paper.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Win';
    }   

    //compare and check for result and account
    if (result === 'Win' && total >= 500) {
        picker_result.innerHTML = `You pick <span> <b> <img src='scissor.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.win += 1;
        winning.innerHTML = `You Win: ${score_results.win}, Times`; 
        Computer_score.Win += 1;
        winning1.innerHTML = `computer Win ${Computer_score.Win}, Times`;

    } else if(result === 'Loose' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='scissor.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.loose += 1;
        looser.innerHTML = `You Loose: ${score_results.loose}, Times`; 
        Computer_score.Win += 1;
        winning1.innerHTML = `computer Win ${Computer_score.Win}, Times`;
         
    } else if(result === 'Draw' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='scissor.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.draw += 1;
        drawer.innerHTML = `Draw: ${score_results.draw}, Times`; 
    }
    
    else {
        const error = document.getElementById('error');
        error.className = "show";
        error.innerHTML = `Please deposit some amount into your account!`;
        setTimeout(function(){error.className = error.className.replaceAll("show", "");}, 4000)
    }

}

// function for paper

const Paper = () =>
{
    Computer();
    let total = account.reduce(totalize);
    if (computer === `<img src = 'rock.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`) {
        result = 'Win';      
    }else if(computer === `<img src = 'scissor.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Loose';
    }else if(computer === `<img src = 'paper.png'  style = 'border-radius: 50%; width: 30px; height: 30px;'>`){
        result = 'Draw';
    }   

    //Compare and check for result and account
    if (result === 'Win' && total >= 500) {
        picker_result.innerHTML = `You pick <span> <b> <img src='paper.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.win += 1;
        winning.innerHTML = `You Win: ${score_results.win}, Times`; 

    } else if(result === 'Loose' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='paper.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.loose += 1;
        looser.innerHTML = `You Loose: ${score_results.loose}, Times`; 
         
    } else if(result === 'Draw' && total >= 500){
        picker_result.innerHTML = `You pick <span> <b> <img src='paper.png' 
        style = 'border-radius: 50%; width: 30px; height: 30px;'> </b> </span> Computer pick
         <span><b>${computer}</b></span>`;
        score_results.draw += 1;
        drawer.innerHTML = `Draw: ${score_results.draw}, Times`; 
    }
    else {
        const error = document.getElementById('error');
        error.className = "show";
        error.innerHTML = `Please deposit some amount into your account!`;
        setTimeout(function(){error.className = error.className.replaceAll("show", "");}, 4000)
    }
    
}



const reset = () =>
{
    winning.innerHTML = `Winning: ${score_results.win = 0}`;
    looser.innerHTML = `Loose: ${score_results.loose = 0}`;
    drawer.innerHTML = `Draw: ${score_results.draw = 0}`;

    winning1.innerHTML = `Winning: ${Computer_score.Win = 0}`;
    looser1.innerHTML = `Loose: ${Computer_score.Loose = 0}`;
    drawer1.innerHTML = `Draw: ${Computer_score.Draw = 0}`;

    picker_result.innerHTML = `Game Reseted!`;

    console.log('Game reseted');
    
}

function demo() {
    var x = document.getElementById("try");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
function demo1() {
    const snack = document.getElementById("items2");

    if (snack.style.visibility === "hidden") {
        snack.style.visibility = "visible";
    } else {
        snack.style.visibility = "hidden";
    }
    
  }

