import cls from './StickyLayout.module.scss'
import { ReactElement } from 'react';

interface StickyLayoutProps {
  className?: string;
  main?: ReactElement;
  bottom?: ReactElement;
}

export const StickyLayout = ({main, bottom}: StickyLayoutProps) => {

    return (
    <div className={cls.StickyLayout}>
        <div className={cls.main} >{main}</div>
        <div className={cls.bottom} >{bottom}</div>
    </div>
  );
}