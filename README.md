# The official Every AI Javascript library
Integrate with every major AI model easily with our simple product

### Installation

use npm

`npm install everyai`

### Basic setup

to use the everyai library in your app first you need to create an API key visit [The Every AI Website](https://every-llm.com) to create one now

```
import Everyai from "everyai"

Everyai.api_key = "my-secret-key"

let results = await Everyai.generate("Hello World!")
console.log(results)
// Hey back to you from your favorite AI model

let results = await Everyai.generate("Hello World", model: "chatgpt")
console.log(results)
// Hey I'm chatgpt ready to help you with your coding needs
```

For more documentation visit [The official docs](https://every-llm.com/docs)