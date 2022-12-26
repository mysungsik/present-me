import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <header>
      <LayoutHeader />
      {props.children}
      <LayoutFooter />
    </header>
  );
};
export default Layout;
