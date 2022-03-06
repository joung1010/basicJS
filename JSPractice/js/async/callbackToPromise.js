// call back hell을 수정해보자

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'mason' && password === 'front')
                    || (id === 'park' && password === 'back')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            },2000);
        });
    }

    getRole(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'mason') {
                    resolve({name: 'mason', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

// const user = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');


async function checkUser(id, password) {
    const user = new UserStorage();
    try {
        const loginUser = await user.loginUser(id, password);
        console.log(loginUser);
        return await user.getRole(loginUser);
    } catch (error){console.log(error)}
}


const admin = checkUser(id,password);
admin.then(console.log);
/*
user.loginUser(id,password,
    (id) => {
        user.getRole(id,
            (user) => {
                alert(`hello ${user.name}, you have a ${user.role}`);
            },
            (error) => console.log(error)
        );
    },
    (error) => {console.log(error)}
);
*/




