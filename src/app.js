
let app = new Vue({
    el: "#root",
    data: {
        poids_maximum: 10,
        last_id: 3,
        nom: "",
        poids: 0,
        valeur: 0,
        objects: [{
            id: 1,
            nom: 'Stylo',
            valeur: 5,
            poids: 2
        },
        {
            id: 2,
            nom: 'Cahier',
            valeur: 3,
            poids: 5
        }
        ],
        valeur_maximum: 0,
        listeObjets: []
    },
    methods: {
        addObject() {
            newObject = {};
            newObject.id = this.last_id + 1;
            newObject.nom = this.nom;
            newObject.poids = this.poids;
            newObject.valeur = this.valeur;
            this.objects.push(newObject);
            this.nom = "";
            this.poids = 0;
            this.valeur = 0;
            this.last_id++;
        },

        deleteObject(id) {
            this.objects = this.objects.filter((value) => {
                return value.id != id;
            });
        },

        knapsackFront() {
            let input = { items: this.objects, capacity: this.poids_maximum }
            const { maxValue, indexes } = this.knapsack(input);
            // console.log(maxValue);
            // console.log(indexes.nom);
            objects1 = this.objects;
            this.listeObjets = []

            for (i = 0; i < indexes.length; i++) {
                this.listeObjets.push(objects1[indexes[i]].nom)

            }

            $('#result').show();
            this.valeur_maximum = maxValue;

            $('#result2').show();
        },


        knapsack({ capacity, items }) {
            const size = items.length;
            const lookup = Array.from(Array(size + 1), () => new Array(capacity + 1));
            const values = items.map((item) => item.valeur);
            const weights = items.map((item) => item.poids);
            for (let i = 0; i <= size; i++) {
                for (let j = 0; j <= capacity; j++) {
                    if (i === 0 || j === 0) {
                        lookup[i][j] = 0;
                    } else if (weights[i - 1] <= j) {
                        lookup[i][j] = Math.max(
                            values[i - 1] + lookup[i - 1][j - weights[i - 1]],
                            lookup[i - 1][j]
                        );
                    } else {
                        lookup[i][j] = lookup[i - 1][j];
                    }
                }
            }
            const indexes = [];
            let c = capacity;
            for (let i = size; i > 0; i--) {
                if (lookup[i][c] !== lookup[i - 1][c]) {
                    indexes.push(i - 1);
                    c = c - weights[i - 1];
                }
            }
            indexes.sort(function (a, b) {
                return a - b;
            });
            return { maxValue: lookup[size][capacity], indexes: indexes };
        },
    }

})

