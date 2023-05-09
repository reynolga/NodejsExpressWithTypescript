import {connectNew} from "src/test/test"

export const connect = () => {
  console.log("Connecting..");
  connectNew();
  setTimeout(() => { console.log("Connected")}, 5000);

  
}