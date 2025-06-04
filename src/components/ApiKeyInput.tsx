import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Key, Shield } from 'lucide-react';

interface ApiKeyInputProps {
  onSubmit: (apiKey: string) => void;
}

export const ApiKeyInput = ({ onSubmit }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log('ApiKeyInput rendered');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('API key form submitted');
    
    if (!apiKey.trim()) {
      console.log('Empty API key submitted');
      return;
    }

    setIsLoading(true);
    console.log('Setting loading state to true');
    
    // Simulate validation delay
    setTimeout(() => {
      console.log('API key validation complete');
      onSubmit(apiKey.trim());
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Key className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            OpenAI API Setup
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your OpenAI API key to start chatting with AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="apiKey" className="text-sm font-medium text-gray-700">
                API Key
              </label>
              <Input
                id="apiKey"
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!apiKey.trim() || isLoading}
            >
              {isLoading ? 'Validating...' : 'Start Chatting'}
            </Button>
          </form>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-800">
                Your API key is stored locally and never sent to our servers. 
                It's only used to communicate directly with OpenAI.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};