import { useSelector } from 'react-redux';
import { classes } from '@/shared/lib/classes/classes';
import { useAppDispatch } from '@/shared/lib/hooks/typedReduxHooks';
import { getCurrentChatPhone } from '@/features/Chat/model/selectors';
import { chatActions } from '@/features/Chat/model/slice/chatSlice';
import { Card } from '@/shared/ui/Card/ui/Card';
import { IContact } from '../../model/types/Contact';
import cls from './Contact.module.scss';

interface ContactProps {
	className?: string;
	contact: IContact;
}

export const Contact: React.FC<ContactProps> = ({ contact, className }) => {
	const dispatch = useAppDispatch();
	const currentChat = useSelector(getCurrentChatPhone);

	const isContactActive = currentChat === contact?.phoneNumber;

	const handleOnCardClick = () => {
		if (contact) dispatch(chatActions.setCurrentChat(contact?.phoneNumber));
	};

	return (
		<Card onClick={handleOnCardClick} isActive={isContactActive}>
			<div className={classes(cls.contact, { [cls.isActive]: isContactActive }, [className])}>
				<div className={cls.avatar}>
					<img src="/user-avatar-50.png" alt="" />
				</div>
				<div>
					<h3>{contact.name}</h3>
					<p>{contact.phoneNumber}</p>
				</div>
			</div>
		</Card>
	);
};
