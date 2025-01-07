import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  // Estado inicial para prevenir errores en SSR
  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      // Verificar si estamos en el navegador
      const storageValue = localStorage.getItem(key);
      if (storageValue) {
        return JSON.parse(storageValue);
      }
    }
    return initialValue; // Devolver el valor inicial si estamos en SSR
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState] as const;
}
