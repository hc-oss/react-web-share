import { useCallback, useState } from "react";

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, onOpen, onClose, onToggle };
}
