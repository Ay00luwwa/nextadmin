import Navbar from "../ui/dashboard/Navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
        {children}
      </div>

      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default layout;
