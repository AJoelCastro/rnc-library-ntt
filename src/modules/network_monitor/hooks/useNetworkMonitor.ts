import { useState, useEffect } from 'react';
import NativeNetworkMonitor from '../../../NativeNetworkMonitor';
import type { ConnectionInfo } from '../types';

export const useNetworkMonitor = () => {
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial state
    NativeNetworkMonitor.getCurrentState()
      .then(setConnectionInfo)
      .finally(() => setIsLoading(false));

  }, []);

  return { connectionInfo, isLoading };
};