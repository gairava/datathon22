function cohere() {
    window.open("sendScreen.html");

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

    const accountSid = 'ACd2319454b76e95f540b911caa6acdedb'; 
    const authToken = '[AuthToken]'; 
    const client = require('twilio')(accountSid, authToken);
    
    client.messages 
        .create({   
            body: sentence,
            messagingServiceSid: 'MG30cde98e9f599eb9493463e737bff094',      
            to: '+17133020840' 
        }) 
        .then(message => console.log(message.sid)) 
        .done();
}
