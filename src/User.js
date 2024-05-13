class User {
    firstName;
    lastName;
    middleName;
    constructor(data = {}) {
      this.firstName = data.firstName  || '';
      this.lastName = data.lastName || '';
      this.middleName = data.middleName || '';
    }

    get Fullname(){
        if(this.middleName.lenght > 0){
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
        return `${this.firstName} ${this.lastName}`
    }
    
  }