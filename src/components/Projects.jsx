

// Composant qui affiche la liste de mes projets

function Projects(){


  // Tableau contenant mes projets

  const projects = [

    {
      title: "Gestionnaire de tâches",
      description:
      "Application permettant de créer, modifier et supprimer des tâches avec JavaScript.",
      tech:
      "HTML, CSS, JavaScript"
    },


    {
      title: "Carnet d'adresses",
      description:
      "Application React permettant de gérer des contacts avec les opérations CRUD.",
      tech:
      "React.js, Tailwind CSS"
    },


    {
      title: "Calculatrice moderne",
      description:
      "Calculatrice développée en JavaScript avec historique des calculs.",
      tech:
      "JavaScript ES6"
    }


  ];



  return (


    <section className="
    py-16
    px-6
    ">


      <h2 className="
      text-3xl
      font-bold
      text-center
      mb-10
      ">

        Mes projets

      </h2>



      <div className="
      grid
      md:grid-cols-3
      gap-6
      max-w-5xl
      mx-auto
      ">


        {

          projects.map((project, index)=>(


            <div
            key={index}
            className="
            bg-white
            shadow-lg
            rounded-lg
            p-6
            "
            >


              <h3 className="
              text-xl
              font-bold
              mb-3
              ">

                {project.title}

              </h3>



              <p className="
              text-gray-600
              mb-3
              ">

                {project.description}

              </p>



              <span className="
              text-orange-500
              font-semibold
              ">

                {project.tech}

              </span>


            </div>


          ))

        }


      </div>


    </section>


  )

}


// Export obligatoire pour pouvoir importer le composant

export default Projects;