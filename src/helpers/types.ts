export type StatusType = "error" | "info" | "warning" | "success" | undefined;

export interface AlertDataType {
  status: StatusType;
  display: string;
  message: string;
}

export type EditAlertType = (
  status: StatusType,
  display: boolean,
  message: string
) => void;

interface Comment {
  author: string;
  published: string;
  comment: string;
}

export interface FeedPost {
  id: number;
  meta: {
    author: string;
    description_text: string;
    published: string;
    likes: number[];
  };
  thumbnail: string;
  src: string;
  comments: Comment[];
}
