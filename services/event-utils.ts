
/**
 * Adiciona um listener de evento moderno e seguro.
 * Utiliza AbortController para limpeza automática, padrão recomendado no Chrome moderno.
 */
export const createModernListener = (
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: AddEventListenerOptions = {}
) => {
  const controller = new AbortController();
  
  target.addEventListener(type, listener, {
    ...options,
    signal: controller.signal
  });

  return () => controller.abort();
};

/**
 * Registra um evento de scroll otimizado (passive: true) para evitar jank no Chrome.
 */
export const registerScrollHandler = (handler: () => void) => {
  return createModernListener(window, 'scroll', handler, { passive: true });
};
