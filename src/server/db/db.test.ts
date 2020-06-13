import { Client, ClientConfig } from "pg";

const devConfig:ClientConfig = {
    user: 'postgres',
    database: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 8432,
}

describe('Database Tests', () => {
  test('database connected suscessfully', async () => {
    const client = new Client(devConfig)

    await client.connect()
    const result = await client.query('SELECT $1::text as message', ['Hello'])
    expect(result.rows[0].message).toEqual("Hello");
    await client.end()
  });
});
