export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-800 pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <h3 className="text-lg font-semibold">Dex Weaver</h3> 
            </div>
  
            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              Copyright &copy; {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }