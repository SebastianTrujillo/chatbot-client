import './styles.css';
import React, { useState } from 'react';
import { Text } from '../../interfaces/text';
import { Message } from "../message/message";
import { openaiAnswer } from '../../services/openai-answer';
import { JsonResponse } from '../../interfaces/json-response';

export const Chat = () => {

  const [message, setMessage] = useState<Text[]>([]);
  const [question, setQuestion] = useState<string>('');

  const getOpenaiAnswer = async (text: string): Promise<void> => {
    const response: JsonResponse | undefined = await openaiAnswer(text);
    const newMessage: Text = {
      text: response?.data?.content || 'Oops, an error occurred! Try again.',
      is_bot: true
    };
    setMessage(messages => [...messages, newMessage]);
  };

  const handleQuestion = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuestion(event.target.value);
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const message: Text = { text: question, is_bot: false };
    if (event.key == 'Enter') {
      setMessage(messages => [...messages, message]);
      getOpenaiAnswer(message.text);
      setQuestion('');
    }
  };

  return (
    <div className={'chat'}>
      <div className={'chat-bot'}>
        <Message messages={message} />
        <div className={'chat-bot-question'}>
          <input
            type={'text'}
            value={question}
            onChange={handleQuestion}
            onKeyDown={handleKeyboard}
            className={'chat-bot-input'}
            placeholder={'Type your question here...'}
          />
        </div>
      </div>
    </div>
  );
};
