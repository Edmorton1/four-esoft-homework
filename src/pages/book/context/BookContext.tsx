import { createContext, useState, type ReactNode } from "react";

type sizeType = "small" | "medium" | "large"

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

  const setTextColor = (color: BookContextInterface['textSettings']['color']) => setTextSettings(prev => ({...prev, color}));
  const setTextSize = (size: BookContextInterface['textSettings']['size']) => setTextSettings(prev => ({...prev, size}));
  const toggleBold = () => setTextSettings(prev => ({...prev, bold: !prev.bold}));

  return (
    <BookContext.Provider value={{textSettings, setTextColor, setTextSize, toggleBold}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;