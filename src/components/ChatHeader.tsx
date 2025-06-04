import { Button } from '@/components/ui/button';
import { Settings, MessageSquare } from 'lucide-react';

interface ChatHeaderProps {
  onResetApiKey: () => void;
}

export const ChatHeader = ({ onResetApiKey }: ChatHeaderProps) => {
  console.log('ChatHeader rendered');

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              OpenAI Chat
            </h1>
            <p className="text-xs text-gray-500">
              Powered by GPT
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onResetApiKey}
          className="flex items-center space-x-2"
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Button>
      </div>
    </div>
  );
};