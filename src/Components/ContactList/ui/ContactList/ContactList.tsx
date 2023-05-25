import { Contact } from '../../../../app/types';
import { Card } from '../../../../shared/ui/Card';
import { ContactCard } from '../ContactCard/ContactCard';
import cls from './ContactList.module.scss'

interface ContactListProps {
  className?: string;
  contacts?: Contact[];
}

export const ContactList = ({className, contacts}: ContactListProps) => {

    return (
    <div className={cls.ContactList}>
      <Card>
        <button className={cls.button} >Start new chat</button>
      </Card>
      {contacts?.map(contact => (
        <ContactCard
          contact={contact}
          key={contact.phoneNumber}
        />
      ))}
    </div>
  );
}