import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("NEXT_PUBLIC_GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateCommitMessage(diff: string): Promise<string> {
  const prompt = `
    You are an expert at writing concise and professional GitHub commit messages following the Conventional Commits specification.
    Analyze the following code changes and generate a suitable commit message.

    The commit message must have a subject line and an optional body. The subject line should be a short summary of the changes, starting with a type (e.g., feat, fix, chore, docs, style, refactor, test), followed by a scope in parentheses (optional), and then a colon and a space. The subject line must not exceed 50 characters.

    The body should provide more context, explaining the 'what' and 'why' of the changes, not the 'how'. Use bullet points for lists if necessary.

    The output should be ONLY the formatted commit message in plain text, with no markdown formatting like backticks. Do not include any other explanatory text, greetings, or sign-offs.

    Code changes:
    ---
    ${diff}
    ---
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not generate commit message. Please check the console for details.");
  }
}
