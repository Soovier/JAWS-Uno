<!-- MyComponent.svelte -->
<script lang="ts">
  import * as cards from "$lib/main";
  import cardBack from "$lib/cardBack (1).png";
  import cardsImgs from "$lib/files";
  let game = new cards.Game();
  game.addPlayer("Computer");
  game.addPlayer("Player 1");
  game.start();
  let player1 = game.players[0];
  let player2 = game.players[1];

  function handleClick(playercardArray: any | cards.Card, index: number) {
    console.log(playercardArray[index].color);
    console.log(playercardArray[index].type);
    console.log(playercardArray[index].value);
  }
  console.log("Loaded");
  // console.log(player1.cards);
</script>

<body class="disBox forplayer1">
  <!-- <div><img class="startCard" src={cardsImgs[4]} alt="startCard" /></div> -->
  <div class="backContain" style="width:100%; height:100% z-index: 0; ">
    {#each player2.cards as card, i}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <!-- svelte-ignore a11y-invalid-attribute -->
      <!-- svelte-ignore a11y-missing-content -->
      <a href="#">
        <img
          style="width: {125 + i * 0.5}px; margin-bottom: 20px; order: 2 "
          class="cardImages"
          src={cardsImgs[card.cardString]}
          alt="Card image"
        />
      </a>
      <!-- <h1 style="color: beige;">bot</h1> -->
    {/each}
  </div>

  <div
    class="backContain"
    style="width:100%; height:100% z-index: 10; margin-top: 200px "
  >
    {#each player1.cards as card, i}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <!-- svelte-ignore a11y-invalid-attribute -->
      <!-- svelte-ignore a11y-missing-content -->
      <a on:click={(event) => handleClick(player1.cards, i)} href="#">
        <img
          style="width: {125 + i * 0.5}px"
          class="cardImages"
          src={cardsImgs[card.cardString]}
          alt="Card image"
        />
      </a>
      <!-- <h1 style="color: aliceblue;">player</h1> -->
    {/each}
  </div>

  <div class="container" style="display: flex; gap: 30em">
    <img class="backHand" src={cardBack} alt="DECK" />
    <a href="#" style="color: white; font-size: 30px;">Uno Button</a>
  </div>
</body>

<style>
  body {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    height: 98vh;
    background-image: url("$lib/woodback.png");
    background-color: rgb(255, 221, 0);
  }

  .disBox {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 35em;
  }

  .cardImages {
    transition: all 0.6s ease-in-out;
  }

  .cardImages:hover {
    margin-bottom: 25px;
    height: 190px;
  }

  .backContain {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: rgb(0, 0, 0); */
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
