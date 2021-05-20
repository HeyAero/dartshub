import React, {useRef} from 'react';


const Chat = ({chatSocket}) => {
    const inputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault
        
        const message = localStorage.getItem('username') + ':' + inputRef.current.value
        inputRef.current.value = '';
        console.log(message)
        chatSocket.send(JSON.stringify({
            'type': 'chat_message',
            'data': message
        }));
    };

    function handleInput(e) {
        if (e.keyCode === 13) {  // enter, return
            console.log("entered!")
            inputRef.current.click();
            handleSubmit(e)
        }
    }

    return(
      
        <div id="chat-inputs" data-testid="chat-inputs">
        <input ref={inputRef} id="chat-message-input" type="text" size="30"onKeyUp={handleInput}></input><br></br>
        <input id="chat-message-submit" type="button" value="Send" onClick={handleSubmit}></input>
        </div>
  
    )
}


export default Chat