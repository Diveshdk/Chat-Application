import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

const App = ()=>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height = "100vh"
        projectID="70d36d1c-3326-49d3-99c4-ec505ab20504
        "
        userName={localStorage.getItem( 'username')}
        userSecret={localStorage.getItem( 'password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;