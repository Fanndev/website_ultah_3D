import { Header } from "./Interface/Header";
import { EventDetails } from "./Interface/EventDetails";
import { Gallery } from "./Interface/Gallery";
import { CommentForm } from "./Interface/Comments/CommentForm";
import { CommentList } from "./Interface/Comments/CommentList";
import { ThankYou } from "./Interface/ThankYou";

export function Interface() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Header />
      <EventDetails />
      <Gallery />
      <CommentForm />
      <CommentList />
      <ThankYou />
    </div>
  );
}
