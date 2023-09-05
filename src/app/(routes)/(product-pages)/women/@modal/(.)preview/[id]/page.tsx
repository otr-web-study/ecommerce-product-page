import Modal from '@/app/components/Modal';
import { Slider } from '../../../../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function PreviewModal({ params: { id } }: { params: { id: string } }) {
  const product = getProduct();
  const images = product.images;

  return (
    <Modal>
      <Slider images={images} route="/women/" reverse isPreview id={id} />
    </Modal>
  );
}
