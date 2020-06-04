import React from 'react';
import StarSystem from './StarSystem';

const SolSystem = () => <StarSystem
        stars={[
            {
                name:'Sun',
                mass: 1,
                age: 4.6,
                description:"Obviously nobody lives on the sun...yet, this however is the place of many Hypermatter factories, in close orbit these massive structures siphon energy from the super hot corona and produce Hypermatter, this is transported to Venus where it can be sold at astronomical cost.",
                classification:'G',
                planetoids:[{
                    name:'Mercury',
                    classification:'rocky',
                    description:'Mercury is the seat of The Coalition of Sol, the governing body of the system of the sun. Situated here because of proximity to the rest of the system. Additionally there are sprawling industry covering most of the planet, much of it automated. Humans mostly live in underground installations and in deep ever-dark craters to protect them from the intense solar radiation',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Venus',
                    classification:'rocky',
                    description:'Though no living thing exists on this hellscape of a planet there is a low orbital station here whos main purpose is to serve as a refueling base for both fusion and FTL based vessels.',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Earth',
                    classification:'Almost half of humanity lives here, aproximately 5 billion people, this number used to be much higher but due to mass emigration and lack of Earthly resources billions of people have since left. Earth is still one of the most interesting places, where the super-nations are in constant competition over influence over the rest of the system. Most people here live normal lives as they always had.',
                    description:'Rocky',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:'birthplace of humanity',
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Mars',
                    classification:'Once a desolate wasteland this green jewel is ruled by the Democratic Republic of Mars, humans and merlions make up roughly equal parts of the population',
                    description:'Rocky',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'The Belt',
                    classification:'Asteroids',
                    description:'The Belt and Ceres are populated mostly by automated robots and a few humans and merlions who operate them, this is the biggest industrial complex spanning the system, most high-end mineral refinement both legal and underground happens here',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Ceres',
                    classification:'rocky',
                    description:'The Belt and Ceres are populated mostly by automated robots and a few humans and merlions who operate them, this is the biggest industrial complex spanning the system, most high-end mineral refinement both legal and underground happens here',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Jupiter',
                    classification:'Gas giant',
                    description:'In addition to some low orbit stations around Jupiter the moons Ganymede, Callisto, Io and Europa have various ground-based stations, these are sparesely populated and mostly not self sufficient',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Saturn',
                    classification:'Gas giant',
                    description:'Saturn is not very populated but besides Titan, mostly ice is gathere from the rings of Saturn and sold to the inhabitats outside of Earth',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Uranus',
                    classification:'Gas giant',
                    description:'One station orbiting Uranus exists, its very small and not populated. People tend to avoid this place due to the smell',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Neptune',
                    classification:'Gas giant',
                    description:'The final real planet of the solar system, a science station orbits here',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                },
                {
                    name:'Oort Cloud',
                    classification:'asteroids/comets',
                    description:'A huge cloud spanning a light year from the sun, though almost completely empty- space after Neptune still have some features, only pirates and monsters roam here. But mostly nothing.',
                    age:0,
                    mass:0,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature:undefined,
                    surfaceGravity:0,
                    orbitDistance:'',
                    satelites:[],
                    temperatureRange:'',
                    
                }]
            }
        ]}
        roguePlanetoids={[]}
        name='The Sol System'
        description='The Sol System is a richly inhabited system where most of humanity lives, almost half on the birthplace of Humanity- Earth. Almost every planet and moon has some permanent human presence, and Mars has a huge Merlion population'
    />


export default SolSystem;