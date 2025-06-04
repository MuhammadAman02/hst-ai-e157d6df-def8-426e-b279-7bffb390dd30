import OpenAI from 'openai';

export const useOpenAI = (apiKey: string) => {
  console.log('useOpenAI hook initialized');

  const sendMessage = async (message: string): Promise<string> => {
    console.log('Sending message to OpenAI:', message);
    
    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      });

      console.log('OpenAI client created, making API call');
      
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant. Provide clear, concise, and helpful responses.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 1000,
        temperature: 0.7,
      });

      console.log('OpenAI API response received');
      
      const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
      console.log('Extracted response:', response.substring(0, 100));
      
      return response;
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from OpenAI. Please check your API key.');
    }
  };

  return { sendMessage };
};