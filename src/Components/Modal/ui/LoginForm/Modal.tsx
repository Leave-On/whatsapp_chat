import cls from './Modal.module.scss'

interface ModalProps {
  className?: string;
}

export const Modal = ({className}: ModalProps) => {

    return (
    <div className={cls.Modal}>
        Input credentials
        <input type="text" />
        <input type="text" />
    </div>
  );
}