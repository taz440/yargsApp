const yargs = require("yargs");

const { Movie, movieArr,} = require("./utils");


const app = (args) => {
    switch(process.argv[2]){
        case "add":
            const movie = new Movie(args.title, args.actor, args.director);
            movie.add();
            console.log(movieArr);
            break;
        case "add multi":
            const movie1 = new Movie(args.title1, args.actor1, args.director1);
            const movie2 = new Movie(args.title2, args.actor2, args.director2);
            movie1.add();
            movie2.add();
            console.log(movieArr);
            break;
        case "remove last":
            console.log("pre", movieArr);
            // const rem = new Remove(args.postion);
            // rem.remove();
            //remove(args.position);
            //movieArr.splice(args.position);
            movieArr.pop();
            console.log("post", movieArr);
            break;   
        case "list":
            console.log(movieArr);
            break;
        default:
            console.log("Incorrect command");
            break;
    }
};

app(yargs.argv);

