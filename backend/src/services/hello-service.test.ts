import { helloService } from './hello-service'

test('getHelloWithoutParameter', async () => {
  await helloService
    .getHelloWorld('')
    .catch(e => expect(e).toEqual('without a name I am not gonna say hello'))
})

test('getHelloToFox', async () => {
  const result = await helloService.getHelloWorld('Fox')

  expect(result.message).toEqual('hello Fox')
})
