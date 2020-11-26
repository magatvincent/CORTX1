//Components
class CNameVannes_V1 {
  constructor(name) {
    this._name = name;
    this._ComponentType="V1";
    this.Info();
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.Info();
  }

  Info() {
    console.log(this._name + ' is a component type:' + this._ComponentType);
  }
}

class CNamePompesDeVide_PV1 {
  constructor(name) {
    this._name = name;
    this._ComponentType="PV1";
    this.Info();
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.Info();
  }

  Info() {
    console.log(this._name + ' is a component type:' + this._ComponentType);
  }
}

exports.CNameVannes_V1 = CNameVannes_V1; 
exports.CNamePompesDeVide_PV1 = CNamePompesDeVide_PV1; 