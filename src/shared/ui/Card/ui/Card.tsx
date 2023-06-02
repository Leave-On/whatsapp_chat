import { ReactNode } from 'react';
import { classes } from '../../../../app/lib/classes/classes';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'message';

interface CardProps {
	children?: ReactNode;
	variant?: CardVariant;
	onClick?: () => void;
	isActive?: boolean;
	messageType?: 'incoming' | 'outgoing' | ''
}

export const Card = ({
	children,
	variant = 'normal',
	isActive = false,
	messageType = '',
	...otherProps
}: CardProps) => {
	return (
		<div
			className={classes(cls.Card, { [cls.isActive]: isActive }, [cls[variant], cls[messageType]])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
