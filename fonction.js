function PopUp_ON() {
     document.getElementById('EcranJeu').style.display = 'block';
     consigne()

}

function consigne() {
     if (Taille_Consigne == "25") {
          varTailleConsigne = "petite";
     }
     if (Taille_Consigne == "50") {
          varTailleConsigne = "moyenne";
     }
     if (Taille_Consigne == "75") {
          varTailleConsigne = "grande";
     }
     if (Couleur_Consigne == "blue") {
          varCouleurConsigne = "bleues";
     }
     if (Couleur_Consigne == "red") {
          varCouleurConsigne = "rouges";
     }
     if (Couleur_Consigne == "green") {
          varCouleurConsigne = "vertes";
     }
     if (Couleur_Consigne == "black") {
          varCouleurConsigne = "noires";
     }
     if (Couleur_Consigne == "orange") {
          varCouleurConsigne = "jaunes";
     }




     document.getElementById('EcritureConsigne').innerHTML = "Cliquez sur les balles " + varCouleurConsigne + " de " + varTailleConsigne + " taille.";
}

function Aléatoire(min, max) {
     // générer un nombre aléatoire entre min et max qui sont entré en parametre
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Montrer_Ecran_Bilan(){
     document.getElementById('EcranJeu').style.display = 'none';
     document.getElementById('bilan').style.display = 'block';

     document.getElementById('recap').innerHTML = "Durant votre partie, vous avez atteint le Niveau : " + niveau + " Avec un score total de : " + score + " il vous reste également : " + vie + " points de vie.";
}

function Retour_Acceuil(){
     document.getElementById('EcranJeu').style.display = 'block';
     document.getElementById('bilan').style.display = 'none';
}

var Game_lancer = false
function gestion_de_lancement() {
     if (Game_lancer == false) {
          dessin();
          Game_lancer = true;

     } else if (Game_lancer == true) {
          alert("pas de spam ou je m'énerve");
     }
}

function Couleur_Aléatoire() {
     var couleur = ''
     a = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
     if (a == 1) {
          couleur = 'blue';
     }
     if (a == 2) {
          couleur = 'red';
     }
     if (a == 3) {
          couleur = 'green';
     }
     if (a == 4) {
          couleur = 'black';
     }
     if (a == 5) {
          couleur = 'orange';
     }
     return couleur;
}

function Taille_Aléatoire() {
     var taille;

     temp = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
     if (temp == 1) {
          taille = 25;
          return taille;

     }

     if (temp == 2) {
          taille = 50;
          return taille;

     }
     if (temp == 3) {
          taille = 75;
          return taille;

     }
}
var couleur
var taille
var varCouleurConsigne = ""
var varTailleConsigne = "";
var Taille_Consigne = Taille_Aléatoire();
var Couleur_Consigne = Couleur_Aléatoire();
var Nouvelle_Couleur = "";
var score = 0;
var niveau = 1;
var vie = 5;
var Draw_Break = false;

document.getElementById('niveau').innerHTML = niveau;
console.log(Couleur_Consigne)
console.log(Taille_Consigne)

function dessin() {
     var canvas = document.getElementById('myCanvas');
     var ctx = canvas.getContext('2d');
     var raf;
     var compteur = 16;
     ball = {
          x: Aléatoire(10, 990),
          y: Aléatoire(-300, 0),
          vitesse: Aléatoire(3, 10),
          radius: Taille_Aléatoire(),
          couleur: Couleur_Aléatoire(),
          draw: function () {
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
               ctx.closePath();
               ctx.fillStyle = this.couleur;
               ctx.fill();
          }
     }
     ballbis = {
          x: Aléatoire(10, 990),
          y: Aléatoire(-300, 0),
          vitesse: Aléatoire(3, 10),
          radius: Taille_Aléatoire(),
          couleur: Couleur_Aléatoire(),
          draw: function () {
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
               ctx.closePath();
               ctx.fillStyle = this.couleur;
               ctx.fill();
          }
     }
     ballbis2 = {
          x: Aléatoire(10, 990),
          y: Aléatoire(-300, 0),
          vitesse: Aléatoire(3, 10),
          radius: Taille_Aléatoire(),
          couleur: Couleur_Aléatoire(),
          draw: function () {
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
               ctx.closePath();
               ctx.fillStyle = this.couleur;
               ctx.fill();
          }
     }


     function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ball.draw();
          ballbis.draw();
          ballbis2.draw();
          ball.y = ball.y + ball.vitesse;
          ballbis.y = ballbis.y + ballbis.vitesse;
          ballbis2.y = ballbis2.y + ballbis2.vitesse;
          raf = window.requestAnimationFrame(draw);
          if (ball.y > canvas.height) {
               if (ball.couleur == Couleur_Consigne && ball.radius == Taille_Consigne) {
                    vie = vie - 1
                    console.log(vie)
                    document.getElementById('vie').innerHTML = "Vie =" + vie;
                    if (vie == 0) {
                         alert("Vous avez perdu")
                         Montrer_Ecran_Bilan()
                    }
               }
               ball.y = Aléatoire(-300, 0);
               ball.x = Aléatoire(10, 990);
               ball.vitesse = Aléatoire(3, 10);
               ball.couleur = Couleur_Aléatoire();
               ball.radius = Taille_Aléatoire();
          }
          if (ballbis.y > canvas.height) {
               if (ballbis.couleur == Couleur_Consigne && ballbis.radius == Taille_Consigne) {
                    vie = vie - 1
                    console.log(vie)
                    document.getElementById('vie').innerHTML = "Vie =" + vie;
                    if (vie == 0) {
                         alert("Vous avez perdu")
                         Montrer_Ecran_Bilan()
                    }
               }
               ballbis.y = Aléatoire(-300, 0);
               ballbis.x = Aléatoire(10, 990);
               ballbis.vitesse = Aléatoire(3, 10);
               ballbis.couleur = Couleur_Aléatoire();
               ballbis.radius = Taille_Aléatoire();
          }
          if (ballbis2.y > canvas.height) {
               if (ballbis2.couleur == Couleur_Consigne && ballbis2.radius == Taille_Consigne) {
                    vie = vie - 1
                    console.log(vie)
                    document.getElementById('vie').innerHTML = "Vie =" + vie;
                    if (vie == 0) {
                         alert("Vous avez perdu")
                         Montrer_Ecran_Bilan()
                    }
               }
               ballbis2.y = Aléatoire(-300, 0);
               ballbis2.x = Aléatoire(10, 990);
               ballbis2.vitesse = Aléatoire(3, 10);
               ballbis2.couleur = Couleur_Aléatoire();
               ballbis2.radius = Taille_Aléatoire();

          }

     }
     setTimeout(draw, 16);

     canvas.addEventListener('click', function (e) {
          var top = canvas.offsetTop;
          var left = canvas.offsetLeft;

          if (e.pageX - left <= ball.x + ball.radius && e.pageX - left >= ball.x - ball.radius) {
               if (e.pageY - top <= ball.y + ball.radius && e.pageY - top >= ball.y - ball.radius) {
                    ball.y = 0;
                    ball.x = Math.floor((Math.random() * 500 - ball.radius) + 1 + ball.radius);
                    if (ball.couleur == Couleur_Consigne && ball.radius == Taille_Consigne) {
                         score += 1;
                         document.getElementById('score').innerHTML = "Score =" + score;
                         if (score == 5) {
                              score = 0
                              niveau += 1;
                              document.getElementById('niveau').innerHTML = niveau;
                              Couleur_Consigne = Couleur_Aléatoire()
                              Taille_Consigne = Taille_Aléatoire()
                              consigne()
                              if (niveau == 6) {
                                   Montrer_Ecran_Bilan()
                              }
                         }

                         console.log(score);
                    }

                    ball.couleur = Couleur_Aléatoire()
                    ball.radius = Taille_Aléatoire()
                    ball.vitesse = Aléatoire(3, 10);

               }
          }
          if (e.pageX - left <= ballbis.x + ballbis.radius && e.pageX - left >= ballbis.x - ballbis.radius) {
               if (e.pageY - top <= ballbis.y + ballbis.radius && e.pageY - top >= ballbis.y - ballbis.radius) {
                    ballbis.y = 0;
                    ballbis.x = Math.floor((Math.random() * 500 - ballbis.radius) + 1 + ballbis.radius);
                    if (ballbis.couleur == Couleur_Consigne && ballbis.radius == Taille_Consigne) {
                         score += 1;
                         document.getElementById('score').innerHTML = "Score =" + score;
                         if (score == 5) {
                              score = 0;
                              niveau += 1;
                              document.getElementById('niveau').innerHTML = niveau;
                              Couleur_Consigne = Couleur_Aléatoire()
                              Taille_Consigne = Taille_Aléatoire()
                              consigne()
                              if (niveau == 6) {
                                   Montrer_Ecran_Bilan()
                              }
                         }
                         console.log(score);
                    }

                    ballbis.couleur = Couleur_Aléatoire()
                    ballbis.radius = Taille_Aléatoire()
                    ballbis.vitesse = Aléatoire(3, 10);

               }
          }
          if (e.pageX - left <= ballbis2.x + ballbis2.radius && e.pageX - left >= ballbis2.x - ballbis2.radius) {
               if (e.pageY - top <= ballbis2.y + ballbis2.radius && e.pageY - top >= ballbis2.y - ballbis2.radius) {
                    ballbis2.y = 0;
                    ballbis2.x = Math.floor((Math.random() * 500 - ballbis.radius) + 1 + ballbis.radius);
                    if (ballbis2.couleur == Couleur_Consigne && ballbis2.radius == Taille_Consigne) {
                         score += 1;
                         document.getElementById('score').innerHTML = "Score =" + score;
                         if (score == 5) {
                              score = 0;
                              niveau += 1;
                              document.getElementById('niveau').innerHTML = niveau;
                              Couleur_Consigne = Couleur_Aléatoire();
                              Taille_Consigne = Taille_Aléatoire();
                              consigne();
                              if (niveau == 6) {
                                   Montrer_Ecran_Bilan()
                              }
                         }
                         console.log(score);
                    }


                    ballbis2.couleur = Couleur_Aléatoire()
                    ballbis2.radius = Taille_Aléatoire()
                    ballbis2.vitesse = Aléatoire(3, 10);

               }
          }




     })
     
}