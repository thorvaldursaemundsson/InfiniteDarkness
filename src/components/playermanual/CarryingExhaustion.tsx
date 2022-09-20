import React, { useState } from 'react';
import Section from '../Section';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Character, CharacterSize } from '../Character';

const shortWidth: CSSProperties = {
    width: '25%'
};

const sizes: CharacterSize[] = ['minute', 'tiny', 'small', 'medium', 'large', 'huge', 'gigantic', 'colossal', 'titanic'];

const CarryingCapacity = () => {
    const [currentWeight, setCurrentWeight] = useState(80);
    const [cargoWeight, setCargoWeight] = useState(0);
    const [strength, setStrength] = useState(5);
    const [previousGravity, setPreviousGravity] = useState(100);
    const [currentGravity, setCurrentGravity] = useState(100);
    const [currentSize, setCurrentSize] = useState<CharacterSize>('medium');

    const gravityFactor = currentGravity / previousGravity;

    const weightFactor = (currentWeight + cargoWeight) * gravityFactor - currentWeight;

    const strengthFactor = weightFactor / strength;
    let penalty = '0';
    if (strengthFactor <= 4) { }
    else if (strengthFactor <= 8) penalty = '-1';
    else if (strengthFactor <= 12) penalty = '-2';
    else if (strengthFactor <= 16) penalty = '-4';
    else if (strengthFactor <= 20) penalty = '-8';
    else if (strengthFactor <= 24) penalty = '-16';
    else if (strengthFactor <= 28) penalty = 'max';
    else if (strengthFactor <= 32) penalty = 'drag';
    else penalty = 'too heavy';

    return (<Section title='Carrying Capacity and Exhaustion Levels'>
        <h3>Carrying Capacity</h3>
        <p>There is only so much weight you can put on a Shambra before they lay down and give up</p>
        <p>Being over capacity goes in phases, at or below the first you suffer no penalty. Then as you increase in weight you begin to suffer various penalties</p>
        <p>Penalty applies to swim and half to climb, jump, quarter to acrobatics</p>
        <ul>
            <li>Without effect your maximum speed is Sprint (5x)</li>
            <li>-1 You can no longer sprint, limited to run (x4)</li>
            <li>-2 You can no longer run, limited to jog (x3), limited to passive defense</li>
            <li>-4 You can no longer jog, limited to power walk (x2), no reaction allowed</li>
            <li>-8 You can no use move action, limited to base defense</li>
            <li>-16 You can only walk at half speed (x0.5), may only use one action</li>
            <li>Max is how much you can deadlift, can use action to move 1 meter in a round</li>
            <li>Drag is how much you can drag off the ground, uses action and move to push 1 meter / round</li>
        </ul>
        <b>Size</b>: 
        {sizes.map(s => <> <span style={currentSize === s ? { textDecoration: 'underline' } : undefined} onClick={() => setCurrentSize(s)}>{s}</span> </>)}

        <table>
            <thead>
                <tr>
                    <th>Strength</th>
                    <th>No effect</th>
                    <th>-1</th>
                    <th>-2</th>
                    <th>-4</th>
                    <th>-8</th>
                    <th>-16</th>
                    <th>Max</th>
                    <th>Drag</th>
                </tr>
            </thead>
            <tbody>
                {[...new Array(18)].map((v, str, ar) => <tr>
                    <td>{str + 1}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 1, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 2, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 3, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 4, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 5, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 6, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 7, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 8, currentSize))}</td>
                    <td>{(Character.getCarryCapacity(str + 1, 9, currentSize))}</td>
                </tr>)}
            </tbody>
        </table>
        <h4>Exhaustion Levels</h4>
        <p>Exhaustion is caused by over exterting yourself each level of exhaustion counts as one step of carrying capacity. At max you can not move, at drag you fall unconcious. See Health and Recovery for info about recovery.</p>
        <h4>Gravity and weight</h4>
        <p>Characters that live on a planet or system grow accustomed to the local gravity.
            So for as long as characters don't leave their local gravity well all carrying capacity should be assumed to be normalized.</p>
        <p>However, if a character leaves their planet or station to another planet or station with a different gravity then they are not accustomed to it.
            To find out the difference take the first gravity and divide by the second, then multiply this with the character's body weight plus cargo, then minus the character's body weight.
        </p>
        <label style={shortWidth}>Stength</label> <input style={shortWidth} type='input' value={strength} onChange={e => setStrength(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>Character weight</label> <input style={shortWidth} type='input' value={currentWeight} onChange={e => setCurrentWeight(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>cargo weight</label> <input style={shortWidth} type='input' value={cargoWeight} onChange={e => setCargoWeight(parseInt(e.target.value))} /><br />
        <label style={shortWidth}>Previous gravity %</label> <input style={shortWidth} type='input' value={previousGravity} onChange={e => setPreviousGravity(parseFloat(e.target.value))} /><br />
        <label style={shortWidth}>Current gravity %</label> <input style={shortWidth} type='input' value={currentGravity} onChange={e => setCurrentGravity(parseFloat(e.target.value))} /><br />
        <label style={shortWidth}>Current Weight</label> {weightFactor}<br />
        <label style={shortWidth}>Current Penalty</label> {penalty}
    </Section>);
}

export default CarryingCapacity;