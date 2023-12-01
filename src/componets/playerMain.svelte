<!-- MyComponent.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import * as fs from "fs";
  import * as path from "path";
  import { error } from "@sveltejs/kit";
  import bluecard0 from "../UnoCards/blue0.png";

  class simpleCards {
    // Simple Card Class
    Color: string;
    Value: Number;
    location: string | undefined;

    constructor(Color: string, Value: Number, location: string) {
      this.Color = Color;
      this.Value = Value;
      this.location = location;
    }

    get cardColor() {
      return this.Color;
    }
    get cardValue() {
      return this.Value;
    }
    get cardLocation() {
      return this.location;
    }
  }

  let hashMap = new Map<number, simpleCards>(); // holds card data
  let pickedCards: any;
  let counter: number = 0;

  function pickCards() {
    const keys = Array.from(hashMap.keys());

    // Take 7 random keys
    const picked = [];

    for (let i = 0; i < 7; i++) {
      console.log("Testing: " + hashMap.get(i)?.Color);
    }
  }
  // console.log("PICKED ARRAY:" + picked);
  // console.log(hashMap.get(picked[1]));

  function addCardAttributes(cardName: string, locate: string) {
    let cardHolder: string = cardName;

    let cardColor: string = cardHolder.substring(0, cardHolder.length - 1);
    let cardValue: number = parseInt(
      cardHolder.substring(cardHolder.length - 1)
    );
    // console.log("Color: " + cardColor + " Value: " + cardValue); Uncomment to see card type and numbers
    return new simpleCards(cardColor, cardValue, locate);
  }

  // Get current file path
  const __dirname = path.resolve();
  // Construct full path to UnoCards folder  // Specify folder path
  const unoCardsPath = path.join(__dirname, "src", "UnoCards");

  // Read files
  fs.readdir(unoCardsPath, (err, files) => {
    // Check for error
    if (err) throw err;

    // Access files here
    files.forEach((file) => {
      let fileName: string = path.join(unoCardsPath, file);
      let compressedName =
        fileName.split("\\")[fileName.split("\\").length - 1]; // split by end
      if (
        compressedName.includes("Reverse") ||
        compressedName.includes("Plus") ||
        compressedName.includes("Wild") ||
        compressedName.includes("Skip")
      ) {
        // console.log("Skipped Important Cards");
      } else {
        // console.log("Added Regular Cards");
        hashMap.set(
          counter++,
          addCardAttributes(compressedName.slice(0, -4), fileName)
        );
      }
    });
  });

  fs.readdir(unoCardsPath, (err, files) => {
    // Map population logic here

    hashMap.forEach((value, key) => {
      // console.log(`Key: ${key}, Value: ${value}`);
    });
    console.log(hashMap.size);
  });

  fs.readdir(unoCardsPath, (err, files) => {
    pickedCards = pickCards();
  });
</script>

<body>
  <li class="boxplay center">
    <div class="play p1">1</div>
    <div class="play p2">2</div>
    <div class="play p3">3</div>
    <div class="play p4">4</div>
  </li>
  <!-- <img src={bluecard0} alt="" /> -->
</body>

<style>
  .boxplay {
    list-style: none;
    color: brown;
  }

  .center {
  }

  .play {
    width: 350px;
    height: 200px;
    background-color: rgb(255, 132, 0);
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin: 0 auto;
  }

  .p4 {
    margin-top: 10%;
    width: 1000px;
    height: 350px;
  }

  .p3 {
    margin-right: 90%;
    rotate: 90deg;
    width: 650px;
    margin-top: -100px;
  }
</style>
