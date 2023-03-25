<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Menus</title>
</head>
<body>
    <header>
        <div class="container text-center">
            <h1>Générateur de menus</h1>
            <hr>
            <h2>Frédéric Doidi</h2>
            <a href="https://fmndev.com/"><h3>www.fmndev.com</h3></a>
        </div>
    </header>
    <main>
        <div class="container mt-3">
            <div class="row text-center justify-content-around">
                <h3 class="bg-primary text-white py-3">Repas Complet</h3>
                <div class="col col-12 col-md-6 col-xl-4 col-xxl-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h5 class="card-title">Entrée</h5>      
                        </div>  
                        <div class="card-body">
                            <p class="card-text"><span class="MaisonEteEntrees"></span></p>
                            <a><button class="btn btn-success" onclick="MaisonEteEntrees()">Générer</button></a>
                        </div>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                <h5 class="card-title">Viande ou Poisson</h5>        
                            </div>
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteViande"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteViande()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                <h5 class="card-title">Accompagnement</h5>    
                            </div>    
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteAccompagnement"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteAccompagnement()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                <h5 class="card-title">Dessert</h5>        
                            </div>
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteDesserts"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteDesserts()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="row text-center">        
                    <h3 class="bg-primary text-white py-3">Repas Autres</h3>                        
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                <h5 class="card-title">Repas Express</h5>        
                            </div>
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteEpress"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteEpress()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem; ">
                            <div class="card-header">
                                <h5 class="card-title">Repas Light</h5>        
                            </div>
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteLight"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteLight()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4 col-xxl-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                <h5 class="card-title">Plat Unique</h5>   
                            </div>     
                            <div class="card-body">
                                <p class="card-text"><span class="MaisonEteUnique"></span></p>
                                <a><button class="btn btn-success" onclick="MaisonEteUnique()">Générer</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>

    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>