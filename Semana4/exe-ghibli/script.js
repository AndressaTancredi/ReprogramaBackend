const obj = [
      {
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
      },
      {
        "title": "Grave of the Fireflies",
        "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
      },
      {
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."
      },
      {
        "title": "Kiki's Delivery Service",
        "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
      },
      {
        "title": "Only Yesterday",
        "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self."
     }
    ]

//Começa o exercício:

const app = document.getElementById("root");
const container = document.createElement("div"); //Criando uma div, essa poderia fazer no HTLM.
container.setAttribute("class","container"); //Add um atributo (classe) e um valor (nome da classe). 
app.appendChild(container); //Inseri o container no app.

//Usar o for para garantir que quando a API aumentar meu código vai suportar automáticamente.
for (let i=0; i<obj.length; i++){
  console.log(obj[i].title) //Acessar a propriedade da array
  console.log(obj[i].description)

  //Criar o card
  let card = document.createElement("div");
  card.setAttribute("class","card"); //Add um atributo e valor
  container.appendChild(card);
  //Criar o títilo
  let title = document.createElement("h1");
  title.innerHTML = obj[i].title; //inner = dentro (<h1>INSIRA AQUI DENTRO</h1>)
  card.appendChild (title);
  //Criar a descrição
  let description = document.createElement("p");
  description.innerHTML = obj[i].description;
  card.appendChild (description);
}



