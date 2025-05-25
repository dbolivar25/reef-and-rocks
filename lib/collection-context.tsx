"use client";

import React, { createContext, useContext, useState } from "react";

interface CollectionContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CollectionContext.Provider value={{ isOpen, openModal, closeModal }}>
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