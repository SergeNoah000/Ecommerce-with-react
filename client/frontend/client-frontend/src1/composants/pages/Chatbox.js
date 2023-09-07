import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../chat/style.css';

const Chatbox = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatboxMessagesRef = useRef(null);
  const [openchat , setOpenchat] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const toggleState = () => {
    setState(!state);
  };

  const handleChatboxButtonClick = () => {
    setOpenchat(!openchat);
  };

  const onSendButton = () => {
    const input = document.querySelector('.chatbox__support input');
    const message = input.value.trim();

    if (message !== '') {
      const newMessage = {
        id: uuidv4(),
        content: message,
        timestamp: new Date().toLocaleTimeString(),
        sender: 'visitor',
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);
      input.value = '';

      axios
        .post('/api/messages', { message: newMessage })
        .then(response => {
          // Traitement de la réponse
        })
        .catch(error => {
          // Gestion des erreurs
        });
    }
  };

  const updateChatText = () => {
    const input = document.querySelector('.chatbox__support input');
    const message = input.value;

    // Effectuer d'autres actions nécessaires avec le texte du chat
  };

  useEffect(() => {
    const chatboxMessages = chatboxMessagesRef.current;
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const openButton = document.querySelector('.chatbox__button button');
    const sendButton = document.querySelector('.chatbox__support .send__button');
    const input = document.querySelector('.chatbox__support input');
   
    const handleSendButtonClick = () => {
      onSendButton();
    };

    const handleInputKeyUp = ({ key }) => {
      if (key === 'Enter') {
        onSendButton();
      }
    };

    openButton.addEventListener('click', toggleState);
    sendButton.addEventListener('click', handleSendButtonClick);
    input.addEventListener('keyup', handleInputKeyUp);

    return () => {
      openButton.removeEventListener('click', toggleState);
      sendButton.removeEventListener('click', handleSendButtonClick);
      input.removeEventListener('keyup', handleInputKeyUp);
    };
  }, []);
  useEffect(() => {
    const chatboxMessages = document.querySelector('.chatbox__messages');
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${openchat ? 'active' : 'setActive'}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">E-chat</h4>
              <h4 className="chatbox__heading--header">{currentTime}</h4>
            </div>
          </div>
          <div className="chatbox__messages" ref={chatboxMessagesRef}>
            {messages.map((message) => (
             <div className={`messages__item messages__item--${message.sender}`}>
             {message.content}
           </div>
             
            ))}
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." onChange={updateChatText} />
            <button className="chatbox__send--footer send__button" onClick={onSendButton}>
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={handleChatboxButtonClick}>
            <img src="assets/images/fruits/chatbox-icon.svg" alt="Chatbox Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;