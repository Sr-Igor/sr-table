# Sr Table

**Sr Table** é uma biblioteca para facilitar a criação de tabelas em uma aplicação ReactJS e NextJS.

<div style="border: 1px solid #f5c6cb; padding: 10px; border-radius: 5px; color: red">
    ⚠️ Aviso
    <p>
       Esse projeto utiliza MaterialUI e Styled-Components. Caso a prop `customChildren` seja passada e seu projeto também possua essas dependências, garanta de encapsulá-lo dentro do provider antes de passar o componente para evitar conflitos internos.
    </p>
</div>

---

## Instalação

Para instalar a **sr-table**, você pode usar o seguinte comando:

```bash
npm install sr-table
```

ou com yarn:

```bash
yarn add sr-table
```

---

## Exemplo de uso

Aqui está um exemplo básico de como usar a biblioteca:

```tsx
import { useState } from "react";
import { TableProvider, Table } from "sr-table";

type Data = {
  id: number;
  name: string;
  age: number;
  address: string;
};

const data: Data[] = [
  { id: 1, name: "John Doe", age: 28, address: "123 Main St" },
  { id: 2, name: "Jane Doe", age: 32, address: "456 Oak Ave" },
];

function App() {
  const [states, setStates] = useState<any>({
    selects: [],
    loading: false,
    loadingLines: [],
    pagination: {
      page: 1,
      search: "",
      sortBy: { key: "name", order: "asc" },
    },
  });

  const handleState = (key: string, value: any) => {
    setStates((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ padding: 20 }}>
      <TableProvider>
        <Table
          data={data}
          count={data.length}
          pagination={states.pagination}
          setPagination={(pagination) => handleState("pagination", pagination)}
          columns={[
            { title: "Name", dataIndex: "name", sortBy: true },
            { title: "Age", dataIndex: "age" },
            { title: "Address", dataIndex: "address" },
          ]}
        />
      </TableProvider>
    </div>
  );
}

export default App;
```

Este exemplo demonstra como configurar um componente de tabela simples com `sr-table` em uma aplicação React. Certifique-se de personalizar os dados e as colunas de acordo com sua necessidade.

**_Para NextJS utilize o caminho de importação:_**

```tsx
import { TableProvider, Table } from "sr-table/next";
```

---

## Tipagens

#### ITableProps<T extends { id: string }>

| Prop            | Type                                   | Description                                        | Required | Default |
| :-------------- | :------------------------------------- | :------------------------------------------------- | :------- | :------ |
| data            | T[]                                    | Arrays dos dados que serão exibidos                | true     | []      |
| count           | Number                                 | Quantidade total de items somando todas as páginas | false    | 0       |
| pages           | Number                                 | Quantidade de páginas que a tabela possui          | false    | 0       |
| visible         | Number                                 | Quantidade de items visível por página             | false    | 10      |
| loading         | Boolean                                | Se a tabela está em estado de carregamento         | false    | false   |
| selects         | String[]                               | Linhas selecionadas pelo checkbox                  | false    | []      |
| columns         | Column<T>[]                            | Estrutura das colunas                              | true     | []      |
| pagination      | Pagination                             | Estado da paginação                                | false    | null    |
| loadingLines    | String[]                               | Linhas especificas que estão em carregamento       | false    | []      |
| actions         | ActionsProps<T>                        | Elementos na coluna de ação                        | false    | null    |
| setSelects      | (id: string[] => void)                 | Função chamada ao selecionar checkbox              | false    | null    |
| setPagination   | (pagination: Pagination => void)       | Função chamada ao alterar elementos da paginação   | false    | null    |
| emptyImageProps | React.HTMLAttributes<HTMLImageElement> | Imagem exibida na tabela vazia                     | false    | null    |
| wrapperProps    | React.HTMLAttributes<HTMLDivElement>   | Elemento root que engloba a tabela                 | false    | null    |
| onClickRow      | (item: T) => void                      | Função chamada ao clicar em uma linha especifica   | false    | null    |

