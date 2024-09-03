// shims-for-broken-module.d.ts
declare module "@pureadmin/utils" {
  const subBefore: (str: string, substr: string) => string;
  const subAfter: (str: string, substr: string) => string;
  const isFunction: (val: any) => boolean;
  const useEventListener: (
    el: HTMLElement,
    eventName: string,
    handler: EventListenerOrEventListenerObject
  ) => void;
}
