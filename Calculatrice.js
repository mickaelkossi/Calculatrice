/* DOM */

/* On recupere toutes les touches de la calculatrice */
const touches = [...document.querySelectorAll(".chiffre, .chiffre_0, .chiffre_egal")]


/* On recupere tout les Keycode associés aux touches */
/* On utilise la fonction map pour prendre les elements d'un tableau afin d'en faire quelque chose puis de le retourner dans un nouveau tableau */
/* On peut accéder aux datakey grace a dataset */
const listeKeycode = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector('.ecran');

/* Keydown (Lorsque qu'une touche est appuyé) */
/* On recupere la valeur du KeyCode */
/* On utilise const valeur = e.keyCode pour acceder au KeyCode qu'on avait juste avant */
/* On met toString car la valeur est de type nombre et nous on l'a veut de type string */
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyboardEvent.code.toString();
    calculer(valeur);
} 
);

/* On utilise (const valeur = e.target) pour recuperer la touche et const valeur = e.target.dataset.key pour recuperer le datakey;   */
touches.forEach((touche) => {
    touche.addEventListener('click', (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur);
    });
});

// On va creer une fonction pour recupérer le KeyCode de la touche 
// La fonction va prendre la valeur du KeyCode qu'on aura récuperer grace aux deux evenements du dessus
// La condition sert a verifier si le KeyCode de la touche pressé est inclu dans le tableau listeKeycode
// On a utilisé les deux Case car les touches C et = sont differentes des autres
// On utilise l'index pour récuperer la valeur du KeyCode dans le tableau listeKeycode puis on la renvoie dans un autre tableau (remplacé par Mbappe)
// On ajoute la fonction touche pour ajouter dans le HTML la valeur de la touche appuyé qu'on a eu grace au indexKey
function calculer(valeur) {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const mbappe = listeKeycode.indexOf(valeur);
                const touche = touches[mbappe];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error' , (e) => {
    alert('Une erreur est survenue dans votre calcul :' + e.error.message)
})