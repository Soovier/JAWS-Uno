<script>
  function makeGame() {
    alert("GAME BEING MADE");
  }
</script>

<body>
  <div class="main-back">
    <h1 class="title">Jaws-Uno-Game</h1>
    <h3 class="title-display">Please Enter Your Game ID</h3>
    <input class="ID-Enter" type="text" />
  </div>

  <div class="creator">
    <button>
      <a href="Settings">Create Game</a>
    </button>
    <button>Submit Game ID</button>
  </div>
</body>

<style>
  body {
    background-color: rgb(143, 54, 54);
  }

  .creator {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2em;
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
    background-color: rgb(60, 122, 60);
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
    color: beige;
  }

  .title:hover {
    font-size: 80px;
    color: white;
  }
</style>
