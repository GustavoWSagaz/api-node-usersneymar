import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listNeymar() {
    const neymar = await sql`select * from neymar`;
    return neymar;
  }

  async createNeymar(neymar) {
    const id = randomUUID();
    console.log('id', id);
    const idade = neymar.idade;
    const posição = neymar.posição;
    const nome_da_esposa = neymar.nome_da_esposa;
    
    await sql`insert into neymar (id, idade, posição, nome_da_esposa)
    values (${id}, ${idade}, ${posição}, ${nome_da_esposa})`
  }

  async updateNeymar(id, neymar) {
    const name = neymar.name;
    const password = neymar.password;
    const profile = neymar.profile;

    await sql`update neymar set 
        idade = ${idade},
        posição = ${posição},
        nome_da_esposa = ${nome_da_esposa}
        where id = ${id}
    `;
  }

  async deleteNeymar(id) {
    await sql`delete from neymar where id = ${id}`
  }

}