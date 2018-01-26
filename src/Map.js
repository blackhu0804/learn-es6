// map
let json = {
  name: 'black',
  skill: 'web'
}

var map = new Map();
map.set(json, 'I am');
console.log(map);
// Map { { name: 'black', skill: 'web' } => 'I am' }
map.set('suyu', json);
console.log(map)
/* Map {
  { name: 'black', skill: 'web' } => 'I am',
  'suyu' => { name: 'black', skill: 'web' } } */

// get
console.log(map.get('suyu'));
//{ name: 'black', skill: 'web' }

//delete
map.delete(json);
console.log(map);
// Map { 'suyu' => { name: 'black', skill: 'web' } }

//size
console.log(map.size); // 1

// has
console.log(map.has('suyu')); // true