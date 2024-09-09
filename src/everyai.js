export default class Everyai {
  static apiKey = '';
  static async generate(prompt, model = "llama3.1", options = {}) {
    let instance = new this(prompt, model, options, this.apiKey)
    if (this.apiKey == '') {
      console.error("You must pass in a valid API key for EveryAI to create one visit https://every-llm.com to create one")
      return null
    }
    try {
      // Wait for the request to complete
      const response = await instance.makeRequest();
      return response["results"];
    } catch (error) {
      console.error(error);
      return null
    }
  }

  constructor(prompt, model, options = {}, apiKey = '') {
    this.prompt = prompt
    this.model = model
    this.options = options
    this.apiKey = apiKey
  }

  async makeRequest() {
    const domain = 'https://every-llm.com' //'http://localhost:3000' //
    const url = `${domain}/api/v1/generations`;
    const payload = {
      prompt: this.prompt,
      model: this.model,
      options: this.options,
      token: this.apiKey
    };

    const body = new URLSearchParams(payload)

    try {
      // Make the HTTP request
      const response = await fetch(url, {
        method: 'POST', // or GET, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response JSON
      const data = await response.json();

      // Return the API response
      return data;
    } catch (error) {
      console.error('Error making request:', error);
      throw error; // Optionally, rethrow the error if you want it to be handled elsewhere
    }
  }
}