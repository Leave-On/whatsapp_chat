import { useSelector } from 'react-redux';
import { classes } from '../../../../app/lib/classes/classes';
import { useAppDispatch } from '../../../../app/lib/hooks/typedReduxHooks';
import { Contact } from '../../../../app/types';
import { getCurrentChatPhone } from '../../../../features/AuthByCredentials/model/selectors';
import { loginActions } from '../../../../features/AuthByCredentials/model/slice/loginSlice';
import { Card } from '../../../../shared/ui/Card/ui/Card';
import cls from './ContactCard.module.scss'

interface ContactCardProps {
  className?: string;
  contact?: Contact;
}

export const ContactCard = ({contact, className}: ContactCardProps) => {

  const dispatch = useAppDispatch()
  const currentChat = useSelector(getCurrentChatPhone)

  const isContactActive = currentChat === contact?.phoneNumber

  const handleOnCardClick = () => {
    if (contact) dispatch(loginActions.setCurrentChat(contact?.phoneNumber))
  }

    return (
    <Card onClick={handleOnCardClick} isActive={isContactActive} >
      <div className={classes(cls.contact, {[cls.isActive]: isContactActive}, [className])}>
        <div className={cls.avatar}>
          <img src="/user-avatar-50.png" alt="" />
        </div>
        <div>
          <h3>{contact?.name}</h3>
          <p>{contact?.phoneNumber}</p>
        </div>
      </div>
    </Card>
  );
}