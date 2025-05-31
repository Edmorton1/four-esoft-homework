import type { BookType } from "@/app/context/AppTypes";

export function bookAssert(value: any): asserts value is BookType  {
  if (
    typeof value !== 'object' || value === null ||
    typeof value.id !== 'string' ||
    typeof value.title !== 'string' ||
    typeof value.author !== 'string' ||
    typeof value.year !== 'number' ||
    (value.isbn !== undefined && typeof value.isbn !== 'string') ||
    (value.description !== undefined && typeof value.description !== 'string') ||
    (value.img !== undefined && typeof value.img !== 'string')
  ) {
    throw new Error('Это не BookType');
  }
}

export function bookArrayAssert(value: any): asserts value is BookType[] {
  if (!Array.isArray(value)) {
    throw new Error('Это не массив');
  }
  for (const item of value) {
    bookAssert(item);
  }
}