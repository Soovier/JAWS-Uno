<!-- MyComponent.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import * as fs from "fs";
  import * as path from "path";

  class simpleCards {
    // Simple Card Class
    Color: String;
    Value: Number;
    Type: String;

    constructor(Color: string, Value: Number, Type: String) {
      this.Color = Color;
      this.Value = Value;
      this.Type = Type;
    }

    get cardColor() {
      return this.Color;
    }
    get cardValue() {
      return this.Value;
    }
    get cardType() {
      return this.Type;
    }
  }

  let hashMap = new Map<simpleCards, String>(); // holds card data

  function addCardAttributes(cardName: string) {
    let cardHolder: string = cardName;

    let cardColor: string = cardHolder.substring(0, cardHolder.length - 1);
    let cardValue: number = parseInt(
      cardHolder.substring(cardHolder.length - 1)
    );

    // console.log("Color: " + cardColor + " Value: " + cardValue); Uncomment to see card type and numbers

    return new simpleCards(cardColor, cardValue, "null");
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
        hashMap.set(addCardAttributes(compressedName.slice(0, -4)), fileName);
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
</script>

<body>
  <a href="#"
    ><img
      src="C:\Users\Stephen Osunkunle\Desktop\Jaws-Uno-Folder\my-app\src\UnoCards\red9.png"
      alt="UnoCddard
    "
    /></a
  >
</body>

<style>
</style>
