<!-- MyComponent.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import * as fs from "fs";
  import * as path from "path";
  import { error } from "@sveltejs/kit";

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

    // Shuffle algorithm
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }

    // Take 7 random keys
    const picked = [];

    for (var i: number = 0; i < 7; i++); {
      console.log(hashMap.get(i));
      
    }
      const card = keys[Math.floor(Math.random() * keys.length)];
      console.log(keys[Math.floor(Math.random() * (keys.length - 2) + 1)]);

      if (typeof card === "undefined") {
        Error("Couldn't Create Cards");
        break;
      }

      picked.push(card);
    }
    // console.log("PICKED ARRAY:" + picked);
    // console.log(hashMap.get(picked[1]));

    return picked;
  }

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
        console.log("Skipped Important Cards");
      } else {
        console.log("Added Regular Cards");
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
      console.log(`Key: ${key}, Value: ${value}`);
    });
    // console.log(hashMap.size);
  });

  fs.readdir(unoCardsPath, (err, files) => {
    pickedCards = pickCards();
  });
</script>

<body>
  <p>Hello</p>
</body>

<style>
  p {
    background-color: rgb(40, 138, 147) (0, 234, 255);
  }
</style>
