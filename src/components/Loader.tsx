import { FC } from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loader: FC<LoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-b-2 border-t-2 border-primary`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/tdtlogo.jpg" 
              alt="Loading..."
              className={`${size === 'sm' ? 'h-6 w-6' : size === 'md' ? 'h-12 w-12' : 'h-20 w-20'} rounded-full object-cover`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
