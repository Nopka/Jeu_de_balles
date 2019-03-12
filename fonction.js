function montrerEcranJeu() {
    consigne = Math.floor(Math.random() * Math.floor(12));
    document.getElementById('EcranJeu').style.display = 'block';
    console.log(consigne);
    if (consigne == 0) {
        document.getElementById('EcritureConsigne').innerHTML = "Cliquez sur les balles de PETITE taille";
        testConsigne = 1;
    }
    if (consigne == 1) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les balles de taille MOYENNE";
        testConsigne = 2;
    }
    if (consigne == 2) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les balles de GRANDE taille";
        testConsigne = 3;
    }
    if (consigne == 3) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les PETITES balles ROUGES";
        testConsigne = 4;
    }
    if (consigne == 4) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les balles ROUGES de taille MOYENNE";
        testConsigne = 5;
    }
    if (consigne == 5) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les GRANDES balles ROUGES";
        testConsigne = 6;
    }
    if (consigne == 6) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les PETITES balles BLEUES";
        testConsigne = 7;
    }
    if (consigne == 7) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les balles BLEUES de taille MOYENNE";
        testConsigne = 8;
    }
    if (consigne == 8) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les GRANDES balles BLEUES";
        testConsigne = 9;
    }
    if (consigne == 9) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les PETITES balles VERTES";
        testConsigne = 10;
    }
    if (consigne == 10) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les balles VERTES de taille MOYENNE";
        testConsigne = 11;
    }
    if (consigne == 11) {
        document.getElementById('EcritureConsigne').innerText = "Cliquez sur les GRANDES balles VERTES";
        testConsigne = 12;
    }
}

function closepopup() {
    document.getElementById('EcranJeu').style.display = 'none';
    clearCanvas();
    location.reload();
}

var testConsigne;
var lanceur = 0;
var posY = 0;
var vitesseY = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
var vitesseYbis = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
var a;
var nb_balles = 4;

function lancerPartie() {
    if (lanceur == 0) {
        test();
        lanceur = 1;
    }
}

function test() {

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    function PositionX_Aléatoire(min, max) {
        // générer un nombre aléatoire entre min et max qui sont entré en parametre
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function PositionY_Aléatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function ballepetite(a, posY) {
        context.beginPath();
        context.arc(a, posY, 15, 0, Math.PI * 2);
        context.fill();
    }

    function ballegrande(a, posY) {
        context.beginPath();
        context.arc(a, posY, 50, 0, 2 * Math.PI);
        context.stroke();
    }

    function ballemoyenne(a, posY) {
        context.beginPath();
        context.arc(a, posY, 30, 0, 2 * Math.PI);
        context.stroke();

    }

    function ballegranderouge(a, posY) {
        context.fillStyle = '#FF0000';
        context.beginPath();
        context.arc(a, posY, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballemoyennerouge(a, posY) {
        context.fillStyle = "#FF0000";
        context.beginPath();
        context.arc(a, posY, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballepetiterouge(a, posY) {
        context.fillStyle = "#FF0000";
        context.beginPath();
        context.arc(a, posY, 15, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }


    //balles bleues

    function ballegrandebleue(a, posY) {
        context.fillStyle = '#0040FF';
        context.beginPath();
        context.arc(a, posY, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballemoyennebleue(a, posY) {
        context.fillStyle = "#0040FF";
        context.beginPath();
        context.arc(a, posY, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballepetitebleue(a, posY) {
        context.fillStyle = "#0040FF";
        context.beginPath();
        context.arc(a, posY, 15, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }
    // balles vertes

    function ballegrandeverte(a, posY) {
        context.fillStyle = '#04B404';
        context.beginPath();
        context.arc(a, posY, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballemoyenneverte(a, posY) {
        context.fillStyle = "#04B404";
        context.beginPath();
        context.arc(a, posY, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

    }

    function ballepetiteverte(a, posY) {
        context.fillStyle = "#04B404";
        context.beginPath();
        context.arc(a, posY, 15, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }
    var vitesse = Math.floor(Math.random() * (50 - 33 + 1)) + 33;
    var myInterval = setInterval(animate, vitesse);
    a = PositionX_Aléatoire(15, 985);
    b = PositionX_Aléatoire(15, 985);
    posY = PositionY_Aléatoire(-300, 0);
    posYbis = PositionY_Aléatoire(-300, 0);
    // testConsigne = 1;

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Tracé de la balle
        if (testConsigne == 1) {
            // for(var i = 0; i < nb_balles; i++){
            //     a = PositionX_Aléatoire(15,385);
            //     ballepetite(a);
            //     b = PositionX_Aléatoire(15,385);
            //     ballepetiteverte(b);
            // }
            ballepetite(a, posY);
            ballepetite(b, posYbis);
        }
        if (testConsigne == 2) {
            ballemoyenne(a, posY);
            ballemoyenne(b, posYbis);
        }
        if (testConsigne == 3) {
            ballegrande(a, posY);
            ballegrande(b, posYbis);
        }
        if (testConsigne == 4) {
            ballepetiterouge(a, posY);
            ballepetiterouge(b, posYbis);
        }
        if (testConsigne == 5) {
            ballemoyennerouge(a, posY);
            ballemoyennerouge(b, posYbis);
        }
        if (testConsigne == 6) {
            ballegranderouge(a, posY);
            ballegranderouge(b, posYbis);
        }
        if (testConsigne == 7) {
            ballepetitebleue(a, posY);
            ballepetitebleue(b, posYbis);
        }
        if (testConsigne == 8) {
            ballemoyennebleue(a, posY);
            ballemoyennebleue(b, posYbis);
        }
        if (testConsigne == 9) {
            ballegrandebleue(a, posY);
            ballegrandebleue(b, posYbis);
        }
        if (testConsigne == 10) {
            ballepetiteverte(a, posY);
            ballepetiteverte(b, posYbis);
        }
        if (testConsigne == 11) {
            ballemoyenneverte(a, posY);
            ballemoyenneverte(b, posYbis);
        }
        if (testConsigne == 12) {
            ballegrandeverte(a, posY);
            ballegrandeverte(b, posYbis);
        }




        posY += vitesseY;
        posYbis += vitesseYbis;
        // console.log("-------------",posY);

    }

}

function rejouer() {
    //clear les canvas !
    myCanvas.width = myCanvas.width;
    myCanvas.height = myCanvas.height;
    posY = 0;
    posYbis = 0;
    clearInterval(myInterval);
    test()
}