# Projeto Lista de Compras
Este projeto é uma aplicação web simples de gerenciamento de itens utilizando as operações CRUD (Criar, Ler, Atualizar e Deletar). Foi construída com React para a criação da interface dinâmica e Redux para o gerenciamento de estado global, permitindo a manipulação de uma lista de itens, como um inventário ou lista de produtos. Os itens podem ser adicionados, editados e removidos conforme necessário.

# Descrição Geral
A aplicação permite que o usuário adicione itens a uma lista, visualize os itens existentes, edite os nomes e remova-os quando necessário. Cada item é identificado de forma única, possibilitando manipulações individuais. O uso de Redux facilita o compartilhamento do estado entre os componentes, garantindo que a lista de itens se mantenha sincronizada e reflita todas as alterações realizadas.

# Fluxo da Aplicação
- Adicionar Itens: O usuário pode inserir o nome de um novo item no formulário e clicar em "Adicionar item". Isso dispara uma ação adicionar, adicionando o novo item ao estado global.

- Listar Itens: A lista de itens é exibida através do componente Crud, que puxa o estado global com useSelector.

- Editar Itens: Ao clicar em "Editar" em um item, o campo de nome é exibido, permitindo a atualização do nome. Após a edição, a ação editar é disparada para atualizar o estado global.

- Remover Itens: O usuário pode clicar no botão "Remover" para excluir um item. A ação remover é disparada, e o item é filtrado da lista.

# Objetivo do Projeto
Este projeto serve para auxiliar o usuário a montar e gerenciar uma lista de compras, permitindo que ele adicione itens conforme necessário, edite as informações de cada item e remova aqueles que já foram adquiridos. A aplicação é ideal para organizar compras e atualizar a lista em tempo real, proporcionando uma experiência interativa e prática para o usuário.
>>>>>>> c27e0e9 (update projeto)
