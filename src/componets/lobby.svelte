<script>
  import JawsUnoMain from "$lib/JawsUnoMain.png";
</script>

<body class="displ">
  <div class="groundBack">
    <div class="inner">
      <img class="JawsPicTitle" src={JawsUnoMain} alt="" />
    </div>
    <div class="divSec2">
      <p class="Title2">
        Just like UNO but better!
      </p>
    </div>
    <div>
      <p class="Title3">Singleplayer UNO!</p>
    </div>

    <div class="playerSection">
      <h1 class="LobbyTitle">Lobby</h1>
      <a class="startGameMAIN" href="Game" target="_self">
        <button class="startGame">Start Game</button>
      </a>
    </div>
  </div>
</body>

<style>
  body {
    background-color: rgb(36, 158, 228);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .displ {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .groundBack {
    width: 900px;
    height: 600px;  /* Adjusted height */
    border-radius: 25px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    color: rgb(0, 0, 0);
    font-size: 38px;
    margin: 20px;
  }

  .JawsPicTitle {
    max-width: 150px;
    max-height: 100px;
    margin-right: 10px;
  }

  .divSec2 {
    margin: 20px;
    text-align: center;
  }

  .Title2 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .Title3 {
    font-size: 30px;
    margin-top: -15px;
  }

  .playerSection {
    background-color: rgb(228, 228, 228);
    width: 500px;  /* Kept the same width */
    height: fit-content;  /* Kept the same height */
    border-radius: 15px;
    margin: 20px;
    text-align: center;
  }

  .LobbyTitle {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .startGameMAIN {
    text-decoration: none;
  }

  .startGame {
    border: none;
    margin-top: 10px;
    width: 150px;
    height: 40px;
    border-radius: 20%;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    color: black;
  }
</style>
