import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { restClientType } from '../stores/apiClientStore';

interface ClientSelectorProps {
  restClientContent: string;
  curlContent: string;
}

export default function ClientSelector({
  restClientContent,
  curlContent,
}: ClientSelectorProps) {
  const $restClientType = useStore(restClientType);
  const selectedClient = $restClientType || 'rest';

  const handleClientChange = (type: 'rest' | 'curl') => {
    restClientType.set(type);
  };

  return (
    <div className="my-6">
      <div className="flex gap-3 mb-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-1 rounded-lg w-fit">
        <button
          onClick={() => handleClientChange('rest')}
          className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 ${
            selectedClient === 'rest'
              ? 'bg-white text-blue-600 dark:bg-blue-600 dark:text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"
              />
            </svg>
            REST Client
          </span>
        </button>
        <button
          onClick={() => handleClientChange('curl')}
          className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 ${
            selectedClient === 'curl'
              ? 'bg-white text-blue-600 dark:bg-blue-600 dark:text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            curl
          </span>
        </button>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        {selectedClient === 'rest' && (
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: restClientContent }}
          />
        )}
        {selectedClient === 'curl' && (
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: curlContent }}
          />
        )}
      </div>
    </div>
  );
}
