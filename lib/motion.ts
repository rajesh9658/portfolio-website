"use client";

import { 
  motion as framerMotion,
  AnimatePresence,
  easeInOut
} from "framer-motion";

// Re-export framer-motion components and utilities
export const motion = framerMotion;
export { AnimatePresence, easeInOut };

// Define reusable animation variants
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay = 0, duration = 0.5) => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren: number, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay = 0, duration = 0.5) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const textVariant = (delay = 0) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
});

export const scaleIn = (delay = 0, duration = 0.5) => ({
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});