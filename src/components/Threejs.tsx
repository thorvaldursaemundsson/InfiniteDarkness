import React from 'react';
import * as THREE from "three";
import { IStarSystem, IStar, IPlanetoid, DistanceType } from './Lore/IStarSystem';

interface IThreejsProps {
    starSystem: IStarSystem
}

interface Coordinates {
    x: number;
    y: number;
}

class Threejs extends React.Component<IThreejsProps, {}> {
    mount: any;
    mouseMoving: 'none' | 'left' | 'right';
    rotationEuler: THREE.Euler;
    mouseStartCoordinates: Coordinates;

    constructor(props: IThreejsProps) {
        super(props);
        this.mouseMoving = 'none';
        this.rotationEuler = new THREE.Euler(0, 0, 0);
        this.mouseStartCoordinates = { x: 0, y: 0 };
    }

    getColorFromStar(star: IStar): string {
        switch (star.classification) {
            case 'A': return 'texture_star_class_a.jpg';
            case 'F': return 'texture_star_class_f.jpg';
            case 'G': return 'texture_star_class_g.jpg';
            case 'K': return 'texture_star_class_k.jpg';
            case 'M': return 'texture_star_class_m.jpg';
            default: return 'white.jpg';
        }
    }

    getColorFromPlanet(planet: IPlanetoid): string {
        if (planet.imageURL !== undefined) return planet.imageURL;
        return 'white.jpg'
    }

    getOritalDistanceMod(unit: DistanceType) {
        switch (unit) {
            case 'AU': return 1 / 1000;
            case 'km': return 1 / 100000;
            case 'LY': return 1;
        }
    }

    makeSystem(rotator: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[]) {
        var stars = this.props.starSystem.stars.map((s, si, siar) => {
            var p = s.planetoids.map((p, i, ar) => {
                var planetSphere = this.makeSphere(.25 + p.mass / 160, p.name, this.getColorFromPlanet(p));
                planetSphere.position.x = i + 1 + p.orbitDistance.distance * (this.getOritalDistanceMod(p.orbitDistance.unit));
                planetSphere.position.y = si * 2;

                var satelites = p.satelites.map((sat, ix, sar) => {
                    let sa = this.makeSphere(0.15 + sat.mass / 120, sat.name, this.getColorFromPlanet(sat));
                    sa.position.x = planetSphere.position.x;
                    sa.position.y = ix + 1 + sat.orbitDistance.distance * (this.getOritalDistanceMod(sat.orbitDistance.unit));
                    sa.position.y += si * 2;
                    rotator.push(sa);
                    return sa;
                });
                satelites.forEach(s => planetSphere.attach(s));
                rotator.push(planetSphere);
                return planetSphere;
            });
            var m = this.makeSphere(.5 + s.mass / 30, s.name, this.getColorFromStar(s));
            m.position.y = si * 2;
            p.forEach(plan => m.attach(plan));
            rotator.push(m);
            return m;
        });
        if (stars.length <= 1) return stars[0];
        else {
            let firstStar = stars[0];
            let otherStars = stars.slice(1);
            otherStars.forEach(os => firstStar.attach(os));
            return firstStar;
        }
    }


    makeLabelCanvas(x: number, baseWidth: number, size: number, name: string) {
        const borderSize = 1;
        const ctx = document.createElement('canvas').getContext('2d');
        if (ctx === null) throw new Error();
        const font = `${size}px bold sans-serif`;
        ctx.font = font;
        // measure how long the name will be
        const textWidth = ctx.measureText(name).width;

        const doubleBorderSize = borderSize * 2;
        const width = baseWidth + doubleBorderSize;
        const height = size + doubleBorderSize;
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        // need to set font again after resizing canvas
        ctx.font = font;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);

        // scale to fit but don't stretch
        const scaleFactor = Math.min(1, baseWidth / textWidth);
        ctx.translate(width / 2, height / 2);
        ctx.scale(scaleFactor, 1);
        ctx.fillStyle = 'white';
        ctx.fillText(name, 0, 0);
        const canvas = ctx.canvas;
        const texture = new THREE.CanvasTexture(canvas);

        const labelMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
        });

        const label = new THREE.Sprite(labelMaterial);

        const root = new THREE.Object3D();
        root.position.x = x;
        root.add(label);
        label.position.y = 1;
        //label.position.z = .4 * 1.01;

        // if units are meters then 0.01 here makes size
        // of the label into centimeters.
        const labelBaseScale = 0.01;
        label.scale.x = canvas.width * labelBaseScale;
        label.scale.y = canvas.height * labelBaseScale;
        return label;
    }

    makeSphere(radius: number, label: string, img: string) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(img) }));
        mesh.attach(this.makeLabelCanvas(0, 40, 12, label));
        return mesh;
    }

    moveMouse(e: MouseEvent) {
        if (this.mouseMoving === 'none') return;
        this.rotationEuler.y = (this.mouseStartCoordinates.x - e.offsetX) * .1;
        this.rotationEuler.x = (this.mouseStartCoordinates.y - e.offsetY) * .1;
    }

    startMoveMouse(e: MouseEvent) {
        if (e.button === 0) this.mouseMoving = 'left';
        else if (e.button === 2) this.mouseMoving = 'right';
        this.mouseStartCoordinates.x = e.offsetX;
        this.mouseStartCoordinates.y = e.offsetY;
        e.preventDefault();
        return false;
    }

    endMoveMouse() {
        this.mouseMoving = 'none';
        this.rotationEuler.y = 0;
        this.rotationEuler.x = 0;
        this.rotationEuler.z = 0;
    }



    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(760, 760);
        this.mount.appendChild(renderer.domElement);
        renderer.domElement.addEventListener('mousedown', (e) => this.startMoveMouse(e));
        renderer.domElement.addEventListener('mousemove', (e) => this.moveMouse(e));
        renderer.domElement.addEventListener('mouseup', () => this.endMoveMouse());

        var rotatorList: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = [];
        var system = this.makeSystem(rotatorList);

        scene.add(system);
        camera.position.z = 5;
        var animate = () => {
            requestAnimationFrame(animate);
            rotatorList.forEach((s, i, ar) => {

                //s.rotation.x += 0.00666;
                //s.rotation.y += 0.01;
                s.rotation.z += 0.001;
                if (i !== 0) {
                    s.rotation.x += (0.01 );
                    //s.rotation.y += 0.01;
                }
                console.log(i);
            })
            if (this.mouseMoving === 'left') {
                system.position.x = -this.rotationEuler.y / 10;
                system.position.y = this.rotationEuler.x / 10;
            }
            else if (this.mouseMoving === 'right') {
                system.position.z = this.rotationEuler.x / 5;
            }
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return <div onContextMenu={(e) => e.preventDefault()} ref={ref => (this.mount = ref)} />
    }
}

export default Threejs;