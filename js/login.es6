console.log('login.js loaded!');

let login = (username, password) => {
	if(username !== 'admin' || password !== 'radical') {
		console.log('incorrect login');
	}
}

// login('admin', 'idunno');

export {login}