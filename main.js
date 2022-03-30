let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = ['.com','.us','.net','.io'];

for(let i=0; i < pronoun.length; i++){
    for(let x=0; x<adj.length; x++){
        for (let k=0; k<noun.length; k++){
            for (let a=0; a<domain.length; a++){
                console.log(pronoun[i]+ adj[x]+noun[k]+domain[a])
            }
            
        }
    }
}
