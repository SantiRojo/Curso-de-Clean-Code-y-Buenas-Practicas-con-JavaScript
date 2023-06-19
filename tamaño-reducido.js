class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return true;
  }
}

class UserSettings extends UserAuth {
  constructor(user, settings) {
    super(user);
    this.settings = settings;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      console.log(`Puede modificar su configuración a ${this.settings}`)
    } else {
      console.log('No tiene acceso')
    }
  }
}

const newAccess = new UserSettings('Santi', 'Dark Mode');
newAccess.changeSettings();