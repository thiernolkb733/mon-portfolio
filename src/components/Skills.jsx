function Skills(){



// Tableau contenant les compétences

const skills = [

"HTML",
"CSS",
"Tailwind CSS",
"JavaScript ES6+",
"React.js",
"Node.js",
"Express.js",
"MongoDB",
"Git & GitHub"


];



return (


<section 
className="
bg-gray-100
py-16
px-6
"
>


<h2 className="
text-3xl
font-bold
text-center
mb-10
">

Mes compétences

</h2>




<div className="
grid
grid-cols-2
md:grid-cols-3
gap-5
max-w-4xl
mx-auto
">


{

skills.map((skill,index)=>(


<div
key={index}
className="
bg-white
shadow
p-5
rounded-lg
text-center
font-semibold
"
>

{skill}


</div>


))


}


</div>


</section>


)

}


export default Skills;