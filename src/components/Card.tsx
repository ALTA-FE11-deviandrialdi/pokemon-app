import { FC } from "react";

interface CardProps {
  name?: string;
  img?: string;
  key?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Card: FC<CardProps> = ({ name, img, key, onClick, children }) => {
  return (
    <div
      className="Card bg-primary-50 shadow-lg cursor-pointer"
      key={key}
      onClick={onClick}
    >
      <figure className="w-full h-full p-5">
        <img className="h-[8rem] mb-5" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <p className="text-xs mt-2 text-secodary-100">{name}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
