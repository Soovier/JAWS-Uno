<script>
  import Gear from "$lib/Gear.png";
</script>

<div class="display rowz">
  <div class="align">
    <div class="title check">
      <a href="/" class="Classify">Settings</a>
      <img class="Gear-Pic" src={Gear} alt="Gear" />
    </div>
    <div class="sorter playerAmo">
      <h2>Amount Of Players</h2>
      <div class="numbutton">
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
    <div class="start">
      <button class="Start">Start Game</button>
    </div>
  </div>
</div>

<style>
  .display {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-size: 45px;
    transition: all 0.5s ease-in-out;
  }

  h2:hover {
    font-size: 50px;
    color: red;
  }

  .start {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
  }

  .sorter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 150px;
    transition: all 0.5s ease-in-out;
  }

  a:hover {
    font-size: 155px;
    color: white;
  }

  .numbutton {
    margin-right: 95px;
  }

  button {
    height: 100%;
    border-radius: 5px;
    margin-left: 45px;
    font-size: 75px;
    transition: all 0.5s ease-in-out;
  }

  .Backpage {
    background-color: black;
    margin-right: 50px;
    position: absolute;
    top: 120px;
  }

  button:hover {
    font-size: 80px;
    color: rgb(255, 255, 255);
    background-color: blanchedalmond;
  }

  .Gear-Pic {
    min-width: 150px;
    max-height: 150px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
  }

  .check {
    font-size: 55px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    /* outline: 2px solid; */
    /* border-radius: 4px; */
    transition: all 0.5s ease-in-out;
  }

  .title:hover {
    font-size: 65px;
    color: white;
  }
</style>
