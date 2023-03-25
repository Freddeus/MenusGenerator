// FONCTION MAISON

// FONCTION MAISON ETE ENTREES

function MaisonEteEntrees(){

    //liste des Entrées

    let MaisonEteEntrees = [
        'Salade de pates',
        'Tomates', 
        'Haricots verts', 
        'Poireaux vinaigrette', 
        'Maquereaux', 
        'Paté', 
        'Sardines', 
        'Macédoine', 
        'Carottes rapées', 
        'Céléri remoulade', 
        'Betteraves', 
        'Oeufs mimosa', 
        'Cake aux olives', 
        'Salade niçoise',
        'Champignons à la Grecque',
        'Pain de thon',
        'Potage',
        'Soupe vermicelle',
        'Salade de riz',
        'Panier fromage ou champignons',
        'Soupe de champignons',
        'Choux-fleur vinaigrette',
        'Pain de surimi',
        'Cake aux olives',
        'Taboulet',
        'Saucisson',
        'Choux rouge',
        'Salade Niçoise'
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteEntrees');
  
    //on setup le random
    randomItem = MaisonEteEntrees[Math.floor(Math.random()*MaisonEteEntrees.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};

// FONCTION MAISON ETE VIANDE OU POISSON

function MaisonEteViande(){

    //liste des Viandes ou poissons

    let MaisonEteViande = [
        'Limande',
        'Poissons panés',
        'Cabillaud',
        'Steak',
        'Steak hachés',
        'Saucisses',
        'Knacki',
        'Merguez',
        'Escalopes de poulet',
        'Cotelettes',
        'Entrecote',
        'Oeufs sur le plat',
        'Pain de thon', 
        'Pain de surimi',
        'Cotes de porc',
        'Poulet',
        'Lapin',
        'Filet mignon',
        'Oeufs cocotte',
        'Roti de porc',
        'Crevettes au Cury',
        'Omelette',
        'Falafel'
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteViande');
  
    //on setup le random
    randomItem = MaisonEteViande[Math.floor(Math.random()*MaisonEteViande.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};

// FONCTION MAISON ETE ACCOMPAGNEMENT

function MaisonEteAccompagnement(){

    //liste des accompagnements

    let MaisonEteAccompagnement = [
        'Frites',
        'Tomates', 
        'Haricots verts', 
        'Purée de carottes',
        'Purée de pomme de terre',
        'Champignons',
        'Petits poids carottes',
        'Pates',
        'Riz',
        'Semoule',
        'Ratatouille',
        'Flan de courgette',
        'Courgettes poelées',
        'Patates sautées',
        'Carottes vichy',
        'Choux-fleurs',
        'Tian de légumes'
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteAccompagnement');
  
    //on setup le random
    randomItem = MaisonEteAccompagnement[Math.floor(Math.random()*MaisonEteAccompagnement.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};


// FONCTION MAISON ETE DESSERTS

function MaisonEteDesserts(){

    //liste des desserts

    let MaisonEteDesserts = [
        'Flan Coco',
        'Fondant chocolat', 
        'Macarons',
        'Eclairs chocolat / café',
        'Glaces diverses',
        'Gateau Creusois',
        'Tarte noix de coco',
        'Tarte aux pommes',
        'Grimolle',
        'Muffins poire chocolat',
        'Mousse au chocoalat',
        'Tarte tatin',
        'Madeleines',
        'Cookies'
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteDesserts');
  
    //on setup le random
    randomItem = MaisonEteDesserts[Math.floor(Math.random()*MaisonEteDesserts.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};

// FONCTION MAISON ETE EXPRESS

function MaisonEteEpress(){

    //liste des repas Express

    let MaisonEteEpress = [
        'Pizzas',
        'Croques Monsieur', 
        'Tresses Jambon Fromage', 
        'Paniers Jambon Fromage Champignons', 
        'Paella', 
        'Poulet Basquaise', 
        'Omelette', 
        'Hot dog', 
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteEpress');
  
    //on setup le random
    randomItem = MaisonEteEpress[Math.floor(Math.random()*MaisonEteEpress.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};

// FONCTION MAISON ETE LIGHT

function MaisonEteLight(){

    //liste des repas léger

    let MaisonEteLight = [
        'à définir : menus compensatoires',
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteLight');
  
    //on setup le random
    randomItem = MaisonEteLight[Math.floor(Math.random()*MaisonEteLight.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};

// FONCTION MAISON ETE PLAT UNIQUE

function MaisonEteUnique(){

    //liste de plats cuisinés
    
    let MaisonEteUnique = [
        'Eggs Muffin', 
        'Burger Maison', 
        'Hachis parmentier',
        'Pates Carbonara',
        'Lasagnes',
        'Pates Bolognaise',
        'Tartiflette',
        'Raclette',
        'Fondue Bourguignonne',
        'Moussaka',
        'Chili con carné',
        'Pasta boulette',
        'Poireaux aux Jambon',
        'Rougaile saucisses',
        'Couscous',
        'Taboulet',
        'Salade de pates',
        'Salade de riz',
        'Légumes farcies',
        'Poulet Coco et Riz',
        'Tarte à la tomate',
        'Quich',
        'Tarte aux poireaux',
        'Saucisses Lentilles',
        'Fajitas'
    ];

    //on target l'element span par son tag 
    let x = document.getElementsByClassName('MaisonEteUnique');
  
    //on setup le random
    randomItem = MaisonEteUnique[Math.floor(Math.random()*MaisonEteUnique.length)];

    //On fait un innerHTML sur le mot generé aleatoirement que l'on associe
    //a l'entrée [0] de l'élement span
    x[0].innerHTML = randomItem;

};


