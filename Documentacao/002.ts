interface Point {
    x: number
    y: number
}

function logPoint(p: Point) {
    console.log(`${p.x} ${p.y}`)
}

const point = { x: 20, y: 17 }
logPoint(point)

const point2 = { x: 20, y: 100, z: 500 }
logPoint(point2)