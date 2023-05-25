import { Chatroom } from '../Components/Chatroom/ui/Chatroom/Chatroom'
import { ContactList } from '../Components/ContactList'
import { MainLayout } from './styles/layouts/MainLayout'
import { Contact } from './types'

function App() {

  const contacts: Contact[] = [
    // {
    //   name: 'test',
    //   phoneNumber: 12312312313
    // }
  ]

  console.log(contacts);


  return (
    <div className='app'>
      <MainLayout
        left={<ContactList contacts={contacts} />}
        right={<Chatroom />}
      />

    </div>
  )
}

export default App
