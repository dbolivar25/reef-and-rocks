"use client";

import React, { createContext, useContext, useState } from "react";

export type CategoryFilter = 'all' | 'shell-pearl' | 'stone-crystal' | 'bracelet-bangle';

interface CollectionContextType {
  isOpen: boolean;
  selectedCategory: CategoryFilter;
  openModal: (category?: CategoryFilter) => void;
  closeModal: () => void;
  setCategory: (category: CategoryFilter) => void;
}

const CollectionContext = createContext<CollectionContextType | undefined>(
  undefined
);

export function CollectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const openModal = (category: CategoryFilter = 'all') => {
    setSelectedCategory(category);
    setIsOpen(true);
  };
  
  const closeModal = () => setIsOpen(false);
  
  const setCategory = (category: CategoryFilter) => {
    setSelectedCategory(category);
  };

  return (
    <CollectionContext.Provider 
      value={{ isOpen, selectedCategory, openModal, closeModal, setCategory }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollectionModal() {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    throw new Error(
      "useCollectionModal must be used within a CollectionProvider"
    );
  }
  return context;
}