import Card from "./card.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};
export default Card;
