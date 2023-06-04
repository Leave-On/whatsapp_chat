import { Card } from '@/shared/ui/Card';
import { Contact, IContact } from '@/entities/Contact';
import cls from './ContactList.module.scss';

interface ContactListProps {
	contacts?: IContact[];
	openModal?: () => void;
}

export const ContactList: React.FC<ContactListProps> = ({ contacts, openModal }) => {
	return (
		<div className={cls.ContactList}>
			<Card>
				<button className={cls.button} onClick={openModal}>
					Start new chat
				</button>
			</Card>
			{contacts?.map((contact) => (
				<Contact contact={contact} key={contact.phoneNumber} />
			))}
		</div>
	);
};
