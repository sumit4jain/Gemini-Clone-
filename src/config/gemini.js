// AIzaSyA2EWapdonrn7V2mPDwR1DuMOi3LQb2c00
 
// gemini-2.5-pro-preview-03-25


// Install SDK: npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  // Initialize the Gemini model
  const MODEL_NAME = "gemini-1.5-pro";
  const API_KEY = "AIzaSyAlft6eyVKjW5O2tX2MrHP6l-CphExC7K8"; // Replace with your actual API key

   async function runChat(prompt) {
    // Create the Gemini instance
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    // Configuration for text generation
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    // Safety settings to filter harmful content
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    // Start a chat session
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [], // You can provide chat history here if needed
    });
  
    // Send a message and get the response
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  // Run the chat function
  export default runChat;