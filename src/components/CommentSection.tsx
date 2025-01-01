import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommintSectionProps {
  postid: string;
}

export default function CommintSection({ postid }: CommintSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handelAddCommient = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handelEditCommient = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const heandlesaveeditComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8 bg-[#a1c9e4] mb-6 px-6">
      <h2 className="text-2xl pt-5 font-semibold text-[#143a53] ">Comments</h2>
      <div className="mt-4 space-x-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handelEditCommient(comment.id)}
                  className="mt-2 text-slate-500"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-600">No comment yet</p>
        )}
      </div>
      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="your name"
          className="w-full mb-2 bg-[#2a495c]"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="add a comment"
          className="w-full bg-[#2a495c] mb-2 mt-5"
        />
     <Button
     onClick={editingCommentId ? heandlesaveeditComment :handelAddCommient}
     className="mt-4 mb-4 text-white bg-[#162c3a]">
{editingCommentId ? 'Save' : 'Submit'}
     </Button>
      </div>
    </div>
  );
}
