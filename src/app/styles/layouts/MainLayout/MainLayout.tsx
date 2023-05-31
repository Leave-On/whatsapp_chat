import cls from './MainLayout.module.scss';
import { ReactElement } from 'react';

interface MainLayoutProps {
	className?: string;
	left?: ReactElement;
	right?: ReactElement;
}

export const MainLayout = ({ left, right }: MainLayoutProps) => {
	return (
		<div className={cls.MainLayout}>
			<div className={cls.left}>{left}</div>
			<div className={cls.right}>{right}</div>
		</div>
	);
};
