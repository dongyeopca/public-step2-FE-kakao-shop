import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/navigationBar';

export default function MainLayout() {
  return (
    <div className="mx-auto flex w-[64rem] grow flex-col items-center">
      <NavigationBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
