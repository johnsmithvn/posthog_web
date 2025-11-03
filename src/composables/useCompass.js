export function useCompass() {
  // Resolve SDK mỗi lần gọi, tránh giữ tham chiếu cũ
  const getSDK = () => (window.leanbase || window.compass) || null;

  function capture(event, props = {}) {
    const sdk = getSDK();
    sdk?.capture?.(event, props);
  }

  function identify(id, props = {}) {
    const sdk = getSDK();
    sdk?.identify?.(id, props);
  }

  function reset() {
    const sdk = getSDK();
    sdk?.reset?.();
  }

  return { capture, identify, reset };
}
