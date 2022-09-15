import { TailSpin } from 'react-loader-spinner';
import { Backdrop } from "./Loader.styled"

export const Loader = () => {
    return (
      <Backdrop>
        <TailSpin color="#2da8d8ff" width={80} heigth={80} />
      </Backdrop>
    );
  };