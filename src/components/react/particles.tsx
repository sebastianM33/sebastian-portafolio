import React, { useEffect, useRef } from 'react';

export default function FondoDeParticulas() {
  const referenciaLienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const lienzo = referenciaLienzo.current;
    if (!lienzo) return;
    
    const contextoVisual = lienzo.getContext('2d');
    if (!contextoVisual) return;

    let idDeAnimacion: number;
    let arregloDeParticulas: Particula[] = [];
    const cantidadDeParticulas = 150;

    const redimensionarLienzo = () => {
      lienzo.width = window.innerWidth;
      lienzo.height = window.innerHeight;
    };

    class Particula {
      posicionX: number;    
      posicionY: number;
      velocidadX: number;
      velocidadY: number;
      radioDelCirculo: number;

      constructor() {
        this.posicionX = Math.random() * lienzo!.width;
        this.posicionY = Math.random() * lienzo!.height;
        this.velocidadX = (Math.random() - 0.5) * 0.5;
        this.velocidadY = (Math.random() - 0.5) * 0.5;
        this.radioDelCirculo = Math.random() * 2;
      }
      
      actualizarPosicion() {
        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;
        
        // Rebotar en los bordes
        if (this.posicionX < 0 || this.posicionX > lienzo!.width) this.velocidadX *= -1;
        if (this.posicionY < 0 || this.posicionY > lienzo!.height) this.velocidadY *= -1;
      }
      
      dibujarParticula() {
        if (!contextoVisual) return;
        contextoVisual.beginPath();
        contextoVisual.arc(this.posicionX, this.posicionY, this.radioDelCirculo, 0, Math.PI * 2);
        contextoVisual.fillStyle = "rgba(59, 130, 246, 0.5)";
        contextoVisual.fill();
      }
    }

    const inicializarParticulas = () => {
      redimensionarLienzo();
      arregloDeParticulas = Array.from({ length: cantidadDeParticulas }, () => new Particula());
    };

    const animarLienzo = () => {
      contextoVisual.clearRect(0, 0, lienzo.width, lienzo.height);
      
      arregloDeParticulas.forEach(particula => {
        particula.actualizarPosicion();
        particula.dibujarParticula();
      });

      // Lógica para conectar partículas cercanas con una línea
      arregloDeParticulas.forEach((particula1, indiceActual) => {
        arregloDeParticulas.slice(indiceActual + 1).forEach((particula2) => {
          const diferenciaX = particula1.posicionX - particula2.posicionX;
          const diferenciaY = particula1.posicionY - particula2.posicionY;
          const distanciaEntreParticulas = Math.sqrt(diferenciaX * diferenciaX + diferenciaY * diferenciaY);

          if (distanciaEntreParticulas < 100) {
            contextoVisual.beginPath();
            contextoVisual.moveTo(particula1.posicionX, particula1.posicionY);
            contextoVisual.lineTo(particula2.posicionX, particula2.posicionY);
            contextoVisual.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distanciaEntreParticulas / 100)})`;
            contextoVisual.stroke();
          }
        });
      });

      idDeAnimacion = requestAnimationFrame(animarLienzo);
    };

    window.addEventListener('resize', redimensionarLienzo);
    inicializarParticulas();
    animarLienzo();

    return () => {
      window.removeEventListener('resize', redimensionarLienzo);
      cancelAnimationFrame(idDeAnimacion);
    };
  }, []);

  return (
    <canvas 
      ref={referenciaLienzo} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}