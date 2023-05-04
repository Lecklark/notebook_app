import { ComponentType, lazy, ReactNode, Suspense } from 'react';

export const lazyLoad = (
  factory: () => Promise<{ default: ComponentType<any> }>,
  fallback?: ReactNode,
) => {
  const Component = lazy(factory);
  const loading = fallback ? fallback : null;

  return (
    <Suspense fallback={loading}>
      <Component />
    </Suspense>
  );
};
