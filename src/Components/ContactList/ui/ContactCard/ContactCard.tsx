import { Contact } from '../../../../app/types';
import { Card } from '../../../../shared/ui/Card/ui/Card';
import cls from './ContactCard.module.scss'

interface ContactCardProps {
  className?: string;
  contact?: Contact;
}

export const ContactCard = ({contact}: ContactCardProps) => {

    return (
    <Card>
        {contact && <div>Last Message String</div>}
    </Card>
  );
}