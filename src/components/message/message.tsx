
import './styles.css';
import { Text } from '../../interfaces/text';

interface Props {
  messages: Text[],
};

export const Message = (props: Props) => {

  const { messages } = props;
  
  return (
    <div className='messages'>
      {messages.map((message: Text, index: number) => (
        <div key={index} className='messages-card'>
          <div>
            <div className={message.is_bot ? 'bot-card' : 'user-card'}>
              <p className={message.is_bot ? 'bot-text' : 'user-text'}>
                {message.text}
              </p>
            </div>
          </div>
        </div>)
      )}
    </div>
  );
};
