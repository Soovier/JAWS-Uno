<script>
  function makeGame() {
    alert("GAME BEING MADE");
  }
  import JawsUnoMain from "$lib/JawsUnoMain.png";
  import Waves from "../lib/Waves.png";
</script>

<body>
  <div class="main-back">
    <br>
    <img class="JawsPicture" src={JawsUnoMain} alt="JawsLogo" />
    <h3 class="title-display">Please Enter Your Game ID</h3>
    <input class="ID-Enter" type="text" />
  </div>

  <div class="creator">
    <button>
      <a href="/Settings" target="_self">Create Game</a>
    </button>
    <button>Submit Game ID</button>
  </div>
</body>

<style>
  body {
    background-color: rgb(255, 255, 255);
  }

  /* Apply image border to the entire website */

  .creator {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2em;
  }

  .JawsPicture {
    max-width: 400px;
    margin-bottom: -150px;
    border-radius: 30px;
  }


  .creator button {
    margin-top: 15px;
    min-width: 100px;
    min-height: 25px;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 400px;
    transition: all 0.45s ease-in-out;
  }

  .creator button:hover {
    background-color: rgb(37, 97, 181);
    font-size: 30px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .main-back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .ID-Enter {
    border-radius: 50px;
    outline: none;
    text-decoration: none;
    width: 25%;
    height: 30px;
  }


  .title-display {
    margin-top: 200px;
    font-size: 35px;
    font-family: sans-serif;
    color: rgb(37, 97, 181);
  }

</style>
