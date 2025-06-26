# <a href="https://jinuine505.github.io/pokemon-tcg-pocket-tracker/">Pokemon TCG Pocket Database</a>
A site to track which cards you've collected in the Pokémon TCG Pocket game. This project keeps your collection organized and tracks the cards you want to obtain.

## Features
* Site automatically adds new sets/cards as they are added to the game
* Cards are grayed out until marked as collected
* Star cards to save desired cards and view them in the starred cards page
* Search for any card in the game
* View information about a card's set origin and any alternative versions
* Collected and starred cards saved to local storage
* Desktop and mobile viewing

## Data Sources
1. Set data, including their name and image[^1], is obtained from [TCGdex](https://tcgdex.dev/tcg-pocket), which contains detailed data about the Pokémon TCG. This project uses their Pokémon TCG Pocket data specifically.
2. Card data, including their name, set origin, image, health, type, rarity, and illustrator, is obtained from [pokemon-tcg-pocket-cards](https://github.com/chase-manning/pokemon-tcg-pocket-cards). This is an open-source repository containing data on the Pokémon TCG Pocket Cards

[^1]: Currently, TCGdex does not include the image for set A3a in their database

## Tech Stack
1. [ReactJS](https://reactjs.org/) - Component-based JavaScript library
2. [Vite](https://vite.dev/) - Frontend build tool
3. [TanStack Query](https://tanstack.com/query/latest) - A data-fetching library

This project was bootstrapped using **Vite**. All components are built with **ReactJS**. Data fetching and caching are handled with **TanStack Query**.

## Libraries
1. [Font Awesome](https://fontawesome.com/) - An icon library and toolkit for the icons in this project
2. [React Router](https://reactrouter.com/) - A library for handling routing and navigation

## Running Locally
Prerequisites
* Node.js
* npm or yarn

1. Clone the repository
 
```bash
git clone https://github.com/jinuine505/pokemon-tcg-pocket-tracker.git
cd pokemon-tcg-pocket-tracker/poke-tcg-cards
```
2. Install dependencies
   
```bash
npm install
#or
yarn install
```
3. Start the development server

```bash
npm run dev
#or
yarn dev
```

## Site images
<img width="1728" alt="Image" src="https://github.com/user-attachments/assets/b0c89a77-420a-4cd4-8b3d-7fade90d54d0" />
<img width="1728" alt="Image" src="https://github.com/user-attachments/assets/5db7829d-ed13-43da-962e-59de7b1093d4" />
<img width="1728" alt="Image" src="https://github.com/user-attachments/assets/a4473fb5-5df7-4045-85c1-4327eb2915a2" />
<img width="1728" alt="Image" src="https://github.com/user-attachments/assets/2a8c3b25-7b67-4d47-8025-6ef60fa16673" />
<img width="1728" alt="Image" src="https://github.com/user-attachments/assets/5466a967-44e2-48cc-8674-9a5a15aaca1a" />
