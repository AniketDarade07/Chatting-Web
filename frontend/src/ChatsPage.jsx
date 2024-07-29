import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh' }}>
            <PrettyChatWindow 
            projectId='647a5b87-f3de-419b-b2fa-4d37b54d9c72'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}} />
        </div>
    )
  };
  export default ChatsPage;