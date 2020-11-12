function chercher() {
    let nomCommunes = document.getElementById('nomCommunes').value;
    let stationFonctionement = document.getElementById('StationFonctionnement').value;
    //console.log(nomCommunes)
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=50000&sort=-nom_arrondissement_communes&facet=nom_arrondissement_communes&facet=name&facet=coordonnees_geo&facet=ebike&facet=mechanical&facet=numbikesavailable&facet=capacity&facet=stationcode&facet=numdocksavailable')

    let data = [];
    let data_nobs = ["Nombre bornettes libres", "Nombre total vélos diponibles", "vélos mécanique disponibles", "vélos éléctriques disponibles", "capacité de la station"];
    let nbre_nobs = [0, 0, 0, 0, 0];
    let etat_Fonctionnement = ["OUI", "NON"];
    let nbre_Fonctionnement = [0, 0];

    xhr.onload = function() {
        let resultat = xhr.response.records
        for (let i = 0; i < resultat.length; i++) {
            let resultatStatus = resultat[i].fields;

            for (let j = 0; j < data_nobs.length; j++) {
                if (resultatStatus.plugs_status == data_nobs[j])
                    nbre_nobs[j] = nbre_nobs[j] + 1;
            }
            for (let n = 0; n < etat_Fonctionnement.length; n++) {
                if (resultatStatus.plugs_outletmodel == etat_Fonctionnement[n])
                    nbre_Fonctionnement[n] = nbre_Fonctionnement[n] + 1;
            }
        }

    }


}