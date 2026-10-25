"use strict";

const user = {
    name: "Amit",

    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined

const fixedUser = {
    name: "Amit",

    showName: function () {
        console.log(this.name);
    }
};

fixedUser.showName(); // Amit