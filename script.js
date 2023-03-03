"use strice";

let N = Number(prompt("Qaysi masalani tekshirishni hohlaysiz?"));

switch (N) {

    case 1:
        // 1-masala:
        let n = Number(prompt("Enter number n="));
        let text = "";

        if (n % 3 == 0) {
            text = text + "Fizz";
        }
        if (n % 5 == 0) {
            text = text + "Buzz";
        }

        alert(text);
        break;

    case 2:
        // 2-misol:
        let a = Number(prompt("Enter number a="));
        let b = Number(prompt("Enter number b="));
        let c = Number(prompt("Enter number c="));
        let x1, x2, x3;

        function sort(a, b, c) {
            a > b ? (b > c ? (x1 = a, x = b, x3 = c) : a > c ? (x1 = a, x2 = c, x3 = b) : (x1 = c, x2 = a, x3 = b)) : (a > c ? (x1 = b, x2 = a, x3 = c) : b > c ? (x1 = b, x2 = c, x3 = a) : (x1 = c, x2 = b, x3 = a));
            return console.log(`${x3} ${x2} ${x1}`);
        }

        sort(a, b, c);
        break;

    case 3:
        // 3-misol:
        let r = Math.floor(Math.random() * 10) + 1;
        console.log(r);

        for (let i = 0; i < 5; i++) {
            let o = Number(prompt("Enter number"));

            if (r === o) {
                alert("Yutdingiz !!!");
                break;
            }

            if (r < o) {
                alert("Kichikroq son kiriting");
            } else {
                alert("Kattaroq son kiriting");
            }

        }
        break;

    case 4:
        // 4-misol:

        let info = {
            name: "Sodiq",
            age: 20,
            adddress: "Toshkent",
            surname: "Qosimov"
        }

        let array = [];

        for (let key in info) {
            array.push([key, info[key]]);
        }

        console.log(array);
        break;

    case 5:
        // 5-misol:

        let data = [{
                kurs_nomi: "HTML",
                kurs_davomiyligi: 25,
                kurs_narxi: 300000
            },
            {
                kurs_nomi: "CSS",
                kurs_davomiyligi: 55,
                kurs_narxi: 400000
            },
            {
                kurs_nomi: "JS",
                kurs_davomiyligi: 70,
                kurs_narxi: 500000
            },
            {
                kurs_nomi: "React",
                kurs_davomiyligi: 40,
                kurs_narxi: 500000
            }
        ];

        let sum = 0;
        let davomiyligi = 0;

        for (let r of data) {

            let d = r.kurs_davomiyligi;
            let s = r.kurs_narxi;
            sum = sum + s;
            davomiyligi = davomiyligi + d;

        }


        console.log(`Umumiy kurs davomiyligi ${Math.floor(davomiyligi/30)} oy ${davomiyligi%30} kun va kurs uchun jami ${sum} so'm mablag' kerak`);
        break;

    case 6:
        // 6-misol:

        let set = [3, 1, 5, -4, 67, -3, -6, 1, 9, -7, 3, 5, -6];
        console.log(set);

        let Array = [];

        for (let r of set) {
            if (!Array.includes(-r)) {
                Array.push(-r);
            }
        }
        console.log(Array);
        break;

    case 7:
        // 7-misol:

        let arr = [
            "button",
            "portobello",
            "shiitake",
            "oyster",
            "cremini",
            "enoki",
            "maitake",
            "morel",
            "truffle",
            "chanterelle",
            "porcini",
            "lobster",
            "black trumpet",
            "coral",
        ];

        let Arr = [];

        for (let r in arr) {
            Arr.push([r, arr[r]]);
        }

        console.log(Arr);
        break;

    case 8:
        // 8-misol:

        let Info = [{
                id: 1,
                name: "John",
                age: 30,
                email: "john@gmail.com"
            },
            {
                id: 2,
                name: "Mary",
                age: 25,
                email: "mary@yahoo.com"
            },
            {
                id: 3,
                name: "David",
                age: 40,
                email: "david@hotmail.com"
            },
            {
                id: 4,
                name: "Sarah",
                age: 28,
                email: "sarah@gmail.com"
            },
            {
                id: 5,
                name: "Michael",
                age: 35,
                email: "michael@gmail.com"
            },
            {
                id: 6,
                name: "Julia",
                age: 32,
                email: "julia@yahoo.com"
            },
            {
                id: 7,
                name: "Adam",
                age: 23,
                email: "adam@hotmail.com"
            },
            {
                id: 8,
                name: "Emma",
                age: 27,
                email: "emma@gmail.com"
            },
            {
                id: 9,
                name: "Ryan Jonsan",
                age: 45,
                email: "ryan@yahoo.com"
            }
        ];

        let name = "";
        let d = 0;

        for (let r of Info) {
            let n = r.name;
            if (n.length > name.length) {
                name = r.name;
                d = 2023 - r.age;
            }
        }
        console.log(`${name} ${d} yilda tavallud topgan`);
        break;

    default:
        console.log("Bu yerda faqat 1 dan 8 gacha misollar bor");

}