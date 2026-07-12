function Navbar(){

 return (

  <nav className="
  bg-orange-500
  text-white
  p-4
  flex
  justify-between
  items-center
  ">


    {/* Nom du développeur */}

    <h1 className="text-xl font-bold">

      <strong>THIERNO MAMADOU DIALLO</strong>

    </h1>



    {/* Menu */}

    <ul className="
    flex
    gap-5
    ">

      <li>
        Accueil
      </li>

      <li>
        Projets
      </li>

      <li>
        Contact
      </li>


    </ul>


  </nav>

 )

}


export default Navbar;