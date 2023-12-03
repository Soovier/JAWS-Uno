<script>
  import JawsUnoMain from "$lib/JawsUnoMain.png";
</script>

<body class="displ">
  <div class="groundBack">
    <div class="inner">
      <h1 class="UnoTitle">JawsUno</h1>
      <img class="JawsPicTitle" src={JawsUnoMain} alt="JawsUno Logo" />
      <h1 class="multiplayerTitle">Multiplayer</h1>
    </div>
    <div class="divSec2">
      <p class="Title2">
        Just like UNO® but better! Play online with friends for free!
      </p>
    </div>
    <div>
      <p class="Title3">Invite your friends to play with you:</p>
    </div>

    <div class="playerSection">
      <a class="startGameMAIN" href="Game">
        <button class="startGame">Start Game</button>
      </a>
    </div>
  </div>
</body>

<style>
  body {
    background-color: #2c3e50; /* Dark Blue */
    margin: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }

  .displ {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .groundBack {
    width: 80%; /* Adjusted width */
    max-width: 800px; /* Set a max-width for responsiveness */
    margin: auto;
    border-radius: 15px;
    background-color: #3498db; /* Blue */
    padding: 10px;
    box-sizing: border-box;
    color: #fff; /* White */
    overflow: hidden;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
  }

  .UnoTitle {
    margin: 0;
    color: #fff; /* White */
  }

  .JawsPicTitle {
    max-width: 80px;
    max-height: 80px;
    margin-top: 5px;
  }

  .multiplayerTitle {
    margin: 0;
    color: #ecf0f1; /* Light Grey */
  }

  .divSec2 {
    margin-top: 5px;
  }

  .Title2 {
    font-size: 1em;
    margin: 0;
    color: #ecf0f1; /* Light Grey */
    text-align: center;
  }

  .Title3 {
    font-size: 1.2em;
    margin: 5px 0;
    color: #ecf0f1; /* Light Grey */
    text-align: center;
  }

  .playerSection {
    background-color: #2980b9; /* Dark Blue */
    border-radius: 10px;
    padding: 5px; /* Adjusted padding */
    margin-top: 5px;
  }

  .startGameMAIN {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .startGame {
    background-color: #e74c3c; /* Red */
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 1em;
    color: #fff; /* White */
    cursor: pointer;
  }
</style>
