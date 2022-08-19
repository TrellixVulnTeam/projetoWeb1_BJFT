Dupla: Paloma Abreu e Bruna Rezende

Foi criado o modelo de um carrinho de compras para uma sessão de cinema. O cliente pode se cadastrar informando alguns campos através da rota /create-customer, como nome, telefone e email. O mesmo poderá também editar seus dados através da rota /update-customer/:id. O carrinho de compras (basket) deve ser criado para cada cliente, informando como parâmetro da requisição /create-basket/:id o id do cliente ao qual o carrinho pertence. Ao deletarmos um cliente, deletamos também o seu carrinho de compras. 

Os filmes disponíveis podem ser vistos através da rota /movies. Cada filme possui algumas informações, como nome, duração, gênero e valor. Não existe rota para adicionar filmes. Deverá ser feito através do script.

Para adicionar um filme a um carrinho devemos usar a rota /add-movie/:id, onde o id é o do cliente e no corpo da requisição deverá ter o parâmetro movieId referente ao filme que você quer adicionar. 

Para editar o filme escolhido, basta usar a rota /add-movie/:id novamente. 

O banco de dados salvo já possui 3 clientes e seus respectivos carrinhos de compras. 