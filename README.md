
# Challenge para desenvolvedor Full Stack

Este é um projeto desenvolvido como parte do desafio para a avaliação de habilidades técnicas no papel desenvolvedor Full-stack

O objetivo desse desafio foi dominar e integrar diferentes tecnologias que contemplam o ambiente client/server

Link para o Desafio :https://github.com/RoutEasy/challenge-fullstack?tab=readme-ov-file#challenge-para-desenvolvedor-full-stack

Link para a Aplicação : https://mern-fullstack-challenger.vercel.app/


## Funcionalidades

**Cadastrar Entregas no Forumulário:**

- Utilizar a interface para Cadastrar Entregas e suas respectivas informações.

**Buscar Geolocalização:**

- Utilizar o endereço da Entregar para fazer uma busca das Cordenadas (Latitude/Longitude) da entrega utilizando a Geolocation Google API.


- Link da Google API : https://developers.google.com/maps/documentation/geolocation/overview?hl=pt-br

**Renderizar no Mapa o local exato da entrega** 

- Utilizar as Cordenadas correspondentes para mostrar no mapa o local exato daquela entrega utilizando uma third party library.
- Link do React Leaflet : https://react-leaflet.js.org/

**Mostrar as Entregas na Tabela**

- Apresenta uma previsão das entregas na tabela de acordo com os dados correspondentes dos usuários cadastrados nas entregas.

**Mostar o Total de Entregas**

- Apresenta o total de entregas e também o peso total em Kg de todas as entregas.

**Resetar as Entregas**

- Considerar resetar todos as entregas cadastradas.



## Demonstração

https://mern-fullstack-challenger.vercel.app/



## Instalação

Faça o clone do projeto para a máquina local

```bash
  git clone https://github.com/SrLuc/MERN-Fullstack-Challenger.git
```
    
No diretório **raíz** do projeto e **Instale as dependencias do Backend**

```bash
    npm install
```

No diretório **view** do projeto e **Instale as dependencias do Frontend**

```bash
    npm install
```

Para rodar tanto o Frontend quando o Backend, no diretórios correspondentes a cada um, rode o comando
```bash
    npm run dev
```
## Stack utilizada

**Front-end:** 
- Vite 
- React/Typescript
- Styled-Components, TailwindCSS, 
- Leaflet Map Libray, 
- Jest and Testing Library

**Back-end** : 
- NodeJS, 
- Axios,
- CORS 
- Express/ Express-Validator, 
- MongoDB, Mongoose, 
- Swagger-UI-Express
- Dotenv
- Google Geocode API  



## Screenshots

![App Screenshot](/assets/Screenshot%20Capture1.png)
![App Screenshot](/assets/Screenshot%20Capture2.png)
![App Screenshot](/assets/Screenshot%20Capture3.png)

## Documentação da API

A Documentação da API está **disponível no Swagger**, neste link:

https://delivery-api-7rc8.onrender.com/documentation/