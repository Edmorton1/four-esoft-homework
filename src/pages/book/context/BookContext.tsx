import { createContext, useCallback, useState, type ReactNode } from "react";

export const FONT_SIZE = {
  small: "маленький",
  medium: "средний",
  large: "большой"
} as const

export type sizeType = keyof typeof FONT_SIZE

export const COLORS = {
  black: "black",
  sepia: "#704214",
  darkBlue: "darkblue"
} as const

export type colorsType = keyof typeof COLORS

interface BookContextInterface {
  textSettings: {
    color: string;
    size: sizeType;
    bold: boolean;
  };

  setTextColor: (color: string) => void
  setTextSize: (size: sizeType) => void
  toggleBold: () => void
}

export const BookContext = createContext<BookContextInterface | null>(null);

export function BookProvider({ children }: { children: ReactNode }) {
  const [textSettings, setTextSettings] = useState<BookContextInterface['textSettings']>({
    color: 'black',
    size: 'medium',
    bold: false,
  });

  const setTextColor = useCallback((color: BookContextInterface['textSettings']['color']) => setTextSettings(prev => ({...prev, color})), []);
  const setTextSize = useCallback((size: BookContextInterface['textSettings']['size']) => setTextSettings(prev => ({...prev, size})), []);
  const toggleBold = useCallback(() => setTextSettings(prev => ({...prev, bold: !prev.bold})), []);

  console.log(textSettings)
  return (
    <BookContext.Provider value={{textSettings, setTextColor, setTextSize, toggleBold}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;