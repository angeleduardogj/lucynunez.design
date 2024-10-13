'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] p-4 sm:p-6 flex items-center justify-center">
      <motion.div 
        layout
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {/* Personal Info and Photo */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, layout: { duration: 0.3 } }}
          className="col-span-1 sm:col-span-2 bg-[#E5D0FF] rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <img src="/placeholder.svg?height=120&width=120" alt="Lucy Núñez" className="w-24 h-24 rounded-full object-cover" />
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-[#4A154B]">Lucy Núñez</h1>
            <h2 className="text-lg text-[#6B46C1] mb-2">Diseñadora gráfica</h2>
            <div className="space-y-1 text-sm text-[#4A4A4A]">
              <p>📧 lucynuneez@gmail.com</p>
              <p>📞 6623645219</p>
              <p>🌐 lucynunez.myportfolio.com</p>
              <p>📍 Hermosillo, sonora, méxico</p>
            </div>
          </div>
        </motion.div>

        {/* Objective */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, layout: { duration: 0.3 } }}
          className="bg-[#FFD6E0] rounded-3xl p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-[#D53F8C] mb-2">Objetivo</h3>
          <p className="text-sm text-[#4A4A4A]">Mi objetivo es poner a prueba mis habilidades, crecer y superar nuevos retos. Busco trabajar en un entorno en donde pueda desenvolverme creativamente y alcanzar nuevas metas.</p>
        </motion.div>

        {/* Work Experience */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, layout: { duration: 0.3 } }}
          className="col-span-1 sm:col-span-2 bg-gradient-to-br from-[#FFF3C4] to-[#FFE4B5] rounded-3xl p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-[#D69E2E] mb-3">Experiencia Laboral</h3>
          <ol className="relative border-s-2 border-[#FFB347] space-y-6">
            <li className="ms-6">
              <div className="absolute w-4 h-4 bg-[#FF6B6B] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
              <time className="mb-1 text-xs font-normal leading-none text-[#4A4A4A]">Octubre 2022 - presente</time>
              <h3 className="text-sm font-semibold text-[#2C3E50]">Fixter <span className="bg-[#4ECDC4] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded ms-2">Actual</span></h3>
              <p className="mb-1 text-xs font-normal text-[#4A4A4A]">Diseñadora gráfica</p>
              <p className="text-xs text-[#4A4A4A]">Desarrollo de contenido para redes sociales y creación de materiales impresos</p>
            </li>
            <li className="ms-6">
              <div className="absolute w-4 h-4 bg-[#45B7D1] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
              <time className="mb-1 text-xs font-normal leading-none text-[#4A4A4A]">Febrero 2022 - Septiembre 2022</time>
              <h3 className="text-sm font-semibold text-[#2C3E50]">Ecoallianza</h3>
              <p className="mb-1 text-xs font-normal text-[#4A4A4A]">Diseñadora gráfica</p>
              <p className="text-xs text-[#4A4A4A]">Desarrollo de contenido para redes sociales y creación de materiales impresos</p>
            </li>
            <li className="ms-6">
              <div className="absolute w-4 h-4 bg-[#FFA07A] rounded-full mt-1.5 -start-2 border-2 border-white"></div>
              <time className="mb-1 text-xs font-normal leading-none text-[#4A4A4A]">Febrero 2020 - Diciembre 2021</time>
              <h3 className="text-sm font-semibold text-[#2C3E50]">Hiperactivo estudio</h3>
              <p className="mb-1 text-xs font-normal text-[#4A4A4A]">Diseñadora Jr</p>
              <p className="text-xs text-[#4A4A4A]">Desarrollo de contenido para redes sociales y creación de materiales impresos</p>
            </li>
          </ol>
        </motion.div>

        {/* Education */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, layout: { duration: 0.3 } }}
          className="bg-[#C6F6D5] rounded-3xl p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-[#38A169] mb-2">Educación</h3>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-[#2C3E50]">Universidad del Desarrollo Profesional</p>
              <p className="text-sm text-[#4A4A4A]">2014-2018</p>
              <p className="text-sm text-[#4A4A4A]">Licenciatura en Diseño Gráfico y Multimedia</p>
            </div>
            <div>
              <p className="font-semibold text-[#2C3E50]">Colegio de Estudios Científicos y Tecnológicos del Estado de Sonora</p>
              <p className="text-sm text-[#4A4A4A]">2011-2014</p>
              <p className="text-sm text-[#4A4A4A]">Técnico en Informática</p>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, layout: { duration: 0.3 } }}
          className="bg-[#BEE3F8] rounded-3xl p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-[#3182CE] mb-2">Intereses</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <span className="text-3xl mb-1 block">🎧</span>
              <p className="text-sm text-[#4A4A4A]">Música</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-1 block">🎬</span>
              <p className="text-sm text-[#4A4A4A]">Películas</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-1 block">✏️</span>
              <p className="text-sm text-[#4A4A4A]">Dibujo</p>
            </div>
            <div className="text-center">
              <span className="text-3xl mb-1 block">🎭</span>
              <p className="text-sm text-[#4A4A4A]">Animación</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, layout: { duration: 0.3 } }}
          className="col-span-1 sm:col-span-2 bg-[#FEEBC8] rounded-3xl p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#DD6B20] mb-2">Habilidades</h3>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4 text-[#4A4A4A]">
                <li>Responsabilidad y compromiso</li>
                <li>Aptitudes para la atención al Cliente</li>
                <li>Trabajo en equipo</li>
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-md flex items-center justify-center mr-2 text-xs">Ps</span>
                  <span className="text-sm text-[#4A4A4A]">Intermedio</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-purple-500 text-white rounded-md flex items-center justify-center mr-2 text-xs">Pr</span>
                  <span className="text-sm text-[#4A4A4A]">Medio</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-md flex items-center justify-center mr-2 text-xs">Ai</span>
                  <span className="text-sm text-[#4A4A4A]">Intermedio</span>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-pink-500 text-white rounded-md flex items-center justify-center mr-2 text-xs">Ae</span>
                  <span className="text-sm text-[#4A4A4A]">Medio</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#DD6B20] mb-2">Paquetería Office</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-md flex items-center justify-center mr-2 text-lg font-bold">W</span>
                  <span className="text-sm text-[#4A4A4A]">Word</span>
                </div>
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-red-600 text-white rounded-md flex items-center justify-center mr-2 text-lg font-bold">P</span>
                  <span className="text-sm text-[#4A4A4A]">PowerPoint</span>
                </div>
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-green-600 text-white rounded-md flex items-center justify-center mr-2 text-lg font-bold">X</span>
                  <span className="text-sm text-[#4A4A4A]">Excel</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}