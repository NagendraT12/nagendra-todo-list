// Header component for the To-Do List application
// Displays the application title and a brief description
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 shadow-lg">
      <h1 className="text-4xl font-bold mb-3 tracking-tight">Nagendra's To-Do List</h1>
      <p className="text-blue-100 text-lg font-light">Stay organized and boost your productivity</p>
    </header>
  );
};

export default Header; 