var CSmartVibro = require('./ClasseSmartVibro');

var fs = require('fs');
var ComponentsTypeName = JSON.parse(fs.readFileSync('ComponentTypeName.json', 'utf8'));
var SubsystemHydraulicStation = JSON.parse(fs.readFileSync('SubsystemHydraulicStation.json', 'utf8'));
var SubsystemTransferHoppe = JSON.parse(fs.readFileSync('SubsystemTransferHoppe.json', 'utf8'));
var SubSystemVacuumUnit = JSON.parse(fs.readFileSync('SubSystemVacuumUnit.json', 'utf8'));
var SubsystemVibroCompactorName = JSON.parse(fs.readFileSync('SubsystemVibroCompactor.json', 'utf8'));

//Création du System avant création des objet des Components
var SmartVibro=[
    SubsystemHydraulicStation,
    SubsystemTransferHoppe,
    SubSystemVacuumUnit,
    SubsystemVibroCompactorName
  ]

  let toto = new CSmartVibro.CNameVannes_V1('MA vanne');
  let toto1 = new CSmartVibro.CNamePompesDeVide_PV1('MA pompes');