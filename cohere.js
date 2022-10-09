function cohere() {
    const sentence = document.getElementById("english");

    const cohere = require('cohere-ai');
    cohere.init('{apiKey}');
    (async () => {
      const response = await cohere.generate({
        model: 'large',
        prompt: sentence,
        max_tokens: 50,
        temperature: 0.3,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: 'NONE'
      });
      console.log(`Prediction: ${response.body.generations[0].text}`);
    })();
}