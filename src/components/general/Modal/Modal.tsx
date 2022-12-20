import { Portal } from '@components/general/';
import { ModalProps } from './Modal.types';

const Modal = (modalProps: ModalProps): JSX.Element => {
  const { onClickClose } = modalProps;

  return (
    <Portal>
      <div>Modal</div>
    </Portal>
  );
};

export default Modal;
