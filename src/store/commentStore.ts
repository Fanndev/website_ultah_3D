import { create } from "zustand";

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: number;
  position: { x: number; y: number };
}

interface CommentStore {
  comments: Comment[];
  addComment: (text: string, author: string) => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
  comments: [],
  addComment: (text, author) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          id: Math.random().toString(36).substring(7),
          text,
          author,
          timestamp: Date.now(),
          position: {
            x: Math.random() * (window.innerWidth - 300) + 150, // Keep bubbles away from edges
            y: window.innerHeight + 100, // Start below viewport
          },
        },
      ],
    })),
}));
