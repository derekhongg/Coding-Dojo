import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
    
function App() {
    // Lifting State includes creating it in a common parent that can pass data down to ALL
    //    components that will need access to the getter, setter or both
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
    }

    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentMsg } />
        </>
    );
}
    
export default App;
