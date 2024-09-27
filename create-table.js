import { sql } from './db.js'

sql`
  CREATE TABLE neymar (
      id text PRIMARY KEY,
      idade character varying(255),
      posição character varying(255),
      nome_da_esposa character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})