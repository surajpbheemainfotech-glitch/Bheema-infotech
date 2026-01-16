import { useParams, Link } from "react-router-dom";
import OnePage from "../pages/OnePage";
import TwoPage from "../pages/TwoPage";
import ThirdPage from "../pages/ThirdPage";

const PortfolioPage = () => {
  const { pageId } = useParams();
 

  const renderPage = () => {
    switch (pageId) {
      case "1":
        return <OnePage />;
      case "2":
        return <TwoPage />;
      case "3":
        return <ThirdPage />;
      default:
        return <OnePage />;
    }
  };


  return (
    <div className="w-full min-h-screen relative">

      {/* Content */}
      <div className="pb-20">
        {renderPage()}
      </div>


        <div className="fixed bottom-0 left-0 w-full flex justify-center gap-2 py-4 bg-white border-t z-50">
          <Link to="/portfolio" className="px-4 py-2 bg-gray-200 hover:bg-blue-950 hover:text-white rounded">
            1
          </Link>
          <Link to="/portfolio/2" className="px-4 py-2 bg-gray-200 hover:bg-blue-950 hover:text-white rounded">
            2
          </Link>
          <Link to="/portfolio/3" className="px-4 py-2 bg-gray-200 hover:bg-blue-950 hover:text-white rounded">
            3
          </Link>
        </div>
    
    </div>
  );
};

export default PortfolioPage;
