function time() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    return hour + ":" + (minute < 10 ? "0" : "") + minute;
}

let chatList = [];
var md = window.markdownit();

async function send() {
    let timeSet = time();
    let inputChat = document.getElementById("inputChat").value;
    chatList.push(inputChat);
    document.getElementById("inputChat").value = "";

    // Display user message
    document.getElementById("setChat").innerHTML += `
        <div class="d-flex flex-row justify-content-end mb-4 pt-1 message-container">
            <div>
                <p class="small p-2 me-3 mb-1 rounded-3 user-message">${inputChat}</p>
                <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end message-time">${timeSet}</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user-avatar" class="avatar">
        </div>`;

    // Show "Thinking..." message
    setTimeout(() => {
        document.getElementById("setChat").innerHTML += `
            <div class="d-flex flex-row justify-content-start mb-4 pt-1 message-container">
                <img width="40" height="40" src="https://cdn-icons-png.flaticon.com/512/9545/9545516.png"
                    alt="chatbot" class="avatar">
                <div>
                    <p class="small p-2 ms-3 mb-1 rounded-3 ai-message">Thinking...</p>
                    <p class="small ms-3 mb-3 rounded-3 text-muted d-flex justify-content-start message-time">${timeSet}</p>
                </div>

            </div>`;
    }, 800);

    let returnResult = await aiResponse(inputChat);

    // Display AI response
    document.getElementById("setChat").innerHTML += `
        <div class="d-flex flex-row justify-content-start mb-4 pt-1 message-container">
            <img width="40" height="40" src="https://cdn-icons-png.flaticon.com/512/9545/9545516.png"
                alt="chatbot" class="avatar">
            <div>
                <p class="small p-2 ms-3 mb-1 rounded-3 ai-message">${md.render(returnResult)}</p>
                <p class="small ms-3 mb-3 rounded-3 text-muted d-flex justify-content-start message-time">${timeSet}</p>
            </div>
        </div>`;

    // Scroll to the bottom of the chat
    const chatBody = document.querySelector('.card-body');
    chatBody.scrollTop = chatBody.scrollHeight;

}

// Fetch real-time response from Gemini 2.0 Flash API
async function aiResponse(inputChat) {
    const apiKey = "AIzaSyDrPu21HO3Nc3QEzMt3pF5p2PY99CLOHGI"; // Replace with your Gemini API Key
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "contents": [
                {
                    "role": "user",
                    "parts": [{ "text": inputChat }]
                }
            ]
        })
    };

    try {
        let response = await fetch(url, requestOptions);
        let result = await response.json();

        if (result && result.candidates && result.candidates.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            return "Sorry, I couldn't process your request.";
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "An error occurred while getting the response.";
    }
}