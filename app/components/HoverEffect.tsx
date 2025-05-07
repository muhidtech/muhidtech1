"use client"


import React, { useEffect, useState, useCallback } from 'react'



interface HoverEffectProps {
    ref: React.RefObject<HTMLDivElement | null>;
    x?: number;
    y?: number;
    z?: number;
  }
  
  interface HoverEffectReturn {
    transform: string;
    transition: string;
  }
  
const useHoverEffect = ({
    ref,
    x = 0,
    y = 0,
    z = 0,
  }: HoverEffectProps): HoverEffectReturn => {
    const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (ref.current) {
          const { offsetWidth: width, offsetHeight: height } = ref.current;
          const rect = ref.current.getBoundingClientRect();
          const xPos = (e.clientX - rect.left - width / 2) / width;
          const yPos = (e.clientY - rect.top - height / 2) / height;
  
          setCoords({ x: xPos, y: yPos, z });
        }
      },
      [ref, z]
    );
  
    const handleMouseEnter = useCallback(() => {
      setIsHovering(true);
    }, []);
  
    const handleMouseLeave = useCallback(() => {
      setIsHovering(false);
    }, []);
  
    useEffect(() => {
      const element = ref.current;
      if (element) {
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
  
        return () => {
          element.removeEventListener('mousemove', handleMouseMove);
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, [ref, handleMouseMove, handleMouseEnter, handleMouseLeave]);
  
    const xTransform = isHovering ? coords.x * x : 0;
    const yTransform = isHovering ? coords.y * y : 0;
    const zTransform = isHovering ? z : 0;
  
    const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${xTransform}deg) translateZ(${zTransform}px)`;
    const transition = isHovering ? 'all 0.1s ease-in-out' : '';
  
    return { transform, transition };
  };
    
  
  
  

  export default useHoverEffect;