import * as fs from "fs";
import * as path from "path";
import { log } from "console";


export class simpleCards {
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

  export function getFile() {
    let counter: number = 0;

    const __dirname = path.resolve();
    const unoCardsPath = path.join(__dirname, "static", "UnoCards");
  
    // Read files
    fs.readdir(unoCardsPath, (err, files) => {
      // Check for error
      if (err) throw err;
  
      // Access files here
      files.forEach((file) => {
        let fileName: string = path.join(unoCardsPath, file);
        counter++;
        let compressedName =
          fileName.split("\\")[fileName.split("\\").length - 1]; // split by end
        console.log(compressedName.slice(0, -4));
      });
    });
  }

