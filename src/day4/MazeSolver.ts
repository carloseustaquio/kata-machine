type Point = {
	x: number;
	y: number;
}

const dir = [
	[0, -1], // top
	[1, 0],  // right
	[0, 1],  // bottom
	[-1, 0], // left
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {
	// Base cases
	// 1. If it's out of the maze
	if (
		curr.x < 0 || curr.x >= maze[0].length ||
		curr.y < 0 || curr.y >= maze.length
	) {
		return false
	}

	// 2. If it's a wall
	if (maze[curr.y][curr.x] === wall) {
		return false;
	}

	// 3. If it's the end
	if (curr.x === end.x && curr.y === end.y) {
		path.push(curr); // add last position to the path
		return true;
	}

	// 4. If has already seen
	if (seen[curr.y][curr.x]) {
		return false;
	}

	// Pre
	path.push(curr);
	seen[curr.y][curr.x] = true;

	// Rec
	for (let i = 0; i < dir.length; i++) {
		const next = { x: curr.x + dir[i][0], y: curr.y + dir[i][1]}
		if (walk(maze, wall, next, end, seen, path)) {
			return true;
		}
	}

	/**
	// top
	if(walk(maze, wall, { x: curr.x, y: curr.y - 1 }, end, seen, path)) {
		return true;
	}

	// right
	if(walk(maze, wall, { x: curr.x + 1, y: curr.y }, end, seen, path)) {
		return true;
	}

	// bottom
	if(walk(maze, wall, { x: curr.x, y: curr.y + 1 }, end, seen, path)) {
		return true;
	}

	// left
	if(walk(maze, wall, { x: curr.x - 1, y: curr.y }, end, seen, path)) {
		return true;
	}
	*/

	// Post
	path.pop();

	return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const path: Point[] = [];
	const seen: boolean[][] = [];

	for (let i = 0; i < maze.length; i++) {
		seen[i] = new Array(maze[0].length).fill(false);
	}

	walk(maze, wall, start, end, seen, path);

	return path;
}

const maze = [
	"x x",
	"x x",
];

solve(maze, "x", { x: 1, y: 0 }, { x: 1, y: 1 });
