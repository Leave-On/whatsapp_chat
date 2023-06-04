import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chatroom } from '@/widgets/Chatroom';
import { ContactList } from '@/features/ContactList';
import { getChats } from '@/features/Chat';
import { LoginModal } from '@/features/Chat';
import { MainLayout } from './styles/layouts/MainLayout';

const App: React.FC = () => {
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
				<LoginModal onClose={onCloseModal} isOpen={isModalOpen} />
			)}
			<MainLayout
				left={
					<ContactList contacts={contacts} openModal={onOpenModal} />
				}
				right={<Chatroom />}
			/>
		</div>
	);
};

export default App;
