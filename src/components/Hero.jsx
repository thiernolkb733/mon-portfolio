// Importation de la photo
import profile from "../assets/profile.jpg";

// Composant Hero : la première section visible du portfolio
function Hero(){


  return (

    <section 
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-6
      "
    >
        <img
  src={profile}
  alt="Photo de Thierno Mamadou Diallo"
  className="
  w-40
  h-40
  rounded-full
  mx-auto
  object-cover
  shadow-lg
  mb-6
  "
/>


      <div className="text-center">


        {/* Petit texte d'introduction */}

        <p className="
        text-orange-500
        font-bold
        text-lg
        ">
          Bonjour, je suis
        </p>



        {/* Ton nom */}

        <h1 className="
        text-5xl
        font-bold
        mt-3
        ">
          Thierno Mamadou Diallo
        </h1>



        {/* Ton métier */}

        <h2 className="
        text-2xl
        text-gray-600
        mt-4
        ">
          <strong>Ingenieur Informaticien</strong>
        </h2>



        {/* Description */}

        <p className="
        max-w-xl
        mx-auto
        mt-5
        text-gray-700
        ">

          Passionné par les nouvelles technologies, je suis une personne curieuse qui ne cesse de se mettre à jour afin d'absorber le maximum d'informations liées notamment à l'IA, les Agents IAs et les automatisations IA

        </p>



        {/* Boutons */}

        <div className="
        mt-8
        flex
        justify-center
        gap-4
        ">


          


        </div>
        <div className="
flex
justify-center
gap-5
mt-6
">


<a 
href="https://www.linkedin.com/in/thierno-mamadou-diallo-8b68b41b2"
target="_blank"
className="
text-blue-600
font-bold
"
>

LinkedIn

</a>

<a 
href="https://github.com/ton-profil"
target="_blank"
className="
text-gray-800
font-bold
"
>

GitHub

</a>



<a 
href="https://www.facebook.com/diallotm733"
target="_blank"
className="
text-blue-700
font-bold
"
>

Facebook

</a>





</div>



      </div>


    </section>

  )

}


export default Hero;