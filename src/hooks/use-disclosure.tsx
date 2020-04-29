import { useCallback, useState } from "react";

export default function useDisclosure(isOpenDefault = false) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(state => !state), []);

  return { isOpen, onOpen, onClose, onToggle };
}
