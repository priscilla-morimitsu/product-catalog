import { ImageProps as ImageNextProps } from 'next/image';

interface ImageProps extends ImageNextProps {
  src: string;
  className?: string;
};

export const Image = ({ src, alt, className, ...rest }: ImageProps) => {
  return (
    <figure className={className}>
      <img src={src} alt={`Imagem do projeto ${alt}`} loading="lazy" {...rest} />
    </figure>
  );
}