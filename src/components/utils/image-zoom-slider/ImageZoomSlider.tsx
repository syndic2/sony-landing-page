import { IoMdClose } from 'react-icons/io';

interface ImageZoomSliderProps<T = unknown> {
  selectedImage?: string;
  images: T[];
  onClose?: () => void;
}

export const ImageZoomSlider = (props: ImageZoomSliderProps) => {
  const { selectedImage, images, onClose } = props;

  return (
    <div className={`${selectedImage ? 'block opacity-100' : 'hidden opacity-0'} fixed top-0 z-20 backdrop-brightness-50 w-full h-full px-4 py-4`}>
      <IoMdClose
        className='text-white cursor-pointer ml-auto'
        size={24}
        onClick={onClose}
      />
      <img
        className='overflow-hidden object-contain w-[550px] h-[calc(100%-24px)] m-auto'
        src={selectedImage}
        alt=""
      />
    </div >
  );
};