<script>
  import JawsUnoMain from "$lib/JawsUnoMain.png";
</script>

<body class="displ">
  <div class="groundBack">
    <div class="inner">
      <h1 class="UnoTitle">JawsUno</h1>
      <img class="JawsPicTitle" src={JawsUnoMain} alt="" />
      <h1>- Multiplayer</h1>
    </div>
    <div class="divSec2">
      <p class="Title2">
        Just like UNO ® but better! Free to play online with friends!
      </p>
    </div>
    <div>
      <p class="Title3">Invite your friends to play with you:</p>
    </div>

    <div class="playerSection"></div>
  </div>
</body>

<style>
  body {
    background-color: rgb(178, 81, 162);
  }

  .displ {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Title3 {
    font-size: 30px;
    margin-top: -55px;
    margin-left: 25px;
  }

  .groundBack {
    width: 1700px;
    height: 1000px;
    /* margin: 0 auto; */
    border-radius: 25px;
    background-color: rgb(142, 194, 10);
    margin-top: 10px;
  }

  .Title2 {
    font-size: 40px;
    font-weight: 400px;
    margin-left: 25px;
    margin-bottom: 100px;
  }

  .inner {
    display: flex;
    flex-direction: row;
    gap: 1em;
    color: rgb(0, 0, 0);
    font-size: 38px;
    margin-left: 25px;
  }

  .JawsPicTitle {
    max-width: 100px;
    max-height: 100px;
    margin-top: 45px;
  }
</style>
