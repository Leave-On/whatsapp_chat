import { classes } from '@/shared/lib/classes/classes';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Portal } from '@/shared/ui/Portal';

import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface ModalProps {
	className?: string;
	isOpen?: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: ModalProps) => {
	const { close, isClosing, isMounted } = useModal({
		animationDelay: 500,
		isOpen,
		onClose,
	});

	if (!isMounted) return null;

	const mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	return (
		<Portal>
			<div className={classes(cls.LoginModal, mods, [className])}>
				<div
					className={cls.overlay}
					onClick={close}
				/>
				<LoginForm
					onSuccess={onClose}
					className={cls.content}
				/>
			</div>
		</Portal>
	);
};
