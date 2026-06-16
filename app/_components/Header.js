import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import MobileNavigation from './MobileNavigation';

function Header() {
  return (
    <header className='border-b border-primary-900 md:px-8 px-4 py-3 z-10 relative  '>
      <div className='flex justify-between md:items-center items-start max-w-7xl min-w-[260px] mx-auto'>
        <Logo />
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
}

export default Header;
