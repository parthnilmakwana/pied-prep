import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      completed: [],
      openQuestions: {}, // { topicId: questionId }
      searchQuery: '',
      theme: 'dark',
      toast: null,
      isBookmarksOpen: false,
      
      toggleBookmark: (id) => set((state) => ({
        bookmarks: state.bookmarks.includes(id) 
          ? state.bookmarks.filter(b => b !== id)
          : [...state.bookmarks, id]
      })),
      
      toggleCompleted: (id) => set((state) => ({
        completed: state.completed.includes(id)
          ? state.completed.filter(c => c !== id)
          : [...state.completed, id]
      })),
      
      setOpenQuestion: (topicId, questionId) => set((state) => ({
        openQuestions: {
          ...state.openQuestions,
          [topicId]: state.openQuestions[topicId] === questionId ? null : questionId
        }
      })),

      setSearchQuery: (query) => set({ searchQuery: query }),
      
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setIsBookmarksOpen: (isOpen) => set({ isBookmarksOpen: isOpen }),
      setToast: (message) => set({ toast: message }),
    }),
    {
      name: 'mern-interview-storage', // unique name
    }
  )
);
