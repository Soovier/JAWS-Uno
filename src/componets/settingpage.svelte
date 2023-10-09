<script>
  import Gear from "$lib/Gear.png";
</script>

<div class="display rowz">
  <div class="align">
    <div class="title check">
      <h1>Settings</h1>
      <img class="Gear-Pic" src={Gear} alt="Gear" />
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

  .Gear-Pic {
    min-width: 150px;
    max-height: 150px;
    /* margin-top: 150; */
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .title {
    font-size: 55px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    outline: 2px solid;
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
  }

  .title:hover {
    font-size: 65px;
    color: white;
  }
</style>
