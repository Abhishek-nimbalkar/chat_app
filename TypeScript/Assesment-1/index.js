var mp = {
    "Black": "0",
    "Brown": "1",
    "Red": "2",
    "Orange": "3",
    "Yellow": "4",
    "Green": "5",
    "Blue": "6",
    "Violet": "7",
    "Grey": "8",
    "White": "9"
};
function all(c0, c1, c2, c3, c4, c5, c6, c7, c8, c9) {
    return mp[c0] + mp[c1];
}
console.log(all("Green", "Brown", "Red"));
