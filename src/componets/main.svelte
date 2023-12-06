<script>
  import JawsUnoMain from "$lib/JawsUnoMain.png";
  import Waves from "../lib/Waves.png";
</script>

<body>
  <div class="main-back">
    <h1 class="title">Jaws-Uno-Game</h1>
    <img class="JawsPicture" src={JawsUnoMain} alt="JawsLogo" />
    <h3 class="title-display">______________________</h3>
  </div>

  <div class="creator">
    <button>
      <a href="Settings" target="_self">Get Started!</a>
    </button>
  </div>
</body>

<style>
  body {
    background-color: rgb(255, 255, 255);
  }

  /* Apply image border to the entire website */
  body {
    margin: 0;
    padding: 0;
    border: 100px solid black; /* Set the border width */
    box-sizing: border-box; /* Ensures the border width is included in the element's total width and height */
    border-image: url("$lib/Waves.png") 200 round; /* Adjust the path to your image */
  }

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
    min-width: 200px;
    min-height: 75px;
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 400px;
    transition: all 0.45s ease-in-out;
  }

  .creator button:hover {
    background-color: rgb(239, 94, 94);
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


  .title {
    border-radius: 5px;
    border: 10px;
    font-size: 70px;
    margin-top: 10px;
    transition: all 1s ease-in-out;
  }

  .title-display {
    margin-top: 200px;
    font-size: 35px;
    font-family: sans-serif;
    color: rgb(2, 83, 129);
  }

  .title:hover {
    font-size: 80px;
    color: rgb(2, 83, 129);
  }
</style>
