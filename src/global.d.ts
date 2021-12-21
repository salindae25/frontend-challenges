/// <reference types="@sveltejs/kit" />

interface Job {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

interface CommentUser {
	image: {
		png: string;
		webp: string;
	};
	username: string;
}
interface CommentReplies {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	replyingTo: string;
	user: CommentUser;
}
interface FMComment {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: CommentUser;
	replies: CommentReplies[];
}
