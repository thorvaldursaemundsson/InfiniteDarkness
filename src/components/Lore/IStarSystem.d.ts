export interface IHeavelyBody {

    mass: number;
    age: number;
    name: string;
    description: string;
}

export interface IStarSystem {
    stars: IStar[];
    roguePlanetoids: IPlanetoid[];
    name: string;
    description: string;
}

interface IStar extends IHeavelyBody {
    classification: 'A' | 'F' | 'G' | 'K' | 'M';
    planetoids: IPlanetoid[];
}

type DistanceType = 'km' | 'AU' | 'LY';
interface Distance {
    distance: number;
    unit:DistanceType;
}

export interface IPlanetoid extends IHeavelyBody {
    classification: string;
    surfaceGravity: number;
    temperatureRange: string;
    atmosphere: string;
    atmosphericPressure: number;
    hydrosphere: string;
    satelites: IPlanetoid[];
    orbitDistance: Distance;
    feature?: string;
}