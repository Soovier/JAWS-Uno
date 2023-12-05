<!-- MyComponent.svelte -->
<script lang="ts">
  import * as cards from "../lib/main";
  // import * as UnoFile from "../lib/Cards";
  import cardBack from "../lib/cardBack (1).png";
  import * as fs from "fs";
  import * as path from "path";
  let deck = new cards.Deck(1);
  let cardss = deck.cards;

  const __dirname = path.resolve();
  const unoCardsPath = path.join(__dirname, "static", "UnoCards");

  function cardToUI(cardArray: any[]) {
    fs.readdir(unoCardsPath, (err, files) => {
      if (err) throw err;

      for (let i = 0; i < cardArray.length; i++) {
        files.forEach((file) => {
          let fileName: string = path.join(unoCardsPath, file);
          let compressedName =
            fileName.split("\\")[fileName.split("\\").length - 1];
          let fileColor = compressedName.substring(0, -5);
          let fileNumber = compressedName.substring(compressedName.length - 1);
          console.log("File Number: " + fileNumber);
        });
      }
    });
  }

  cardToUI(cardss);
  // console.log(UnoFileaddCardAttributes());
  console.log("Working");
  // console.log(UnoFile.getFile());
  // cardToUI(cardss); // turns cards into UI
  // console.log(cardss);
</script>

<body>
  <li class="boxplay center">
    <div class="play p1">1</div>
    <div class="play p2">2</div>
    <div class="play p3">3</div>
    <div class="play p4">4</div>
  </li>
  <div class="container">
    <img class="backHand" src={cardBack} alt="DECK" />
  </div>
</body>

<style>
  body {
    overflow: hidden;
    padding: 0;
  }

  .boxplay {
    list-style: none;
    color: rgb(255, 0, 0);
  }

  .container {
    position: absolute;
    left: 650px;
    bottom: 500px;
  }

  .backHand {
    /* position: absolute; */
    width: 120px;
  }

  .play {
    width: 850px;
    height: 850px;
    background-color: rgb(255, 132, 0);
    position: absolute;
  }

  .p1 {
    left: 85%;
    bottom: 100px;
    transform: rotate(90deg);
  }

  .p2 {
    right: 85%;
    bottom: 100px;
  }

  .p3 {
    top: 85%;
    bottom: 100px;
    right: 450px;
    width: 1000px;
    transform: rotate(270deg);
  }

  .p4 {
    bottom: 85%;
    /* bottom: 100px; */
    right: 450px;
    width: 1000px;
    transform: rotate(270deg);
  }
</style>
