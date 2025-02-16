import { CommentType } from "./Comment";

export default function useFunctions() {
  // Recursively add comments to the replies of a comment node and return the updated comment tree
  const addComments = (
    parentTree: CommentType,
    commendId: string,
    newComment: CommentType
  ) => {
    // parentTree is the current node, commendId is the id of the comment we are looking for, newComment is the new comment we are adding.

    // base case: if the current node is the comment we are looking for, add the new comment to the replies array and return the updated parentTree. unshift will add the new comment to the beginning of the array so it will be the first reply.
    if (parentTree.id === commendId) {
      parentTree.replies.unshift(newComment);
      return parentTree;
    }

    // Recursively update the replies of the current node
    // map will return an array of updated replies of the current node (parentTree).
    const updatedReplies: CommentType[] = parentTree.replies.map((reply) => {
      return addComments(reply, commendId, newComment);
    });
    return { ...parentTree, replies: updatedReplies };
  };
  return { addComments };
}
