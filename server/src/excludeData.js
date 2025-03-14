const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../database.db');

// Atualizando um produto
db.run(`UPDATE product 
    SET category = REPLACE(category, 'Shirt', 'Shirts')`, function(err) {
if (err) {
console.error(err.message);
} else {
console.log(`Produtos atualizados com sucesso! Linhas afetadas.`);
}
});



db.close();
