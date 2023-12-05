<!-- MyComponent.svelte -->
<script lang="ts">
  import * as cards from "$lib/main";
  import cardBack from "$lib/cardBack (1).png";
  import cardsImgs from "$lib/files";
  let game = new cards.Game();
  game.addPlayer("Striker");
  game.addPlayer("Stephen");
  game.start();
  let player1 = game.players[0];
  let player2 = game.players[1];

  console.log(player1.cards);

  console.log("Working");
</script>

<body>
  <div class="backContain" style="width:100%; height:100% z-index: 10; ">
    {#each player1.cards as card, i}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        style="width: {100 + i * 0.1}px"
        class="cardImages"
        src={cardsImgs[card.cardString]}
        alt="Card image"
      />
    {/each}
  </div>

  <div class="container">
    <img class="backHand" src={cardBack} alt="DECK" />
  </div>
</body>

<style>
  body {
    overflow: hidden;
    padding: 0;
  }

  .backContain {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
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
</style>
