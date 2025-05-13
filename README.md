<h1 align="center">CSV4Tasks</h1>

<div align="center">
  <a href="#english">English</a> |
  <a href="#portugues">Português</a>
</div>

---

# English <a name="english"></a>

CSV4Tasks is a **Node.js** (ESM) application that provides a simple CRUD API for managing tasks, plus bulk import from CSV files using streams and the `csv-parse` library.

## Summary

- [Technologies Used](#technologies-used-en)  
- [Project Structure](#project-structure-en)  
- [Installation](#installation-en)  
- [Usage](#usage-en)  
- [Author](#author-en)  

## 🚀 Technologies Used <a name="technologies-used-en"></a>

- **Node.js** v20.17.0  
- **csv-parse**: CSV parsing library for Node.js streams  

## 📁 Project Structure <a name="project-structure-en"></a>

```
├───/docs
│       Node.js-Ignite-_2025-05-13.json
├───/src
│   ├───database.js
│   ├───routes.js
│   ├───server.js
│   ├───/middlewares
│   │       json.js
│   └───/utils
│           build-route-path.js
│           extract-query-params.js
└───/streams
        csv.js
        test.csv
```

## 🛠️ Installation <a name="installation-en"></a>

1. Clone the repository  
```bash
  git clone https://github.com/Vitinho163/CSV4Tasks.git
  cd CSV4Tasks
```

2. Install dependencies
```bash
  npm install
```

3. Start the API server
```
  npm run dev
```

The server will listen on ``http://localhost:3333``.

## 🔄 Usage <a name="usage-en"></a>

### Bulk CSV Import

1. Make sure the API is running (`npm run dev`).  

2. Place your CSV file (with header `title,description`) into the `streams/` folder.

3. From project root, run:
```bash
  node streams/csv.js <your-file.csv>
```

4. Each line in the CSV will be sent as a ``POST /tasks`` to the api.

5. When processing finishes, you’ll see:
``` 
  CSV Importado!
```

<div align="center" name="author-en">
  <h4>Created with ❤️ by <a href="https://github.com/Vitinho163">João Victor</a></h4>
</div>

--

# Português <a name="portugues"></a>

CSV4Tasks é uma aplicação **Node.js** (ESM) que expõe uma API CRUD de tarefas e suporta importação em massa via CSV, utilizando streams e a biblioteca ``csv-parse``.

## Sumário

- [Tecnologias Utilizadas](#technologies-used-en)  
- [Estrutura do Projeto](#project-structure-en)  
- [Instalação](#installation-en)  
- [Uso](#usage-en)  
- [Autor](#author-en)  

## 🚀 Tecnologias Utilizadas <a name="tecnologias-utilizadas-pt"></a>

- **Node.js** v20.17.0  
- **csv-parse**: CSV parsing library for Node.js streams  

## 📁 Estrutura do Projeto <a name="estrutura-do-projeto-pt"></a>

```
├───/docs
│       Node.js-Ignite-_2025-05-13.json
├───/src
│   ├───database.js
│   ├───routes.js
│   ├───server.js
│   ├───/middlewares
│   │       json.js
│   └───/utils
│           build-route-path.js
│           extract-query-params.js
└───/streams
        csv.js
        test.csv
```

## 🛠️ Instalação <a name="instalacao-pt"></a>

1. Clone o repositório
```bash
  git clone https://github.com/Vitinho163/CSV4Tasks.git
  cd CSV4Tasks
```

2. Instale as dependências
```bash
  npm install
```

3. Inicie o servidor
```
  npm run dev
```

O servidor ficará disponível em ``http://localhost:3333``.

## Uso <a name="uso-pt"></a>

### Importação em Massa via CSV

1. Garanta que a API esteja rodando (`npm run dev`).  

2. Cole seu arquivo CSV (com cabeçalho `title,description`)na pasta `streams/`.

3. Execute no terminal, na raiz do projeto:
```bash
  node streams/csv.js <your-file.csv>
```

4. Cada linha será enviada como ``POST /tasks`` para a API.

5. Ao final do processamento, verá:
``` 
  CSV Importado!
```

<div align="center" name="autor-pt">
  <h4>Criado com ❤️ por <a href="https://github.com/Vitinho163">João Victor</a></h4>
</div>