#### Column<T extends { id: string }>

| Props          | Type                                                  | Description                                                               | Required | Default |
| :------------- | :---------------------------------------------------- | :------------------------------------------------------------------------ | -------- | ------- |
| title          | String                                                | Título da coluna                                                          | true     | ''      |
| width          | String                                                | Largura fixa da coluna                                                    | false    | auto    |
| sortBy         | KeyOf T or String or Boolean                          | Se a coluna pode ser ordenável e qual a key quando clicada                | false    | false   |
| dataIndex      | KeyOf T                                               | Index de onde a tabela irá coletar o valor                                | true     | ''      |
| fixed          | left or right                                         | Define se a coluna se manter fixa em alguma posição                       | false    | null    |
| lineType       | Line or Status                                        | Tipo da linha                                                             | false    | Line    |
| format         | (item: T) => string                                   | Formata o valor que sera exibido. OBS: sobrescreve dataIndex              | false    | null    |
| image          | Image<T>                                              | Imagem exibida junto da linha                                             | false    | null    |
| minWidthToHide | Number                                                | Oculta a coluna se o tamanho da tela for menor que o definido             | false    | null    |
| tooltip        | Tooltip                                               | Exibe caixa de texto ao passar o mouse sobre o conteúdo da coluna         | false    | null    |
| textStyle      | (item: T, theme: DefaultTheme) => React.CSSProperties | Define o estilo do texto                                                  | false    | null    |
| statusStyle    | (item: T) => Status                                   | Define qual status será exibido (Funciona somente com lineStyle = Status) | false    | null    |
| customChildren | (item: T) => React.ReactNode                          | Passa um componente customizado para ser exibido na coluna                | false    | null    |

#### Pagination

| Props  | Type                                    | Description                        |
| :----- | :-------------------------------------- | :--------------------------------- |
| page   | String                                  | Página atual da tabela             |
| search | String                                  | Texto externo que está em pesquisa |
| sortBy | { key: string; order: "asc" or "desc" } | Chave de ordenação atual da tabela |

#### ActionProps<T extends { id: string }>

| Props   | Type     | Description                                                             |
| :------ | :------- | :---------------------------------------------------------------------- |
| item    | T        | Item da coluna                                                          |
| actions | Action[] | Ações que serão exibidas no popover                                     |
| loading | Boolean  | Define se a tabela está em loading para evitar vários cliques nas ações |

#### Action<T extends { id: string }>

| Props   | Type                 | Description                                                  |
| :------ | :------------------- | :----------------------------------------------------------- |
| title   | String               | Título da ação                                               |
| onClick | (item: T) => void    | Ação chamada quando a ação é clicada                         |
| hide    | (item: T) => boolean | Define se a ação deve ser ocultada para uma linha especifica |

#### Image<T>

| Props | Type    | Description                         |
| :---- | :------ | :---------------------------------- |
| path  | KeyOf T | Em qual linha a imagem será exibida |
| alt   | String  | Texto alternativo da imagem         |

#### Tooltip<T>

| Props | Type                                                   | Description                              |
| :---- | :----------------------------------------------------- | :--------------------------------------- |
| title | (item: T) => string                                    | Texto que será exibido ao passar o mouse |
| style | (item: T, theme: DefaultTheme) => React.CSSProperties; | Estilo do box de texto                   |

#### Status<T>

| Props | Type                                               | Description                      |
| :---- | :------------------------------------------------- | :------------------------------- |
| label | String                                             | Texto exibido na caixa de status |
| style | "gray" or "green" or "orange" or "red" or "yellow" | Cor do box do status             |

---

#### Licença

Este projeto está licenciado sob a licença [ISC](LICENSE).

---

## Autor

- **Igor Rezende**

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar problemas no repositório.

## Contact

- sr.igor.dev@gmail.com

---
