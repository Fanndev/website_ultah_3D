import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useCommentStore } from "../../../store/commentStore";
import { birthdayConfig } from "../../../config/birthday";

export function CommentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const addComment = useCommentStore((state) => state.addComment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && author.trim()) {
      addComment(comment, author);
      setComment("");
      setAuthor("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black/50 backdrop-blur-md rounded-full p-4 text-white hover:bg-black/60 transition-colors"
            style={{ border: `1px solid ${birthdayConfig.colors.primary}` }}
          >
            <MessageCircle size={24} />
          </button>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-black/50 backdrop-blur-md rounded-lg p-6 space-y-4 w-[400px] transform transition-all"
            style={{
              border: `2px solid ${birthdayConfig.colors.primary}`,
              boxShadow: `0 0 20px ${birthdayConfig.colors.primary}40`,
            }}
          >
            <h3
              className="text-xl font-semibold text-center mb-4"
              style={{ color: birthdayConfig.colors.primary }}
            >
              Leave a Birthday Message
            </h3>
            <div>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white/10 rounded-lg px-4 py-2 text-white border border-white/20 focus:border-white/40 outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white/10 rounded-lg px-4 py-2 text-white border border-white/20 focus:border-white/40 outline-none transition-colors resize-none"
                placeholder="Write your birthday message..."
                rows={4}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-black font-medium transition-colors"
                style={{
                  backgroundColor: birthdayConfig.colors.primary,
                  boxShadow: `0 0 10px ${birthdayConfig.colors.primary}40`,
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
