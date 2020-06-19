type FakeDB = {[key:string]:any}

let db : FakeDB = {};

export const getMessage = async () => db.message;

export const setMessage = async (message: String) => { 
  db.message = message;
  return db.message;
}
