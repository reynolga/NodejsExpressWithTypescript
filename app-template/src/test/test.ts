import 'dotenv/config'

export const connectNew = () => {
  console.log("Connecting..");
  setTimeout(() => { console.log("Connected")}, 5000);
}