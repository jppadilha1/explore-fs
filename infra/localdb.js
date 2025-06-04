import { writeLog, readLog } from "./logs_registrator.js";

export default class DbInstance {
  qtusers = 0;
  data = [];

  create(name, email) {
    this.qtusers += 1;

    const data = {
      id: this.qtusers,
      name: name,
      email: email,
    };
    this.data.push(data);

    writeLog(`User "${name}" was created;`);
  }

  findUser(email) {
    this.data.forEach((user) => {
      if (user.email == email) {
        return user;
      } else {
        console.log("User doesn't exist");
        return;
      }
    });
  }

  read() {
    console.log(this.data);
  }
}
