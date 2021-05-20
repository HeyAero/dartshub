

export const runConnect = ( setOppUsername, setSocket, textboxRef, setLegs, setOppScore, setOppScoresList, code, legs, creator,updateScore) => {
    const chatSocket = new WebSocket('wss://' + 'dartshub.herokuapp.com' +'/ws/chat/'  + code +'/')
    setSocket(chatSocket)
    chatSocket.onopen = function() {
        console.log('workingggg')
      }
    
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data)
        console.log(data)
        console.log("wowwww how")

        if (data.success) {
            console.log("success")
            sendUsername();
        } else if (data.init_data) {
            console.log(data.init_data)
            if (data.init_data.username !== localStorage.getItem('username')) {
                setOppUsername(data.init_data.username)
                if (data.init_data.legs) {
                    setLegs(data.init_data.legs)
                }
            }
        } else if (data.message) {
            console.log(textboxRef)
            textboxRef.current.value += (data.message + '\n');
            textboxRef.current.scrollTop = textboxRef.current.scrollHeight
            console.log('message recieved');
        } else if (data.score.creator !== creator) {
            updateScore(data.score.score, setOppScore, setOppScoresList)
        } else {
            console.log(`Sorry, server response doesn't match cases`);
        }
    }   
    
    chatSocket.onclose = function(e) {
        console.error('Chat socket closed ');
    }
    
    function sendUsername() {
        try {
            chatSocket.send(JSON.stringify({
                'type': 'send_username',
                'data': { username: localStorage.getItem('username'), legs: legs }
            })); 
        } catch (error) {
            console.log(error)
        }
    }
}
