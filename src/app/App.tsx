import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chatroom } from '../Components/Chatroom/ui/Chatroom/Chatroom';
import { ContactList } from '../Components/ContactList';
import { getChats } from '../features/AuthByCredentials/model/selectors';
import { LoginForm } from '../features/AuthByCredentials/ui/ui/LoginForm/LoginForm';
import { LoginModal } from '../features/AuthByCredentials/ui/ui/LoginModal/LoginModal';
import { MainLayout } from './styles/layouts/MainLayout';
import { Contact } from './types';

function App() {
	const contacts = useSelector(getChats);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onOpenModal = () => {
		setIsModalOpen(true);
	};

	const onCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="app">
			{isModalOpen && (
				<LoginModal
					onClose={onCloseModal}
					isOpen={isModalOpen}
				/>
			)}
			<MainLayout
				left={
					<ContactList
						contacts={contacts}
						openModal={onOpenModal}
					/>
				}
				right={<Chatroom />}
			/>
		</div>
	);
}

export default App;
