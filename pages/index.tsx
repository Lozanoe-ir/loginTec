import Auth  from '../components/auth/Auth';
import Modal from '../components/modal/modal';
import ModalSucces from '../components/modal/modalSucces';

export default function Home() {

  return (
    <div>
      <Auth/>
      <Modal/>
      <ModalSucces/>
    </div>
  )
}
