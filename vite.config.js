// On importe la fonction qui permet de configurer Vite
import { defineConfig } from 'vite'


// On importe React pour que Vite comprenne React
import react from '@vitejs/plugin-react'


// On importe Tailwind CSS version 4
import tailwindcss from '@tailwindcss/vite'


// Cette fonction exporte la configuration de Vite
export default defineConfig({

  // Les plugins ajoutent des fonctionnalités à Vite
  plugins: [

    // Permet d'utiliser React
    react(),

    // Permet d'utiliser Tailwind CSS
    tailwindcss()

  ]

})