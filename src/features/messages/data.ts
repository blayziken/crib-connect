import type { Conversation } from "./types";

export const dummyConversations: Conversation[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    isOnline: true,
    lastMessage: "Hi! I'm also a student at Georgian.\nIs the room still available?",
    timestamp: "10:30 AM",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "David Smith",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    isOnline: false,
    lastMessage: "Thanks for reaching out!\nCan we schedule a viewing?",
    timestamp: "Yesterday",
    unreadCount: 1,
  },
  {
    id: "3",
    name: "Emily Chen",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    isOnline: false,
    lastMessage: "Perfect! I'm free this weekend.\nLet me know what works for you.",
    timestamp: "Mon",
    unreadCount: 0,
  },
  {
    id: "4",
    name: "Michael Brown",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    isOnline: false,
    lastMessage: "Sounds good, thank you!",
    timestamp: "Sun",
    unreadCount: 0,
  },
];
