import data from './data.json';

interface responseType {
	status: number;
	body: FMComment[] | null;
	error: string | null;
}
interface postResponse {
	status: number;
	body: FMComment | null;
	error: string | null;
}

let { comments } = data;

export const get = async (): Promise<responseType> => {
	const response = {
		status: 200,
		body: comments
	};

	return response;
};

export const post = async (body): Promise<postResponse> => {
	console.log(body);

	const { comment, user } = body;
	let updatedComment = comments.find((comment) => comment.id === comment.id);
	let response = {
		status: 500,
		error: 'Internal Server Error'
	};
	if (updatedComment) {
		updatedComment = {
			...updatedComment,
			...comment
		};
		response = {
			status: 200,
			body: updatedComment
		};
		comments = [...comments.filter((comment) => comment.id !== param.id), updatedComment];
	} else {
		response = {
			status: 404,
			error: 'Comment not found'
		};
	}

	return response;
};
