import { buildSchema } from 'graphql';
import { getHelloWorld, getHello } from './providers/HelloWorldProvider';
import { getMessage, setMessage } from './providers/MessageProvider';

export const schema = buildSchema(`
  type Query {
    helloworld: String
    hello(name: String): String
    message: String
  }

  type Mutation {
    setMessage(message: String): String
  }
`);

export const root = {
  helloworld: () => getHelloWorld(),
  hello: ({name}:{[key:string]:any}) => getHello(name),
  message: () => getMessage(),
  setMessage: ({message}:{[key:string]:any}) => setMessage(message)
}