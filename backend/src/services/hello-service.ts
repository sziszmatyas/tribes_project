import { HelloWorldResponse } from '../models/hello-world'

const getHelloWorld = async (name: string): Promise<HelloWorldResponse> => {
  const timeout = 100
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve({ message: `hello ${name}` })
      } else {
        reject('without a name I am not gonna say hello')
      }
    }, timeout)
  })
}

export const helloService = {
  getHelloWorld,
}
