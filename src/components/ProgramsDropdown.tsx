import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ProgramsDropdown = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = window.innerWidth < 1024; // lg breakpoint

  const programs = [
    { name: "Children's Programmes", path: "/programs/children" },
    { name: "Health Camps", path: "/programs/medical" },
    { name: "Women's Empowerment", path: "/programs/women" },
    { name: "Helping the Poor", path: "/programs/helping-poor" },
    { name: "Family Counseling", path: "/programs/counseling" },
  ];

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Desktop Dropdown - Just the dropdown items
  const renderDesktopDropdown = () => (
    <div className="py-1">
      {programs.map((program) => (
        <NavLink
          key={program.path}
          to={program.path}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
        >
          {program.name}
        </NavLink>
      ))}
      <div className="border-t border-gray-100 my-1" />
      <NavLink
        to="/programs/gallery"
        className="block px-4 py-2 text-sm text-primary font-medium hover:bg-gray-100"
      >
        View All Gallery
      </NavLink>
    </div>
  );

  // Mobile Dropdown with Programs link and submenu
  const renderMobileDropdown = () => (
    <div className="w-full">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="w-full flex justify-between items-center px-4 py-3 text-base font-medium tracking-wide rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-primary"
      >
        <div className="flex items-center">
          <span>OUR PROGRAMMES</span>
          <ChevronDown 
            className={`ml-2 h-4 w-4 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>
      
      {isMobileMenuOpen && (
        <div className="pl-6 mt-1 space-y-1 border-l-2 border-gray-100 ml-4">
          {/* All Programmes Link */}
          <NavLink
            to="/programmes"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg flex items-center"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.dispatchEvent(new Event('mobileMenuClose'));
            }}
          >
            <span className="font-medium">All Programmes</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </NavLink>
          
          <div className="border-t border-gray-100 my-1"></div>
          
          {programs.map((program) => (
            <NavLink
              key={program.path}
              to={program.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.dispatchEvent(new Event('mobileMenuClose'));
              }}
            >
              {program.name}
            </NavLink>
          ))}
          <NavLink
            to="/programs/gallery"
            className="block px-4 py-2 text-sm text-primary font-medium hover:bg-gray-50 rounded-lg"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.dispatchEvent(new Event('mobileMenuClose'));
            }}
          >
            View All Gallery
          </NavLink>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {isMobile ? renderMobileDropdown() : renderDesktopDropdown()}
    </div>
  );
};

export default ProgramsDropdown;
