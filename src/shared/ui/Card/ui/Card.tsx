import { ReactNode } from 'react';
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'message'

interface CardProps {
  children?: ReactNode;
  variant?: CardVariant;

}

export const Card = ({children, variant = 'normal', ...otherProps}: CardProps) => {

    const classes = `${cls.Card} ${cls[variant]}`

    return (
    <div className={classes} {...otherProps}>
            {children}
    </div>
  );
}