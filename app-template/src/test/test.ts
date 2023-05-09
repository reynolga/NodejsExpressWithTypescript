import 'dotenv/config'

export const connectNew = (): void => {
  console.log('Connecting..')
  setTimeout(() => { console.log('Connected') }, 5000)
}
