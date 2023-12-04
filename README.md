# <h1 id="cat-breeds"> cat-breeds 🐈‍⬛ </h1>

#### Know more about cat-breeds in respect of country
**cat-breeds**, This is an API, will help the users to know more about the cats.
Have three types of APIs here, Basically two are used cat-breeds data, and one for payload pushing.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#apisRef" >Routers References</a></p>
####   <p><a href="#features" >Features</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/cat-breeds?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/cat-breeds?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/cat-breeds)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/cat-breeds?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/cat-breeds) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/cat-breeds)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/cat-breeds)


<a href="#cat-breeds">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p>
    <img src="" alt="Home" width="300" />
    <img src="" alt="Admin" width="300" />
</p>

<a href="#cat-breeds">Go Home </a>


## <h2 id="stack" >Tech Stack </h2>

**Server:** NodeJS, ExpressJS


<a href="#cat-breeds">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/cat-breeds
```

Go to the project directory

```bash
  cd cat-breeds

```
Install dependencies

```bash
  yarn
```

Start the Server

```bash
  yarn start (only run server for first time)
  yarn dev (running server in every saving iteration)
```

<a href="#cat-breeds">Go Home </a>


## <h2 id="apisRef">APIs Reference </h2>

To get the informantion about the routers can checkout *routers/index.js* file

#### Get all cat-breeds

```http
  GET /api/all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | - | Download a text file, will give all informaton have in  <a href="https://catfact.ninja/breeds " target="_blank" rel="noopener noreferrer">cat-breeds</a> |

<p text-align="center">

  <img src="https://github.com/Nik4Furi/Nik4Furi/assets/91304976/af627a44-c98b-42a4-a130-3ae51f43e5a7" alt="Home" width="300" />

</p>

#### Get cat-breeds in respect of country

```http
  GET /api/breeds
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `country` | `string` | Fetching the cat-breeds in their country name |

<p text-align="center">

  <img src="https://github.com/Nik4Furi/Nik4Furi/assets/91304976/93208c3d-19d0-4eb4-9513-81a787f8df0d" alt="Home" width="300" />

</p>

#### Check payload length

```http
  POST /api/payload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | - | in *req.body*, set the **payload**, and we try to posting the payload data in api |

<p text-align="center">

  <img src="https://github.com/Nik4Furi/Nik4Furi/assets/91304976/6fd2ad7a-82ec-4eb6-b752-786262e6cb8f" alt="Home" width="300" />

</p>



## <h2 id="features">Features </h2>

- Get all the cat-breeds data in .txt file
- Can filter cat-breeds by their country
- Check payload data is can be push or not


<a href="#cat-breeds">Go Home </a>