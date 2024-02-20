import './styles.css';
import bot from '../../assets/bot.png';
import { Chat } from '../../components/chat/chat';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-logo'>
        <img className='logo-img' src={bot} />
        <h1 className='logo-title'>{'ChatBot'}</h1>
      </div>
      <Chat />
    </div>
  );
};
