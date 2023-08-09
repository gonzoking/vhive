const API_KEY = '8GLQbO76Z8G7WP95WUIaj0lASIlBjCKc';

const buildApiRequest = (context, question) => {
    return {
        url: "https://api.ai21.com/studio/v1/j2-ultra/complete",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": `Context: ${context}
            Question: ${question.endsWith('?') ? question : `${question}?`}
            Answer:`,
            "numResults": 1,
            "epoch": undefined,
            "maxTokens": 64,
            "temperature": 0,
            "topKReturn": 0,
            "topP": 1,
            "countPenalty": {
                "scale": 0,
                "applyToNumbers": false,
                "applyToPunctuations": false,
                "applyToStopwords": false,
                "applyToWhitespaces": false,
                "applyToEmojis": false
            },
            "frequencyPenalty": {
                "scale": 0,
                "applyToNumbers": false,
                "applyToPunctuations": false,
                "applyToStopwords": false,
                "applyToWhitespaces": false,
                "applyToEmojis": false
            },
            "presencePenalty": {
                "scale": 0,
                "applyToNumbers": false,
                "applyToPunctuations": false,
                "applyToStopwords": false,
                "applyToWhitespaces": false,
                "applyToEmojis": false
            },
            "stopSequences": ["↵"]
        }),
        method: 'POST'
    }
}

const getAnswer = async (context, question) => {
    const apiRequestTemplate = buildApiRequest(context, question);

    const response = await fetch(apiRequestTemplate.url, {
        headers: apiRequestTemplate.headers,
        body: apiRequestTemplate.body,
        method: apiRequestTemplate.method
    });
    const answer = await response.json();

    return answer.completions[0]?.data?.text;
}

module.exports = {
    getAnswer
}
