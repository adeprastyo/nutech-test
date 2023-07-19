import { Link } from "react-router-dom";

export default function CustNavbar() {
  return (
    <>
      <div className="w-full shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-10 ">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to="/">
              <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">
                CHALLENGE PT <span className="text-orange-500">NU</span>
                <span className="text-blue-900">TECH</span>
              </span>
            </Link>
          </div>

          <div className="flex">
            <div className="text-lg lg:flex-grow">
              <Link
                to="/data"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-orange-500 mr-4"
              >
                Manage Data
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

{
  /* // return (
  //   <Navbar rounded className="shadow-lg px-16 py-10">
  //     <Link to="/">
  //       <Navbar.Brand>
  //         <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">
  //           CHALLENGE PT <span className="text-orange-500">NU</span>
  //           <span className="text-blue-900">TECH</span>
  //         </span>
  //       </Navbar.Brand>
  //     </Link>
  //     <Navbar.Collapse>
  //       <Link to="/data">
  //         <Navbar.Brand className="text-lg">
  //           <p>Manage Data</p>
  //         </Navbar.Brand>
  //       </Link>
  //     </Navbar.Collapse>
  //   </Navbar>
  // ); */
}
