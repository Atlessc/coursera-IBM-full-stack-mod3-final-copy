import { create } from 'zustand';

const useStore = create((set) => ({
  // states
  Recommendations:[],
  thankYouPopUpVisible: true,
  
  // actions
  setRecommendations: (Recommendations) => set({ Recommendations }),
  addRecommendation: ({name, message}) => set((state) => ({ Recommendations: [...state.Recommendations, { name, message }] })),
  setThankYouPopUpVisible: (thankYouPopUpVisible) => set({ thankYouPopUpVisible }),
}));

export default useStore;