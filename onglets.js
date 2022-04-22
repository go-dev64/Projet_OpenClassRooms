(function (){// porte local
/*
Quand on clique sur un onglet 
	=> On retire la class active de l'onglet actif 
		=> on ajoute la class active a l'onglet actuel
		On retire la class du contenu actif
		=> on transfert la class sur le contenu actuel*/


				//fonction permet le lien a afficher

		var afficherOnglet = function (a) { 
				

		var li = a.parentNode;
		var div = a.parentNode.parentNode.parentNode;
		
		if (li.classList.contains('active')) {
			return false
		}
				//On retire la class active de l'onglet actif 
		
		div.querySelector('.tabs .active').classList.remove('active')

				//on ajoute la class active a l'onglet actuel

		li.classList.add('active')

				//On retire la class du contenu actif

		div.querySelector('.tab-content.active').classList.remove('active')

				//on transfert la class sur le contenu actuel
	 	div.querySelector(a.getAttribute('href')).classList.add('active')
		}

			//variable contenant tous les lien .tabs
	var tabs = document.querySelectorAll('.tabs a')

for (var i = 0 ; i< tabs.length; i++) {
	tabs[i].addEventListener('click', function (e) {
			afficherOnglet(this)
	})
}


// recuperation du hash (ancre)
//	=> ajouter la class active sur le lien ="hash"
//		=> retirer la class active sur les autres onglets
//			=> afficher / masquer les contenu


var hash = window.location.hash
var a = document.querySelector('a[href= "' + hash + '"]')
if (a !== null && !a.parentNode.classList.contains('active')){
	afficherOnglet(a)
	
}

})()

