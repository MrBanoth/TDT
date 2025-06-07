
import Loader from './Loader';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <Loader size="lg" className="mb-4" />
        <p className="text-gray-600 font-medium mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
