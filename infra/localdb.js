import { writeLog, readLog } from "./logs_registrator.js";

class DbInstance {
  qtusers = 0;
  data = new Map();

  create(name, email) {
    this.qtusers += 1;

    const data = {
      name: name,
      email: email,
    };
    this.data.set(email, data);

    const dateCreated = new Date().toUTCString();

    writeLog(`User "${name}" was created in ${dateCreated}`);
  }

  findUser(email) {
    return this.data.get(email);
  }

  read() {
    console.log(this.data);
  }
}

const localdb = new DbInstance();
export { localdb };
