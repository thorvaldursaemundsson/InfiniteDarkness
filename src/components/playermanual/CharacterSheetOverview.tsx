import React from 'react';
import Section from './Section';

const CharacterSheetOverview = () => <Section title='Character sheet overview'>
    <h1>Character sheet overview</h1>
    <p>This is a quick look at each part of the character sheet, going section by section, top to bottom, left to right</p>

    <h4>Name</h4>
    <p>The name of the character, this should be what you want other players and the game master to refer to you in when they address you in character</p>

    <h4>Gender</h4>
    <p>Your characters sex and gender, note that Merlions have different sexes and genders than humans and shambras</p>

    <h4>Species</h4>
    <p>Which species is your character? Human, Shambra, Merlion, Nekovian and Synthoid are the valid options. See more under World & Lore -{">"} Humans/Merlions/Shambras/Nekovians/Synthoids</p>

    <h4>Age</h4>
    <p>The age of your character in Earth Years</p>

    <h4>Character Points</h4>
    <p>Character points are universally applicable experience points which can be used for anything. See more under Character Points and Experience.</p>

    <h4>Experience multiplier</h4>
    <p>How quickly you gain experience, depends on age and species. See more under Character Points and Experience.</p>

    <h4>Background</h4>
    <p>This should be a short synopsis of where you were born, lived and any noteworthy experiences you've had.</p>

    <h4>Life</h4>
    <p>Life refers to how much punishment your character can take before dying. Life is caluclated as strength + endurance + endurance. See health section for more information</p>

    <h4>Mana</h4>
    <p>Mana refers to how many spells you can cast per day, some spells use multiple points of mana. Mana is calculated as endurance + willpower + willpower</p>

    <h4>Mental health</h4>
    <p>Mental health refers to the state of your mind, it is caulcated as willpower + willpower. See more under Health</p>

    <h4>Melee DB s / m / l</h4>
    <p>Melee damage bonus, small / medium / large. You gain a damage bonus to melee weapons and unarmed attacks based on your strength. It's strength divided by 4, 3, 2 for small, medium and large. See more under Combat</p>

    <h4>Homeworld</h4>
    <p>Place of birth, eg. Earth or Mars or space</p>

    <h4>Player</h4>
    <p>The name of you, you is the player.</p>

    <h4>Apperance traits</h4>
    <p>How does your character look? Intensive eyes? Purple hair? Green pincers? Different colored tail? Tattoos? What would people notice if they saw your character. See more under Skills & Perks -> Traits -> Appearence Traits</p>

    <h4>Strength</h4>
    <p>Raw muscle strength, this affects health, carrying capacity, punching power.</p>

    <h4>Endurance</h4>
    <p>Endurance is your life force, modifies how far you can run, how much beer you can drink, how long you can survive a boxing match</p>

    <h4>Agility</h4>
    <p>Agility refers to hand eye coordination, reflexes, flexibility, balance and speed</p>

    <h4>Perception</h4>
    <p>Perception refers to your senses, awareness and alertness</p>

    <h4>Intelligence</h4>
    <p>Knowledge, memory, wisdom, the ability to think quickly and to contemplate deeply.</p>

    <h4>Willpower</h4>
    <p>Willpower refers to your sense of personality, force of will and self determination as well as natural leadership</p>

    <h4>Personality traits</h4>
    <p>What is your personality like? See more under Skills & Perks -> Traits -> Personality Traits</p>

    <h4>Skills</h4>
    <p>This is a non-exhaustive list of skills, Exp refers to how much experience points you have for the skill, rank is the number of points you have for it, most skills gain bonuses also from your base attributes (str/dex/end/int/will/per), see Perks & Traits -> Skills for more information about each skill.</p>

    <h4>Perks</h4>
    <p>Perks are skill specializations, special abilities and modifiers you've acquired. See more under Skills & Perks -> Perks</p>

    <h4>Traits</h4>
    <p>Traits are special mental and physical traits that modify how your character behaves and works, for the most part can only be aqcuired at character creation.</p>

    <h4>Reputation</h4>
    <p>Reputation refers to how well known you are and what groups of people think of you in various parts of the world</p>

    <h4>Inventory</h4>
    <p>Items in your pockets, backpack or otherwise stashed somewhere on your body.</p>

    <h4>Equipment</h4>
    <p>Items that are worn and able to be used immediately.</p>

    <h4>Stash</h4>
    <p>Items you own and have stashed away somewhere.</p>

</Section>;


export default CharacterSheetOverview;