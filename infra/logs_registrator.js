import { writeFile, open } from "node:fs/promises";

async function writeLog(text) {
  try {
    await writeFile("./infra/log.txt", `\n${text}`, { flag: "a" }); // flag 'a', if not exist will be created
  } catch (err) {
    console.log(`Deu erro: ${err}`);
  }
}

async function readLog() {
  const fd = await open("log.txt");

  const read = await fd.readFile({ encoding: "utf-8" });

  console.log(read);
}

export { writeLog, readLog };
