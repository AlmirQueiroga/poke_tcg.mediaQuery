# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


#Projeto Pokemon TCG

###Aqui começa a descrição de desenvolvimento do aplicativo de listagem de cartas Pokemon TCG com estrutura baseada SOLID, PWA, sendo assim responsiva e mobile-first
###Utilizando Redux para manipular estado global da data e react router para redirecionamento de telas, com Sass para pre processamento

A primeira etapa de desenvolvimento seria a criação de um custom Hook que foi utilizado para identificação nas telas principais se o usuário está em um dispositivo
Mobile ou Web, mudando a exibição de acordo. Ao ser aberta a home na versão mobile é possível ver o Carrossel desenvolvido com a utilização do bootstrap, já na versão Web sendo uma listagem padrão de containers em um Grid, ambas as visualizações também contém um TypeChip que mostra o tipo de pokemon e o seu id. As artas são recuperadas através do Redux que acessa a api e altera o estado de loading quando recupera os 250 dados contidos na primeira página, o Redux também vai ser responsável pelo retorno das cartas filtradas pela pesquisa que vai ser explicada mais tarde. Ao selecionar a carta foi necessário salvá-la no localStorage para não perder o estado global da carta ao sofrer uma atualização, desta forma ao acessar um pokemon este mesmo vai ser salvo e suas informações não serão perdidas.
