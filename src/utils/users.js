const users = []

const addUser = ({ id, username, room }) => {
	// clean the data
	username = username.trim().toLowerCase()
	room = room.trim().toLowerCase()

	// validate the data
	if (!username || !room) {
		return {
			error: "Username and room are required!"
		}
	}

	// Check for existing user

	const existingUser = users.find((user) => {
		return user.username === username && user.room === room
	})

	if (existingUser) {
		return {
			error: "Username is in use!"
		}
	}

	// Store users

	const user = { id, username, room }
	users.push(user)
	return { user }
}

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id );
	if (index !== 1) {
		return users.splice(index, 1)[0]
	}
}

const getUser = (id) => {
	const index = users.findIndex((user) => user.id === id);
	let user;
	if (index !== -1) {
		user  = users[index];
	}
	return user;
}

const getUsersInRoom = (room) => {
	room = room.trim().toLowerCase();
	const usersInRoom = users.filter((user) => user.room === room );
	return usersInRoom;
}

module.exports = {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
}