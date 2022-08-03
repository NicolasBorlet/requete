import React, { useEffect } from "react";
import axios from "axios";

const apidata = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  useEffect(() => {
    async function getData() {
      const response = await axios.get(apidata); //Je récupère les données de l'api
      const data = response.data; //J'isole les datas

      data.map((user) => {
        //Création de la boucle affichant les posts de tous les users
        const user1 = user; // Création variable de l'user 1

        // Condition qui me permet d'afficher uniquement les posts de l'user 1
        if (user1.userId === 1) {
          // Supression du premier et dernier post
          if (user1.id > 1 && user1.id < 10) {
            console.log(user1);
          }
        }
      });
    }
    getData();
  });
  return;
};

export default App;
