import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { libraryClientType } from '../stores/apiClientStore';

type Library = 'fetch' | 'axios' | 'supabase';

interface LibrarySelectorProps {
  children?: React.ReactNode;
}

export default function LibrarySelector({ children }: LibrarySelectorProps) {
  const [mounted, setMounted] = useState(false);
  const $library = useStore(libraryClientType);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Atualizar visibilidade dos conteúdos baseado no estado
    const fetchContents = document.querySelectorAll('.library-content-fetch');
    const axiosContents = document.querySelectorAll('.library-content-axios');
    const supabaseContents = document.querySelectorAll(
      '.library-content-supabase'
    );

    fetchContents.forEach((el) => {
      if ($library === 'fetch') {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    axiosContents.forEach((el) => {
      if ($library === 'axios') {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    supabaseContents.forEach((el) => {
      if ($library === 'supabase') {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }, [$library, mounted]);

  const getLibraryType = (): Library => {
    if ($library === 'fetch') return 'fetch';
    if ($library === 'axios') return 'axios';
    if ($library === 'supabase') return 'supabase';
    return 'fetch';
  };

  const currentLibrary = getLibraryType();

  const handleSelect = (lib: Library) => {
    libraryClientType.set(lib as any);
  };

  const isActive = (lib: Library) => currentLibrary === lib;

  if (!mounted) {
    return null;
  }

  return (
    <div className="my-6">
      <div className="flex gap-3 mb-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-1 rounded-lg w-fit">
        <button
          onClick={() => handleSelect('fetch')}
          className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 ${
            isActive('fetch')
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
            Fetch API
          </span>
        </button>
        <button
          onClick={() => handleSelect('axios')}
          className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 ${
            isActive('axios')
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
            Axios
          </span>
        </button>
        <button
          onClick={() => handleSelect('supabase')}
          className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 ${
            isActive('supabase')
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
            Supabase Client
          </span>
        </button>
      </div>
    </div>
  );
}
